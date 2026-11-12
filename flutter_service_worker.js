'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4eb50c9100c5b0ef3563cfd48e45a65f",
"assets/AssetManifest.bin.json": "600bcb6f972a1341a889c5ef58aad039",
"assets/AssetManifest.json": "0f6951ac3187eb7a75bc321b36e56a25",
"assets/assets/data/en/courses.json": "d79a1f2990d01ab6097aab9bdc2ce35d",
"assets/assets/data/en/exams/ielts1.json": "0e4b97ef73af9ba5a4e5eb46ee95a6d0",
"assets/assets/data/en/exams/ielts2.json": "f57658960d184c303a36186c7a47a972",
"assets/assets/data/en/exams/ielts3.json": "c5d8e1116d0d261a817f70e3d40524f6",
"assets/assets/data/en/exams/ielts4.json": "76d5759606fdc597ea0ca73ce546340c",
"assets/assets/data/en/exams/ielts5.json": "5866ef37e3798bcc3a47227b5dfb2d92",
"assets/assets/data/en/exams/ielts6.json": "c7c1a3e83f212bcb83aac5ffba2348d6",
"assets/assets/data/en/exams/ielts7.json": "d60df56447487c039e667caaa52864b6",
"assets/assets/data/en/passages/ielts1.json": "52f5ee61ef14077de8e4a051866e624f",
"assets/assets/data/en/passages/ielts2.json": "c8118adde5801c1bc148f5820c01b3e2",
"assets/assets/data/en/passages/ielts3.json": "e99687bde413d79a5d51044f0d516cd2",
"assets/assets/data/en/passages/ielts4.json": "5c12988e6bf07932abcb1c30653f756c",
"assets/assets/data/en/passages/ielts5.json": "32b808b8a0c5900d43475655e596764f",
"assets/assets/data/en/passages/ielts6.json": "5ff41153d2c8a4b7225e30aa559c62cb",
"assets/assets/data/en/passages/ielts7.json": "9886a80977f78864552217c8a7fa6bba",
"assets/assets/data/en/vocab/ielts1.json": "83c3327e6d72dbc82a29009d856816b8",
"assets/assets/data/en/vocab/ielts2.json": "7c2a6de73b586e00ecd4c536a4ded854",
"assets/assets/data/en/vocab/ielts3.json": "9ec816b7057617010b991a4219030bfd",
"assets/assets/data/en/vocab/ielts4.json": "475474edf939424cce979e7bf5383b07",
"assets/assets/data/en/vocab/ielts5.json": "f6c44651be7a282239c20bd10ef93401",
"assets/assets/data/en/vocab/ielts6.json": "68ed04a3ea2289c939f5b3f45a808f26",
"assets/assets/data/en/vocab/ielts7.json": "bc0b919ea553770b1b30eff92cf652ea",
"assets/assets/data/ja/courses.json": "0fa2e3e51c1c82c2a10950712ca12f71",
"assets/assets/data/ja/exams/jlpt1.json": "670297aa11437ce86e9c71518fa09280",
"assets/assets/data/ja/exams/jlpt2.json": "cfd0baf9451b0b3d03bdc4d16c3c22d3",
"assets/assets/data/ja/exams/jlpt3.json": "4c0dcb323ba2d44ddb0b100d8b6f153f",
"assets/assets/data/ja/exams/jlpt4.json": "384d370a4a8af894f41d9775ba466339",
"assets/assets/data/ja/exams/jlpt5.json": "aaa0091ebea066e04049f015dd84bd7b",
"assets/assets/data/ja/kana_strokes.json": "c7cb1ec1137444eaafd15f476809b11e",
"assets/assets/data/ja/passages/jlpt1.json": "3209a27f74112733e06653bf810e3542",
"assets/assets/data/ja/passages/jlpt2.json": "70ce79a9b9b9b929eb40428f075340f0",
"assets/assets/data/ja/passages/jlpt3.json": "65e5ac9ddb14ff03fb527a5ac07af111",
"assets/assets/data/ja/passages/jlpt4.json": "88dfbc5d0e3d379fb9ce94cab779305e",
"assets/assets/data/ja/passages/jlpt5.json": "0f80e0e83cc08ee787b051f916b26117",
"assets/assets/data/ja/vocab/jlpt1.json": "5dc29e5d486d3f8656d05d600ec506b4",
"assets/assets/data/ja/vocab/jlpt2.json": "01f4b19d504fc9166c31866a44e88c01",
"assets/assets/data/ja/vocab/jlpt3.json": "bb607940dea31536ae73d925e9b070c0",
"assets/assets/data/ja/vocab/jlpt4.json": "eaf9114182e029e87761e2ad48dec182",
"assets/assets/data/ja/vocab/jlpt5.json": "ddb0e67c814288e839111642b357fcd0",
"assets/assets/data/ko/courses.json": "45c6ad76d142052632d8c938bb02b682",
"assets/assets/data/ko/exams/topik1.json": "0b7b454f8f323f96ccb812ba2c3624d2",
"assets/assets/data/ko/exams/topik2.json": "0f18517082ca8801d9a7cea4a180ba6c",
"assets/assets/data/ko/exams/topik3.json": "7571467f2da0d7b2ac980e952b6964dc",
"assets/assets/data/ko/passages/topik1.json": "5962cf2a0cc84bd178c558adaf0a33ea",
"assets/assets/data/ko/passages/topik2.json": "70ef3ed60dc023a2ef04876c1c18fe9d",
"assets/assets/data/ko/passages/topik3.json": "0da897006725fcc1ea4cf09eb33a0df7",
"assets/assets/data/ko/vocab/topik1.json": "152e544403c3a8f5181a506e6ea71b24",
"assets/assets/data/ko/vocab/topik2.json": "12257fa6c1701515ef9830c9ee6daee7",
"assets/assets/data/ko/vocab/topik3.json": "b771e45d9988c0a711d1e8a41f2ca210",
"assets/assets/data/zh/courses.json": "e44219745223e7ea763dbd671a1a69b9",
"assets/assets/data/zh/exams/hsk1.json": "d21eea96aefe8756c173eccf9214a75e",
"assets/assets/data/zh/exams/hsk2.json": "a448469e8475af75df110b3f95b5a2d0",
"assets/assets/data/zh/exams/hsk3.json": "650bcd54a6e750c49a13c7193f0c0aaf",
"assets/assets/data/zh/exams/hsk4.json": "efcfdeea5b69e045e04092c2ecad3243",
"assets/assets/data/zh/exams/hsk5.json": "df7713bdc6a76b73883a1e8619d1d4c9",
"assets/assets/data/zh/exams/hsk6.json": "70da19fe08228abf336a197f6d4ee42e",
"assets/assets/data/zh/exams/hsk7.json": "89664be4316d44accdc912e4eb073367",
"assets/assets/data/zh/exams/hsk8.json": "7513f975ca56a837f11e3ea4eece85cc",
"assets/assets/data/zh/exams/hsk9.json": "9278622f134c0f305151ff0d92b2203c",
"assets/assets/data/zh/passages/hsk1.json": "802bbc32750852e5667725a55c858516",
"assets/assets/data/zh/passages/hsk2.json": "f377432537ef3202d326add3194622a7",
"assets/assets/data/zh/passages/hsk3.json": "9b1cb02848c7793ec8096142c11a4c0c",
"assets/assets/data/zh/passages/hsk4.json": "ae44083963897d7229c219c358c77851",
"assets/assets/data/zh/passages/hsk5.json": "8df7cd814f295a74faf9e66bc27f7b16",
"assets/assets/data/zh/passages/hsk6.json": "d4c9644417184c22eec8ea7f2e5ee92b",
"assets/assets/data/zh/passages/hsk7.json": "1756dcd9d82d98cb43eea6a9d0429bec",
"assets/assets/data/zh/passages/hsk8.json": "8a1f861605fb1f5d062c2d9b4002f761",
"assets/assets/data/zh/passages/hsk9.json": "f7d1b8a09c1f33b8091a8f419570f52e",
"assets/assets/data/zh/vocab/hsk1.json": "33749d93ae5d4b994145d9bd4db7f26a",
"assets/assets/data/zh/vocab/hsk2.json": "226af801917a696736369b8b68448fe4",
"assets/assets/data/zh/vocab/hsk3.json": "273513f3d01bee6d54c0777ea09c89ef",
"assets/assets/data/zh/vocab/hsk4.json": "a775b21c6a3fa578fab23b11696df58e",
"assets/assets/data/zh/vocab/hsk5.json": "6ace7c8b1b035a36374a176de0807919",
"assets/assets/data/zh/vocab/hsk6.json": "b6b4b1b3c90aa710b25d617f53776df0",
"assets/assets/data/zh/vocab/hsk7.json": "4eb56e4b390c2a16f10ab47fae8b077c",
"assets/assets/data/zh/vocab/hsk8.json": "b6b8bc2ceea4dbb34c94223fc1df31a5",
"assets/assets/data/zh/vocab/hsk9.json": "8c0e8de8fb9c09fe68e47b00fea80d8b",
"assets/assets/sounds/correct.wav": "b41990cf8f8950acac4bea24ca0fea1a",
"assets/assets/sounds/finish.wav": "a001d9e861b646a015e794721b158198",
"assets/assets/sounds/wrong.wav": "56e0ab3ae35726c6ba03f2ad8017f690",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "710cde8cdcfdd1b265907f00e2b0985e",
"assets/NOTICES": "c7fed623a177060fd4e7c08f3d6fc28c",
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
"favicon.png": "4b11d07cad44b0e96e5c3426a2d9443b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "854fc93c7262f9e101dd6753039839ec",
"icons/Icon-192.png": "76e0b05821565d6523af60297d30039f",
"icons/Icon-512.png": "65654790ff80e7eab27ee9e3d8b8f1eb",
"icons/Icon-maskable-192.png": "2f5e02371a64ff65941e531b4cb128e6",
"icons/Icon-maskable-512.png": "67c9ba22d8bca693d3d0ab4ee7008588",
"index.html": "8542c51665590a566857386253dace97",
"/": "8542c51665590a566857386253dace97",
"main.dart.js": "2fa9cdf0d56e62b6235fea67e84e663f",
"manifest.json": "d849fc1ed0e982f71fb54d2a5d0d543b",
"version.json": "92423a56b92e8699bdef5181d2070270"};
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
