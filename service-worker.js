/* HeartBeat Studio — Service Worker v5 */
'use strict';

const CACHE = 'hbs-v9';
const ASSETS = [
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];
/* NOTE: index.html is intentionally NOT cached.
   It is always fetched fresh so new features appear immediately. */

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if(e.request.method !== 'GET') return;
  if(!e.request.url.startsWith(self.location.origin)) return;

  /* Always fetch index.html from network — never serve from cache */
  const url = new URL(e.request.url);
  if(url.pathname === '/' || url.pathname.endsWith('index.html')){
    e.respondWith(fetch(e.request));
    return;
  }

  /* Cache-first for static assets (icons, manifest) */
  e.respondWith(
    caches.match(e.request).then(cached => {
      if(cached) return cached;
      return fetch(e.request).then(res => {
        if(res && res.status === 200){
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
