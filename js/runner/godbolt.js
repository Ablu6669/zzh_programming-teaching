// godbolt.js — Compiler Explorer (godbolt.org) 执行 API 封装：请求构造 / 节流 / 超时 / 错误分类 / 结果缓存
import { enqueue } from './throttle.js';

const ENDPOINT = 'https://godbolt.org/api/compiler';
const CACHE_TTL = 30 * 1000;
const cache = new Map(); // key -> { time, result }

// 瞬时失败重试：限流(429)/服务端故障(5xx)/网络抖动 会自动重连，避免一失败就弹「无法连接」
const MAX_RETRY = 2;              // 额外重试次数，共 3 次尝试
const RETRY_DELAY = 700;          // 基础退避(ms)，随次数指数放大
const SINGLE_TRY_TIMEOUT = 15000; // 单次请求超时(ms)，Java 单独放宽

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** 该 HTTP 状态是否值得重试（瞬时故障） */
function isRetryableStatus(status) {
  return status === 429 || status === 503 || status === 504 || (status >= 500 && status < 600);
}

// 语言 → Godbolt 编译器 ID（内容文件 engine.compiler 缺失时的兜底表）
const COMPILERS = {
  python: 'python312',
  c: 'cg123',
  'c++': 'g123',
  cpp: 'g123', // 内容文件语言 id 是 'cpp'，兜底表须同时覆盖
  java: 'java2102',
};

function hashStr(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; }
  return s.length + ':' + (h >>> 0).toString(36);
}

/** 去除 GCC/Javac 错误输出中的 ANSI 颜色码 */
function stripAnsi(s) {
  return String(s).replace(/\x1b\[[0-9;]*[A-Za-z]/g, '');
}

/**
 * Godbolt 把源码存为固定文件名（非 Main.java），Java 顶层 public 类会因
 * 「类名与文件名不符」编译失败。单文件场景下移除顶层 public 修饰符不影响语义。
 */
function prepareJava(code) {
  return code.replace(/^([ \t]*)public[ \t]+(class|interface|enum)\b/gm, '$1$2');
}

/**
 * 执行代码。
 * @param {{id, engine}} langDef 语言定义
 * @param {string} code 源代码
 * @returns {Promise<object>} 归一化结果：
 *   { ok, kind: 'success'|'compile_error'|'runtime_error',
 *     stdout, stderr, compileStderr, exitCode, raw }
 *   失败时 reject：{ code: 'TIMEOUT'|'RATE_LIMIT'|'NETWORK'|'QUEUE_FULL', message }
 */
export function runCode(langDef, code) {
  const langId = langDef.id || langDef.language;
  const compiler = (langDef.engine && langDef.engine.compiler) || COMPILERS[langId];
  if (!compiler) {
    return Promise.reject({ code: 'NETWORK', message: 'unknown compiler for: ' + langId });
  }
  const isJava = langId === 'java';
  const source = isJava ? prepareJava(code) : code;

  const cacheKey = hashStr(compiler + '|' + source);
  const hit = cache.get(cacheKey);
  if (hit && Date.now() - hit.time < CACHE_TTL) {
    return Promise.resolve(hit.result);
  }

  const body = {
    source,
    options: {
      userArguments: '',
      executeParameters: { args: [], stdin: '' },
      compilerOptions: { executorRequest: true },
      filters: { execute: true },
      tools: [],
      libraries: [],
    },
  };

  /** 带重试的请求：内部管理每次请求的控制器与超时，瞬时故障自动退避重连 */
  async function fetchWithRetry() {
    let attempt = 0;
    while (true) {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), isJava ? 20000 : SINGLE_TRY_TIMEOUT);
      let res = null;
      let netErr = null;
      try {
        res = await fetch(ENDPOINT + '/' + compiler + '/compile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(body),
          signal: controller.signal,
        });
      } catch (err) {
        if (err && err.name === 'AbortError') { clearTimeout(timer); throw err; }
        netErr = err; // 网络层失败（CORS/DNS/掉线）
      } finally {
        clearTimeout(timer);
      }
      const retryable = netErr != null || (res && isRetryableStatus(res.status));
      if (retryable && attempt < MAX_RETRY) {
        attempt++;
        await sleep(RETRY_DELAY * attempt);
        continue;
      }
      if (netErr != null) throw netErr; // 重试耗尽，仍是网络层失败
      return res;
    }
  }

  const fetchTask = () => fetchWithRetry();

  return enqueue(fetchTask)
    .then((res) => {
      if (res.status === 429 || res.status === 503) {
        return Promise.reject({ code: 'RATE_LIMIT', status: res.status });
      }
      if (!res.ok) {
        return res.json().catch(() => null).then((data) => {
          return Promise.reject({ code: 'NETWORK', status: res.status, message: data && data.error });
        });
      }
      return res.json();
    })
    .then((data) => {
      const result = normalizeResult(data);
      cache.set(cacheKey, { time: Date.now(), result });
      return result;
    })
    .catch((err) => {
      if (err && err.code) throw err;
      if (err && err.name === 'AbortError') throw { code: 'TIMEOUT' };
      // fetch 网络层失败（CORS/DNS/断网）
      throw { code: 'NETWORK', message: err && err.message };
    });
}

/** Godbolt 响应 → 归一化结果对象 */
function normalizeResult(data) {
  // Godbolt 的 stdout/stderr 是「按行分块、不含行尾换行」的数组，须以 \n 重连
  const join = (arr) => (Array.isArray(arr) ? arr.map((x) => (x && x.text) || '').join('\n') : '');
  const build = data.buildResult || {};
  const buildCode = build.code === undefined ? 0 : build.code;
  const compileStderr = stripAnsi(join(build.stderr)).trim();
  const stdout = join(data.stdout);
  const stderr = stripAnsi(join(data.stderr));
  const runCodeVal = data.code === undefined ? 0 : data.code;

  if (buildCode !== 0) {
    return { ok: false, kind: 'compile_error', stdout: '', stderr: '', compileStderr, exitCode: buildCode, raw: data };
  }
  if (runCodeVal !== 0) {
    return { ok: false, kind: 'runtime_error', stdout, stderr, compileStderr: '', exitCode: runCodeVal, raw: data };
  }
  return { ok: true, kind: 'success', stdout, stderr: '', compileStderr: '', exitCode: 0, raw: data };
}

/** Java 专属：检测「public class 名与文件名不符」编译错误（Godbolt 正常路径已自动规避，兜底用） */
export function isJavaClassNameError(compileStderr) {
  return /class\s+\w+\s+is\s+public,\s+should\s+be\s+declared\s+in\s+a\s+file\s+named/.test(compileStderr || '');
}
