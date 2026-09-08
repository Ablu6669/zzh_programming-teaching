# 编程语言学习工作台 / Polyglot Learning Workbench

Java · C · C++ · Python 四门语言的交互式学习网站：每个知识点配中英双语讲解与实战训练，代码写完直接在线运行并自动判题。

## 特性

- **四门语言 × 11 个知识点 × 2 道实战题**（共 88 题），从 Hello World 到文件 IO
- **在线运行**：基于 [Compiler Explorer (godbolt.org)](https://godbolt.org) 公共 API，无需注册、无后端
  - C (gcc 12.3) · C++ (gcc 12.3) · Python 3.12 · Java (JDK 21)
- **Python 代码逐步执行**（Pyodide 真 CPython 录播式可视化）：单步回放、调用栈分帧变量、stdout 同步；死循环自动截断（3000 步上限）
- **自动判题**：期望输出逐行比对（忽略行尾空格与末尾空行），失败时给出 stderr 排查线索
- **学习路径**：单列纵向时间轴节点图，前置知识点未全过关自动锁定后续节点
- **续学入口**：首页「继续上次学习」卡（保存到 localStorage）
- **中英双语**：全部 UI 与内容完整翻译，一键切换，`<html lang>` 自动同步
- **学习进度本地持久化**：localStorage 保存做题状态与代码草稿
- **PWA 离线支持**：service-worker 预缓存首页壳 + 同源静态，导航失败回落到 `offline.html`
- **暗色 / 亮色主题**（CSS 变量双主题）
- **零构建纯静态站**：原生 ES Modules + 自写 hash 路由，可直接部署 GitHub Pages

## 技术栈

- 原生 JavaScript（ES Modules），零框架、零构建步骤
- [CodeMirror 5](https://codemirror.net/5/)（自托管，失败时自动降级 textarea）
- 受限 Markdown 渲染器（自写 ~120 行，先转义后渲染，防 XSS）

## 目录结构

```
index.html            # SPA 唯一入口（含 PWA manifest / theme-color 引用）
style.css             # 全部样式（CSS 变量双主题）
manifest.webmanifest  # PWA 应用清单
service-worker.js     # 离线缓存（navigation network-first，静态 cache-first）
offline.html          # 离线回退页
favicon.svg / icon.svg # 应用图标（含 maskable 变体）
js/
  main.js             # 启动入口（注册 SW）
  router.js           # hash 路由
  store.js            # 极简全局状态
  i18n.js             # t() / pick() 翻译运行时（自动同步 <html lang>）
  content.js          # 内容访问层
  progress.js         # 进度 / 草稿 / 续学（localStorage）
  judge.js            # 输出比对判题
  mdrender.js         # 受限 Markdown 渲染
  runner/
    godbolt.js        # Godbolt 执行 API 封装（节流/缓存/错误分类）
    throttle.js       # 全局串行请求队列
  components/
    editor.js         # CodeMirror 编辑器（含降级）
    workspace.js      # 运行/判题/逐步执行面板
  views/
    homeView.js       # 语言选择首页（含「继续上次学习」卡）
    roadmapView.js    # 知识点路线图（单列纵向时间轴 + 解锁）
    topicView.js      # 知识点页（讲解/实战/演练场）
  stepper/
    trace.js          # Python 逐步执行录播驱动（Pyodide 懒加载单例）
    stepper.js        # 逐步执行回放面板（键盘 ←/→/Home/End）
content/              # 四门语言的教学内容（双语，共 88 题）
i18n/                 # UI 词典 zh.js / en.js
vendor/codemirror/    # 自托管 CodeMirror
tools/
  verify_content.mjs  # 用真实执行后端实测全部 88 题 solution
  check_i18n.mjs      # i18n 完整性三重校验（词典/引用/双语对）
  _batch2_check.mjs   # 88 题 hints×5 + solutionNote 双语自检
```

## 本地运行

```bash
# 任一静态服务器即可，例如：
npx serve .
# 或
python -m http.server 8000
```

> 注意：直接以 `file://` 打开会因 ES Modules 的 CORS 限制无法工作，需走 HTTP。

## 质量校验

```bash
node tools/check_i18n.mjs       # 词典键一致 / 引用完整 / 双语对非空
node tools/verify_content.mjs   # 在线实测全部 88 题 solution 与期望输出
node tools/_batch2_check.mjs <python|c|cpp|java>  # 单语言 22 题 hints×5 + solutionNote 自检
```

## 部署（GitHub Actions 自动发布）

仓库已内置 `.github/workflows/deploy.yml`：推送到 `main` 分支即自动发布。

1. GitHub 上新建空仓库（如 `polyglot-workbench`，**不要**勾选初始化 README）
2. 本地推送：
   ```bash
   git remote add origin https://github.com/<用户名>/<仓库名>.git
   git push -u origin main
   ```
3. 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**（部分仓库首次推送后会自动配置）
4. 约 1 分钟后访问 `https://<用户名>.github.io/<仓库名>/`

> 发版更新：改完代码提交推送即可；`index.html` 中 `?v=20260907` 版本号建议随发版递增以刷新缓存。

## 致谢

代码执行由 [Compiler Explorer](https://godbolt.org) 的公共 API 提供（Boost Software License）。请合理使用，勿高频滥用。
