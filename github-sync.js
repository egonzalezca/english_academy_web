(function () {
  "use strict";

  const CONFIG_KEY = "english-bloom-github-sync-v1";
  const TOKEN_KEY = "english-bloom-github-token";
  const MANIFEST_PATH = "english-bloom/manifest.json";
  const REMOTE_FORMAT = "english-bloom-github";
  const MAX_FILE_SIZE = 90 * 1024 * 1024;
  let adapter = null;
  let ready = false;
  let syncTimer = null;
  let running = false;
  let queued = false;
  let state = { status: "idle", message: "" };

  function readConfig() {
    try { return JSON.parse(localStorage.getItem(CONFIG_KEY)) || null; } catch (_error) { return null; }
  }

  function saveConfig(config) {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }

  function token() {
    return sessionStorage.getItem(TOKEN_KEY) || "";
  }

  function emit(status, message) {
    state = { status, message };
    window.dispatchEvent(new CustomEvent("english-bloom:sync-status", { detail: state }));
  }

  function apiPath(config, path = "") {
    const repository = `${encodeURIComponent(config.owner)}/${encodeURIComponent(config.repo)}`;
    const encodedPath = path.split("/").map(encodeURIComponent).join("/");
    return `https://api.github.com/repos/${repository}${encodedPath ? `/contents/${encodedPath}` : ""}`;
  }

  async function request(url, options = {}, allowMissing = false) {
    const response = await fetch(url, {
      ...options,
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token()}`,
        "X-GitHub-Api-Version": "2022-11-28",
        ...options.headers
      }
    });
    if (allowMissing && response.status === 404) return null;
    if (!response.ok) {
      let detail = "";
      try { detail = (await response.json()).message || ""; } catch (_error) { /* Sin detalle adicional. */ }
      if (response.status === 401) throw new Error("El token no es válido o ha caducado.");
      if (response.status === 403) throw new Error("El token no tiene permiso de lectura y escritura en este repositorio.");
      if (response.status === 404) throw new Error("No se encontró el repositorio o el token no puede acceder a él.");
      if (response.status === 409) throw new Error("GitHub ha cambiado mientras se sincronizaba. Descarga los cambios y vuelve a intentarlo.");
      throw new Error(detail || `GitHub respondió con el error ${response.status}.`);
    }
    return response.status === 204 ? null : response.json();
  }

  function bytesToBase64(bytes) {
    let binary = "";
    const chunkSize = 32768;
    for (let offset = 0; offset < bytes.length; offset += chunkSize) binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
    return btoa(binary);
  }

  function textToBase64(value) {
    return bytesToBase64(new TextEncoder().encode(value));
  }

  function base64ToText(value) {
    const binary = atob(value.replace(/\s/g, ""));
    return new TextDecoder().decode(Uint8Array.from(binary, (character) => character.charCodeAt(0)));
  }

  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve(String(reader.result).split(",")[1] || ""));
      reader.addEventListener("error", () => reject(reader.error));
      reader.readAsDataURL(blob);
    });
  }

  async function getContent(config, path, allowMissing = false) {
    const result = await request(`${apiPath(config, path)}?ref=${encodeURIComponent(config.branch)}`, {}, allowMissing);
    if (!result) return null;
    if (result.type !== "file" || typeof result.content !== "string") throw new Error(`El recurso ${path} no es un archivo válido.`);
    return result;
  }

  async function getBlob(config, path) {
    const response = await fetch(`${apiPath(config, path)}?ref=${encodeURIComponent(config.branch)}`, {
      headers: { Accept: "application/vnd.github.raw+json", Authorization: `Bearer ${token()}`, "X-GitHub-Api-Version": "2022-11-28" }
    });
    if (!response.ok) throw new Error(`No se pudo descargar ${path} desde GitHub.`);
    return response.blob();
  }

  async function putContent(config, path, content, message, sha) {
    return request(apiPath(config, path), {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, content, branch: config.branch, ...(sha ? { sha } : {}) })
    });
  }

  async function deleteContent(config, path, sha) {
    return request(apiPath(config, path), {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: `Eliminar ${path}`, sha, branch: config.branch })
    });
  }

  function safeFileName(file) {
    const id = String(file.id || "archivo").replace(/[^a-z0-9-]+/gi, "-").slice(0, 80) || "archivo";
    const name = String(file.name || "archivo").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9._-]+/gi, "-").replace(/^-+|-+$/g, "").slice(-90) || "archivo";
    return `${id}-${name}`;
  }

  async function remoteManifest(config) {
    const file = await getContent(config, MANIFEST_PATH, true);
    if (!file) return null;
    const manifest = JSON.parse(base64ToText(file.content));
    const topicIds = new Set(Array.isArray(manifest?.topics) ? manifest.topics.map((topic) => topic.id) : []);
    const fileIds = new Set(Array.isArray(manifest?.files) ? manifest.files.map((entry) => entry.id) : []);
    const validTopics = Array.isArray(manifest?.topics) && manifest.topics.length <= 5000 && topicIds.size === manifest.topics.length && manifest.topics.every((topic) => typeof topic.id === "string" && topic.id.length <= 200 && typeof topic.name === "string" && topic.name.length <= 200);
    const validFiles = Array.isArray(manifest?.files) && manifest.files.length <= 2000 && fileIds.size === manifest.files.length && manifest.files.every((entry) => typeof entry.id === "string" && topicIds.has(entry.topicId) && typeof entry.name === "string" && entry.name.length <= 255 && Number.isFinite(entry.size) && entry.size >= 0 && entry.size <= MAX_FILE_SIZE && /^english-bloom\/files\/[a-z0-9._-]+$/i.test(entry.path || ""));
    if (manifest?.format !== REMOTE_FORMAT || manifest.version !== 1 || !validTopics || !validFiles) throw new Error("La copia de GitHub tiene un formato incompatible.");
    return { sha: file.sha, manifest };
  }

  async function connect(credentials) {
    const previous = readConfig();
    const owner = credentials.owner.trim();
    const repo = credentials.repo.trim();
    const branch = credentials.branch.trim() || "main";
    const sameRepository = previous && previous.owner === owner && previous.repo === repo && previous.branch === branch;
    const config = { owner, repo, branch, lastManifestSha: sameRepository ? previous.lastManifestSha : null };
    if (!config.owner || !config.repo || !credentials.token.trim()) throw new Error("Completa usuario, repositorio y token.");
    sessionStorage.setItem(TOKEN_KEY, credentials.token.trim());
    try {
      const repository = await request(apiPath(config));
      if (!repository.private) throw new Error("El repositorio debe ser privado para proteger tus materiales y apuntes.");
      const remote = await remoteManifest(config);
      ready = Boolean(remote && config.lastManifestSha === remote.sha);
      saveConfig(config);
      emit(ready ? "synced" : "choice", remote ? (ready ? "Conectado y sincronizado." : "Hay datos en GitHub. Elige subir o descargar.") : "Repositorio conectado. Preparando la primera copia…");
      if (!remote) await push({ force: true });
      return { hasRemote: Boolean(remote), ready };
    } catch (error) {
      sessionStorage.removeItem(TOKEN_KEY);
      ready = false;
      throw error;
    }
  }

  async function push({ force = false } = {}) {
    const config = readConfig();
    if (!adapter || !config || !token()) throw new Error("Conecta primero tu repositorio de GitHub.");
    if (running) { queued = true; return; }
    running = true;
    emit("syncing", "Guardando en GitHub…");
    try {
      const snapshot = await adapter.exportSnapshot();
      const remote = await remoteManifest(config);
      if (!force && remote && (!config.lastManifestSha || remote.sha !== config.lastManifestSha)) {
        ready = false;
        throw new Error("Hay cambios nuevos en GitHub. Descárgalos antes de continuar o elige «Subir este dispositivo» para reemplazarlos.");
      }
      const remoteFiles = new Map((remote?.manifest.files || []).map((file) => [file.id, file]));
      const files = [];
      for (const file of snapshot.files) {
        if (file.blob.size > MAX_FILE_SIZE) throw new Error(`${file.name} supera el límite de sincronización de 90 MB.`);
        const previous = remoteFiles.get(file.id);
        if (previous && previous.name === file.name && previous.size === file.size && previous.sha) {
          files.push(previous);
          remoteFiles.delete(file.id);
          continue;
        }
        const path = `english-bloom/files/${safeFileName(file)}`;
        const existing = await getContent(config, path, true);
        const uploaded = await putContent(config, path, await blobToBase64(file.blob), `Guardar ${file.name}`, existing?.sha);
        files.push({ id: file.id, topicId: file.topicId, name: file.name, type: file.type, size: file.size, createdAt: file.createdAt, path, sha: uploaded.content.sha });
        remoteFiles.delete(file.id);
        if (previous?.path && previous.path !== path) {
          const oldFile = await getContent(config, previous.path, true);
          if (oldFile) await deleteContent(config, previous.path, oldFile.sha);
        }
      }
      for (const stale of remoteFiles.values()) {
        if (!stale.path) continue;
        const oldFile = await getContent(config, stale.path, true);
        if (oldFile) await deleteContent(config, stale.path, oldFile.sha);
      }
      const manifest = { format: REMOTE_FORMAT, version: 1, updatedAt: new Date().toISOString(), topics: snapshot.topics, files, courseProgress: snapshot.courseProgress };
      const saved = await putContent(config, MANIFEST_PATH, textToBase64(JSON.stringify(manifest)), "Actualizar datos de English Bloom", remote?.sha);
      config.lastManifestSha = saved.content.sha;
      saveConfig(config);
      ready = true;
      emit("synced", `Sincronizado a las ${new Date().toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" })}.`);
    } catch (error) {
      emit("error", error.message);
      throw error;
    } finally {
      running = false;
      if (queued) { queued = false; schedule(); }
    }
  }

  async function pull() {
    const config = readConfig();
    if (!adapter || !config || !token()) throw new Error("Conecta primero tu repositorio de GitHub.");
    emit("syncing", "Descargando desde GitHub…");
    try {
      const remote = await remoteManifest(config);
      if (!remote) throw new Error("Todavía no hay una copia de English Bloom en este repositorio.");
      const files = [];
      for (const entry of remote.manifest.files) {
        files.push({ ...entry, path: undefined, sha: undefined, blob: await getBlob(config, entry.path) });
      }
      await adapter.importSnapshot({ topics: remote.manifest.topics, files, courseProgress: remote.manifest.courseProgress });
      config.lastManifestSha = remote.sha;
      saveConfig(config);
      ready = true;
      emit("synced", "Datos descargados correctamente.");
    } catch (error) {
      emit("error", error.message);
      throw error;
    }
  }

  function schedule() {
    if (!ready || !adapter || !readConfig() || !token()) return;
    window.clearTimeout(syncTimer);
    syncTimer = window.setTimeout(() => push().catch((error) => emit("error", error.message)), 1800);
  }

  function disconnect() {
    sessionStorage.removeItem(TOKEN_KEY);
    ready = false;
    window.clearTimeout(syncTimer);
    emit("idle", "Desconectado. Los datos locales se conservan.");
  }

  function registerAdapter(value) {
    adapter = value;
  }

  function getStatus() {
    const config = readConfig();
    return { connected: Boolean(config && token()), ready, config, ...state };
  }

  ready = Boolean(token() && readConfig()?.lastManifestSha);
  if (ready) state = { status: "synced", message: "Conectado y listo para sincronizar." };
  window.addEventListener("english-bloom:data-changed", schedule);
  window.addEventListener("online", schedule);
  window.ENGLISH_BLOOM_GITHUB_SYNC = { connect, disconnect, getStatus, pull, push, registerAdapter };
})();
