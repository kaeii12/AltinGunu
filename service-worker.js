// service-worker.js

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('altin-gun-dagitim-app-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon.png',
        '/styles.css',
        '/script.js'
        // Buraya uygulamanızda kullandığınız diğer dosyaları da ekleyebilirsiniz.
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
