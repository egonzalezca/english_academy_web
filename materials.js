(function () {
  "use strict";

  const DB_NAME = "english-bloom-materials";
  const DB_VERSION = 1;
  const BACKUP_FORMAT = "english-bloom-backup";
  const PROGRESS_KEY = "english-bloom-progress-v1";
  const SORT_KEY = "english-bloom-materials-sort";
  const ACCEPTED_EXTENSIONS = /\.(pdf|png|jpe?g|mp4|webm|mov|m4v|avi)$/i;
  const ALLOWED_BOARD_TAGS = new Set(["A", "B", "BLOCKQUOTE", "BR", "DIV", "EM", "H2", "H3", "I", "IMG", "INPUT", "LABEL", "LI", "OL", "P", "S", "SPAN", "STRONG", "U", "UL"]);
  let databasePromise;
  let objectUrls = [];

  function markChanged(source) {
    window.dispatchEvent(new CustomEvent("english-bloom:data-changed", { detail: { source } }));
  }

  function uid() {
    return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
  }

  function openDatabase() {
    if (databasePromise) return databasePromise;
    databasePromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.addEventListener("upgradeneeded", () => {
        const database = request.result;
        if (!database.objectStoreNames.contains("topics")) database.createObjectStore("topics", { keyPath: "id" });
        if (!database.objectStoreNames.contains("files")) {
          const files = database.createObjectStore("files", { keyPath: "id" });
          files.createIndex("topicId", "topicId", { unique: false });
        }
      });
      request.addEventListener("success", () => resolve(request.result));
      request.addEventListener("error", () => reject(request.error));
    });
    return databasePromise;
  }

  function requestResult(request) {
    return new Promise((resolve, reject) => {
      request.addEventListener("success", () => resolve(request.result));
      request.addEventListener("error", () => reject(request.error));
    });
  }

  function transactionComplete(transaction) {
    return new Promise((resolve, reject) => {
      transaction.addEventListener("complete", resolve);
      transaction.addEventListener("abort", () => reject(transaction.error));
      transaction.addEventListener("error", () => reject(transaction.error));
    });
  }

  async function getTopics() {
    const database = await openDatabase();
    return requestResult(database.transaction("topics").objectStore("topics").getAll());
  }

  async function getAllFiles() {
    const database = await openDatabase();
    return requestResult(database.transaction("files").objectStore("files").getAll());
  }

  async function saveTopic(topic) {
    const database = await openDatabase();
    const transaction = database.transaction("topics", "readwrite");
    transaction.objectStore("topics").put(topic);
    await transactionComplete(transaction);
    markChanged("topics");
  }

  async function saveFiles(topicId, files) {
    const database = await openDatabase();
    const transaction = database.transaction("files", "readwrite");
    const store = transaction.objectStore("files");
    files.forEach((file) => store.add({ id: uid(), topicId, name: file.name, type: file.type, size: file.size, blob: file, createdAt: new Date().toISOString() }));
    await transactionComplete(transaction);
    markChanged("files");
  }

  async function deleteFile(id) {
    const database = await openDatabase();
    const transaction = database.transaction("files", "readwrite");
    transaction.objectStore("files").delete(id);
    await transactionComplete(transaction);
    markChanged("files");
  }

  function childTopicIds(topics, rootId) {
    const ids = new Set([rootId]);
    let changed = true;
    while (changed) {
      changed = false;
      topics.forEach((topic) => {
        if (ids.has(topic.parentId) && !ids.has(topic.id)) {
          ids.add(topic.id);
          changed = true;
        }
      });
    }
    return [...ids];
  }

  async function deleteTopicTree(rootId) {
    const topics = await getTopics();
    const ids = childTopicIds(topics, rootId);
    const database = await openDatabase();
    const transaction = database.transaction(["topics", "files"], "readwrite");
    const topicStore = transaction.objectStore("topics");
    const fileIndex = transaction.objectStore("files").index("topicId");
    ids.forEach((id) => {
      topicStore.delete(id);
      const request = fileIndex.openCursor(IDBKeyRange.only(id));
      request.addEventListener("success", () => {
        const cursor = request.result;
        if (!cursor) return;
        cursor.delete();
        cursor.continue();
      });
    });
    await transactionComplete(transaction);
    markChanged("topics");
  }

  function escapeText(value) {
    return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  }

  function ensureNotes(topic) {
    if (Array.isArray(topic.notes) && topic.notes.length) return topic.notes;
    topic.notes = [{ id: uid(), title: "Nota 1", content: topic.board ? escapeText(topic.board).replaceAll("\n", "<br>") : "" }];
    topic.activeNoteId = topic.notes[0].id;
    return topic.notes;
  }

  function sanitizeBoardElement(editor) {
    editor.querySelectorAll("script,style,iframe,object,embed,form,button,video,audio").forEach((element) => element.remove());
    [...editor.querySelectorAll("*")].forEach((element) => {
      if (!ALLOWED_BOARD_TAGS.has(element.tagName)) {
        element.replaceWith(...element.childNodes);
        return;
      }
      const href = element.tagName === "A" ? element.getAttribute("href") : null;
      const src = element.tagName === "IMG" ? element.getAttribute("src") : null;
      const alt = element.tagName === "IMG" ? element.getAttribute("alt") : null;
      const checked = element.tagName === "INPUT" && element.checked;
      const boardClass = element.className === "board-check" ? "board-check" : "";
      [...element.attributes].forEach((attribute) => element.removeAttribute(attribute.name));
      if (element.tagName === "A" && href && /^(https?:|mailto:)/i.test(href)) {
        element.setAttribute("href", href);
        element.setAttribute("target", "_blank");
        element.setAttribute("rel", "noopener");
      }
      if (element.tagName === "IMG" && src && /^data:image\//i.test(src)) {
        element.setAttribute("src", src);
        element.setAttribute("alt", alt || "Imagen pegada en el board");
      }
      if (element.tagName === "INPUT") {
        element.setAttribute("type", "checkbox");
        if (checked) element.setAttribute("checked", "");
      }
      if (boardClass) element.className = boardClass;
    });
    return editor.innerHTML;
  }

  function sanitizeBoardHtml(value) {
    const editor = document.createElement("div");
    editor.innerHTML = String(value || "");
    return sanitizeBoardElement(editor);
  }

  function clearObjectUrls() {
    objectUrls.forEach((url) => URL.revokeObjectURL(url));
    objectUrls = [];
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes < 1024) return `${Math.max(0, bytes || 0)} B`;
    if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)} KB`;
    if (bytes < 1024 ** 3) return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
    return `${(bytes / 1024 ** 3).toFixed(1)} GB`;
  }

  function fileKind(file) {
    if (file.type === "application/pdf" || /\.pdf$/i.test(file.name)) return "pdf";
    if (file.type.startsWith("image/") || /\.(png|jpe?g)$/i.test(file.name)) return "image";
    if (file.type.startsWith("video/") || /\.(mp4|webm|mov|m4v|avi)$/i.test(file.name)) return "video";
    return "file";
  }

  function renderFile(file, escapeHtml) {
    const url = URL.createObjectURL(file.blob);
    objectUrls.push(url);
    const kind = fileKind(file);
    const preview = kind === "image"
      ? `<img src="${url}" alt="Vista previa de ${escapeHtml(file.name)}">`
      : kind === "video"
        ? `<video src="${url}" controls preload="metadata" aria-label="${escapeHtml(file.name)}"></video>`
        : `<div class="material-file-icon" aria-hidden="true">${kind === "pdf" ? "PDF" : "ARCHIVO"}</div>`;
    return `<article class="material-file-card"><div class="material-preview">${preview}</div><div class="material-file-info"><strong title="${escapeHtml(file.name)}">${escapeHtml(file.name)}</strong><span>${formatBytes(file.size)}</span></div><div class="material-file-actions"><a href="${url}" target="_blank" rel="noopener" download="${escapeHtml(file.name)}">${kind === "pdf" ? "Abrir" : "Ver"}</a><button type="button" data-delete-file="${escapeHtml(file.id)}" aria-label="Eliminar ${escapeHtml(file.name)}">Eliminar</button></div></article>`;
  }

  function normalized(value) {
    return String(value || "").toLocaleLowerCase("es").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function topicRows(topics, sortMode) {
    const byId = new Map(topics.map((topic) => [topic.id, topic]));
    const comparator = sortMode === "name" ? (a, b) => a.name.localeCompare(b.name, "es", { sensitivity: "base" }) : (a, b) => String(a.createdAt).localeCompare(String(b.createdAt));
    const visited = new Set();
    const result = [];
    const walk = (parentId, depth) => topics.filter((topic) => (topic.parentId || null) === parentId).sort(comparator).forEach((topic) => {
      if (visited.has(topic.id)) return;
      visited.add(topic.id);
      result.push({ topic, depth });
      walk(topic.id, depth + 1);
    });
    walk(null, 0);
    topics.filter((topic) => !visited.has(topic.id) || (topic.parentId && !byId.has(topic.parentId))).sort(comparator).forEach((topic) => {
      if (!visited.has(topic.id)) { visited.add(topic.id); result.push({ topic, depth: 0 }); walk(topic.id, 1); }
    });
    return result;
  }

  function sidebar(topics, allFiles, selectedId, escapeHtml, sortMode) {
    const fileNames = new Map();
    allFiles.forEach((file) => fileNames.set(file.topicId, `${fileNames.get(file.topicId) || ""} ${file.name}`));
    const rows = topicRows(topics, sortMode);
    return `<aside class="topic-sidebar">
      <form class="topic-create-form" data-topic-form><label for="topic-name">Nueva carpeta</label><div><input id="topic-name" name="name" maxlength="60" placeholder="Topic ${topics.length + 1}"><button type="submit">Crear</button></div></form>
      <div class="topic-tools"><label><span class="sr-only">Buscar carpetas, notas o archivos</span><input type="search" placeholder="Buscar…" data-topic-search></label><label><span class="sr-only">Ordenar carpetas</span><select data-topic-sort><option value="created" ${sortMode === "created" ? "selected" : ""}>Por creación</option><option value="name" ${sortMode === "name" ? "selected" : ""}>Por nombre</option></select></label></div>
      <nav class="topic-list" aria-label="Carpetas de estudio">
        ${rows.length ? rows.map(({ topic, depth }) => {
          const notes = ensureNotes(topic);
          const search = normalized(`${topic.name} ${(topic.tags || []).join(" ")} ${notes.map((note) => `${note.title} ${note.content.replace(/<[^>]+>/g, " ")}`).join(" ")} ${fileNames.get(topic.id) || ""}`);
          const color = /^#[0-9a-f]{6}$/i.test(topic.color || "") ? topic.color : "#0d746f";
          return `<a class="${topic.id === selectedId ? "is-active" : ""}" style="--topic-depth:${Math.min(depth, 4)};--topic-color:${color}" href="#/materials/${topic.id}" data-topic-link data-search="${escapeHtml(search)}"><span aria-hidden="true">📁</span><strong>${escapeHtml(topic.name)}</strong></a>`;
        }).join("") : '<p>Aún no has creado ninguna carpeta.</p>'}
        <p class="topic-search-empty" data-topic-search-empty hidden>No hay coincidencias.</p>
      </nav>
      <div class="storage-meter"><div><span>Espacio local</span><strong data-storage-label>Calculando…</strong></div><progress max="100" value="0" data-storage-progress></progress></div>
      <div class="backup-actions"><button type="button" data-export-backup>Exportar copia</button><label>Importar copia<input type="file" accept=".json,.ebbackup,application/json" data-import-backup></label><small data-backup-status></small></div>
      ${githubSyncPanel(escapeHtml)}
    </aside>`;
  }

  function githubSyncPanel(escapeHtml) {
    const sync = window.ENGLISH_BLOOM_GITHUB_SYNC;
    if (!sync) return "";
    const current = sync.getStatus();
    const config = current.config || { owner: "egonzalezca", repo: "english-bloom-data", branch: "main" };
    if (!current.connected) {
      return `<details class="github-sync" open><summary><span aria-hidden="true">☁</span> Sincronizar con GitHub</summary><p>Guarda temas, boards, archivos y progreso en un repositorio privado.</p><form data-github-connect><label>Usuario<input name="owner" autocomplete="username" required value="${escapeHtml(config.owner || "")}"></label><label>Repositorio<input name="repo" required value="${escapeHtml(config.repo || "")}"></label><label>Rama<input name="branch" required value="${escapeHtml(config.branch || "main")}"></label><label>Token<input name="token" type="password" autocomplete="off" required placeholder="github_pat_…"></label><button type="submit">Conectar</button></form><a class="github-create-link" href="https://github.com/new?name=english-bloom-data&visibility=private" target="_blank" rel="noopener">Crear repositorio privado ↗</a><small>Inicialízalo con README. El token solo permanece en esta pestaña y debe tener permiso Contents: Read and write.</small><p class="github-sync-status" data-github-status role="status"></p></details>`;
    }
    return `<section class="github-sync is-connected"><header><span aria-hidden="true">☁</span><div><strong>${escapeHtml(config.owner)}/${escapeHtml(config.repo)}</strong><small>${current.ready ? "Sincronización automática activa" : "Pendiente de elegir una copia"}</small></div></header><p class="github-sync-status ${current.status === "error" ? "is-error" : ""}" data-github-status role="status">${escapeHtml(current.message || (current.ready ? "Conectado." : "Elige qué copia quieres conservar."))}</p><div class="github-sync-actions"><button type="button" data-github-push>${current.ready ? "Sincronizar ahora" : "Subir este dispositivo"}</button><button type="button" data-github-pull>Descargar GitHub</button></div><button class="github-disconnect" type="button" data-github-disconnect>Desconectar</button><small>Máximo 90 MB por archivo. El token no se guarda de forma permanente.</small></section>`;
  }

  function breadcrumbs(topic, topics, escapeHtml) {
    const byId = new Map(topics.map((item) => [item.id, item]));
    const trail = [];
    let current = topic;
    const visited = new Set();
    while (current && !visited.has(current.id)) { visited.add(current.id); trail.unshift(current); current = byId.get(current.parentId); }
    return `<nav class="topic-breadcrumbs" aria-label="Ruta de carpetas"><a href="#/materials">Mis temas</a>${trail.map((item) => `<span>›</span><a href="#/materials/${item.id}">${escapeHtml(item.name)}</a>`).join("")}</nav>`;
  }

  function topicContent(topic, topics, files, escapeHtml) {
    const notes = ensureNotes(topic);
    const activeNote = notes.find((note) => note.id === topic.activeNoteId) || notes[0];
    topic.activeNoteId = activeNote.id;
    const color = /^#[0-9a-f]{6}$/i.test(topic.color || "") ? topic.color : "#0d746f";
    return `<section class="topic-detail" style="--folder-color:${color}">
      ${breadcrumbs(topic, topics, escapeHtml)}
      <header class="topic-detail-header"><div><p class="eyebrow">CARPETA DE ESTUDIO</p><h2>${escapeHtml(topic.name)}</h2></div><button class="topic-delete" type="button" data-delete-topic>Eliminar carpeta</button></header>
      <div class="topic-management"><form data-topic-settings><label>Nombre<input name="name" maxlength="60" value="${escapeHtml(topic.name)}"></label><label>Color<input name="color" type="color" value="${color}"></label><label>Etiquetas<input name="tags" value="${escapeHtml((topic.tags || []).join(", "))}" placeholder="vocabulario, examen"></label><button type="submit">Guardar cambios</button></form><form data-subtopic-form><label>Nueva subcarpeta<input name="name" maxlength="60" placeholder="Subtema"></label><button type="submit">Crear dentro de ${escapeHtml(topic.name)}</button></form></div>
      <div class="topic-workspace">
        <section class="topic-board" aria-labelledby="topic-board-title"><header><div><span aria-hidden="true">✎</span><h3 id="topic-board-title">Board</h3></div><small data-board-status>Guardado en este navegador</small></header><div class="board-note-tabs" role="tablist">${notes.map((note) => `<button class="${note.id === activeNote.id ? "is-active" : ""}" type="button" role="tab" data-note-id="${note.id}">${escapeHtml(note.title)}</button>`).join("")}<button class="board-add-note" type="button" data-add-note aria-label="Añadir nota">＋</button></div><div class="board-note-heading"><input value="${escapeHtml(activeNote.title)}" maxlength="50" data-note-title aria-label="Título de la nota"><button type="button" data-delete-note ${notes.length === 1 ? "disabled" : ""}>Eliminar nota</button></div><div class="board-toolbar" role="toolbar" aria-label="Formato del board"><button type="button" data-board-command="bold" aria-label="Negrita"><strong>B</strong></button><button type="button" data-board-command="italic" aria-label="Cursiva"><em>I</em></button><button type="button" data-board-command="insertUnorderedList" aria-label="Lista con viñetas">• Lista</button><button type="button" data-board-command="insertOrderedList" aria-label="Lista numerada">1. Lista</button><button type="button" data-board-action="checklist">☐ Tarea</button><button type="button" data-board-action="link">Enlace</button></div><div class="topic-board-editor" contenteditable="true" data-topic-board data-placeholder="Escribe apuntes, pega imágenes o crea tareas…" aria-label="Board de ${escapeHtml(topic.name)}">${sanitizeBoardHtml(activeNote.content)}</div></section>
        <section class="topic-files" aria-labelledby="topic-files-title"><header><div><span aria-hidden="true">↥</span><h3 id="topic-files-title">Archivos</h3></div><small>${files.length} ${files.length === 1 ? "archivo" : "archivos"}</small></header><label class="material-upload" data-upload-zone><input type="file" multiple accept=".pdf,.png,.jpg,.jpeg,video/*" data-material-input><strong>Sube o arrastra archivos aquí</strong><span>PDF, PNG, JPG o vídeo</span></label><p class="material-upload-status" data-upload-status role="status"></p><div class="material-file-grid">${files.length ? files.map((file) => renderFile(file, escapeHtml)).join("") : '<div class="material-files-empty"><span aria-hidden="true">＋</span><p>Esta carpeta todavía no tiene archivos.</p></div>'}</div></section>
      </div>
    </section>`;
  }

  function blobToDataUrl(blob) {
    return new Promise((resolve, reject) => { const reader = new FileReader(); reader.addEventListener("load", () => resolve(reader.result)); reader.addEventListener("error", () => reject(reader.error)); reader.readAsDataURL(blob); });
  }

  async function exportBackup(status) {
    status.textContent = "Preparando la copia…";
    const topics = await getTopics();
    const files = await getAllFiles();
    const serialFiles = await Promise.all(files.map(async (file) => ({ ...file, blob: undefined, data: await blobToDataUrl(file.blob) })));
    let courseProgress = null;
    try { courseProgress = JSON.parse(localStorage.getItem(PROGRESS_KEY)); } catch (_error) { /* La copia continúa sin progreso. */ }
    const payload = { format: BACKUP_FORMAT, version: 1, exportedAt: new Date().toISOString(), topics, files: serialFiles, courseProgress };
    const url = URL.createObjectURL(new Blob([JSON.stringify(payload)], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url; link.download = `english-bloom-${new Date().toISOString().slice(0, 10)}.ebbackup`; link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    status.textContent = "✓ Copia exportada";
  }

  async function importBackup(file) {
    const payload = JSON.parse(await file.text());
    if (payload?.format !== BACKUP_FORMAT || payload.version !== 1 || !Array.isArray(payload.topics) || !Array.isArray(payload.files)) throw new Error("Formato no válido");
    const topicIds = new Set(payload.topics.map((topic) => topic.id));
    const fileIds = new Set(payload.files.map((entry) => entry.id));
    const validTopics = topicIds.size === payload.topics.length && payload.topics.every((topic) => typeof topic.id === "string" && typeof topic.name === "string" && topic.name.length <= 200);
    const validFiles = fileIds.size === payload.files.length && payload.files.every((entry) => typeof entry.id === "string" && topicIds.has(entry.topicId) && typeof entry.data === "string" && entry.data.startsWith("data:"));
    if (!validTopics || !validFiles) throw new Error("Datos no válidos");
    if (!confirm("La importación reemplazará todas tus carpetas, boards y archivos actuales. ¿Continuar?")) return false;
    const restoredFiles = await Promise.all(payload.files.map(async (entry) => ({ ...entry, data: undefined, blob: await (await fetch(entry.data)).blob() })));
    const database = await openDatabase();
    const transaction = database.transaction(["topics", "files"], "readwrite");
    const topicStore = transaction.objectStore("topics");
    const fileStore = transaction.objectStore("files");
    topicStore.clear(); fileStore.clear();
    payload.topics.forEach((topic) => topicStore.put(topic));
    restoredFiles.forEach((entry) => fileStore.put(entry));
    await transactionComplete(transaction);
    if (payload.courseProgress && typeof payload.courseProgress === "object") localStorage.setItem(PROGRESS_KEY, JSON.stringify(payload.courseProgress));
    else localStorage.removeItem(PROGRESS_KEY);
    return true;
  }

  async function exportSyncSnapshot() {
    const [topics, files] = await Promise.all([getTopics(), getAllFiles()]);
    let courseProgress = null;
    try { courseProgress = JSON.parse(localStorage.getItem(PROGRESS_KEY)); } catch (_error) { /* Se sincronizan los materiales sin progreso. */ }
    return { topics, files, courseProgress };
  }

  async function importSyncSnapshot(payload) {
    if (!Array.isArray(payload?.topics) || !Array.isArray(payload?.files)) throw new Error("La copia de GitHub no es válida.");
    const topicIds = new Set(payload.topics.map((topic) => topic.id));
    const validTopics = topicIds.size === payload.topics.length && payload.topics.every((topic) => typeof topic.id === "string" && typeof topic.name === "string" && topic.name.length <= 200);
    const validFiles = payload.files.every((file) => typeof file.id === "string" && topicIds.has(file.topicId) && file.blob instanceof Blob);
    if (!validTopics || !validFiles) throw new Error("La copia de GitHub contiene datos no válidos.");
    const database = await openDatabase();
    const transaction = database.transaction(["topics", "files"], "readwrite");
    const topicStore = transaction.objectStore("topics");
    const fileStore = transaction.objectStore("files");
    topicStore.clear();
    fileStore.clear();
    payload.topics.forEach((topic) => topicStore.put(topic));
    payload.files.forEach((file) => fileStore.put(file));
    await transactionComplete(transaction);
    if (payload.courseProgress && typeof payload.courseProgress === "object") localStorage.setItem(PROGRESS_KEY, JSON.stringify(payload.courseProgress));
    else localStorage.removeItem(PROGRESS_KEY);
  }

  async function updateStorageMeter() {
    if (!navigator.storage?.estimate) return;
    const { usage = 0, quota = 0 } = await navigator.storage.estimate();
    const label = document.querySelector("[data-storage-label]");
    const meter = document.querySelector("[data-storage-progress]");
    if (label) label.textContent = `${formatBytes(usage)} de ${formatBytes(quota)}`;
    if (meter) meter.value = quota ? Math.min(100, usage / quota * 100) : 0;
  }

  async function render({ app, setActiveNav, escapeHtml, topicId = null }) {
    clearObjectUrls();
    setActiveNav("materials");
    document.title = "Mis temas · English Bloom";
    app.innerHTML = '<div class="materials-loading">Abriendo tu espacio de estudio…</div>';
    try {
      const [topics, allFiles] = await Promise.all([getTopics(), getAllFiles()]);
      const topic = topicId ? topics.find((item) => item.id === topicId) : null;
      if (topicId && !topic) { location.hash = "#/materials"; return; }
      const files = topic ? allFiles.filter((file) => file.topicId === topic.id).sort((a, b) => b.createdAt.localeCompare(a.createdAt)) : [];
      const sortMode = localStorage.getItem(SORT_KEY) === "name" ? "name" : "created";
      const cloudConnected = window.ENGLISH_BLOOM_GITHUB_SYNC?.getStatus().connected;
      app.innerHTML = `<section class="materials-shell"><header class="materials-hero"><div><p class="eyebrow">TU BIBLIOTECA PERSONAL</p><h1>Mis temas</h1><p>Crea carpetas y subcarpetas, añade recursos y escribe tus apuntes en boards organizados.</p></div><div class="materials-local-note"><span aria-hidden="true">${cloudConnected ? "☁" : "⌂"}</span><p><strong>${cloudConnected ? "Local + GitHub" : "Almacenamiento local"}</strong><br>${cloudConnected ? "Tus cambios se sincronizan con tu repositorio privado." : "Conecta GitHub para acceder desde cualquier dispositivo."}</p></div></header><div class="materials-layout">${sidebar(topics, allFiles, topic?.id, escapeHtml, sortMode)}<div class="materials-content">${topic ? topicContent(topic, topics, files, escapeHtml) : '<section class="materials-empty"><span aria-hidden="true">📂</span><h2>Crea tu primera carpeta</h2><p>Organiza un tema, guarda sus archivos y utiliza el board para escribir tus apuntes.</p></section>'}</div></div></section>`;

      const createFolder = async (name, parentId = null) => {
        const folder = { id: uid(), name: name.trim() || `Topic ${topics.length + 1}`, parentId, color: "#0d746f", tags: [], notes: [{ id: uid(), title: "Nota 1", content: "" }], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
        folder.activeNoteId = folder.notes[0].id;
        await saveTopic(folder);
        location.hash = `#/materials/${folder.id}`;
      };
      document.querySelector("[data-topic-form]").addEventListener("submit", async (event) => { event.preventDefault(); await createFolder(event.currentTarget.elements.name.value); });
      document.querySelector("[data-topic-sort]").addEventListener("change", (event) => { localStorage.setItem(SORT_KEY, event.target.value); render({ app, setActiveNav, escapeHtml, topicId }); });
      document.querySelector("[data-topic-search]").addEventListener("input", (event) => {
        const term = normalized(event.target.value.trim());
        let visible = 0;
        document.querySelectorAll("[data-topic-link]").forEach((link) => { const show = !term || link.dataset.search.includes(term); link.hidden = !show; if (show) visible += 1; });
        document.querySelector("[data-topic-search-empty]").hidden = visible !== 0;
      });
      const backupStatus = document.querySelector("[data-backup-status]");
      document.querySelector("[data-export-backup]").addEventListener("click", async () => { try { await exportBackup(backupStatus); } catch (_error) { backupStatus.textContent = "No se pudo crear la copia."; } });
      document.querySelector("[data-import-backup]").addEventListener("change", async (event) => {
        if (!event.target.files[0]) return;
        backupStatus.textContent = "Comprobando la copia…";
        try { if (await importBackup(event.target.files[0])) location.reload(); else backupStatus.textContent = "Importación cancelada."; } catch (_error) { backupStatus.textContent = "La copia no es válida o está dañada."; }
      });
      const sync = window.ENGLISH_BLOOM_GITHUB_SYNC;
      const connectForm = document.querySelector("[data-github-connect]");
      if (connectForm) connectForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const status = document.querySelector("[data-github-status]");
        status.textContent = "Comprobando el repositorio…";
        const values = new FormData(event.currentTarget);
        try {
          await sync.connect({ owner: values.get("owner"), repo: values.get("repo"), branch: values.get("branch"), token: values.get("token") });
          await render({ app, setActiveNav, escapeHtml, topicId });
        } catch (error) {
          status.textContent = error.message;
          status.classList.add("is-error");
          event.currentTarget.elements.token.value = "";
        }
      });
      const pushButton = document.querySelector("[data-github-push]");
      if (pushButton) pushButton.addEventListener("click", async () => {
        const current = sync.getStatus();
        if (!current.ready && !confirm("Esto reemplazará la copia guardada en GitHub con los datos de este dispositivo. ¿Continuar?")) return;
        pushButton.disabled = true;
        try { await sync.push({ force: !current.ready }); await render({ app, setActiveNav, escapeHtml, topicId }); } catch (error) { window.dispatchEvent(new CustomEvent("english-bloom:sync-status", { detail: { status: "error", message: error.message } })); pushButton.disabled = false; }
      });
      const pullButton = document.querySelector("[data-github-pull]");
      if (pullButton) pullButton.addEventListener("click", async () => {
        if (!confirm("Se reemplazarán los temas, archivos y el progreso de este dispositivo por la copia de GitHub. ¿Continuar?")) return;
        pullButton.disabled = true;
        try { await sync.pull(); location.reload(); } catch (error) { window.dispatchEvent(new CustomEvent("english-bloom:sync-status", { detail: { status: "error", message: error.message } })); pullButton.disabled = false; }
      });
      const disconnectButton = document.querySelector("[data-github-disconnect]");
      if (disconnectButton) disconnectButton.addEventListener("click", async () => { sync.disconnect(); await render({ app, setActiveNav, escapeHtml, topicId }); });
      updateStorageMeter();
      if (!topic) return;

      document.querySelector("[data-subtopic-form]").addEventListener("submit", async (event) => { event.preventDefault(); await createFolder(event.currentTarget.elements.name.value, topic.id); });
      document.querySelector("[data-topic-settings]").addEventListener("submit", async (event) => {
        event.preventDefault();
        topic.name = event.currentTarget.elements.name.value.trim() || topic.name;
        topic.color = event.currentTarget.elements.color.value;
        topic.tags = event.currentTarget.elements.tags.value.split(",").map((tag) => tag.trim()).filter(Boolean).slice(0, 12);
        topic.updatedAt = new Date().toISOString();
        await saveTopic(topic);
        await render({ app, setActiveNav, escapeHtml, topicId: topic.id });
      });

      const notes = ensureNotes(topic);
      const activeNote = notes.find((note) => note.id === topic.activeNoteId) || notes[0];
      const editor = document.querySelector("[data-topic-board]");
      const noteTitle = document.querySelector("[data-note-title]");
      const boardStatus = document.querySelector("[data-board-status]");
      let saveTimer;
      const saveBoard = async () => {
        window.clearTimeout(saveTimer);
        activeNote.title = noteTitle.value.trim() || "Nota sin título";
        activeNote.content = sanitizeBoardElement(editor);
        topic.updatedAt = new Date().toISOString();
        boardStatus.textContent = "Guardando…";
        try { await saveTopic(topic); boardStatus.textContent = "✓ Guardado"; } catch (_error) { boardStatus.textContent = "No se pudo guardar"; }
      };
      const scheduleSave = () => { boardStatus.textContent = "Guardando…"; window.clearTimeout(saveTimer); saveTimer = window.setTimeout(saveBoard, 350); };
      editor.addEventListener("input", scheduleSave);
      editor.addEventListener("change", (event) => { if (event.target.type === "checkbox") { event.target.toggleAttribute("checked", event.target.checked); scheduleSave(); } });
      editor.addEventListener("blur", saveBoard);
      noteTitle.addEventListener("input", scheduleSave);
      document.querySelectorAll("[data-note-id]").forEach((button) => button.addEventListener("click", async () => { await saveBoard(); topic.activeNoteId = button.dataset.noteId; await saveTopic(topic); await render({ app, setActiveNav, escapeHtml, topicId: topic.id }); }));
      document.querySelector("[data-add-note]").addEventListener("click", async () => { await saveBoard(); const note = { id: uid(), title: `Nota ${notes.length + 1}`, content: "" }; notes.push(note); topic.activeNoteId = note.id; await saveTopic(topic); await render({ app, setActiveNav, escapeHtml, topicId: topic.id }); });
      document.querySelector("[data-delete-note]").addEventListener("click", async () => { if (notes.length === 1 || !confirm(`¿Eliminar la nota “${activeNote.title}”?`)) return; topic.notes = notes.filter((note) => note.id !== activeNote.id); topic.activeNoteId = topic.notes[0].id; await saveTopic(topic); await render({ app, setActiveNav, escapeHtml, topicId: topic.id }); });
      document.querySelectorAll("[data-board-command]").forEach((button) => { button.addEventListener("mousedown", (event) => event.preventDefault()); button.addEventListener("click", () => { editor.focus(); document.execCommand(button.dataset.boardCommand, false); scheduleSave(); }); });
      document.querySelectorAll("[data-board-action]").forEach((button) => {
        button.addEventListener("mousedown", (event) => event.preventDefault());
        button.addEventListener("click", () => {
          editor.focus();
          if (button.dataset.boardAction === "checklist") document.execCommand("insertHTML", false, '<label class="board-check"><input type="checkbox"> <span>Nueva tarea</span></label><div><br></div>');
          if (button.dataset.boardAction === "link") { const href = prompt("Dirección del enlace (https://…)"); if (href && /^https?:\/\//i.test(href)) document.execCommand("createLink", false, href); }
          scheduleSave();
        });
      });
      editor.addEventListener("paste", (event) => {
        const image = [...(event.clipboardData?.items || [])].find((item) => item.type.startsWith("image/"));
        if (!image) return;
        event.preventDefault();
        const reader = new FileReader();
        reader.addEventListener("load", () => { editor.focus(); document.execCommand("insertImage", false, reader.result); scheduleSave(); });
        reader.readAsDataURL(image.getAsFile());
      });

      const uploadStatus = document.querySelector("[data-upload-status]");
      const uploadZone = document.querySelector("[data-upload-zone]");
      const uploadInput = document.querySelector("[data-material-input]");
      const upload = async (selectedFiles) => {
        const accepted = [...selectedFiles].filter((file) => file.type === "application/pdf" || file.type.startsWith("image/") || file.type.startsWith("video/") || ACCEPTED_EXTENSIONS.test(file.name));
        if (!accepted.length) { uploadStatus.textContent = "Selecciona un PDF, una imagen o un vídeo compatible."; return; }
        uploadStatus.textContent = `Guardando ${accepted.length} ${accepted.length === 1 ? "archivo" : "archivos"}…`;
        try { await saveBoard(); await saveFiles(topic.id, accepted); await render({ app, setActiveNav, escapeHtml, topicId: topic.id }); } catch (_error) { uploadStatus.textContent = "No hay espacio suficiente o el navegador no pudo guardar los archivos."; }
      };
      uploadInput.addEventListener("change", () => upload(uploadInput.files));
      ["dragenter", "dragover"].forEach((name) => uploadZone.addEventListener(name, (event) => { event.preventDefault(); uploadZone.classList.add("is-dragging"); }));
      ["dragleave", "drop"].forEach((name) => uploadZone.addEventListener(name, (event) => { event.preventDefault(); uploadZone.classList.remove("is-dragging"); }));
      uploadZone.addEventListener("drop", (event) => upload(event.dataTransfer.files));
      document.querySelectorAll("[data-delete-file]").forEach((button) => button.addEventListener("click", async () => { if (!confirm("¿Eliminar este archivo de la carpeta?")) return; await deleteFile(button.dataset.deleteFile); await render({ app, setActiveNav, escapeHtml, topicId: topic.id }); }));
      document.querySelector("[data-delete-topic]").addEventListener("click", async () => { if (!confirm(`¿Eliminar la carpeta “${topic.name}”, sus subcarpetas y todos sus archivos?`)) return; await deleteTopicTree(topic.id); location.hash = "#/materials"; });
    } catch (_error) {
      app.innerHTML = '<section class="materials-error"><h1>No se pudo abrir Mis temas</h1><p>Este navegador no permite utilizar el almacenamiento local de archivos.</p></section>';
    }
  }

  window.addEventListener("english-bloom:sync-status", (event) => {
    document.querySelectorAll("[data-github-status]").forEach((element) => {
      element.textContent = event.detail.message;
      element.classList.toggle("is-error", event.detail.status === "error");
    });
  });
  window.ENGLISH_BLOOM_GITHUB_SYNC?.registerAdapter({ exportSnapshot: exportSyncSnapshot, importSnapshot: importSyncSnapshot });
  window.ENGLISH_BLOOM_MATERIALS = { render };
})();
