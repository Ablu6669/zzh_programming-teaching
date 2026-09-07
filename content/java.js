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
            { zh: '程序要「开口说话」。回想一下讲解里，Java 用哪条语句能让程序输出一行文字？这句话应该写在 main 方法的那对大括号之间。', en: 'The program needs to speak. From the lecture, which Java statement prints one line of text? It should sit between the braces of main.' },
            { zh: '输出一行用 System.out.println(内容)。把要说的内容用英文双引号包住。注意 System 的 S 要大写，句末分号不能漏。', en: 'Print one line with System.out.println(content). Wrap what you want to say in double quotes. Capital S in System, and don\'t forget the trailing semicolon.' },
            { zh: '在 main 的大括号里写一行 System.out.println("Hello, World!"); —— 引号、大写、逗号、感叹号、分号都要和题目完全一致。', en: 'Inside main\'s braces, write one line: System.out.println("Hello, World!"); — match the quotes, capitalization, comma, exclamation mark, and semicolon exactly.' },
          ],
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
          hints: [
            { zh: '屏幕上要出现两行字。想一想：想让程序说出两行话，需要写几条打印语句？它们之间的先后顺序和输出的先后顺序有什么关系？', en: 'Two lines of text should appear on the screen. Think: how many print statements are needed to make the program speak twice? How does their order relate to the order of the output?' },
            { zh: '每条打印语句独占一行：System.out.println(内容)，内容用英文双引号包住。共写两条，第一条对应第一行，第二条对应第二行。注意 System 的 S 要大写，句末分号不能漏。', en: 'Each print statement takes one line of code: System.out.println(content), with the content wrapped in double quotes. Write two of them — the first produces the first line, the second produces the second line. Capital S in System, and do not forget the semicolons.' },
            { zh: '依次写 System.out.println("Hello, Java"); 和 System.out.println("I am learning"); —— 两条语句的顺序不能颠倒，引号内的文字、大小写、逗号都要和题目完全一致。', en: 'Write System.out.println("Hello, Java"); then System.out.println("I am learning"); — the order cannot be swapped, and the text inside the quotes, the capitalization, and the comma must match the problem exactly.' },
          ],
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
            { zh: '面积等于宽乘以高。宽和高这两个变量已经准备好了：想一想，怎样让程序把这两个数相乘的结果显示出来？', en: 'Area equals width times height. The two variables are already there: think about how to make the program show the result of multiplying them.' },
            { zh: '打印语句可以直接打印一个算式的结果：System.out.println(表达式)。注意乘号不是 ×，而是键盘上的另一个符号——想一想是哪个。句末分号不能漏。', en: 'The print statement can print the result of an expression directly: System.out.println(expression). Note the multiplication sign is not × but another symbol on the keyboard — recall which one. Do not forget the trailing semicolon.' },
            { zh: '在 main 里写一行 System.out.println(width * height); 即可输出 28。变量名 width、height 要与已定义的完全一致，乘号两侧有无空格都可以。', en: 'Write one line in main: System.out.println(width * height); which prints 28. The variable names width and height must match the declared ones exactly; spaces around the multiplication sign are optional.' },
          ],
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
          hints: [
            { zh: '引号包住的 2026 目前只是文字，文字没法直接和数字相加。回想讲解里：哪个现成工具能把「长得像整数的文字」变成真正的整数？', en: 'The 2026 in quotes is just text right now, and text cannot be added to a number directly. From the lecture: which ready-made tool turns "integer-looking text" into a real integer?' },
            { zh: 'Integer.parseInt(字符串) 把字符串转成 int。先把转换结果存进一个 int 变量，再把转换后的数字加 4 并打印。注意 Integer 的 I 要大写。', en: 'Integer.parseInt(string) turns a String into an int. Store the converted result in an int variable first, then add 4 and print it. Mind the capital I in Integer.' },
            { zh: '写 int n = Integer.parseInt(s); 然后输出 System.out.println(n + 4);，结果为 2030。两处分号都不能少，s 要与已定义的变量名一致。', en: 'Write int n = Integer.parseInt(s); then output System.out.println(n + 4);, which gives 2030. Both semicolons are required, and s must match the declared variable name.' },
          ],
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
            { zh: '一分钟有 60 秒。想一想：总秒数里包含多少个完整的 60？除不尽剩下的「零头」又是多少？这两个问题分别对应哪种运算？', en: 'There are 60 seconds in a minute. Think: how many whole 60s fit inside the total seconds, and what is the leftover remainder? Which operation answers each question?' },
            { zh: '整数除法 total / 60 得到完整分钟数，取余 total % 60 得到剩余秒数，两个结果都是整数。题目要求每行一个输出，所以写两条打印语句，先分钟后秒数，顺序不能反。', en: 'Integer division total / 60 gives the whole minutes, and the remainder total % 60 gives the leftover seconds; both results are integers. The problem wants one value per line, so write two print statements — minutes first, then seconds.' },
            { zh: '两行输出：先 System.out.println(total / 60); 再 System.out.println(total % 60);，得到 62 和 55。注意 / 和 % 不能写反，两条语句都要以分号结尾。', en: 'Two lines: first System.out.println(total / 60); then System.out.println(total % 60);, producing 62 and 55. Do not swap / and %, and both statements must end with a semicolon.' },
          ],
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
          hints: [
            { zh: '这题的关键是「先交值还是先加一」。想一想：把两个加号写在变量后面和写在变量前面，分别在什么时机改变变量的值、交给打印语句的又是哪个值？', en: 'The key is "hand out the value first, or add one first". Think: with the two plus signs placed after the variable versus before it, when does the variable change, and which value reaches the print statement?' },
            { zh: '打印语句可以直接打印自增表达式的值。写两条打印语句：第一条用「先用旧值、之后才加一」的写法，第二条用「先加一、再交出新值」的写法。注意第一条执行完后变量的值已经被改变了。', en: 'The print statement can print the value of an increment expression directly. Write two print statements: the first uses the "old value first, add one afterwards" form, the second uses the "add one first, then hand out the new value" form. Note that the first statement has already changed the variable before the second runs.' },
            { zh: '依次输出 System.out.println(x++); 和 System.out.println(++x);。第一条打印 5，之后 x 变成 6；第二条先加 1 变 7 再打印 7。两个加号的位置千万别写反。', en: 'Print System.out.println(x++); then System.out.println(++x);. The first prints 5 and leaves x at 6; the second raises it to 7 before printing 7. Never reverse the position of the two plus signs.' },
          ],
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
            { zh: '五个分数段对应五个等级。想一想：判断应该从最高档往低走还是反过来？为什么命中某一档之后就不必再继续查下去？', en: 'Five score bands map to five grades. Think: should the check run from the highest band downward, or the other way? Why can you stop once a band matches?' },
            { zh: '用 if / else if / else 链：每个分支的条件形如 score >= 数字，阈值从高到低依次排列；每个分支里打印对应等级的一个字母，最后的 else 兜底。', en: 'Use an if / else if / else chain: each branch has a condition like score >= number, with thresholds in decreasing order; each branch prints one grade letter, and the final else is the fallback.' },
            { zh: '按阈值 90、80、70、60 依次写分支，分别打印 "A"、"B"、"C"、"D"，最后的 else 打印 "F"。字母必须大写并放进英文双引号；本例 score 是 85，输出 B。', en: 'Write branches for thresholds 90, 80, 70, 60 printing "A", "B", "C", "D" respectively, with the final else printing "F". Letters must be uppercase inside double quotes; here score is 85, so the output is B.' },
          ],
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
          hints: [
            { zh: '变量的取值只有固定的几种，每种对应一段固定输出。回想讲解里：哪种分支结构专门用来做「一个值对多种情况」的匹配？', en: 'The variable takes only a few fixed values, each with its own fixed output. From the lecture: which branching structure is built for matching one value against several cases?' },
            { zh: '在 switch (day) 的花括号里，每个 case 后写一个可能的取值，跟一条打印语句和一个 break（漏了会「穿透」到下一个分支继续执行），default 处理没列出的情况。', en: 'Inside the braces of switch (day), each case is followed by one possible value, one print statement, and a break (missing it falls through into the next case); default covers everything not listed.' },
            { zh: '写 case 1 到 case 4，分别打印 "Mon"、"Tue"、"Wed"、"Thu"，每个分支末尾都要 break；default 打印 "Other"。本例 day 是 4，输出 Thu——首字母大写、其余小写，不能有多余字符。', en: 'Write case 1 through case 4 printing "Mon", "Tue", "Wed", "Thu", each ending with a break; default prints "Other". Here day is 4, so the output is Thu — capital first letter, lowercase rest, no extra characters.' },
          ],
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
            { zh: '从 1 一直加到 100，交给循环去做。想一想：需要一个什么变量来「攒」每一圈的结果？它应该从几开始？循环结束后再做什么？', en: 'Let the loop do the adding from 1 all the way to 100. Think: which variable will "collect" the result of each lap? What should it start at? And what happens after the loop ends?' },
            { zh: '先声明一个累加器变量并初始化为 0；再用 for 循环让计数变量从 1 走到 100，循环体里每圈把计数变量加进累加器（加法赋值的运算符很好用）。循环结束后把累加器打印出来。', en: 'Declare an accumulator variable initialized to 0; then use a for loop to run a counter from 1 up to 100, adding the counter into the accumulator each lap (the add-and-assign operator is handy). After the loop, print the accumulator.' },
            { zh: '写 int sum = 0; for (int i = 1; i <= 100; i++) { sum += i; } 最后 System.out.println(sum); 输出 5050。注意循环条件是 <= 不是 <，题目也禁止用公式直接算。', en: 'Write int sum = 0; for (int i = 1; i <= 100; i++) { sum += i; } and finally System.out.println(sum); printing 5050. The loop condition is <= not <, and the problem forbids the closed-form formula.' },
          ],
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
          hints: [
            { zh: '奇数和偶数的区别在于除以 2 之后有没有余数。想一想：循环从 1 走到 10 的途中，怎样才能「遇到偶数就立刻跳到下一圈」？', en: 'Odd and even numbers differ by whether dividing by 2 leaves a remainder. Think: as the loop runs from 1 to 10, how do you "jump straight to the next lap" whenever the current number is even?' },
            { zh: 'for (int i = 1; i <= 10; i++) 的循环体里先判断：如果当前数是偶数（除以 2 余 0），就用 continue 立刻结束本轮；打印语句写在判断之后，就只对奇数执行了。', en: 'Inside for (int i = 1; i <= 10; i++), first check: if the current number is even (remainder 0 when divided by 2), use continue to end this lap immediately; place the print statement after the check so it runs only for odd numbers.' },
            { zh: '循环体里写 if (i % 2 == 0) continue; 然后另起一行 System.out.println(i);。输出 1、3、5、7、9，每行一个。注意 % 是取余符号、判断相等要用两个等号。', en: 'Inside the loop write if (i % 2 == 0) continue; then on a new line System.out.println(i);. The output is 1, 3, 5, 7, 9, one per line. Note that % is the remainder operator and equality needs two equal signs.' },
          ],
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
            { zh: '这题要做两件事：先造一个「给两个数就返回它们的和」的方法，再在主方法里用它并把结果显示出来。想一想：一个方法要写全哪几样——修饰符、返回类型、名字、参数？', en: 'Two jobs here: first build a method that takes two numbers and returns their sum, then call it from the main method and show the result. Think about what a method needs: modifiers, a return type, a name, parameters.' },
            { zh: '签名按题目照抄：public static int sum(int a, int b)，写在类里、main 的外面；方法体里用 return 把两数之和送回去。main 里调用这个方法，把返回值交给打印语句。', en: 'Copy the signature from the problem: public static int sum(int a, int b), placed inside the class but outside main; the body uses return to send back the sum of the two parameters. In main, call the method and hand the return value to a print statement.' },
            { zh: '类里写 public static int sum(int a, int b) { return a + b; }，main 里写 System.out.println(sum(7, 8)); 输出 15。注意方法名 sum 全小写，return 和分号都不能漏。', en: 'In the class write public static int sum(int a, int b) { return a + b; }; in main write System.out.println(sum(7, 8)); which prints 15. The method name sum is all lowercase, and neither the return keyword nor the semicolons can be omitted.' },
          ],
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
          hints: [
            { zh: '两个方法同名但参数个数不同，调用时编译器按「你传了几个参数」来选版本。想一想：两个数里挑最大怎么比？三个数呢？', en: 'The two methods share a name but differ in parameter count; the compiler picks the version by how many arguments you pass. Think: how do you pick the maximum of two numbers? And of three?' },
            { zh: '两个版本都写成 public static void printMax(参数列表)，只是一个列表里有两个 int、另一个有三个；方法体里比较出最大值后直接打印，不需要返回值。main 里按顺序调用两个版本。', en: 'Both versions are public static void printMax(parameter list) — one list holds two ints, the other three; the body computes the maximum and prints it directly, no return value needed. Call both versions from main in order.' },
            { zh: '两参数版可用三元表达式 a > b ? a : b 直接打印；三参数版设一个变量先记 a，再依次与 b、c 比较、更大就更新，最后打印。main 里依次调用 printMax(3, 9) 和 printMax(3, 9, 5)，两行都输出 9。', en: 'The two-argument version can print the ternary a > b ? a : b directly; the three-argument version keeps a variable starting at a, updates it whenever b or c is larger, then prints it. In main call printMax(3, 9) then printMax(3, 9, 5); both lines print 9.' },
          ],
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
            { zh: '总和、最大值、最小值这三件事可以在同一趟循环里顺手完成。想一想：需要先准备几个「记录本」变量？求和的从几开始？记最大、最小的又该初始化成什么？', en: 'Sum, max and min can all be gathered in one single pass through the loop. Think: how many "record book" variables do you need? What should the sum start at, and what should the max and min records be initialized to?' },
            { zh: '累加器从 0 开始；最大值、最小值都用数组的第一个元素初始化。循环里每遇到一个数做三件事：加进累加器、比当前最大值还大就更新最大值、比当前最小值还小就更新最小值。数组长度不用循环，直接读它的属性。', en: 'The accumulator starts at 0; initialize both the max and the min records to the first element of the array. For each number in the loop do three things: add it to the accumulator, update the max if it is larger, update the min if it is smaller. The length needs no loop — just read the array property.' },
            { zh: '声明 int sum = 0; int max = nums[0]; int min = nums[0]; 用 for (int n : nums) 边走边更新，最后按顺序四条 println 依次输出 sum、max、min 和 nums.length，即 108、42、4、6。', en: 'Declare int sum = 0; int max = nums[0]; int min = nums[0]; update them inside for (int n : nums), then print sum, max, min and nums.length with four println calls in order — 108, 42, 4, 6.' },
          ],
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
          hints: [
            { zh: '排序和「把数组变成带方括号的文字」都不用自己写循环——标准库里各有一个现成工具。回想讲解里是哪两个？', en: 'Neither sorting nor "turning the array into bracketed text" needs a hand-written loop — the standard library has a ready-made tool for each. Recall from the lecture which two they are.' },
            { zh: 'Arrays.sort(数组名) 原地排序；Arrays.toString(数组名) 返回 [1, 2, 3] 这种格式的字符串，直接交给打印语句即可。两者都来自 java.util，文件顶部的 import starter 已写好。', en: 'Arrays.sort(arrayName) sorts in place; Arrays.toString(arrayName) returns a string in the [1, 2, 3] format, ready to hand to a print statement. Both come from java.util, and the import at the top of the file is already in the starter.' },
            { zh: '两行：Arrays.sort(a); 然后 System.out.println(Arrays.toString(a));，输出 [1, 1, 2, 3, 4, 5, 6, 9]。方括号和「逗号加空格」的格式由工具自动生成，不要手工拼接。', en: 'Two lines: Arrays.sort(a); then System.out.println(Arrays.toString(a));, printing [1, 1, 2, 3, 4, 5, 6, 9]. The brackets and the comma-space formatting are generated by the tool — do not build them by hand.' },
          ],
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
            { zh: '两个字符串是分别创建的独立对象，内容却一模一样。想一想：判断「是不是同一个对象」和判断「内容是否相同」，用的是同一种比较方式吗？', en: 'The two strings are independent objects created separately, yet their contents are identical. Think: is judging "is it the same object" the same as judging "is the content equal"?' },
            { zh: '== 比较两个变量本身；比较内容要调用字符串的 equals 方法，形如 变量.equals(另一个变量)。把两个表达式分别交给打印语句，各输出一行 true 或 false。', en: '== compares the two variables themselves; comparing content requires calling the equals method on the string, shaped like variable.equals(other). Hand each expression to a print statement — each prints one line of true or false.' },
            { zh: '依次输出 System.out.println(a == b); 和 System.out.println(a.equals(b));。前者比较地址得 false，后者比较内容得 true。注意 equals 的拼写和后面的小括号。', en: 'Print System.out.println(a == b); then System.out.println(a.equals(b));. The former compares references and yields false; the latter compares content and yields true. Mind the spelling of equals and its trailing parentheses.' },
          ],
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
          hints: [
            { zh: '字符串本身不可变，想「加工」文字要借助讲解里介绍的那个可变工具，它自带反转功能。想一想：创建它、反转、再变回字符串，一共几步？', en: 'Strings are immutable; to "work on" text you need the mutable tool introduced in the lecture, which comes with a built-in reverse. Think: how many steps — create it, reverse it, then convert back to a string?' },
            { zh: '先用字符串 s 创建一个可变字符串对象，调用它的反转方法，再调用转回普通字符串的方法，最后交给打印语句。三步可以串成一链，也可以拆成几行写。', en: 'Create a mutable string object from s, call its reverse method, then call the method that converts back to a plain string, and hand the result to the print statement. The three steps can be chained or split across lines.' },
            { zh: '一行搞定：System.out.println(new StringBuilder(s).reverse().toString()); 输出 olleh。注意链式调用的顺序：先 new、再 reverse、最后 toString。', en: 'One line does it: System.out.println(new StringBuilder(s).reverse().toString()); prints olleh. Keep the chain order: new first, then reverse, then toString.' },
          ],
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
            { zh: '把 b 指向 a 这一步并没有复制数组——想一想：两个变量现在各自指向什么？改动其中一个，另一个「看到」的数组变了吗？', en: 'Pointing b at a did not copy the array — think: what do the two variables refer to now? If one is modified, does the array the other one "sees" change?' },
            { zh: '修改已经在 starter 里完成：通过 b 把第一个元素改成了 99。你只需把 a 的第一个元素打印出来；取数组元素用「变量名[下标]」，下标从 0 开始。', en: 'The modification is already done in the starter: the first element was changed to 99 through b. You only need to print the first element of a; array access uses "variableName[index]", and indexes start at 0.' },
            { zh: '在 TODO 处写 System.out.println(a[0]);。因为 b 和 a 指向同一个数组，a 的第一个元素已是 99，输出 99。注意下标是 0 不是 1。', en: 'At the TODO write System.out.println(a[0]); — since b and a point to the same array, the first element of a is already 99, so it prints 99. The index is 0, not 1.' },
          ],
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
          hints: [
            { zh: 's 目前没有指向任何对象。想一想：直接对它调用方法会发生什么？所以使用之前应该先做一次什么检查？', en: 's currently points at no object at all. Think: what happens if you call a method on it right away? So what check should you perform before using it?' },
            { zh: '用 if / else 两个分支：条件是「s 不为空」；成立时打印它的长度，否则打印 -1。两个分支各写一条打印语句，else 分支也不能漏。', en: 'Use an if / else with two branches: the condition tests that s is not null; when true print its length, otherwise print -1. Each branch gets one print statement, and the else branch must not be skipped.' },
            { zh: '写 if (s != null) { System.out.println(s.length()); } else { System.out.println(-1); }。本例 s 是 null，所以输出 -1。注意 -1 是数字，不要加引号。', en: 'Write if (s != null) { System.out.println(s.length()); } else { System.out.println(-1); }. Since s is null here, the output is -1. Note that -1 is a number and takes no quotes.' },
          ],
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
            { zh: '按题目把「图纸」补全：两个私有字段、一个接收两个参数的构造器、两个求值方法；然后在主方法里造一个对象并依次调用这两个方法。想一想：周长公式是什么？', en: 'Complete the "blueprint" as the problem requires: two private fields, a constructor taking two parameters, and two computing methods; then create an object in the main method and call both of them. Think: what is the perimeter formula?' },
            { zh: '类结构：class Rectangle { private int 字段一; private int 字段二; 构造器里 this.字段 = 参数; 两个方法分别 return 宽 * 高 和 return 2 * (宽 + 高); }。类写在同文件里 Main 的外面，且不能加 public。main 里 new 一个对象，分别打印两个方法的返回值。', en: 'Class skeleton: class Rectangle { private int fieldOne; private int fieldTwo; in the constructor this.field = parameter; the two methods return width * height and 2 * (width + height) respectively }. Place the class in the same file outside Main, without public. In main, create an object and print each return value.' },
            { zh: '定义 class Rectangle（不加 public，放 Main 之后）：构造器里 this.width = width; this.height = height;，area 返回 width * height，perimeter 返回 2 * (width + height)。main 里 Rectangle r = new Rectangle(3, 4); 依次 println(r.area()) 和 r.perimeter()，输出 12 和 14。', en: 'Define class Rectangle (no public, placed after Main): in the constructor this.width = width; this.height = height;; area returns width * height and perimeter returns 2 * (width + height). In main write Rectangle r = new Rectangle(3, 4); then println(r.area()) and r.perimeter() in order — 12 and 14.' },
          ],
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
          hints: [
            { zh: '父类管公共部分（名字和通用叫声），子类继承后改写自己的叫声。想一想：子类构造器怎么把名字交给父类？用父类类型接住子类对象时，调用的到底是谁的版本？', en: 'The parent holds what is common (the name and the generic sound); the child inherits and rewrites its own sound. Think: how does the child constructor pass the name up to the parent? When a parent-typed variable holds a child object, whose version actually runs?' },
            { zh: '父类里放一个受保护的 name 字段、构造器和通用的叫声方法；子类用 extends 继承，构造器第一行用 super 把名字传给父类，重写的方法上加 @Override 注解。main 里用父类类型声明变量、创建子类对象，再打印它的叫声。', en: 'The parent holds a protected name field, a constructor, and the generic sound method; the child uses extends, its constructor passes the name up with super on the first line, and the overridden method carries the @Override annotation. In main, declare a parent-typed variable, create the child object, then print its sound.' },
            { zh: '父类：构造器给 name 赋值，叫声方法返回 name + " makes a sound"；子类构造器第一行 super(name)，重写的方法返回 name + " barks"。main 里 Animal a = new Dog("Rex"); System.out.println(a.speak()); 输出 Rex barks——R 大写、中间一个空格、句末无标点。', en: 'Parent: the constructor assigns name and the sound method returns name + " makes a sound"; child: first line super(name), and the overridden method returns name + " barks". In main write Animal a = new Dog("Rex"); System.out.println(a.speak()); printing Rex barks — capital R, one space, no trailing punctuation.' },
          ],
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
            { zh: '任务分两步：先把一句话写进 test.txt，再把它原样读回来打印。回想讲解里：这两步分别用的是哪两个工具？写文件时别忘了「自动关闭」的写法。', en: 'The task has two steps: first write a sentence into test.txt, then read it back and print it verbatim. From the lecture: which two tools do these two jobs? Remember the auto-closing style when writing files.' },
            { zh: 'try (PrintWriter pw = new PrintWriter("test.txt")) 的花括号里用 pw.print(内容); 写入（注意用不带换行的方法，这样读回后只有一行）；再用 Files.readString(Paths.get("test.txt")) 读回字符串。需要的 import 已在 starter 里写好。', en: 'Inside the braces of try (PrintWriter pw = new PrintWriter("test.txt")) write with pw.print(content); (use the no-newline method so the read-back is a single line); then read it back with Files.readString(Paths.get("test.txt")). The needed imports are already in the starter.' },
            { zh: 'try 块里写 pw.print("Hello File");，然后 String content = Files.readString(Paths.get("test.txt")); 最后 System.out.println(content); 输出 Hello File。两处文件名必须完全一致，println 会补上换行。', en: 'Inside the try block write pw.print("Hello File");, then String content = Files.readString(Paths.get("test.txt")); and finally System.out.println(content); printing Hello File. The two file names must match exactly, and println supplies the newline.' },
          ],
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
          hints: [
            { zh: '先把三行水果名写进文件，再逐行读回来；输出的不是水果名本身，而是每个名字有几个字符。想一想：读回的结果是一个列表，该怎么逐个处理？', en: 'First write three fruit names into the file, then read them back line by line; print the character count of each name, not the fruit itself. Think: the read-back result is a list — how do you process it item by item?' },
            { zh: '用 Files.writeString(Paths.get("fruits.txt"), 内容) 一次写入整段文字（换行符要包含在字符串里）；Files.readAllLines 读回一个字符串列表，换行符已自动去掉。用增强 for 逐行遍历，对每行调用求长度的方法并打印。', en: 'Use Files.writeString(Paths.get("fruits.txt"), content) to write the whole text at once (newlines must be part of the string); Files.readAllLines returns a list of strings with the line breaks already stripped. Walk it with an enhanced for, calling the length method on each line and printing it.' },
            { zh: '先 Files.writeString(Paths.get("fruits.txt"), "apple\\nbanana\\ncherry\\n");（源码里换行写作 \\n），再 List<String> lines = Files.readAllLines(Paths.get("fruits.txt")); 循环里 System.out.println(line.length()); 输出 5、6、6。注意 <String> 不能少。', en: 'First Files.writeString(Paths.get("fruits.txt"), "apple\\nbanana\\ncherry\\n"); (in source code a newline is written \\n), then List<String> lines = Files.readAllLines(Paths.get("fruits.txt")); inside the loop System.out.println(line.length()); printing 5, 6, 6. Do not drop the <String>.' },
          ],
          solution: 'import java.nio.file.Files;\nimport java.nio.file.Paths;\nimport java.util.List;\n\npublic class Main {\n    public static void main(String[] args) throws Exception {\n        Files.writeString(Paths.get("fruits.txt"), "apple\\nbanana\\ncherry\\n");\n        List<String> lines = Files.readAllLines(Paths.get("fruits.txt"));\n        for (String line : lines) {\n            System.out.println(line.length());\n        }\n    }\n}\n',
        },
      ],
    },
  ],
};