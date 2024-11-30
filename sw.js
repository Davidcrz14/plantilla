const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/servicios.png',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/aos@2.3.1/dist/aos.css',
    'https://unpkg.com/aos@2.3.1/dist/aos.js',
    'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'

];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
