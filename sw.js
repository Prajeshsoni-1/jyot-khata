/* Jyot Khata service worker — lets the app open offline.
   Strategy: network first and always revalidated (so updates arrive on the next open), cache as the offline fallback. */
const CACHE = 'jyot-khata-v3';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/logo.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(
    // 'no-cache' = always ask the server if the file changed (GitHub Pages otherwise lets browsers reuse a copy for 10 min)
    fetch(r, { cache: 'no-cache' }).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(r, copy)); }
      return res;
    }).catch(() => caches.match(r).then(m => m || caches.match('index.html')))
  );
});
