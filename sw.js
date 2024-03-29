var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
	'/pwa_test2/',
	'/pwa_test2/css/style.css',
	'/pwa_test2/css/grid-metro.css',


];
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then(function(cache) {
				return cache.addAll(urlsToCache);
			})
	);
});
self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function(response) {
				return response ? response : fetch(event.request);
			})
	);
});
