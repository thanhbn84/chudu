'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2e0cd96319656cb5f3a7b5456ab98c61",
"assets/AssetManifest.bin.json": "1bbc79f2b96f63491c2a2e226e29c4c4",
"assets/AssetManifest.json": "c38ab862ccb8a1a9158546644794c81c",
"assets/assets/data/courses.json": "e44219745223e7ea763dbd671a1a69b9",
"assets/assets/data/exams/hsk1.json": "d21eea96aefe8756c173eccf9214a75e",
"assets/assets/data/exams/hsk2.json": "a448469e8475af75df110b3f95b5a2d0",
"assets/assets/data/exams/hsk3.json": "650bcd54a6e750c49a13c7193f0c0aaf",
"assets/assets/data/exams/hsk4.json": "efcfdeea5b69e045e04092c2ecad3243",
"assets/assets/data/exams/hsk5.json": "df7713bdc6a76b73883a1e8619d1d4c9",
"assets/assets/data/exams/hsk6.json": "70da19fe08228abf336a197f6d4ee42e",
"assets/assets/data/exams/hsk7.json": "89664be4316d44accdc912e4eb073367",
"assets/assets/data/exams/hsk8.json": "7513f975ca56a837f11e3ea4eece85cc",
"assets/assets/data/exams/hsk9.json": "9278622f134c0f305151ff0d92b2203c",
"assets/assets/data/passages/hsk1.json": "802bbc32750852e5667725a55c858516",
"assets/assets/data/passages/hsk2.json": "f377432537ef3202d326add3194622a7",
"assets/assets/data/passages/hsk3.json": "9b1cb02848c7793ec8096142c11a4c0c",
"assets/assets/data/passages/hsk4.json": "ae44083963897d7229c219c358c77851",
"assets/assets/data/passages/hsk5.json": "8df7cd814f295a74faf9e66bc27f7b16",
"assets/assets/data/passages/hsk6.json": "d4c9644417184c22eec8ea7f2e5ee92b",
"assets/assets/data/passages/hsk7.json": "1756dcd9d82d98cb43eea6a9d0429bec",
"assets/assets/data/passages/hsk8.json": "8a1f861605fb1f5d062c2d9b4002f761",
"assets/assets/data/passages/hsk9.json": "f7d1b8a09c1f33b8091a8f419570f52e",
"assets/assets/data/vocab/hsk1.json": "33749d93ae5d4b994145d9bd4db7f26a",
"assets/assets/data/vocab/hsk2.json": "226af801917a696736369b8b68448fe4",
"assets/assets/data/vocab/hsk3.json": "273513f3d01bee6d54c0777ea09c89ef",
"assets/assets/data/vocab/hsk4.json": "a775b21c6a3fa578fab23b11696df58e",
"assets/assets/data/vocab/hsk5.json": "6ace7c8b1b035a36374a176de0807919",
"assets/assets/data/vocab/hsk6.json": "b6b4b1b3c90aa710b25d617f53776df0",
"assets/assets/data/vocab/hsk7.json": "4eb56e4b390c2a16f10ab47fae8b077c",
"assets/assets/data/vocab/hsk8.json": "b6b8bc2ceea4dbb34c94223fc1df31a5",
"assets/assets/data/vocab/hsk9.json": "8c0e8de8fb9c09fe68e47b00fea80d8b",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "a8afd5574773c3ecd341c985a1c4bf65",
"assets/NOTICES": "4b9a0bf4f78fdf4475e1f0c0e6e61d86",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "358856a951ae3bcad01ddd09e2f907ee",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "45aa4ddb2eb5b3cc577e801614e2468a",
"icons/Icon-192.png": "6d723743c66f4488325d98b792a999ec",
"icons/Icon-512.png": "11147ce6dbe7c63926f5b00de6765903",
"icons/Icon-maskable-192.png": "94e44a4ea19b319638ee280585748f1e",
"icons/Icon-maskable-512.png": "9c0e0e72e24aa1d5c1211d687e3c26bd",
"index.html": "3758a4bf218ccb84c99e78f91cbcaaab",
"/": "3758a4bf218ccb84c99e78f91cbcaaab",
"main.dart.js": "02a2f83f3324f1d64a788cf00bc170c8",
"manifest.json": "1b84b6921cb9129b272686ea5bcf496d",
"version.json": "62f04302c378db28bcdf80d9ef37897c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
