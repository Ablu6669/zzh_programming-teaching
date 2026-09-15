// tools/ui_probe.mjs — 零依赖 UI 探针（CDP 直连）
//
// 为什么需要它：agent-browser 在本机每次调用都会重建浏览器实例，跨调用的
// 标签状态会漂移（点击/eval 落到 about:blank），无法做「打开 → 交互 → 断言」
// 这类多步验证。本脚本在单进程内完成整条链路，并顺带打印每条断言的返回值。
//
// 用法：
//   node tools/ui_probe.mjs <url> [--flow 流程文件.json] [--out 输出目录]
//   node tools/ui_probe.mjs <url> --mobile          # 390x844 移动视口
//
// 流程文件（可选，省略则只做基础体检：标题 + 截图 + 控制台错误）：
//   {
//     "viewport": { "width": 1440, "height": 900 },
//     "steps": [
//       { "label": "初始状态", "eval": "JSON.stringify(...)" },
//       { "label": "展开面板", "click": ".ai-fab", "wait": 400 },
//       { "shot": "open.png" },
//       { "label": "页面错误", "eval": "JSON.stringify(window.__errs||[])" }
//     ]
//   }
//
// 环境变量：
//   CHROME_PATH  指定 Chrome/Chromium 可执行文件（默认自动探测）
//   PROBE_PORT   DevTools 调试端口（默认 9333）
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const args = process.argv.slice(2);
const url = args[0];
if (!url || url.startsWith('--')) {
  console.error('用法: node tools/ui_probe.mjs <url> [--flow 流程.json] [--out 目录] [--mobile]');
  process.exit(2);
}
const flag = (name) => args.includes(name);
const opt = (name, def) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : def;
};
const OUT_DIR = opt('--out', path.join(process.cwd(), '.workbuddy', 'ui-probe'));
const FLOW_FILE = opt('--flow', null);
const PORT = Number(process.env.PROBE_PORT || 9333);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** 顺次探测常见的 Chrome/Chromium 安装位置 */
function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  const home = os.homedir();
  const candidates = [
    path.join(home, '.agent-browser', 'browsers'),
    path.join(home, '.chromium-browser-snapshots', 'chromium'),
    'C:\\Program Files\\Google\\Chrome\\Application',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application',
    path.join(home, 'AppData', 'Local', 'Google', 'Chrome', 'Application'),
    '/Applications/Google Chrome.app/Contents/MacOS',
    '/usr/bin',
    '/usr/local/bin',
  ];
  for (const dir of candidates) {
    if (!fs.existsSync(dir)) continue;
    // 目录本身可能就是可执行文件所在处
    for (const name of ['chrome.exe', 'chrome', 'chromium', 'Google Chrome']) {
      const direct = path.join(dir, name);
      if (fs.existsSync(direct)) return direct;
    }
    // 否则往下找一层（版本号目录 / chrome-win 之类）
    for (const sub of fs.readdirSync(dir)) {
      for (const rel of [['chrome.exe'], ['chrome-win', 'chrome.exe'], ['chrome', 'chrome'], ['Chromium.app', 'Contents', 'MacOS', 'Chromium']]) {
        const p = path.join(dir, sub, ...rel);
        if (fs.existsSync(p)) return p;
      }
    }
  }
  return null;
}

/** 极简 CDP 客户端：send(method, params) + once(eventName) */
function connect(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let seq = 0;
    const pending = new Map();
    const waiters = [];
    ws.addEventListener('error', () => reject(new Error('DevTools WebSocket 连接失败')));
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && pending.has(msg.id)) {
        const { res, rej } = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? rej(new Error(JSON.stringify(msg.error))) : res(msg.result);
      } else if (msg.method) {
        for (const w of waiters.slice()) {
          if (w.method === msg.method) { waiters.splice(waiters.indexOf(w), 1); w.resolve(msg.params); }
        }
      }
    });
    ws.addEventListener('open', () => resolve({
      send(method, params) {
        return new Promise((res, rej) => {
          const id = ++seq;
          pending.set(id, { res, rej });
          ws.send(JSON.stringify({ id, method, params: params || {} }));
        });
      },
      once(method) { return new Promise((res) => waiters.push({ method, resolve: res })); },
      close() { ws.close(); },
    }));
  });
}

const chromePath = findChrome();
if (!chromePath) {
  console.error('找不到 Chrome/Chromium，请用 CHROME_PATH 环境变量指定');
  process.exit(1);
}
fs.mkdirSync(OUT_DIR, { recursive: true });

const flow = FLOW_FILE ? JSON.parse(fs.readFileSync(FLOW_FILE, 'utf8')) : { steps: [] };
const vp = flag('--mobile')
  ? { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }
  : Object.assign({ width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }, flow.viewport || {});

const profileDir = path.join(OUT_DIR, '_chrome-profile');
const child = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=' + PORT,
  '--user-data-dir=' + profileDir,
  '--no-first-run', '--no-default-browser-check', '--disable-gpu',
  `--window-size=${vp.width},${vp.height}`,
  'about:blank',
], { stdio: 'ignore' });

let wsUrl = null;
for (let i = 0; i < 60 && !wsUrl; i++) {
  try {
    const j = await (await fetch(`http://127.0.0.1:${PORT}/json/version`)).json();
    wsUrl = j.webSocketDebuggerUrl || null;
  } catch (e) { /* 还没起来，重试 */ }
  if (!wsUrl) await sleep(300);
}
if (!wsUrl) { console.error('DevTools 端口未就绪'); child.kill(); process.exit(1); }

const target = await (await fetch(`http://127.0.0.1:${PORT}/json/new?${encodeURIComponent('about:blank')}`, { method: 'PUT' })).json();
const s = await connect(target.webSocketDebuggerUrl);
await s.send('Page.enable');
await s.send('Runtime.enable');
// 收集未捕获错误，供 --flow 里的 eval 读取
await s.send('Page.addScriptToEvaluateOnNewDocument', {
  source: 'window.__errs=[];addEventListener("error",e=>window.__errs.push(String(e.message)));addEventListener("unhandledrejection",e=>window.__errs.push("rejection: "+String(e.reason)));',
});

if (vp.mobile) {
  await s.send('Emulation.setDeviceMetricsOverride', { width: vp.width, height: vp.height, deviceScaleFactor: vp.deviceScaleFactor, mobile: true });
  await s.send('Emulation.setTouchEmulationEnabled', { enabled: true });
} else if (flow.viewport) {
  await s.send('Emulation.setDeviceMetricsOverride', { width: vp.width, height: vp.height, deviceScaleFactor: vp.deviceScaleFactor, mobile: false });
}

const loaded = s.once('Page.loadEventFired');
await s.send('Page.navigate', { url });
await Promise.race([loaded, sleep(10000)]);
await sleep(Number(opt('--settle', 1800))); // 等 ES Module 与组件初始化

const out = [];
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
async function shot(name) {
  const r = await s.send('Page.captureScreenshot', { format: 'png' });
  const file = path.join(OUT_DIR, name || `shot-${stamp}.png`);
  fs.writeFileSync(file, Buffer.from(r.data, 'base64'));
  out.push(`[截图] ${file}`);
}
async function evaluate(label, expr) {
  const r = await s.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
  const v = r.exceptionDetails ? 'EXCEPTION: ' + (r.exceptionDetails.text || '') : (r.result && r.result.value);
  out.push(`--- ${label}\n` + (typeof v === 'string' ? v : JSON.stringify(v, null, 1)));
  return v;
}

// 基础体检
out.push(`目标: ${url}\n视口: ${vp.width}x${vp.height}${vp.mobile ? ' (mobile)' : ''}`);
await evaluate('页面标题', 'document.title');
await evaluate('页面错误', 'JSON.stringify(window.__errs||[])');
await shot('01-initial.png');

for (const step of flow.steps || []) {
  if (step.wait) await sleep(Number(step.wait));
  if (step.click) {
    await evaluate(step.label || `点击 ${step.click}`, `(()=>{const n=document.querySelector(${JSON.stringify(step.click)});if(!n)return "MISSING";n.click();return "clicked"})()`);
    await sleep(300);
  }
  if (step.eval) await evaluate(step.label || 'eval', step.eval);
  if (step.shot) await shot(step.shot);
}

await evaluate('收尾错误检查', 'JSON.stringify(window.__errs||[])');

const report = path.join(OUT_DIR, `report${flag('--mobile') ? '-mobile' : ''}.txt`);
fs.writeFileSync(report, out.join('\n\n'), 'utf8');
console.log(`报告: ${report}`);
console.log(`截图目录: ${OUT_DIR}`);

s.close();
child.kill();
await sleep(300);
fs.rmSync(profileDir, { recursive: true, force: true });
process.exit(0);
