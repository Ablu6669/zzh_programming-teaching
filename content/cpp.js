// cpp.js — C++ 学习内容（11 知识点 × 2 题双语）
// Schema 说明见 tools/check_i18n.mjs；所有 expectedOutput 已通过 Godbolt 在线实测验证（gcc 12.3）。
export default {
  id: 'cpp',
  name: 'C++',
  description: {
    zh: '系统级高性能语言，C 的超集，加入了面向对象、模板和标准库，适合做底层与性能敏感的工程。',
    en: 'A high-performance systems language. A superset of C with OOP, templates, and a powerful standard library.',
  },
  engine: { compiler: 'g123' },
  fileName: 'main.cpp',
  playgroundStarter: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, C++!" << std::endl;\n    return 0;\n}\n',
  entryNote: {
    zh: 'g++ main.cpp -o main && ./main',
    en: 'g++ main.cpp -o main && ./main',
  },
  localGuide: {
    zh: 'g++ main.cpp -o main && ./main',
    en: 'g++ main.cpp -o main && ./main',
  },
  topics: [
    // ================= 1. Hello World =================
    {
      id: 'hello',
      title: { zh: '第一个程序', en: 'Your First Program' },
      difficulty: 1,
      lecture: {
        zh: `## 从 cout 开始

C++ 程序从 \`main()\` 函数开始执行，操作系统把返回值交给系统（\`0\` 表示成功）。最常用的输出是 \`std::cout\`：

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

### 几个要点

- \`#include <iostream>\` 把输入输出库的声明拉进来，没有它 \`std::cout\` 不可用
- \`std::\` 是命名空间前缀，意为「标准库（standard）」；C++ 标准库的符号几乎都住在 \`std\` 里
- \`<<\` 是**流插入运算符**，把右边的数据送到左边的流（这里是屏幕）
- \`std::endl\` 插入换行符并**刷新缓冲区**；也可以写 \`"\\n"\` 只换行不刷新（性能更好）
- 单行注释 \`// ...\`，块注释 \`/* ... */\`

### using 声明

每次都写 \`std::\` 很麻烦，可以用 \`using\` 简化（只在小文件 / 教学示例中方便，正式工程慎用全打开）：

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`

> 写完代码点「运行」，本站会用云端的 g++ 10.2.0 编译并执行，把输出回显给你。`,
        en: `## Start with cout

A C++ program begins at \`main()\`. The return value goes back to the OS (\`0\` means success). The standard output stream is \`std::cout\`:

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

### Key points

- \`#include <iostream>\` pulls in the I/O declarations; without it \`std::cout\` is undefined
- \`std::\` is the **standard library namespace** — almost every standard symbol lives inside it
- \`<<\` is the **stream insertion operator**: it sends the right-hand data into the left-hand stream
- \`std::endl\` writes a newline **and flushes** the buffer; \`"\\n"\` only writes the newline (faster)
- Line comments: \`// ...\`; block comments: \`/* ... */\`

### using declarations

Typing \`std::\` everywhere is noisy. You can shorten it with a \`using\` directive (fine for small files / teaching code; avoid in large codebases):

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`

> Hit Run and the site compiles your code with g++ 10.2.0 in the cloud and prints the output.`,
      },
      examples: [
        {
          caption: { zh: '多行输出', en: 'Multiple lines' },
          code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    std::cout << "I am learning C++" << std::endl;\n    return 0;\n}\n',
        },
        {
          caption: { zh: '一行多个值', en: 'Multiple values on one line' },
          code: '#include <iostream>\n\nint main() {\n    int year = 2026;\n    std::cout << "Year: " << year << std::endl;\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '打印两行问候', en: 'Print two greetings' },
          prompt: {
            zh: '编写完整程序，使用两次 \`std::cout\` 依次输出下面两行（注意标点）：\n\n\`\`\`\nHello, World!\nI am learning C++\n\`\`\`',
            en: 'Write a full program that uses \`std::cout\` twice to output these two lines (mind the punctuation):\n\n\`\`\`\nHello, World!\nI am learning C++\n\`\`\`',
          },
          starter: '#include <iostream>\n\nint main() {\n    // 在下面写你的代码\n    return 0;\n}\n',
          expectedOutput: 'Hello, World!\nI am learning C++\n',
          hint: {
            zh: '每次 \`<< std::endl\` 结束一行；也可以用 \`<< "\\n"\`。',
            en: 'Each \`<< std::endl\` ends a line; you may also use \`<< "\\n"\`.',
          },
          solution: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    std::cout << "I am learning C++" << std::endl;\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '打印三角形', en: 'Print a triangle' },
          prompt: {
            zh: '用三次 \`std::cout\` 输出一个左对齐三角形：\n\n\`\`\`\n*\n**\n***\n\`\`\`',
            en: 'Use three \`std::cout\` statements to print a left-aligned triangle:\n\n\`\`\`\n*\n**\n***\n\`\`\`',
          },
          starter: '#include <iostream>\n\nint main() {\n    // 三行输出 * / ** / ***\n    return 0;\n}\n',
          expectedOutput: '*\n**\n***\n',
          hint: {
            zh: '三次 \`std::cout << "..." << std::endl;\`。',
            en: 'Three \`std::cout << "..." << std::endl;\` statements.',
          },
          solution: '#include <iostream>\n\nint main() {\n    std::cout << "*" << std::endl;\n    std::cout << "**" << std::endl;\n    std::cout << "***" << std::endl;\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 2. 变量与基本类型 =================
    {
      id: 'variables',
      title: { zh: '变量与基本类型', en: 'Variables & Basic Types' },
      difficulty: 1,
      lecture: {
        zh: `## 变量：类型先行

和 Python 不同，C++ 是**静态类型**语言：变量必须先声明类型，编译器才允许使用：

\`\`\`cpp
int age = 20;           // 整数
double price = 9.99;    // 双精度浮点
char letter = 'A';      // 单个字符
bool ok = true;         // 布尔
std::string name = "Alice";  // 字符串（需 #include <string>）
\`\`\`

### 常用基本类型

| 类型 | 含义 | 例子 |
|---|---|---|
| \`int\` | 整数（通常 32 位） | \`42\`, \`-7\`, \`0\` |
| \`double\` | 双精度浮点 | \`3.14\`, \`2e5\` |
| \`float\` | 单精度浮点（精度较低） | \`3.14f\` |
| \`char\` | 单个字符 | \`'A'\`, \`'7'\` |
| \`bool\` | 布尔 | \`true\` / \`false\` |
| \`std::string\` | 字符串（标准库类型） | \`"hello"\` |
| \`void\` | 无类型（用于函数返回值） | — |

### 声明与初始化

\`\`\`cpp
int a;        // 声明但未初始化（值不确定！）
int b = 0;    // 声明并初始化
int c(10);    // 函数式写法（不常见，主要在面向对象里用）
\`\`\`

**警告**：未初始化的内置类型变量里是**任意垃圾值**，一定要在使用前赋值。

### auto 与类型推导

C++11 起可以用 \`auto\` 让编译器推导类型，但类型仍然在编译期就固定：

\`\`\`cpp
auto x = 42;        // x 是 int
auto pi = 3.14;     // pi 是 double
auto s = "hello";   // s 是 const char*
\`\`\`

### 输出多个值

\`\`\`cpp
std::cout << "name=" << name << ", age=" << age << std::endl;
\`\`\`

> C++ 是「值类型」语言：变量默认存的就是值本身（不像 Java/Python 那样是引用），这一点会影响后续的传参与拷贝行为。`,
        en: `## Variables: types first

Unlike Python, C++ is **statically typed**: every variable must declare its type at the point of definition; the compiler enforces it.

\`\`\`cpp
int age = 20;           // integer
double price = 9.99;    // double-precision float
char letter = 'A';      // single character
bool ok = true;         // boolean
std::string name = "Alice";  // string (requires #include <string>)
\`\`\`

### Common basic types

| Type | Meaning | Example |
|---|---|---|
| \`int\` | integer (usually 32-bit) | \`42\`, \`-7\`, \`0\` |
| \`double\` | double-precision float | \`3.14\`, \`2e5\` |
| \`float\` | single-precision float | \`3.14f\` |
| \`char\` | single character | \`'A'\`, \`'7'\` |
| \`bool\` | boolean | \`true\` / \`false\` |
| \`std::string\` | string (library type) | \`"hello"\` |
| \`void\` | no value (used as a return type) | — |

### Declaration & initialization

\`\`\`cpp
int a;        // declared but NOT initialized (value is garbage!)
int b = 0;    // declared and initialized
int c(10);    // functional form (rare for builtins; common with constructors)
\`\`\`

**Warning**: an uninitialized built-in variable holds **whatever bits happened to be in memory** — always assign before use.

### auto — type deduction

Since C++11, \`auto\` lets the compiler deduce the type. The type is still fixed at compile time:

\`\`\`cpp
auto x = 42;        // x is int
auto pi = 3.14;     // pi is double
auto s = "hello";   // s is const char* (not std::string!)
\`\`\`

### Printing multiple values

\`\`\`cpp
std::cout << "name=" << name << ", age=" << age << std::endl;
\`\`\`

> C++ is a *value-type* language by default: variables hold values directly, not references. This will matter later when we talk about parameter passing and copies.`,
      },
      examples: [
        {
          caption: { zh: '基本类型与 cout', en: 'Basic types and cout' },
          code: '#include <iostream>\n#include <string>\n\nint main() {\n    int width = 7;\n    int height = 4;\n    int area = width * height;\n    std::cout << "area = " << area << std::endl;\n    std::cout << "type of area: int" << std::endl;\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '计算矩形面积', en: 'Rectangle area' },
          prompt: {
            zh: '定义 \`int width = 7;\` 和 \`int height = 4;\`，计算面积并**只输出一个整数**（应为 \`28\`）。',
            en: 'Define \`int width = 7;\` and \`int height = 4;\`, compute the area, and **print only the integer** (should be \`28\`).',
          },
          starter: '#include <iostream>\n\nint main() {\n    int width = 7;\n    int height = 4;\n    // 计算并输出面积\n    return 0;\n}\n',
          expectedOutput: '28\n',
          hint: {
            zh: '\`std::cout << width * height << std::endl;\`。',
            en: '\`std::cout << width * height << std::endl;\`.',
          },
          solution: '#include <iostream>\n\nint main() {\n    int width = 7;\n    int height = 4;\n    std::cout << width * height << std::endl;\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '整数拆位', en: 'Digits of an integer' },
          prompt: {
            zh: '给定 \`int n = 123;\`，**每行一个整数**依次输出个位、十位、百位（输出 \`3\`、\`2\`、\`1\`）。提示：用 \`%\` 取余、\`/\` 整除。',
            en: 'Given \`int n = 123;\`, print its ones, tens, and hundreds digits, **one per line** (\`3\`, \`2\`, \`1\`). Hint: use \`%\` for the digit and \`/\` to shift.',
          },
          starter: '#include <iostream>\n\nint main() {\n    int n = 123;\n    // 个位: n % 10；十位: (n / 10) % 10；百位: n / 100\n    return 0;\n}\n',
          expectedOutput: '3\n2\n1\n',
          hint: {
            zh: '个位 \`n % 10\`；十位 \`(n / 10) % 10\`；百位 \`n / 100\`。',
            en: 'Ones \`n % 10\`; tens \`(n / 10) % 10\`; hundreds \`n / 100\`.',
          },
          solution: '#include <iostream>\n\nint main() {\n    int n = 123;\n    std::cout << (n % 10) << std::endl;\n    std::cout << ((n / 10) % 10) << std::endl;\n    std::cout << (n / 100) << std::endl;\n    return 0;\n}\n',
        },
      ],
    },

  // ================= 3. 运算符 =================
    {
      id: 'operators',
      title: { zh: '运算符与表达式', en: 'Operators & Expressions' },
      difficulty: 1,
      lecture: {
        zh: `## 算术运算符

| 运算符 | 含义 | 例子 | 结果 |
|---|---|---|---|
| \`+\` \`-\` \`*\` | 加减乘 | \`3 * 4\` | \`12\` |
| \`/\` | **整数除法**会截断小数 | \`10 / 4\` | \`2\` |
| \`%\` | 取余（仅整数） | \`10 % 4\` | \`2\` |

> **重点提醒**：C++ 的 \`/\` 对两个整数做运算时，结果仍是整数（**向下取整**，小数部分被丢掉）。
> 例如 \`10 / 4\` 是 \`2\`，**不是 2.5**。要想得到小数，必须让至少一边是浮点：\`10.0 / 4\` 或 \`double(10) / 4\`，结果是 \`2.5\`。

### 比较与逻辑运算符

- 比较：\`==\`、\`!=\`、\`<\`、\`>\`、\`<=\`、\`>=\`，结果是 \`bool\`（\`true\` / \`false\`）
- 逻辑：\`&&\`（与）、\`||\`（或）、\`!\`（非）

\`\`\`cpp
int a = 3, b = 5;
std::cout << (a < b) << std::endl;     // 1（true 被打印为 1）
std::cout << (a == b) << std::endl;   // 0
std::cout << (a < b && b < 10) << std::endl;  // 1
\`\`\`

### 自增 / 自减

- \`x++\` / \`++x\`：\`x\` 加 1（前缀先返回新值，后缀先返回旧值）
- \`x--\` / \`--x\`：\`x\` 减 1

\`\`\`cpp
int x = 5;
std::cout << x++ << std::endl;  // 5（先打印再加）
std::cout << x << std::endl;    // 6
\`\`\`

### 优先级

先乘除后加减，比较运算低于算术，逻辑运算最低。**不确定就加括号**，可读性最好。`,
        en: `## Arithmetic operators

| Operator | Meaning | Example | Result |
|---|---|---|---|
| \`+\` \`-\` \`*\` | add/sub/mul | \`3 * 4\` | \`12\` |
| \`/\` | **integer division truncates** | \`10 / 4\` | \`2\` |
| \`%\` | remainder (integer only) | \`10 % 4\` | \`2\` |

> **Watch out**: when **both operands are integers**, \`/\` performs **integer division** (truncates toward zero).
> So \`10 / 4\` is \`2\`, **not 2.5**. To get a double, make at least one side floating-point: \`10.0 / 4\` or \`double(10) / 4\` → \`2.5\`.

### Comparison & logical operators

- Comparison: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` → \`bool\` (\`true\` / \`false\`)
- Logical: \`&&\` (and), \`||\` (or), \`!\` (not)

\`\`\`cpp
int a = 3, b = 5;
std::cout << (a < b) << std::endl;     // 1 (true prints as 1)
std::cout << (a == b) << std::endl;   // 0
std::cout << (a < b && b < 10) << std::endl;  // 1
\`\`\`

### Increment / decrement

- \`x++\` / \`++x\`: increment by 1 (prefix returns the new value; postfix returns the old one)
- \`x--\` / \`--x\`: decrement by 1

\`\`\`cpp
int x = 5;
std::cout << x++ << std::endl;  // 5 (printed, then incremented)
std::cout << x << std::endl;    // 6
\`\`\`

### Precedence

Multiplication/division bind tighter than addition/subtraction. Comparison is lower than arithmetic; logical operators are lowest. **Add parentheses when in doubt.**`,
      },
      examples: [
        {
          caption: { zh: '整数除法与取余', en: 'Integer division and remainder' },
          code: '#include <iostream>\n\nint main() {\n    int a = 17, b = 5;\n    std::cout << (a / b) << std::endl;    // 3\n    std::cout << (a % b) << std::endl;    // 2\n    std::cout << (10.0 / 4) << std::endl; // 2.5\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '拆分秒数', en: 'Split seconds' },
          prompt: {
            zh: '变量 \`int total = 3775;\` 是总秒数。**每行一个**输出分钟数和剩余秒数（即输出 \`62\` 和 \`55\` 两行）。',
            en: 'Variable \`int total = 3775;\` is a number of seconds. Print the number of whole minutes and the leftover seconds, **one per line** (\`62\` and \`55\`).',
          },
          starter: '#include <iostream>\n\nint main() {\n    int total = 3775;\n    // minutes = total / 60, leftover = total % 60\n    return 0;\n}\n',
          expectedOutput: '62\n55\n',
          hint: {
            zh: '整数除法：\`total / 60\` 与 \`total % 60\`。',
            en: 'Integer division: \`total / 60\` and \`total % 60\`.',
          },
          solution: '#include <iostream>\n\nint main() {\n    int total = 3775;\n    std::cout << (total / 60) << std::endl;\n    std::cout << (total % 60) << std::endl;\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '整数除法 vs 浮点除法', en: 'Integer vs floating-point division' },
          prompt: {
            zh: '**每行一个**输出下面四个表达式的值（顺序）：\`7 / 2\`、\`7.0 / 2\`、\`7 / 2.0\`、\`7.0 / 2.0\`。期望输出 \`3\`、\`3.5\`、\`3.5\`、\`3.5\`。',
            en: 'Print, **one per line**, the values of these four expressions in order: \`7 / 2\`, \`7.0 / 2\`, \`7 / 2.0\`, \`7.0 / 2.0\`. Expected: \`3\`, \`3.5\`, \`3.5\`, \`3.5\`.',
          },
          starter: '#include <iostream>\n#include <iomanip>\n\nint main() {\n    // 注意：浮点结果要输出小数部分\n    return 0;\n}\n',
          expectedOutput: '3\n3.5\n3.5\n3.5\n',
          hint: {
            zh: 'cout 默认会输出 \`3.5\`；如果你想固定 1 位小数也可以用 \`std::fixed << std::setprecision(1)\`。',
            en: 'cout prints \`3.5\` by default; if you want one decimal place, use \`std::fixed << std::setprecision(1)\`.',
          },
          solution: '#include <iostream>\n\nint main() {\n    std::cout << (7 / 2) << std::endl;\n    std::cout << (7.0 / 2) << std::endl;\n    std::cout << (7 / 2.0) << std::endl;\n    std::cout << (7.0 / 2.0) << std::endl;\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 4. 条件分支 =================
    {
      id: 'conditionals',
      title: { zh: '条件分支', en: 'Conditionals' },
      difficulty: 1,
      lecture: {
        zh: `## if / else if / else

C++ 用大括号 \`{ }\` 表示代码块，条件表达式必须能算出 \`bool\`：

\`\`\`cpp
int score = 85;
std::string grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}
std::cout << grade << std::endl;  // B
\`\`\`

### 语法要点

- 条件写在 \`( )\` 里；**条件必须能转成 bool**，不像 Python 那样接受任意「真值」
- 即使只有一条语句，也建议**始终写大括号**——避免后续加代码时出错
- \`else if\` 可以写多个；\`else\` 最多一个，放最后

### 比较中的常见陷阱

\`\`\`cpp
int x = 0;
if (x) { /* ... */ }    // false：0 转 bool 是 false
if (x = 5) { /* ... */ } // 永远是 true，且 x 变成了 5
\`\`\`

把 \`==\` 误写成 \`=\` 是 C++ 里经典的拼写 bug，编译器通常不会警告。可以把常量放左边：\`if (5 == x)\`，写错时编译期就能发现。

### switch（多分支）

\`\`\`cpp
int day = 3;
switch (day) {
    case 1: std::cout << "Mon" << std::endl; break;
    case 2: std::cout << "Tue" << std::endl; break;
    case 3: std::cout << "Wed" << std::endl; break;
    default: std::cout << "Other" << std::endl;
}
\`\`\`

> 每个 \`case\` 末尾要写 \`break;\`，否则会**贯穿**到下一个 case。

### 三元运算符

\`\`\`cpp
int a = 3, b = 7;
int mx = (a > b) ? a : b;  // 7
\`\`\`

简洁但别嵌套太深，可读性会变差。`,
        en: `## if / else if / else

C++ uses braces \`{ }\` for blocks; the condition must evaluate to \`bool\`:

\`\`\`cpp
int score = 85;
std::string grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}
std::cout << grade << std::endl;  // B
\`\`\`

### Syntax notes

- The condition is in \`( )\`. It must be convertible to \`bool\` — unlike Python, there is no truthy concept for \`int\`
- Always use braces, even for one-liners — saves you from bugs when you later add statements
- \`else if\` can appear many times; \`else\` at most once, at the end

### Common pitfall: = vs ==

\`\`\`cpp
int x = 0;
if (x) { /* ... */ }      // false: 0 converts to false
if (x = 5) { /* ... */ }  // ALWAYS true, and x is now 5
\`\`\`

Writing \`=\` instead of \`==\` is a classic C++ typo the compiler usually does not warn about. Put the constant on the left: \`if (5 == x)\` — then a typo is a compile error.

### switch (multi-way branch)

\`\`\`cpp
int day = 3;
switch (day) {
    case 1: std::cout << "Mon" << std::endl; break;
    case 2: std::cout << "Tue" << std::endl; break;
    case 3: std::cout << "Wed" << std::endl; break;
    default: std::cout << "Other" << std::endl;
}
\`\`\`

> Each \`case\` needs \`break;\`, otherwise execution **falls through** to the next case.

### Ternary operator

\`\`\`cpp
int a = 3, b = 7;
int mx = (a > b) ? a : b;  // 7
\`\`\`

Concise, but avoid nesting — it quickly becomes unreadable.`,
      },
      examples: [
        {
          caption: { zh: '判断奇偶', en: 'Even or odd' },
          code: '#include <iostream>\n\nint main() {\n    int n = 7;\n    if (n % 2 == 0) {\n        std::cout << "even" << std::endl;\n    } else {\n        std::cout << "odd" << std::endl;\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '成绩等级', en: 'Grade a score' },
          prompt: {
            zh: '变量 \`int score = 85;\`。按规则输出等级字母：≥90 为 \`A\`，≥80 为 \`B\`，≥70 为 \`C\`，≥60 为 \`D\`，否则 \`F\`。',
            en: 'Variable \`int score = 85;\`. Print the grade letter: ≥90 → \`A\`, ≥80 → \`B\`, ≥70 → \`C\`, ≥60 → \`D\`, otherwise \`F\`.',
          },
          starter: '#include <iostream>\n\nint main() {\n    int score = 85;\n    // 用 if / else if / else 输出等级\n    return 0;\n}\n',
          expectedOutput: 'B\n',
          hint: {
            zh: '从高到低依次判断；用 \`std::cout << "B" << std::endl;\` 输出。',
            en: 'Check from high to low; print with \`std::cout << "B" << std::endl;\`.',
          },
          solution: '#include <iostream>\n\nint main() {\n    int score = 85;\n    if (score >= 90) {\n        std::cout << "A" << std::endl;\n    } else if (score >= 80) {\n        std::cout << "B" << std::endl;\n    } else if (score >= 70) {\n        std::cout << "C" << std::endl;\n    } else if (score >= 60) {\n        std::cout << "D" << std::endl;\n    } else {\n        std::cout << "F" << std::endl;\n    }\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '三个数找最大', en: 'Max of three' },
          prompt: {
            zh: '变量 \`int a = 12, b = 7, c = 9;\`。用 if / else if / else 判断并**只输出**最大的数（不要用 \`std::max\`）。',
            en: 'Variables \`int a = 12, b = 7, c = 9;\`. Use if / else if / else to print only the largest (do not use \`std::max\`).',
          },
          starter: '#include <iostream>\n\nint main() {\n    int a = 12, b = 7, c = 9;\n    // 在下面判断并输出最大值\n    return 0;\n}\n',
          expectedOutput: '12\n',
          hint: {
            zh: '先假设 a 最大；后面 elif 分支比较 b 和 c。',
            en: 'Assume a is the max; compare b and c in subsequent branches.',
          },
          solution: '#include <iostream>\n\nint main() {\n    int a = 12, b = 7, c = 9;\n    if (a >= b && a >= c) {\n        std::cout << a << std::endl;\n    } else if (b >= a && b >= c) {\n        std::cout << b << std::endl;\n    } else {\n        std::cout << c << std::endl;\n    }\n    return 0;\n}\n',
        },
      ],
    },

  // ================= 5. 循环 =================
    {
      id: 'loops',
      title: { zh: '循环', en: 'Loops' },
      difficulty: 1,
      lecture: {
        zh: `## for 循环

经典的三段式：初始化、继续条件、步进。

\`\`\`cpp
for (int i = 0; i < 5; i++) {
    std::cout << i << std::endl;
}
\`\`\`

i 依次取 0、1、2、3、4。循环变量的作用域**只限**在 for 体内（外层看不到 \`i\`）。

### while 循环

\`\`\`cpp
int n = 1;
while (n <= 3) {
    std::cout << n << std::endl;
    n++;
}
\`\`\`

### do-while

\`\`\`cpp
int k = 0;
do {
    std::cout << k << std::endl;
    k++;
} while (k < 0);   // 先执行一次，再判断条件
\`\`\`

不常用，但用于「至少要跑一次」的场景。

### 基于范围的 for（C++11）

C++11 引入的语法糖，适合遍历容器或数组：

\`\`\`cpp
std::vector<int> nums = {4, 8, 15, 16, 23};
for (int x : nums) {
    std::cout << x << std::endl;
}
// 值拷贝，改 x 不会动到原数组
for (int& x : nums) {  // 引用，可以修改
    x = x * 2;
}
\`\`\`

### break 与 continue

- \`break\`：立即跳出**整个**循环
- \`continue\`：跳过本轮剩余语句，进入下一轮

\`\`\`cpp
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;  // 跳过 3
    if (i == 7) break;     // 到 7 就停
    std::cout << i << " ";  // 0 1 2 4 5 6
}
\`\`\`

> 写 while / do-while 一定要让循环条件最终变 false，否则就是死循环（云端运行会超时被杀）。`,
        en: `## for loops

Classic three-part form: initialise, condition, advance.

\`\`\`cpp
for (int i = 0; i < 5; i++) {
    std::cout << i << std::endl;
}
\`\`\`

\`i\` takes 0, 1, 2, 3, 4. The loop variable's scope is **limited to the loop body**.

### while loops

\`\`\`cpp
int n = 1;
while (n <= 3) {
    std::cout << n << std::endl;
    n++;
}
\`\`\`

### do-while

\`\`\`cpp
int k = 0;
do {
    std::cout << k << std::endl;
    k++;
} while (k < 0);   // body runs once, then condition is checked
\`\`\`

Rare, but useful when the body must run at least once.

### Range-based for (C++11)

A convenient syntax for iterating over containers/arrays:

\`\`\`cpp
std::vector<int> nums = {4, 8, 15, 16, 23};
for (int x : nums) {           // copies: modifying x does not touch the vector
    std::cout << x << std::endl;
}
for (int& x : nums) {          // reference: modifies in place
    x = x * 2;
}
\`\`\`

### break & continue

- \`break\`: exit the loop immediately
- \`continue\`: skip the rest of this iteration

\`\`\`cpp
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;  // skip 3
    if (i == 7) break;     // stop at 7
    std::cout << i << " "; // 0 1 2 4 5 6
}
\`\`\`

> In while / do-while, make sure the condition can eventually become false — otherwise it loops forever and the sandbox times out.`,
      },
      examples: [
        {
          caption: { zh: '累加 1 到 100', en: 'Sum 1 to 100' },
          code: '#include <iostream>\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 100; i++) {\n        total += i;\n    }\n    std::cout << total << std::endl;  // 5050\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '求和 1~100', en: 'Sum 1..100' },
          prompt: {
            zh: '用循环计算 1+2+…+100 的和并输出（应为 \`5050\`）。不要用公式 \`(n*(n+1))/2\` 直接算。',
            en: 'Use a loop to compute 1+2+…+100 and print it (should be \`5050\`). Do not use the closed-form formula.',
          },
          starter: '#include <iostream>\n\nint main() {\n    int total = 0;\n    // 循环里 total += i，最后输出\n    return 0;\n}\n',
          expectedOutput: '5050\n',
          hint: {
            zh: '\`for (int i = 1; i <= 100; i++) total += i;\`，最后 \`std::cout << total << std::endl;\`。',
            en: '\`for (int i = 1; i <= 100; i++) total += i;\`, then print the total.',
          },
          solution: '#include <iostream>\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 100; i++) {\n        total += i;\n    }\n    std::cout << total << std::endl;\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '9 行乘法口诀', en: '9-row times table' },
          prompt: {
            zh: '输出 7 的乘法口诀，共 9 行，格式**严格**为 \`7 x 1 = 7\`、\`7 x 2 = 14\` …… \`7 x 9 = 63\`（数字与字母 x 之间有一个空格）。',
            en: 'Print the 7 times table, 9 lines, in the **exact** format \`7 x 1 = 7\`, \`7 x 2 = 14\`, …, \`7 x 9 = 63\` (single spaces around \`x\` and \`=\`).',
          },
          starter: '#include <iostream>\n\nint main() {\n    // for (int i = 1; i <= 9; i++) { ... }\n    return 0;\n}\n',
          expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n',
          hint: {
            zh: '\`std::cout << "7 x " << i << " = " << (7 * i) << std::endl;\`。',
            en: '\`std::cout << "7 x " << i << " = " << (7 * i) << std::endl;\`.',
          },
          solution: '#include <iostream>\n\nint main() {\n    for (int i = 1; i <= 9; i++) {\n        std::cout << "7 x " << i << " = " << (7 * i) << std::endl;\n    }\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 6. 函数 =================
    {
      id: 'functions',
      title: { zh: '函数', en: 'Functions' },
      difficulty: 2,
      lecture: {
        zh: `## 定义与调用

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}

int main() {
    std::cout << add(3, 4) << std::endl;  // 7
    return 0;
}
\`\`\`

### 要点

- 函数有**返回类型**、**名字**、**参数列表**、**函数体**
- \`return\` 把值交回调用方并退出函数；没写 \`return\` 的非 void 函数是 UB（未定义行为）
- 形参和返回值都有**类型**，类型不一致编译失败
- 函数必须在使用前**声明**（前向声明 / 写在前面都行）

### 无返回值：void

\`\`\`cpp
void greet(const std::string& name) {
    std::cout << "Hello, " << name << std::endl;
}
\`\`\`

### 默认参数

C++ 支持**默认参数**，从右往左连续指定：

\`\`\`cpp
int power(int base, int exp = 2) {
    int result = 1;
    for (int i = 0; i < exp; i++) result *= base;
    return result;
}
power(5);       // 25
power(2, 10);   // 1024
\`\`\`

### 函数重载

**同名函数**只要参数列表不同就可以共存（参数类型、个数不同）：

\`\`\`cpp
int abs(int x)    { return x < 0 ? -x : x; }
double abs(double x) { return x < 0 ? -x : x; }
\`\`\`

返回类型不同**不构成**重载条件。

### 引用传参（修改实参）

C++ 默认是**值传递**：形参是实参的拷贝。要在函数里改外部值，用**引用** \`&\`：

\`\`\`cpp
void swap(int& a, int& b) {
    int t = a; a = b; b = t;
}
int x = 3, y = 8;
swap(x, y);   // x=8, y=3
\`\`\`

只读而不复制，用 \`const\` 引用：

\`\`\`cpp
void printVec(const std::vector<int>& v) {
    for (int x : v) std::cout << x << " ";
    std::cout << std::endl;
}
\`\`\`

> 函数是组织代码的基本单元：名字说明它做什么，参数列出输入，返回值说明输出。`,
        en: `## Define & call

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}

int main() {
    std::cout << add(3, 4) << std::endl;  // 7
    return 0;
}
\`\`\`

### Notes

- A function has a **return type**, **name**, **parameter list**, and **body**
- \`return\` sends the value back and exits the function; omitting \`return\` in a non-\`void\` function is undefined behavior
- Parameters and the return type both have **types**; mismatched types fail to compile
- A function must be **declared** before it is used (forward declaration, or just define it earlier)

### void — no return value

\`\`\`cpp
void greet(const std::string& name) {
    std::cout << "Hello, " << name << std::endl;
}
\`\`\`

### Default arguments

C++ supports default arguments; they must be specified **right-to-left** without gaps:

\`\`\`cpp
int power(int base, int exp = 2) {
    int result = 1;
    for (int i = 0; i < exp; i++) result *= base;
    return result;
}
power(5);       // 25
power(2, 10);   // 1024
\`\`\`

### Function overloading

Same name with **different parameter lists** is allowed (different types or arity):

\`\`\`cpp
int    abs(int x)    { return x < 0 ? -x : x; }
double abs(double x) { return x < 0 ? -x : x; }
\`\`\`

A different return type alone does **not** count.

### Pass by reference (modify the caller)

By default C++ passes arguments **by value** — the parameter is a copy. To modify the caller's variable, use a **reference** \`&\`:

\`\`\`cpp
void swap(int& a, int& b) {
    int t = a; a = b; b = t;
}
int x = 3, y = 8;
swap(x, y);   // x=8, y=3
\`\`\`

For read-only access without copying, use a \`const\` reference:

\`\`\`cpp
void printVec(const std::vector<int>& v) {
    for (int x : v) std::cout << x << " ";
    std::cout << std::endl;
}
\`\`\`

> Functions are the basic unit of organization: name says what it does, parameters list inputs, the return value is the output.`,
      },
      examples: [
        {
          caption: { zh: '重载、默认参数、引用', en: 'Overloading, defaults, references' },
          code: '#include <iostream>\n#include <string>\n\nvoid greet(const std::string& name, const std::string& greeting = "Hello") {\n    std::cout << greeting << ", " << name << "!" << std::endl;\n}\n\nint add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }\n\nint main() {\n    greet("Bob");              // Hello, Bob!\n    greet("Alice", "Hi");      // Hi, Alice!\n    std::cout << add(3, 4) << std::endl;       // 7\n    std::cout << add(1.5, 2.5) << std::endl;   // 4\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '判断素数', en: 'Prime checker' },
          prompt: {
            zh: '编写函数 \`bool is_prime(int n);\`：n 是素数返回 \`true\`，否则 \`false\`。然后用它**每行一个**输出 20 以内的所有素数（2 3 5 7 11 13 17 19，共 8 行）。注意 cout 打印 bool 时默认是 \`0\` / \`1\`，但我们打印的是数字本身，所以 cout << i，不要打 \`true\`。',
            en: 'Write \`bool is_prime(int n);\` returning \`true\` for primes, else \`false\`. Then print every prime below 20, **one per line** (2 3 5 7 11 13 17 19 — 8 lines). Print the numbers themselves, not booleans.',
          },
          starter: '#include <iostream>\n\nbool is_prime(int n) {\n    // 在下面实现\n    return false;\n}\n\nint main() {\n    // 输出 20 以内的素数\n    return 0;\n}\n',
          expectedOutput: '2\n3\n5\n7\n11\n13\n17\n19\n',
          hint: {
            zh: '小于 2 不是素数；用 \`for (int i = 2; i < n; i++)\` 检查能否整除。',
            en: 'Anything below 2 is not prime; check divisors with \`for (int i = 2; i < n; i++)\`.',
          },
          solution: '#include <iostream>\n\nbool is_prime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; i < n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    for (int n = 2; n < 20; n++) {\n        if (is_prime(n)) {\n            std::cout << n << std::endl;\n        }\n    }\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '引用交换两数', en: 'Swap by reference' },
          prompt: {
            zh: '编写函数 \`void swap(int& a, int& b);\` 交换两个整数。给定 \`int a = 3, b = 8;\`，调用后**每行一个**输出 a 和 b（即 \`8\` 和 \`3\`）。',
            en: 'Write \`void swap(int& a, int& b);\`. Given \`int a = 3, b = 8;\`, after calling it print a and b, **one per line** (\`8\` then \`3\`).',
          },
          starter: '#include <iostream>\n\nvoid swap(int& a, int& b) {\n    // 在下面实现\n}\n\nint main() {\n    int a = 3, b = 8;\n    swap(a, b);\n    // 两行输出\n    return 0;\n}\n',
          expectedOutput: '8\n3\n',
          hint: {
            zh: '交换：\`int t = a; a = b; b = t;\`。',
            en: 'Swap: \`int t = a; a = b; b = t;\`.',
          },
          solution: '#include <iostream>\n\nvoid swap(int& a, int& b) {\n    int t = a;\n    a = b;\n    b = t;\n}\n\nint main() {\n    int a = 3, b = 8;\n    swap(a, b);\n    std::cout << a << std::endl;\n    std::cout << b << std::endl;\n    return 0;\n}\n',
        },
      ],
    },

      // ================= 7. 数组与 std::vector =================
    {
      id: 'arrays',
      title: { zh: '数组与 std::vector', en: 'Arrays & std::vector' },
      difficulty: 2,
      lecture: {
        zh: `## C 风格数组（了解即可）

\`\`\`cpp
int a[5] = {1, 2, 3, 4, 5};
std::cout << a[0] << std::endl;  // 1（下标从 0 开始）
\`\`\`

缺点：**长度固定、不能自动扩容、不知道自己的长度**。实际工程里几乎不用。

## std::vector（重点）

动态数组，会在背后自动管理内存，是 C++ 里最常用的「序列容器」。要包含头文件 \`<vector>\`。

### 创建

\`\`\`cpp
#include <vector>
std::vector<int> v1;                   // 空 vector
std::vector<int> v2(5);                // 5 个 0
std::vector<int> v3(5, 7);             // 5 个 7
std::vector<int> v4 = {1, 2, 3, 4};    // 初始化列表
\`\`\`

### 常用操作

| 操作 | 说明 |
|---|---|
| \`v.size()\` | 元素个数（无符号整数） |
| \`v.empty()\` | 是否为空 |
| \`v[i]\` / \`v.at(i)\` | 下标访问（\`at\` 会做越界检查） |
| \`v.push_back(x)\` | 尾部追加 |
| \`v.pop_back()\` | 弹出尾部 |
| \`v.front()\` / \`v.back()\` | 读首 / 尾元素 |
| \`v.clear()\` | 清空所有元素 |
| \`v.resize(n)\` | 调整大小 |

### 遍历

\`\`\`cpp
std::vector<int> nums = {4, 8, 15, 16, 23};
for (int i = 0; i < nums.size(); i++) {
    std::cout << nums[i] << std::endl;
}
for (int x : nums) {                   // range-for，简洁
    std::cout << x << std::endl;
}
\`\`\`

### 二维 vector

\`\`\`cpp
std::vector<std::vector<int>> grid = {
    {1, 2, 3},
    {4, 5, 6}
  ],
};
std::cout << grid[0][1] << std::endl;  // 2
\`\`\`

> **优先用 \`std::vector\`**，而不是裸数组。size 随时能拿，push_back 自动扩容，几乎没有不用它的理由。`,
        en: `## C-style arrays (for context)

\`\`\`cpp
int a[5] = {1, 2, 3, 4, 5};
std::cout << a[0] << std::endl;  // 1 (index from 0)
\`\`\`

Drawbacks: **fixed size, no growth, no built-in length**. Rarely used in real C++ code.

## std::vector (the focus)

A dynamic array that manages memory for you — the workhorse sequence container. Include \`<vector>\`.

### Creating vectors

\`\`\`cpp
#include <vector>
std::vector<int> v1;                   // empty
std::vector<int> v2(5);                // 5 zeros
std::vector<int> v3(5, 7);             // 5 sevens
std::vector<int> v4 = {1, 2, 3, 4};    // initializer list
\`\`\`

### Common operations

| Operation | Description |
|---|---|
| \`v.size()\` | element count (unsigned) |
| \`v.empty()\` | is it empty? |
| \`v[i]\` / \`v.at(i)\` | index access (\`at\` throws on out-of-range) |
| \`v.push_back(x)\` | append |
| \`v.pop_back()\` | remove last |
| \`v.front()\` / \`v.back()\` | first / last element |
| \`v.clear()\` | remove everything |
| \`v.resize(n)\` | change size |

### Iteration

\`\`\`cpp
std::vector<int> nums = {4, 8, 15, 16, 23};
for (size_t i = 0; i < nums.size(); i++) {
    std::cout << nums[i] << std::endl;
}
for (int x : nums) {                   // range-for, cleaner
    std::cout << x << std::endl;
}
\`\`\`

### 2D vector

\`\`\`cpp
std::vector<std::vector<int>> grid = {
    {1, 2, 3},
    {4, 5, 6}
  ],
};
std::cout << grid[0][1] << std::endl;  // 2
\`\`\`

> **Prefer \`std::vector\`** over raw arrays. You get \`.size()\`, automatic growth via \`push_back\`, and there is almost no reason to reach for a plain array.`,
      },
      examples: [
        {
          caption: { zh: 'vector 常用操作', en: 'Common vector operations' },
          code: '#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> v;\n    v.push_back(10);\n    v.push_back(20);\n    v.push_back(30);\n    std::cout << v.size() << std::endl;   // 3\n    std::cout << v[1] << std::endl;       // 20\n    v.pop_back();\n    std::cout << v.size() << std::endl;   // 2\n    for (int x : v) {\n        std::cout << x << " ";           // 10 20\n    }\n    std::cout << std::endl;\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: 'vector 统计', en: 'vector statistics' },
          prompt: {
            zh: '给定 \`std::vector<int> nums = {4, 8, 15, 16, 23, 42};\`，**每行一个**依次输出：总和、最大值、最小值、元素个数。',
            en: 'Given \`std::vector<int> nums = {4, 8, 15, 16, 23, 42};\`, print — **one per line** — the sum, maximum, minimum, and element count.',
          },
          starter: '#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {4, 8, 15, 16, 23, 42};\n    // 在下面输出四行\n    return 0;\n}\n',
          expectedOutput: '108\n42\n4\n6\n',
          hint: {
            zh: '手写累加；\`std::max_element\` / \`std::min_element\` 配合 \`*it\` 取最大值；\`nums.size()\`。',
            en: 'Sum manually; \`std::max_element\` / \`std::min_element\` give iterators — dereference with \`*it\`; \`nums.size()\`.',
          },
          solution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {4, 8, 15, 16, 23, 42};\n    int total = 0;\n    for (int x : nums) total += x;\n    int mx = *std::max_element(nums.begin(), nums.end());\n    int mn = *std::min_element(nums.begin(), nums.end());\n    std::cout << total << std::endl;\n    std::cout << mx << std::endl;\n    std::cout << mn << std::endl;\n    std::cout << nums.size() << std::endl;\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '偶数的平方', en: 'Squares of evens' },
          prompt: {
            zh: '把 1~10 中的偶数平方后**每行一个**输出（4、16、36、64、100）。用 \`std::vector\` 暂存结果。',
            en: 'Compute the squares of even numbers from 1 to 10 and print **one per line** (4, 16, 36, 64, 100). Stash results in a \`std::vector\`.',
          },
          starter: '#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> result;\n    // for 循环里 push_back\n    return 0;\n}\n',
          expectedOutput: '4\n16\n36\n64\n100\n',
          hint: {
            zh: '遍历 1..10，偶数就 \`result.push_back(x * x)\`。',
            en: 'Loop 1..10, push \`x * x\` for evens.',
          },
          solution: '#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> result;\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) {\n            result.push_back(i * i);\n        }\n    }\n    for (int x : result) {\n        std::cout << x << std::endl;\n    }\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 8. 字符串 =================
    {
      id: 'strings',
      title: { zh: '字符串 std::string', en: 'Strings (std::string)' },
      difficulty: 2,
      lecture: {
        zh: `## C 风格字符串（了解）

\`\`\`cpp
const char* s = "hello";   // 末尾隐含 \\0
char buf[20];              // 缓冲区，必须足够大
\`\`\`

缺点：**长度信息藏在末尾的 \`\\0\`、容易越界、与 STL 算法不兼容**。新手先用 \`std::string\`。

## std::string（推荐）

\`\`\`cpp
#include <string>
std::string s = "hello";
std::cout << s << std::endl;
\`\`\`

### 常用操作

| 操作 | 例子 | 说明 |
|---|---|---|
| \`s.size()\` / \`s.length()\` | \`"hi".size()\` | 返回长度（2） |
| \`s.empty()\` | — | 是否为空 |
| \`s + t\` | \`"ab" + "cd"\` | 拼接 |
| \`s[i]\` / \`s.at(i)\` | \`s[0]\` | 下标访问 |
| \`s == t\` | — | 内容比较（不是指针比较） |
| \`s.substr(pos, len)\` | \`"hello".substr(1, 3)\` → \`"ell"\` | 子串 |
| \`s.find(t)\` | \`"abc".find("b")\` → \`1\` | 查找位置，未找到返回 \`npos\` |
| \`s.c_str()\` | — | 转回 C 风格（需要时） |

### 修改操作

\`\`\`cpp
std::string s = "hello";
s.push_back('!');          // "hello!"
s.append(" world");        // "hello! world"
s.insert(0, ">> ");        // ">> hello! world"
s.erase(0, 3);             // "hello! world"
s.replace(0, 5, "HI");     // "HI! world"
\`\`\`

### 与数字互转

\`\`\`cpp
int n = std::stoi("123");           // 字符串 → 整数
std::string s = std::to_string(42); // 整数 → 字符串
\`\`\`

> C++ 的字符串和 Python 最大的不同：内容**可修改**（s[0] = 'H' 合法），但下标访问不会自动扩容。`,
        en: `## C-style strings (for context)

\`\`\`cpp
const char* s = "hello";   // implicit \\0 terminator
char buf[20];              // fixed buffer; size up to you
\`\`\`

Drawbacks: **length is implicit (\\0 terminator), easy to overflow, doesn't work with STL algorithms**. Start with \`std::string\`.

## std::string (recommended)

\`\`\`cpp
#include <string>
std::string s = "hello";
std::cout << s << std::endl;
\`\`\`

### Common operations

| Operation | Example | Notes |
|---|---|---|
| \`s.size()\` / \`s.length()\` | \`"hi".size()\` | length (2) |
| \`s.empty()\` | — | is empty? |
| \`s + t\` | \`"ab" + "cd"\` | concatenation |
| \`s[i]\` / \`s.at(i)\` | \`s[0]\` | index access |
| \`s == t\` | — | value comparison (not pointer) |
| \`s.substr(pos, len)\` | \`"hello".substr(1, 3)\` → \`"ell"\` | substring |
| \`s.find(t)\` | \`"abc".find("b")\` → \`1\` | index; \`npos\` if not found |
| \`s.c_str()\` | — | back to C string when needed |

### Mutating operations

\`\`\`cpp
std::string s = "hello";
s.push_back('!');          // "hello!"
s.append(" world");        // "hello! world"
s.insert(0, ">> ");        // ">> hello! world"
s.erase(0, 3);             // "hello! world"
s.replace(0, 5, "HI");     // "HI! world"
\`\`\`

### Number conversion

\`\`\`cpp
int n = std::stoi("123");             // string -> int
std::string s = std::to_string(42);   // int -> string
\`\`\`

> The big difference vs Python: \`std::string\` is **mutable** (\`s[0] = 'H'\` is fine), but index access never grows the buffer automatically.`,
      },
      examples: [
        {
          caption: { zh: 'string 方法串烧', en: 'String method medley' },
          code: '#include <iostream>\n#include <string>\n\nint main() {\n    std::string s = "Hello C++";\n    std::cout << s.size() << std::endl;          // 9\n    std::cout << s.substr(0, 5) << std::endl;     // Hello\n    std::cout << s.find("C++") << std::endl;      // 6\n    std::string t = s + " world";\n    std::cout << t << std::endl;                  // Hello C++ world\n    std::cout << std::stoi("123") + 1 << std::endl; // 124\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '字符串统计', en: 'String stats' },
          prompt: {
            zh: '给定 \`std::string s = "Hello C++";\`，**每行一个**输出：长度、全大写形式、首尾字符（中间空格分隔，即 \`H +\`）。',
            en: 'Given \`std::string s = "Hello C++";\`, print **one per line**: length, uppercase form, and the first & last chars separated by a space (i.e. \`H +\`).',
          },
          starter: '#include <iostream>\n#include <string>\n\nint main() {\n    std::string s = "Hello C++";\n    // 三行输出\n    return 0;\n}\n',
          expectedOutput: '9\nHELLO C++\nH +\n',
          hint: {
            zh: '\`s.size()\`；C++ 标准库没有 \`upper\`，但可以遍历 \`s[i] = std::toupper(s[i])\`；最后用 \`s[0]\` 与 \`s.back()\`。',
            en: '\`s.size()\`; no built-in \`upper\`, but \`s[i] = std::toupper(s[i])\` works; use \`s[0]\` and \`s.back()\` for the two ends.',
          },
          solution: '#include <iostream>\n#include <string>\n#include <cctype>\n\nint main() {\n    std::string s = "Hello C++";\n    std::string upper = s;\n    for (size_t i = 0; i < upper.size(); i++) {\n        upper[i] = static_cast<char>(std::toupper(static_cast<unsigned char>(upper[i])));\n    }\n    std::cout << s.size() << std::endl;\n    std::cout << upper << std::endl;\n    std::cout << s[0] << " " << s.back() << std::endl;\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '回文判断', en: 'Palindrome check' },
          prompt: {
            zh: '编写函数 \`bool is_palindrome(const std::string& s);\`（忽略大小写）。对 \`"racecar"\` 和 \`"hello"\` 分别输出判定结果（\`1\` / \`0\`，各占一行，注意 C++ 打印 bool 是 \`1\` / \`0\`）。',
            en: 'Write \`bool is_palindrome(const std::string& s);\` (case-insensitive). Print the verdict for \`"racecar"\` and \`"hello"\` — \`1\` / \`0\`, one per line (C++ prints bools as \`1\` / \`0\`).',
          },
          starter: '#include <iostream>\n#include <string>\n\nbool is_palindrome(const std::string& s) {\n    // 在下面实现\n    return false;\n}\n\nint main() {\n    std::cout << is_palindrome("racecar") << std::endl;\n    std::cout << is_palindrome("hello") << std::endl;\n    return 0;\n}\n',
          expectedOutput: '1\n0\n',
          hint: {
            zh: '双指针：\`i\` 从头、\`j\` 从尾，比较前 \`std::tolower\`；遇不等返回 false。',
            en: 'Two pointers, \`i\` from the front and \`j\` from the back; lowercase both before comparing; return false on mismatch.',
          },
          solution: '#include <iostream>\n#include <string>\n#include <cctype>\n\nbool is_palindrome(const std::string& s) {\n    size_t i = 0, j = s.size();\n    if (j == 0) return true;\n    j--;\n    while (i < j) {\n        char a = static_cast<char>(std::tolower(static_cast<unsigned char>(s[i])));\n        char b = static_cast<char>(std::tolower(static_cast<unsigned char>(s[j])));\n        if (a != b) return false;\n        i++; j--;\n    }\n    return true;\n}\n\nint main() {\n    std::cout << is_palindrome("racecar") << std::endl;\n    std::cout << is_palindrome("hello") << std::endl;\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 9. 指针与引用 =================
    {
      id: 'pointers',
      title: { zh: '指针与引用', en: 'Pointers & References' },
      difficulty: 3,
      lecture: {
        zh: `## 引用：变量的别名

\`\`\`cpp
void swap(int& a, int& b) {   // 引用参数：直接操作原变量
    int t = a; a = b; b = t;
}
\`\`\`

**引用**必须在定义时绑定且不可改绑，常用于函数传参（避免拷贝大对象）。\`const T&\` 既避免拷贝又不允许修改，是只读参数的标准写法。

## 指针：存地址的变量

\`\`\`cpp
int x = 42;
int* p = &x;      // p 存 x 的地址
cout << *p;       // 42（解引用：取地址上的值）
*p = 100;         // 通过指针修改 x
\`\`\`

- \`&x\` 取地址；\`*p\` 解引用
- 指针可以为 \`nullptr\`，可以重新指向别处
- 引用 vs 指针：引用是"别名"（更安全），指针是"地址"（更灵活）

### 动态内存 new / delete

\`\`\`cpp
int* arr = new int[5];      // 堆上分配
for (int i = 0; i < 5; i++) arr[i] = i * i;
delete[] arr;               // 用完必须释放，否则内存泄漏
\`\`\`

> 现代 C++ 优先用 \`std::vector\`、\`std::string\` 和智能指针（\`unique_ptr\`），把手动 new/delete 降到最少。`,
        en: `## References: aliases for variables

\`\`\`cpp
void swap(int& a, int& b) {   // reference params: operate on the originals
    int t = a; a = b; b = t;
}
\`\`\`

A **reference** must be bound at definition and can never rebind. It is the standard way to avoid copying large objects; \`const T&\` gives read-only access without a copy.

## Pointers: variables holding addresses

\`\`\`cpp
int x = 42;
int* p = &x;      // p holds the address of x
cout << *p;       // 42 (dereference: value at that address)
*p = 100;         // modify x through the pointer
\`\`\`

- \`&x\` takes the address; \`*p\` dereferences
- A pointer can be \`nullptr\` and can be re-pointed
- Reference vs pointer: a reference is an alias (safer); a pointer is an address (more flexible)

### Dynamic memory: new / delete

\`\`\`cpp
int* arr = new int[5];      // allocate on the heap
for (int i = 0; i < 5; i++) arr[i] = i * i;
delete[] arr;               // must free, or it leaks
\`\`\`

> Modern C++ prefers \`std::vector\`, \`std::string\`, and smart pointers (\`unique_ptr\`) to minimize manual new/delete.`,
      },
      examples: [
        {
          caption: { zh: '引用传参与指针解引用', en: 'Reference params & pointer deref' },
          code: '#include <iostream>\n\nvoid swap(int& a, int& b) { int t = a; a = b; b = t; }\n\nint main() {\n    int x = 3, y = 8;\n    swap(x, y);\n    std::cout << x << " " << y << std::endl;   // 8 3\n\n    int* p = &x;\n    std::cout << *p << std::endl;              // 8\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '用引用交换两个数', en: 'Swap via references' },
          prompt: {
            zh: '编写函数 \`void mySwap(int& a, int& b)\` 用引用交换两个整数。在 main 里令 \`a = 3\`、\`b = 8\`，交换后输出 \`8 3\`（空格分隔，一行）。',
            en: 'Write \`void mySwap(int& a, int& b)\` that swaps two ints via references. In main set \`a = 3\`, \`b = 8\`, swap, then print \`8 3\` (space-separated, one line).',
          },
          starter: '#include <iostream>\n\n// 在下面实现 mySwap\n\nint main() {\n    int a = 3, b = 8;\n    // 调用 mySwap 后输出\n    return 0;\n}\n',
          expectedOutput: '8 3\n',
          hint: {
            zh: '引用参数 \`int&\` 直接修改原变量；交换用临时变量。',
            en: 'Reference params \`int&\` modify the originals directly; use a temp for the swap.',
          },
          solution: '#include <iostream>\n\nvoid mySwap(int& a, int& b) {\n    int t = a;\n    a = b;\n    b = t;\n}\n\nint main() {\n    int a = 3, b = 8;\n    mySwap(a, b);\n    std::cout << a << " " << b << std::endl;\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '动态数组与平方表', en: 'Dynamic array of squares' },
          prompt: {
            zh: '用 \`new int[5]\` 在堆上创建数组，填入 1~5 的平方，**每行一个**输出（1、4、9、16、25），最后 \`delete[]\` 释放。',
            en: 'Allocate an array with \`new int[5]\` on the heap, fill it with squares of 1..5, print them **one per line** (1, 4, 9, 16, 25), then free with \`delete[]\`.',
          },
          starter: '#include <iostream>\n\nint main() {\n    // 1) new int[5]  2) 填平方  3) 输出  4) delete[]\n    return 0;\n}\n',
          expectedOutput: '1\n4\n9\n16\n25\n',
          hint: {
            zh: '`arr[i] = (i + 1) * (i + 1);`（下标从 0 开始）。',
            en: '`arr[i] = (i + 1) * (i + 1);` (indices start at 0).',
          },
          solution: '#include <iostream>\n\nint main() {\n    int* arr = new int[5];\n    for (int i = 0; i < 5; i++) {\n        arr[i] = (i + 1) * (i + 1);\n    }\n    for (int i = 0; i < 5; i++) {\n        std::cout << arr[i] << std::endl;\n    }\n    delete[] arr;\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 10. 类与对象 =================
    {
      id: 'oop',
      title: { zh: '类与对象', en: 'Classes & Objects' },
      difficulty: 3,
      lecture: {
        zh: `## 定义类

\`\`\`cpp
class Rectangle {
private:                  // 私有成员：外部不可直接访问（封装）
    double width, height;

public:                   // 公开接口
    Rectangle(double w, double h) : width(w), height(h) {}   // 构造函数（初始化列表）

    double area() const { return width * height; }   // const 成员函数：不修改成员
  ],
};
\`\`\`

### 三大特性

- **封装**：数据 private + 公开方法访问，类自己维护不变量
- **继承**：\`class Square : public Rectangle {...}\` 复用基类
- **多态**：基类指针 + \`virtual\` 函数，运行期决定调用谁

\`\`\`cpp
class Animal {
public:
    virtual std::string speak() const { return "..."; }
    virtual ~Animal() = default;      // 基类析构必须是 virtual
  ],
};

class Dog : public Animal {
public:
    std::string speak() const override { return "Woof"; }
  ],
};

Animal* a = new Dog();
std::cout << a->speak();    // Woof（多态）
\`\`\`

### 构造 / 析构

对象创建时执行构造函数，销毁时执行析构函数（\`~Rectangle()\`）。栈对象离开作用域自动析构——这是 RAII 的基础。

> 命名习惯：成员函数用 camelCase 或 snake_case 保持一致即可；\`override\` 关键字显式标注重写，防拼错。`,
        en: `## Defining a class

\`\`\`cpp
class Rectangle {
private:                  // private members: hidden from outside (encapsulation)
    double width, height;

public:                   // public interface
    Rectangle(double w, double h) : width(w), height(h) {}   // constructor (init list)

    double area() const { return width * height; }   // const member function
  ],
};
\`\`\`

### The three pillars

- **Encapsulation**: data private + public accessors; the class guards its invariants
- **Inheritance**: \`class Square : public Rectangle {...}\` reuses the base
- **Polymorphism**: base pointer + \`virtual\` function — resolved at runtime

\`\`\`cpp
class Animal {
public:
    virtual std::string speak() const { return "..."; }
    virtual ~Animal() = default;      // base destructor must be virtual
  ],
};

class Dog : public Animal {
public:
    std::string speak() const override { return "Woof"; }
  ],
};

Animal* a = new Dog();
std::cout << a->speak();    // Woof (polymorphism)
\`\`\`

### Constructors / destructors

Constructors run on creation; destructors (\`~Rectangle()\`) on destruction. Stack objects destruct automatically at scope exit — the basis of RAII.

> Style: keep one naming convention for member functions; mark overrides with \`override\` to catch typos.`,
      },
      examples: [
        {
          caption: { zh: '类、继承与多态', en: 'Class, inheritance, polymorphism' },
          code: '#include <iostream>\n#include <string>\n\nclass Animal {\npublic:\n    Animal(std::string n) : name(n) {}\n    virtual std::string speak() const { return name + " makes a sound"; }\n    virtual ~Animal() = default;\nprotected:\n    std::string name;\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(std::string n) : Animal(n) {}\n    std::string speak() const override { return name + " barks"; }\n};\n\nint main() {\n    Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };\n    for (Animal* p : pets) {\n        std::cout << p->speak() << std::endl;\n        delete p;\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '矩形类', en: 'Rectangle class' },
          prompt: {
            zh: '定义类 \`Rectangle\`（私有成员 \`width\`、\`height\`，构造函数，\`area()\` 和 \`perimeter()\`）。创建 \`Rectangle(3, 4)\`，**每行一个**输出面积和周长。',
            en: 'Define a \`Rectangle\` class (private \`width\`, \`height\`; constructor; \`area()\` and \`perimeter()\`). Create \`Rectangle(3, 4)\` and print the area and perimeter, **one per line**.',
          },
          starter: '#include <iostream>\n\nclass Rectangle {\n    // 在下面实现：私有成员、构造函数、area、perimeter\n};\n\nint main() {\n    Rectangle r(3, 4);\n    // 输出面积和周长\n    return 0;\n}\n',
          expectedOutput: '12\n14\n',
          hint: {
            zh: '构造函数用初始化列表：`Rectangle(int w, int h) : width(w), height(h) {}`。',
            en: 'Use an init list: `Rectangle(int w, int h) : width(w), height(h) {}`.',
          },
          solution: '#include <iostream>\n\nclass Rectangle {\nprivate:\n    int width, height;\npublic:\n    Rectangle(int w, int h) : width(w), height(h) {}\n\n    int area() const { return width * height; }\n    int perimeter() const { return 2 * (width + height); }\n};\n\nint main() {\n    Rectangle r(3, 4);\n    std::cout << r.area() << std::endl;\n    std::cout << r.perimeter() << std::endl;\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '动物多态', en: 'Animal polymorphism' },
          prompt: {
            zh: '定义基类 \`Animal\`（构造接收名字 name，\`virtual std::string speak() const\` 默认返回 \`名字 + " makes a sound"\`），派生类 \`Dog\` 重写为 \`名字 + " barks"\`。用基类指针数组存放 \`Animal("Cat")\` 和 \`Dog("Rex")\`，依次调用 \`speak()\` 输出（每行一个，注意用完 delete）。',
            en: 'Define base class \`Animal\` (constructor takes name; \`virtual std::string speak() const\` returning \`name + " makes a sound"\`) and derived \`Dog\` overriding with \`name + " barks"\`. Store an \`Animal("Cat")\` and a \`Dog("Rex")\` in a base-pointer array and call \`speak()\` on each (one per line; remember to delete).',
          },
          starter: '#include <iostream>\n#include <string>\n\n// 在下面定义 Animal 和 Dog\n\nint main() {\n    // 用基类指针数组 + 多态输出两行\n    return 0;\n}\n',
          expectedOutput: 'Cat makes a sound\nRex barks\n',
          hint: {
            zh: '基类析构要 `virtual ~Animal() = default;`；派生类构造 `Dog(std::string n) : Animal(n) {}`。',
            en: 'Base needs `virtual ~Animal() = default;`; derived ctor `Dog(std::string n) : Animal(n) {}`.',
          },
          solution: '#include <iostream>\n#include <string>\n\nclass Animal {\npublic:\n    Animal(std::string n) : name(n) {}\n    virtual std::string speak() const { return name + " makes a sound"; }\n    virtual ~Animal() = default;\nprotected:\n    std::string name;\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(std::string n) : Animal(n) {}\n    std::string speak() const override { return name + " barks"; }\n};\n\nint main() {\n    Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };\n    for (Animal* p : pets) {\n        std::cout << p->speak() << std::endl;\n        delete p;\n    }\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 11. 文件流 =================
    {
      id: 'files',
      title: { zh: '文件流', en: 'File Streams' },
      difficulty: 3,
      lecture: {
        zh: `## fstream 三兄弟

| 类 | 用途 |
|---|---|
| \`std::ofstream\` | 写文件 |
| \`std::ifstream\` | 读文件 |
| \`std::fstream\` | 读写 |

\`\`\`cpp
#include <fstream>

std::ofstream out("note.txt");    // 打开即创建（覆盖模式）
out << "first line" << std::endl;
out << "second line" << std::endl;
out.close();                      // 也可等析构自动关闭

std::ifstream in("note.txt");
std::string line;
while (std::getline(in, line)) {  // 逐行读
    std::cout << line << std::endl;
}
\`\`\`

### 判断打开是否成功

\`\`\`cpp
std::ifstream in("missing.txt");
if (!in) {
    std::cout << "cannot open file";
}
\`\`\`

### getline 与 >>

- \`std::getline(in, line)\`：读整行（不含换行符），返回流本身可作循环条件
- \`in >> word\`：按空白切分读取

> 与 Python 的 \`with open\` 类似，文件流对象析构时自动关闭；但显式 \`close()\` 是好习惯。`,
        en: `## The fstream family

| Class | Purpose |
|---|---|
| \`std::ofstream\` | write |
| \`std::ifstream\` | read |
| \`std::fstream\` | both |

\`\`\`cpp
#include <fstream>

std::ofstream out("note.txt");    // opens (truncating) on construction
out << "first line" << std::endl;
out << "second line" << std::endl;
out.close();                      // destructor also closes automatically

std::ifstream in("note.txt");
std::string line;
while (std::getline(in, line)) {  // line by line
    std::cout << line << std::endl;
}
\`\`\`

### Checking whether a file opened

\`\`\`cpp
std::ifstream in("missing.txt");
if (!in) {
    std::cout << "cannot open file";
}
\`\`\`

### getline vs >>

- \`std::getline(in, line)\`: reads a whole line (without the newline); the stream itself works as the loop condition
- \`in >> word\`: whitespace-delimited tokens

> Like Python's \`with open\`, stream objects close on destruction; explicit \`close()\` is still good practice.`,
      },
      examples: [
        {
          caption: { zh: '写入再读回', en: 'Write then read back' },
          code: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    {\n        std::ofstream out("demo.txt");\n        out << "apple" << std::endl;\n        out << "banana" << std::endl;\n    }\n    std::ifstream in("demo.txt");\n    std::string line;\n    while (std::getline(in, line)) {\n        std::cout << line << std::endl;\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '写入并读回', en: 'Write and read back' },
          prompt: {
            zh: '用 \`std::ofstream\` 把 \`Hello File\` 写入 \`test.txt\`，再用 \`std::ifstream\` + \`getline\` 读出。**两行输出**：第一行是文件内容 \`Hello File\`，第二行是 \`lines: 1\`（行数）。',
            en: 'Write \`Hello File\` into \`test.txt\` with \`std::ofstream\`, then read it back with \`std::ifstream\` + \`getline\`. Output **two lines**: the content \`Hello File\`, then \`lines: 1\` (the line count).',
          },
          starter: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    // 1) 写入 test.txt  2) 读回  3) 输出内容与行数\n    return 0;\n}\n',
          expectedOutput: 'Hello File\nlines: 1\n',
          hint: {
            zh: '写入一行不带 endl 则为 1 行；行数用计数器在 getline 循环里累加。',
            en: 'Write one line without endl so it stays 1 line; count lines with a counter inside the getline loop.',
          },
          solution: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    {\n        std::ofstream out("test.txt");\n        out << "Hello File";\n    }\n\n    std::ifstream in("test.txt");\n    std::string content;\n    std::string line;\n    int lines = 0;\n    while (std::getline(in, line)) {\n        if (lines == 0) content = line;\n        lines++;\n    }\n\n    std::cout << content << std::endl;\n    std::cout << "lines: " << lines << std::endl;\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '统计行数与字符数', en: 'Count lines and characters' },
          prompt: {
            zh: '把三行 \`apple\`、\`banana\`、\`cherry\` 写入 \`fruits.txt\`，再读回并输出：总行数 \`3\` 和总字符数 \`17\`（不含换行符），**每行一个**。',
            en: 'Write the three lines \`apple\`, \`banana\`, \`cherry\` to \`fruits.txt\`, read it back, and print the line count \`3\` and total character count \`17\` (excluding newlines), **one per line**.',
          },
          starter: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    // 写入 → 读回 → 统计行数与字符数\n    return 0;\n}\n',
          expectedOutput: '3\n17\n',
          hint: {
            zh: '字符数 = `line.size()` 累加，在 getline 循环里同时统计。',
            en: 'Chars = accumulate `line.size()` inside the same getline loop.',
          },
          solution: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    {\n        std::ofstream out("fruits.txt");\n        out << "apple" << std::endl;\n        out << "banana" << std::endl;\n        out << "cherry" << std::endl;\n    }\n\n    std::ifstream in("fruits.txt");\n    std::string line;\n    int lines = 0, chars = 0;\n    while (std::getline(in, line)) {\n        lines++;\n        chars += static_cast<int>(line.size());\n    }\n\n    std::cout << lines << std::endl;\n    std::cout << chars << std::endl;\n    return 0;\n}\n',
        },
      ],
    },

  ],
};
