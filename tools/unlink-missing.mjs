/**
 * ビルド後に dist を走査し、存在しないページへの内部リンクを外す（文字は残す）。
 *
 * 予約公開・ヒーロー無し非公開・カテゴリ非表示のせいで、本文の手書きリンクの先が
 * まだ存在しないことがある。404 へのリンクを構造で防ぐための後処理。
 * 先の記事が公開された日のビルドで、リンクは自動的に戻る（原稿は書き換えない）。
 *
 * package.json の build から astro build の直後に呼ぶ。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');

const walk = (d) =>
  fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(d, e.name);
    return e.isDirectory() ? walk(p) : e.name.endsWith('.html') ? [p] : [];
  });

const exists = (href) => {
  const clean = decodeURIComponent(href.split(/[?#]/)[0]);
  if (/\.[a-z0-9]{2,5}$/i.test(clean)) return fs.existsSync(path.join(dist, clean));
  const base = path.join(dist, clean);
  return fs.existsSync(path.join(base, 'index.html')) || fs.existsSync(base + '.html');
};

// /en/ 以下のページだけを対象にする（/_astro や外部リンクには触らない）
const A = /<a\b([^>]*?)\shref="(\/en\/[^"]*)"([^>]*)>([\s\S]*?)<\/a>/g;

let removed = 0;
const missing = new Map();
for (const file of walk(dist)) {
  const html = fs.readFileSync(file, 'utf8');
  const out = html.replace(A, (whole, _pre, href, _post, inner) => {
    if (exists(href)) return whole;
    removed++;
    missing.set(href, (missing.get(href) ?? 0) + 1);
    return inner;
  });
  if (out !== html) fs.writeFileSync(file, out);
}
console.log(`unlink-missing: ${removed} 件のリンクを外した（先が未公開・未作成：${missing.size} ページ）`);
