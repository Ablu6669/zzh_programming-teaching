// throttle.js — 全局串行请求队列
// 规则：同一时刻仅 1 个在途请求；两次请求最小间隔 350ms；队列上限 3，超出立即报错。

const MIN_INTERVAL = 350;
const MAX_QUEUE = 3;

let running = false;
let lastFinish = 0;
const queue = [];

function pump() {
  if (running || queue.length === 0) return;
  const wait = Math.max(0, lastFinish + MIN_INTERVAL - Date.now());
  running = true;
  const task = queue.shift();
  setTimeout(() => {
    task.fn().then(
      (v) => { finish(); task.resolve(v); },
      (e) => { finish(); task.reject(e); }
    );
  }, wait);
}

function finish() {
  running = false;
  lastFinish = Date.now();
  pump();
}

/** 排队执行一个返回 Promise 的任务；队列满时 reject */
export function enqueue(fn) {
  return new Promise((resolve, reject) => {
    if (queue.length >= MAX_QUEUE) {
      reject(Object.assign(new Error('queue_full'), { code: 'QUEUE_FULL' }));
      return;
    }
    queue.push({ fn, resolve, reject });
    pump();
  });
}
