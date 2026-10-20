// tools/build.mjs — 零依赖构建：把内容指纹写进 index.html 与 service-worker.js
//
// 为什么需要：
//   纯静态站靠 `?v=` 指纹让浏览器换新文件。手写版本号容易忘（改完 JS 忘了改 v），
//   而 Service Worker 的预缓存里存的是「无 ?v=」的裸 URL —— 一旦 network-first
//   回落到缓存（断网 / 请求被中止 / 离线打开），用户就会一直拿到旧 CSS/JS，
//   表现为「改了没生效」「那三个按钮点了没反应」这类幽灵 bug。
//
// 做法：
//   - style.css / js/main.js 的内容 hash 前 8 位 → 写进 index.html 的 ?v=
//   - 同样两个 hash 拼成 build 号 → 写进 service-worker.js 的 CACHE_VERSION
//     （SW 自身内容随之变化 → 浏览器判定为新 SW → install/activate → 旧缓存清空）
//   - index.html 里的版本守卫脚本用同一个 build 号做自检
//
// 用法：node tools/build.mjs [--check]
//   --check 只比对不写；有偏差时退出码 1（提交前/CI 用）
import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CHECK_ONLY = process.argv.includes('--check');

const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const hash8 = (rel) => crypto.createHash('sha1').update(fs.readFileSync(path.join(ROOT, rel))).digest('hex').slice(0, 8);

const cssV = hash8('style.css');
const jsV = hash8('js/main.js');
const BUILD = `${cssV}-${jsV}`;

const plan = [];

// ---- index.html ----
const html = read('index.html');
const nextHtml = html
  .replace(/href="style\.css\?v=[^"]*"/, `href="style.css?v=${cssV}"`)
  .replace(/src="js\/main\.js\?v=[^"]*"/, `src="js/main.js?v=${jsV}"`)
  .replace(/(var BUILD = ')[^']*(')/, `$1${BUILD}$2`);

if (nextHtml !== html) {
  plan.push(`index.html        → style.css?v=${cssV}  js/main.js?v=${jsV}  BUILD=${BUILD}`);
  if (!CHECK_ONLY) fs.writeFileSync(path.join(ROOT, 'index.html'), nextHtml, 'utf8');
}

// ---- service-worker.js ----
const sw = read('service-worker.js');
const nextSw = sw.replace(/const CACHE_VERSION = '[^']*';/, `const CACHE_VERSION = 'plw-${BUILD}';`);
if (nextSw !== sw) {
  plan.push(`service-worker.js → CACHE_VERSION = plw-${BUILD}`);
  if (!CHECK_ONLY) fs.writeFileSync(path.join(ROOT, 'service-worker.js'), nextSw, 'utf8');
}

if (!plan.length) {
  console.log(`✓ 已是最新（build = ${BUILD}）`);
} else {
  console.log((CHECK_ONLY ? '⚠ 需要重新构建：\n  ' : '✓ 已更新：\n  ') + plan.join('\n  '));
  if (CHECK_ONLY) process.exit(1);
}
