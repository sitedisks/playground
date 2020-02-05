console.log('sw.js loaded!');

var cacheStorageKey1 = 'minimal-pwa-peter';
var cacheStorageKey2 = 'minimal-pwa-peter-2';

var cacheList = [
    '/',
    'index.html',
    'main.css',
    'e.png'
]

self.addEventListener('install', e => {
    e.waitUntil(
        // caches is the global object of Service Worker
        caches.open(cacheStorageKey2)
            .then(cache => cache.addAll(cacheList))
            .then(() => self.skipWaiting())
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            if (response != null) {
                return response;
            }
            return fetch(e.request.url);
        })
    )
})

self.addEventListener('activate', function (e) {
    e.waitUntil(
        Promise.all(
            caches.keys().then(keyList => {
                return keyList.map(key => {
                    if (key !== cacheStorageKey1) {
                        return caches.delete(key);
                    }
                }) 
            })
        ).then(() => {
            return self.ClientRectList.claim()
        })
    )
})