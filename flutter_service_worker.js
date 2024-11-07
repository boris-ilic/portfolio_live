'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9a48050d61cec07b559068edfb721004",
"version.json": "06c3ad0adb47bb21361305a17376e6a0",
"index.html": "ac07def7b6dc00b272267634cc8e6ff6",
"/": "ac07def7b6dc00b272267634cc8e6ff6",
"main.dart.js": "b6b7543c58cece1c94a7fc51fb109f2a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ebbaecf21ff0d4f7d65d11dfec0641dd",
"assets/AssetManifest.json": "695083191c5d209aa0695a5eced8aa22",
"assets/NOTICES": "c285fa49a5591f23bfe6a39c920161d9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "595306a4dbbe937e0a3b385241a4879d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "36d08d6f28dd0577da149cee7069227b",
"assets/fonts/MaterialIcons-Regular.otf": "c83fe324d17d4e0ec2b9d9813be4d6bf",
"assets/assets/images/me.png": "5b174b73c1a01bd3e70f38c4b434313a",
"assets/assets/images/no-inventory.png": "0a1e5bac442ad20f37fd773c2b75a268",
"assets/assets/images/us_flag.png": "67ab8e740758d527d8d0c413773f9a2c",
"assets/assets/images/telegram.png": "2cb215c07259b528344838fdabffad2e",
"assets/assets/images/verify_mail_illustration.png": "0c0cd024e5688c51bcd5b0658ea18903",
"assets/assets/images/slava.jpeg": "6d18d863f74cd468d0b3c4435007d040",
"assets/assets/images/djordje.jpeg": "a7ac7399596c76806059da423347c039",
"assets/assets/images/no-internet-connection.png": "1f348c85f7c681196f81b0a48c2c67e7",
"assets/assets/images/vladimir.jpeg": "e43818fec44569830aac239b2d4443dd",
"assets/assets/images/onboarding_4.png": "a9727adf73b71524b7c7b8e8f6737a87",
"assets/assets/images/ja.jpeg": "54783ad808dd90ba9e33c870a96e3104",
"assets/assets/images/empty-find-car.png": "c380bc689bd9f813b83f10615ce160da",
"assets/assets/images/linkedin.png": "c22dabfc204acfcc400362da0a1464ee",
"assets/assets/images/robert.jpeg": "63f97690b4d472a1b8e8ceac4916c1f1",
"assets/assets/images/qr_telegram.jpeg": "e0058a286d380ba4078ba847c34f7f1c",
"assets/assets/images/permanent-block.png": "c8d69b62e6fe85f59f8128b143d6d32c",
"assets/assets/images/welcome-illustration.png": "9a9405391d58ccb3d1bef9f383521552",
"assets/assets/images/about1.jpg": "4f2d9c1e73605d65660dd56e6fdebc0a",
"assets/assets/images/about3.jpg": "cae0db84f5164a19fee90cd8cd6fb157",
"assets/assets/images/russian_flag.png": "a3a9bdd8da735adfa796fd923f71b5cc",
"assets/assets/images/serbian_flag.png": "9a64c6a09c2f165635c9ba57aeea0330",
"assets/assets/images/qr_linkedIn.JPG": "c821cde9859b331bb1782554e2af28af",
"assets/assets/images/about2.jpg": "4617b5a5eedc14eb85285e8d7a1dfc93",
"assets/assets/images/hire_me_button.png": "73a9fb1260d1e2e5a239d28b327a120d",
"assets/assets/pdf/resume.pdf": "bfe593b0ade9678375ab36baf854af88",
"assets/assets/icons/document-yellow.svg": "4919ee52d673dd01aa6b0812ad5e3952",
"assets/assets/icons/car-yellow.svg": "fd28464b8c834eb2d7ed927c2a581abd",
"assets/assets/icons/password-hide-black.png": "7b193e2b3bed687b75153b239041d8e4",
"assets/assets/icons/exterior.svg": "a9e42c0d27c6251b056828a8aab96a82",
"assets/assets/icons/blue-add-icon.svg": "c89d65afafa52af1787894186d2f72d2",
"assets/assets/icons/add-photo-blue.svg": "026b1b6c63fa249819ef578c2962d9eb",
"assets/assets/icons/empty-account-list.svg": "a8e28199cc692eab483b728464888b29",
"assets/assets/icons/settings.png": "15e8fb885ab0e608250a03c0c707374f",
"assets/assets/icons/fuel.svg": "c8d84643439fc3a8d5c96b3ca1605c4e",
"assets/assets/icons/files.svg": "f99b2900a61a7ac4da97c456f85b3390",
"assets/assets/icons/password_show.svg": "8db783d5918be607ad25a4f2f8dc40c9",
"assets/assets/icons/deals-on.svg": "f7326fd765f1f19bed0b8b63aec8e6dc",
"assets/assets/icons/deals-off.svg": "f9f5b7e85fd7364aa9f75a3028d7d59e",
"assets/assets/icons/inventory-on.svg": "9950a6bb4f14c132088d19bf0887ba04",
"assets/assets/icons/password-hite-red.png": "ea9b41a271bb0e1d0279e498adf5770e",
"assets/assets/icons/transmission.svg": "44c591603cd14e1cf41e19aeb67b1f01",
"assets/assets/icons/lock-icon.png": "cb6914182e7f1b2a3f00c16f48859f28",
"assets/assets/icons/arrow-right.svg": "e29e99d823a7f6d2a88df67c18998b75",
"assets/assets/icons/password-show-red.png": "cac0980896ebd85e867edf8be51a7750",
"assets/assets/icons/doc-menu.svg": "15792d1dfe3af56f2b222c3db2db67ab",
"assets/assets/icons/mail.svg": "ba0c792967715bb52eb29694d0249a43",
"assets/assets/icons/time.svg": "166baa94b453e6a8152dbc4510156dff",
"assets/assets/icons/password-hide-gray.png": "ed2d8bc4e973dc0112d3c64d12831973",
"assets/assets/icons/doc-success.svg": "d4987338fda929091663973db6522515",
"assets/assets/icons/retry.svg": "a8173aecef2d8f05a6bba666af93365a",
"assets/assets/icons/mileage_icon.svg": "d5dba6f4d70d8fad69c4cb899b0ea028",
"assets/assets/icons/photo-gallery.svg": "6f78abe0829adbb349fb5aa60eb69c17",
"assets/assets/icons/doc-upload.svg": "c80ac60839e28b66f668c7f524d1fc4a",
"assets/assets/icons/deals_chat.svg": "ce2d1f92a17772cf9d0cf4b025fbcb0c",
"assets/assets/icons/avatar-gray.svg": "7fc9629a72e21eb7fa93cadb046b11a6",
"assets/assets/icons/engine.svg": "32984be464965d4b69e6136331b96579",
"assets/assets/icons/office-yellow.svg": "58d6912ee6cb22f505f7180d11807bfc",
"assets/assets/icons/interior.svg": "f7a12ee82ec17e754a675481fe1ad18a",
"assets/assets/icons/inventory-off.svg": "327db45b81b8e87faebb7cb2cd9dc59a",
"assets/assets/icons/document.svg": "a4f3fcdc7ebad50d65eb9e7cc5202eb0",
"assets/assets/icons/warning.svg": "7a3c0e80da93f681fafc63f248d9b66e",
"assets/assets/icons/cars.svg": "ccdcc4dcace155ab1ea2021ebd9fd1c1",
"assets/assets/icons/open-requests.svg": "4030b021fda6d3e4cf01ded6425f19e7",
"assets/assets/icons/info.svg": "5e4ed04e19fa7026516c5a29c0a16178",
"assets/assets/icons/close-deal.svg": "78edf32801a4689a1323e4da0fb82f73",
"assets/assets/icons/drivetrain.svg": "041251d04b57a079d3b527f2c0b9dc95",
"assets/assets/icons/close.svg": "eec26573e5a1b1e9246e9ae52186d549",
"assets/assets/icons/view_previous_offer.svg": "4b62d7b1df5f9e841755690ce99bfe1f",
"assets/assets/icons/password_hide.svg": "b7d19ff15df5024b8c19bdb913a04003",
"assets/assets/icons/add-note.svg": "a365e514295f8023a5e5cde1166ea31f",
"assets/assets/icons/style.svg": "36e3568181d24f706d7e5b00bb5033e0",
"assets/assets/icons/delivery_icon.svg": "a6124baacc601fb6c3bf8d211c8e03b1",
"assets/assets/icons/send.svg": "b10f3cc96272538d43eb2fdd37f2c3a7",
"assets/assets/icons/camera.svg": "ffd89bcd3ff2fea31e102768a50f5149",
"assets/assets/icons/mpg.svg": "a6f6015265c67fc6b62b0826171b4d5b",
"assets/assets/icons/photo-camera.svg": "abc053ef002eddb6c18be99e32b8758b",
"assets/assets/icons/take-photo.svg": "344b78234fe2df5732ac014d19fa6066",
"assets/assets/icons/edit.svg": "0a82eedade3ccef940032eb8bc5f066a",
"assets/assets/icons/verification-icon.png": "74d8b471bf0d1040ef5d664c6c927e79",
"assets/assets/icons/success.png": "a53be370515131bff192f25123a24cc6",
"assets/assets/icons/account-off.svg": "2c71a9ba4857afd4cdabafcbf0eb87f7",
"assets/assets/icons/home-on.svg": "d92dc4e20e72d6eb491b0a71f8b682d8",
"assets/assets/icons/delete.svg": "11265187bc773d79103e9a403090ea57",
"assets/assets/icons/avatar-pending.png": "18bad954e984952fbd5c9636807b6f8a",
"assets/assets/icons/doc-info.svg": "c5dc7948cb044b162efd2f8f032ac7a8",
"assets/assets/icons/phone.svg": "841d8b6bf2c1e98a83e8f85dde2d716d",
"assets/assets/icons/password-show-black.png": "5ebfebf00be03433949283bcfa94e081",
"assets/assets/icons/doc-download.svg": "cea72886099a26999294a9f09b0c5a50",
"assets/assets/icons/success.svg": "4ad7678dc1f831c7a5b2e6697fa2a2ae",
"assets/assets/icons/location.svg": "e57ccdee72a14cc08bd9d0b64aa69aba",
"assets/assets/icons/chat-off.svg": "87229a98cffdaacd4cd6b86417a0786d",
"assets/assets/icons/account-on.svg": "9d316318365ae9f61bbbe0c3db0a6c76",
"assets/assets/icons/attc.svg": "6ad6a9f35a5bdf20dac65bad6a616202",
"assets/assets/icons/home-off.svg": "9247e3e3d6ac6426266d454d598086ee",
"assets/assets/icons/filter.svg": "80642cb1ca79f633ab059611d69403a0",
"assets/assets/icons/media_document.svg": "ce265d90d85b2b1d128e147fe2bed0fc",
"assets/assets/icons/calendar.svg": "63775604038db0189396041ab7be5cad",
"assets/assets/icons/photo-upload.svg": "cca2aff6bd8574629c7f342d9431775b",
"assets/assets/icons/about2.jpg": "bc177d85a5bbae3a801ddf03c8fe6d4b",
"assets/assets/icons/error.svg": "74e692a9e3aed3c6f8a423f30efe9952",
"assets/assets/icons/office.svg": "8b6920cebe0d1a03303d7e7be619c9bc",
"assets/assets/icons/location-yellow.svg": "fbc8deff22fb8bd683409216e026e870",
"assets/assets/icons/chat-on.svg": "1ada2089ba343c867e24a9717a78e46a",
"assets/assets/icons/google_calendar.svg": "d2c6d69ad92e20dbd94705122bfca727",
"assets/assets/icons/success-icon.png": "74d8b471bf0d1040ef5d664c6c927e79",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
