/**
 * 翻訳記事の機械的な点検（node tools/check-translation.mjs [ファイル or ディレクトリ ...]）。
 * 既定は translations-draft/ と src/content/<英語以外>/。事実の正しさを保証するものではなく、
 * 「訳すときに壊れやすい構造・数字・リンク」を英語の原文と突き合わせるだけ。人の確認の代わりにはならない。
 *
 * error（落とす）: YAML が壊れている／キーの過不足／訳さない値が変わった／faq の数が違う／import が違う／
 *                  部品タグの数が違う／リンク URL が違う／zh-tw に簡体字がある／translationStatus が machine でない（下書き）
 * warning（要確認）: 原文の数字が訳文に見つからない／換算後の金額の直書き／訳し残しの疑い／description の長さ
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, sep, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const EN = join(ROOT, 'src', 'content', 'en');
/** 訳す値。それ以外のキーは原文と完全に一致しなければならない */
const TRANSLATED = new Set(['title', 'description', 'heroAlt', 'faq', 'translationStatus']);
/** 簡体字にしか無い字（繁体字では別の字形）。台湾向けに混ざってはいけない */
const SIMPLIFIED = '这个说时国东门车还让对们为来会学样种发开关应经长点从么书买钱热题体边过运远选间现问电话气业价湾览区务历产选环网总该实认设计';

function* walk(p) {
  if (!existsSync(p)) return;
  if (statSync(p).isFile()) { if (/\.mdx?$/.test(p)) yield p; return; }
  for (const n of readdirSync(p)) {
    if (n.startsWith('_')) continue; // _reports/・_queue.json・_BRIEF.md など、翻訳記事でないもの
    yield* walk(join(p, n));
  }
}

function split(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!m) return null;
  return { fm: m[1], body: text.slice(m[0].length) };
}
const imports = (body) => body.split(/\r?\n/).filter((l) => /^import\s/.test(l));
const stripImports = (body) => body.split(/\r?\n/).filter((l) => !/^import\s/.test(l)).join('\n');
const tags = (body) => {
  const c = {};
  for (const m of body.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)) c[m[1]] = (c[m[1]] ?? 0) + 1;
  return c;
};
const urls = (text) => [...text.matchAll(/https?:\/\/[^\s)>"'\]]+/g)].map((m) => m[0].replace(/[.,;]+$/, '')).sort();
const nums = (body) => {
  const c = {};
  for (const m of stripImports(body).matchAll(/\d+(?:[,.  ]\d+)*/g)) {
    const k = m[0].replace(/\D/g, '');
    c[k] = (c[k] ?? 0) + 1;
  }
  return c;
};
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const targets = process.argv.slice(2);
const roots = targets.length
  ? targets.map((t) => resolve(process.cwd(), t))
  : [join(ROOT, 'translations-draft'), ...['ko', 'zh-tw', 'fr', 'es'].map((l) => join(ROOT, 'src', 'content', l))];

let nFiles = 0, nErr = 0, nWarn = 0;
for (const root of roots) {
  for (const file of walk(root)) {
    const rel = file.slice(ROOT.length + 1);
    const parts = rel.split(sep);
    const i = parts.findIndex((p) => p === 'translations-draft' || p === 'content');
    const lang = parts[i + (parts[i] === 'content' ? 1 : 1)];
    const cat = parts[i + 2];
    const slug = parts.slice(i + 3).join('/').replace(/\.mdx?$/, '');
    const isDraft = parts[i] === 'translations-draft';
    const errs = [], warns = [];
    nFiles++;

    const srcFile = ['.mdx', '.md'].map((e) => join(EN, cat, slug + e)).find(existsSync);
    if (!srcFile) { errs.push(`英語の原文が無い（${cat}/${slug}）`); }
    const tr = split(readFileSync(file, 'utf8'));
    const en = srcFile ? split(readFileSync(srcFile, 'utf8')) : null;
    if (!tr) errs.push('frontmatter が無い');

    if (tr && en) {
      let a, b;
      try { a = yaml.load(tr.fm); } catch (e) { errs.push(`YAML が壊れている: ${String(e.message).split('\n')[0]}`); }
      b = yaml.load(en.fm);
      if (a) {
        const ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
        const miss = kb.filter((k) => !ka.includes(k)), extra = ka.filter((k) => !kb.includes(k) && k !== 'translationStatus'); /* translationStatus は翻訳側にだけ付く（原文は省略可） */
        if (miss.length) errs.push(`キー不足: ${miss.join(', ')}`);
        if (extra.length) errs.push(`原文に無いキー: ${extra.join(', ')}`);
        for (const k of kb) if (!TRANSLATED.has(k) && k in a && !same(a[k], b[k])) errs.push(`訳さない値が変わっている: ${k}`);
        if (isDraft && a.translationStatus !== 'machine') errs.push(`translationStatus が machine でない（${a.translationStatus}）`);
        if (Array.isArray(b.faq) && (!Array.isArray(a.faq) || a.faq.length !== b.faq.length)) errs.push(`faq の数が違う（原文 ${b.faq.length}／訳文 ${a.faq?.length ?? 0}）`);
        for (const f of a.faq ?? []) if (!f?.q || !f?.a) errs.push('faq に空の q/a がある');
        for (const k of ['title', 'description']) if (!a[k] || typeof a[k] !== 'string') errs.push(`${k} が空`);
        const dl = String(a.description ?? '').length;
        const [lo, hi] = lang === 'ko' || lang === 'zh-tw' ? [40, 100] : [80, 200];
        if (dl < lo || dl > hi) warns.push(`description の長さ ${dl}（目安 ${lo}〜${hi}）`);
        if (lang === 'zh-tw') {
          // 訳した値と本文だけを見る。sources の label は日本語の資料名を原文のまま残すので対象外
          // （国・会・体・区は日本語の新字体と同形で、簡体字と区別できない）
          const translated = JSON.stringify({ title: a.title, description: a.description, heroAlt: a.heroAlt, faq: a.faq });
          const hit = [...new Set([...translated + tr.body].filter((c) => SIMPLIFIED.includes(c)))];
          if (hit.length) errs.push(`簡体字が混ざっている: ${hit.join('')}`);
        }
      }
      if (!same(imports(tr.body), imports(en.body))) errs.push('import 行が原文と違う');
      if (!same(tags(tr.body), tags(en.body))) errs.push(`部品タグの数が違う（原文 ${JSON.stringify(tags(en.body))}／訳文 ${JSON.stringify(tags(tr.body))}）`);
      if (!same(urls(tr.body), urls(en.body))) errs.push('本文のリンク URL が原文と違う');
      const na = nums(tr.body), nb = nums(en.body);
      // 桁の言い換え（"1.3 million" → 1,300,000、"1960s and 70s" → 1960 y 1970）で数字が変わる書き方は、同じ値として許す
      const alias = {};
      for (const m of stripImports(en.body).matchAll(/(\d+(?:\.\d+)?)\s*(million|billion|trillion)\b/gi)) {
        const mult = { million: 1e6, billion: 1e9, trillion: 1e12 }[m[2].toLowerCase()];
        (alias[m[1].replace(/\D/g, '')] ??= []).push(String(Math.round(Number(m[1]) * mult)));
      }
      for (const m of stripImports(en.body).matchAll(/\b(\d{4})s?(?:\s+and\s+|,\s*|\s+to\s+|[–-])(\d{2})s\b/g)) {
        (alias[m[2]] ??= []).push(m[1].slice(0, 2) + m[2]);
      }
      // 世紀：英語 "17th century" → フランス語・スペイン語の XVIIe siècle / siglo XVII（ローマ数字）
      const roman = (n) => [[10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']].reduce((s, [v, r]) => { while (n >= v) { s += r; n -= v; } return s; }, '');
      for (const m of stripImports(en.body).matchAll(/\b(\d{1,2})(?:st|nd|rd|th)[\s-]century\b/gi)) {
        (alias[m[1]] ??= []).push(`@roman:${roman(Number(m[1]))}`);
      }
      const satisfied = (v) => (v.startsWith('@roman:') ? new RegExp(`\\b${v.slice(7)}(?:e|ème|er|º)?\\b`).test(tr.body) : (na[v] ?? 0) > 0);
      const lost = Object.keys(nb).filter((k) => (na[k] ?? 0) < nb[k] && !(alias[k] ?? []).some(satisfied));
      if (lost.length) warns.push(`原文の数字が訳文に足りない（桁だけ比較）: ${lost.slice(0, 12).join(', ')}${lost.length > 12 ? ' …' : ''}`);
      if (/(?:\$|€|NT\$|₩)\s?\d/.test(tr.body)) warns.push('換算後の金額らしき直書きがある（<Price> を使う）');
      if (lang === 'ko' || lang === 'zh-tw') {
        const text = stripImports(tr.body).replace(/<[^>]+>/g, ' ').replace(/https?:\/\/\S+/g, '');
        const letters = (text.match(/[A-Za-z]/g) ?? []).length, all = text.replace(/\s/g, '').length || 1;
        if (letters / all > 0.2) warns.push(`英字が多い（${Math.round((letters / all) * 100)}%）。訳し残しの疑い`);
      }
    }

    nErr += errs.length; nWarn += warns.length;
    console.log(`${errs.length ? 'NG ' : warns.length ? 'WARN' : 'OK  '} ${rel}`);
    for (const e of errs) console.log(`     error: ${e}`);
    for (const w of warns) console.log(`     warn : ${w}`);
  }
}
console.log(`\ncheck-translation: ${nFiles} 本 / error ${nErr} / warning ${nWarn}`);
process.exit(nErr ? 1 : 0);
