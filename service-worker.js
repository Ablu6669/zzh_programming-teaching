// service-worker.js — Polyglot Lab app shell 缓存
// 策略：导航 network-first（失败回 app shell → offline.html）
//       同源静态 cache-first（忽略 ?v= 查询参数）
//       第三方域（godbolt 等）网络透传，不缓存
const CACHE_VERSION = 'plw-v2';
const SHELL_CACHE = `${CACHE_VERSION}-shell`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;

const SHELL_FILES = [
  './',
  './index.html',
  './style.css',
  './manifest.webmanifest',
  './favicon.svg',
  './icon.svg',
  './icon-maskable.svg',
  './offline.html',
  './js/main.js',
  './js/router.js',
  './js/store.js',
  './js/progress.js',
  './js/content.js',
  './js/i18n.js',
  './js/views/homeView.js',
  './js/views/roadmapView.js',
  './js/views/topicView.js',
  './js/components/workspace.js',
  './js/runner/godbolt.js',
  './i18n/zh.js',
  './i18n/en.js',
  './content/python.js',
  './content/c.js',
  './content/cpp.js',
  './content/java.js',
  './vendor/codemirror/codemirror.min.js',
  './vendor/codemirror/codemirror.min.css',
  './vendor/codemirror/dracula.min.css',
  './vendor/codemirror/show-hint.css',
  './vendor/codemirror/clike.min.js',
  './vendor/codemirror/python.min.js',
  './vendor/codemirror/matchbrackets.min.js',
  './vendor/codemirror/closebrackets.min.js',
  './vendor/codemirror/activeline.min.js',
  './vendor/codemirror/show-hint.min.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then((cache) => cache.addAll(SHELL_FILES).catch((err) => {
        // 单个文件失败不应阻断 install（开发态可能有临时文件缺失）
        console.warn('[SW] 部分 shell 预缓存失败：', err);
      }))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => !k.startsWith(CACHE_VERSION)).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // 第三方域（含 godbolt API）：网络透传，不缓存
  if (url.origin !== self.location.origin) return;

  // 导航请求：network-first，失败回 app shell → offline.html
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() =>
          caches.match(req).then((r) => r || caches.match('./index.html'))
            .then((r) => r || caches.match('./offline.html'))
        )
    );
    return;
  }

  // 同源静态资源：cache-first（ignoreSearch 应对 ?v= 缓存破坏）
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res.ok && (res.type === 'basic' || res.type === 'default')) {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
        }
        return res;
      });
    })
  );
});