/**
 * 多言語まわりの不変条件を検査する（node tools/check-i18n.mjs ／ npm run check:i18n）。
 *
 * 守ること（docs/SPEC.md 第6節）：
 *  1. LOCALES（URL を持つ言語）は、LOCALE_META にあり、UI 辞書が「確認済み（UI_REVIEWED）」であること
 *  2. 全言語の UI 辞書が、英語と同じキーを持つこと
 *  3. src/content の言語フォルダは、計画した言語（PLANNED_LOCALES）だけ。簡体字（zh-cn / zh-hans / zh）は作らない
 *  4. 翻訳記事は、英語の原文（同じ translationKey）が存在すること
 *  5. 公開対象（LOCALES）の言語の記事に translationStatus: machine が残っていないこと
 *     （machine は noindex だが、確認前の翻訳を公開対象に置かない運用にする）
 *  6. 固定ページ・部品の文言（src/i18n/pages/*.ts）とデータの上書き表（src/i18n/data/*.ts）の各 table について、
 *     LOCALES の各言語に表があり、キーの形が英語（en）と一致すること（関数のキーは関数であること、文字列は空でないこと）。
 *     計画言語（PLANNED_LOCALES）で LOCALES に無い言語は、表が無くても落とさず一覧で表示する
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const { LOCALES, LOCALE_META, PLANNED_LOCALES, DEFAULT_LOCALE } = await import(new URL('../src/config.ts', import.meta.url).href);
const { ui, UI_REVIEWED } = await import(new URL('../src/i18n/ui.ts', import.meta.url).href);

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);

// 1
for (const l of LOCALES) {
  if (!LOCALE_META[l]) fail(`LOCALES に ${l} があるが LOCALE_META に無い`);
  if (!UI_REVIEWED.includes(l)) fail(`LOCALES に ${l} があるが、UI 辞書が未確認（src/i18n/ui.ts の UI_REVIEWED に無い）`);
}
if (!LOCALES.includes(DEFAULT_LOCALE)) fail(`既定の言語 ${DEFAULT_LOCALE} が LOCALES に無い`);

// 2
const base = Object.keys(ui[DEFAULT_LOCALE]);
for (const l of PLANNED_LOCALES) {
  const d = ui[l];
  if (!d) { fail(`UI 辞書に ${l} が無い`); continue; }
  const missing = base.filter((k) => !(k in d) || !String(d[k]).trim());
  const extra = Object.keys(d).filter((k) => !base.includes(k));
  if (missing.length) fail(`UI 辞書 ${l}: 不足 ${missing.join(', ')}`);
  if (extra.length) fail(`UI 辞書 ${l}: 英語に無いキー ${extra.join(', ')}`);
}

// 3, 4, 5
const CONTENT = join(ROOT, 'src', 'content');
const FORBIDDEN = new Set(['zh', 'zh-cn', 'zh-hans', 'zh-sg']);
const keyOf = (file) => (readFileSync(file, 'utf8').match(/^translationKey:\s*["']?([^"'\r\n]+)["']?\s*$/m) ?? [])[1];
const statusOf = (file) => (readFileSync(file, 'utf8').match(/^translationStatus:\s*["']?(\w+)["']?\s*$/m) ?? [])[1] ?? 'reviewed';
function* files(dir) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) yield* files(p);
    else if (/\.(md|mdx)$/.test(n) && !n.startsWith('_')) yield p;
  }
}

const enKeys = new Set();
if (existsSync(join(CONTENT, DEFAULT_LOCALE))) for (const f of files(join(CONTENT, DEFAULT_LOCALE))) enKeys.add(keyOf(f));

for (const dir of readdirSync(CONTENT)) {
  if (!statSync(join(CONTENT, dir)).isDirectory()) continue;
  if (FORBIDDEN.has(dir.toLowerCase())) fail(`src/content/${dir}: 中国本土向けの簡体字は作らない（繁体字は zh-tw）`);
  else if (!PLANNED_LOCALES.includes(dir)) fail(`src/content/${dir}: 計画していない言語フォルダ（PLANNED_LOCALES: ${PLANNED_LOCALES.join(', ')}）`);
  if (dir === DEFAULT_LOCALE || !PLANNED_LOCALES.includes(dir)) continue;
  for (const f of files(join(CONTENT, dir))) {
    const rel = f.slice(ROOT.length + 1);
    const key = keyOf(f);
    if (!key) fail(`${rel}: translationKey が無い`);
    else if (!enKeys.has(key)) fail(`${rel}: 英語の原文が無い（translationKey: ${key}）`);
    if (LOCALES.includes(dir) && statusOf(f) === 'machine') fail(`${rel}: 公開対象の言語に machine 翻訳が残っている`);
  }
}

// 6
const TABLE_DIRS = ['pages', 'data'];
const shapeProblems = (en, other, at = '') => {
  const out = [];
  if (typeof en === 'function') {
    if (typeof other !== 'function') out.push(`${at || '(root)'}: 関数であるべき`);
    return out;
  }
  if (typeof en === 'string') {
    if (typeof other !== 'string' || !other.trim()) out.push(`${at || '(root)'}: 空でない文字列であるべき`);
    return out;
  }
  if (Array.isArray(en)) {
    if (!Array.isArray(other)) return [`${at}: 配列であるべき`];
    if (other.length !== en.length) out.push(`${at}: 要素数 ${other.length}（英語は ${en.length}）`);
    en.forEach((v, i) => other[i] !== undefined && out.push(...shapeProblems(v, other[i], `${at}[${i}]`)));
    return out;
  }
  if (en && typeof en === 'object') {
    if (!other || typeof other !== 'object' || Array.isArray(other)) return [`${at}: オブジェクトであるべき`];
    const ek = Object.keys(en);
    const ok = Object.keys(other);
    const missing = ek.filter((k) => !(k in other));
    const extra = ok.filter((k) => !(k in en));
    if (missing.length) out.push(`${at || '(root)'}: 不足 ${missing.join(', ')}`);
    if (extra.length) out.push(`${at || '(root)'}: 英語に無いキー ${extra.join(', ')}`);
    for (const k of ek) if (k in other) out.push(...shapeProblems(en[k], other[k], at ? `${at}.${k}` : k));
    return out;
  }
  return out; // 数値など
};

const tableSummary = []; // { name, have: [locale...] }
const plannedOnly = PLANNED_LOCALES.filter((l) => !LOCALES.includes(l));
for (const dir of TABLE_DIRS) {
  const folder = join(ROOT, 'src', 'i18n', dir);
  if (!existsSync(folder)) continue;
  for (const file of readdirSync(folder).filter((n) => n.endsWith('.ts')).sort()) {
    const name = `${dir}/${file.replace(/\.ts$/, '')}`;
    let mod;
    try {
      mod = await import(new URL(`../src/i18n/${dir}/${file}`, import.meta.url).href);
    } catch (e) {
      fail(`src/i18n/${name}.ts: 読み込めない（${e.message}）`);
      continue;
    }
    const table = mod.table;
    if (!table || !table[DEFAULT_LOCALE]) { fail(`src/i18n/${name}.ts: table.${DEFAULT_LOCALE} が無い`); continue; }
    const en = table[DEFAULT_LOCALE];
    const have = [];
    for (const l of PLANNED_LOCALES) {
      if (l === DEFAULT_LOCALE) { have.push(l); continue; }
      const t = table[l];
      if (!t) {
        if (LOCALES.includes(l)) fail(`src/i18n/${name}.ts: 公開言語 ${l} の表が無い`);
        continue;
      }
      have.push(l);
      const problems = shapeProblems(en, t);
      if (problems.length) {
        const msg = `src/i18n/${name}.ts ${l}: ${problems.slice(0, 8).join(' / ')}${problems.length > 8 ? ` ほか ${problems.length - 8} 件` : ''}`;
        if (LOCALES.includes(l)) fail(msg);
        else warnings.push(msg);
      }
    }
    for (const l of Object.keys(table)) if (!PLANNED_LOCALES.includes(l)) fail(`src/i18n/${name}.ts: 計画外の言語 ${l}`);
    tableSummary.push({ name, have });
  }
}
const untranslated = tableSummary
  .map((t) => ({ name: t.name, missing: plannedOnly.filter((l) => !t.have.includes(l)) }))
  .filter((t) => t.missing.length);
if (untranslated.length) {
  console.log(`文言の表が未翻訳の計画言語（公開前なので落とさない）：${tableSummary.length} モジュール中 ${untranslated.length}`);
  for (const t of untranslated) console.log(`  - ${t.name}: ${t.missing.join(', ')}`);
}
for (const w of warnings) console.warn(' 注意 ' + w);

if (errors.length) {
  console.error(`check-i18n: ${errors.length} 件の問題\n` + errors.map((e) => ' - ' + e).join('\n'));
  process.exit(1);
}
console.log(`check-i18n: OK（公開 ${LOCALES.join(', ')} ／ 計画 ${PLANNED_LOCALES.join(', ')} ／ 文言の表 ${tableSummary.length} モジュール）`);
