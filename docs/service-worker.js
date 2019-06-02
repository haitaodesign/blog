/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "375e0e2293d4bd991c7adf3d03e2659c"
  },
  {
    "url": "advanced/index.html",
    "revision": "4b12b01c1113de17b6dcf706b487e7a8"
  },
  {
    "url": "assets/css/0.styles.dcae4551.css",
    "revision": "439d826d57d7154c5ddbcf8f39f129c2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e5dc9f22.js",
    "revision": "de493a69e1e70517e9cbd8d4e46c5af4"
  },
  {
    "url": "assets/js/11.412d3f93.js",
    "revision": "22cf950f6d4aede90f7b8304e8206e23"
  },
  {
    "url": "assets/js/2.2ab4813c.js",
    "revision": "bbd498f606cfd3cc8eeab1b1dbf2f4b1"
  },
  {
    "url": "assets/js/3.67dd3eab.js",
    "revision": "cf78ea4d8d29b993161d44dfc4d301ee"
  },
  {
    "url": "assets/js/4.c1ed6e73.js",
    "revision": "ae78b644613e4839eba0653387c2b331"
  },
  {
    "url": "assets/js/5.91f1eb7f.js",
    "revision": "67ab5b6fd97d67a427d2a7a309735c32"
  },
  {
    "url": "assets/js/6.8386c9e3.js",
    "revision": "f0255dcc69afa141649eb4b18a7a31a5"
  },
  {
    "url": "assets/js/7.04d27878.js",
    "revision": "3a6c65206ae0180a329dd50f740e341d"
  },
  {
    "url": "assets/js/8.1ce5de35.js",
    "revision": "3c6d76219139faf1f3c7a55fa6b047ef"
  },
  {
    "url": "assets/js/9.fcdf2405.js",
    "revision": "0bb076d8a5e8bed11460d5955e714a41"
  },
  {
    "url": "assets/js/app.d35b60a7.js",
    "revision": "bd5e7c888e4550b3011e6e6689fa5751"
  },
  {
    "url": "base/html-meta-tag.html",
    "revision": "99255d8a7a463f3ea550eb17e8d825f4"
  },
  {
    "url": "base/index.html",
    "revision": "2de528b7e7aa56d3284b792042cf42c1"
  },
  {
    "url": "careerPlan/index.html",
    "revision": "ffa13322e151e7cbbd1a9f4ced3c541e"
  },
  {
    "url": "framework/index.html",
    "revision": "42f26f0840c11448310ec911b29dfe51"
  },
  {
    "url": "index.html",
    "revision": "32e5f1f0ec580cd9fccd8f4be1dc3ba7"
  },
  {
    "url": "node/index.html",
    "revision": "9dfe81ca2492320a470e99f82040f46c"
  },
  {
    "url": "project/index.html",
    "revision": "3be8cb48f770d50f85659741551e1d18"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
