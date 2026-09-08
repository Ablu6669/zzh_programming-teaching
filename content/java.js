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
        zh: `## 这节课学什么

写出并运行人生第一个 Java 程序：在屏幕上打印一行文字。学完你会知道代码该放在哪、这一堆英文单词各是什么意思，以及怎么让程序「开口说话」。

## 程序是什么

把计算机想象成**一位只按指令办事的机器人**：你交给它一张写好步骤的清单，它就从第一条做到最后一条。这张清单就是**程序**；每个步骤允许怎么写，由**编程语言**规定——Java 就是其中一种。

Java 有条铁规矩：所有代码必须装进一个叫**类（class）**的「盒子」里，盒子有名字（这里是 \`Main\`）。机器人启动时不乱翻盒子，只找盒子上的**总开关**——\`main\` 方法，然后从它大括号里的第一条语句开始逐条执行。

「打印」为什么重要？程序运行在一个黑色终端窗口里，\`System.out.println(...)\` 会把括号里的内容写进这个窗口并换行——这是程序向你「汇报结果」的最基本方式。

## 怎么写

先背下这个固定骨架，本课所有代码都写进它的大括号里：

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // 你的代码写在这里
    }
}
\`\`\`

把 \`public static void main(String[] args)\` 逐词拆开：

- \`public\`：公开的，任何代码都能调用它
- \`static\`：属于类本身，程序启动时不必先「造对象」就能执行
- \`void\`：这个方法干完活**不返回任何结果**
- \`main\`：方法名，Java 规定入口**必须**叫这个名字（全小写）
- \`(String[] args)\`：启动参数，现在照抄即可，后面课程再讲

打印语句的规矩：

- \`System.out.println("文字");\`：打印一行内容并**自动换行**
- \`System.out.print("文字");\`：打印内容但**不换行**，下一次打印会紧贴在后面
- 要打印的文字必须放进**英文双引号**；整条语句以**分号 \`;\`** 结尾
- \`System\` 的 S **大写**；\`out\`、\`println\` 全小写；\`//\` 后面是注释，写给人看，Java 忽略

在本地跑 Java 分两步：\`javac Main.java\` 编译成字节码，再 \`java Main\` 运行；本站的「运行」按钮会自动完成这两步。

## 逐行读懂示例

对照本课第二个示例（print vs println）逐行看：

\`\`\`java
System.out.print("Hello, ");   // 打印 Hello, 后不换行
System.out.println("Java");    // 紧接着补上 Java，然后换行
\`\`\`

第一行用 \`print\`，光标停在 \`Hello, \` 后面；第二行用 \`println\` 把 \`Java\` 接着补上再换行。所以屏幕上是完整的一行 \`Hello, Java\`。第一个示例更简单：两条 \`println\`，各打印一行，共两行。

## 新手常犯的错误

- **忘了分号**：\`System.out.println("Hi")\` 少了 \`;\` → 编译报错 \`error: ';' expected\`，在行末补上分号即可
- **大小写写错**：\`system.out.println\` → 报错「找不到符号 system」。Java 区分大小写，\`System\` 的 S 必须大写
- **文件名与类名不一致**：类叫 \`Main\` 文件却存成 \`Test.java\` → 报错提示类应声明在 Main.java 中。文件名必须与 public 类名完全一致
- **main 拼错或漏参数**：写成 \`mian\` 或漏掉 \`(String[] args)\` → 编译能过，运行时报「找不到 main 方法」。入口签名必须一字不差

## 小结

- Java 代码必须装进类里，入口固定是 \`public static void main(String[] args)\`
- \`println\` 打印并换行，\`print\` 不换行；语句以分号结尾
- 文件名必须与 public 类名一致（\`Main.java\`）
- Java 区分大小写；看到一堆报错先看**第一条**，后面常是连带反应

下一课让程序学会「记住东西」——变量与基本类型。`,
        en: `## What you'll learn in this lesson

Write and run your very first Java program: printing a line of text on the screen. By the end you'll know where your code goes, what each of those English words means, and how to make a program "speak".

## What is a program?

Picture the computer as **a robot that only follows exact instructions**: you hand it a checklist of steps and it carries them out from first to last. That checklist is a **program**, and the **programming language** defines how each step must be written — Java is one such language.

Java has one house rule: all code must live inside a "box" called a **class**, and the box has a name (here \`Main\`). When the robot starts it does not rummage through the box; it looks for one **master switch** — the \`main\` method — and begins executing from the first statement inside its braces.

Why does printing matter? A program runs in a black terminal window, and \`System.out.println(...)\` writes whatever is in the parentheses into that window, followed by a newline — the most basic way a program reports its results to you.

## How to write it

First memorize this fixed skeleton; in this lesson all your code goes between its braces:

\`\`\`java
public class Main {
    public static void main(String[] args) {
        // your code goes here
    }
}
\`\`\`

Let's decode \`public static void main(String[] args)\` word by word:

- \`public\`: public — any other code is allowed to call it
- \`static\`: belongs to the class itself, so it can run at startup without creating an object first
- \`void\`: this method returns **no result** when it finishes
- \`main\`: the method name; the entry point **must** be named exactly this (all lowercase)
- \`(String[] args)\`: startup parameters — copy them verbatim for now; covered in a later lesson

Rules for printing:

- \`System.out.println("text");\`: prints the text and **automatically moves to a new line**
- \`System.out.print("text");\`: prints the text **without** a newline, so the next print continues right after it
- The text must be wrapped in **double quotes**; the whole statement ends with a **semicolon \`;\`**
- The \`S\` in \`System\` is **capital**; \`out\` and \`println\` are all lowercase; text after \`//\` is a comment for humans, ignored by Java

Running Java locally takes two steps: \`javac Main.java\` compiles the source into bytecode, then \`java Main\` runs it; the Run button on this site does both for you automatically.

## Reading the example line by line

Take the second example of this lesson (print vs println):

\`\`\`java
System.out.print("Hello, ");   // prints "Hello, " with no newline
System.out.println("Java");    // appends "Java" right after it, then breaks the line
\`\`\`

The first line uses \`print\`, so the cursor stays right after \`Hello, \`. The second line uses \`println\`, which appends \`Java\` and then breaks the line. The screen ends up with one complete line, \`Hello, Java\`. The first example is even simpler: two \`println\` calls, each printing one line — two lines in total.

## Common beginner mistakes

- **Missing semicolon**: \`System.out.println("Hi")\` without \`;\` → compile error \`error: ';' expected\`; add the semicolon at the end of the line
- **Wrong letter case**: \`system.out.println\` → error \`cannot find symbol: system\`. Java is case-sensitive; the \`S\` in \`System\` must be capital
- **File name ≠ class name**: class \`Main\` saved as \`Test.java\` → the error says the class should be declared in a file named Main.java. The file name must exactly match the public class name
- **Misspelled main or missing parameters**: writing \`mian\` or dropping \`(String[] args)\` → the code compiles but the runtime reports it cannot find the main method. The entry signature must match character for character

## Summary

- Java code lives inside a class, and the entry point is always \`public static void main(String[] args)\`
- \`println\` prints and breaks the line; \`print\` does not; statements end with a semicolon
- The file name must match the public class name (\`Main.java\`)
- Java is case-sensitive; when errors appear, read the **first** one — later ones are usually collateral

Next lesson: teaching your program to "remember things" — variables and primitive types.`,
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
          hints: [
            { zh: '这题练的是 Java 程序的「输出」能力——让屏幕显示一行文字。先想清楚：所有可执行代码都该放在哪段入口里？', en: 'This exercise trains the "output" ability of a Java program — making the screen show one line of text. First think: where should every executable statement live?' },
            { zh: 'Java 程序从 main 方法开始逐行执行；想在屏幕上显示文字，需要写一条固定的输出语句。需要识别两件事：它属于哪个类（首字母大写的那一个）、后面跟什么符号。', en: 'A Java program executes top to bottom from main; to show text on the screen you need a fixed print statement. Notice two things: which class it belongs to (the one starting with a capital letter) and what symbol follows.' },
            { zh: '用 `System.out.println("文字");` 就能输出一行并自动换行；引号里就是要显示的内容，句末别忘了分号。', en: '`System.out.println("text");` prints one line and adds a newline automatically; the text inside the quotes is what is shown, and do not forget the trailing semicolon.' },
            { zh: '在 main 的大括号里写一条 `System.out.println("Hello, World!");`。易错点：System 的 S 必须大写；引号必须是英文双引号；逗号、感叹号、分号与题目一字不差；不要多打换行或空格。', en: 'Inside main braces write a single line: `System.out.println("Hello, World!");`. Watch out: capital S in System; double quotes must be English; the comma, exclamation mark and semicolon must match the problem character for character; no extra newlines or spaces.' },
            { zh: '完整写法：`System.out.println("Hello, World!");`。System 首字母大写、println 全小写、引号内文字与题目一致；漏写任何一个分号或写错大小写，编译都会报错。', en: 'Full answer: `System.out.println("Hello, World!");`. System starts with a capital letter, println is all lowercase, the quoted text matches the problem; missing any semicolon or wrong case breaks compilation.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}\n',
          solutionNote: { zh: '程序只需一条 System.out.println 调用即可完成：括号内是英文双引号包住的 Hello, World!，句末分号不能少，System 的 S 必须大写、println 全小写。判题区分大小写与全半角，差一个字符都会判未通过。也可以把 println 换成 print 后再用 + "\\n" 拼换行，但 println 一步到位更直接。', en: 'The program completes the task with a single System.out.println call: the content inside the parentheses is Hello, World! wrapped in English double quotes, and the trailing semicolon is required; the S in System must be capital, println all lowercase. The judge is case-sensitive and distinguishes half-width from full-width, so a single wrong character fails. You could swap println for print and append "\\n", but println is the direct one-step form.' },
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
          hints: [
            { zh: '这题练的是「一次输出一行、连续输出多行」。先想清楚：屏幕上要出现两行文字，在 main 里应该摆几条打印语句？', en: 'This exercise trains "one print per line, several lines in sequence". First think: when the screen should show two lines, how many print statements belong in main?' },
            { zh: '每次调用 println 输出一行后自动换行，所以两行需要两次调用、按先后顺序写——先写先打、后写后打；两行文字内容不同，要分别放进各自的英文双引号里。', en: 'Each println outputs one line and adds a newline, so two lines need two calls in order — first written prints first; the two lines have different content and each goes into its own English quotes.' },
            { zh: '两行各用一条 `System.out.println("文字");`，文字放在双引号内、分号结尾；System 首字母大写、println 全小写。', en: 'Use one `System.out.println("text");` per line; the text goes inside double quotes, the statement ends with a semicolon; System starts with a capital letter, println is all lowercase.' },
            { zh: '在 main 里依次写两条 println：第一条括号里放 Hello, Java，第二条放 I am learning。易错点：两条 println 的顺序不能颠倒；逗号、单词大小写、引号和分号都要与题目逐字符一致；中间不要加多余的空行或空格。', en: 'In main write two println calls in order: the first prints Hello, Java, the second prints I am learning. Watch out: do not swap the order of the two println calls; the comma, letter case, quotes and semicolons must match the problem character for character; no extra blank lines or spaces between them.' },
            { zh: '完整写法：`System.out.println("Hello, Java");` 与 `System.out.println("I am learning");`，各占一行写在 main 的花括号里。换行由 println 自动负责，不需要手工写 \\n。', en: 'Full answer: `System.out.println("Hello, Java");` and `System.out.println("I am learning");`, one per line inside main braces. Newlines are added by println automatically, so do not type \\n by hand.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java");\n        System.out.println("I am learning");\n    }\n}\n',
          solutionNote: { zh: '程序按顺序执行两条 println：第一条打印 Hello, Java 并自动换行，第二条打印 I am learning 并自动换行，所以屏幕上是两行字。它正确的关键在于两条语句的先后顺序、引号内的文字、大小写、逗号和分号全部与题目一致；println 自带换行，无需手工加 \\n。也可以把两次 println 合并为一次 println("Hello, Java\\nI am learning")，但拆成两条更清晰也更好维护。', en: 'The program runs two println calls in order: the first prints Hello, Java and adds a newline, the second prints I am learning and adds another, so the screen ends up with two lines. It passes only because the order, the quoted text, the case, the comma and the semicolons all match the problem; println already supplies the newline, so do not type \\n. You could collapse them into one println("Hello, Java\\nI am learning"), but keeping two statements is clearer and easier to maintain.' },
        },
      ],
    },

    // ================= 2. 变量与基本类型 =================
    {
      id: 'variables',
      title: { zh: '变量与基本类型', en: 'Variables & Primitive Types' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

让程序学会「记住东西」：把数字、文字等数据存进**变量**，之后随时取出来用。学完你能定义变量、做计算，并在字符串和数字之间来回转换。

## 变量是什么

变量就像一个**贴了标签的盒子**：标签是变量名（比如 \`age\`），盒子里装的是数据（比如 \`20\`），盒子的**规格**就是类型。Java 是**强类型**语言——盒子一旦按「整数规格」造好，就只能装整数，不能今天装数字、明天装文字。这样做的好处是：错误在**编译阶段**就会被抓住，而不是程序运行到一半才出问题。

「强类型」强在哪？有些语言允许同一个变量先存数字再存文字；Java 不行，类型在声明时写死，永远不变。这份严谨换来的是安全，这也是 Java 能胜任银行系统、安卓 App 等大型项目的原因之一。

## 怎么写

声明变量的固定格式是 \`类型 变量名 = 初始值;\`：

\`\`\`java
int age = 20;              // 整数，最常用
long big = 100000L;        // 更大的整数，末尾加 L
double price = 9.99;       // 带小数的数
boolean isOk = true;       // 只能是 true 或 false
char letter = 'A';         // 单个字符，用单引号
String name = "Alice";     // 一串文字，用双引号
\`\`\`

规则逐条记：

- \`int\` 能存约 ±21 亿的整数；不够用就换 \`long\`
- 小数默认是 \`double\`；要用 \`float\` 得在末尾加 \`f\`
- \`char\` 用**单引号**且只能放一个字符；\`String\` 用**双引号**，S 要大写（它是类，不是基本类型）
- 常量加 \`final\`，只能赋值一次，习惯上全大写：\`final int MAX = 100;\`

类型之间**不会**自动变来变去，必须显式转换：

\`\`\`java
int n = Integer.parseInt("123");   // 文字 "123" → 数字 123
String s = String.valueOf(456);    // 数字 456 → 文字 "456"
int x = (int) 3.99;                // 强制转换，直接砍掉小数 → 3
\`\`\`

## 逐行读懂示例

对照本课示例逐行看：

\`\`\`java
int width = 7;      // 造一个整数盒子，标签 width，装 7
int height = 4;     // 再造一个，装 4
System.out.println(width * height);   // 取出两个盒子里的数相乘，打印 28
final double PI = 3;   // 常量 PI，之后不能再改
System.out.println(PI);   // 打印 3.0 —— double 会带小数点
\`\`\`

注意 \`println\` 里可以直接放**表达式**：Java 先算 \`width * height\` 得到 28，再打印结果，不需要先把结果存进变量。

## 新手常犯的错误

- **忘了声明类型**：直接写 \`width = 7;\` → 报错「找不到符号」。Java 里每个新变量都要写类型
- **给 int 赋小数**：\`int x = 3.5;\` → 报错「可能有精度损失」。要么改用 \`double\`，要么强转 \`(int) 3.5\`
- **String 和数字直接相加**：\`"5" + 3\` 得到 \`"53"\`（文字拼接）而不是 8。先用 \`Integer.parseInt\` 转成数字再算
- **给 final 常量二次赋值**：→ 报错「无法为最终变量分配值」。常量只能赋值一次

## 小结

- 变量 = 有类型标签的盒子；类型声明后不可变
- 常用类型：\`int\`、\`double\`、\`boolean\`、\`char\`、\`String\`
- \`final\` 常量只能赋值一次；字符串和数字互转要显式调用方法
- 下一课学运算符，让盒子里的数真正「动起来」。`,
        en: `## What you'll learn in this lesson

Teach your program to "remember things": store numbers and text in **variables** and reuse them at any time. After this lesson you can declare variables, do calculations, and convert between text and numbers.

## What is a variable?

A variable is like **a labeled box**: the label is the variable name (say \`age\`), the box holds the data (say \`20\`), and the **shape of the box** is the type. Java is **strongly typed** — once a box is built to the "integer" spec, it can only hold integers; it cannot hold a number today and a sentence tomorrow. The payoff: mistakes are caught **at compile time**, not halfway through a running program.

What does "strongly typed" mean? In some languages one variable may hold a number and later a piece of text; in Java the type is fixed at declaration and never changes. That strictness buys safety, one reason Java powers banks and Android apps.

## How to write it

The fixed pattern is \`type name = initialValue;\`:

\`\`\`java
int age = 20;              // integer, the most common
long big = 100000L;        // a bigger integer, suffix L
double price = 9.99;       // numbers with decimals
boolean isOk = true;       // only true or false
char letter = 'A';         // a single character in single quotes
String name = "Alice";     // a run of text in double quotes
\`\`\`

Rules to remember:

- \`int\` holds roughly ±2.1 billion; use \`long\` beyond that
- Decimal literals are \`double\` by default; a \`float\` needs a trailing \`f\`
- \`char\` uses **single quotes** and exactly one character; \`String\` uses **double quotes** with a capital S (it is a class, not a primitive)
- A constant gets \`final\`, can be assigned once, and is written in UPPER_CASE: \`final int MAX = 100;\`

Types never convert silently — you must convert explicitly:

\`\`\`java
int n = Integer.parseInt("123");   // text "123" → number 123
String s = String.valueOf(456);    // number 456 → text "456"
int x = (int) 3.99;                // a cast chops the decimals → 3
\`\`\`

## Reading the example line by line

Follow this lesson's example:

\`\`\`java
int width = 7;      // make an integer box labeled width holding 7
int height = 4;     // another one holding 4
System.out.println(width * height);   // fetch both values, multiply, print 28
final double PI = 3;   // constant PI, unchangeable afterwards
System.out.println(PI);   // prints 3.0 — a double always shows a decimal point
\`\`\`

Note that \`println\` accepts an **expression** directly: Java first computes \`width * height\` to get 28, then prints the result — no need to store it in a variable first.

## Common beginner mistakes

- **Forgetting the type**: writing \`width = 7;\` alone → error \`cannot find symbol\`. Every new variable in Java needs its type
- **Assigning a decimal to int**: \`int x = 3.5;\` → error \`possible lossy conversion\`. Either switch to \`double\` or cast \`(int) 3.5\`
- **Adding String and number directly**: \`"5" + 3\` yields \`"53"\` (text concatenation), not 8. Convert with \`Integer.parseInt\` first
- **Assigning a final constant twice** → error \`cannot assign a value to final variable\`. A constant is assigned exactly once

## Summary

- A variable is a typed, labeled box; the type never changes after declaration
- Everyday types: \`int\`, \`double\`, \`boolean\`, \`char\`, \`String\`
- \`final\` constants are assigned once; converting between text and numbers requires explicit method calls
- Next lesson: operators, so the numbers in your boxes can actually do things.`,
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
          hints: [
            { zh: '这题练的是「用变量做算术并把结果显示出来」。width 和 height 已经在 starter 里准备好，先想清楚「算式结果」怎样变成屏幕上的一个数字。', en: 'This exercise trains "arithmetic with variables and showing the result". width and height are already prepared in the starter; first think how an expression result turns into a single number on the screen.' },
            { zh: '在心里把面积公式还原成宽乘以高，再想清楚：Java 里把这个乘积交给打印语句有几种写法——可以直接打印整个表达式，也可以先存进变量再打印。', en: 'Mentally restore the area formula as width times height, then think: how many ways can Java hand this product to a print statement — print the expression directly, or store it in a variable first and then print.' },
            { zh: '打印语句可以直接打印算式的值：`System.out.println(width * height);`。乘号是键盘上的 `*` 而不是数学里的 ×，句末不能漏分号。', en: 'A print statement can print the value of an expression directly: `System.out.println(width * height);`. The multiplication sign is `*` on the keyboard, not × from math, and the trailing semicolon is required.' },
            { zh: '补一行 `System.out.println(width * height);` 即可。易错点：width、height 是已声明的 int 变量名，写错就找不到；乘号是星号 `*`，不是字母 x；两边空格可有可无。', en: 'Add one line: `System.out.println(width * height);`. Watch out: width and height are the declared int variable names — a typo means not found; the multiplication sign is the asterisk `*`, not the letter x; spaces around it are optional.' },
            { zh: '完整写法：`System.out.println(width * height);`，放在 starter 里 TODO 的位置，输出 28。', en: 'Full answer: `System.out.println(width * height);`, placed at the TODO in the starter, printing 28.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int width = 7;\n        int height = 4;\n        System.out.println(width * height);\n    }\n}\n',
          solutionNote: { zh: '程序先在 starter 中准备好 width=7、height=4 两个 int 变量，再调用 println 打印它们的乘积 width * height（值为 28）。它正确的关键在于用星号 * 作为乘号（不是字母 x 也不是数学符号 ×），println 内的表达式会被自动求值，分号不能漏。也可以先 int area = width * height; 再 println(area)，效果一样但多一行。', en: 'The program keeps two int variables width = 7 and height = 4 from the starter, then calls println on their product width * height (value 28). It passes because the asterisk * is used as the multiplication sign (not the letter x nor the math symbol ×), the expression inside println is auto-evaluated, and the semicolon is required. You could write int area = width * height; then println(area) — same result, one extra line.' },
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
          hints: [
            { zh: '这题练的是「字符串与整数的相互转换」加上「基本运算」。引号包住的 2026 目前只是文字，文字不能直接加数字，必须先把它「翻译」成真正的整数。', en: 'This exercise trains "converting between String and int" plus "basic arithmetic". The 2026 in quotes is still text; text cannot be added to a number directly — it must be "translated" into a real integer first.' },
            { zh: '三步按顺序做：先把字符串转成整数，再把这个整数加 4，最后把结果交给打印语句。每一步是哪个动作要做到心里有数。', en: 'Do three steps in order: parse the String into an int, add 4 to that int, then hand the result to println. Be clear which step does what.' },
            { zh: '`Integer.parseInt(字符串)` 把字符串转成 int；用 `int n = ...` 接收返回值；再写 `System.out.println(n + 4);`。注意 Integer 首字母大写。', en: '`Integer.parseInt(string)` parses a String into an int; capture the result with `int n = ...`; then write `System.out.println(n + 4);`. Mind the capital I in Integer.' },
            { zh: '写 `int n = Integer.parseInt(s);` 把 s 转成整数；再写 `System.out.println(n + 4);`。易错点：Integer 的 I 要大写；变量名 s 与已定义的 String s 完全一致；n 是 int，所以 n + 4 是算术加而非字符串拼接。', en: 'Write `int n = Integer.parseInt(s);` to convert s to an int; then write `System.out.println(n + 4);`. Watch out: capital I in Integer; the name s must match the existing String s; since n is an int, n + 4 is arithmetic, not string concatenation.' },
            { zh: '完整写法：`int n = Integer.parseInt(s); System.out.println(n + 4);`，输出 2030。也可以一行 `System.out.println(Integer.parseInt(s) + 4);`，效果相同。', en: 'Full answer: `int n = Integer.parseInt(s); System.out.println(n + 4);`, printing 2030. One-liner `System.out.println(Integer.parseInt(s) + 4);` works the same way.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        String s = "2026";\n        int n = Integer.parseInt(s);\n        System.out.println(n + 4);\n    }\n}\n',
          solutionNote: { zh: '程序先用 Integer.parseInt(s) 把字符串 "2026" 转成 int 类型的 2026，再让 n + 4 算出 2030 并交给 println。它正确的关键在于 Integer 首字母大写、parseInt 拼写无误，且 + 操作两边都是 int，所以是算术加而非字符串拼接。也可以一行写 System.out.println(Integer.parseInt(s) + 4); 省掉中间变量，但拆成两步更易读、便于后面复用 n。', en: 'The program first calls Integer.parseInt(s) to turn the string "2026" into the int 2026, then computes n + 4 = 2030 and hands it to println. It passes only because Integer is capital, parseInt is spelled correctly, and both sides of + are ints (so it is arithmetic, not concatenation). You could collapse it into one line System.out.println(Integer.parseInt(s) + 4);, but two lines read more clearly and let you reuse n later.' },
        },
      ],
    },

    // ================= 3. 运算符 =================
    {
      id: 'operators',
      title: { zh: '运算符与表达式', en: 'Operators & Expressions' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

用运算符对数据做加减乘除、比较和逻辑判断。学完你能写出真正的计算逻辑，并且绕开 Java 坑新手第一名的**整数除法**。

## 运算符是什么

运算符就是**数学和逻辑里的符号动作**：\`+\` \`-\` \`*\` \`/\` 是算术动作，\`>\`、\`==\` 是比较动作，\`&&\`、\`||\` 是「并且 / 或者」的逻辑动作。把变量和运算符连起来就构成**表达式**，比如 \`a + b * 2\`，Java 会按优先级把它算成一个值。

有一条规矩必须刻进脑子：**整数除以整数还是整数**。想象把 10 块饼干平均分给 4 个小朋友——每人 2 块、剩 2 块，不会有人拿到「2.5 块」。Java 的 \`/\` 会丢掉小数部分（截断），\`%\`（取余）负责告诉你剩下几块。

## 怎么写

算术运算符：

\`\`\`java
int a = 10, b = 4;
a + b    // 14
a - b    // 6
a * b    // 40
a / b    // 2  ← 整数除法，小数被砍掉
a % b    // 2  ← 余数
\`\`\`

想要小数结果，让**至少一个**操作数变成浮点数：

\`\`\`java
10 / 4          // 2
10.0 / 4        // 2.5
(double) 10 / 4 // 2.5
\`\`\`

自增自减：

- \`i++\`：**先用后加**——先用 i 的旧值，之后 i 才加 1
- \`++i\`：**先加后用**——i 先加 1，再用新值

比较与逻辑：

- \`==\`、\`!=\`、\`<\`、\`>\`、\`<=\`、\`>=\`：结果是 \`boolean\`（true/false）
- \`&&\` 与（两边都真才真）、\`||\` 或（一边真就真）、\`!\` 非
- 优先级记不住就**加括号**，括号永远最稳

## 逐行读懂示例

\`\`\`java
int a = 17, b = 5;      // 一行同时声明两个 int
System.out.println(a / b);   // 17÷5 = 3 余 2，取商 → 3
System.out.println(a % b);   // 取余数 → 2
System.out.println(2 + 3 * 4); // 先乘后加 → 14，不是 20
\`\`\`

第三行体现了优先级：\`*\` 比 \`+\` 先算，和数学一样。想先加就写 \`(2 + 3) * 4\`，得 20。

## 新手常犯的错误

- **以为 10/4 是 2.5**：两个 int 相除结果还是 int → 想要小数写 \`10.0 / 4\` 或 \`(double) a / b\`
- **用 \`=\` 做比较**：\`if (a = 5)\` → 编译报错；\`=\` 是赋值，比较要用 \`==\`
- **混淆 \`i++\` 与 \`++i\`**：单独成行时没区别；放进表达式里，\`i++\` 用旧值、\`++i\` 用新值
- **字符串拼接碰上数字**：\`"a" + 1 + 2\` 得 \`"a12"\`；从左到右一旦遇到字符串，\`+\` 就变成拼接

## 小结

- \`/\` 对两个整数做截断除法，\`%\` 取余
- 有浮点数参与，除法才有小数结果
- \`i++\` 先用后加，\`++i\` 先加后用
- 比较结果是 boolean；优先级拿不准就加括号
- 下一课让程序学会「做选择」——条件分支。`,
        en: `## What you'll learn in this lesson

Use operators to add, subtract, multiply, divide, compare, and combine logic. After this lesson you can write real computational logic — and you will understand the number-one beginner trap in Java: **integer division**.

## What is an operator?

Operators are **symbolic actions** borrowed from math and logic: \`+\` \`-\` \`*\` \`/\` are arithmetic actions, \`>\` and \`==\` are comparisons, \`&&\` and \`||\` mean "and / or". Connecting variables with operators produces an **expression** such as \`a + b * 2\`, which Java evaluates to a single value according to precedence rules.

One rule must be burned into memory: **an integer divided by an integer stays an integer**. Imagine sharing 10 cookies among 4 kids — each gets 2 and 2 are left over; nobody gets "2.5 cookies". Java's \`/\` throws the fraction away (truncation), while \`%\` (remainder) tells you how many cookies are left.

## How to write it

Arithmetic operators:

\`\`\`java
int a = 10, b = 4;
a + b    // 14
a - b    // 6
a * b    // 40
a / b    // 2  ← integer division, fraction chopped off
a % b    // 2  ← remainder
\`\`\`

For a decimal result, make **at least one** operand floating-point:

\`\`\`java
10 / 4          // 2
10.0 / 4        // 2.5
(double) 10 / 4 // 2.5
\`\`\`

Increment and decrement:

- \`i++\`: **use, then add** — the old value of i is used, then i gains 1
- \`++i\`: **add, then use** — i gains 1 first, then the new value is used

Comparison and logic:

- \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` produce a \`boolean\` (true/false)
- \`&&\` and (true only if both sides are true), \`||\` or, \`!\` not
- When precedence is unclear, **add parentheses** — always the safest move

## Reading the example line by line

\`\`\`java
int a = 17, b = 5;      // declare two ints in one line
System.out.println(a / b);   // 17÷5 = 3 remainder 2, quotient → 3
System.out.println(a % b);   // the remainder → 2
System.out.println(2 + 3 * 4); // multiply first → 14, not 20
\`\`\`

The third line shows precedence: \`*\` binds tighter than \`+\`, just like in math. To add first, write \`(2 + 3) * 4\` and get 20.

## Common beginner mistakes

- **Believing 10/4 is 2.5**: two ints divide to an int → write \`10.0 / 4\` or \`(double) a / b\` for decimals
- **Using \`=\` to compare**: \`if (a = 5)\` → compile error; \`=\` assigns, comparison is \`==\`
- **Mixing up \`i++\` and \`++i\`**: identical on a line of their own; inside expressions \`i++\` uses the old value, \`++i\` the new one
- **String concatenation meets numbers**: \`"a" + 1 + 2\` gives \`"a12"\`; once \`+\` meets a String (scanning left to right) it becomes concatenation

## Summary

- \`/\` truncates between two integers; \`%\` gives the remainder
- A decimal result requires a floating-point operand
- \`i++\` uses then adds; \`++i\` adds then uses
- Comparisons produce booleans; add parentheses when in doubt
- Next lesson: teaching programs to make choices — conditionals.`,
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
          hints: [
            { zh: '这题练的是「整数的除法与取余」两种运算。先想清楚：「完整包含多少份 60」与「除完还剩多少」分别对应哪个运算符？', en: 'This exercise trains the two operations "integer division" and "remainder". Think: which operator answers "how many whole 60s fit", and which answers "what is leftover"?' },
            { zh: '先算「完整的分钟数」用整数除法 total / 60；再算「剩余的秒数」用取余 total % 60。两个结果都是整数，按顺序分别输出两行。', en: 'First compute the whole minutes with integer division total / 60; then compute the leftover seconds with remainder total % 60. Both results are integers — print them on two separate lines.' },
            { zh: '除法用 `/`，取余用 `%`，两个都是二元运算符；两个 int 相除结果仍是 int（截断，不保留小数）。两个结果各交给一条 println。', en: 'Division is `/`, remainder is `%`; both are binary operators; dividing two ints still gives an int (truncated, no fraction). Hand each result to its own println call.' },
            { zh: '两行输出：先 `System.out.println(total / 60);`，再 `System.out.println(total % 60);`。易错点：/ 和 % 不能写反、顺序不能反；两行各自以分号结尾；变量名 total 与 starter 完全一致。', en: 'Two lines: first `System.out.println(total / 60);`, then `System.out.println(total % 60);`. Watch out: do not swap / and %, do not swap the order; both lines end with a semicolon; the variable name total must match the starter exactly.' },
            { zh: '完整写法：`System.out.println(total / 60);` 输出 62，`System.out.println(total % 60);` 输出 55。两行顺序不能反。', en: 'Full answer: `System.out.println(total / 60);` prints 62, `System.out.println(total % 60);` prints 55. The two lines must stay in this order.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int total = 3775;\n        System.out.println(total / 60);\n        System.out.println(total % 60);\n    }\n}\n',
          solutionNote: { zh: '程序用两个整数运算符把 3775 拆成 62 和 55：total / 60 用整数除法取商得到 62，total % 60 用取余得到 55。它正确的关键在于 / 和 % 语义不同——前者取商、后者取余，且都是整数运算，结果自动截断小数；两行各占一条 println。也可以先 int minutes = total / 60; int seconds = total % 60; 再分别打印，但直接打印表达式更短、更直观。', en: 'The program uses two integer operators to split 3775 into 62 and 55: total / 60 uses integer division to take the quotient (62), total % 60 uses remainder (55). It passes because / and % mean different things — quotient vs remainder — and both are integer operations that truncate the fraction; each value goes to its own println. You could declare int minutes = total / 60; int seconds = total % 60; and print those, but printing the expressions directly is shorter and more direct.' },
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
          hints: [
            { zh: '这题练的是「自增运算符」——i++ 与 ++i 在什么时机把变量加一、把哪个值交给外层。先想清楚：「加号位置」会决定「先改还是先用」。', en: 'This exercise trains the increment operator — when does i++ vs ++i add one to the variable, and which value flows outward. First think: the position of the plus signs decides "change first or use first".' },
            { zh: 'x++ 的语义是「先把 x 的当前值交给外层，再把 x 加一」；++x 的语义是「先把 x 加一，再把新值交给外层」。打印语句拿到的是「交给它的那个值」。', en: 'x++ means "hand the current value of x outward, then add one"; ++x means "add one to x first, then hand the new value outward". The print statement receives whichever value is handed out.' },
            { zh: 'x++ 写在 println 里就是「先用后加」；++x 写在 println 里就是「先加后用」。两个加号紧挨变量且没有空格。', en: 'x++ inside println means "use then add"; ++x inside println means "add then use". The two plus signs sit next to the variable with no space.' },
            { zh: '依次写 `System.out.println(x++);` 与 `System.out.println(++x);`。易错点：两个加号不能写成 `x + +`；加号位置写反结果就反；第一条执行完 x 已变成 6，再做 ++x 才得到 7。', en: 'Write `System.out.println(x++);` then `System.out.println(++x);`. Watch out: the two plus signs must not become `x + +`; reversing their position flips the result; after the first line runs x becomes 6, then ++x raises it to 7.' },
            { zh: '完整写法：`System.out.println(x++);` 打印 5 并把 x 变成 6；`System.out.println(++x);` 先把 x 加到 7 再打印 7。两条语句顺序不能换。', en: 'Full answer: `System.out.println(x++);` prints 5 and leaves x at 6; `System.out.println(++x);` raises x to 7 first then prints 7. The order of the two statements must not be swapped.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x++);\n        System.out.println(++x);\n    }\n}\n',
          solutionNote: { zh: '程序用 x++ 与 ++x 体现自增运算符的两种语义：第一条 println 拿到 x 的旧值 5 并打印，之后 x 变成 6；第二条 println 先把 x 加到 7 再打印。它正确的关键在于理解「表达式的值」与「副作用」是两件事——x++ 的表达式值是旧值、副作用是 +1，++x 反之；加号位置写反就得不到 5 和 7。也可以拆成 x++; x++; System.out.println(x); 但那样只能输出最终值 7，丢掉两行对比。', en: 'The program uses x++ and ++x to demonstrate the two semantics of the increment operator: the first println receives x old value 5 and prints it, after which x becomes 6; the second println raises x to 7 first and then prints 7. It passes only by understanding that the expression value and the side effect are two different things — x++ has the old value as its expression value and +1 as the side effect, ++x reverses them; reversing the plus positions gives neither 5 nor 7. You could write x++; x++; System.out.println(x); but that only prints the final 7 and loses the two-line contrast.' },
        },
      ],
    },

    // ================= 4. 条件分支 =================
    {
      id: 'conditionals',
      title: { zh: '条件分支', en: 'Conditionals' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

让程序**根据不同情况走不同的路**：成绩 ≥90 打印 A，≥80 打印 B…… 学完你能写出有「判断力」的代码。

## 条件分支是什么

人生每天都在做选择：「如果下雨，就带伞，否则不带。」程序的条件语句就是把这句话翻译成代码：\`if (下雨) { 带伞 } else { 不带 }\`。程序从上往下逐个检查条件，**命中哪个就进哪个分支**，全都没命中就走 \`else\` 兜底。

为什么需要它？前面学的代码都是「一条道走到黑」，每一行必定执行；有了分支，程序才能对不同数据做出不同反应——这是一切智能逻辑的起点。

## 怎么写

\`\`\`java
if (score >= 90) {
    System.out.println("A");      // 分支 1
} else if (score >= 80) {
    System.out.println("B");      // 分支 2
} else {
    System.out.println("F");      // 兜底
}
\`\`\`

规则逐条记：

- 条件必须用**小括号**包住，且结果必须是 \`boolean\`（Java 不认 \`1\`/\`0\` 当真假）
- 分支代码块用**大括号** \`{}\` 包裹；只有一条语句时可省略，但**强烈建议永远写**
- \`else if\` 可以有任意多个，**从上到下**依次检查，命中即停
- \`else\` 最多一个，放在最后，前面全不中才执行

匹配几个固定值时，用 \`switch\` 更清爽：

\`\`\`java
switch (day) {
    case 1: System.out.println("Mon"); break;
    case 2: System.out.println("Tue"); break;
    default: System.out.println("Other");
}
\`\`\`

**每个 case 末尾写 \`break\`**——忘了会「穿透」到下一个 case 继续执行，这是经典 bug 来源。

一行能写完的二选一，可以用三元运算符：\`String r = score >= 60 ? "pass" : "fail";\`

## 逐行读懂示例

本课示例判断奇偶：

\`\`\`java
int n = 7;
if (n % 2 == 0) {          // 7 % 2 = 1，而 1 == 0 是 false
    System.out.println("even");
} else {                   // 于是走 else
    System.out.println("odd");   // 打印 odd
}
\`\`\`

\`n % 2\` 是除以 2 的余数：偶数余 0、奇数余 1。这就是「用取余判断奇偶」的经典套路。

## 新手常犯的错误

- **条件里用 \`=\`**：\`if (n = 5)\` → 报错「int 无法转换为 boolean」。比较必须用 \`==\`
- **忘写大括号**：\`if (x > 0) a(); b();\` 中 \`b()\` 永远执行——它根本不在 if 里。养成永远加大括号的习惯
- **switch 忘 break**：命中 case 后继续「穿透」执行下一个 case 的语句，输出多出一堆
- **分支顺序写反**：把 \`score >= 60\` 放在 \`>= 90\` 前面，95 分也会先命中 60 的分支。**从严格到宽松**排

## 小结

- \`if / else if / else\` 从上往下、命中即停
- 条件必须是 boolean；永远写大括号
- switch 适合固定值匹配，case 记得 break
- 下一课学循环，让计算机替你重复干活。`,
        en: `## What you'll learn in this lesson

Make your program **take different paths in different situations**: print A when the score is 90 or above, B when it is 80 or above... After this lesson your code can make decisions.

## What is a conditional?

Every day we make choices: "If it rains, take an umbrella; otherwise, don't." A conditional statement translates exactly that into code: \`if (raining) { take umbrella } else { don't }\`. The program scans the conditions top to bottom, **enters the first branch that matches**, and falls back to \`else\` when nothing matches.

Why do we need this? Everything so far ran unconditionally, line after line. With branches, a program can react differently to different data — the starting point of all intelligent behavior.

## How to write it

\`\`\`java
if (score >= 90) {
    System.out.println("A");      // branch 1
} else if (score >= 80) {
    System.out.println("B");      // branch 2
} else {
    System.out.println("F");      // fallback
}
\`\`\`

Rules one by one:

- The condition must sit in **parentheses** and evaluate to a \`boolean\` (Java refuses to treat \`1\`/\`0\` as true/false)
- Each branch body is wrapped in **braces** \`{}\`; braces are optional for a single statement but **strongly recommended always**
- There can be any number of \`else if\` clauses, checked **top to bottom**, stopping at the first hit
- \`else\` appears at most once, last, running only when nothing above matched

When matching a few fixed values, \`switch\` is cleaner:

\`\`\`java
switch (day) {
    case 1: System.out.println("Mon"); break;
    case 2: System.out.println("Tue"); break;
    default: System.out.println("Other");
}
\`\`\`

**End every case with \`break\`** — forgetting it causes "fall-through" into the next case, a classic source of bugs.

An either/or that fits on one line can use the ternary operator: \`String r = score >= 60 ? "pass" : "fail";\`

## Reading the example line by line

This lesson's example tests odd/even:

\`\`\`java
int n = 7;
if (n % 2 == 0) {          // 7 % 2 = 1, and 1 == 0 is false
    System.out.println("even");
} else {                   // so the else branch runs
    System.out.println("odd");   // prints odd
}
\`\`\`

\`n % 2\` is the remainder after dividing by 2: even numbers leave 0, odd numbers leave 1. That is the classic "test parity with remainder" pattern.

## Common beginner mistakes

- **Using \`=\` in a condition**: \`if (n = 5)\` → error \`int cannot be converted to boolean\`. Comparison must be \`==\`
- **Omitting braces**: in \`if (x > 0) a(); b();\` the call \`b()\` always runs — it is not inside the if. Always write braces
- **Forgetting break in switch**: execution falls through into the next case and prints far too much
- **Ordering branches wrong**: placing \`score >= 60\` before \`>= 90\` makes 95 hit the 60 branch first. Order **strictest first**

## Summary

- \`if / else if / else\` checks top to bottom and stops at the first hit
- Conditions must be booleans; always write braces
- switch suits fixed-value matching; every case needs break
- Next lesson: loops — letting the computer repeat work for you.`,
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
          hints: [
            { zh: '这题练的是「if / else if / else 条件链」——根据不同分数段走不同分支。先想清楚：5 个等级对应 5 个分支，分支为什么要按某个特定顺序排列？', en: 'This exercise trains the "if / else if / else chain" — different score bands take different branches. First think: five grades mean five branches — why does the order matter?' },
            { zh: '先写最高档 (≥90) 的判断，不满足再看下一档 (≥80)，依次类推，最后用 else 兜底。一旦命中某个分支就不再继续判断后面的条件。', en: 'Start with the highest band (≥90); if it does not match, test the next band (≥80), and so on; finally use else as the fallback. Once a branch matches, the rest are skipped.' },
            { zh: '用 `if (条件) { ... } else if (条件) { ... } else { ... }` 串成一条链；每个分支用 `{ }` 包裹要执行的语句；条件里用 `>=` 比较，字面量与变量名直接写。', en: 'Chain them as `if (cond) { ... } else if (cond) { ... } else { ... }`; wrap each branch body in `{ }`; inside conditions use `>=`; literals and variable names can be written directly.' },
            { zh: '四个 `else if` 条件分别是 score >= 90、80、70、60，分别打印 "A"、"B"、"C"、"D"，最后 else 打印 "F"。易错点：分支顺序必须从严到宽（90 在前、60 在后），否则 95 分会先命中 60 那档；字母必须用英文双引号包住；条件用 >= 而不是 >。', en: 'Four `else if` conditions: score >= 90, 80, 70, 60, printing "A", "B", "C", "D" respectively; the final else prints "F". Watch out: order must be strictest first (90 then 60); otherwise a 95 would hit the 60 branch first; letters must be inside English double quotes; use >= not >.' },
            { zh: '完整写法是 4 个 `else if` + 1 个 `else`，每条分支各打一个字母；命中即停。本例 score = 85，命中 score >= 80，输出 B。', en: 'Full answer: four `else if` plus one `else`, each branch prints one letter; the first match wins. Here score = 85 matches score >= 80 and prints B.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int score = 85;\n        if (score >= 90) {\n            System.out.println("A");\n        } else if (score >= 80) {\n            System.out.println("B");\n        } else if (score >= 70) {\n            System.out.println("C");\n        } else if (score >= 60) {\n            System.out.println("D");\n        } else {\n            System.out.println("F");\n        }\n    }\n}\n',
          solutionNote: { zh: '程序用 if / else if / else 链从高到低逐档判断 score：先查 ≥90 命中就打印 A，否则查 ≥80，依此类推。本例 85 在 80~89 区间，命中 score >= 80 这条 else if 并打印 B。它正确的关键在于分支顺序「从严到宽」——90 在前、60 在后，否则高分会先撞进低档；条件用 >= 而非 >，字母用英文大写、双引号包裹。也可以改写成 switch 配合 /10 算档位，但 if 链对范围判断更直观。', en: 'The program uses an if / else if / else chain to test score from highest band down: try ≥90 first (print A if it matches), then ≥80, and so on. Here 85 sits in the 80–89 range, matches the score >= 80 branch, and prints B. It passes only because the branches are ordered strictest-first (90 then 60), the condition uses >= not >, and the letters are uppercase inside English double quotes. You could rewrite it as a switch on score / 10, but an if chain is more direct for range tests.' },
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
          hints: [
            { zh: '这题练的是「switch 多分支匹配」——用一个值对多种固定情况挑选一段代码。先想清楚：什么时候 switch 比 if 链更合适？', en: 'This exercise trains "switch multi-way matching" — picking a piece of code based on one value among several fixed cases. First think: when is switch clearer than an if chain?' },
            { zh: 'switch 后接变量 day，每个 case 标签写一个取值与对应语句，default 处理没列出的情况；每个 case 末尾必须 break 跳出，否则会"穿透"到下一个分支继续执行。', en: 'After switch put the variable day; each case label carries a value and its statement; default handles everything not listed; every case must end with a break, otherwise execution falls through into the next case.' },
            { zh: '语法形态：`switch (day) { case 数字: ...; break; ...; default: ...; }`；case 标签后是冒号，break 后是分号，整条 switch 用 `{ }` 包住。', en: 'Shape: `switch (day) { case num: ...; break; ...; default: ...; }`; the case label is followed by a colon, break by a semicolon, the whole switch is wrapped in `{ }`.' },
            { zh: '四个 case 分别处理 1、2、3、4，打印 "Mon"、"Tue"、"Wed"、"Thu"，每个 case 末尾加 break；default 打印 "Other"。易错点：忘 break 会让相邻 case 的语句也被执行；default 必须有以处理未列出的值；标签后是冒号而不是分号。', en: 'Four cases handle 1, 2, 3, 4 printing "Mon", "Tue", "Wed", "Thu", each with a break; default prints "Other". Watch out: missing break lets execution fall into the next case; default is required for unlisted values; the case label is followed by a colon, not a semicolon.' },
            { zh: '完整写法：`switch (day) { case 1: System.out.println("Mon"); break; case 2: System.out.println("Tue"); break; case 3: System.out.println("Wed"); break; case 4: System.out.println("Thu"); break; default: System.out.println("Other"); }`。本例 day=4，输出 Thu。', en: 'Full answer: `switch (day) { case 1: System.out.println("Mon"); break; case 2: System.out.println("Tue"); break; case 3: System.out.println("Wed"); break; case 4: System.out.println("Thu"); break; default: System.out.println("Other"); }`. Here day = 4, so the output is Thu.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int day = 4;\n        switch (day) {\n            case 1: System.out.println("Mon"); break;\n            case 2: System.out.println("Tue"); break;\n            case 3: System.out.println("Wed"); break;\n            case 4: System.out.println("Thu"); break;\n            default: System.out.println("Other");\n        }\n    }\n}\n',
          solutionNote: { zh: '程序用 switch 把 day 这个整数值匹配到对应的星期缩写：从上到下逐个 case 比较，命中就打印对应缩写并 break，跳过 default；全部没命中才落到 default 打印 Other。本例 day=4 命中 case 4，打印 Thu。它正确的关键在于每个 case 都以 break 结尾防止"穿透"、default 不可省以兜底 day 不在 1~4 的情况、case 标签后用冒号。也可以改写成 if/else if 链逐个比较 day，但 switch 表达"固定值对结果"更清爽。', en: 'The program uses switch to map the int day to its weekday abbreviation: cases are tested top to bottom, the matching case prints its abbreviation and breaks; default fires only when none match. Here day = 4 matches case 4 and prints Thu. It passes only because every case ends with break (no fall-through), default is present as a safety net for values outside 1–4, and case labels are followed by colons. You could rewrite it as an if/else if chain comparing day one by one, but switch is cleaner for fixed-value dispatch.' },
        },
      ],
    },

    // ================= 5. 循环 =================
    {
      id: 'loops',
      title: { zh: '循环', en: 'Loops' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

让程序**重复干活**：几行代码让计算机打印 1 到 100、算出 1 加到 100。学完你能用 for、while 写重复任务，并用 break/continue 精细控制。

## 循环是什么

想象抄写「我能行」一百遍——手写要崩溃。但你只需给计算机一条指令：「**从 1 数到 100，每数一个数打印一次**」。这就是循环：**初始化计数器 → 检查条件 → 执行循环体 → 更新计数器 → 再检查**，直到条件不成立才停下。

机械重复正是计算机最擅长的：上亿次循环也是一瞬间。人写循环的意义在于**写一次，重复交给机器**。

## 怎么写

for 循环，头部三段用分号隔开：

\`\`\`java
for (int i = 1; i <= 100; i++) {
    System.out.println(i);
}
//    ①初始   ②条件    ③更新
\`\`\`

执行顺序是 ① → ② → 循环体 → ③ → ② → ……，条件为 false 时退出。

while 循环，先判断再执行，可能一次都不跑：

\`\`\`java
int n = 1;
while (n <= 3) {
    System.out.println(n);
    n++;   // 忘了这句就是死循环！
}
\`\`\`

do-while，先执行一次再判断，**至少跑一次**：

\`\`\`java
int n = 5;
do {
    System.out.println(n);
    n--;
} while (n > 0);   // 注意行末有分号
\`\`\`

两个控制关键字：

- \`break\`：立刻跳出**整个**循环
- \`continue\`：跳过本轮剩余语句，直接进入下一轮

遍历数组还有增强 for：\`for (int x : nums) { ... }\`，x 依次取每个元素。

## 逐行读懂示例

本课示例算 1 加到 100：

\`\`\`java
int sum = 0;                     // 造一个「累加器」，从 0 开始
for (int i = 1; i <= 100; i++) { // i 依次是 1,2,3,…,100
    sum += i;                    // 等价于 sum = sum + i
}
System.out.println(sum);         // 5050
\`\`\`

循环跑 100 圈，每圈往 \`sum\` 里加一个数；循环结束后 sum 就是总和。**累加器模式**是循环最经典的用法。

## 新手常犯的错误

- **while 忘了更新条件变量**：循环体里没有 \`n++\` → 条件永远为真，**死循环**，沙箱会超时
- **for 的边界差一圈**：\`i <= 100\` 与 \`i < 100\` 差一次。要 1~100 就用 \`<=\`
- **循环体里又改循环变量**：圈数容易数错；新手先保持「头部管计数、体内干活」的分工
- **do-while 忘了行末分号**：\`} while (n > 0)\` 后缺 \`;\` → 编译报错

## 小结

- for 适合**已知次数**；while 适合「满足条件就继续」；do-while 至少执行一次
- \`break\` 跳出整个循环，\`continue\` 跳过本轮
- 累加器模式：循环外定义 \`sum = 0\`，循环内 \`sum += i\`
- 下一课把重复逻辑打包成「方法」，随叫随到。`,
        en: `## What you'll learn in this lesson

Make your program **repeat work**: a few lines of code printing 1 to 100, or summing 1 through 100. After this lesson you can write repetitive tasks with for and while, and control them precisely with break/continue.

## What is a loop?

Imagine copying "I can do it" a hundred times by hand — exhausting. Instead you give the computer one instruction: "**count from 1 to 100, and print once per count**." That is a loop: **initialize a counter → check the condition → run the body → update the counter → check again**, until the condition fails.

Mechanical repetition is exactly what computers do best — hundreds of millions of iterations pass in a blink. The point of writing loops: **write it once, let the machine do the repetition**.

## How to write it

The for loop, with three header parts separated by semicolons:

\`\`\`java
for (int i = 1; i <= 100; i++) {
    System.out.println(i);
}
//    ①init   ②condition ③update
\`\`\`

The order is ① → ② → body → ③ → ② → …; the loop exits when the condition is false.

The while loop tests first and may never run at all:

\`\`\`java
int n = 1;
while (n <= 3) {
    System.out.println(n);
    n++;   // forgetting this line = infinite loop!
}
\`\`\`

do-while runs once before testing, so the body executes **at least once**:

\`\`\`java
int n = 5;
do {
    System.out.println(n);
    n--;
} while (n > 0);   // note the trailing semicolon
\`\`\`

Two control keywords:

- \`break\`: leave the **entire** loop immediately
- \`continue\`: skip the rest of this iteration and jump straight to the next one

To walk an array there is the enhanced for: \`for (int x : nums) { ... }\`, where x takes each element in turn.

## Reading the example line by line

This lesson's example sums 1 through 100:

\`\`\`java
int sum = 0;                     // an accumulator, starting at 0
for (int i = 1; i <= 100; i++) { // i takes 1,2,3,…,100
    sum += i;                    // same as sum = sum + i
}
System.out.println(sum);         // 5050
\`\`\`

The loop runs 100 laps, adding one number to \`sum\` each lap; when it ends, sum holds the total. The **accumulator pattern** is the most classic use of loops.

## Common beginner mistakes

- **Forgetting to update the condition variable in while**: no \`n++\` in the body → the condition stays true forever, an **infinite loop** that makes the sandbox time out
- **Off-by-one bounds in the for condition**: \`i <= 100\` versus \`i < 100\` differ by one lap. For 1..100 use \`<=\`
- **Also modifying the loop variable inside the body**: easy to miscount laps; beginners should let the header own the counting and the body do the work
- **Missing the semicolon after do-while**: \`} while (n > 0)\` without \`;\` → compile error

## Summary

- for suits a **known count**; while suits "keep going while a condition holds"; do-while runs at least once
- \`break\` exits the whole loop; \`continue\` skips one iteration
- Accumulator pattern: declare \`sum = 0\` outside, \`sum += i\` inside
- Next lesson: packaging reusable logic into methods you can call anytime.`,
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
          hints: [
            { zh: '这题练的是「累加器模式」——用一个变量持续收集每一步的结果。先想清楚：累加器该从什么值开始？循环结束后下一步做什么？', en: 'This exercise trains the "accumulator pattern" — keeping one variable that collects each lap result. First think: what should the accumulator start at? What happens after the loop ends?' },
            { zh: '先在循环外准备一个累加变量 sum 初始化为 0；用 for 循环让计数变量从 1 走到 100，每圈把 i 加到 sum 里；循环结束后把 sum 打印出来。', en: 'Outside the loop prepare an accumulator sum initialized to 0; use a for loop to walk a counter from 1 to 100, adding i into sum each lap; after the loop, print sum.' },
            { zh: '用 `int sum = 0;` 准备累加器；`for (int i = 1; i <= 100; i++)` 是标准计数写法；`sum += i` 是「把 i 加进 sum」的简写。', en: '`int sum = 0;` prepares the accumulator; `for (int i = 1; i <= 100; i++)` is the standard counting shape; `sum += i` is shorthand for "add i into sum".' },
            { zh: '写 `int sum = 0; for (int i = 1; i <= 100; i++) { sum += i; } System.out.println(sum);`。易错点：循环条件用 `<=` 而非 `<`，否则只跑到 99；sum 必须先初始化为 0；题目禁止用公式 n(n+1)/2，必须真的循环累加。', en: 'Write `int sum = 0; for (int i = 1; i <= 100; i++) { sum += i; } System.out.println(sum);`. Watch out: the loop condition is `<=` not `<`, otherwise it stops at 99; sum must be initialized to 0 first; the problem forbids the closed-form n(n+1)/2 formula — you must really loop and accumulate.' },
            { zh: '完整写法：`int sum = 0; for (int i = 1; i <= 100; i++) { sum += i; } System.out.println(sum);`，输出 5050。', en: 'Full answer: `int sum = 0; for (int i = 1; i <= 100; i++) { sum += i; } System.out.println(sum);`, printing 5050.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 100; i++) {\n            sum += i;\n        }\n        System.out.println(sum);\n    }\n}\n',
          solutionNote: { zh: '程序用 for 循环 1~100 把每个 i 加到 sum 上：循环头规定起点 1、终点 100（用 <= 而非 <），循环体内 sum += i 累加；循环结束后 println 输出 5050。它正确的关键在于循环条件是 <= 而不是 <，累加器 sum 必须先初始化为 0，且题目禁止用 n(n+1)/2 公式——必须真累加。也可以用 while 循环 + 手动更新 i，但 for 把「初始化、条件、更新」三件事写在头部更清晰。', en: 'The program uses a for loop from 1 to 100 to add every i into sum: the header fixes start at 1 and end at 100 (using <=, not <), and the body accumulates with sum += i; after the loop println prints 5050. It passes because the condition is <= not <, sum must be initialized to 0 first, and the problem explicitly forbids the n(n+1)/2 formula — you really have to loop. You could rewrite it with a while loop and manual i updates, but for keeps initialization, condition and update in one header.' },
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
          hints: [
            { zh: '这题练的是「continue 跳过本轮」与「用取余判断奇偶」两种技巧。先想清楚：循环本来会跑 10 圈，怎样让其中某些圈"什么都不做、立刻进入下一圈"？', en: 'This exercise trains two tricks: "continue to skip this lap" and "test parity with remainder". First think: the loop will run 10 laps — how do you make some laps do nothing and jump straight to the next?' },
            { zh: '让循环从 1 走到 10；每圈先判断当前数是不是偶数（i % 2 == 0），是偶数就用 continue 立刻结束本圈；否则打印这个数。', en: 'Walk the loop from 1 to 10; each lap first checks whether the current number is even (i % 2 == 0); if even, use continue to end this lap immediately; otherwise print the number.' },
            { zh: '`for (int i = 1; i <= 10; i++)` 跑 10 圈；判断偶数用 `i % 2 == 0`；跳过本圈用 `continue;`，单独成句也要加分号。', en: '`for (int i = 1; i <= 10; i++)` runs 10 laps; test evenness with `i % 2 == 0`; skip a lap with `continue;`, which as a standalone statement still needs a semicolon.' },
            { zh: '在循环体里先写 `if (i % 2 == 0) continue;`，再写 `System.out.println(i);`。易错点：continue 后面不能漏分号；% 是取余而不是除法；== 两个等号才是相等比较；continue 必须放在 println 之前，否则奇数也会被跳过。', en: 'Inside the loop write `if (i % 2 == 0) continue;` first, then `System.out.println(i);`. Watch out: continue needs a trailing semicolon; % is remainder, not division; == is the equality check; continue must come before println or odd numbers would also be skipped.' },
            { zh: '完整写法：`for (int i = 1; i <= 10; i++) { if (i % 2 == 0) continue; System.out.println(i); }`，输出 1、3、5、7、9，每行一个。', en: 'Full answer: `for (int i = 1; i <= 10; i++) { if (i % 2 == 0) continue; System.out.println(i); }`, printing 1, 3, 5, 7, 9 one per line.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            if (i % 2 == 0) continue;\n            System.out.println(i);\n        }\n    }\n}\n',
          solutionNote: { zh: '程序用 for 循环跑 1~10，每圈先判断 i 是不是偶数，是偶数就用 continue 立刻结束本圈——continue 后面的 println 被跳过；否则 println 打印当前的奇数。它正确的关键在于 continue 必须写在 println 之前才能起到"跳过偶数"的效果，% 是取余、== 是相等，continue 单独成句也要加分号。也可以把判断反过来写 if (i % 2 != 0) System.out.println(i);，但用 continue 跳过偶数更贴合"被跳过的元素"这一题面。', en: 'The program runs a for loop from 1 to 10; each lap first checks whether i is even, and if so continue ends the lap immediately so the println below is skipped; otherwise println prints the odd number. It passes only because continue sits before println, % is remainder (not division), == is equality, and continue as a standalone statement still ends with a semicolon. You could flip the check to if (i % 2 != 0) System.out.println(i);, but using continue to skip the evens matches the "skipped elements" framing in the prompt.' },
        },
      ],
    },

    // ================= 6. 方法 =================
    {
      id: 'methods',
      title: { zh: '方法', en: 'Methods' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

把一段逻辑**打包成方法**：起个名字，之后随叫随到。学完你能写出自己的 \`sum(a, b)\` 这类工具，并理解**重载**。

## 方法是什么

方法就像**厨房里的菜谱、机器上的按钮**：把「怎么做事」的步骤封装起来，取个名字（如 \`sum\`）。以后想用，只需「按一下」——\`sum(3, 4)\`——不必每次重写步骤。

好处很明显：写一次处处复用；逻辑改一处、所有调用处自动更新；main 也不会被塞成几百行的「面条代码」。其实你早就在用方法了——\`System.out.println(...)\` 就是别人写好、打包给你用的方法。

## 怎么写

\`\`\`java
public static int add(int a, int b) {
    return a + b;
}
\`\`\`

从左往右逐段拆开：

- \`public\`：公开，谁都能调用
- \`static\`：属于类本身。main 是 static 的，它直接调用的方法也得是 static（现阶段先记住这条）
- \`int\`：**返回类型**——这个方法干完活会交回一个 int
- \`add\`：方法名，自己起，习惯小写字母开头
- \`(int a, int b)\`：**参数列表**，每个参数都要写类型；a、b 是「占位符」，调用时才填进真值
- \`return 值;\`：把结果交回调用处，**同时立刻结束方法**；不返回任何东西就写 \`void\`

调用方式：

\`\`\`java
int r = add(3, 4);   // 3 传给 a，4 传给 b，r 接住返回值 7
\`\`\`

**重载（overload）**：同名方法靠**参数列表**区分（个数或类型不同）：

\`\`\`java
static int add(int a, int b) { ... }
static double add(double a, double b) { ... }
\`\`\`

Java 按你传入的实参自动挑对应版本。只有返回类型不同**不**构成重载。

## 逐行读懂示例

本课示例：

\`\`\`java
static int sum(int a, int b) { return a + b; }         // 打包「两数求和」
static int max(int a, int b) { return a > b ? a : b; } // 打包「取较大值」

System.out.println(sum(3, 4));   // 调 sum：3+4=7，打印 7
System.out.println(max(3, 9));   // 调 max：3>9 为假，取 9，打印 9
\`\`\`

两个方法都写在 \`class Main\` **里面**、\`main\` 方法**外面**，与 main 平级。\`max\` 里用了三元运算符：条件真取 \`a\`，假取 \`b\`。

## 新手常犯的错误

- **方法写到 main 里面**：方法里不能再套方法 → 编译报错。方法必须与 main 平级，都在类的大括号里
- **忘写 return**：返回类型是 \`int\` 却没有 return → 报错「缺少返回语句」
- **static 调 non-static**：从 main 里调用没加 \`static\` 的方法 → 报错「无法从静态上下文中引用」。现阶段方法都加上 \`static\`
- **定义参数不写类型**：\`add(a, b)\` 当定义用 → 报错；定义时每个参数前必须有类型

## 小结

- 方法 = 打包好的一段逻辑，用 \`方法名(实参)\` 调用
- 定义五要素：修饰符、返回类型、方法名、参数列表、方法体
- \`return\` 交回结果并结束方法；重载靠参数列表区分
- 下一课学「一排盒子」——数组。`,
        en: `## What you'll learn in this lesson

Package a piece of logic into a **method**: give it a name and call it whenever needed. After this lesson you can write tools like your own \`sum(a, b)\` and understand **overloading**.

## What is a method?

A method is like **a recipe in the kitchen or a button on a machine**: the "how to do it" steps get wrapped up and given a name (say \`sum\`). To use it you just "press the button" — \`sum(3, 4)\` — instead of rewriting the steps every time.

The benefits are obvious: write once, reuse everywhere; fix the logic in one place and every caller benefits; your main method never becomes a several-hundred-line plate of spaghetti. You have been using methods all along — \`System.out.println(...)\` is a method someone else wrote and packaged for you.

## How to write it

\`\`\`java
public static int add(int a, int b) {
    return a + b;
}
\`\`\`

Decode it left to right:

- \`public\`: public — anyone may call it
- \`static\`: belongs to the class itself; since \`main\` is static, the methods it calls directly must also be static (just remember this rule for now)
- \`int\`: the **return type** — the method hands back an int when done
- \`add\`: the method name, your choice, lowercase by convention
- \`(int a, int b)\`: the **parameter list**; every parameter needs a type, and a, b are placeholders filled in at call time
- \`return value;\`: hands the result back to the caller **and ends the method immediately**; write \`void\` when nothing is returned

Calling it:

\`\`\`java
int r = add(3, 4);   // 3 goes to a, 4 goes to b, r receives 7
\`\`\`

**Overloading**: same-name methods are distinguished by their **parameter lists** (count or types):

\`\`\`java
static int add(int a, int b) { ... }
static double add(double a, double b) { ... }
\`\`\`

Java picks the matching version from the arguments you pass. A different return type alone does **not** count as overloading.

## Reading the example line by line

This lesson's example:

\`\`\`java
static int sum(int a, int b) { return a + b; }         // packaged "add two numbers"
static int max(int a, int b) { return a > b ? a : b; } // packaged "pick the larger"

System.out.println(sum(3, 4));   // calls sum: 3+4=7, prints 7
System.out.println(max(3, 9));   // calls max: 3>9 is false, yields 9, prints 9
\`\`\`

Both methods are written **inside** \`class Main\` but **outside** \`main\`, at the same level as main. \`max\` uses the ternary operator: if the condition holds take \`a\`, otherwise take \`b\`.

## Common beginner mistakes

- **Nesting a method inside main**: methods cannot contain methods → compile error. Methods sit at the same level as main, inside the class braces
- **Missing return**: a method declared \`int\` with no return → error \`missing return statement\`
- **Calling non-static from static**: calling a method without \`static\` from main → error \`non-static method cannot be referenced from a static context\`. Add \`static\` for now
- **Defining parameters without types**: using \`add(a, b)\` as a definition → error; every parameter in a definition needs its type

## Summary

- A method is packaged logic, called as \`name(arguments)\`
- Five ingredients: modifiers, return type, name, parameter list, body
- \`return\` delivers the result and exits; overloads differ by parameter list
- Next lesson: a whole row of boxes — arrays.`,
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
          hints: [
            { zh: '这题练的是「自己定义一个静态方法并在 main 里调用」。先想清楚：一个方法定义里要写全哪五样——修饰符、返回类型、名字、参数列表、方法体？', en: 'This exercise trains "defining your own static method and calling it from main". First think: what five things must a method definition spell out — modifiers, return type, name, parameter list, body?' },
            { zh: '按题目给的签名写方法，方法体里 return 两数之和；在 main 里用 sum(7, 8) 调用它，把返回值交给 println。方法写在 main 之外、类的大括号之内。', en: 'Write the method with the signature given in the prompt; the body returns the sum of the two parameters; in main call sum(7, 8) and hand the return value to println. The method lives outside main, inside the class braces.' },
            { zh: '方法签名形如 `public static int sum(int a, int b)`，方法体用 `return a + b;` 把结果送回调用处；调用时写 `sum(7, 8)`，把返回值放进 println。', en: 'The signature shape is `public static int sum(int a, int b)`, the body uses `return a + b;` to hand the result back; the call site writes `sum(7, 8)` and the return value is fed into println.' },
            { zh: '在 Main 类里（main 之外）写 `public static int sum(int a, int b) { return a + b; }`；main 里写 `System.out.println(sum(7, 8));`。易错点：方法名 sum 全小写；return 后面必须跟一个表达式；return 与 println 各以分号结尾；不要把方法写在 main 的花括号里（Java 不允许方法嵌套）。', en: 'Inside class Main (outside main) write `public static int sum(int a, int b) { return a + b; }`; in main write `System.out.println(sum(7, 8));`. Watch out: the method name sum is all lowercase; return must be followed by an expression; both return and println end with semicolons; do not nest the method inside main braces — Java forbids nested methods.' },
            { zh: '完整写法：类里写方法 `public static int sum(int a, int b) { return a + b; }`，main 里写 `System.out.println(sum(7, 8));`，输出 15。', en: 'Full answer: in the class write `public static int sum(int a, int b) { return a + b; }`, and in main write `System.out.println(sum(7, 8));`, printing 15.' },
          ],
          solution: 'public class Main {\n    public static int sum(int a, int b) {\n        return a + b;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(sum(7, 8));\n    }\n}\n',
          solutionNote: { zh: '程序自定义一个静态方法 sum 接收两个 int 参数并返回它们的和；main 调用 sum(7, 8) 拿到返回值 15 并交给 println。它正确的关键在于方法签名逐字符照抄（public static int、参数类型 int 不能省）、return 必须把结果送回、方法写在 main 之外属于类的成员。也可以改用三元、加减分拆或 lambda，但标准的方法定义最直接；以后想扩展成 max、min 只需把 return 那一行的公式换掉。', en: 'The program defines its own static method sum that takes two ints and returns their sum; main calls sum(7, 8), receives 15, and hands it to println. It passes because the signature is copied character for character (public static int, and the int parameter types cannot be dropped), return must hand back a value, and the method lives outside main as a class member. You could rewrite the body with a ternary, manual add-and-return, or a lambda, but the plain method definition is the most direct form; later you can extend it to max or min just by swapping the formula on the return line.' },
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
          hints: [
            { zh: '这题练的是「方法重载」——同名方法靠参数列表区分，编译器按传入参数个数挑版本。先想清楚：两个同名版本各自收几个参数？返回值要不要写 void？', en: 'This exercise trains "method overloading" — same name, distinguished by parameter list, with the compiler picking the version by argument count. First think: how many parameters does each version take? Does the return type become void?' },
            { zh: '两个版本都叫 printMax，一个收两个 int、一个收三个 int；各自挑出最大值并直接打印（用 void + println，不需要 return）。main 里按顺序调用两个版本。', en: 'Both versions are named printMax — one takes two ints, the other takes three; each picks the maximum and prints it directly (use void + println, no return needed). main calls both versions in order.' },
            { zh: '两参数版可直接三元 `a > b ? a : b` 求最大并打印；三参数版用一个临时变量从 a 出发、与 b、c 依次比较更新。两个方法都标 `public static void`，因为不需要 return。', en: 'The two-arg version can use the ternary `a > b ? a : b` to pick the larger and print it; the three-arg version keeps a variable starting from a and updates it whenever b or c is larger. Both methods are marked `public static void` because there is no return value.' },
            { zh: '两个方法签名分别是 `public static void printMax(int a, int b)` 与 `public static void printMax(int a, int b, int c)`。易错点：返回类型写 void 而非 int；参数列表必须严格不同（一个两个 int、一个三个 int）；仅返回类型不同不构成重载；main 里调用顺序必须与题目一致。', en: 'Signatures: `public static void printMax(int a, int b)` and `public static void printMax(int a, int b, int c)`. Watch out: return type is void, not int; the parameter lists must differ strictly (two ints vs three ints); differing only in return type does NOT count as overloading; main must call them in the order the problem asks.' },
            { zh: '完整写法：两参数版直接 `System.out.println(a > b ? a : b);`；三参数版 `int m = a; if (b > m) m = b; if (c > m) m = c; System.out.println(m);`。main 里依次 `printMax(3, 9); printMax(3, 9, 5);`，两行输出 9。', en: 'Full answer: two-arg version prints `System.out.println(a > b ? a : b);` directly; three-arg version uses `int m = a; if (b > m) m = b; if (c > m) m = c; System.out.println(m);`. In main call `printMax(3, 9); printMax(3, 9, 5);` in order, printing 9 twice.' },
          ],
          solution: 'public class Main {\n    public static void printMax(int a, int b) {\n        System.out.println(a > b ? a : b);\n    }\n\n    public static void printMax(int a, int b, int c) {\n        int m = a;\n        if (b > m) m = b;\n        if (c > m) m = c;\n        System.out.println(m);\n    }\n\n    public static void main(String[] args) {\n        printMax(3, 9);\n        printMax(3, 9, 5);\n    }\n}\n',
          solutionNote: { zh: '程序定义两个同名静态方法 printMax，一个收两个 int、一个收三个 int；编译器按传入参数个数自动挑对应版本——printMax(3, 9) 走两参数版（三元表达式 a > b ? a : b 直接得 9），printMax(3, 9, 5) 走三参数版（m 从 a 开始、依次与 b、c 比大小更新到 9）。它正确的关键在于两个版本的参数列表必须严格不同、返回类型都写 void、main 调用顺序与题目一致。也可以把三参数版改成 Math.max(a, Math.max(b, c)) 一次性求最大，但拆成两条 if 逐次比较更直观、更易讲清"依次更新"。', en: 'The program defines two same-named static methods printMax, one with two ints and one with three; the compiler picks the matching version by argument count — printMax(3, 9) takes the two-arg form (ternary a > b ? a : b directly yields 9), printMax(3, 9, 5) takes the three-arg form (m starts at a, then updates against b and c to reach 9). It passes because the parameter lists differ strictly, both return types are void, and main calls them in the order requested. You could collapse the three-arg version to Math.max(a, Math.max(b, c)), but the two if steps make the "compare and update" idea explicit.' },
        },
      ],
    },

    // ================= 7. 数组 =================
    {
      id: 'arrays',
      title: { zh: '数组', en: 'Arrays' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

用**数组**一次管一排数据：存 100 个成绩、找最大值、排序。学完你能遍历、统计、排序一个数组。

## 数组是什么

变量是一个盒子，数组是**一排连号的盒子**：\`int[] scores\` 就是一排只能装 int 的格子，每个格子有个**编号（下标）**，从 **0** 开始数——像酒店房间号 0、1、2、3……数组还有个固定不变的「房间总数」：\`length\`。

两个天生特点要记住：**长度创建后不可变**；**下标从 0 开始**，最后一个下标是 \`length - 1\`。100 个元素的数组，合法下标是 0~99，碰 100 就是越界。

## 怎么写

创建数组的两种方式：

\`\`\`java
int[] nums = new int[5];          // 造 5 个格子，默认全是 0
int[] primes = {2, 3, 5, 7, 11};  // 边造边装
\`\`\`

用下标读写元素：

\`\`\`java
primes[0]        // 第一个格子 → 2
primes[4]        // 最后一个 → 11
primes[2] = 9;   // 把 9 放进 2 号格
int n = primes.length;   // 5，注意没有括号——是属性不是方法
\`\`\`

遍历数组两种写法：

\`\`\`java
for (int i = 0; i < primes.length; i++) { ... }  // 需要下标时
for (int p : primes) { ... }                     // 只要值时，最简洁
\`\`\`

工具类 \`java.util.Arrays\` 提供现成功能（用前要 import）：

- \`Arrays.sort(a)\`：原地升序排序
- \`Arrays.toString(a)\`：打成 \`[1, 2, 3]\` 这种可读文本——**直接 println 数组只会打出类似地址的乱码**，必须先 toString

## 逐行读懂示例

本课示例：

\`\`\`java
import java.util.Arrays;      // 借用工具箱，先 import

int[] a = {3, 1, 4, 1, 5};    // 造数组并装 5 个数
Arrays.sort(a);               // 原地排序：a 变成 {1,1,3,4,5}
System.out.println(Arrays.toString(a));  // 打印 [1, 1, 3, 4, 5]
\`\`\`

注意 \`sort\` 是**原地**修改：它不返回新数组，而是把 \`a\` 本身改掉了。所以下一行直接对 \`a\` 做 toString。

## 新手常犯的错误

- **下标越界**：\`a[a.length]\` → 运行时抛 \`ArrayIndexOutOfBoundsException\`。合法范围是 0 ~ length-1
- **直接 println 数组**：\`System.out.println(a)\` → 打出 \`[I@...\` 之类的东西。改用 \`Arrays.toString(a)\`
- **把 length 当方法**：\`a.length()\` → 报错；数组用 \`a.length\`（无括号），String 才是 \`s.length()\`
- **忘 import**：用 \`Arrays.sort\` 却没写 \`import java.util.Arrays;\` → 报错「找不到符号 Arrays」

## 小结

- 数组 = 定长、同类型、下标从 0 开始的一排格子
- 遍历首选增强 for；统计、找最值是循环的经典搭档
- \`Arrays.sort\` 排序、\`Arrays.toString\` 打印
- 下一课处理文字的核心工具——字符串。`,
        en: `## What you'll learn in this lesson

Manage a whole row of data at once with **arrays**: store 100 scores, find the maximum, sort. After this lesson you can traverse, aggregate, and sort an array.

## What is an array?

A variable is one box; an array is **a row of numbered boxes**: \`int[] scores\` is a row of int-only slots, each with an **index** counted **from 0** — like hotel rooms numbered 0, 1, 2, 3… The array also has a fixed "total room count": \`length\`.

Two built-in traits to remember: the **length never changes after creation**, and **indices start at 0**, so the last index is \`length - 1\`. For a 100-element array the legal indices are 0..99; touching 100 is out of bounds.

## How to write it

Two ways to create an array:

\`\`\`java
int[] nums = new int[5];          // 5 slots, all default to 0
int[] primes = {2, 3, 5, 7, 11};  // create and fill at once
\`\`\`

Read and write elements by index:

\`\`\`java
primes[0]        // the first slot → 2
primes[4]        // the last → 11
primes[2] = 9;   // put 9 into slot 2
int n = primes.length;   // 5 — no parentheses: it is a field, not a method
\`\`\`

Two ways to traverse:

\`\`\`java
for (int i = 0; i < primes.length; i++) { ... }  // when you need the index
for (int p : primes) { ... }                     // values only, cleanest
\`\`\`

The \`java.util.Arrays\` utility class offers ready-made tools (import first):

- \`Arrays.sort(a)\`: ascending sort, in place
- \`Arrays.toString(a)\`: formats to readable text like \`[1, 2, 3]\` — **printing an array directly yields gibberish-like addresses**, so always toString first

## Reading the example line by line

This lesson's example:

\`\`\`java
import java.util.Arrays;      // borrow the toolbox: import first

int[] a = {3, 1, 4, 1, 5};    // create and fill 5 numbers
Arrays.sort(a);               // in-place sort: a becomes {1,1,3,4,5}
System.out.println(Arrays.toString(a));  // prints [1, 1, 3, 4, 5]
\`\`\`

Note that \`sort\` modifies **in place**: it does not return a new array, it changes \`a\` itself. So the next line simply formats \`a\`.

## Common beginner mistakes

- **Out-of-bounds index**: \`a[a.length]\` → throws \`ArrayIndexOutOfBoundsException\` at runtime. Legal range: 0 to length-1
- **Printing an array directly**: \`System.out.println(a)\` → prints something like \`[I@...\`. Use \`Arrays.toString(a)\`
- **Treating length as a method**: \`a.length()\` → error; arrays use \`a.length\` (no parentheses), only String has \`s.length()\`
- **Missing import**: using \`Arrays.sort\` without \`import java.util.Arrays;\` → error \`cannot find symbol: Arrays\`

## Summary

- An array = fixed-length, same-type, zero-indexed slots
- Prefer the enhanced for for traversal; aggregation and min/max are loop classics
- \`Arrays.sort\` to sort, \`Arrays.toString\` to print
- Next lesson: the core tool for text — strings.`,
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
          hints: [
            { zh: '这题练的是「遍历数组并同时维护多个统计量」。先想清楚：循环一趟需要同时维护几样东西（累加、最大、最小），它们各自的初始值是什么？', en: 'This exercise trains "walk an array while maintaining several statistics at once". First think: how many pieces of state must a single pass maintain (sum, max, min), and what initial value does each take?' },
            { zh: '累加器从 0 开始；最大值、最小值都用数组的第一个元素初始化。增强 for 每圈对当前数做三件事：加进 sum、比 max 大就更新 max、比 min 小就更新 min。最后按要求顺序打印 sum、max、min、nums.length。', en: 'The accumulator starts at 0; both max and min records are initialized to the first element. In the enhanced for, the current number does three things: is added to sum, updates max if larger, and updates min if smaller. After the loop, print sum, max, min, nums.length in the required order.' },
            { zh: '`for (int n : nums)` 是增强 for，n 依次取每个元素；`int max = nums[0]; int min = nums[0];` 用首元素初始化；数组长度用 `nums.length`（无括号）。', en: '`for (int n : nums)` is the enhanced for, with n taking each element in turn; `int max = nums[0]; int min = nums[0];` initializes from the first element; the array length is `nums.length` (no parentheses).' },
            { zh: '声明三个变量（sum 从 0、max、min 从 nums[0]），增强 for 循环里更新；最后四条 println 按顺序输出 sum、max、min、nums.length。易错点：max、min 不能用 0 初始化（数组里有负数就出错）；nums.length 是属性不带括号；四条 println 的输出顺序与题目严格一致。', en: 'Declare three variables (sum starts at 0, max and min from nums[0]) and update them inside the enhanced for; finally four println calls output sum, max, min, nums.length in order. Watch out: max and min must NOT be initialized to 0 (an array could contain negatives); nums.length is a field, no parentheses; the order of the four println calls must match the problem strictly.' },
            { zh: '完整写法：`int sum = 0; int max = nums[0]; int min = nums[0]; for (int n : nums) { sum += n; if (n > max) max = n; if (n < min) min = n; } System.out.println(sum); System.out.println(max); System.out.println(min); System.out.println(nums.length);`，输出 108、42、4、6。', en: 'Full answer: `int sum = 0; int max = nums[0]; int min = nums[0]; for (int n : nums) { sum += n; if (n > max) max = n; if (n < min) min = n; } System.out.println(sum); System.out.println(max); System.out.println(min); System.out.println(nums.length);`, printing 108, 42, 4, 6.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int[] nums = {4, 8, 15, 16, 23, 42};\n        int sum = 0;\n        int max = nums[0];\n        int min = nums[0];\n        for (int n : nums) {\n            sum += n;\n            if (n > max) max = n;\n            if (n < min) min = n;\n        }\n        System.out.println(sum);\n        System.out.println(max);\n        System.out.println(min);\n        System.out.println(nums.length);\n    }\n}\n',
          solutionNote: { zh: '程序用一个增强 for 把数组 nums 走一遍，同时维护 sum（累加）、max（更大的就更新）、min（更小的就更新），循环结束后按 sum、max、min、nums.length 顺序打印四行。它正确的关键在于 max、min 都用首元素 nums[0] 初始化（不能用 0，否则遇到负数会失效），nums.length 是属性不带括号（不是 length()），四条 println 顺序与题目严格一致。也可以拆成两次循环（一次求和、一次找最值），但一趟更高效也更地道。', en: 'The program walks nums once with an enhanced for, maintaining sum (accumulator), max (update when larger) and min (update when smaller); after the loop it prints sum, max, min and nums.length on four lines. It passes because max and min are both seeded from nums[0] (using 0 would fail on negative values), nums.length is a field with no parentheses (not length()), and the four println calls follow the required order exactly. You could split into two passes (one for sum, one for the extremes), but a single pass is more efficient and idiomatic.' },
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
          hints: [
            { zh: '这题练的是「用标准库的数组工具」——排序和「把数组变成带方括号的文本」都各有一个现成工具。先想清楚：直接 println 一个数组会打出什么？为什么还需要额外的工具？', en: 'This exercise trains "using the standard library array tools" — sorting and "turning an array into bracketed text" each have a ready-made tool. First think: what does println print when handed a raw array? Why is an extra tool still needed?' },
            { zh: '第一步用排序工具把数组原地排好序（不返回新数组）；第二步用格式化工具把它变成 [a, b, c] 这种字符串；第三步把字符串交给 println。', en: 'Step one: use the sorting tool to sort the array in place (it returns no new array). Step two: use the formatting tool to turn it into a string like [a, b, c]. Step three: hand that string to println.' },
            { zh: '`Arrays.sort(数组名)` 原地排序；`Arrays.toString(数组名)` 返回 [1, 2, 3] 这种带方括号的字符串。两者都来自 java.util.Arrays。', en: '`Arrays.sort(arrayName)` sorts in place; `Arrays.toString(arrayName)` returns a bracketed string like [1, 2, 3]. Both come from java.util.Arrays.' },
            { zh: '两行即可——先 `Arrays.sort(a);`，再 `System.out.println(Arrays.toString(a));`。易错点：不要写 `System.out.println(a);`（会输出类似 [I@xxx 的地址乱码）；Arrays 首字母大写；import 已在 starter 中写好，无需手动添加。', en: 'Just two lines: `Arrays.sort(a);` then `System.out.println(Arrays.toString(a));`. Watch out: do not write `System.out.println(a);` (it prints a hash like [I@xxx); Arrays starts with a capital letter; the import is already in the starter.' },
            { zh: '完整写法：`Arrays.sort(a); System.out.println(Arrays.toString(a));`，输出 [1, 1, 2, 3, 4, 5, 6, 9]。', en: 'Full answer: `Arrays.sort(a); System.out.println(Arrays.toString(a));`, printing [1, 1, 2, 3, 4, 5, 6, 9].' },
          ],
          solution: 'import java.util.Arrays;\n\npublic class Main {\n    public static void main(String[] args) {\n        int[] a = {3, 1, 4, 1, 5, 9, 2, 6};\n        Arrays.sort(a);\n        System.out.println(Arrays.toString(a));\n    }\n}\n',
          solutionNote: { zh: '程序用 java.util.Arrays 提供的两个工具：Arrays.sort 把数组 a 原地排成升序（不返回新数组），Arrays.toString 把排好序的数组格式化成 [1, 1, 2, 3, 4, 5, 6, 9] 字符串并交给 println。它正确的关键在于 sort 是原地修改（不需要也不接受赋值给变量）、toString 返回字符串才适合 println（直接 println 数组会输出 [I@xxx 之类的内存地址乱码）。也可以自己写冒泡排序再手工拼接方括号和逗号，但标准库一行搞定最稳妥。', en: 'The program uses two tools from java.util.Arrays: Arrays.sort rearranges a in ascending order in place (no new array returned), and Arrays.toString formats the sorted array into the string [1, 1, 2, 3, 4, 5, 6, 9] and hands it to println. It passes because sort mutates in place (no assignment needed or accepted) and toString returns a printable string (printing a directly would yield the gibberish [I@xxx). You could hand-write a bubble sort and assemble the brackets and commas yourself, but the standard library is the safer one-shot solution.' },
        },
      ],
    },

    // ================= 8. 字符串 =================
    {
      id: 'strings',
      title: { zh: '字符串', en: 'Strings' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

学会处理文字：量长度、截子串、比较、反转。学完你还会彻底搞懂 Java 面试最爱考的 \`equals\` 与 \`==\` 之别。

## 字符串是什么

\`String\` 就是用双引号包住的一串文字：\`"hello"\`。它有个反直觉的特性——**不可变（immutable）**：字符串像**印出来的书**而不是黑板，任何「修改」（变大写、拼接、替换）都不是改原文，而是**印一本新书**给你。所以 \`s.toUpperCase()\` 不会动 \`s\`，只有 \`s = s.toUpperCase()\` 把新书放回 s 的位置，才算换掉。

再打个比方：变量 s 是**书架上写着 s 的位置**，\`toUpperCase()\` 是去印了一本大写版。你不把新书放回书架（重新赋值），书架上摆的还是旧书。

## 怎么写

最常用的方法（都是 \`字符串.方法()\` 的形式）：

\`\`\`java
String s = "Hello, Java";
s.length()            // 11，字符个数
s.charAt(0)           // 'H'，取第 0 个字符
s.substring(0, 5)     // "Hello"，截取 [0,5) 含头不含尾
s.indexOf("Java")     // 7，首次出现的位置；找不到返回 -1
s.replace("Java", "World")  // 替换全部，返回新串
s.toUpperCase()       // "HELLO, JAVA"，返回新串
\`\`\`

比较内容**永远用 equals**：

\`\`\`java
a.equals(b)             // 内容相同 → true
a == b                  // 比的是内存地址，结果不可靠！
\`\`\`

原因：\`==\` 问「这两本是不是同一本书」，\`equals\` 问「这两本内容是否一样」。两本内容相同的书仍是两本书，所以 \`==\` 返回 false。

需要频繁拼接（尤其循环里）用 \`StringBuilder\`：

\`\`\`java
StringBuilder sb = new StringBuilder();
sb.append("a").append("b");   // 链式追加
sb.reverse();                 // 反转
String s = sb.toString();     // 变回 String
\`\`\`

## 逐行读懂示例

本课示例：

\`\`\`java
String s = "Hello Java";
System.out.println(s.length());              // 11：H e l l o 空格 J a v a 共 11 个字符
System.out.println(s.substring(0, 5));       // "Hello"：从下标 0 取到 5 之前
System.out.println(s.replace("Java", "World")); // 新串 "Hello World"，s 本身不变
\`\`\`

\`substring(0, 5)\` 的区间**含头不含尾**：取下标 0 到 4，共 5 个字符。这是最常记错的规则。

## 新手常犯的错误

- **忘了不可变**：\`s.toUpperCase();\` 之后直接打印 s → 还是原样。必须 \`s = s.toUpperCase();\`
- **用 == 比字符串**：有时 true 有时 false（取决于是否命中常量池）→ 统一改用 \`equals\`
- **substring 下标含尾**：想要 "Hello" 写成 \`substring(0, 6)\` → 得到 "Hello " 带空格。区间含头不含尾
- **char 与 String 引号混用**：\`'A'\` 是 char（单引号、单字符），\`"A"\` 是 String，类型不同不能随意互换

## 小结

- String 不可变：一切「修改」都返回新串，要接住返回值
- 常用：\`length()\`、\`charAt\`、\`substring\`（含头不含尾）、\`indexOf\`、\`replace\`
- 比较内容用 \`equals\`，\`==\` 比地址
- 循环拼接用 \`StringBuilder\` 的 \`append\`
- 下一课深入「引用」到底是什么。`,
        en: `## What you'll learn in this lesson

Work with text: measure length, slice substrings, compare, reverse. You will also fully understand \`equals\` versus \`==\` — the favorite interview question in Java.

## What is a String?

A \`String\` is a run of text wrapped in double quotes: \`"hello"\`. It has a counter-intuitive property — **immutability**: a string is like **a printed book, not a blackboard**. Any "modification" (uppercase, concatenation, replace) never edits the original; it **prints a new book** for you. So \`s.toUpperCase()\` does not touch \`s\`; only \`s = s.toUpperCase()\` puts the new book back into s's slot.

Another way to picture it: the variable s is **a slot on the bookshelf labeled s**, and \`toUpperCase()\` prints an uppercase edition. Until you place the new book back in the slot (reassign), the shelf still holds the old one.

## How to write it

The most-used methods (all in the \`string.method()\` form):

\`\`\`java
String s = "Hello, Java";
s.length()            // 11, the number of characters
s.charAt(0)           // 'H', the character at index 0
s.substring(0, 5)     // "Hello", slice [0,5) — start included, end excluded
s.indexOf("Java")     // 7, first occurrence; -1 if not found
s.replace("Java", "World")  // replaces all, returns a new string
s.toUpperCase()       // "HELLO, JAVA", a new string
\`\`\`

**Always compare content with equals**:

\`\`\`java
a.equals(b)             // same content → true
a == b                  // compares memory addresses — unreliable!
\`\`\`

Why: \`==\` asks "are these the very same book?", while \`equals\` asks "do these two books have identical content?" Two books with identical content are still two books, so \`==\` says false.

For heavy concatenation (especially in loops) use \`StringBuilder\`:

\`\`\`java
StringBuilder sb = new StringBuilder();
sb.append("a").append("b");   // chained appends
sb.reverse();                 // reverse
String s = sb.toString();     // back to String
\`\`\`

## Reading the example line by line

This lesson's example:

\`\`\`java
String s = "Hello Java";
System.out.println(s.length());              // 11: H e l l o space J a v a = 11 characters
System.out.println(s.substring(0, 5));       // "Hello": from index 0 up to (not including) 5
System.out.println(s.replace("Java", "World")); // new string "Hello World"; s itself is unchanged
\`\`\`

The range of \`substring(0, 5)\` is **start-inclusive, end-exclusive**: indices 0 through 4, five characters total. That is the rule most often misremembered.

## Common beginner mistakes

- **Forgetting immutability**: calling \`s.toUpperCase();\` and then printing s → still the original. You must write \`s = s.toUpperCase();\`
- **Comparing strings with ==**: sometimes true, sometimes false (depending on the constant pool) → switch to \`equals\` everywhere
- **substring including the end**: writing \`substring(0, 6)\` for "Hello" → you get "Hello " with a trailing space. The range excludes the end index
- **Mixing quote styles**: \`'A'\` is a char (single quotes, one character), \`"A"\` is a String — different types, not interchangeable

## Summary

- String is immutable: every "modification" returns a new string that you must catch
- Everyday tools: \`length()\`, \`charAt\`, \`substring\` (start-inclusive, end-exclusive), \`indexOf\`, \`replace\`
- Compare content with \`equals\`; \`==\` compares addresses
- For concatenation in loops, use \`StringBuilder.append\`
- Next lesson: what a "reference" really is.`,
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
          hints: [
            { zh: '这题练的是「== 与 equals 的区别」——一个比地址、一个比内容。先想清楚：两个 new 出来的字符串虽然内容相同，在内存里是不是同一个对象？', en: 'This exercise trains "the difference between == and equals" — one compares references, the other compares content. First think: two strings created with new have the same content, but are they the same object in memory?' },
            { zh: '== 直接比较两个变量本身（这里比的是它们各自持有的引用是否指向同一对象）；equals 是 String 自己的方法，用来按字符逐位比较内容。两条 println 各打印一行。', en: '== compares the two variables themselves (here it checks whether the references they hold point to the same object); equals is a method on String that compares content character by character. Two println calls print one line each.' },
            { zh: '`变量 == 变量` 直接比较；`变量A.equals(变量B)` 调用 String 的内容比较方法。注意 equals 是方法，要带括号。', en: 'Use `var1 == var2` for direct comparison; use `varA.equals(varB)` to call the String content comparison. Note equals is a method and requires parentheses.' },
            { zh: '依次写 `System.out.println(a == b);` 和 `System.out.println(a.equals(b));`。易错点：== 不能写成 =（= 是赋值）；equals 拼写与括号必须正确；本题用 `new String("Hi")` 强制 new 两个独立对象、绕开字符串常量池，所以 == 一定得 false。', en: 'Write `System.out.println(a == b);` then `System.out.println(a.equals(b));`. Watch out: == must not become = (= is assignment); the equals spelling and its parentheses must be correct; the prompt uses `new String("Hi")` to force two independent objects and bypass the String constant pool, so == must give false.' },
            { zh: '完整写法：`System.out.println(a == b);` 输出 false（不是同一对象）；`System.out.println(a.equals(b));` 输出 true（内容都是 Hi）。', en: 'Full answer: `System.out.println(a == b);` prints false (not the same object); `System.out.println(a.equals(b));` prints true (both are "Hi").' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        String a = new String("Hi");\n        String b = new String("Hi");\n        System.out.println(a == b);\n        System.out.println(a.equals(b));\n    }\n}\n',
          solutionNote: { zh: '程序用两个表达式分别演示 == 与 equals 的语义：a == b 比较两个引用是否指向同一对象，因为 new 强制各开一份内存，所以是 false；a.equals(b) 按字符逐位比较内容，Hi 与 Hi 相同，所以是 true。它正确的关键在于 == 比的是引用而非内容，equals 才按内容比；new String("Hi") 会绕开字符串常量池、确保是两个独立对象。也可以把 new String 换成字面量赋值，但那样 == 可能因常量池复用而变 true，反而掩盖题目考察 == 与 equals 区别的事实。', en: 'The program uses two expressions to demonstrate the semantics of == and equals: a == b checks whether the two references point at the same object — because new forces two separate allocations, the result is false; a.equals(b) compares the content character by character, and both hold "Hi", so the result is true. It passes because == compares references (not content), equals compares content, and new String("Hi") deliberately bypasses the String constant pool to guarantee two distinct objects. You could drop new and assign literals, but then == might accidentally return true via pool reuse, hiding the very distinction the exercise targets.' },
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
          hints: [
            { zh: '这题练的是「用 StringBuilder 这个可变工具加工字符串」。先想清楚：String 不可变，想「修改」文字为什么必须借助一个可变的容器？', en: 'This exercise trains "using StringBuilder, the mutable tool for text". First think: String is immutable — why must you use a mutable container to "modify" it?' },
            { zh: '三步：把字符串塞进 StringBuilder、调用它的反转方法、把结果转回 String 交给 println。三步可以拆成三行，也可以用链式调用一行搞定。', en: 'Three steps: pour the string into a StringBuilder, call its reverse method, then convert the result back to a String for println. The three steps can be three lines or one chained call.' },
            { zh: '`new StringBuilder(原字符串)` 创建可变容器；`.reverse()` 原地反转；`.toString()` 把它变回不可变的 String。', en: '`new StringBuilder(originalString)` creates the mutable container; `.reverse()` reverses in place; `.toString()` turns it back into an immutable String.' },
            { zh: '写 `StringBuilder sb = new StringBuilder(s);`，再 `sb.reverse();`，再 `System.out.println(sb.toString());`。易错点：reverse 是方法必须带括号；toString 把 StringBuilder 转回 String，否则 println 收到的不是普通字符串；不要直接在 String s 上调 reverse——String 没有这个方法。', en: 'Write `StringBuilder sb = new StringBuilder(s);`, then `sb.reverse();`, then `System.out.println(sb.toString());`. Watch out: reverse is a method and needs parentheses; toString converts the StringBuilder back to a String, otherwise println would not receive a printable text; do not call reverse on the String s itself — String has no such method.' },
            { zh: '完整写法（拆三行）：`StringBuilder sb = new StringBuilder(s); sb.reverse(); System.out.println(sb.toString());`，输出 olleh。链式一行：`System.out.println(new StringBuilder(s).reverse().toString());`，效果相同。', en: 'Full answer (three lines): `StringBuilder sb = new StringBuilder(s); sb.reverse(); System.out.println(sb.toString());`, printing olleh. One-liner: `System.out.println(new StringBuilder(s).reverse().toString());` works the same way.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        String s = "hello";\n        StringBuilder sb = new StringBuilder(s);\n        sb.reverse();\n        System.out.println(sb.toString());\n    }\n}\n',
          solutionNote: { zh: '程序先创建 StringBuilder 把不可变字符串 s 装进去，再用 reverse 原地反转，最后用 toString 转回 String 交给 println。它正确的关键在于 String 本身没有 reverse 方法，必须借助可变工具；reverse 之后必须再 toString 才能把结果交给 println 输出普通文本。也可以自己写循环把字符从尾到头塞进 char 数组再拼成串，但 StringBuilder 一行反转更地道也更快。', en: 'The program first creates a StringBuilder containing the immutable string s, calls reverse to flip it in place, then calls toString to convert it back to a String for println. It passes because String itself has no reverse method — you must go through a mutable tool — and the result of reverse must be converted with toString before println can print it as text. You could write a loop copying chars from end to start into a char array, but StringBuilder is the idiomatic and faster one-shot choice.' },
        },
      ],
    },

    // ================= 9. 对象与引用 =================
    {
      id: 'references',
      title: { zh: '对象与引用', en: 'Objects & References' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

搞懂 Java 里**变量存的到底是什么**：基本类型存值，对象变量存「引用」。学完你能解释数组为什么「一改俱改」，也不再怕 NullPointerException。

## 引用是什么

打个比方：对象是**酒店里的房间**，引用是**写着房间号的房卡**。变量 \`int[] a\` 这张「卡」本身不是房间，它只是记着房间号。把卡复印一张给别人（\`int[] b = a\`），两张卡开的是**同一间房**——任何人在房里搬动东西，其他人再来看都变了。

Java 只有 8 种基本类型（\`int\`、\`double\`、\`boolean\`……）是「把值直接装进变量」；其余一切——数组、\`String\`、所有类——变量里装的都只是**地址（引用）**，真正的对象躺在堆内存里。

## 怎么写

基本类型赋值 = **复印文件**，各改各的：

\`\`\`java
int a = 5;
int b = a;    // b 得到副本
b = 10;       // 只改了 b
// a 还是 5
\`\`\`

引用赋值 = **复印房卡**，指向同一个对象：

\`\`\`java
int[] a = {1, 2, 3};
int[] b = a;      // 两张卡，同一间房
b[0] = 99;        // 用 b 的卡进房改东西
// a[0] 也变成 99！
\`\`\`

想要真正的复制，得「开新房搬家具」：

\`\`\`java
int[] c = Arrays.copyOf(a, a.length);  // 全新数组，内容拷贝
\`\`\`

引用可以是 \`null\`——**房卡上没写房间号**：

\`\`\`java
String s = null;
s.length();   // NullPointerException：拿空卡开房，当然出错
\`\`\`

用之前先验卡：\`if (s != null) { ... }\`。配合 \`&&\` 短路，\`s != null && s.length() > 0\` 是安全写法。

## 逐行读懂示例

本课示例：

\`\`\`java
int[] a = {1, 2, 3};
int[] b = a;                          // b 复印了 a 的房卡 → 同一个数组
int[] c = Arrays.copyOf(a, a.length); // c 是全新数组，内容复制
b[0] = 99;                            // 改的是共享的那个数组
System.out.println(a[0]);             // 99：a 的卡开的是同一间房
System.out.println(c[0]);             // 1：c 在自己的新房里，不受影响
\`\`\`

同样一行赋值，\`b = a\` 是共享，\`copyOf\` 是复制——后果完全不同。

## 新手常犯的错误

- **以为 \`b = a\` 复制了数组**：改 \`b\` 发现 \`a\` 也变 → 这不是 bug，是共享引用；要复制用 \`Arrays.copyOf\`
- **对 null 调方法**：→ 运行时抛 \`NullPointerException\`。先判空再使用
- **用 == 比较内容**：\`==\` 比的是地址。字符串用 \`equals\`，数组用 \`Arrays.equals\`
- **在方法里改数组元素**：方法内改的是共享对象，调用方看得见——这与 int 参数「改不动」截然相反

## 小结

- 基本类型存值，对象变量存引用（地址）
- 引用赋值 = 多个变量指向同一对象，一改俱改
- \`null\` 表示「不指向任何对象」，先判空再用
- 下一课正式定义自己的类：字段、构造器、方法。`,
        en: `## What you'll learn in this lesson

Understand **what a variable actually holds**: primitives store values, object variables store references. After this lesson you can explain why arrays "change together", and NullPointerException will hold no fear.

## What is a reference?

Here is the analogy: an object is **a hotel room**, and a reference is **a keycard with the room number on it**. The variable \`int[] a\` — the card — is not the room; it merely records the room number. Photocopy the card and hand it to someone (\`int[] b = a\`), and both cards open **the same room**: whoever moves the furniture, everyone else sees the change.

Only the 8 primitive types (\`int\`, \`double\`, \`boolean\`, …) store the value directly inside the variable. Everything else — arrays, \`String\`, every class — stores just an **address (a reference)**; the real object lives in heap memory.

## How to write it

Primitive assignment = **photocopying a document**, each copy independent:

\`\`\`java
int a = 5;
int b = a;    // b gets a copy
b = 10;       // only b changed
// a is still 5
\`\`\`

Reference assignment = **photocopying the keycard**, both point to one object:

\`\`\`java
int[] a = {1, 2, 3};
int[] b = a;      // two cards, one room
b[0] = 99;        // use b's card to change things inside
// a[0] is 99 too!
\`\`\`

To get a real copy, "open a new room and move the furniture":

\`\`\`java
int[] c = Arrays.copyOf(a, a.length);  // a brand-new array, contents copied
\`\`\`

A reference may be \`null\` — **a keycard with no room number on it**:

\`\`\`java
String s = null;
s.length();   // NullPointerException: opening a door with a blank card
\`\`\`

Check the card before use: \`if (s != null) { ... }\`. Combined with \`&&\` short-circuiting, \`s != null && s.length() > 0\` is a safe pattern.

## Reading the example line by line

This lesson's example:

\`\`\`java
int[] a = {1, 2, 3};
int[] b = a;                          // b photocopied a's card → the same array
int[] c = Arrays.copyOf(a, a.length); // c is a brand-new array, contents copied
b[0] = 99;                            // modifies the shared array
System.out.println(a[0]);             // 99: a's card opens the same room
System.out.println(c[0]);             // 1: c sits in its own new room, unaffected
\`\`\`

The same kind of assignment line — \`b = a\` shares, \`copyOf\` copies — leads to completely different outcomes.

## Common beginner mistakes

- **Assuming \`b = a\` copies the array**: changing b seems to change a → that is not a bug, that is a shared reference; use \`Arrays.copyOf\` to copy
- **Calling methods on null** → runtime \`NullPointerException\`. Check for null first
- **Using == to compare contents**: \`==\` compares addresses. Strings use \`equals\`, arrays use \`Arrays.equals\`
- **Mutating array elements inside a method**: the method alters the shared object and the caller sees it — the exact opposite of int parameters, which cannot be changed

## Summary

- Primitives store values; object variables store references (addresses)
- Reference assignment makes several variables point at one object — change one, all see it
- \`null\` means "points at nothing"; check before use
- Next lesson: defining classes of your own — fields, constructors, methods.`,
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
          hints: [
            { zh: '这题练的是「对象变量共享引用」——b = a 不是复制数组，而是两张房卡指向同一间房。先想清楚：修改 b 的元素，a 看到的会是同一个数组吗？', en: 'This exercise trains "shared references for object variables" — b = a does not copy the array, it photocopies the keycard to the same room. First think: when you mutate an element through b, does a "see" the same array?' },
            { zh: 'starter 里已经完成两件事：让 b 与 a 共享同一数组、并通过 b[0] = 99 把第一个元素改成 99；现在要做的只是把 a 的第一个元素读出来并打印。', en: 'The starter has already done two things: pointed b at the same array as a, and changed the first slot to 99 through b[0] = 99; the remaining job is to read a first element and print it.' },
            { zh: '取数组元素用「数组名[下标]」，下标从 0 开始；打印交给 `System.out.println(...)`。', en: 'Read an array element with "arrayName[index]"; indices start at 0; then hand it to `System.out.println(...)`.' },
            { zh: '补一行 `System.out.println(a[0]);`。易错点：下标是 0 不是 1；元素本身是 int 不需要引号；这条打印的是元素值而不是数组本身（打印整个数组需要 Arrays.toString）。', en: 'Add one line: `System.out.println(a[0]);`. Watch out: the index is 0, not 1; the element is an int so it takes no quotes; this prints the element value, not the whole array (printing the whole array would require Arrays.toString).' },
            { zh: '完整写法：`System.out.println(a[0]);`。因为 b 和 a 共享同一数组，a[0] 已是 99，输出 99。', en: 'Full answer: `System.out.println(a[0);`. Since b and a point to the same array, a[0] is already 99, so it prints 99.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        int[] a = {1, 2, 3};\n        int[] b = a;\n        b[0] = 99;\n        System.out.println(a[0]);\n    }\n}\n',
          solutionNote: { zh: '程序在 starter 里已经做完两件事：让 b 与 a 共享同一数组、并通过 b[0] = 99 把第一个元素改成 99；剩下只读 a[0] 就能看到 99。它正确的关键在于理解 b = a 不是「复制数组」而是「复制房卡」——两张卡指向同一房间，一改俱改；打印时下标从 0 开始、元素本身是 int 不需要引号。也可以先 Arrays.copyOf(a, a.length) 拿到独立副本再改 b[0]，但那样 a[0] 还是 1，不符合题目期望的 99。', en: 'The starter has already done two things: pointed b at the same array as a, and changed the first slot to 99 via b[0] = 99; the only remaining step is reading a[0] to reveal 99. It passes because b = a is not "copy the array" but "copy the keycard" — both cards open the same room, so a change is visible to both names; the index starts at 0 and the element is an int with no quotes needed. You could first Arrays.copyOf(a, a.length) to get an independent copy and then mutate b[0], but then a[0] would still be 1 and the expected 99 would not appear.' },
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
          hints: [
            { zh: '这题练的是「null 安全访问」——使用引用之前必须先判断它有没有指向对象。先想清楚：对一个 null 直接调方法会发生什么？Java 会作何反应？', en: 'This exercise trains "null-safe access" — before using a reference you must check whether it points to anything. First think: what happens if you call a method on null directly? How does Java react?' },
            { zh: '用 if / else 写出两个分支：条件是「s 不为 null」；成立时打印 s.length()，否则打印 -1 兜底。两个分支各写一条打印语句，else 不能省。', en: 'Write two branches with if / else: the condition is "s is not null"; when true, print s.length(); otherwise print -1 as a fallback. Each branch has its own println; the else branch cannot be omitted.' },
            { zh: '`if (s != null) { ... } else { ... }` 判空分支；`s.length()` 求字符串长度（必须确保 s 不为 null）；数字 -1 直接写，不需要引号。', en: '`if (s != null) { ... } else { ... }` is the null-check shape; `s.length()` returns the string length (only safe when s is non-null); the number -1 is written as is, with no quotes.' },
            { zh: '写 `if (s != null) { System.out.println(s.length()); } else { System.out.println(-1); }`。易错点：else 不能省（不写就会对 null 调 length() 抛 NullPointerException）；-1 是数字不能加引号；s 与 null 比较用 != 而不是 == null。', en: 'Write `if (s != null) { System.out.println(s.length()); } else { System.out.println(-1); }`. Watch out: else cannot be dropped (calling length() on null throws NullPointerException); -1 is a number and takes no quotes; the null check uses !=, not == null.' },
            { zh: '完整写法：`if (s != null) { System.out.println(s.length()); } else { System.out.println(-1); }`，本例 s 为 null，走 else 分支输出 -1。', en: 'Full answer: `if (s != null) { System.out.println(s.length()); } else { System.out.println(-1); }`. Here s is null, so the else branch fires and prints -1.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        String s = null;\n        if (s != null) {\n            System.out.println(s.length());\n        } else {\n            System.out.println(-1);\n        }\n    }\n}\n',
          solutionNote: { zh: '程序用 if / else 把「使用前先判空」做成硬性分支：条件 s != null 成立才打印 s.length()，否则走 else 打印 -1。它正确的关键在于必须先判空再使用，否则对 null 调 length() 会抛 NullPointerException 导致程序崩溃；-1 是数字不是字符串，所以不能加引号。也可以用三元运算符 `System.out.println(s != null ? s.length() : -1);` 一行表达同样逻辑，但拆成 if/else 更清晰、也更适合讲清「为什么必须先判空」。', en: 'The program uses an if / else to enforce "check before use": only when s != null does it print s.length(); otherwise the else branch prints -1. It passes because the null check must happen first — calling length() on null throws NullPointerException and crashes the program; -1 is a number, not a String, so it takes no quotes. You could collapse it to the one-line ternary `System.out.println(s != null ? s.length() : -1);`, but the if/else form is clearer and explains "why we check first" more directly.' },
        },
      ],
    },

    // ================= 10. 类与对象 =================
    {
      id: 'oop',
      title: { zh: '类与对象：构造、封装、继承、多态', en: 'Classes: Constructors, Encapsulation, Inheritance, Polymorphism' },
      difficulty: 3,
      lecture: {
        zh: `## 这节课学什么

学会**自己造类型**：定义类、创建对象、用继承和多态组织代码。这是 Java「面向对象」的核心一课。

## 类与对象是什么

**类是图纸，对象是按图纸造出来的产品。**一张「手机图纸」（class Phone）规定每台手机有哪些零件（字段）和功能（方法）；\`new\` 一次，就按图纸造出一台真实的产品（对象）。图纸只有一张，产品可以造无数台，每台有自己的数据。

为什么这么设计？把「数据」和「操作这些数据的代码」绑在一起，外界只通过公开的方法来用——就像你用手机只按按键，不用直接短路电路。这就是**封装**。**继承**让新图纸在旧图纸上加料（Dog 图纸基于 Animal 图纸）；**多态**让同一句 \`a.speak()\` 根据实际对象发出不同叫声。

## 怎么写

定义一个类：

\`\`\`java
class Rectangle {
    private int width;    // 字段：每个对象自带的数据
    private int height;

    public Rectangle(int w, int h) {   // 构造器：与类同名、无返回类型
        this.width = w;    // this.width 是字段，w 是参数
        this.height = h;
    }

    public int area() {    // 方法：对象能做的事
        return width * height;
    }
}
\`\`\`

使用它：

\`\`\`java
Rectangle r = new Rectangle(3, 4);  // new 造对象，自动调用构造器
r.area();                           // 12，用「对象.方法」调用
\`\`\`

继承与重写：

\`\`\`java
class Animal {
    protected String name;
    public Animal(String name) { this.name = name; }
    public String speak() { return name + " makes a sound"; }
}

class Dog extends Animal {           // Dog 继承 Animal
    public Dog(String name) { super(name); }   // 调用父类构造器
    @Override
    public String speak() { return name + " barks"; }  // 重写
}
\`\`\`

多态上场：\`Animal a = new Dog("Rex");\` —— 变量类型是 Animal，实际对象是 Dog，调 \`a.speak()\` 执行的是 **Dog 的版本**（运行时看实际对象，不看变量声明）。

访问修饰符：\`private\` 仅本类；\`protected\` 同包+子类；\`public\` 任意。一个文件只能有**一个 public 类**（就是 Main），其他类不加修饰符写在同一文件即可。

## 逐行读懂示例

本课示例（节选）：

\`\`\`java
Animal a = new Dog("Rex");   // 父类引用指向子类对象
a.speak();                   // "Rex barks"：运行时按实际对象找方法
\`\`\`

造 Dog 时构造器链先跑 \`super(name)\`（把名字存进父类的 name 字段），再执行 Dog 自己的构造器体。调用 \`speak()\` 时，Java 不看变量声明成什么，而看对象到底是什么——Dog 重写过，所以叫出 "Rex barks"。

## 新手常犯的错误

- **一个文件里写两个 public 类**：给 \`class Rectangle\` 也加 public → 报错「只能有一个公共类」。同文件的辅助类去掉 public
- **构造器写了返回类型**：\`public void Rectangle(...)\` → 它变成普通方法，\`new Rectangle()\` 时报错找不到构造器。构造器**无返回类型**
- **子类构造器忘 super**：父类没有无参构造器时 → 报错。子类构造器第一行写 \`super(参数);\`
- **static 方法里碰实例字段**：在 main 里直接用 \`width\` → 报错。静态方法属于类、没有 this，摸不到对象的数据

## 小结

- 类 = 图纸（字段+方法），对象 = new 出来的产品
- 构造器与类同名、无返回类型；\`this\` 指当前对象，\`super\` 指父类
- 封装：字段 private、方法 public；继承：extends；多态：重写 + 父类引用
- 下一课学文件 IO，让数据在程序关掉后还能留下来。`,
        en: `## What you'll learn in this lesson

**Build your own types**: define classes, create objects, and organize code with inheritance and polymorphism. This is the core lesson of object-oriented Java.

## What are classes and objects?

**A class is the blueprint; an object is the product built from it.** A "phone blueprint" (class Phone) specifies which parts every phone has (fields) and what it can do (methods); each \`new\` builds a real product (an object) from the blueprint. There is one blueprint, but you can build countless phones, each with its own data.

Why design it this way? Data and the code that operates on it are bound together, and outsiders interact only through public methods — like using a phone by pressing its buttons instead of short-circuiting its electronics. That is **encapsulation**. **Inheritance** lets a new blueprint extend an old one (Dog based on Animal); **polymorphism** makes the same call \`a.speak()\` produce different sounds depending on the actual object.

## How to write it

Define a class:

\`\`\`java
class Rectangle {
    private int width;    // fields: data each object carries
    private int height;

    public Rectangle(int w, int h) {   // constructor: class name, no return type
        this.width = w;    // this.width is the field, w is the parameter
        this.height = h;
    }

    public int area() {    // a method: something the object can do
        return width * height;
    }
}
\`\`\`

Use it:

\`\`\`java
Rectangle r = new Rectangle(3, 4);  // new builds the object, the constructor runs
r.area();                           // 12, called as object.method
\`\`\`

Inheritance and overriding:

\`\`\`java
class Animal {
    protected String name;
    public Animal(String name) { this.name = name; }
    public String speak() { return name + " makes a sound"; }
}

class Dog extends Animal {           // Dog inherits Animal
    public Dog(String name) { super(name); }   // call the parent constructor
    @Override
    public String speak() { return name + " barks"; }  // override
}
\`\`\`

Polymorphism in action: \`Animal a = new Dog("Rex");\` — the variable type is Animal, the actual object is Dog, and \`a.speak()\` runs the **Dog version** (decided by the actual object at runtime, not by the variable declaration).

Access modifiers: \`private\` — this class only; \`protected\` — same package plus subclasses; \`public\` — anywhere. A file may contain **one public class only** (Main); write the other classes in the same file without a modifier.

## Reading the example line by line

This lesson's example (excerpt):

\`\`\`java
Animal a = new Dog("Rex");   // parent-typed reference to a child object
a.speak();                   // "Rex barks": resolved by the actual object at runtime
\`\`\`

Building the Dog first runs the constructor chain: \`super(name)\` stores the name in the parent's field, then Dog's own constructor body runs. When \`speak()\` is called, Java ignores what the variable was declared as and looks at what the object really is — Dog overrode it, so out comes "Rex barks".

## Common beginner mistakes

- **Two public classes in one file**: marking \`class Rectangle\` public too → error about duplicate public classes. Drop the modifier on helper classes in the same file
- **Giving the constructor a return type**: \`public void Rectangle(...)\` turns it into an ordinary method, and \`new Rectangle()\` then fails to find the constructor. Constructors have **no return type**
- **Forgetting super in a subclass constructor**: when the parent has no no-arg constructor → error. Put \`super(args);\` on the first line
- **Touching instance fields from a static method**: using \`width\` inside main → error. Static methods belong to the class, have no this, and cannot reach object data

## Summary

- Class = blueprint (fields + methods); object = the product of \`new\`
- Constructors share the class name and have no return type; \`this\` is the current object, \`super\` the parent
- Encapsulation: private fields, public methods; inheritance: extends; polymorphism: overriding + parent-typed references
- Next lesson: file I/O, so your data can outlive the program.`,
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
          hints: [
            { zh: '这题练的是「自定义一个简单类」——把字段、构造器、方法三件事组装到一张图纸里。先想清楚：一个最小的类长什么样？定义好的类放在哪个文件里、与 main 什么关系？', en: 'This exercise trains "defining your own simple class" — assembling fields, constructor and methods into one blueprint. First think: what does a minimal class look like? Where should the class live relative to main?' },
            { zh: '先定义 class Rectangle：两个私有字段；构造器接收两个 int 参数、用 this 给字段赋值；两个方法分别算面积和周长并 return。main 里 new Rectangle(3, 4) 拿到对象，依次调用两个方法并打印。', en: 'Define class Rectangle with two private fields; a constructor that takes two ints and uses this to assign the fields; two methods that compute area and perimeter and return them. In main call new Rectangle(3, 4), then invoke the two methods and print each result.' },
            { zh: '语法形态：`class Rectangle { private int width; private int height; public Rectangle(int width, int height) { this.width = width; this.height = height; } public int area() { return width * height; } public int perimeter() { return 2 * (width + height); } }`。', en: 'Shape: `class Rectangle { private int width; private int height; public Rectangle(int width, int height) { this.width = width; this.height = height; } public int area() { return width * height; } public int perimeter() { return 2 * (width + height); } }`.' },
            { zh: 'Rectangle 类写在同文件 Main 之后、不要加 public；构造器与类同名、无返回类型；this.width = width 把参数赋值给字段（左边是字段、右边是参数）；area 返回 width * height，perimeter 返回 2 * (width + height)；main 里 Rectangle r = new Rectangle(3, 4); 依次 println(r.area()) 与 r.perimeter()，输出 12 和 14。', en: 'Put class Rectangle after Main in the same file without public; the constructor shares the class name and has no return type; `this.width = width` puts the parameter into the field (left = field, right = parameter); area returns width * height and perimeter returns 2 * (width + height); in main write `Rectangle r = new Rectangle(3, 4);` then println(r.area()) and println(r.perimeter()) in order, printing 12 and 14.' },
            { zh: '完整写法（拼在一起）：`class Rectangle { private int width; private int height; public Rectangle(int width, int height) { this.width = width; this.height = height; } public int area() { return width * height; } public int perimeter() { return 2 * (width + height); } }`。main 里 `Rectangle r = new Rectangle(3, 4); System.out.println(r.area()); System.out.println(r.perimeter());`，输出 12 和 14。', en: 'Full answer: `class Rectangle { private int width; private int height; public Rectangle(int width, int height) { this.width = width; this.height = height; } public int area() { return width * height; } public int perimeter() { return 2 * (width + height); } }`. In main: `Rectangle r = new Rectangle(3, 4); System.out.println(r.area()); System.out.println(r.perimeter());`, printing 12 and 14.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        Rectangle r = new Rectangle(3, 4);\n        System.out.println(r.area());\n        System.out.println(r.perimeter());\n    }\n}\n\nclass Rectangle {\n    private int width;\n    private int height;\n\n    public Rectangle(int width, int height) {\n        this.width = width;\n        this.height = height;\n    }\n\n    public int area() {\n        return width * height;\n    }\n\n    public int perimeter() {\n        return 2 * (width + height);\n    }\n}\n',
          solutionNote: { zh: '程序定义了一个 Rectangle 类：私有字段 width、height，构造器用 this 把参数存进字段，area 返回宽乘高、perimeter 返回 2*(宽+高)；main 用 new Rectangle(3, 4) 造对象并依次打印两个方法的结果。它正确的关键在于构造器与类同名、不写返回类型，this 把参数和字段区分开；Rectangle 类不写 public（一个文件只能有一个 public 类，就是 Main），方法返回 int 而非 void。也可以把字段改成 public 直接访问，但封装原则要求字段私有、方法公开。', en: 'The program defines a Rectangle class with private fields width and height, a constructor that uses this to store the parameters into the fields, an area method that returns width * height and a perimeter method that returns 2 * (width + height); main builds an object with new Rectangle(3, 4) and prints both method results in order. It passes because the constructor shares the class name and has no return type, this disambiguates parameters from fields, the helper class Rectangle is not declared public (a file has only one public class, Main), and the methods return int rather than void. You could expose the fields as public and read them directly, but encapsulation prefers private fields with public methods.' },
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
          hints: [
            { zh: '这题练的是「继承 + 重写 + 多态」三个 OOP 概念同时上场。先想清楚：子类怎么把名字交回给父类？用父类类型接住子类对象时，调用到底走哪个版本的方法？', en: 'This exercise brings together three OOP ideas: inheritance, overriding, and polymorphism. First think: how does a child hand the name up to the parent? When a parent-typed variable holds a child object, which version of the method actually runs?' },
            { zh: '先写父类 Animal：有一个 protected 字段 name，构造器把名字存进去，speak() 返回通用叫声；再写子类 Dog extends Animal：构造器第一行用 super(name) 把名字传给父类，重写 speak() 返回 "barks"。main 用 Animal 类型声明变量、new Dog("Rex")、调用 speak() 打印。', en: 'First write parent Animal with a protected name field, a constructor that stores the name, and a speak() returning a generic sound; then write subclass Dog extends Animal whose constructor calls super(name) on the first line, and overrides speak() to return "barks". In main declare an Animal variable, do new Dog("Rex"), and print the result of speak().' },
            { zh: '语法形态：`class Dog extends Animal { public Dog(String name) { super(name); } @Override public String speak() { return name + " barks"; } }`。重写的方法上加 @Override 让编译器帮忙检查签名是否真的覆盖了父类方法。', en: 'Shape: `class Dog extends Animal { public Dog(String name) { super(name); } @Override public String speak() { return name + " barks"; } }`. Adding @Override lets the compiler verify that the method signature really overrides the parent method.' },
            { zh: '父类有一个 name 字段（protected 让子类能直接访问）、构造器把名字存进去，speak() 返回 name + " makes a sound"；子类构造器第一行 super(name)，重写 speak() 返回 name + " barks"，加上 @Override 注解；main 里 Animal a = new Dog("Rex"); System.out.println(a.speak()); 输出 Rex barks。', en: 'Parent: a name field (protected so the subclass can read it directly), a constructor that stores the name, and speak() returning name + " makes a sound"; subclass: super(name) as the first line, an overridden speak() returning name + " barks" with @Override; in main: Animal a = new Dog("Rex"); System.out.println(a.speak()); printing Rex barks.' },
            { zh: '完整写法：`Animal a = new Dog("Rex"); System.out.println(a.speak());`。变量类型是 Animal，实际对象是 Dog，运行时 Java 看实际对象去调用 Dog 的 speak()——这就是多态。', en: 'Full answer: `Animal a = new Dog("Rex"); System.out.println(a.speak());`. The variable type is Animal but the actual object is Dog, so at runtime Java calls Dog speak() — that is polymorphism.' },
          ],
          solution: 'public class Main {\n    public static void main(String[] args) {\n        Animal a = new Dog("Rex");\n        System.out.println(a.speak());\n    }\n}\n\nclass Animal {\n    protected String name;\n    public Animal(String name) {\n        this.name = name;\n    }\n    public String speak() {\n        return name + " makes a sound";\n    }\n}\n\nclass Dog extends Animal {\n    public Dog(String name) {\n        super(name);\n    }\n    @Override\n    public String speak() {\n        return name + " barks";\n    }\n}\n',
          solutionNote: { zh: '程序用父类 Animal、子类 Dog 展现继承与多态：父类持有 name 与通用叫声，Dog extends Animal，构造器第一行 super(name) 把名字上交给父类，重写 speak() 返回 "barks"。main 用 Animal 类型声明变量、new Dog("Rex")，运行时 JVM 看实际对象是 Dog、于是调 Dog 重写的 speak()，输出 Rex barks。它正确的关键在于子类构造器第一行必须 super(name)（父类没有无参构造器时会编译报错）、重写方法上 @Override 帮编译器抓错、变量声明类型与实际类型不同时按实际类型分派方法。也可以让 Dog 自己再存一个 name 字段不去 super，但那样就丢掉继承「复用父类数据」的真正用意。', en: 'The program uses parent Animal and child Dog to demonstrate inheritance and polymorphism: the parent holds the name and the generic sound; Dog extends Animal, the constructor calls super(name) on the first line to hand the name up to the parent, and overrides speak() to return "barks". main declares an Animal variable, builds new Dog("Rex"), and at runtime the JVM sees the actual object is Dog and dispatches Dog speak(), printing Rex barks. It passes only because the child constructor must start with super(name) (the parent has no no-arg constructor and the compiler would reject otherwise), @Override catches signature mistakes, and dynamic dispatch runs the actual object method even when the variable type is the parent. You could make Dog hold its own name field and skip super, but that throws away the "reuse parent data" point of inheritance.' },
        },
      ],
    },

    // ================= 11. 文件 IO =================
    {
      id: 'files',
      title: { zh: '文件 IO', en: 'File I/O' },
      difficulty: 3,
      lecture: {
        zh: `## 这节课学什么

把数据**写进文件、再读回来**：程序关掉后数据依然在。学完你能完成「写入 → 读取 → 处理」的完整流程。

## 文件 IO 是什么

程序里的数据（变量、数组）住在**内存**里——程序一结束就**全部消失**。文件是**硬盘上的持久仓库**：写进去的东西，程序关了、电脑重启了都还在。IO 就是 **I**nput/**O**utput——读文件是「进」，写文件是「出」。

打个比方：内存是你办公桌上的草稿纸（快，但下班就扔）；文件是档案柜（拿取慢一点，但永久保存）。本课做的就是「把草稿归档进档案柜、再取出来」的流程。

Java 读写文件还要面对一个现实问题：文件可能不存在、磁盘可能满——这类意外在 Java 里叫**异常**。最省事的写法是在 main 后面加 \`throws Exception\`，意思是「可能出的问题我先不处理，向上抛」。本课先用这种写法，异常细节以后再学。

## 怎么写

写文件用 \`PrintWriter\`（打印方法用法和 \`System.out\` 一样）：

\`\`\`java
import java.io.PrintWriter;

try (PrintWriter pw = new PrintWriter("note.txt")) {
    pw.println("Hello File");   // 写一行并换行
    pw.print("no newline");     // 不换行
}
\`\`\`

\`try (...)\` 叫 **try-with-resources**：大括号结束时**自动关闭文件**，不用手动 \`close()\`，中途出错也不会漏关。

读文件用 \`Files\` 工具类（JDK 11+）：

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Paths;

String text = Files.readString(Paths.get("note.txt"));        // 整个文件 → 一个字符串
List<String> lines = Files.readAllLines(Paths.get("note.txt")); // 按行 → List
\`\`\`

写文件也有对应的 \`Files.writeString(路径, 内容)\`。用相对路径时，相对的是**程序运行目录**。

## 逐行读懂示例

本课示例：

\`\`\`java
try (PrintWriter pw = new PrintWriter("demo.txt")) {
    pw.println("apple");      // 写入第一行
    pw.println("banana");     // 写入第二行
}                              // 大括号结束：文件自动关闭，数据落盘

for (String line : Files.readAllLines(Paths.get("demo.txt"))) {
    System.out.println(line); // 逐行读回并打印：apple、banana
}
\`\`\`

顺序很重要：**先写后读**。写完立刻关（try 块结束自动做），数据才完整地落在文件里，读回来才不丢。

## 新手常犯的错误

- **忘 import**：用 \`Files\`、\`PrintWriter\` 没 import → 报错「找不到符号」。按编辑器提示补上 import
- **先读后写**：文件还不存在就 \`readString\` → 抛 \`NoSuchFileException\`。顺序必须先写后读
- **忘了 try-with-resources 或 close**：小文件常「碰巧没事」，但数据可能没刷盘 → 统一用 \`try (...)\` 写法
- **路径写死反斜杠**：Windows 的 \`"a\\b"\` 在字符串里要转义、容易错 → 用正斜杠 \`"a/b"\` 或 \`Paths.get("a", "b")\`

## 小结

- \`PrintWriter\` 写；\`Files.readString/readAllLines\` 读；\`Files.writeString\` 写
- \`try (...)\` 自动关闭资源，文件操作标配
- \`throws Exception\` 先当「免死金牌」用着，异常细节后续课讲
- 记住顺序：先写后读`,
        en: `## What you'll learn in this lesson

Persist data by **writing it to a file and reading it back**: the data survives after the program exits. After this lesson you can complete the full "write → read → process" pipeline.

## What is file I/O?

Data inside a program (variables, arrays) lives in **memory** — the moment the program ends it **all vanishes**. A file is **durable storage on disk**: what you write stays there through program exits and reboots. IO stands for **I**nput/**O**utput — reading a file is input, writing one is output.

The analogy: memory is scratch paper on your desk (fast, but thrown away when you leave); a file is a filing cabinet (slower to reach, but permanent). This lesson is exactly the workflow of filing the scratch paper into the cabinet and retrieving it later.

Java must also face one practical wrinkle: files may not exist, disks may fill up — such surprises are called **exceptions**. The easiest approach is adding \`throws Exception\` after main, meaning "I won't handle possible problems here; I'll let them bubble up". We use this style for now and study exceptions properly later.

## How to write it

Write with \`PrintWriter\` (its print methods work just like \`System.out\`):

\`\`\`java
import java.io.PrintWriter;

try (PrintWriter pw = new PrintWriter("note.txt")) {
    pw.println("Hello File");   // write a line with a newline
    pw.print("no newline");     // without a newline
}
\`\`\`

The \`try (...)\` form is **try-with-resources**: when the block ends the file is **closed automatically** — no manual \`close()\`, and no leaked handles even if an error occurs midway.

Read with the \`Files\` utility class (JDK 11+):

\`\`\`java
import java.nio.file.Files;
import java.nio.file.Paths;

String text = Files.readString(Paths.get("note.txt"));          // whole file → one String
List<String> lines = Files.readAllLines(Paths.get("note.txt")); // per line → a List
\`\`\`

For writing there is the matching \`Files.writeString(path, content)\`. A relative path is resolved against the **program's working directory**.

## Reading the example line by line

This lesson's example:

\`\`\`java
try (PrintWriter pw = new PrintWriter("demo.txt")) {
    pw.println("apple");      // write the first line
    pw.println("banana");     // write the second line
}                              // block ends: the file closes itself, data lands on disk

for (String line : Files.readAllLines(Paths.get("demo.txt"))) {
    System.out.println(line); // read back line by line: apple, banana
}
\`\`\`

Order matters: **write first, then read**. The file is closed right after writing (automatic at the end of the try block), so the data is fully on disk before you read it back.

## Common beginner mistakes

- **Missing imports**: using \`Files\` or \`PrintWriter\` without importing → error \`cannot find symbol\`. Let your editor add the import
- **Reading before writing**: \`readString\` on a nonexistent file → throws \`NoSuchFileException\`. Always write first
- **Skipping try-with-resources or close**: small files often "happen to work", but data may never be flushed → use the \`try (...)\` form consistently
- **Hard-coding backslash paths**: Windows \`"a\\b"\` needs escaping in a string and is error-prone → use forward slashes \`"a/b"\` or \`Paths.get("a", "b")\`

## Summary

- \`PrintWriter\` writes; \`Files.readString/readAllLines\` reads; \`Files.writeString\` writes
- \`try (...)\` closes resources automatically — the standard form for file work
- Treat \`throws Exception\` as a temporary free pass; exceptions get a lesson of their own
- Remember the order: write before you read`,
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
          hints: [
            { zh: '这题练的是「写文件 + 读文件」的完整闭环。先想清楚：用什么工具写、用什么工具读？写完怎么确保数据真的落盘？', en: 'This exercise trains the full "write file + read file" loop. First think: which tools write and read? How do you make sure the written data actually lands on disk?' },
            { zh: '第一步用 PrintWriter 把字符串写进 test.txt（用 try-with-resources 保证自动关闭）；第二步用 Files.readString 把同一文件读回成字符串；第三步把字符串交给 println。', en: 'Step one: use PrintWriter to write the string into test.txt (use try-with-resources to guarantee auto-close). Step two: use Files.readString to read the same file back into a String. Step three: hand the String to println.' },
            { zh: '`new PrintWriter("文件路径")` 创建写入器；`pw.print(内容);` 写入字符串（不带换行）；`Files.readString(Paths.get("文件路径"))` 读回整个文件为一个 String。', en: '`new PrintWriter("path")` creates the writer; `pw.print(content);` writes the string without a newline; `Files.readString(Paths.get("path"))` reads the whole file back as one String.' },
            { zh: 'try 块里写 `pw.print("Hello File");`，大括号结束自动关闭；接着 `String content = Files.readString(Paths.get("test.txt"));`，最后 `System.out.println(content);`。易错点：文件名 "test.txt" 两处必须完全一致；用 print（不换行）而不是 println，避免读回时多出多余换行；需要的 import 已在 starter 中写好。', en: 'Inside the try block write `pw.print("Hello File");`, the closing brace auto-closes; then `String content = Files.readString(Paths.get("test.txt"));`, and finally `System.out.println(content);`. Watch out: the file name "test.txt" must match exactly in both places; use print (no newline), not println, so the read-back has no extra newline; the needed imports are already in the starter.' },
            { zh: '完整写法：`try (PrintWriter pw = new PrintWriter("test.txt")) { pw.print("Hello File"); } String content = Files.readString(Paths.get("test.txt")); System.out.println(content);`，输出 Hello File（println 自己补换行）。', en: 'Full answer: `try (PrintWriter pw = new PrintWriter("test.txt")) { pw.print("Hello File"); } String content = Files.readString(Paths.get("test.txt")); System.out.println(content);`, printing Hello File (println supplies the newline).' },
          ],
          solution: 'import java.io.PrintWriter;\nimport java.nio.file.Files;\nimport java.nio.file.Paths;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        try (PrintWriter pw = new PrintWriter("test.txt")) {\n            pw.print("Hello File");\n        }\n        String content = Files.readString(Paths.get("test.txt"));\n        System.out.println(content);\n    }\n}\n',
          solutionNote: { zh: '程序用 PrintWriter 把 "Hello File" 写进 test.txt，try-with-resources 自动关闭文件保证数据落盘；再用 Files.readString 读回整个文件作为 String，最后 println 输出。它正确的关键在于文件名 "test.txt" 两处必须完全一致、用 print（不换行）而非 println 写文件——这样读回时只有一行内容，println 再补上题目期望的换行；try(...) 让文件一定落盘，不会出现"写了但没刷盘"的丢数据问题。也可以把读回写在一行 System.out.println(Files.readString(...))，但中间变量 content 更直观、便于以后再加工。', en: 'The program uses PrintWriter to write "Hello File" into test.txt; try-with-resources auto-closes the file so the data is flushed to disk. Then Files.readString reads the entire file back as a String, and println prints it. It passes because the file name "test.txt" must match exactly in both spots, the file is written with print (no newline) so the read-back contains exactly one line and println adds the trailing newline; try(...) guarantees the file is flushed, avoiding "written but not flushed" data loss. You could inline the read into System.out.println(Files.readString(...)), but the intermediate variable content reads more clearly and leaves room for further processing.' },
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
          hints: [
            { zh: '这题练的是「一次写整段文字 + 按行读回 + 求长度」的组合拳。先想清楚：用什么工具一次写多行？读回来的是字符串列表还是单行字符串？', en: 'This exercise trains the combination "write a chunk of text at once + read back line by line + compute length". First think: which tool writes many lines in one shot? Does the read-back return a list of strings or a single string?' },
            { zh: '第一步用 Files.writeString 一次写完整段（换行用 \\n 包含在字符串里）；第二步用 Files.readAllLines 读回一个字符串列表（自动剥掉换行符）；第三步用增强 for 遍历列表，每行打印一次长度。', en: 'Step one: use Files.writeString to write the whole text at once (newlines are part of the string as \\n). Step two: Files.readAllLines returns a list of strings (line breaks are stripped automatically). Step three: walk the list with an enhanced for and print each line length.' },
            { zh: '`Files.writeString(Paths.get("fruits.txt"), "内容\\n...")` 一次写；`Files.readAllLines(...)` 返回 `List<String>`；`String.length()` 求每行字符数。', en: '`Files.writeString(Paths.get("fruits.txt"), "text\\n...")` writes in one shot; `Files.readAllLines(...)` returns a `List<String>`; `String.length()` gives each line character count.' },
            { zh: '先 `Files.writeString(Paths.get("fruits.txt"), "apple\\nbanana\\ncherry\\n");`，再 `List<String> lines = Files.readAllLines(Paths.get("fruits.txt"));`，再用 `for (String line : lines) { System.out.println(line.length()); }`。易错点：换行必须写成 \\n 而不是真换行；List<String> 的 <String> 不能省，否则编译器警告；line.length() 带括号——String 的 length 是方法，不是数组那样的属性。', en: 'First `Files.writeString(Paths.get("fruits.txt"), "apple\\nbanana\\ncherry\\n");`, then `List<String> lines = Files.readAllLines(Paths.get("fruits.txt"));`, then `for (String line : lines) { System.out.println(line.length()); }`. Watch out: newlines must be written as \\n, not as a real line break; the <String> on List cannot be omitted or the compiler warns; line.length() uses parentheses — String length is a method, not a field like arrays.' },
            { zh: '完整写法：`Files.writeString(Paths.get("fruits.txt"), "apple\\nbanana\\ncherry\\n"); List<String> lines = Files.readAllLines(Paths.get("fruits.txt")); for (String line : lines) { System.out.println(line.length()); }`，输出 5、6、6。', en: 'Full answer: `Files.writeString(Paths.get("fruits.txt"), "apple\\nbanana\\ncherry\\n"); List<String> lines = Files.readAllLines(Paths.get("fruits.txt")); for (String line : lines) { System.out.println(line.length()); }`, printing 5, 6, 6.' },
          ],
          solution: 'import java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        Files.writeString(Paths.get("fruits.txt"), "apple\\nbanana\\ncherry\\n");\n        List<String> lines = Files.readAllLines(Paths.get("fruits.txt"));\n        for (String line : lines) {\n            System.out.println(line.length());\n        }\n    }\n}\n',
          solutionNote: { zh: '程序用 Files.writeString 一次写入带 \\n 分隔的三行水果名，再用 Files.readAllLines 读回一个 List<String>，最后用增强 for 遍历每行调用 length() 打印字符数。它正确的关键在于写入时换行用 \\n 转义（不是真的换行字符），读回的 List 自动剥掉换行符所以每行是纯名字、长度就是字符个数；String 的 length() 带括号（区别于数组的 length 属性）。也可以用 Files.write 配合包含换行的 List<String> 写出，再 readAllLines，效果一致但更繁琐。', en: 'The program uses Files.writeString to write three lines separated by \\n in one shot, then Files.readAllLines reads them back as a List<String>, and an enhanced for walks each line calling length() to print the character count. It passes because newlines in the written text are the escape \\n (not a real line break), the List strips the newlines so each entry is the bare name and length() returns the character count, and String length() uses parentheses (unlike the array length field). You could instead use Files.write with a List<String> of lines, then readAllLines — same result, slightly more code.' },
        },
      ],
    },
  ],
};