// trace.js — 浏览器内 Python 逐步执行「录制引擎」
// 原理：懒加载 Pyodide（真实 CPython，与判题端 python312 语义一致），用 sys.settrace
//       把用户代码"录"成逐行事件序列（行号 + 调用栈快照 + 变量文本 + stdout/stderr 交错），
//       跑完后整体回放。录播式设计规避了解释器暂停/恢复的复杂度，天然支持跳步与死循环上限。
// CDN：jsdelivr 固定版本；service-worker 在首次联网后对 /pyodide/ 做运行时缓存，二次离线可用。

const CDN_VER = 'v0.26.4';
const CDN_BASE = `https://cdn.jsdelivr.net/pyodide/${CDN_VER}/full/`;
const DEFAULT_CAP = 3000;   // 录制的单步上限（含循环重复行），超限判定为疑似死循环并截断
const MAX_SOURCE = 50000;   // 源码长度上限（字符）

let runtimePromise = null;

/** Pyodide 单例：首次触发后缓存 Promise；加载失败自动清空以便下次重试 */
function ensureRuntime() {
  if (!runtimePromise) {
    runtimePromise = (async () => {
      if (typeof window.loadPyodide !== 'function') {
        await new Promise((resolve, reject) => {
          const s = document.createElement('script');
          s.src = CDN_BASE + 'pyodide.js';
          s.crossOrigin = 'anonymous';
          s.onload = resolve;
          s.onerror = () => reject(new Error('pyodide script load failed'));
          document.head.appendChild(s);
        });
      }
      return window.loadPyodide({ indexURL: CDN_BASE });
    })();
    runtimePromise.catch(() => { runtimePromise = null; });
  }
  return runtimePromise;
}

/**
 * 录制一段 Python 代码的执行轨迹。
 * @param {string} code 源码
 * @param {{cap?: number}} [opts]
 * @returns {Promise<{reason: 'end'|'error'|'limit', events: object[], tooLong?: boolean}>}
 *   events:  {t:'line', n:行号(1起), stk:[{fn,line,locals:{名:文本}}]} 行事件（含当步调用栈快照）
 *           {t:'w', k:'o'|'e', s:文本} stdout/stderr 写入（与行事件交错，回放按序重建输出）
 *           {t:'err', s:文本} 异常/语法错误（reason='error' 时存在）
 *           {t:'end'} 正常结束标记
 *   reason: 'end' 正常跑完 | 'error' 语法/运行错误 | 'limit' 步数超限被截断
 */
export async function tracePython(code, opts) {
  const cap = (opts && opts.cap) || DEFAULT_CAP;
  const src = String(code || '');
  if (!src.trim()) return { reason: 'end', events: [{ t: 'end' }] };
  if (src.length > MAX_SOURCE) return { reason: 'error', tooLong: true, events: [{ t: 'err', s: 'source too long' }] };

  const py = await ensureRuntime(); // 失败向上抛，由 UI 层给「需要联网」提示
  py.globals.set('_code', src);     // JS 字符串 → Python str（默认转换）
  py.runPython(driverSource(cap));
  const proxy = py.globals.get('_out');
  let out;
  try {
    out = typeof proxy === 'string' ? proxy : proxy.toJs();
  } finally {
    if (proxy && typeof proxy.destroy === 'function') { try { proxy.destroy(); } catch (e) { /* ignore */ } }
  }
  return JSON.parse(out);
}

/** 生成内嵌 Python 驱动脚本（cap 注入后供 runPython 执行）。导出仅用于本机回归测试。 */
export function driverSource(cap) {
  return DRIVER.join('\n').replace('@@CAP@@', String(cap || DEFAULT_CAP));
}

// ---- 内嵌 Python 驱动：在真实 CPython 里录制用户代码轨迹 ----
// 注意：此处是 Python 源码。每行用 JS 模板字面量包裹，禁止出现反引号与 ${。
const DRIVER = [
  "import sys, io, json, traceback",
  "",
  "_cap = @@CAP@@",
  "_user = '<student>'",
  "_events = []",
  "_count = [0]",
  "_reason = ['end']",
  "",
  "class _Limit(BaseException):",
  "    pass",
  "",
  "def _txt(v, _seen=None, _d=0):",
  "    if v is None:",
  "        return 'None'",
  "    if v is True:",
  "        return 'True'",
  "    if v is False:",
  "        return 'False'",
  "    if _seen is None:",
  "        _seen = set()",
  "    _d += 1",
  "    try:",
  "        _vid = id(v)",
  "    except Exception:",
  "        _vid = None",
  "    if _vid is not None:",
  "        if _vid in _seen or _d > 3:",
  "            return '...'",
  "        _seen.add(_vid)",
  "    if isinstance(v, str):",
  "        r = repr(v)",
  "        return r if len(r) <= 60 else r[:59] + '…'",
  "    if isinstance(v, bytes):",
  "        r = repr(v)",
  "        return r if len(r) <= 60 else r[:59] + '…'",
  "    if isinstance(v, (int, float)):",
  "        r = repr(v)",
  "        return r if len(r) <= 30 else r[:29] + '…'",
  "    if isinstance(v, (list, tuple)):",
  "        _op, _cl = ('[', ']') if isinstance(v, list) else ('(', ')')",
  "        _p = []",
  "        for _i, _it in enumerate(v):",
  "            if _i >= 30:",
  "                _p.append('…')",
  "                break",
  "            _p.append(_txt(_it, _seen, _d))",
  "        return _op + ', '.join(_p) + _cl",
  "    if isinstance(v, dict):",
  "        _p = []",
  "        for _i, (_k, _val) in enumerate(v.items()):",
  "            if _i >= 30:",
  "                _p.append('…')",
  "                break",
  "            _p.append(_txt(_k, _seen, _d) + ': ' + _txt(_val, _seen, _d))",
  "        return '{' + ', '.join(_p) + '}'",
  "    if isinstance(v, (set, frozenset)):",
  "        _p = []",
  "        for _i, _it in enumerate(v):",
  "            if _i >= 30:",
  "                _p.append('…')",
  "                break",
  "            _p.append(_txt(_it, _seen, _d))",
  "        _b = '{' + ', '.join(_p) + '}'",
  "        return 'set()' if not v else _b",
  "    _cls = type(v).__name__",
  "    try:",
  "        _f = getattr(v, '__dict__', None)",
  "        if isinstance(_f, dict) and _f:",
  "            _p = []",
  "            for _i, (_k, _val) in enumerate(_f.items()):",
  "                if _i >= 20:",
  "                    _p.append('…')",
  "                    break",
  "                _p.append(_k + '=' + _txt(_val, _seen, _d))",
  "            return _cls + '(' + ', '.join(_p) + ')'",
  "    except Exception:",
  "        pass",
  "    try:",
  "        r = repr(v)",
  "    except Exception:",
  "        r = '<' + _cls + '>'",
  "    return r if len(r) <= 80 else r[:79] + '…'",
  "",
  "def _snap(_f):",
  "    _stk = []",
  "    while _f is not None:",
  "        if _f.f_code.co_filename != _user:",
  "            break",
  "        _loc = {}",
  "        try:",
  "            _fl = _f.f_locals",
  "        except Exception:",
  "            _fl = {}",
  "        for _k in _fl:",
  "            if not isinstance(_k, str) or not _k.isidentifier():",
  "                continue",
  "            if _k.startswith('__'):",
  "                continue",
  "            try:",
  "                _loc[_k] = _txt(_fl[_k])",
  "            except Exception:",
  "                _loc[_k] = '<?>'",
  "        _stk.append({'fn': _f.f_code.co_name, 'line': _f.f_lineno, 'locals': _loc})",
  "        _f = _f.f_back",
  "    return _stk",
  "",
  "def _tr(_f, _ev, _arg):",
  "    if _ev == 'line':",
  "        if _f.f_code.co_filename == _user:",
  "            _count[0] += 1",
  "            if _count[0] > _cap:",
  "                _reason[0] = 'limit'",
  "                raise _Limit()",
  "            _events.append({'t': 'line', 'n': _f.f_lineno, 'stk': _snap(_f)})",
  "    return _tr",
  "",
  "class _Out:",
  "    def __init__(self, _k):",
  "        self._k = _k",
  "    def write(self, s):",
  "        try:",
  "            s = str(s)",
  "        except Exception:",
  "            s = repr(s)",
  "        if s:",
  "            _events.append({'t': 'w', 'k': self._k, 's': s})",
  "        return len(s)",
  "    def flush(self):",
  "        pass",
  "    def isatty(self):",
  "        return False",
  "    def writelines(self, seq):",
  "        for _ln in seq:",
  "            self.write(_ln)",
  "",
  "def _fmt(_ex):",
  "    return ''.join(traceback.format_exception_only(type(_ex), _ex)).strip()",
  "",
  "def _main(_code):",
  "    _real_out, _real_err = sys.stdout, sys.stderr",
  "    sys.stdout, sys.stderr = _Out('o'), _Out('e')",
  "    try:",
  "        try:",
  "            _cmpl = compile(_code, _user, 'exec')",
  "        except BaseException as _ex:",
  "            _reason[0] = 'error'",
  "            _events.append({'t': 'err', 's': _fmt(_ex)})",
  "            _cmpl = None",
  "        if _cmpl is not None:",
  "            sys.settrace(_tr)",
  "            try:",
  "                exec(_cmpl, {'__name__': '__main__'})",
  "            except _Limit:",
  "                _reason[0] = 'limit'",
  "            except BaseException as _ex:",
  "                _reason[0] = 'error'",
  "                _events.append({'t': 'err', 's': _fmt(_ex)})",
  "            finally:",
  "                sys.settrace(None)",
  "    finally:",
  "        sys.stdout, sys.stderr = _real_out, _real_err",
  "    if _reason[0] == 'end':",
  "        _events.append({'t': 'end'})",
  "    return json.dumps({'reason': _reason[0], 'events': _events})",
  "",
  "_out = _main(_code)",
];
