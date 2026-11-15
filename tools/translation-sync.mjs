/**
 * 英語の記事を更新したとき、翻訳（ko / fr / es）が古くなったことを見つける。
 *
 *   node tools/translation-sync.mjs                 … 確認（古い翻訳・未翻訳の記事を一覧する。何も書かない）
 *   node tools/translation-sync.mjs --init          … 台帳に無い翻訳を、いまの英語の状態で登録する（初回・新しい翻訳を足したあと）
 *   node tools/translation-sync.mjs --accept ko/eat/ramen-kurume   … その翻訳を、いまの英語に追従済みとして登録する
 *   node tools/translation-sync.mjs --accept-all-of eat/ramen-kurume … 3言語まとめて
 *
 * 台帳：docs/translation-sync.json（{ "<lang>/<cat>/<slug>": "<翻訳したときの英語の指紋>" }）。
 * 指紋は、英語の原文から公開日・更新日・ヒーロー・translationStatus の行を除いたものの SHA-1。
 * つまり、本文・題・説明・FAQ・出典・料金などが変わったときだけ「古い」になる（予約公開の日付書き換えでは変わらない）。
 *
 * 古い翻訳の直し方：
 *   1. 一覧の記事を、その言語の担当に「英語の差分を反映して」と依頼する（translations-draft ではなく src/content の該当ファイルを直す）
 *   2. node tools/translation-sync.mjs --accept <lang>/<cat>/<slug> で台帳を更新する
 *
 * 終了コードは常に 0（CI を落とさない）。毎晩の daily-publish.yml が実行して、結果を Actions の要約に出す。
 */
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'src/content');
const draftRoot = path.join(root, 'translations-draft');
const ledgerPath = path.join(root, 'docs/translation-sync.json');
const args = process.argv.slice(2);

const configText = fs.readFileSync(path.join(root, 'src/config.ts'), 'utf8');
const LANGS = (configText.match(/export const LOCALES[^=]*=\s*\[([^\]]*)\]/)?.[1] ?? '')
  .match(/'([^']+)'/g)
  ?.map((s) => s.slice(1, -1))
  .filter((l) => l !== 'en') ?? [];

const SKIP_KEYS = /^(pubDate|updatedDate|hero\w*|translationStatus):/;
const fingerprint = (file) => {
  const t = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
  const m = t.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return crypto.createHash('sha1').update(t).digest('hex');
  const fm = m[1].split('\n').filter((l) => !SKIP_KEYS.test(l)).join('\n');
  return crypto.createHash('sha1').update(fm + '\n---\n' + m[2].trim()).digest('hex');
};
const findIn = (base, cat, slug) => ['.mdx', '.md'].map((e) => path.join(base, cat, slug + e)).find(fs.existsSync);

const ledger = fs.existsSync(ledgerPath) ? JSON.parse(fs.readFileSync(ledgerPath, 'utf8')) : {};
const save = () => fs.writeFileSync(ledgerPath, JSON.stringify(Object.fromEntries(Object.entries(ledger).sort()), null, 1) + '\n');

/** 英語の記事の一覧（cat/slug） */
const enArticles = [];
for (const cat of fs.readdirSync(path.join(contentRoot, 'en'))) {
  for (const f of fs.readdirSync(path.join(contentRoot, 'en', cat))) {
    if (/\.mdx?$/.test(f) && !f.startsWith('_')) enArticles.push([cat, f.replace(/\.mdx?$/, '')]);
  }
}
const enHero = (cat, slug) => /^heroImage:/m.test(fs.readFileSync(findIn(path.join(contentRoot, 'en'), cat, slug), 'utf8'));

// ---- 台帳の更新 ----
const acceptOne = (lang, cat, slug) => {
  const en = findIn(path.join(contentRoot, 'en'), cat, slug);
  if (!en) throw new Error(`英語の原文が無い: ${cat}/${slug}`);
  ledger[`${lang}/${cat}/${slug}`] = fingerprint(en);
};
if (args.includes('--init')) {
  let n = 0;
  for (const lang of LANGS) {
    for (const [cat, slug] of enArticles) {
      const key = `${lang}/${cat}/${slug}`;
      if (key in ledger) continue;
      if (findIn(path.join(contentRoot, lang), cat, slug) || findIn(path.join(draftRoot, lang), cat, slug)) { acceptOne(lang, cat, slug); n++; }
    }
  }
  save();
  console.log(`台帳に ${n} 件を登録した（合計 ${Object.keys(ledger).length}）`);
  process.exit(0);
}
const acc = args.indexOf('--accept');
if (acc >= 0) {
  const [lang, cat, slug] = args[acc + 1].split('/');
  acceptOne(lang, cat, slug);
  save();
  console.log(`追従済みにした: ${args[acc + 1]}`);
  process.exit(0);
}
const accAll = args.indexOf('--accept-all-of');
if (accAll >= 0) {
  const [cat, slug] = args[accAll + 1].split('/');
  for (const lang of LANGS) acceptOne(lang, cat, slug);
  save();
  console.log(`3言語とも追従済みにした: ${args[accAll + 1]}`);
  process.exit(0);
}

// ---- 確認 ----
const stale = [];
const unknown = [];
const untranslated = [];
for (const [cat, slug] of enArticles) {
  const en = findIn(path.join(contentRoot, 'en'), cat, slug);
  const now = fingerprint(en);
  for (const lang of LANGS) {
    const key = `${lang}/${cat}/${slug}`;
    const has = findIn(path.join(contentRoot, lang), cat, slug) || findIn(path.join(draftRoot, lang), cat, slug);
    if (!has) {
      if (cat !== 'rail') untranslated.push(key);
      continue;
    }
    if (!(key in ledger)) unknown.push(key);
    else if (ledger[key] !== now) stale.push(key);
  }
}
const out = [];
out.push(`## 翻訳の追従状況（${LANGS.join('・')}）`);
out.push(`- 古い翻訳（英語が更新された）：${stale.length} 件`);
for (const k of stale) out.push(`  - ${k}`);
out.push(`- 台帳に無い翻訳（--init で登録）：${unknown.length} 件`);
for (const k of unknown.slice(0, 20)) out.push(`  - ${k}`);
const need = untranslated.filter((k) => {
  const [, cat, slug] = k.split('/');
  return enHero(cat, slug);
});
out.push(`- 未翻訳（ヒーローがあり公開できる記事）：${need.length} 件`);
for (const k of need) out.push(`  - ${k}`);
out.push(`- 未翻訳（ヒーロー待ち・計画外を含む）：${untranslated.length - need.length} 件`);
console.log(out.join('\n'));
if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, out.join('\n') + '\n');
