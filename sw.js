/* Tempo — mise en cache pour fonctionner hors connexion.
   À chaque mise à jour, augmenter CACHE_NAME pour que les téléphones reprennent les nouveaux fichiers. */
const CACHE_NAME = 'tempo-v1.2';
const FICHIERS = ['./', './index.html', './manifest.webmanifest',
  './icones/icon-192.png', './icones/icon-512.png', './icones/apple-touch-icon.png', './icones/favicon-32.png',
  './polices/fraunces-latin-600-normal.woff2', './polices/fraunces-latin-700-normal.woff2',
  './polices/atkinson-hyperlegible-latin-400-normal.woff2', './polices/atkinson-hyperlegible-latin-700-normal.woff2'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(FICHIERS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((cles) => Promise.all(cles.filter((k) => k.startsWith('tempo-') && k !== CACHE_NAME).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  // La page : d'abord le réseau (pour avoir la dernière version), sinon la copie gardée.
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-cache' }).then((r) => {
      const copie = r.clone(); caches.open(CACHE_NAME).then((c) => c.put('./index.html', copie)); return r;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
