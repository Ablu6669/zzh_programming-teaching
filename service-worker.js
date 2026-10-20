// service-worker.js — Polyglot Lab app shell 缓存
// 策略：导航 network-first（失败回 app shell → offline.html）
//       同源静态资源（style.css / js / i18n / content / vendor）network-first，失败回缓存
//         —— 改版立即生效，断网仍可用；离线时的内容来自上一次成功访问写下的运行缓存
//       Pyodide CDN（jsdelivr /pyodide/）：运行时 cache-first——首次联网下载后离线可用
//       其余第三方域（godbolt 等）网络透传，不缓存
//
// CACHE_VERSION 由 tools/build.mjs 按 style.css / js/main.js 的内容指纹自动写入。
// 别手改：每次内容变化都会让 SW 文件本身变化 → 浏览器判定为新 SW → 旧缓存清空。
const CACHE_VERSION = 'plw-98dd0072-f7821d81';
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
  './js/components/editor.js',
  './js/components/aiChat.js',
  './js/judge.js',
  './js/diagnose.js',
  './js/stepper/trace.js',
  './js/stepper/stepper.js',
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
    // 逐个 add 而不是 addAll：addAll 是「全有或全无」，任何一个文件 404 都会让整次
    // 预缓存失败（之前就有临时文件缺失导致 shell 空着的情况）。逐个失败只跳过那一个。
    caches.open(SHELL_CACHE)
      .then((cache) => Promise.all(
        SHELL_FILES.map((url) =>
          cache.add(url).catch((err) => console.warn('[SW] 预缓存跳过', url, err && err.message))
        )
      ))
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

// 自愈出口：页面检测到自己在用旧版时可以让 SW 立即激活 / 自我注销
self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
  if (e.data === '__swUnregisterStale') self.registration.unregister();
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Pyodide 引擎（jsdelivr 固定版本）：cache-first 运行时缓存。
  // 首次需联网下载（~10MB），之后离线也能逐步执行。CORS 响应也要缓存（type='cors'）。
  if (url.hostname === 'cdn.jsdelivr.net' && url.pathname.startsWith('/pyodide/')) {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req).then((res) => {
          if (res && (res.ok || res.type === 'opaque')) {
            const copy = res.clone();
            caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
          }
          return res;
        });
      })
    );
    return;
  }

  // 其余第三方域（含 godbolt API）：网络透传，不缓存
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

  // 同源静态资源一律 network-first，失败才回缓存：
  // 保证线上改动（CSS/JS/内容）立刻生效，同时断网时仍能离线打开。
  // （旧实现是 cache-first，导致每次改版都得手动升 CACHE_VERSION，否则用户一直吃旧文件）
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok && (res.type === 'basic' || res.type === 'default')) {
          const copy = res.clone();
          caches.open(RUNTIME_CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});