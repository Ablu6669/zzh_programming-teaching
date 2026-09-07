// diagnose.js — 实战错误诊断：把编译器/解释器的报错翻译成小白能懂的话
// 规则表按语言分类，每条 = [正则, 中文解释, 英文解释]；匹配到第一条即停止。
import { pick } from './i18n.js';

/** 从报错文本里提取行号（取第一个带行号的错误） */
export function extractErrorLine(stderr) {
  if (!stderr) return null;
  // gcc/clang: "<source>:5:12: error: ..." 或 "main.c:5:12: error: ..."
  let m = stderr.match(/(?:<source>|<stdin>|[^\s:]+\.(?:c|cpp|cc|cxx|h|hpp|java))\s*:\s*(\d+):(?:\d+)?\s*:\s*(?:error|fatal error)/i);
  if (m) return parseInt(m[1], 10);
  // javac: "Main.java:7: error: ..."
  m = stderr.match(/Main\.java\s*:\s*(\d+)\s*:\s*error/i);
  if (m) return parseInt(m[1], 10);
  // python: 'File "main.py", line 5'
  m = stderr.match(/File\s+"[^"]+",\s*line\s+(\d+)/i);
  if (m) return parseInt(m[1], 10);
  return null;
}

const B = (zh, en) => ({ zh, en });

/** 编译期 / 语法错误规则（C、C++、Java 用；Python 无编译期但语法错误同表处理） */
const SYNTAX_RULES = {
  python: [
    [/SyntaxError: invalid syntax/i, B(
      '这一行的写法不符合 Python 语法。最常见的原因：行尾少了冒号 `:`、括号或引号没有闭合、或者用了中文标点（中文引号、中文冒号）。',
      'This line does not follow Python syntax. Most common causes: a missing colon `:` at the end, unclosed brackets or quotes, or full-width (Chinese) punctuation.')],
    [/IndentationError: expected an indented block/i, B(
      '缩进错误：`if`/`for`/`def` 这类语句的下一行需要缩进（开头空 4 个空格）。Python 靠缩进表示“这行属于上面那个块”。',
      'Indentation error: the line after `if`/`for`/`def` must be indented (4 spaces). Python uses indentation to group statements.')],
    [/IndentationError: unindent does not match any outer/i, B(
      '缩进错误：这一行开头的空格数和前面的行对不上。请保证同一个块里的行缩进完全一致（统一用 4 个空格）。',
      'Indentation error: this line\'s leading spaces do not align with previous lines. Keep indentation consistent within a block (use 4 spaces).')],
    [/NameError: name '([^']*)' is not defined/i, B(
      '用了一个没有定义过的名字。可能：变量还没赋值就先使用、拼写错误（大小写敏感），或者把字符串忘加引号。',
      'You used a name that was never defined. Possibly: using a variable before assigning it, a typo (case-sensitive), or forgetting quotes around a string.')],
    [/TypeError: can only concatenate str \(not "(\w+)"\) to str/i, B(
      '不能把字符串和数字直接用 `+` 拼接。先用 `str(x)` 把数字转成字符串，或用逗号分开传给 print。',
      'You cannot concatenate a string with a number using `+`. Convert with `str(x)` first, or pass them to print separated by commas.')],
    [/TypeError: unsupported operand type\(s\)/i, B(
      '两个不兼容的类型做了运算（比如字符串减数字）。检查两边的类型，需要时用 `int()` / `str()` / `float()` 转换。',
      'You operated on incompatible types (e.g. string minus number). Check the types and convert with `int()` / `str()` / `float()` if needed.')],
    [/ValueError: invalid literal for int\(\) with base (\d+): '([^']*)'/i, B(
      '`int()` 收到了一个没法转成整数的字符串（可能含字母、空格或小数点）。确认要转换的内容确实是数字。',
      '`int()` received a string that cannot be converted to an integer (letters, spaces, or a decimal point). Make sure the content is a valid whole number.')],
    [/ZeroDivisionError/i, B(
      '除以 0 了。数学上不允许，程序里会直接崩溃。除法前先确认除数不是 0。',
      'Division by zero. It is mathematically undefined and crashes the program. Make sure the divisor is not 0.')],
    [/IndexError: (list index|string index) out of range/i, B(
      '下标越界：访问的位置超出了序列的长度。注意下标从 0 开始，长度为 n 的序列最大下标是 n-1。',
      'Index out of range: you accessed a position beyond the length. Indexing starts at 0, so the last valid index is length-1.')],
    [/KeyError: '([^']*)'/i, B(
      '字典里不存在这个键。先用 `in` 判断键是否存在，或用 `.get(key)` 安全取值。',
      'This key does not exist in the dict. Check membership with `in` first, or use `.get(key)` for safe access.')],
    [/AttributeError: '([^']*)' object has no attribute '([^']*)'/i, B(
      '这个类型的对象没有该方法/属性。检查拼写和类型——例如对整数调用 `.append()` 就会这样。',
      'This object type has no such attribute/method. Check spelling and the type — e.g. calling `.append()` on an integer triggers this.')],
    [/ModuleNotFoundError|ImportError/i, B(
      '导入的模块不存在。检查模块名拼写（本站只支持标准库）。',
      'The imported module does not exist. Check the spelling (only the standard library is available on this site).')],
  ],
  c: [
    [/expected ';' before/i, B(
      '缺少分号。C 语言每条语句必须以 `;` 结尾——看报错行号的**上一行**末尾是不是漏了分号。',
      'A semicolon is missing. Every C statement must end with `;` — check the end of the line **above** the reported line.')],
    [/'(\w+)' undeclared \(first use in this function\)/i, B(
      '用了没有声明的名字 `$1`。C 要求变量必须**先声明再使用**；也可能是拼写错误（C 区分大小写）。',
      '`$1` is used without being declared. C requires variables to be **declared before use**; it could also be a typo (C is case-sensitive).')],
    [/expected declaration or statement at end of/i, B(
      '多了一个 `}` 或少了 `;`。数一数花括号是否配对、每条语句是否都有分号。',
      'An extra `}` or a missing `;`. Count your braces to make sure they pair up, and check each statement ends with a semicolon.')],
    [/expected '\)'|expected '\(' /i, B(
      '括号不配对。从这一行往上数，某个 `(` 没有对应的 `)`（反之亦然）。',
      'Unbalanced parentheses. Count backwards from this line for a `(` without a matching `)` (or vice versa).')],
    [/expected '\}'|expected '\{' /i, B(
      '花括号不配对。函数体、if/for 的代码块都必须用 `{ }` 包起来且成对出现。',
      'Unbalanced braces. Function bodies and if/for blocks must be wrapped in paired `{ }`.')],
    [/conflicting types for '(\w+)'/i, B(
      '同一个名字声明了两次且类型不一致（比如声明 `int x` 又当 `char` 用）。检查重复声明和类型是否统一。',
      'The same name was declared with conflicting types. Check for duplicate declarations and consistent types.')],
    [/format '\%[^']*' expects argument of type '([^']*)', but argument \d+ has type '([^']*)'/i, B(
      'printf 的格式符和实际参数类型不匹配：期望 $1，实际是 $2。例如用 `%d` 却传了 `float`（应该用 `%f`）。',
      'The printf format specifier does not match the argument type: expected $1 but got $2. E.g. passing a `float` to `%d` (should be `%f`).')],
    [/implicit declaration of function '(\w+)'/i, B(
      '调用了一个编译器不认识的函数 `$1`。可能是函数名拼写错误，或忘了 `#include` 对应的头文件。',
      'Calling a function the compiler does not know: `$1`. It may be misspelled, or you forgot the matching `#include`.')],
    [/expected expression before '(\S+)'/i, B(
      '这里需要一个表达式，但编译器看到了 `$1`。常见原因：连续两个运算符（如 `a * * b`）、多了分号或逗号。',
      'An expression is expected here but the compiler saw `$1`. Common causes: two operators in a row, or a stray semicolon/comma.')],
  ],
};

SYNTAX_RULES.cpp = [
  [/expected ';' before/i, B(
    '缺少分号。C++ 每条语句必须以 `;` 结尾——看报错行号的**上一行**末尾是不是漏了分号。',
    'A semicolon is missing. Every C++ statement must end with `;` — check the end of the line **above** the reported line.')],
  [/'(\w+)' was not declared in this scope/i, B(
    '用了没有声明的名字 `$1`。变量必须**先定义再使用**；也可能是拼写错误（C++ 区分大小写）。',
    '`$1` was not declared in this scope. Variables must be **defined before use**; it could also be a typo (C++ is case-sensitive).')],
  [/expected declaration or statement at end of/i, B(
    '多了一个 `}` 或少了 `;`。数一数花括号是否配对、每条语句是否都有分号。',
    'An extra `}` or a missing `;`. Count your braces and check each statement ends with a semicolon.')],
  [/expected '\)'|expected '\(' /i, B(
    '括号不配对。从这一行往上数，某个 `(` 没有对应的 `)`（反之亦然）。',
    'Unbalanced parentheses. Count backwards for a `(` without a matching `)` (or vice versa).')],
  [/no match for 'operator<<' \(operand types are '([^']*)' and '([^']*)'\)/i, B(
    '`<<` 两边的类型不兼容。常见原因：把不同类型直接拼接输出（如 `cout << "x" + 1`），先把非字符串转成流可接受的类型。',
    'Incompatible operand types for `<<`. A common cause is concatenating different types before streaming (e.g. `cout << "x" + 1`); convert values first.')],
  [/expected initializer before '(\S+)'/i, B(
    '变量声明/定义的写法不对。检查这一行及上一行：是否漏了类型名、分号放错了位置。',
    'Malformed variable declaration. Check this line and the one above: a missing type name or a misplaced semicolon.')],
  [/expected unqualified-id before/i, B(
    '语法结构错误。常见原因：在函数外写了语句（C++ 的语句只能在函数里），或多了分号/括号。',
    'Malformed syntax. Common causes: a statement outside a function (statements must live inside functions), or a stray semicolon/bracket.')],
  [/request for member '(\w+)' in '([^']*)', which is of non-class type/i, B(
    '对一个非对象的东西用了 `.` 方法调用。检查这个变量的类型是否正确。',
    'You used `.` method access on something that is not an object. Check the variable\'s declared type.')],
];

SYNTAX_RULES.java = [
  [/';' expected/i, B(
    '缺少分号。Java 每条语句必须以 `;` 结尾——看报错行号的**上一行**末尾是不是漏了分号。',
    'A semicolon is missing. Every Java statement must end with `;` — check the end of the line **above** the reported line.')],
  [/cannot find symbol/i, B(
    '用了一个不存在的名字。可能：变量没声明就使用、拼写/大小写错误（Java 严格区分大小写）、或调用了不存在的方法。',
    'You used an undefined name. Possibly: an undeclared variable, a typo or wrong casing (Java is case-sensitive), or a method that does not exist.')],
  [/class (\w+) is public, should be declared in a file named/i, B(
    'Java 要求 `public class` 的类名必须和文件名一致。本站文件固定叫 `Main.java`，所以入口类必须写成 `class Main`。',
    'Java requires the public class name to match the file name. This site always uses `Main.java`, so the entry class must be `class Main`.')],
  [/reached end of file while parsing/i, B(
    '花括号少了一个 `}`。Java 靠 `{ }` 划分代码块，删掉多少个就要补回多少个。数一下左右花括号数量是否相等。',
    'A closing `}` is missing. Java groups code with braces — count that opening and closing braces match.')],
  [/illegal start of expression/i, B(
    '表达式从这里开始就写错了。常见原因：方法写到了别的方法里面、多了或少了括号/分号。',
    'The expression is malformed from here. Common causes: a method nested inside another method, or extra/missing brackets.')],
  [/incompatible types: (?:possible )?lossy conversion|incompatible types/i, B(
    '类型不兼容。Java 是强类型语言：把 `double` 赋给 `int`、把 `String` 赋给 `int` 都不行。需要显式转换，如 `(int) x` 或 `Integer.parseInt(s)`。',
    'Incompatible types. Java is strongly typed: assigning a `double` to an `int`, or a `String` to an `int`, is illegal. Convert explicitly, e.g. `(int) x` or `Integer.parseInt(s)`.')],
  [/not a statement/i, B(
    '这一行不是一条合法语句。检查是否少了 `=`、把两条语句写在了一行、或拼写错误。',
    'This line is not a valid statement. Check for a missing `=`, two statements on one line, or typos.')],
  [/missing return statement/i, B(
    '方法声明了要返回某个类型，但方法体里没有 `return`。在所有分支末尾补上 `return 值;`。',
    'The method declares a return type but never returns. Add `return value;` at the end of every path.')],
  [/unreachable statement|unreachable code/i, B(
    '存在永远不会执行到的代码。通常是 `return` 后面又写了语句，删掉即可。',
    'Some code can never execute — usually statements after a `return`. Remove them.')],
];

/** 运行期错误规则（程序编译/解释通过，但跑起来崩了） */
const RUNTIME_RULES = {
  python: SYNTAX_RULES.python, // Python 的运行期错误和语法错误格式一致，规则通用
  c: [
    [/segmentation fault|SIGSEGV/i, B(
      '段错误（segmentation fault）：程序访问了不该访问的内存。新手最常见原因是 `scanf` 忘记加 `&`。',
      'Segmentation fault: the program accessed memory it shouldn\'t. For beginners the most common cause is forgetting `&` in `scanf`.')],
    [/(?:floating point exception|SIGFPE)/i, B(
      '算术异常：通常是整数除以 0。除法前先检查除数。',
      'Arithmetic exception: usually an integer division by zero. Check the divisor first.')],
  ],
  cpp: [
    [/segmentation fault|SIGSEGV/i, B(
      '段错误（segmentation fault）：程序访问了越界的内存。新手常见原因：数组下标越界、解引用空指针、vector 空(null)对象误用。',
      'Segmentation fault: out-of-bounds memory access. Common beginner causes: array index out of range, dereferencing a null pointer, or misusing empty objects.')],
    [/terminate called after throwing an instance of '([^']+)'/i, B(
      '抛出了 C++ 异常 `$1`。例如 `std::out_of_range` 表示访问了容器里不存在的位置（vector 下标越界）。',
      'A C++ exception `$1` was thrown. E.g. `std::out_of_range` means accessing a position that does not exist in a container.')],
    [/(?:floating point exception|SIGFPE)/i, B(
      '算术异常：通常是整数除以 0。除法前先检查除数。',
      'Arithmetic exception: usually an integer division by zero. Check the divisor first.')],
  ],
  java: [
    [/NullPointerException/i, B(
      '空指针异常：对一个值为 `null` 的对象调用了方法或取了属性。使用前先判断它是不是 null，或先给它赋值。',
      'NullPointerException: you called a method on an object whose value is `null`. Check for null before use, or assign it first.')],
    [/ArrayIndexOutOfBoundsException[^:]*: Index (\d+)/i, B(
      '数组下标越界：访问了下标 $1。数组下标从 0 开始，长度为 n 的数组最大下标是 n-1。',
      'Array index out of bounds: index $1 was accessed. Indexing starts at 0; the last valid index of length n is n-1.')],
    [/StringIndexOutOfBoundsException/i, B(
      '字符串下标越界：`charAt` / `substring` 的位置超出了字符串长度。注意长度用 `.length()` 获取。',
      'String index out of bounds: the position passed to `charAt` / `substring` exceeds the string length. Use `.length()` to get the length.')],
    [/ArithmeticException: \/ by zero/i, B(
      '整数除以 0。Java 中整数除法除数为 0 会直接抛异常，计算前先检查。',
      'Integer division by zero. In Java this throws immediately; check the divisor before dividing.')],
    [/InputMismatchException/i, B(
      '读取输入的类型和实际内容不匹配。用 `nextInt()` 读到的却不是整数就会这样。',
      'The input type does not match what was read, e.g. calling `nextInt()` on non-integer input.')],
    [/NumberFormatException/i, B(
      '字符串转数字失败：`Integer.parseInt` / `Double.parseDouble` 收到了不是数字的字符串。',
      'Failed to parse a number: `Integer.parseInt` / `Double.parseDouble` received a non-numeric string.')],
    [/StackOverflowError/i, B(
      '栈溢出：通常是递归没有终止条件（或太深），方法自己调用自己停不下来。',
      'Stack overflow: usually a recursion without a base case (or too deep) — the method keeps calling itself.')],
  ],
};

function matchRules(rules, text) {
  for (const [re, explain] of rules) {
    const m = text.match(re);
    if (m) {
      let zh = explain.zh, en = explain.en;
      // 支持 $1/$2 捕获组替换
      for (let i = 1; i < m.length; i++) {
        zh = zh.split('$' + i).join(m[i]);
        en = en.split('$' + i).join(m[i]);
      }
      return pick({ zh, en });
    }
  }
  return null;
}

/** 诊断编译错误 → { line, explanation }；explanation 为当前语言的字符串，未匹配返回 null */
export function diagnoseCompile(langId, stderr) {
  if (!stderr) return null;
  const line = extractErrorLine(stderr);
  const explanation = matchRules(SYNTAX_RULES[langId] || [], stderr);
  if (!line && !explanation) return null;
  return { line, explanation };
}

/** 诊断运行时错误 → { line, explanation } */
export function diagnoseRuntime(langId, stderr) {
  if (!stderr) return null;
  const line = extractErrorLine(stderr);
  const explanation = matchRules(RUNTIME_RULES[langId] || [], stderr);
  if (!line && !explanation) return null;
  return { line, explanation };
}

/**
 * 诊断输出不匹配 → 当前语言的总结字符串
 * @param {object} jr judge() 的结果 { pass, lineResults }
 */
export function diagnoseMismatch(jr) {
  if (!jr || !jr.lineResults) return null;
  const firstBad = jr.lineResults.findIndex((r) => !r.ok);
  if (firstBad < 0) return null;
  const r = jr.lineResults[firstBad];
  const ln = firstBad + 1;
  if (r.missing) {
    return pick({ zh: `第 ${ln} 行少输出了一行：程序没有打印出「${r.expected}」。检查是否漏写了一个输出语句。`, en: `Line ${ln} is missing: your program did not print "${r.expected}". Check whether an output statement was skipped.` });
  }
  if (r.extra) {
    return pick({ zh: `第 ${ln} 行多输出了一行：期望在这里结束，但程序打印了「${r.actual}」。检查是否多写了一个输出语句。`, en: `Line ${ln} is extra output: the expected output ends here, but your program printed "${r.actual}". Check for an extra output statement.` });
  }
  return pick({
    zh: `第 ${ln} 行不一致：期望「${r.expected}」，实际「${r.actual}」。逐字符对比一下——常见原因：多了/少了空格、大小写不同、标点不同（中英文标点长得像）、或数字算错。`,
    en: `Line ${ln} differs: expected "${r.expected}" but got "${r.actual}". Compare character by character — common causes: extra/missing spaces, wrong casing, lookalike punctuation (full-width vs half-width), or a wrong number.`,
  });
}
