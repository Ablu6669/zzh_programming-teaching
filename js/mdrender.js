// mdrender.js — 受限 Markdown 子集渲染（安全：先全文 HTML 转义）
// 支持：# ## ### 标题、段落、**bold**、`inline code`、
//       ```lang 围栏代码块、- 无序列表、1. 有序列表、> 引用、| 表格 |、换行 <br>

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function renderInline(s) {
  return s
    .replace(/`([^`]+)`/g, (_, c) => '<code>' + c + '</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function splitTableRow(line) {
  return line.replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
}

/** 渲染为 HTML 片段（输入已视为不可信文本，全部转义） */
export function renderMarkdown(src) {
  if (!src) return '';
  const lines = escapeHtml(String(src)).split(/\r?\n/);
  const out = [];
  let i = 0;
  let inList = null; // 'ul' | 'ol'

  const closeList = () => { if (inList) { out.push('</' + inList + '>'); inList = null; } };

  while (i < lines.length) {
    const line = lines[i];

    // 围栏代码块
    const fence = line.match(/^```\s*(\w*)\s*$/);
    if (fence) {
      closeList();
      const buf = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i])) { buf.push(lines[i]); i++; }
      i++; // 跳过闭合 ```
      out.push(
        '<div class="code-block-wrap"><pre><code>' + buf.join('\n') + '</code></pre></div>'
      );
      continue;
    }

    // 标题
    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      closeList();
      const level = h[1].length;
      out.push('<h' + level + '>' + renderInline(h[2]) + '</h' + level + '>');
      i++; continue;
    }

    // 引用
    if (/^&gt;\s?/.test(line)) {
      closeList();
      const buf = [];
      while (i < lines.length && /^&gt;\s?/.test(lines[i])) { buf.push(lines[i].replace(/^&gt;\s?/, '')); i++; }
      out.push('<blockquote>' + renderInline(buf.join(' ')) + '</blockquote>');
      continue;
    }

    // 表格：当前行含 | 且下一行是分隔行 |---|---|
    if (line.includes('|') && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(lines[i + 1])) {
      closeList();
      const header = splitTableRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitTableRow(lines[i])); i++;
      }
      out.push('<table><thead><tr>' + header.map((c) => '<th>' + renderInline(c) + '</th>').join('') +
        '</tr></thead><tbody>' +
        rows.map((r) => '<tr>' + r.map((c) => '<td>' + renderInline(c) + '</td>').join('') + '</tr>').join('') +
        '</tbody></table>');
      continue;
    }

    // 无序列表
    if (/^[-*]\s+/.test(line)) {
      if (inList !== 'ul') { closeList(); out.push('<ul>'); inList = 'ul'; }
      out.push('<li>' + renderInline(line.replace(/^[-*]\s+/, '')) + '</li>');
      i++; continue;
    }

    // 有序列表
    if (/^\d+[.)]\s+/.test(line)) {
      if (inList !== 'ol') { closeList(); out.push('<ol>'); inList = 'ol'; }
      out.push('<li>' + renderInline(line.replace(/^\d+[.)]\s+/, '')) + '</li>');
      i++; continue;
    }

    // 空行
    if (line.trim() === '') { closeList(); i++; continue; }

    // 段落（连续非空行合并）
    closeList();
    const buf = [];
    while (i < lines.length && lines[i].trim() !== '' &&
      !/^(#{1,3}\s|```|[-*]\s|\d+[.)]\s|&gt;\s?)/.test(lines[i]) &&
      !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(lines[i + 1]))) {
      buf.push(lines[i]); i++;
    }
    if (buf.length) out.push('<p>' + renderInline(buf.join('<br>')) + '</p>');
    else i++; // 防御：不匹配任何规则时前进防死循环
  }
  closeList();
  return out.join('\n');
}
