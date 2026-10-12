/**
 * docs/IMAGE-PROMPTS.md を、ブラウザで開いてコピーしやすいページにする。
 *
 *   node tools/prompts-page.mjs
 *
 * 出力は inbox/prompts-view/index.html（リポジトリに入れない）。
 * プロンプトと保存名にコピーボタン、記事ごとに「済」の印（このブラウザに記憶）を付ける。
 * 一覧を書き換えたら作り直す。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC = path.join(ROOT, 'docs', 'IMAGE-PROMPTS.md');
const OUT_DIR = path.join(ROOT, 'inbox', 'prompts-view');

const md = fs.readFileSync(SRC, 'utf8').replace(/\r\n/g, '\n');
const body = md.split('\n---\n').slice(1).join('\n---\n');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// 見出し（##）→ 記事（### url）→ 画像（**ヒーロー** → 保存名 `x` と直後のコードブロック）
const groups = [];
let group = null;
let article = null;
const lines = body.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let m;
  if ((m = /^## (.+)$/.exec(line))) {
    group = { title: m[1].trim(), articles: [] };
    groups.push(group);
  } else if ((m = /^### (\/en\/[^/\s]+\/[^/\s]+\/)(.*)$/.exec(line))) {
    article = { url: m[1], note: m[2].trim(), items: [] };
    (group ?? groups[groups.push({ title: '', articles: [] }) - 1]).articles.push(article);
  } else if ((m = /^\*\*(.+?)\*\* → 保存名 `([^`]+)`/.exec(line)) && article) {
    let j = i + 1;
    while (j < lines.length && lines[j].trim() !== '```') j++;
    let k = j + 1;
    const prompt = [];
    while (k < lines.length && lines[k].trim() !== '```') prompt.push(lines[k++]);
    article.items.push({ label: m[1], save: m[2], prompt: prompt.join('\n').trim() });
    i = k;
  }
}

// 記事の今の状態を見て、設定済みの画像に印を付ける。一覧から消し忘れても二重に作らないように。
// 記事が無くなっていたら（削除・改名）一覧から外す
const CONTENT = path.join(ROOT, 'src', 'content');
const gone = [];
for (const g of groups) {
  g.articles = g.articles.filter((a) => {
    const file = path.join(CONTENT, `${a.url.replace(/^\/|\/$/g, '')}.mdx`);
    if (!fs.existsSync(file)) {
      gone.push(a.url);
      return false;
    }
    const mdx = fs.readFileSync(file, 'utf8');
    const has = { hero: /^heroImage:/m.test(mdx), body: /<Figure\b|<PhotoBand\b[^>]*\bsrc=|!\[/.test(mdx) };
    for (const it of a.items) it.done = has[it.save.endsWith('-hero') ? 'hero' : 'body'];
    a.done = a.items.length > 0 && a.items.every((it) => it.done);
    return true;
  });
}

const total = groups.reduce((n, g) => n + g.articles.length, 0);
const left = groups.reduce((n, g) => n + g.articles.filter((a) => !a.done).length, 0);
const sections = groups
  .filter((g) => g.articles.length)
  .map(
    (g) => `<section><h2>${esc(g.title)}</h2>${g.articles
      .map(
        (a) => `<article data-url="${esc(a.url)}"${a.done ? ' data-auto-done' : ''}>
  <header><label><input type="checkbox" class="done"${a.done ? ' checked disabled' : ''}> <span class="url">${esc(a.url)}</span></label>${a.done ? '<span class="set">ページに設定済み</span>' : ''}${a.note ? `<span class="note">${esc(a.note)}</span>` : ''}</header>
  ${a.items
    .map(
      (it) => `<div class="item${it.done ? ' item-done' : ''}">
    <div class="row"><span class="kind">${esc(it.label)}</span>${it.done ? '<span class="set">設定済み</span>' : ''}
      <code class="save">${esc(it.save)}</code>
      <button data-copy="${esc(it.save)}">保存名をコピー</button>
      <button class="primary" data-copy="${esc(it.prompt)}">プロンプトをコピー</button></div>
    <p class="prompt">${esc(it.prompt)}</p>
  </div>`,
    )
    .join('\n')}
</article>`,
      )
      .join('\n')}</section>`,
  )
  .join('\n');

const html = `<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Image prompts</title>
<style>
  :root { --bg:#faf7f0; --card:#fffefa; --ink:#17161a; --muted:#6b645a; --line:#e2d9c8; --accent:#b8502e; }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--ink); font:15px/1.55 system-ui, sans-serif; }
  .top { position:sticky; top:0; z-index:2; background:var(--bg); border-bottom:1px solid var(--line); padding:12px 16px; display:flex; gap:16px; align-items:center; flex-wrap:wrap; }
  .top h1 { font-size:18px; margin:0; }
  .top .count { color:var(--muted); }
  .top label { color:var(--muted); }
  main { max-width:960px; margin:0 auto; padding:8px 16px 80px; }
  h2 { font-size:16px; margin:28px 0 8px; color:var(--accent); }
  article { background:var(--card); border:1px solid var(--line); border-radius:8px; padding:12px 14px; margin:10px 0; }
  article.is-done { opacity:.45; }
  body.hide-done article.is-done { display:none; }
  header { display:flex; gap:10px; align-items:baseline; flex-wrap:wrap; }
  .url { font-weight:600; }
  .note { color:var(--muted); font-size:13px; }
  .item { border-top:1px dashed var(--line); margin-top:10px; padding-top:10px; }
  .row { display:flex; gap:8px; align-items:center; flex-wrap:wrap; }
  .kind { font-weight:600; min-width:4em; }
  code.save { background:#f1ebe0; padding:2px 6px; border-radius:4px; }
  button { font:inherit; font-size:13px; padding:5px 10px; border:1px solid var(--line); background:#fff; border-radius:6px; cursor:pointer; }
  button.primary { background:var(--accent); border-color:var(--accent); color:#fff; }
  button.copied { background:#2f6b3a; border-color:#2f6b3a; color:#fff; }
  .prompt { margin:8px 0 0; color:var(--muted); font-size:13px; }
  .set { font-size:12px; font-weight:600; color:#2f6b3a; background:#e3efe4; padding:2px 8px; border-radius:10px; }
  .item-done { opacity:.5; }
</style></head>
<body>
<div class="top"><h1>Image prompts</h1><span class="count">残り ${left} 本／${total} 本</span>
  <label><input type="checkbox" id="hide"> 済を隠す</label>
  <span class="count">保存先：inbox/images/</span></div>
<main>${sections}</main>
<script>
  const KEY = 'wayside-prompts-done';
  let done = {};
  try { done = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(done)); } catch {} };
  document.querySelectorAll('article').forEach((a) => {
    const box = a.querySelector('.done');
    // ページに設定済みの記事は、記事の状態が正。手元の印より優先する
    if (a.hasAttribute('data-auto-done')) { a.classList.add('is-done'); return; }
    box.checked = !!done[a.dataset.url];
    a.classList.toggle('is-done', box.checked);
    box.addEventListener('change', () => { done[a.dataset.url] = box.checked; a.classList.toggle('is-done', box.checked); save(); });
  });
  const hide = document.getElementById('hide');
  hide.addEventListener('change', () => document.body.classList.toggle('hide-done', hide.checked));
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch {}
    const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select();
    const ok = document.execCommand('copy'); t.remove(); return ok;
  }
  document.addEventListener('click', async (e) => {
    const b = e.target.closest('button[data-copy]'); if (!b) return;
    const label = b.textContent;
    if (await copy(b.dataset.copy)) { b.classList.add('copied'); b.textContent = 'コピーしました'; setTimeout(() => { b.classList.remove('copied'); b.textContent = label; }, 1200); }
  });
</script>
</body></html>`;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'index.html'), html);
console.log(`inbox/prompts-view/index.html を書き出しました（残り ${left} 本／${total} 本）`);
for (const u of gone) console.log(`× 記事が無いので外しました：${u}（docs/IMAGE-PROMPTS.md からも消す）`);
