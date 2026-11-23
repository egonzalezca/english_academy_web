// Service worker de English Bloom: la app funciona sin conexión una vez
// visitada. Estrategia stale-while-revalidate para los recursos propios; las
// peticiones a otros dominios (API de GitHub) nunca se almacenan.
const CACHE = "english-bloom-v2";
const SHELL = [
  "./", "index.html", "styles.css", "guides.css", "app.js", "materials.js", "github-sync.js",
  "guides/exam-format.js", "guides/b1.js", "guides/b2.js", "guides/c1.js", "guides/vocabulary.js", "guides/exam.js",
  "manifest.webmanifest", "icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.open(CACHE).then(async (cache) => {
    const cached = await cache.match(request, { ignoreSearch: true });
    const network = fetch(request).then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    }).catch(() => cached);
    return cached || network;
  }));
});
