// java.js — Java 学习内容（11 知识点 × 2 题双语）
// Schema 说明见 tools/check_i18n.mjs；所有 expectedOutput 已通过 Godbolt 在线实测验证（JDK 21）。
export default {
  id: 'java',
  name: 'Java',
  description: {
    zh: '强类型、面向对象的工业级语言，跨平台运行（Write once, run anywhere），生态庞大。',
    en: 'A strongly-typed, object-oriented, industrial-grade language that runs anywhere (write once, run anywhere).',
  },
  engine: { compiler: 'java2102' },
  fileName: 'Main.java',
  playgroundStarter: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n    }\n}\n',
  entryNote: {
    zh: '入口类必须为 public class Main（在线运行与本地均建议如此）\n本地: javac Main.java && java Main',
    en: 'The entry class must be public class Main (both online and locally)\nLocal: javac Main.java && java Main',
  },
  localGuide: {
    zh: 'javac Main.java && java Main',
    en: 'javac Main.java && java Main',
  },
  topics: [
    // ================= 1. Hello World =================
    {
      id: 'hello',
      title: { zh: '第一个程序', en: 'Your First Program' },
      difficulty: 1,
      lecture: {
        zh: `## 第一个 Java 程序

Java 程序由 **类（class）** 组成，运行入口是固定写法的 \`main\` 方法：

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

### 几个要点

- 文件名必须与 \`public class\` 的名字**完全一致**，扩展名为 \`.java\`（这里是 \`Main.java\`）
- \`main\` 方法是程序入口，**写法固定**：\`public static void main(String[] args)\`
- \`System.out.println(...)\` 打印一行内容并**自动换行**；\`print(...)\` 不换行
- 注释：\`//\` 单行注释；\`/* ... */\` 多行注释
- 语句以**分号 \`;\`** 结尾，类与方法体用**大括号 \`{}\`** 包裹

### 编译运行流程

Java 是编译型语言，先用 \`javac\` 编译成字节码（\`Main.class\`），再用 \`java\` 执行：

\`\`\`bash
javac Main.java   # 编译
java Main         # 运行
\`\`\`

本站点「运行」按钮会把代码送进 JDK 15 沙箱编译并执行，直接看到输出。

> 习惯上每个源文件**只写一个 public 类**，文件名 = 类名。`,
        en: `## Your first Java program

A Java program is made of **classes**. The entry point is the \`main\` method with a fixed signature:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
\`\`\`

### Key points

- The file name must **exactly match** the \`public class\` name, with a \`.java\` extension (here \`Main.java\`)
- \`main\` is the entry point — its signature is fixed: \`public static void main(String[] args)\`
- \`System.out.println(...)\` prints a line and **appends a newline**; \`print(...)\` does not
- Comments: \`//\` single-line; \`/* ... */\` multi-line
- Statements end with a **semicolon \`;\`**; classes and method bodies use **braces \`{}\`**

### Compile & run

Java is a compiled language. Compile source to bytecode (\`Main.class\`) with \`javac\`, then run it with \`java\`:

\`\`\`bash
javac Main.java   # compile
java Main         # run
\`\`\`

The Run button on this site sends your code to a JDK 15 sandbox that compiles and executes it for you.

> Convention: one \`public\` class per source file, file name = class name.`,
      },
      examples: [
        {
          caption: { zh: '你好，世界', en: 'Hello, world' },
          code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n        System.out.println("你好，Java");\n    }\n}\n',
        },
        {
          caption: { zh: 'print vs println', en: 'print vs println' },
          code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.print("Hello, ");\n        System.out.println("Java");\n        // 输出一行: Hello, Java\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '打印 Hello, World!', en: 'Print Hello, World!' },
          prompt: {
            zh: '在 \`main\` 方法中使用 \`System.out.println\` 输出**一行**：`Hello, World!`。',
            en: 'Inside \`main\`, use \`System.out.println\` to output **one line**: \`Hello, World!\`.',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        // TODO: 在下面输出 Hello, World!\n    }\n}\n',
          expectedOutput: 'Hello, World!\n',
          hint: {
            zh: '`System.out.println("Hello, World!");`。',
            en: '`System.out.println("Hello, World!");`.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '打印两行问候', en: 'Print two greetings' },
          prompt: {
            zh: '用两次 \`System.out.println\` 依次输出下面两行（大小写、标点都要一致）：\n\n\`\`\`\nHello, Java\nI am learning\n\`\`\`',
            en: 'Use two \`System.out.println\` calls to output these two lines (exact capitalization and punctuation):\n\n\`\`\`\nHello, Java\nI am learning\n\`\`\`',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}\n',
          expectedOutput: 'Hello, Java\nI am learning\n',
          hint: {
            zh: '两次 `println` 会自动换行。',
            en: 'Two `println` calls will each add a newline.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java");\n        System.out.println("I am learning");\n    }\n}\n',
        },
      ],
    },

    // ================= 2. 变量与基本类型 =================
    {
      id: 'variables',
      title: { zh: '变量与基本类型', en: 'Variables & Primitive Types' },
      difficulty: 1,
      lecture: {
        zh: `## 变量：必须声明类型

Java 是**强类型**语言：声明变量必须显式指定类型，类型确定后不能改。

\`\`\`java
int age = 20;              // 32 位整数
long big = 100000L;        // 64 位长整数（末尾加 L）
double price = 9.99;       // 双精度浮点
boolean isOk = true;       // 布尔
char letter = 'A';         // 单字符（单引号）
String name = "Alice";     // 字符串（双引号，对象类型）
final int MAX = 100;       // 常量，只能赋值一次
\`\`\`

### 八种基本类型

| 类型 | 关键字 | 例子 | 默认值 |
|---|---|---|---|
| 整数 | \`byte\` \`short\` \`int\` \`long\` | \`42\`, \`42L\` | \`0\` |
| 浮点 | \`float\` \`double\` | \`3.14\`, \`3.14f\` | \`0.0\` |
| 字符 | \`char\` | \`'A'\` | \`\'\\u0000'\` |
| 布尔 | \`boolean\` | \`true\` / \`false\` | \`false\` |

注意 \`String\` **不是**基本类型，而是 \`java.lang.String\` 类的对象，所以首字母大写。

### final 常量

\`final\` 修饰的变量只能赋值一次，习惯用**全大写**命名：

\`\`\`java
final double PI = 3.14159;
// PI = 3.14;  // 编译错误
\`\`\`

### 类型转换

\`\`\`java
int n = Integer.parseInt("123");   // 字符串 → int
String s = String.valueOf(456);    // 整数 → 字符串
int x = (int) 3.99;                // 3（截断小数，不四舍五入）
\`\`\`

> Java 不会自动在 \`int\` 和 \`String\` 之间转换——必须用包装类（\`Integer\` 等）的方法。`,
        en: `## Variables: must declare the type

Java is **strongly typed**: every variable must have its type declared explicitly, and that type never changes.

\`\`\`java
int age = 20;              // 32-bit integer
long big = 100000L;        // 64-bit long (suffix L)
double price = 9.99;       // double-precision float
boolean isOk = true;       // boolean
char letter = 'A';         // single character (single quotes)
String name = "Alice";     // string (double quotes, an object type)
final int MAX = 100;       // constant, assign once
\`\`\`

### The eight primitive types

| Type | Keyword | Example | Default |
|---|---|---|---|
| Integer | \`byte\` \`short\` \`int\` \`long\` | \`42\`, \`42L\` | \`0\` |
| Floating | \`float\` \`double\` | \`3.14\`, \`3.14f\` | \`0.0\` |
| Character | \`char\` | \`'A'\` | \`\'\\u0000'\` |
| Boolean | \`boolean\` | \`true\` / \`false\` | \`false\` |

\`String\` is **not** a primitive — it is an object of \`java.lang.String\`, hence the capital S.

### final constants

A \`final\` variable can be assigned **once**; convention is **UPPER_CASE** names:

\`\`\`java
final double PI = 3.14159;
// PI = 3.14;  // compile error
\`\`\`

### Conversions

\`\`\`java
int n = Integer.parseInt("123");   // String -> int
String s = String.valueOf(456);    // int -> String
int x = (int) 3.99;                // 3 (truncation, not rounding)
\`\`\`

> Java never implicitly converts between \`int\` and \`String\` — use wrapper class methods.`,
      },
      examples: [
        {
          caption: { zh: '变量声明与输出', en: 'Declare and print' },
          code: 'public class Main {\n    public static void main(String[] args) {\n        int width = 7;\n        int height = 4;\n        System.out.println(width * height);\n        final double PI = 3;\n        System.out.println(PI);\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '计算矩形面积', en: 'Rectangle area' },
          prompt: {
            zh: '在 main 中定义 \`int width = 7\` 和 \`int height = 4\`，计算面积并**只输出一个数**（应为 28）。',
            en: 'Inside main define \`int width = 7\` and \`int height = 4\`, compute the area and **print just the number** (should be 28).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        int width = 7;\n        int height = 4;\n        // TODO: 输出面积\n    }\n}\n',
          expectedOutput: '28\n',
          hint: {
            zh: '`System.out.println(width * height);`。',
            en: '`System.out.println(width * height);`.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int width = 7;\n        int height = 4;\n        System.out.println(width * height);\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '字符串转整数', en: 'Parse an integer' },
          prompt: {
            zh: '字符串 \`s = "2026"\`。把它转成 \`int\`，加 4 后输出（应为 2030）。',
            en: 'String \`s = "2026"\`. Parse it to \`int\`, add 4, then print (should be 2030).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        String s = "2026";\n        // TODO\n    }\n}\n',
          expectedOutput: '2030\n',
          hint: {
            zh: '`Integer.parseInt(s)` 返回 int。',
            en: '`Integer.parseInt(s)` returns an int.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        String s = "2026";\n        int n = Integer.parseInt(s);\n        System.out.println(n + 4);\n    }\n}\n',
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

\`\`\`java
int a = 10, b = 4;
System.out.println(a + b);   // 14
System.out.println(a - b);   // 6
System.out.println(a * b);   // 40
System.out.println(a / b);   // 2（整数除法，向零取整）
System.out.println(a % b);   // 2（取余）
\`\`\`

### 整数除法的坑

\`10 / 4\` 在 Java 里等于 **2**（不是 2.5）。只要两个操作数都是 \`int\`，结果就是 \`int\`，小数部分被**截断**。想要小数结果，必须让**至少一个**操作数是浮点：

\`\`\`java
System.out.println(10 / 4);          // 2
System.out.println(10.0 / 4);        // 2.5
System.out.println((double) 10 / 4); // 2.5
\`\`\`

### 自增自减：\`++\` / \`--\`

| 形式 | 含义 |
|---|---|
| \`i++\` | 先用值，再 +1 |
| \`++i\` | 先 +1，再使用 |

\`\`\`java
int i = 5;
System.out.println(i++);   // 5（打印 5，之后 i 变 6）
System.out.println(++i);   // 7（i 先变 7，再打印）
\`\`\`

### 比较与逻辑运算符

- 比较：\`==\`、\`!=\`、\`<\`、\`>\`、\`<=\`、\`>=\`，结果是 \`boolean\`
- 逻辑：\&\&（与）、\`||\`（或）、\`!\`（非）
- \`&&\` 和 \`||\` 都**短路求值**：左侧已能决定结果，右侧就不再计算

### 优先级

大致规则：算术 > 比较 > 逻辑 > 赋值；不确定时**加括号**最稳。`,
        en: `## Arithmetic operators

\`\`\`java
int a = 10, b = 4;
System.out.println(a + b);   // 14
System.out.println(a - b);   // 6
System.out.println(a * b);   // 40
System.out.println(a / b);   // 2 (integer division, truncates toward zero)
System.out.println(a % b);   // 2 (remainder)
\`\`\`

### The integer-division pitfall

\`10 / 4\` in Java is **2** (not 2.5). If both operands are \`int\`, the result is \`int\` and the fractional part is **truncated**. To get a decimal result, **at least one** operand must be a floating-point type:

\`\`\`java
System.out.println(10 / 4);          // 2
System.out.println(10.0 / 4);        // 2.5
System.out.println((double) 10 / 4); // 2.5
\`\`\`

### Increment / decrement: \`++\` / \`--\`

| Form | Meaning |
|---|---|
| \`i++\` | use current value, then +1 |
| \`++i\` | +1 first, then use value |

\`\`\`java
int i = 5;
System.out.println(i++);   // 5 (prints 5, then i becomes 6)
System.out.println(++i);   // 7 (i becomes 7, then prints)
\`\`\`

### Comparison & logical operators

- Comparison: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` → \`boolean\`
- Logical: \`&&\` (and), \`||\` (or), \`!\` (not)
- \`&&\` and \`||\` **short-circuit**: if the left side decides the result, the right side is not evaluated

### Precedence

Roughly: arithmetic > comparison > logical > assignment. **Add parentheses** when in doubt.`,
      },
      examples: [
        {
          caption: { zh: '整数除法与取余', en: 'Integer division and remainder' },
          code: 'public class Main {\n    public static void main(String[] args) {\n        int a = 17, b = 5;\n        System.out.println(a / b);   // 3\n        System.out.println(a % b);   // 2\n        System.out.println(2 + 3 * 4); // 14\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '拆分秒数', en: 'Split seconds' },
          prompt: {
            zh: '变量 \`int total = 3775\` 表示总秒数。**每行一个**输出分钟数和剩余秒数（应为 62 和 55）。',
            en: 'Variable \`int total = 3775\` is a number of seconds. Print the whole minutes and the leftover seconds, **one per line** (should be 62 then 55).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        int total = 3775;\n        // TODO: 输出 total / 60 和 total % 60\n    }\n}\n',
          expectedOutput: '62\n55\n',
          hint: {
            zh: '整数除法 `total / 60` 和取余 `total % 60` 都是 int 结果。',
            en: 'Integer division `total / 60` and remainder `total % 60` give int results.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int total = 3775;\n        System.out.println(total / 60);\n        System.out.println(total % 60);\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '自增前后对比', en: 'Pre vs post increment' },
          prompt: {
            zh: '\`int x = 5\`。**每行一个**依次输出：\`x++\`（应为 5）、\`++x\`（此时 x 已是 6，再 +1 变 7，打印 7）。',
            en: '\`int x = 5\`. Print **one per line**: \`x++\` (should be 5), then \`++x\` (x is now 6, +1 makes 7, prints 7).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        // TODO\n    }\n}\n',
          expectedOutput: '5\n7\n',
          hint: {
            zh: '`x++` 是「先打印再加 1」，`++x` 是「先加 1 再打印」。',
            en: '`x++` prints first then increments; `++x` increments first then prints.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++);\n        System.out.println(++x);\n    }\n}\n',
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

\`\`\`java
int score = 85;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}
\`\`\`

### 语法要点

- 条件必须用**小括号 \`(...)\`** 包裹
- 代码块用**大括号 \`{...}\`** 包裹；只有一条语句时大括号可省略，但**强烈建议永远加**
- \`else if\` 可以有多个；\`else\` 最多一个，且放最后
- 条件必须是 \`boolean\` 表达式——Java **不允许**用 \`1\` / \`0\` 当作真/假

### switch

\`switch\` 适合**等值匹配**的多分支（JDK 14+ 支持表达式语法，这里用经典写法）：

\`\`\`java
int day = 3;
switch (day) {
    case 1: System.out.println("Mon"); break;
    case 2: System.out.println("Tue"); break;
    case 3: System.out.println("Wed"); break;
    case 4: System.out.println("Thu"); break;
    case 5: System.out.println("Fri"); break;
    default: System.out.println("Other");
}
\`\`\`

> 每个 \`case\` 通常以 \`break\` 收尾。**忘了 break 会「穿透」**到下一个 case（fall-through），这是经典 bug 来源。

### 三元运算符

\`\`\`java
String label = score >= 60 ? "pass" : "fail";
\`\`\`

相当于简洁版的 if/else，但只适合一行能写下的场景。`,
        en: `## if / else if / else

\`\`\`java
int score = 85;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}
\`\`\`

### Syntax notes

- The condition must be wrapped in **parentheses \`(...)\`**
- The body uses **braces \`{...}\`**; braces are optional for a single statement but **strongly recommended**
- \`else if\` may appear many times; \`else\` at most once, at the end
- Conditions must be \`boolean\` — Java **does not** allow \`1\` / \`0\` as truthy/falsy

### switch

\`switch\` is for **value-matching** multi-branch logic (classic form shown; JDK 14+ also has switch expressions):

\`\`\`java
int day = 3;
switch (day) {
    case 1: System.out.println("Mon"); break;
    case 2: System.out.println("Tue"); break;
    case 3: System.out.println("Wed"); break;
    case 4: System.out.println("Thu"); break;
    case 5: System.out.println("Fri"); break;
    default: System.out.println("Other");
}
\`\`\`

> Each \`case\` usually ends with \`break\`. **Forgetting break causes fall-through** into the next case — a classic source of bugs.

### Ternary

\`\`\`java
String label = score >= 60 ? "pass" : "fail";
\`\`\`

A compact if/else; use only when it fits on one line.`,
      },
      examples: [
        {
          caption: { zh: '判断奇偶', en: 'Even or odd' },
          code: 'public class Main {\n    public static void main(String[] args) {\n        int n = 7;\n        if (n % 2 == 0) {\n            System.out.println("even");\n        } else {\n            System.out.println("odd");\n        }\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '成绩等级', en: 'Grade a score' },
          prompt: {
            zh: '\`int score = 85\`。按规则输出等级字母：≥90 \`A\`，≥80 \`B\`，≥70 \`C\`，≥60 \`D\`，否则 \`F\`。',
            en: '\`int score = 85\`. Output the grade letter: ≥90 → \`A\`, ≥80 → \`B\`, ≥70 → \`C\`, ≥60 → \`D\`, otherwise \`F\`.',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        int score = 85;\n        // TODO\n    }\n}\n',
          expectedOutput: 'B\n',
          hint: {
            zh: '从高到低判断：先看 score >= 90，否则看 >= 80……',
            en: 'Check from high to low: first score >= 90, then >= 80, etc.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int score = 85;\n        if (score >= 90) {\n            System.out.println("A");\n        } else if (score >= 80) {\n            System.out.println("B");\n        } else if (score >= 70) {\n            System.out.println("C");\n        } else if (score >= 60) {\n            System.out.println("D");\n        } else {\n            System.out.println("F");\n        }\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: 'switch 输出星期', en: 'switch day of week' },
          prompt: {
            zh: '\`int day = 4\`，用 \`switch\` 输出对应英文：1→\`Mon\`，2→\`Tue\`，3→\`Wed\`，4→\`Thu\`，其它→\`Other\`。',
            en: '\`int day = 4\`, use \`switch\` to print the English abbreviation: 1→\`Mon\`, 2→\`Tue\`, 3→\`Wed\`, 4→\`Thu\`, else→\`Other\`.',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        int day = 4;\n        // TODO\n    }\n}\n',
          expectedOutput: 'Thu\n',
          hint: {
            zh: '每个 case 末尾加 break。',
            en: 'End each case with break.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int day = 4;\n        switch (day) {\n            case 1: System.out.println("Mon"); break;\n            case 2: System.out.println("Tue"); break;\n            case 3: System.out.println("Wed"); break;\n            case 4: System.out.println("Thu"); break;\n            default: System.out.println("Other");\n        }\n    }\n}\n',
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

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
\`\`\`

\`for (初始化; 条件; 更新)\` 三段用分号隔开。条件为 \`true\` 时进入循环体，每轮结束后执行「更新」再判断。

### while 循环

先判断再执行，可能**一次都不执行**：

\`\`\`java
int n = 1;
while (n <= 3) {
    System.out.println(n);
    n++;
}
\`\`\`

### do-while 循环

**先执行一次**再判断，循环体**至少执行一次**：

\`\`\`java
int n = 5;
do {
    System.out.println(n);
    n--;
} while (n > 0);
\`\`\`

### break 与 continue

- \`break\`：立即跳出**整个**循环
- \`continue\`：跳过本轮剩余语句，进入下一轮

\`\`\`java
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;   // 跳过 3
    if (i == 7) break;      // 到 7 就退出
    System.out.println(i);   // 输出 0 1 2 4 5 6
}
\`\`\`

### 增强 for（for-each）

JDK 5 引入，专门用来遍历数组或集合，**不能**修改下标：

\`\`\`java
int[] nums = {1, 2, 3};
for (int n : nums) {
    System.out.println(n);
}
\`\`\`

> \`while\` / \`do-while\` 一定要有让条件变 \`false\` 的路径，否则**死循环**（沙箱会超时）。`,
        en: `## for loops

\`\`\`java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
\`\`\`

The header is \`for (init; condition; update)\` separated by semicolons. While the condition is \`true\`, the body runs; after each iteration the \`update\` runs and the condition is re-checked.

### while loops

Test first, then run — the body may execute **zero times**:

\`\`\`java
int n = 1;
while (n <= 3) {
    System.out.println(n);
    n++;
}
\`\`\`

### do-while loops

Run first, then test — the body executes **at least once**:

\`\`\`java
int n = 5;
do {
    System.out.println(n);
    n--;
} while (n > 0);
\`\`\`

### break & continue

- \`break\`: exit the loop **immediately**
- \`continue\`: skip the rest of this iteration

\`\`\`java
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;   // skip 3
    if (i == 7) break;      // stop at 7
    System.out.println(i);   // 0 1 2 4 5 6
}
\`\`\`

### Enhanced for (for-each)

Added in JDK 5, used to iterate arrays/collections cleanly. You **cannot** change the index:

\`\`\`java
int[] nums = {1, 2, 3};
for (int n : nums) {
    System.out.println(n);
}
\`\`\`

> \`while\` / \`do-while\` must have a path that makes the condition \`false\`, otherwise it loops forever (and the sandbox times out).`,
      },
      examples: [
        {
          caption: { zh: '累加 1 到 100', en: 'Sum 1 to 100' },
          code: 'public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 100; i++) {\n            sum += i;\n        }\n        System.out.println(sum);   // 5050\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '求和 1~100', en: 'Sum 1..100' },
          prompt: {
            zh: '用循环计算 1+2+…+100 并输出（应为 5050）。不要用公式直接算。',
            en: 'Use a loop to compute 1+2+…+100 and print the sum (should be 5050). Do not use the closed-form formula.',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        // TODO: 累加 1..100 后输出\n    }\n}\n',
          expectedOutput: '5050\n',
          hint: {
            zh: '`int sum = 0;` 然后 `for (int i = 1; i <= 100; i++) sum += i;`',
            en: '`int sum = 0;` then `for (int i = 1; i <= 100; i++) sum += i;`',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 100; i++) {\n            sum += i;\n        }\n        System.out.println(sum);\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: 'continue 跳过偶数', en: 'Skip evens with continue' },
          prompt: {
            zh: '用 for 循环打印 1~10 中的所有奇数，**每行一个**（1、3、5、7、9）。',
            en: 'Use a for loop to print all odd numbers from 1 to 10, **one per line** (1, 3, 5, 7, 9).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n}\n',
          expectedOutput: '1\n3\n5\n7\n9\n',
          hint: {
            zh: '遇到偶数用 `continue` 跳过，其余正常打印。',
            en: '`continue` on even numbers; print the rest.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            if (i % 2 == 0) continue;\n            System.out.println(i);\n        }\n    }\n}\n',
        },
      ],
    },

    // ================= 6. 方法 =================
    {
      id: 'methods',
      title: { zh: '方法', en: 'Methods' },
      difficulty: 2,
      lecture: {
        zh: `## 方法定义

\`\`\`java
public static int add(int a, int b) {
    return a + b;
}

int r = add(3, 4);   // 7
\`\`\`

### 修饰符与签名

- \`public\`：访问级别（公开）
- \`static\`：属于**类**而非实例，可直接用 \`类名.方法名\` 调用
- 返回类型：\`int\` 是返回值类型；没有返回写 \`void\`
- 参数列表：每个参数必须**显式声明类型**

\`return\` 把值送回调用处，同时结束方法；\`void\` 方法里可以写 \`return;\` 提前退出。

### 参数传递：基本类型传值

Java 中**基本类型**按**值**传递——方法内修改形参**不会**影响调用方的实参：

\`\`\`java
void bump(int n) { n++; }
int x = 10;
bump(x);
System.out.println(x);   // 10（没变）
\`\`\`

> 对象（数组、String 等）是按**引用**传的——这在「引用」章节再展开。

### 方法重载（Overload）

**同名方法**按参数列表（个数、类型、顺序）区分，调用时按实参匹配：

\`\`\`java
static int add(int a, int b)              { return a + b; }
static double add(double a, double b)      { return a + b; }
static int add(int a, int b, int c)       { return a + b + c; }
\`\`\`

注意：**只有返回类型不同不构成重载**，会编译报错。

### 可变参数 varargs

JDK 5 引入 \`int... nums\` 表示「零个或多个 int」，本质是数组：

\`\`\`java
static int sum(int... nums) {
    int s = 0;
    for (int n : nums) s += n;
    return s;
}
sum(1, 2, 3);   // 6
sum();          // 0
\`\`\`

> 一个方法的参数列表里 varargs **最多一个**，且必须放最后。`,
        en: `## Defining a method

\`\`\`java
public static int add(int a, int b) {
    return a + b;
}

int r = add(3, 4);   // 7
\`\`\`

### Modifiers & signature

- \`public\`: visibility (anyone can call)
- \`static\`: belongs to the **class**, callable as \`ClassName.method\`
- Return type: \`int\` here; use \`void\` for no return value
- Parameter list: every parameter needs an **explicit type**

\`return\` sends the value back and exits the method; \`void\` methods may use \`return;\` to exit early.

### Pass-by-value for primitives

Java passes **primitive** arguments **by value** — modifying the parameter inside the method does **not** affect the caller's variable:

\`\`\`java
void bump(int n) { n++; }
int x = 10;
bump(x);
System.out.println(x);   // 10 (unchanged)
\`\`\`

> Objects (arrays, Strings, etc.) are passed **by reference** — covered in the references chapter.

### Overloading

Two methods share a name but differ in their parameter list (count, types, or order). Java picks the match at call time:

\`\`\`java
static int add(int a, int b)              { return a + b; }
static double add(double a, double b)      { return a + b; }
static int add(int a, int b, int c)       { return a + b + c; }
\`\`\`

Note: **different return types alone do not overload** — that is a compile error.

### Varargs

JDK 5 introduced \`int... nums\` meaning "zero or more ints" — under the hood it is an array:

\`\`\`java
static int sum(int... nums) {
    int s = 0;
    for (int n : nums) s += n;
    return s;
}
sum(1, 2, 3);   // 6
sum();          // 0
\`\`\`

> A method may have **at most one** varargs parameter, and it must be **last**.`,
      },
      examples: [
        {
          caption: { zh: '求和与最大值', en: 'Sum and max' },
          code: 'public class Main {\n    static int sum(int a, int b) { return a + b; }\n    static int max(int a, int b) { return a > b ? a : b; }\n\n    public static void main(String[] args) {\n        System.out.println(sum(3, 4));   // 7\n        System.out.println(max(3, 9));   // 9\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '两数求和', en: 'Sum of two' },
          prompt: {
            zh: '写一个 \`public static int sum(int a, int b)\` 方法返回两数之和。在 main 中调用 \`sum(7, 8)\` 并输出（应为 15）。',
            en: 'Write a \`public static int sum(int a, int b)\` that returns the sum. Call \`sum(7, 8)\` from main and print it (should be 15).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        // TODO: 调用 sum(7, 8) 并输出\n    }\n    // TODO: 写 sum 方法\n}\n',
          expectedOutput: '15\n',
          hint: {
            zh: '方法写在 main 之外（同一类内），`return a + b;`。',
            en: 'Define the method outside main (same class); `return a + b;`.',
          },
          solution: 'public class Main {\n    public static int sum(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(sum(7, 8));\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '方法重载', en: 'Overloaded max' },
          prompt: {
            zh: '写两个重载方法：\`printMax(int a, int b)\` 和 \`printMax(int a, int b, int c)\`，分别输出两个数和三个数中的最大值。依次调用 \`printMax(3, 9)\` 与 \`printMax(3, 9, 5)\`，**每行一个**（均为 9）。',
            en: 'Write two overloaded methods: \`printMax(int a, int b)\` and \`printMax(int a, int b, int c)\`, each prints the maximum. Call \`printMax(3, 9)\` then \`printMax(3, 9, 5)\`, **one per line** (both 9).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n    // TODO: 写两个 printMax 重载\n}\n',
          expectedOutput: '9\n9\n',
          hint: {
            zh: '两个参数版本用 `a > b ? a : b`；三个参数版本先假设 a 最大再比较。',
            en: 'Two-arg version: `a > b ? a : b`; three-arg version: assume a is max then compare.',
          },
          solution: 'public class Main {\n    public static void printMax(int a, int b) {\n        System.out.println(a > b ? a : b);\n    }\n\n    public static void printMax(int a, int b, int c) {\n        int m = a;\n        if (b > m) m = b;\n        if (c > m) m = c;\n        System.out.println(m);\n    }\n\n    public static void main(String[] args) {\n        printMax(3, 9);\n        printMax(3, 9, 5);\n    }\n}\n',
        },
      ],
    },

    // ================= 7. 数组 =================
    {
      id: 'arrays',
      title: { zh: '数组', en: 'Arrays' },
      difficulty: 2,
      lecture: {
        zh: `## 数组：固定长度的容器

\`\`\`java
int[] nums = new int[5];            // 长度 5，默认全 0
int[] primes = {2, 3, 5, 7, 11};     // 直接初始化
System.out.println(primes.length);   // 5（注意：是属性，不是方法）
\`\`\`

下标从 \`0\` 到 \`length - 1\`，越界访问会抛 \`ArrayIndexOutOfBoundsException\`。

### 两种遍历

\`\`\`java
// 普通 for（需要下标时）
for (int i = 0; i < primes.length; i++) {
    System.out.println(primes[i]);
}

// 增强 for（只取值，最常用）
for (int p : primes) {
    System.out.println(p);
}
\`\`\`

### java.util.Arrays 工具类

| 方法 | 作用 |
|---|---|
| \`Arrays.sort(a)\` | 升序排序（原地） |
| \`Arrays.toString(a)\` | 格式化成 \`[1, 2, 3]\` |
| \`Arrays.fill(a, 0)\` | 全部填 0 |
| \`Arrays.copyOf(a, n)\` | 复制前 n 个 |
| \`Arrays.equals(a, b)\` | 元素逐一比较 |

\`\`\`java
int[] a = {3, 1, 4, 1, 5};
Arrays.sort(a);                       // a 变为 {1,1,3,4,5}
System.out.println(Arrays.toString(a));   // [1, 1, 3, 4, 5]
\`\`\`

### 二维数组

\`\`\`java
int[][] m = {
    {1, 2, 3},
    {4, 5, 6}
};
System.out.println(m[1][2]);   // 6
\`\`\`

> 数组长度**创建后不可变**。需要动态扩容请用 \`ArrayList\`（后续章节）。`,
        en: `## Arrays: fixed-size containers

\`\`\`java
int[] nums = new int[5];            // length 5, all zeros by default
int[] primes = {2, 3, 5, 7, 11};     // initializer list
System.out.println(primes.length);   // 5 (note: a field, not a method)
\`\`\`

Indices run from \`0\` to \`length - 1\`; out-of-range access throws \`ArrayIndexOutOfBoundsException\`.

### Two ways to iterate

\`\`\`java
// classic for (when you need the index)
for (int i = 0; i < primes.length; i++) {
    System.out.println(primes[i]);
}

// enhanced for (values only — most common)
for (int p : primes) {
    System.out.println(p);
}
\`\`\`

### The java.util.Arrays utility class

| Method | Purpose |
|---|---|
| \`Arrays.sort(a)\` | ascending sort (in place) |
| \`Arrays.toString(a)\` | format as \`[1, 2, 3]\` |
| \`Arrays.fill(a, 0)\` | fill with 0 |
| \`Arrays.copyOf(a, n)\` | copy first n elements |
| \`Arrays.equals(a, b)\` | element-wise equality |

\`\`\`java
int[] a = {3, 1, 4, 1, 5};
Arrays.sort(a);                       // a becomes {1,1,3,4,5}
System.out.println(Arrays.toString(a));   // [1, 1, 3, 4, 5]
\`\`\`

### 2-D arrays

\`\`\`java
int[][] m = {
    {1, 2, 3},
    {4, 5, 6}
};
System.out.println(m[1][2]);   // 6
\`\`\`

> An array's length is **fixed once created**. For resizable containers, use \`ArrayList\` (covered later).`,
      },
      examples: [
        {
          caption: { zh: '排序与打印', en: 'Sort and print' },
          code: 'import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 1, 4, 1, 5};\n        Arrays.sort(a);\n        System.out.println(Arrays.toString(a));\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '数组统计', en: 'Array statistics' },
          prompt: {
            zh: '\`int[] nums = {4, 8, 15, 16, 23, 42}\`，**每行一个**依次输出：总和（108）、最大值（42）、最小值（4）、元素个数（6）。',
            en: '\`int[] nums = {4, 8, 15, 16, 23, 42}\`, print **one per line**: sum (108), max (42), min (4), length (6).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        int[] nums = {4, 8, 15, 16, 23, 42};\n        // TODO\n    }\n}\n',
          expectedOutput: '108\n42\n4\n6\n',
          hint: {
            zh: '用增强 for 累加并跟踪 max/min；长度用 `nums.length`。',
            en: 'Use enhanced-for to accumulate; track max/min; length is `nums.length`.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int[] nums = {4, 8, 15, 16, 23, 42};\n        int sum = 0;\n        int max = nums[0];\n        int min = nums[0];\n        for (int n : nums) {\n            sum += n;\n            if (n > max) max = n;\n            if (n < min) min = n;\n        }\n        System.out.println(sum);\n        System.out.println(max);\n        System.out.println(min);\n        System.out.println(nums.length);\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '排序后输出', en: 'Sort and print' },
          prompt: {
            zh: '\`int[] a = {3, 1, 4, 1, 5, 9, 2, 6}\`，用 \`Arrays.sort\` 排序后用 \`Arrays.toString\` 输出（格式 \`[1, 1, 2, 3, 4, 5, 6, 9]\`）。',
            en: '\`int[] a = {3, 1, 4, 1, 5, 9, 2, 6}\`, sort with \`Arrays.sort\`, then print with \`Arrays.toString\` (format \`[1, 1, 2, 3, 4, 5, 6, 9]\`).',
          },
          starter: 'import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 1, 4, 1, 5, 9, 2, 6};\n        // TODO\n    }\n}\n',
          expectedOutput: '[1, 1, 2, 3, 4, 5, 6, 9]\n',
          hint: {
            zh: '记得 `import java.util.Arrays;`。',
            en: 'Remember to `import java.util.Arrays;`.',
          },
          solution: 'import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 1, 4, 1, 5, 9, 2, 6};\n        Arrays.sort(a);\n        System.out.println(Arrays.toString(a));\n    }\n}\n',
        },
      ],
    },

    // ================= 8. 字符串 =================
    {
      id: 'strings',
      title: { zh: '字符串', en: 'Strings' },
      difficulty: 2,
      lecture: {
        zh: `## String 不可变

\`String\` 对象**创建后不能修改**——任何看似「修改」的操作（拼接、替换、大小写转换）都会返回**新对象**：

\`\`\`java
String s = "hello";
s.toUpperCase();              // 不修改 s，返回 "HELLO"
s = s.toUpperCase();          // 重新赋值才生效
System.out.println(s);        // HELLO
\`\`\`

### 常用方法

| 方法 | 作用 |
|---|---|
| \`length()\` | 字符数 |
| \`charAt(i)\` | 第 i 个字符 |
| \`substring(a, b)\` | 子串 [a, b) |
| \`indexOf(s)\` | 子串首次位置（找不到返回 -1） |
| \`equals(s)\` | 内容相等（区分大小写） |
| \`equalsIgnoreCase(s)\` | 忽略大小写比较 |
| \`startsWith(s)\` / \`endsWith(s)\` | 前/后缀判断 |
| \`trim()\` | 去掉两端空白 |
| \`replace(a, b)\` | 替换全部 |
| \`split(regex)\` | 按正则切分 |

\`\`\`java
String s = "Hello, Java";
System.out.println(s.length());           // 11
System.out.println(s.substring(0, 5));    // Hello
System.out.println(s.contains("Java"));   // true
\`\`\`

### equals vs ==

\`==\` 比较的是**引用**（内存地址）；\`equals\` 比较的是**内容**。这是初学者最常踩的坑：

\`\`\`java
String a = new String("hi");
String b = new String("hi");
System.out.println(a == b);         // false（不同对象）
System.out.println(a.equals(b));    // true（内容相同）
\`\`\`

> 字符串字面量（如 \`String s = "hi"\`）会进入**字符串常量池**，常量池里相等的字面量可能是同一个对象，\`==\` 可能返回 true。**不要依赖**这种行为——比较内容请**永远用 \`equals\`**。

### StringBuilder：频繁拼接

\`+\` 拼接字符串会生成大量临时对象，性能差。改用 \`StringBuilder\`：

\`\`\`java
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(' ').append("Java");
String s = sb.toString();        // "Hello Java"
sb.reverse();                    // 反转
\`\`\`

> 简单拼接几次用 \`+\` 没问题；**循环里**反复拼接请用 \`StringBuilder\`。`,
        en: `## String is immutable

\`String\` objects **cannot be modified after creation**. Anything that looks like a modification (concatenation, replace, case change) actually returns a **new object**:

\`\`\`java
String s = "hello";
s.toUpperCase();              // does not change s; returns "HELLO"
s = s.toUpperCase();          // reassign to make it stick
System.out.println(s);        // HELLO
\`\`\`

### Common methods

| Method | Purpose |
|---|---|
| \`length()\` | number of characters |
| \`charAt(i)\` | character at index i |
| \`substring(a, b)\` | substring [a, b) |
| \`indexOf(s)\` | first position (or -1) |
| \`equals(s)\` | content equality (case-sensitive) |
| \`equalsIgnoreCase(s)\` | case-insensitive equality |
| \`startsWith(s)\` / \`endsWith(s)\` | prefix/suffix test |
| \`trim()\` | strip leading/trailing whitespace |
| \`replace(a, b)\` | replace all |
| \`split(regex)\` | split by regex |

\`\`\`java
String s = "Hello, Java";
System.out.println(s.length());           // 11
System.out.println(s.substring(0, 5));    // Hello
System.out.println(s.contains("Java"));   // true
\`\`\`

### equals vs ==

\`==\` compares **references** (memory addresses); \`equals\` compares **content**. This is the most common beginner trap:

\`\`\`java
String a = new String("hi");
String b = new String("hi");
System.out.println(a == b);         // false (different objects)
System.out.println(a.equals(b));    // true (same content)
\`\`\`

> String literals (e.g. \`String s = "hi"\`) go into the **string constant pool**; equal literals may share the same pool object, so \`==\` may return true. **Don't rely on that** — always use \`equals\` to compare content.

### StringBuilder for heavy concatenation

Repeated \`+\` creates many temporary objects. Use \`StringBuilder\` instead:

\`\`\`java
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(' ').append("Java");
String s = sb.toString();        // "Hello Java"
sb.reverse();                    // reverse the buffer
\`\`\`

> A few \`+\` concatenations are fine; **inside loops** prefer \`StringBuilder\`.`,
      },
      examples: [
        {
          caption: { zh: '字符串方法串烧', en: 'Method medley' },
          code: 'public class Main {\n    public static void main(String[] args) {\n        String s = "Hello Java";\n        System.out.println(s.length());\n        System.out.println(s.substring(0, 5));\n        System.out.println(s.replace("Java", "World"));\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: 'equals vs ==', en: 'equals vs ==' },
          prompt: {
            zh: '创建 \`String a = new String("Hi")\` 和 \`String b = new String("Hi")\`。**每行一个**输出 \`a == b\`（应为 \`false\`）和 \`a.equals(b)\`（应为 \`true\`）。',
            en: 'Create \`String a = new String("Hi")\` and \`String b = new String("Hi")\`. Print \`a == b\` (should be \`false\`) and \`a.equals(b)\` (should be \`true\`), **one per line**.',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        String a = new String("Hi");\n        String b = new String("Hi");\n        // TODO\n    }\n}\n',
          expectedOutput: 'false\ntrue\n',
          hint: {
            zh: '`println(boolean)` 会直接打印 `true` / `false`。',
            en: '`println(boolean)` prints `true` / `false` directly.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        String a = new String("Hi");\n        String b = new String("Hi");\n        System.out.println(a == b);\n        System.out.println(a.equals(b));\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: 'StringBuilder 反转', en: 'Reverse with StringBuilder' },
          prompt: {
            zh: '用 \`StringBuilder\` 反转字符串 \`"hello"\`，输出反转后的结果（应为 \`olleh\`）。',
            en: 'Use \`StringBuilder\` to reverse the string \`"hello"\` and print the result (should be \`olleh\`).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        String s = "hello";\n        // TODO\n    }\n}\n',
          expectedOutput: 'olleh\n',
          hint: {
            zh: '`new StringBuilder(s).reverse().toString()`。',
            en: '`new StringBuilder(s).reverse().toString()`.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        String s = "hello";\n        StringBuilder sb = new StringBuilder(s);\n        sb.reverse();\n        System.out.println(sb.toString());\n    }\n}\n',
        },
      ],
    },

    // ================= 9. 对象与引用 =================
    {
      id: 'references',
      title: { zh: '对象与引用', en: 'Objects & References' },
      difficulty: 2,
      lecture: {
        zh: `## 什么是引用？

Java 中除了 8 种基本类型，其余都是**对象**。**对象变量里存的不是对象本身，而是一个引用（reference）**——可以理解为「指向堆中对象的箭头」。

\`\`\`java
String s = new String("hi");   // s 是引用，指向堆里的 String 对象
int[] a = {1, 2, 3};           // a 是引用，指向堆里的数组对象
\`\`\`

画出来就像：

\`\`\`
栈（变量）          堆（对象）
+--------+         +----------+
|  s  ───┼───────▶ |  "hi"    |
+--------+         +----------+
\`\`\`

### 引用赋值 vs 值拷贝

**基本类型**赋值是**值拷贝**——两份数据，互不影响：

\`\`\`java
int a = 5;
int b = a;          // b 是 a 的拷贝
b = 10;
System.out.println(a);   // 5（a 没变）
\`\`\`

**引用类型**赋值是**拷贝引用**——两个变量指向**同一个对象**：

\`\`\`java
int[] a = {1, 2, 3};
int[] b = a;          // b 与 a 指向同一个数组
b[0] = 99;
System.out.println(a[0]);   // 99（a 看到的也被改了！）
\`\`\`

> 改的是**对象本身**，所有指向它的引用都会看到。要真正「复制一份」，用 \`Arrays.copyOf\` 或 \`clone()\`。

### null 引用

引用可以「不指向任何对象」，写作 \`null\`：

\`\`\`java
String s = null;
System.out.println(s.length());   // NullPointerException!
\`\`\`

调用 \`null\` 引用的方法或访问字段会抛 \`NullPointerException\` (**NPE**)——这是 Java 最常见的运行时错误。**操作之前先判空**：

\`\`\`java
String s = null;
if (s != null && s.length() > 0) {   // 短路保护：s 是 null 时直接跳过
    System.out.println(s);
}
\`\`\`

### new vs 字面量

\`new\` 永远在堆上**创建新对象**：

\`\`\`java
String x = new String("A");
String y = new String("A");
System.out.println(x == y);         // false（两个独立对象）
System.out.println(x.equals(y));    // true（内容相同）
\`\`\`

而字面量 \`String s = "A"\` 会先查**字符串常量池**，可能复用已有对象；这种行为**不可依赖**，所以**永远用 \`equals\`** 比较内容。`,
        en: `## What is a reference?

In Java everything except the 8 primitive types is an **object**. **An object variable holds a reference (a pointer) to the object in the heap**, not the object itself.

\`\`\`java
String s = new String("hi");   // s is a reference to a String object
int[] a = {1, 2, 3};           // a is a reference to an array object
\`\`\`

Visually:

\`\`\`
Stack (variables)     Heap (objects)
+--------+            +----------+
|  s  ───┼──────────▶ |  "hi"    |
+--------+            +----------+
\`\`\`

### Reference assignment vs value copy

**Primitive** assignment copies the **value** — two independent copies:

\`\`\`java
int a = 5;
int b = a;          // b is a copy of a's value
b = 10;
System.out.println(a);   // 5 (a is unchanged)
\`\`\`

**Reference** assignment copies the **reference** — both variables point at the **same object**:

\`\`\`java
int[] a = {1, 2, 3};
int[] b = a;          // b and a point at the same array
b[0] = 99;
System.out.println(a[0]);   // 99 (a sees the change too!)
\`\`\`

> Mutating the **object** is visible through every reference. To actually duplicate, use \`Arrays.copyOf\` or \`clone()\`.

### null references

A reference can point at nothing: write \`null\`.

\`\`\`java
String s = null;
System.out.println(s.length());   // NullPointerException!
\`\`\`

Calling a method on or accessing a field of a \`null\` reference throws \`NullPointerException\` (**NPE**) — the most common runtime error in Java. **Check before use**:

\`\`\`java
String s = null;
if (s != null && s.length() > 0) {   // short-circuit: skip if null
    System.out.println(s);
}
\`\`\`

### new vs literal

\`new\` always creates a **new** object on the heap:

\`\`\`java
String x = new String("A");
String y = new String("A");
System.out.println(x == y);         // false (two distinct objects)
System.out.println(x.equals(y));    // true (same content)
\`\`\`

The literal form \`String s = "A"\` first consults the **string constant pool** and may reuse an existing object. That behavior is **not something to rely on** — always compare content with \`equals\`.`,
      },
      examples: [
        {
          caption: { zh: '引用共享与拷贝', en: 'Shared vs copied references' },
          code: 'import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {1, 2, 3};\n        int[] b = a;                      // 共享引用\n        int[] c = Arrays.copyOf(a, a.length); // 真正复制\n        b[0] = 99;\n        System.out.println(a[0]);         // 99\n        System.out.println(c[0]);         // 1\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '引用共享', en: 'Shared references' },
          prompt: {
            zh: '\`int[] a = {1, 2, 3}\`，\`int[] b = a\`；修改 \`b[0] = 99\` 后输出 \`a[0]\`（应为 99）。',
            en: '\`int[] a = {1, 2, 3}\`, \`int[] b = a\`; after \`b[0] = 99\` print \`a[0]\` (should be 99).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        int[] a = {1, 2, 3};\n        int[] b = a;\n        b[0] = 99;\n        // TODO: 输出 a[0]\n    }\n}\n',
          expectedOutput: '99\n',
          hint: {
            zh: '`a` 和 `b` 指向同一个数组，所以改动 a[0] 也是 99。',
            en: '`a` and `b` point at the same array, so a[0] also sees 99.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int[] a = {1, 2, 3};\n        int[] b = a;\n        b[0] = 99;\n        System.out.println(a[0]);\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: 'null 安全访问', en: 'Null-safe access' },
          prompt: {
            zh: '\`String s = null\`。在 \`s != null\` 时输出 \`s.length()\`，否则输出 \`-1\`（当前应为 \`-1\`）。',
            en: '\`String s = null\`. If \`s != null\` print \`s.length()\`, otherwise print \`-1\` (currently should be \`-1\`).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        String s = null;\n        // TODO\n    }\n}\n',
          expectedOutput: '-1\n',
          hint: {
            zh: '`if (s != null) { ... } else { System.out.println(-1); }`。',
            en: '`if (s != null) { ... } else { System.out.println(-1); }`.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        String s = null;\n        if (s != null) {\n            System.out.println(s.length());\n        } else {\n            System.out.println(-1);\n        }\n    }\n}\n',
        },
      ],
    },

    // ================= 10. 类与对象 =================
    {
      id: 'oop',
      title: { zh: '类与对象：构造、封装、继承、多态', en: 'Classes: Constructors, Encapsulation, Inheritance, Polymorphism' },
      difficulty: 3,
      lecture: {
        zh: `## 定义类

\`\`\`java
class Rectangle {
    private int width;     // 字段（成员变量）
    private int height;

    // 构造器：与类同名，没有返回类型
    public Rectangle(int w, int h) {
        this.width = w;
        this.height = h;
    }

    public int area() {
        return this.width * this.height;
    }

    public int perimeter() {
        return 2 * (this.width + this.height);
    }
}

Rectangle r = new Rectangle(3, 4);   // new 创建对象，构造器自动调用
System.out.println(r.area());        // 12
\`\`\`

### 要点

- **构造器**：与类同名、没有返回类型；\`new\` 时**自动**调用一次，用来初始化对象
- \`this\`：指代当前实例；用于区分**形参与字段同名**
- **封装**：字段用 \`private\`，对外用 \`public\` 方法访问——避免外部直接修改内部状态

### 继承与多态

\`\`\`java
class Animal {
    protected String name;
    public Animal(String name) {
        this.name = name;
    }
    public String speak() {
        return name + " makes a sound";
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name);                  // 调用父类构造器
    }
    @Override
    public String speak() {           // 重写父类方法
        return name + " barks";
    }
}

Animal a = new Dog("Rex");          // 父类引用指向子类对象
System.out.println(a.speak());      // Rex barks（运行时多态）
\`\`\`

> 编译期类型是 \`Animal\`，运行期类型是 \`Dog\`。调用哪个 \`speak()\` 由**实际对象**决定——这就是**多态**。它让一段代码能处理多种「形状」的对象，是 OOP 的核心。

### 访问修饰符

| 修饰符 | 范围 |
|---|---|
| \`private\` | 仅本类 |
| 默认（包内） | 同包 |
| \`protected\` | 同包 + 子类 |
| \`public\` | 任意 |

### static

\`static\` 修饰的字段/方法**属于类**而非实例，所有对象**共享**：

\`\`\`java
class Counter {
    static int count = 0;
    Counter() { count++; }
}
new Counter(); new Counter();
System.out.println(Counter.count);   // 2
\`\`\`

> 静态方法**不能**访问实例字段（因为没有 \`this\`）。`,
        en: `## Defining a class

\`\`\`java
class Rectangle {
    private int width;     // field (instance variable)
    private int height;

    // constructor: same name as class, no return type
    public Rectangle(int w, int h) {
        this.width = w;
        this.height = h;
    }

    public int area() {
        return this.width * this.height;
    }

    public int perimeter() {
        return 2 * (this.width + this.height);
    }
}

Rectangle r = new Rectangle(3, 4);   // new creates the object, constructor runs
System.out.println(r.area());        // 12
\`\`\`

### Key points

- **Constructor**: same name as the class, no return type; called **automatically** by \`new\` to initialize the object
- \`this\`: refers to the current instance; disambiguates parameters from fields
- **Encapsulation**: fields stay \`private\`; expose \`public\` methods — don't let outsiders poke at internal state

### Inheritance & polymorphism

\`\`\`java
class Animal {
    protected String name;
    public Animal(String name) {
        this.name = name;
    }
    public String speak() {
        return name + " makes a sound";
    }
}

class Dog extends Animal {
    public Dog(String name) {
        super(name);                  // call parent constructor
    }
    @Override
    public String speak() {           // override parent method
        return name + " barks";
    }
}

Animal a = new Dog("Rex");          // parent reference, child object
System.out.println(a.speak());      // Rex barks (runtime polymorphism)
\`\`\`

> Compile-time type is \`Animal\`, runtime type is \`Dog\`. Which \`speak()\` runs is decided by the **actual object** — that's **polymorphism**. It lets one piece of code handle many shapes of objects, and is the heart of OOP.

### Access modifiers

| Modifier | Scope |
|---|---|
| \`private\` | this class only |
| default (package) | same package |
| \`protected\` | same package + subclasses |
| \`public\` | anywhere |

### static

\`static\` fields and methods belong to the **class**, not to instances — shared across all objects:

\`\`\`java
class Counter {
    static int count = 0;
    Counter() { count++; }
}
new Counter(); new Counter();
System.out.println(Counter.count);   // 2
\`\`\`

> Static methods **cannot** access instance fields (there is no \`this\`).`,
      },
      examples: [
        {
          caption: { zh: '类、继承与多态', en: 'Class, inheritance, polymorphism' },
          code: 'public class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog("Rex");\n        System.out.println(a.speak());\n    }\n}\n\nclass Animal {\n    protected String name;\n    public Animal(String name) { this.name = name; }\n    public String speak() { return name + " makes a sound"; }\n}\n\nclass Dog extends Animal {\n    public Dog(String name) { super(name); }\n    @Override\n    public String speak() { return name + " barks"; }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: 'Rectangle 类', en: 'Rectangle class' },
          prompt: {
            zh: '在 main 同文件中定义 \`Rectangle\` 类（私有字段 \`width\`、\`height\`，构造器 \`Rectangle(int, int)\`，方法 \`area()\` 返回面积、\`perimeter()\` 返回周长）。创建 \`new Rectangle(3, 4)\`，**每行一个**输出面积和周长。',
            en: 'In the same file as main define \`Rectangle\` (private fields \`width\`, \`height\`; constructor \`Rectangle(int, int)\`; methods \`area()\` and \`perimeter()\`). Create \`new Rectangle(3, 4)\` and print area and perimeter **one per line**.',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        // TODO: 创建 Rectangle 并输出\n    }\n    // TODO: 写 Rectangle 类\n}\n',
          expectedOutput: '12\n14\n',
          hint: {
            zh: '周长 = 2 * (width + height)；一个文件里只能有一个 public 类（Main），Rectangle 写成 package-private 即可。',
            en: 'Perimeter = 2 * (width + height); one file may have only one public class (Main), so Rectangle is package-private.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle(3, 4);\n        System.out.println(r.area());\n        System.out.println(r.perimeter());\n    }\n}\n\nclass Rectangle {\n    private int width;\n    private int height;\n\n    public Rectangle(int width, int height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    public int area() {\n        return width * height;\n    }\n\n    public int perimeter() {\n        return 2 * (width + height);\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '继承与多态', en: 'Inheritance & polymorphism' },
          prompt: {
            zh: '定义父类 \`Animal\`（构造器接受 \`name\`，方法 \`speak()\` 返回 \`name + " makes a sound"\`）和子类 \`Dog\`（继承 \`Animal\`，重写 \`speak()\` 返回 \`name + " barks"\`）。在 main 里创建 \`new Dog("Rex")\`（用 \`Animal\` 类型接住），输出 \`speak()\`（应为 \`Rex barks\`）。',
            en: 'Define parent \`Animal\` (constructor takes \`name\`, \`speak()\` returns \`name + " makes a sound"\`) and subclass \`Dog\` (extends \`Animal\`, overrides \`speak()\` to return \`name + " barks"\`). In main create \`new Dog("Rex")\` (declared as \`Animal\`) and print \`speak()\` (should be \`Rex barks\`).',
          },
          starter: 'public class Main {\n    public static void main(String[] args) {\n        // TODO\n    }\n    // TODO: 写 Animal 和 Dog\n}\n',
          expectedOutput: 'Rex barks\n',
          hint: {
            zh: '`Dog` 用 `super(name)` 调用父类构造器，重写方法加 `@Override`。',
            en: '`Dog` calls `super(name)`; use `@Override` on the overriding method.',
          },
          solution: 'public class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog("Rex");\n        System.out.println(a.speak());\n    }\n}\n\nclass Animal {\n    protected String name;\n    public Animal(String name) {\n        this.name = name;\n    }\n    public String speak() {\n        return name + " makes a sound";\n    }\n}\n\nclass Dog extends Animal {\n    public Dog(String name) {\n        super(name);\n    }\n    @Override\n    public String speak() {\n        return name + " barks";\n    }\n}\n',
        },
      ],
    },

    // ================= 11. 文件 IO =================
    {
      id: 'files',
      title: { zh: '文件 IO', en: 'File I/O' },
      difficulty: 3,
      lecture: {
        zh: `## 写文件：PrintWriter

\`\`\`java
import java.io.PrintWriter;

try (PrintWriter pw = new PrintWriter("note.txt")) {
    pw.println("Hello File");
    pw.println("second line");
}
\`\`\`

> \`try (...)\` 叫 **try-with-resources**：括号里的对象必须实现 \`AutoCloseable\`，块结束会自动调用 \`close()\`——文件句柄不会泄漏，即使中途抛出异常也安全。

### 读文件：java.nio.file.Files（JDK 11+）

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

String text = Files.readString(Paths.get("note.txt"));
List<String> lines = Files.readAllLines(Paths.get("note.txt"));
\`\`\`

- \`Files.readString\`：把整个文件读成字符串
- \`Files.readAllLines\`：按行切分，返回 \`List<String>\`
- 写文件还有 \`Files.writeString\`、\`Files.write\`

### 旧式 BufferedReader

如果只能使用 JDK 8 风格：

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;

try (BufferedReader br = new BufferedReader(new FileReader("note.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}
\`\`\`

\`BufferedReader.readLine()\` 返回 \`null\` 表示文件结束。

### 路径

- 相对路径相对**程序启动目录**（沙箱里就是沙箱工作目录）
- 跨平台请用 \`Paths.get("a", "b")\` 或正斜杠 \`"a/b"\`，避免手写反斜杠

> 文件不存在时，\`readString\` / \`readAllLines\` 会抛 \`NoSuchFileException\`。记得先写再读，或者加异常处理。`,
        en: `## Writing: PrintWriter

\`\`\`java
import java.io.PrintWriter;

try (PrintWriter pw = new PrintWriter("note.txt")) {
    pw.println("Hello File");
    pw.println("second line");
}
\`\`\`

> The \`try (...)\` form is **try-with-resources**: the resource must implement \`AutoCloseable\`, and \`close()\` runs automatically when the block ends — file handles never leak, even on exceptions.

### Reading: java.nio.file.Files (JDK 11+)

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

String text = Files.readString(Paths.get("note.txt"));
List<String> lines = Files.readAllLines(Paths.get("note.txt"));
\`\`\`

- \`Files.readString\`: read whole file into one String
- \`Files.readAllLines\`: split by lines, returns \`List<String>\`
- For writing there is also \`Files.writeString\` / \`Files.write\`

### Classic BufferedReader

When you must stick to JDK 8 style:

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;

try (BufferedReader br = new BufferedReader(new FileReader("note.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}
\`\`\`

\`BufferedReader.readLine()\` returns \`null\` at end of file.

### Paths

- A relative path is resolved against the program's working directory (the sandbox's working dir in our case)
- For cross-platform code use \`Paths.get("a", "b")\` or forward slashes \`"a/b"\` — avoid raw backslashes

> If the file is missing, \`readString\` / \`readAllLines\` throw \`NoSuchFileException\`. Write first, then read — or add error handling.`,
      },
      examples: [
        {
          caption: { zh: '写入再读回', en: 'Write then read back' },
          code: 'import java.io.PrintWriter;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        try (PrintWriter pw = new PrintWriter("demo.txt")) {\n            pw.println("apple");\n            pw.println("banana");\n        }\n        for (String line : Files.readAllLines(Paths.get("demo.txt"))) {\n            System.out.println(line);\n        }\n    }\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '写入并读回', en: 'Write and read back' },
          prompt: {
            zh: '用 \`PrintWriter\` 把 \`Hello File\` 写入 \`test.txt\`，再用 \`Files.readString\` 读回，输出读到的内容（应为 \`Hello File\`）。',
            en: 'Use \`PrintWriter\` to write \`Hello File\` into \`test.txt\`, then read it back with \`Files.readString\` and print it (should be \`Hello File\`).',
          },
          starter: 'import java.io.PrintWriter;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO\n    }\n}\n',
          expectedOutput: 'Hello File\n',
          hint: {
            zh: '`pw.print("Hello File");` 不带换行，读回就是 `Hello File`。',
            en: '`pw.print("Hello File");` (no newline) so the read-back is exactly `Hello File`.',
          },
          solution: 'import java.io.PrintWriter;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        try (PrintWriter pw = new PrintWriter("test.txt")) {\n            pw.print("Hello File");\n        }\n        String content = Files.readString(Paths.get("test.txt"));\n        System.out.println(content);\n    }\n}\n',
        },
        {
          id: 'ex2',
          title: { zh: '逐行读取并输出字符数', en: 'Read lines and print lengths' },
          prompt: {
            zh: '用 \`Files.writeString\` 把 \`apple\\nbanana\\ncherry\\n\` 写入 \`fruits.txt\`，再用 \`Files.readAllLines\` 读回。**每行一个**输出文件每行的字符数：apple→5、banana→6、cherry→6，共三行。',
            en: 'Use \`Files.writeString\` to write \`apple\\nbanana\\ncherry\\n\` into \`fruits.txt\`, then read back with \`Files.readAllLines\`. Print the length of each line **one per line**: apple→5, banana→6, cherry→6 (three lines).',
          },
          starter: 'import java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        // TODO\n    }\n}\n',
          expectedOutput: '5\n6\n6\n',
          hint: {
            zh: '`Files.writeString(path, content)` 写；`readAllLines` 返回不含换行的行；用 `line.length()`。',
            en: '`Files.writeString(path, content)` to write; `readAllLines` strips line breaks; use `line.length()`.',
          },
          solution: 'import java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        Files.writeString(Paths.get("fruits.txt"), "apple\\nbanana\\ncherry\\n");\n        List<String> lines = Files.readAllLines(Paths.get("fruits.txt"));\n        for (String line : lines) {\n            System.out.println(line.length());\n        }\n    }\n}\n',
        },
      ],
    },
  ],
};