// c.js — C 语言学习内容（11 知识点 × 2 题双语）
// Schema 说明见 tools/check_i18n.mjs；所有 expectedOutput 已通过 Godbolt 在线实测验证（gcc 12.3）。
export default {
  id: 'c',
  name: 'C',
  description: {
    zh: '现代主流系统级编程语言，性能极致、控制力极强，是理解操作系统与编译器的入门钥匙。',
    en: 'A mainstream systems language with ultimate performance and low-level control — the gateway to operating systems and compilers.',
  },
  engine: { compiler: 'cg123' },
  fileName: 'main.c',
  playgroundStarter: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C!\\n");\n    return 0;\n}\n',
  entryNote: {
    zh: 'gcc main.c -o main && ./main',
    en: 'gcc main.c -o main && ./main',
  },
  localGuide: {
    zh: 'gcc main.c -o main && ./main',
    en: 'gcc main.c -o main && ./main',
  },
  topics: [
    // ================= 1. Hello World =================
    {
      id: 'hello',
      title: { zh: '第一个程序', en: 'Your First Program' },
      difficulty: 1,
      lecture: {
        zh: `## 从 Hello, World 开始

C 程序从 \`main\` 函数开始执行。最简单的程序：

\`\`\`c
#include <stdio.h>

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

### 几个要点

- \`#include <stdio.h>\` 引入标准输入输出头文件，\`printf\` 就在里头
- \`int main(void)\` 是入口函数：\`int\` 表示返回整数，\`void\` 表示无参数
- \`printf("...")\` 输出字符串，\`\\n\` 是换行符
- \`return 0\` 返回 0 表示程序正常结束
- 每条语句以**分号 \`;\`** 结尾

### 编译与运行

\`\`\`bash
gcc main.c -o main
./main
\`\`\`

本站「运行」按钮会替你完成编译并执行。

> 头文件用尖括号 \`<...>\`；分号一定不能漏。`,
        en: `## Start with Hello, World

A C program begins execution at \`main\`. The smallest program:

\`\`\`c
#include <stdio.h>

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

### Key points

- \`#include <stdio.h>\` pulls in the standard I/O header, where \`printf\` lives
- \`int main(void)\` is the entry point: \`int\` returns an integer exit status, \`void\` means no parameters
- \`printf("...")\` outputs a string; \`\\n\` is the newline escape
- \`return 0\` signals normal termination
- Every statement ends with a **semicolon \`;\`**

### Compile & run

\`\`\`bash
gcc main.c -o main
./main
\`\`\`

The Run button on this site compiles and executes for you.

> Use angle brackets \`<...>\` for system headers; never forget the semicolon.`,
      },
      examples: [
        {
          caption: { zh: '你好，世界', en: 'Hello, world' },
          code: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C!\\n");\n    printf("你好，C\\n");\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '打印两行问候', en: 'Print two greetings' },
          prompt: {
            zh: '使用两次 `printf` 输出下面两行（注意大小写和标点）：\n\n```\nHello, World!\nI am learning C\n```',
            en: 'Use two `printf` calls to output these two lines (watch capitalization and punctuation):\n\n```\nHello, World!\nI am learning C\n```',
          },
          starter: '/* 练习 1：输出两行文字 */\n#include <stdio.h>\n\nint main(void) {\n    /* 在下面写你的代码 */\n\n    return 0;\n}\n',
          expectedOutput: 'Hello, World!\nI am learning C\n',
          hint: {
            zh: '`printf` 不会自动换行，每次都要在字符串末尾写上 `\\n`。',
            en: '`printf` does not add newlines automatically — include `\\n` in the format string each time.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, World!\\n");\n    printf("I am learning C\\n");\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '打印三角形', en: 'Print a triangle' },
          prompt: {
            zh: '用三次 `printf` 输出一个左对齐的三角形（**严格**按下面三行）：\n\n```\n*\n**\n***\n```',
            en: 'Use three `printf` calls to output a left-aligned triangle (**exactly** these three lines):\n\n```\n*\n**\n***\n```',
          },
          starter: '/* 练习 2：输出三角形 */\n#include <stdio.h>\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: '*\n**\n***\n',
          hint: {
            zh: '三次 `printf` 分别输出 `"*"`、`"**"`、`"***"`，记得末尾的 `\\n`。',
            en: 'Three `printf` calls output `"*"`, `"**"`, `"***"` — remember the trailing `\\n`.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    printf("*\\n");\n    printf("**\\n");\n    printf("***\\n");\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 2. 变量与基本类型 =================
    {
      id: 'variables',
      title: { zh: '变量与基本类型', en: 'Variables & Basic Types' },
      difficulty: 1,
      lecture: {
        zh: `## 变量：给数据起名字

C 是**静态类型**语言：使用变量前必须先**声明类型**。

\`\`\`c
int age = 20;          // 整数
float price = 9.99f;   // 单精度浮点
double pi = 3.14159;   // 双精度浮点（推荐）
char grade = 'A';      // 单个字符
\`\`\`

### 常用基本类型

| 类型 | 含义 | printf 格式 |
|---|---|---|
| \`int\` | 整数（通常 32 位） | \`%d\` |
| \`float\` | 单精度浮点 | \`%f\` |
| \`double\` | 双精度浮点 | \`%f\` |
| \`char\` | 单个字符 | \`%c\` |

### printf 输出变量

\`\`\`c
int age = 20;
printf("age = %d\\n", age);          // age = 20
double pi = 3.14159;
printf("pi = %.2f\\n", pi);          // pi = 3.14
char grade = 'A';
printf("grade = %c\\n", grade);      // grade = A
\`\`\`

> 字符用**单引号** \`'A'\`，字符串用**双引号** \`"A"\`——两者不同。

### 类型转换

- 整数 ↔ 浮点：\`int x = (int)3.14;\`（截断小数）
- 整数 ↔ 字符串：用 \`<stdlib.h>\` 的 \`atoi\` / \`sprintf\``,
        en: `## Variables: naming data

C is **statically typed**: you must declare a variable's type **before using it**.

\`\`\`c
int age = 20;          // integer
float price = 9.99f;   // single-precision float
double pi = 3.14159;   // double-precision float (preferred)
char grade = 'A';      // single character
\`\`\`

### Common basic types

| Type | Meaning | printf format |
|---|---|---|
| \`int\` | integer (typically 32-bit) | \`%d\` |
| \`float\` | single-precision float | \`%f\` |
| \`double\` | double-precision float | \`%f\` |
| \`char\` | single character | \`%c\` |

### Printing variables

\`\`\`c
int age = 20;
printf("age = %d\\n", age);          // age = 20
double pi = 3.14159;
printf("pi = %.2f\\n", pi);          // pi = 3.14
char grade = 'A';
printf("grade = %c\\n", grade);      // grade = A
\`\`\`

> Characters use **single quotes** \`'A'\`; strings use **double quotes** \`"A"\` — they are different things.

### Type conversions

- int ↔ float: \`int x = (int)3.14;\` (truncates)
- int ↔ string: \`atoi\` / \`sprintf\` from \`<stdlib.h\``,
      },
      examples: [
        {
          caption: { zh: '基本类型与 printf', en: 'Basic types and printf' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int age = 25;\n    double height = 1.75;\n    char initial = \'A\';\n    printf("age = %d\\n", age);\n    printf("height = %.2f\\n", height);\n    printf("initial = %c\\n", initial);\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '矩形面积', en: 'Rectangle area' },
          prompt: {
            zh: '声明 `int width = 7`、`int height = 4`，计算面积并用 `printf` 输出**只一个数字**（应为 28）。',
            en: 'Declare `int width = 7`, `int height = 4`, compute the area and use `printf` to print **just the number** (should be 28).',
          },
          starter: '/* 练习 1：矩形面积 */\n#include <stdio.h>\n\nint main(void) {\n    int width = 7;\n    int height = 4;\n    /* 在下面输出面积 */\n\n    return 0;\n}\n',
          expectedOutput: '28\n',
          hint: {
            zh: '`int area = width * height;`，然后 `printf("%d\\n", area);`。',
            en: '`int area = width * height;` then `printf("%d\\n", area);`.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int width = 7;\n    int height = 4;\n    int area = width * height;\n    printf("%d\\n", area);\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '摄氏转华氏', en: 'Celsius to Fahrenheit' },
          prompt: {
            zh: '变量 `int c = 37` 表示摄氏温度。公式：`f = c * 9 / 5 + 32`。用整数算术后输出 `f` 的值（应为 98）。',
            en: 'Variable `int c = 37` is a Celsius temperature. Formula: `f = c * 9 / 5 + 32`. With integer arithmetic print `f` (should be 98).',
          },
          starter: '/* 练习 2：摄氏 → 华氏 */\n#include <stdio.h>\n\nint main(void) {\n    int c = 37;\n    /* 在下面计算并输出 f */\n\n    return 0;\n}\n',
          expectedOutput: '98\n',
          hint: {
            zh: '整数运算 37 * 9 / 5 + 32 = 98（整数除法会自动截断小数）。',
            en: 'Integer math 37 * 9 / 5 + 32 = 98 (integer division truncates the fraction).',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int c = 37;\n    int f = c * 9 / 5 + 32;\n    printf("%d\\n", f);\n    return 0;\n}\n',
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
| \`/\` | 整数除法（截断小数） | \`10 / 4\` | \`2\` |
| \`%\` | 取余 | \`10 % 4\` | \`2\` |

> 整数除法只保留整数部分：\`10 / 4 = 2\`，**不是 2.5**。想保留小数就至少让一个操作数是浮点：\`10.0 / 4 = 2.5\`。

### 自增自减

- \`i++\` 先用再加 1
- \`++i\` 先加 1 再用
- \`i--\` / \`--i\` 同理

\`\`\`c
int a = 5, b = 5;
printf("%d %d\\n", a++, ++b);   // 5 6
\`\`\`

### 比较与逻辑

- 比较：\`==\`、\`!=\`、\`<\`、\`>\`、\`<=\`、\`>=\`，结果是 \`0\`（假）或 \`1\`（真）
- 逻辑：\`&&\`、\`||\`、\`!\`（注意是**两个** \`&\`）

### 优先级

\`()\` > \`++\` \`--\` > \`*\` \`/\` \`%\` > \`+\` \`-\` > 比较 > \`&&\` > \`||\`。**记不清就加括号**。`,
        en: `## Arithmetic operators

| Operator | Meaning | Example | Result |
|---|---|---|---|
| \`+\` \`-\` \`*\` | add/sub/mul | \`3 * 4\` | \`12\` |
| \`/\` | integer division (truncates) | \`10 / 4\` | \`2\` |
| \`%\` | remainder | \`10 % 4\` | \`2\` |

> Integer division keeps only the integer part: \`10 / 4 = 2\`, **not 2.5**. Promote at least one operand to floating-point: \`10.0 / 4 = 2.5\`.

### Increment / decrement

- \`i++\` use first, then add 1
- \`++i\` add 1, then use
- \`i--\` / \`--i\` likewise

\`\`\`c
int a = 5, b = 5;
printf("%d %d\\n", a++, ++b);   // 5 6
\`\`\`

### Comparison & logical

- Comparison: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` → \`0\` (false) or \`1\` (true)
- Logical: \`&&\`, \`||\`, \`!\` (note the **double** \`&\`)

### Precedence

\`()\` > \`++\` \`--\` > \`*\` \`/\` \`%\` > \`+\` \`-\` > comparisons > \`&&\` > \`||\`. **Add parentheses when unsure.**`,
      },
      examples: [
        {
          caption: { zh: '整数除法与取余', en: 'Integer division and remainder' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int a = 17, b = 5;\n    printf("%d %d %d\\n", a / b, a % b, 2 * a + b);   // 3 2 39\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '拆分秒数', en: 'Split seconds' },
          prompt: {
            zh: '变量 `int total = 3775` 是总秒数。**每行一个**输出分钟数和剩余秒数（应为 62 和 55）。',
            en: 'Variable `int total = 3775` is a number of seconds. Print the number of whole minutes and the leftover seconds, **one per line** (should be 62 and 55).',
          },
          starter: '/* 练习 1：拆分秒数 */\n#include <stdio.h>\n\nint main(void) {\n    int total = 3775;\n\n    return 0;\n}\n',
          expectedOutput: '62\n55\n',
          hint: {
            zh: '整数除法 `total / 60` 取分，取余 `total % 60` 取秒。',
            en: 'Use integer division `total / 60` for minutes and remainder `total % 60` for seconds.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int total = 3775;\n    printf("%d\\n", total / 60);\n    printf("%d\\n", total % 60);\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '交换两个变量', en: 'Swap two variables' },
          prompt: {
            zh: '变量 `int a = 3`、`int b = 8`。交换它们的值后**只输出一行** `a b`（输出应为 8 3）。',
            en: 'Variables `int a = 3`, `int b = 8`. Swap them and print **one line** `a b` (output should be 8 3).',
          },
          starter: '/* 练习 2：交换 a 和 b */\n#include <stdio.h>\n\nint main(void) {\n    int a = 3;\n    int b = 8;\n\n    return 0;\n}\n',
          expectedOutput: '8 3\n',
          hint: {
            zh: '需要一个临时变量：`int t = a; a = b; b = t;`。',
            en: 'Need a temporary: `int t = a; a = b; b = t;`.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a = 3;\n    int b = 8;\n    int t = a;\n    a = b;\n    b = t;\n    printf("%d %d\\n", a, b);\n    return 0;\n}\n',
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

\`\`\`c
int score = 85;
if (score >= 90) {
    printf("A\\n");
} else if (score >= 80) {
    printf("B\\n");
} else {
    printf("C\\n");
}
\`\`\`

### 语法要点

- 条件要写在小括号 \`()\` 里，**不能省**
- 代码块用**大括号 \`{}\`** 包裹，哪怕只有一条语句也建议写
- \`else if\` 可以连续多次；\`else\` 最多一个，放在最后
- \`==\` 是比较，\`=\` 是赋值，**别写错**

### switch

当分支由一个**整数**或**字符**决定时，\`switch\` 更直观：

\`\`\`c
int day = 3;
switch (day) {
    case 1: printf("Mon\\n"); break;
    case 2: printf("Tue\\n"); break;
    case 3: printf("Wed\\n"); break;
    default: printf("Other\\n");
}
\`\`\`

> 每个 \`case\` 末尾的 \`break\` 千万不能漏，否则会**穿透**到下一个 case。`,
        en: `## if / else if / else

\`\`\`c
int score = 85;
if (score >= 90) {
    printf("A\\n");
} else if (score >= 80) {
    printf("B\\n");
} else {
    printf("C\\n");
}
\`\`\`

### Syntax notes

- The condition goes in parentheses \`()\` — they are **required**
- The body is wrapped in **braces \`{}\`**; always write them, even for a single statement
- You may have many \`else if\` branches; at most one \`else\`, placed last
- \`==\` compares; \`=\` assigns — **do not mix them up**

### switch

When the branch depends on a single **integer** or **character**, \`switch\` is cleaner:

\`\`\`c
int day = 3;
switch (day) {
    case 1: printf("Mon\\n"); break;
    case 2: printf("Tue\\n"); break;
    case 3: printf("Wed\\n"); break;
    default: printf("Other\\n");
}
\`\`\`

> Do not forget \`break\` at the end of each \`case\`, or execution will **fall through** to the next one.`,
      },
      examples: [
        {
          caption: { zh: '判断奇偶', en: 'Even or odd' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int n = 7;\n    if (n % 2 == 0) {\n        printf("even\\n");\n    } else {\n        printf("odd\\n");\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '成绩等级', en: 'Grade a score' },
          prompt: {
            zh: '变量 `int score = 85`。按规则输出等级（一个字母）：≥90 为 `A`，≥80 为 `B`，≥70 为 `C`，≥60 为 `D`，否则 `F`。',
            en: 'Variable `int score = 85`. Output the grade letter: ≥90 → `A`, ≥80 → `B`, ≥70 → `C`, ≥60 → `D`, otherwise `F`.',
          },
          starter: '/* 练习 1：成绩等级 */\n#include <stdio.h>\n\nint main(void) {\n    int score = 85;\n\n    return 0;\n}\n',
          expectedOutput: 'B\n',
          hint: {
            zh: '从高到低依次判断：`if (score >= 90) ... else if (score >= 80) ...`。',
            en: 'Check from high to low: `if (score >= 90) ... else if (score >= 80) ...`.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int score = 85;\n    if (score >= 90) {\n        printf("A\\n");\n    } else if (score >= 80) {\n        printf("B\\n");\n    } else if (score >= 70) {\n        printf("C\\n");\n    } else if (score >= 60) {\n        printf("D\\n");\n    } else {\n        printf("F\\n");\n    }\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '三个数找最大', en: 'Max of three' },
          prompt: {
            zh: '变量 `a = 12`、`b = 7`、`c = 9`。用 if/else 输出最大的数（不要用 `?:` 之外的库函数）。',
            en: 'Variables `a = 12`, `b = 7`, `c = 9`. Use if/else to print the largest (no library helpers).',
          },
          starter: '/* 练习 2：找最大值 */\n#include <stdio.h>\n\nint main(void) {\n    int a = 12, b = 7, c = 9;\n\n    return 0;\n}\n',
          expectedOutput: '12\n',
          hint: {
            zh: '两两比较：`if (a >= b && a >= c) ...` 等等。',
            en: 'Compare pairwise: `if (a >= b && a >= c) ...`, etc.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a = 12, b = 7, c = 9;\n    if (a >= b && a >= c) {\n        printf("%d\\n", a);\n    } else if (b >= a && b >= c) {\n        printf("%d\\n", b);\n    } else {\n        printf("%d\\n", c);\n    }\n    return 0;\n}\n',
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

\`\`\`c
for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);       // 0 1 2 3 4
}
\`\`\`

三个表达式分别是「**初始化**」「**条件**」「**步进**」，每轮循环都执行一次。

## while 循环

\`\`\`c
int n = 1;
while (n <= 3) {
    printf("%d\\n", n);
    n++;
}
\`\`\`

## do-while 循环

先执行一次再判断条件，**至少执行一次**：

\`\`\`c
int n = 0;
do {
    printf("%d\\n", n);
    n++;
} while (n < 1);
\`\`\`

## break 与 continue

- \`break\`：立即跳出**整个**循环
- \`continue\`：跳过本轮剩余语句，进入**下一轮**

\`\`\`c
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;
    if (i == 6) break;
    printf("%d\\n", i);     // 0 1 2 4 5
}
\`\`\`

> while 必须有让条件变 false 的路径，否则**死循环**会超时。`,
        en: `## for loop

\`\`\`c
for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);       // 0 1 2 3 4
}
\`\`\`

The three parts are **init**, **condition**, and **step**, evaluated each iteration.

## while loop

\`\`\`c
int n = 1;
while (n <= 3) {
    printf("%d\\n", n);
    n++;
}
\`\`\`

## do-while loop

Run the body once first, then check the condition. **Always runs at least once**:

\`\`\`c
int n = 0;
do {
    printf("%d\\n", n);
    n++;
} while (n < 1);
\`\`\`

## break & continue

- \`break\`: exit the **entire** loop immediately
- \`continue\`: skip the rest of this iteration and move to the **next** one

\`\`\`c
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;
    if (i == 6) break;
    printf("%d\\n", i);     // 0 1 2 4 5
}
\`\`\`

> A while loop must eventually make the condition false — otherwise it runs **forever** and times out.`,
      },
      examples: [
        {
          caption: { zh: '累加 1 到 100', en: 'Sum 1 to 100' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int total = 0;\n    for (int i = 1; i <= 100; i++) {\n        total += i;\n    }\n    printf("%d\\n", total);   // 5050\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '求和 1~100', en: 'Sum 1..100' },
          prompt: {
            zh: '用循环计算 1+2+…+100 的和并输出（应为 5050）。不要直接套公式。',
            en: 'Use a loop to compute 1+2+…+100 and print the sum (should be 5050). Do not use the closed-form formula.',
          },
          starter: '/* 练习 1：累加 */\n#include <stdio.h>\n\nint main(void) {\n    /* int total = 0; for (i = 1; i <= 100; i++) total += i; */\n\n    return 0;\n}\n',
          expectedOutput: '5050\n',
          hint: {
            zh: '`int total = 0;` 然后 `for (int i = 1; i <= 100; i++) total += i;`，最后输出。',
            en: '`int total = 0;` then `for (int i = 1; i <= 100; i++) total += i;`, then print.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int total = 0;\n    for (int i = 1; i <= 100; i++) {\n        total += i;\n    }\n    printf("%d\\n", total);\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '乘法口诀', en: 'Times table' },
          prompt: {
            zh: '输出 7 的乘法口诀，共 9 行，格式**严格**为 `7 x 1 = 7`、`7 x 2 = 14`…`7 x 9 = 63`（数字与字母 x 之间有空格）。',
            en: 'Print the 7 times table, 9 lines, in the **exact** format `7 x 1 = 7`, `7 x 2 = 14`, …, `7 x 9 = 63` (spaces around `x` and `=`).',
          },
          starter: '/* 练习 2：乘法口诀 */\n#include <stdio.h>\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n',
          hint: {
            zh: '`for (int i = 1; i <= 9; i++) printf("7 x %d = %d\\n", i, 7 * i);`。',
            en: '`for (int i = 1; i <= 9; i++) printf("7 x %d = %d\\n", i, 7 * i);`.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 9; i++) {\n        printf("7 x %d = %d\\n", i, 7 * i);\n    }\n    return 0;\n}\n',
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

\`\`\`c
int add(int a, int b) {
    return a + b;
}

int main(void) {
    int r = add(3, 4);     // 7
    return 0;
}
\`\`\`

### 要点

- 每个参数和返回值都必须写**类型**
- \`return\` 把值送回调用处，并立即结束函数
- 没有 \`return\` 时函数返回值未定义（除非声明为 \`void\`）
- C99 之后可写 \`int main(void)\`

### 原型声明（prototype）

如果函数定义在 \`main\` **之后**，调用前需要**先声明**：

\`\`\`c
int add(int, int);        // 原型：只写类型不写参数名

int main(void) {
    printf("%d\\n", add(2, 3));
    return 0;
}

int add(int a, int b) {
    return a + b;
}
\`\`\`

> 工程上常把原型集中放进 \`.h\` 头文件，再用 \`#include\` 引入。

### 值传递

C 默认**按值传递**：函数拿到的是参数的**副本**，不会改动调用者的变量。

\`\`\`c
void bump(int x) {
    x = x + 1;       // 改的是副本
}
\`\`\`

想真正改外部变量？下一章「指针」会教。`,
        en: `## Define & call

\`\`\`c
int add(int a, int b) {
    return a + b;
}

int main(void) {
    int r = add(3, 4);     // 7
    return 0;
}
\`\`\`

### Notes

- Every parameter and the return value must have a **type**
- \`return\` sends back a value and exits the function immediately
- A non-\`void\` function without \`return\` has undefined behavior
- In C99+ write \`int main(void)\`

### Prototypes

If a function is defined **after** its first use, declare a prototype first:

\`\`\`c
int add(int, int);        // prototype: types only

int main(void) {
    printf("%d\\n", add(2, 3));
    return 0;
}

int add(int a, int b) {
    return a + b;
}
\`\`\`

> In real projects prototypes usually live in a \`.h\` header and are pulled in with \`#include\`.

### Pass by value

C is **pass-by-value** by default: a function receives a **copy**, so it cannot change the caller's variable.

\`\`\`c
void bump(int x) {
    x = x + 1;       // only the copy changes
}
\`\`\`

Need to actually modify a variable? See the next chapter — Pointers.`,
      },
      examples: [
        {
          caption: { zh: '原型 + 多函数', en: 'Prototype + multiple functions' },
          code: '#include <stdio.h>\n\nint square(int n);\nint sum(int a, int b);\n\nint main(void) {\n    printf("%d %d\\n", square(5), sum(3, 4));   // 25 7\n    return 0;\n}\n\nint square(int n) {\n    return n * n;\n}\n\nint sum(int a, int b) {\n    return a + b;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '判断素数', en: 'Prime checker' },
          prompt: {
            zh: '编写函数 `is_prime(int n)`：是素数返回 1，否则返回 0。然后用它**每行一个**输出 20 以内的所有素数（2 3 5 7 11 13 17 19，共 8 行）。',
            en: 'Write `is_prime(int n)` returning 1 for primes else 0. Then print every prime below 20, **one per line** (2 3 5 7 11 13 17 19 — 8 lines).',
          },
          starter: '/* 练习 1：素数 */\n#include <stdio.h>\n\nint is_prime(int n) {\n    /* 在下面实现 */\n    return 0;\n}\n\nint main(void) {\n    /* 输出 20 以内的素数 */\n    return 0;\n}\n',
          expectedOutput: '2\n3\n5\n7\n11\n13\n17\n19\n',
          hint: {
            zh: '小于 2 不是素数；用 `for (int i = 2; i < n; i++)` 检查能否整除。',
            en: 'Below 2 is not prime; test divisors with `for (int i = 2; i < n; i++)`.',
          },
          solution: '#include <stdio.h>\n\nint is_prime(int n) {\n    if (n < 2) return 0;\n    for (int i = 2; i < n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main(void) {\n    for (int n = 2; n < 20; n++) {\n        if (is_prime(n)) {\n            printf("%d\\n", n);\n        }\n    }\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '求阶乘', en: 'Factorial' },
          prompt: {
            zh: '编写函数 `int factorial(int n)`（0! = 1）。调用它输出 5! 的值（应为 120），单独一行。',
            en: 'Write `int factorial(int n)` (with 0! = 1). Call it to print the value of 5! (should be 120), on its own line.',
          },
          starter: '/* 练习 2：阶乘 */\n#include <stdio.h>\n\nint factorial(int n) {\n    /* 在下面实现 */\n    return 1;\n}\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: '120\n',
          hint: {
            zh: '递归写法：`if (n <= 1) return 1; else return n * factorial(n - 1);`。',
            en: 'Recursive: `if (n <= 1) return 1; else return n * factorial(n - 1);`.',
          },
          solution: '#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main(void) {\n    printf("%d\\n", factorial(5));\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 7. 数组 =================
    {
      id: 'arrays',
      title: { zh: '数组', en: 'Arrays' },
      difficulty: 2,
      lecture: {
        zh: `## 一维数组

\`\`\`c
int nums[5] = {4, 8, 15, 16, 23};
printf("%d\\n", nums[0]);      // 4（下标从 0 开始）
printf("%d\\n", nums[4]);      // 23
\`\`\`

### 常用模式

- **下标**：从 \`0\` 到 \`长度-1\`，越界访问是常见 bug
- **遍历**：用 for 循环
- **求长度**：C 没有 length 属性，常在**声明时**记下来：\`int n = sizeof(nums) / sizeof(nums[0]);\`

### 二维数组

\`\`\`c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
printf("%d\\n", matrix[1][2]);      // 6（行 1、列 2）
\`\`\`

用**双重 for** 遍历：外层走行，内层走列。

### 数组名 vs 指针

数组名 \`nums\` 在大多数表达式里会**退化为**指向首元素的指针。细节在「指针」一章展开。

> 数组大小一旦确定就**不能改**；越界写入可能毁掉其它变量。`,
        en: `## One-dimensional arrays

\`\`\`c
int nums[5] = {4, 8, 15, 16, 23};
printf("%d\\n", nums[0]);      // 4 (index starts at 0)
printf("%d\\n", nums[4]);      // 23
\`\`\`

### Common patterns

- **Indexing**: from \`0\` to \`length - 1\`; out-of-bounds is a common bug
- **Iteration**: use a for loop
- **Length**: C has no \`length\` property — record it yourself at **declaration time**: \`int n = sizeof(nums) / sizeof(nums[0]);\`

### Two-dimensional arrays

\`\`\`c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
printf("%d\\n", matrix[1][2]);      // 6 (row 1, col 2)
\`\`\`

Use **nested for** loops: outer loop over rows, inner over columns.

### Array names vs pointers

The array name \`nums\` **decays** into a pointer to its first element in most expressions. Details in the Pointers chapter.

> An array's size is fixed at declaration and **cannot grow**; out-of-bounds writes can corrupt other variables.`,
      },
      examples: [
        {
          caption: { zh: '求最大与二维遍历', en: 'Max and 2D iteration' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int a[5] = {3, 1, 4, 1, 5};\n    int max = a[0];\n    for (int i = 1; i < 5; i++) {\n        if (a[i] > max) max = a[i];\n    }\n    printf("max = %d\\n", max);     // max = 5\n\n    int m[2][3] = {{1,2,3},{4,5,6}};\n    for (int r = 0; r < 2; r++) {\n        for (int c = 0; c < 3; c++) {\n            printf("%d ", m[r][c]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '数组求和', en: 'Array sum' },
          prompt: {
            zh: '给定 `int a[5] = {4, 8, 15, 16, 23}`，**只输出一行**数组元素的总和（应为 66）。',
            en: 'Given `int a[5] = {4, 8, 15, 16, 23}`, print **one line** with the sum of its elements (should be 66).',
          },
          starter: '/* 练习 1：数组求和 */\n#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n\n    return 0;\n}\n',
          expectedOutput: '66\n',
          hint: {
            zh: '累加变量 `int s = 0;` 然后循环 `s += a[i];`。',
            en: 'Accumulate: `int s = 0;` then loop `s += a[i];`.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n    int s = 0;\n    for (int i = 0; i < 5; i++) {\n        s += a[i];\n    }\n    printf("%d\\n", s);\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '打印 3×3 矩阵', en: 'Print 3x3 matrix' },
          prompt: {
            zh: '用双重 for 循环按行输出 3×3 矩阵 `{{1,2,3},{4,5,6},{7,8,9}}`，数字之间用空格，行末换行（最后一行也换行）。',
            en: 'Use nested for loops to print the 3x3 matrix `{{1,2,3},{4,5,6},{7,8,9}}` row by row, numbers separated by a space, each row terminated by a newline (last row included).',
          },
          starter: '/* 练习 2：3x3 矩阵 */\n#include <stdio.h>\n\nint main(void) {\n    int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n\n    return 0;\n}\n',
          expectedOutput: '1 2 3\n4 5 6\n7 8 9\n',
          hint: {
            zh: '`printf("%d ", m[r][c])` 输出数字；每行结束 `printf("\\n")`。',
            en: '`printf("%d ", m[r][c])` for cells; `printf("\\n")` at the end of each row.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    for (int r = 0; r < 3; r++) {\n        for (int c = 0; c < 3; c++) {\n            printf("%d ", m[r][c]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 8. 字符串 =================
    {
      id: 'strings',
      title: { zh: '字符串', en: 'Strings' },
      difficulty: 2,
      lecture: {
        zh: `## C 的「字符串」是字符数组

C 没有专门的字符串类型。所谓字符串就是**末尾以 \`\\0\` 结尾的 char 数组**。

\`\`\`c
char name[] = "Alice";     // 实际长度 6（含末尾 \\0）
// 等价于 { 'A','l','i','c','e','\\0' }
\`\`\`

### 输出

\`\`\`c
printf("%s\\n", name);    // Alice
printf("%c\\n", name[0]); // A（取出第一个字符）
\`\`\`

### <string.h> 常用函数

| 函数 | 作用 | 例子 |
|---|---|---|
| \`strlen(s)\` | 字符数（不含 \\0） | \`strlen("hi")\` → 2 |
| \`strcpy(dst, src)\` | 复制（含 \\0） | \`strcpy(t, "hi")\` |
| \`strcmp(a, b)\` | 比较，相等返 0 | \`strcmp("a","b")\` → 负数 |
| \`strcat(dst, src)\` | 拼接（dst 要够大） | — |

\`\`\`c
#include <string.h>
char s[20];
strcpy(s, "hello");
printf("%zu %s\\n", strlen(s), s);   // 5 hello
\`\`\`

### 几个坑

- \`strlen\` 返回 \`size_t\`，printf 要用 \`%zu\`（或强转 \`(unsigned long)\`）
- 数组必须**留够空间**容纳 \\0，否则 strcpy 会破坏内存
- \`strcmp\` 用 \`==\` 来比：返回 **0 才表示相等**（反直觉）

> 字符串字面量 \`"hi"\` 存放在**只读**内存，\`char *p = "hi"; p[0] = 'H';\` 是未定义行为。`,
        en: `## A C "string" is an array of char

C has no dedicated string type. A string is simply a **char array terminated by \`\\0\`**.

\`\`\`c
char name[] = "Alice";     // actually 6 chars long (includes \\0)
// equivalent to { 'A','l','i','c','e','\\0' }
\`\`\`

### Printing

\`\`\`c
printf("%s\\n", name);    // Alice
printf("%c\\n", name[0]); // A (first char)
\`\`\`

### Common <string.h> functions

| Function | Purpose | Example |
|---|---|---|
| \`strlen(s)\` | char count (no \\0) | \`strlen("hi")\` → 2 |
| \`strcpy(dst, src)\` | copy (incl. \\0) | \`strcpy(t, "hi")\` |
| \`strcmp(a, b)\` | compare; 0 means equal | \`strcmp("a","b")\` → negative |
| \`strcat(dst, src)\` | concatenate (dst must fit) | — |

\`\`\`c
#include <string.h>
char s[20];
strcpy(s, "hello");
printf("%zu %s\\n", strlen(s), s);   // 5 hello
\`\`\`

### Common pitfalls

- \`strlen\` returns \`size_t\`; print with \`%zu\` (or cast to \`unsigned long\`)
- The destination array must be **large enough** for the \\0, otherwise strcpy overruns memory
- \`strcmp\` returns **0 when equal** (counter-intuitive)

> A **string literal** like \`"hi"\` lives in read-only memory; \`char *p = "hi"; p[0] = 'H';\` is undefined behavior.`,
      },
      examples: [
        {
          caption: { zh: '字符串函数', en: 'String functions' },
          code: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char a[20] = "Hello";\n    char b[20];\n    strcpy(b, a);\n    printf("%zu %s\\n", strlen(a), b);\n    printf("%d\\n", strcmp(a, "World"));   // negative (H < W)\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '字符串长度与复制', en: 'String length and copy' },
          prompt: {
            zh: '用 `strlen` 与 `strcpy` 处理字符串 `"Hello, C"`：**每行一个**输出长度（应为 8）、复制到新数组后的内容。',
            en: 'Use `strlen` and `strcpy` on the string `"Hello, C"`: print **one per line** the length (should be 8), and the contents after copying to a new array.',
          },
          starter: '/* 练习 1：长度与复制 */\n#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char src[] = "Hello, C";\n    char dst[20];\n\n    return 0;\n}\n',
          expectedOutput: '8\nHello, C\n',
          hint: {
            zh: '`strcpy(dst, src);` 后用 `%zu` 输出 `strlen(src)`。',
            en: 'After `strcpy(dst, src);`, print `strlen(src)` with `%zu`.',
          },
          solution: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char src[] = "Hello, C";\n    char dst[20];\n    strcpy(dst, src);\n    printf("%zu\\n", strlen(src));\n    printf("%s\\n", dst);\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '字符串比较', en: 'String compare' },
          prompt: {
            zh: '用 `strcmp` 比较 `"apple"` 和 `"banana"`：若相等输出 `equal`，否则输出 `different`（应为 `different`，单独一行）。',
            en: 'Use `strcmp` to compare `"apple"` with `"banana"`. If equal print `equal`, otherwise `different` (should be `different`, on its own line).',
          },
          starter: '/* 练习 2：字符串比较 */\n#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: 'different\n',
          hint: {
            zh: '`if (strcmp(a, b) == 0) printf("equal\\n"); else printf("different\\n");`。',
            en: '`if (strcmp(a, b) == 0) printf("equal\\n"); else printf("different\\n");`.',
          },
          solution: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    if (strcmp("apple", "banana") == 0) {\n        printf("equal\\n");\n    } else {\n        printf("different\\n");\n    }\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 9. 指针（重点） =================
    {
      id: 'pointers',
      title: { zh: '指针', en: 'Pointers' },
      difficulty: 3,
      lecture: {
        zh: `## 什么是指针

**指针**是一个存**地址**的变量。通过地址可以找到另一个变量。

\`\`\`c
int x = 42;
int *p = &x;          // &x 是「x 的地址」，p 指向 x

printf("%d\\n", x);    // 42（直接读）
printf("%d\\n", *p);   // 42（通过指针读，叫「解引用」）
printf("%p\\n", p);    // 一串十六进制地址

*p = 100;              // 通过指针改 x
printf("%d\\n", x);    // 100
\`\`\`

### 两个符号必须分清

| 符号 | 名字 | 用途 |
|---|---|---|
| \`&\` | 取地址 | \`&x\` 得到 x 的地址 |
| \`*\` | 解引用 | \`*p\` 取出 p 指向地址里的值 |

声明里的 \`int *p\` 是「p 是一个指向 int 的指针」，**不是**解引用。

## 指针与数组

数组名 \`a\` 在表达式里退化为**指向首元素的指针**：

\`\`\`c
int a[3] = {10, 20, 30};
int *p = a;              // p 指向 a[0]
printf("%d\\n", *p);     // 10
printf("%d\\n", *(p+1)); // 20（指针 + 1 等于向后移一个元素）
printf("%d\\n", a[1]);   // 20（等价写法）
\`\`\`

指针运算 \`+1\` 实际移动 \`sizeof(int)\` 个字节，不是真「加 1」。

## swap 两数（重点案例）

C 默认按值传递，函数内改不动外部变量。要改就必须传**指针**：

\`\`\`c
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int x = 3, y = 8;
swap(&x, &y);
printf("%d %d\\n", x, y);   // 8 3
\`\`\`

调用 \`swap(&x, &y)\` 时：

1. \`&x\` 是 x 的地址，\`&y\` 是 y 的地址
2. 进入函数，参数 \`a\` 指向 x，\`b\` 指向 y
3. \`*a\` 读 x，\`*b\` 读 y，交换后**写回**原地址
4. 出了函数，x 和 y 已经交换完毕

> 指针是 C 最强大的工具，也是最容易出 bug 的地方：野指针、悬空指针、忘记 \`\\0\`、忘了 \`&\`……小心。`,
        en: `## What is a pointer?

A **pointer** is a variable that stores a **memory address**. Through the address you can reach another variable.

\`\`\`c
int x = 42;
int *p = &x;          // &x is "the address of x"; p points to x

printf("%d\\n", x);    // 42 (direct read)
printf("%d\\n", *p);   // 42 (read via pointer — "dereferencing")
printf("%p\\n", p);    // some hex address

*p = 100;              // change x through the pointer
printf("%d\\n", x);    // 100
\`\`\`

### Two symbols to keep straight

| Symbol | Name | Use |
|---|---|---|
| \`&\` | address-of | \`&x\` gives x's address |
| \`*\` | dereference | \`*p\` reads the value at p's address |

In a declaration \`int *p\` means "p is a pointer to int", **not** a dereference.

## Pointers and arrays

The array name \`a\` **decays** into a pointer to its first element in expressions:

\`\`\`c
int a[3] = {10, 20, 30};
int *p = a;              // p points to a[0]
printf("%d\\n", *p);     // 10
printf("%d\\n", *(p+1)); // 20 (p + 1 advances one element)
printf("%d\\n", a[1]);   // 20 (equivalent)
\`\`\`

Pointer arithmetic \`+1\` actually moves \`sizeof(int)\` bytes, not literally "+1".

## swap two numbers (key example)

C passes arguments by value, so a function cannot change the caller's variables by itself. To actually modify them, pass **pointers**:

\`\`\`c
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int x = 3, y = 8;
swap(&x, &y);
printf("%d %d\\n", x, y);   // 8 3
\`\`\`

When \`swap(&x, &y)\` is called:

1. \`&x\` and \`&y\` are the addresses of x and y
2. Inside the function, \`a\` points to x, \`b\` points to y
3. \`*a\` reads x, \`*b\` reads y; after swapping they are **written back** to the original addresses
4. After the function returns, x and y have been exchanged

> Pointers are C's most powerful tool and its biggest source of bugs: wild pointers, dangling pointers, missing \`\\0\`, forgetting the \`&\`... be careful.`,
      },
      examples: [
        {
          caption: { zh: '指针与 swap', en: 'Pointers and swap' },
          code: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint main(void) {\n    int x = 3, y = 8;\n    swap(&x, &y);\n    printf("%d %d\\n", x, y);          // 8 3\n\n    int arr[3] = {10, 20, 30};\n    int *p = arr;\n    printf("%d %d %d\\n", *p, *(p+1), *(p+2));   // 10 20 30\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: 'swap 两数', en: 'swap two numbers' },
          prompt: {
            zh: '编写函数 `void swap(int *a, int *b)`。初始 `x = 3`、`y = 8`，调用 swap 后**只输出一行** `x y`（应为 8 3）。',
            en: 'Write `void swap(int *a, int *b)`. Starting from `x = 3`, `y = 8`, after calling swap print **one line** `x y` (should be 8 3).',
          },
          starter: '/* 练习 1：swap */\n#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    /* 在下面实现 */\n}\n\nint main(void) {\n    int x = 3, y = 8;\n\n    return 0;\n}\n',
          expectedOutput: '8 3\n',
          hint: {
            zh: '函数里 `int t = *a; *a = *b; *b = t;`，调用时 `swap(&x, &y);`。',
            en: 'Inside: `int t = *a; *a = *b; *b = t;`. Call with `swap(&x, &y);`.',
          },
          solution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint main(void) {\n    int x = 3, y = 8;\n    swap(&x, &y);\n    printf("%d %d\\n", x, y);\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '指针遍历数组', en: 'Pointer iteration' },
          prompt: {
            zh: '给定 `int a[5] = {4, 8, 15, 16, 23}`。用**指针 + 循环**（不写 `a[i]`）**每行一个**输出全部元素。',
            en: 'Given `int a[5] = {4, 8, 15, 16, 23}`. Iterate with a **pointer and loop** (without `a[i]`) and print each element **on its own line**.',
          },
          starter: '/* 练习 2：指针遍历 */\n#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n\n    return 0;\n}\n',
          expectedOutput: '4\n8\n15\n16\n23\n',
          hint: {
            zh: '`int *p = a;` 循环 `for (; p < a + 5; p++) printf("%d\\n", *p);`。',
            en: '`int *p = a;` then loop `for (; p < a + 5; p++) printf("%d\\n", *p);`.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n    int *p = a;\n    for (; p < a + 5; p++) {\n        printf("%d\\n", *p);\n    }\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 10. 结构体 =================
    {
      id: 'structs',
      title: { zh: '结构体', en: 'Structs' },
      difficulty: 3,
      lecture: {
        zh: `## 把多个字段打包

\`\`\`c
struct Point {
    int x;
    int y;
};

struct Point p = {3, 4};
printf("%d %d\\n", p.x, p.y);     // 3 4
p.x = 10;
printf("%d\\n", p.x);             // 10
\`\`\`

访问字段用 \`.\`（点操作符）。

## typedef 简化类型名

\`\`\`c
typedef struct Point {
    int x;
    int y;
} Point;

Point p = {3, 4};                 // 不再需要写 struct
\`\`\`

## 结构体数组

把多个对象放进数组里：

\`\`\`c
Point pts[3] = {{1,2}, {3,4}, {5,6}};
for (int i = 0; i < 3; i++) {
    printf("%d %d\\n", pts[i].x, pts[i].y);
}
\`\`\`

## 指针访问结构体

\`\`\`c
Point p = {3, 4};
Point *pp = &p;
printf("%d\\n", pp->x);     // 3
\`\`\`

> \`pp->x\` 等价于 \`(*pp).x\`。箭头 \`->\` 只对**指针**用。`,
        en: `## Grouping related fields

\`\`\`c
struct Point {
    int x;
    int y;
};

struct Point p = {3, 4};
printf("%d %d\\n", p.x, p.y);     // 3 4
p.x = 10;
printf("%d\\n", p.x);             // 10
\`\`\`

Use \`.\` (the dot operator) to access fields.

## typedef for shorter names

\`\`\`c
typedef struct Point {
    int x;
    int y;
} Point;

Point p = {3, 4};                 // no more \`struct\` keyword
\`\`\`

## Arrays of structs

Store multiple objects in an array:

\`\`\`c
Point pts[3] = {{1,2}, {3,4}, {5,6}};
for (int i = 0; i < 3; i++) {
    printf("%d %d\\n", pts[i].x, pts[i].y);
}
\`\`\`

## Pointers to structs

\`\`\`c
Point p = {3, 4};
Point *pp = &p;
printf("%d\\n", pp->x);     // 3
\`\`\`

> \`pp->x\` is shorthand for \`(*pp).x\`; the arrow \`->\` only works on **pointers**.`,
      },
      examples: [
        {
          caption: { zh: '结构体与数组', en: 'Struct and array' },
          code: '#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n} Person;\n\nint main(void) {\n    Person people[2] = {{"Alice", 20}, {"Bob", 22}};\n    for (int i = 0; i < 2; i++) {\n        printf("%s %d\\n", people[i].name, people[i].age);\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '点坐标', en: 'Point coordinates' },
          prompt: {
            zh: '定义结构体 `Point`（含 int x, y）。初始化一个 `Point p = {3, 4}` 并**每行一个**输出 `x = 3` 和 `y = 4`。',
            en: 'Define a `Point` struct (with int x, y). Initialize `Point p = {3, 4}` and print **one per line** `x = 3` and `y = 4`.',
          },
          starter: '/* 练习 1：Point */\n#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main(void) {\n    Point p = {3, 4};\n\n    return 0;\n}\n',
          expectedOutput: 'x = 3\ny = 4\n',
          hint: {
            zh: '用 `printf("x = %d\\n", p.x);` 和 `printf("y = %d\\n", p.y);`。',
            en: 'Use `printf("x = %d\\n", p.x);` and `printf("y = %d\\n", p.y);`.',
          },
          solution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main(void) {\n    Point p = {3, 4};\n    printf("x = %d\\n", p.x);\n    printf("y = %d\\n", p.y);\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '学生结构体数组', en: 'Array of students' },
          prompt: {
            zh: '定义结构体 `Student`（含 `name[20]`、`score`）。创建数组 `{ "Alice", 90 }, { "Bob", 75 }`，**每行一个**输出 `Alice: 90` 和 `Bob: 75`。',
            en: 'Define a `Student` struct (with `name[20]`, `score`). Build an array `{ "Alice", 90 }, { "Bob", 75 }` and print **one per line** `Alice: 90` and `Bob: 75`.',
          },
          starter: '/* 练习 2：学生数组 */\n#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int score;\n} Student;\n\nint main(void) {\n    Student s[2] = {{"Alice", 90}, {"Bob", 75}};\n\n    return 0;\n}\n',
          expectedOutput: 'Alice: 90\nBob: 75\n',
          hint: {
            zh: '循环 `for (int i = 0; i < 2; i++) printf("%s: %d\\n", s[i].name, s[i].score);`。',
            en: 'Loop `for (int i = 0; i < 2; i++) printf("%s: %d\\n", s[i].name, s[i].score);`.',
          },
          solution: '#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int score;\n} Student;\n\nint main(void) {\n    Student s[2] = {{"Alice", 90}, {"Bob", 75}};\n    for (int i = 0; i < 2; i++) {\n        printf("%s: %d\\n", s[i].name, s[i].score);\n    }\n    return 0;\n}\n',
        },
      ],
    },

    // ================= 11. 文件操作 =================
    {
      id: 'files',
      title: { zh: '文件操作', en: 'File I/O' },
      difficulty: 3,
      lecture: {
        zh: `## fopen / fclose

\`\`\`c
#include <stdio.h>

FILE *f = fopen("data.txt", "w");
if (f == NULL) {
    return 1;          // 打开失败
}
fprintf(f, "hello %d\\n", 42);
fclose(f);
\`\`\`

### 模式

| 模式 | 含义 |
|---|---|
| \`"r"\` | 只读，文件不存在报错 |
| \`"w"\` | 写入，截断已有内容或创建新文件 |
| \`"a"\` | 追加写 |
| \`"r+"\` | 读写（文件必须存在） |

### fprintf / fscanf

\`\`\`c
fprintf(f, "%d %s\\n", age, name);   // 写
fscanf(f, "%d", &age);               // 读，**注意取地址**
\`\`\`

### 读取到字符串缓冲区

\`\`\`c
char line[128];
while (fgets(line, sizeof(line), f) != NULL) {
    printf("%s", line);     // line 已经包含 \\n
}
\`\`\`

> 一定要检查 \`fopen\` 的返回值（\`NULL\` 表示失败）；写完务必 \`fclose\`。`,
        en: `## fopen / fclose

\`\`\`c
#include <stdio.h>

FILE *f = fopen("data.txt", "w");
if (f == NULL) {
    return 1;          // failed to open
}
fprintf(f, "hello %d\\n", 42);
fclose(f);
\`\`\`

### Modes

| Mode | Meaning |
|---|---|
| \`"r"\` | read; error if file missing |
| \`"w"\` | write; truncate or create |
| \`"a"\` | append |
| \`"r+"\` | read + write (file must exist) |

### fprintf / fscanf

\`\`\`c
fprintf(f, "%d %s\\n", age, name);   // write
fscanf(f, "%d", &age);               // read — note the &
\`\`\`

### Reading into a buffer

\`\`\`c
char line[128];
while (fgets(line, sizeof(line), f) != NULL) {
    printf("%s", line);     // line already includes \\n
}
\`\`\`

> Always check \`fopen\`'s return value (\`NULL\` means failure); always \`fclose\` when done.`,
      },
      examples: [
        {
          caption: { zh: '写入再读回', en: 'Write then read back' },
          code: '#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("demo.txt", "w");\n    if (!f) return 1;\n    fprintf(f, "apple\\n");\n    fprintf(f, "banana\\n");\n    fclose(f);\n\n    f = fopen("demo.txt", "r");\n    if (!f) return 1;\n    char buf[64];\n    while (fgets(buf, sizeof(buf), f) != NULL) {\n        printf("%s", buf);\n    }\n    fclose(f);\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '写入再读回', en: 'Write then read back' },
          prompt: {
            zh: '把字符串 `"Hello File"` 写入 `test.txt`（模式 `"w"`），再重新打开读出内容。**两行输出**：第一行是文件内容 `Hello File`，第二行是 `lines: 1`。',
            en: 'Write `"Hello File"` into `test.txt` (mode `"w"`), reopen and read it back. Output **two lines**: the file content `Hello File`, then `lines: 1`.',
          },
          starter: '/* 练习 1：写入再读回 */\n#include <stdio.h>\n\nint main(void) {\n    /* 写入 → 读回 → 输出 */\n    return 0;\n}\n',
          expectedOutput: 'Hello File\nlines: 1\n',
          hint: {
            zh: '用 fopen "w" 写 "Hello File"，再 fopen "r" 读出；fgets 读一行后统计行数。',
            en: 'fopen "w" and write "Hello File"; fopen "r" and read with fgets; count the lines.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("test.txt", "w");\n    if (!f) return 1;\n    fprintf(f, "Hello File");\n    fclose(f);\n\n    f = fopen("test.txt", "r");\n    if (!f) return 1;\n    char buf[128];\n    int lines = 0;\n    int printed = 0;\n    while (fgets(buf, sizeof(buf), f) != NULL) {\n        if (!printed) {\n            printf("%s\\n", buf);\n            printed = 1;\n        }\n        lines++;\n    }\n    fclose(f);\n    printf("lines: %d\\n", lines);\n    return 0;\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '数字求和', en: 'Sum numbers in file' },
          prompt: {
            zh: '把三个整数 `10 20 30`（空格分隔、单行）写入 `nums.txt`，再读回累加求和并输出（应为 60）。',
            en: 'Write the three integers `10 20 30` (space-separated, one line) to `nums.txt`, read them back, sum them up, and print the result (should be 60).',
          },
          starter: '/* 练习 2：数字求和 */\n#include <stdio.h>\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: '60\n',
          hint: {
            zh: '`fprintf(f, "%d %d %d\\n", 10, 20, 30);` 写；用 `fscanf(f, "%d", &x)` 反复读。',
            en: 'Write with `fprintf(f, "%d %d %d\\n", 10, 20, 30);`; read with `fscanf(f, "%d", &x)` repeatedly.',
          },
          solution: '#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("nums.txt", "w");\n    if (!f) return 1;\n    fprintf(f, "%d %d %d\\n", 10, 20, 30);\n    fclose(f);\n\n    f = fopen("nums.txt", "r");\n    if (!f) return 1;\n    int x, sum = 0;\n    while (fscanf(f, "%d", &x) == 1) {\n        sum += x;\n    }\n    fclose(f);\n    printf("%d\\n", sum);\n    return 0;\n}\n',
        },
      ],
    },
  ],
};