// completions.js — 各语言的补全词表（关键字 + 常用内建/标准函数名）
// 供编辑器代码补全使用。词条都是"纯标识符"：用户选中后继续打括号，体验自然。

export const WORDS = {
  python: [
    // 关键字
    'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def',
    'del', 'elif', 'else', 'except', 'False', 'finally', 'for', 'from', 'global',
    'if', 'import', 'in', 'is', 'lambda', 'None', 'nonlocal', 'not', 'or', 'pass',
    'raise', 'return', 'True', 'try', 'while', 'with', 'yield',
    // 常用内建
    'print', 'input', 'len', 'int', 'float', 'str', 'bool', 'list', 'dict', 'set',
    'tuple', 'range', 'sum', 'min', 'max', 'sorted', 'enumerate', 'zip', 'map',
    'filter', 'abs', 'round', 'open', 'format', 'type', 'isinstance', 'split',
    'join', 'strip', 'append', 'pop', 'remove', 'keys', 'values', 'items', 'get',
    'upper', 'lower', 'end', 'sep', 'error',
  ],
  c: [
    // 关键字
    'auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do', 'double',
    'else', 'enum', 'extern', 'float', 'for', 'goto', 'if', 'int', 'long', 'register',
    'return', 'short', 'signed', 'sizeof', 'static', 'struct', 'switch', 'typedef',
    'union', 'unsigned', 'void', 'volatile', 'while',
    // 常用标准库函数
    'main', 'printf', 'scanf', 'puts', 'putchar', 'getchar', 'gets', 'fgets',
    'fopen', 'fclose', 'fprintf', 'fscanf', 'fread', 'fwrite', 'strlen', 'strcmp',
    'strcpy', 'strcat', 'strchr', 'strstr', 'malloc', 'free', 'calloc', 'realloc',
    'atoi', 'atof', 'exit',
  ],
  cpp: [
    // 关键字
    'alignas', 'alignof', 'and', 'asm', 'auto', 'bool', 'break', 'case', 'catch',
    'char', 'class', 'const', 'constexpr', 'continue', 'default', 'delete', 'do',
    'double', 'else', 'enum', 'explicit', 'export', 'extern', 'false', 'float',
    'for', 'friend', 'goto', 'if', 'inline', 'int', 'long', 'mutable', 'namespace',
    'new', 'noexcept', 'nullptr', 'operator', 'private', 'protected', 'public',
    'register', 'return', 'short', 'signed', 'sizeof', 'static', 'struct', 'switch',
    'template', 'this', 'throw', 'true', 'try', 'typedef', 'typeid', 'typename',
    'union', 'unsigned', 'using', 'virtual', 'void', 'volatile', 'while',
    // 常用标准库
    'main', 'cout', 'cin', 'endl', 'cerr', 'string', 'vector', 'size', 'push_back',
    'pop_back', 'begin', 'end', 'length', 'getline', 'printf', 'scanf', 'strlen',
    'strcmp', 'strcpy', 'malloc', 'free', 'std',
  ],
  java: [
    // 关键字
    'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
    'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum',
    'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements',
    'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package',
    'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp',
    'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient',
    'try', 'void', 'volatile', 'while', 'true', 'false', 'null',
    // 常用类型与对象
    'String', 'System', 'out', 'println', 'print', 'Main', 'main', 'args',
    'Integer', 'Double', 'Boolean', 'Math', 'Arrays', 'Scanner', 'length',
    'toString', 'equals', 'charAt', 'substring', 'toUpperCase', 'toLowerCase',
  ],
};

/** 语言 id → CodeMirror mode 名（供取 token / 绑定 hint） */
export const MODE_NAME = {
  python: 'python',
  c: 'text/x-csrc',
  cpp: 'text/x-c++src',
  java: 'text/x-java',
};
