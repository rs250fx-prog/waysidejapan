/**
 * 翻訳の下書き（translations-draft/<lang>/<cat>/<slug>.mdx）を、公開できる状態になった記事から src/content/<lang>/ へ移す。
 *
 *   node tools/sync-translations.mjs            … 確認だけ
 *   node tools/sync-translations.mjs --apply    … 移す
 *
 * 「公開できる」＝ 英語の原文にヒーロー画像（heroImage）があり、draft でも unlisted でもないこと。
 * 公開の日付は、移したあとに tools/schedule-publish.mjs --apply が英語に揃える（計画に載る順は --fill）。
 *
 * 移すときの書き換え：
 *   - translationStatus: machine → reviewed
 *   - hero で始まるキー（heroImage / heroAlt / heroBand ほか）を英語の原文から写す。
 *     heroAlt は翻訳が無いので英語のまま入れ、translations-draft/_alt-todo.json に記録する（あとで訳す）
 *
 * 実行は .github/workflows/daily-publish.yml（毎晩）と、手元から。同じ記事を二度移さない（移した先があれば飛ばす）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/* 公開している言語。config.ts は import せず文字で読む（CI の Node が .ts を読めなくても落ちないように） */
const configText = (() => { try { return fs.readFileSync(path.join(process.env.SYNC_ROOT ?? path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), 'src/config.ts'), 'utf8'); } catch { return ''; } })();
const PUBLISHED = (configText.match(/export const LOCALES[^=]*=\s*\[([^\]]*)\]/)?.[1] ?? '').match(/'([^']+)'/g)?.map((s) => s.slice(1, -1)) ?? null;

const root = process.env.SYNC_ROOT ?? path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const apply = process.argv.includes('--apply');
const draftRoot = path.join(root, 'translations-draft');
const contentRoot = path.join(root, 'src/content');
const todoPath = path.join(draftRoot, '_alt-todo.json');

const split = (t) => {
  const m = t.match(/^---\r?\n([\s\S]*?)\r?\n---(\r?\n[\s\S]*)?$/);
  return m ? { fm: m[1], body: m[2] ?? '', nl: t.includes('\r\n') ? '\r\n' : '\n' } : null;
};
const heroLines = (fm) => fm.split(/\r?\n/).filter((l) => /^hero\w*:/.test(l));

if (!fs.existsSync(draftRoot)) process.exit(0);
const langs = fs
  .readdirSync(draftRoot, { withFileTypes: true })
  .filter((e) => e.isDirectory() && !e.name.startsWith('_') && (!PUBLISHED || PUBLISHED.includes(e.name))) /* 公開している言語だけ */
  .map((e) => e.name);

const todo = fs.existsSync(todoPath) ? JSON.parse(fs.readFileSync(todoPath, 'utf8')) : [];
let moved = 0;
const skipped = new Map();

for (const lang of langs) {
  const langDir = path.join(draftRoot, lang);
  for (const cat of fs.readdirSync(langDir, { withFileTypes: true })) {
    if (!cat.isDirectory() || cat.name.startsWith('_')) continue;
    for (const f of fs.readdirSync(path.join(langDir, cat.name))) {
      if (!/\.mdx?$/.test(f) || f.startsWith('_')) continue;
      const draft = path.join(langDir, cat.name, f);
      const dst = path.join(contentRoot, lang, cat.name, f);
      if (fs.existsSync(dst)) continue;
      const enFile = ['.mdx', '.md'].map((e) => path.join(contentRoot, 'en', cat.name, f.replace(/\.mdx?$/, e))).find(fs.existsSync);
      if (!enFile) { skipped.set('英語の原文が無い', (skipped.get('英語の原文が無い') ?? 0) + 1); continue; }
      const en = split(fs.readFileSync(enFile, 'utf8'));
      if (!en || !/^heroImage:/m.test(en.fm) || /^draft:\s*true/m.test(en.fm) || /^unlisted:\s*true/m.test(en.fm)) {
        skipped.set('英語にヒーローが無い', (skipped.get('英語にヒーローが無い') ?? 0) + 1);
        continue;
      }
      const tr = split(fs.readFileSync(draft, 'utf8'));
      if (!tr) throw new Error(`frontmatter が読めない: ${draft}`);
      const nl = tr.nl;
      const keep = tr.fm.split(/\r?\n/).filter((l) => !/^hero\w*:/.test(l) && !/^translationStatus:/.test(l));
      const fm = [...keep, 'translationStatus: reviewed', ...heroLines(en.fm)].join(nl);
      const out = `---${nl}${fm}${nl}---${tr.body}`;
      moved++;
      console.log(`${apply ? '移した' : '移す'}: ${lang}/${cat.name}/${f}`);
      if (apply) {
        fs.mkdirSync(path.dirname(dst), { recursive: true });
        fs.writeFileSync(dst, out);
        if (/^heroAlt:/m.test(en.fm)) todo.push({ lang, cat: cat.name, slug: f.replace(/\.mdx?$/, '') });
      }
    }
  }
}
if (apply && moved) fs.writeFileSync(todoPath, JSON.stringify(todo, null, 1) + '\n');
console.log(`sync-translations: ${apply ? '移した' : '移す予定'} ${moved} 本${[...skipped].map(([k, v]) => ` / ${k} ${v}`).join('')}`);
