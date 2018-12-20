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
    "revision": "ee76d0c4b97052a7675e5ba639b8ce18"
  },
  {
    "url": "assets/css/0.styles.8a91f417.css",
    "revision": "8b9803e66b151eea71fdccf1bdc30c52"
  },
  {
    "url": "assets/img/flux-1.90fab893.png",
    "revision": "90fab8939d5aaa4adceab9a462d1dae1"
  },
  {
    "url": "assets/img/flux-2.a60c532f.png",
    "revision": "a60c532faf4a5d3623ba9cc63b4d7913"
  },
  {
    "url": "assets/img/flux-3.eeab519a.png",
    "revision": "eeab519ae5a83261728699f2c684b730"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.cabc2321.js",
    "revision": "c685960bcabc0e27db3d894925789553"
  },
  {
    "url": "assets/js/11.01e14a60.js",
    "revision": "627c6720572a3a003905240a1fc5bcb4"
  },
  {
    "url": "assets/js/12.5228cf3a.js",
    "revision": "767cbd523c5eab72abbd74d0f164a9a2"
  },
  {
    "url": "assets/js/2.e1e22355.js",
    "revision": "79ee0f59dbc9bc51a5cd9c16069bdadb"
  },
  {
    "url": "assets/js/3.c8defdb9.js",
    "revision": "c88b2a7d388c317d7c1047fde971fefb"
  },
  {
    "url": "assets/js/4.365567c8.js",
    "revision": "b7f2dde32968fe396991120c2ddfd95f"
  },
  {
    "url": "assets/js/5.f638ab36.js",
    "revision": "064caa1f23a7069e3f795b02f34c1f75"
  },
  {
    "url": "assets/js/6.1b848e98.js",
    "revision": "dd22a5bcf0c7618c9317d2d3f0b65ecc"
  },
  {
    "url": "assets/js/7.b734a1c3.js",
    "revision": "0118c88d9703be2381e35b464cc42b1b"
  },
  {
    "url": "assets/js/8.63e8e28b.js",
    "revision": "9fa7bc6254b58b39f84b971ae6fbc3a7"
  },
  {
    "url": "assets/js/9.eaa232c8.js",
    "revision": "3a4ebb042e2aa2df30416fef61d05ca1"
  },
  {
    "url": "assets/js/app.5edc5c80.js",
    "revision": "a8cbf63d98c1f1af8b2340e4a1716c73"
  },
  {
    "url": "framework/index.html",
    "revision": "31a50457efa5c42f12dcf2900d215c75"
  },
  {
    "url": "icon_logo.svg",
    "revision": "3de5d6fa0ffab0091df0c9ddd474b042"
  },
  {
    "url": "icons/snowball.png",
    "revision": "fb5cfc5bf794f2756bcf6704149192a6"
  },
  {
    "url": "index.html",
    "revision": "9367e048b3087279376eabd399861f33"
  },
  {
    "url": "platform/index.html",
    "revision": "0d0aeb20eadacd2e492078e6d8cc5cc7"
  },
  {
    "url": "render/index.html",
    "revision": "423887ba42f459cf287db38fbf3f973a"
  },
  {
    "url": "server/index.html",
    "revision": "f230e836dfbbfa71b9f2e4346ed6ac98"
  },
  {
    "url": "ux/index.html",
    "revision": "555678448f2693a5dced7dcf5b608750"
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
