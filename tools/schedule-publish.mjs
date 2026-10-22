/**
 * docs/publish-plan.json の計画を、記事の pubDate に書き込む。
 *
 *   node tools/schedule-publish.mjs                 … 確認だけ（何も書かない）
 *   node tools/schedule-publish.mjs --apply         … pubDate を書き換える
 *   node tools/schedule-publish.mjs --fill --apply  … 計画に無い公開可能な記事を末尾に足してから書き換える
 *   --start YYYY-MM-DD で計画の初回日（plan.start）を上書きする
 *
 * plan.start の日に「初回公開」（Eat 50・Soak 15・Column 全件）が出て、
 * その翌日から毎日 Eat 2本・Soak 1本が出る（perDay）。
 *
 * 計画に載っていない Eat / Soak は src/lib/content.ts の isPublished が出さない。
 * ヒーロー画像を足した記事は、--fill で計画の末尾に入る（毎晩 daily-publish.yml が実行する）。
 * 既に計画にある記事の順番は変えない（日付が動かない）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const apply = args.includes('--apply');
const fill = args.includes('--fill');

const planPath = path.join(root, 'docs/publish-plan.json');
const plan = JSON.parse(fs.readFileSync(planPath, 'utf8'));
const start = args.includes('--start') ? args[args.indexOf('--start') + 1] : plan.start;
if (!/^\d{4}-\d{2}-\d{2}$/.test(start ?? '')) {
  console.error('plan.start か --start YYYY-MM-DD が必要です');
  process.exit(1);
}

const addDays = (iso, n) => new Date(Date.parse(iso + 'T00:00:00Z') + n * 86400000).toISOString().slice(0, 10);
const dirOf = (cat) => path.join(root, 'src/content/en', cat);
const fileOf = (cat, slug) => {
  for (const ext of ['.mdx', '.md']) {
    const p = path.join(dirOf(cat), slug + ext);
    if (fs.existsSync(p)) return p;
  }
  throw new Error(`記事が見つかりません: ${cat}/${slug}`);
};
const front = (file) => fs.readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';

// ---- --fill：計画に無く、公開できる記事（ヒーローあり・draft でない・unlisted でない）を末尾へ ----
if (fill) {
  const planned = new Set([...plan.initial.eat, ...plan.initial.soak, ...plan.daily.eat, ...plan.daily.soak]);
  const found = { eat: [], soak: [] };
  for (const cat of ['eat', 'soak']) {
    for (const f of fs.readdirSync(dirOf(cat)).sort()) {
      if (f.startsWith('_')) continue;
      const slug = f.replace(/\.mdx?$/, '');
      if (planned.has(slug)) continue;
      const fm = front(path.join(dirOf(cat), f));
      if (!/^heroImage:/m.test(fm) || /^draft:\s*true/m.test(fm) || /^unlisted:\s*true/m.test(fm)) continue;
      found[cat].push({ slug, area: (fm.match(/^areas:\s*\[([^\]]*)\]/m)?.[1] ?? '').split(',')[0].trim() });
    }
  }
  plan.daily.eat.push(...found.eat.map((x) => x.slug));
  // Soak は地域を巡回させる（同じ地域が続かないように）
  const byArea = {};
  for (const x of found.soak) (byArea[x.area] ??= []).push(x.slug);
  for (let more = true; more; ) {
    more = false;
    for (const a of Object.keys(byArea)) if (byArea[a].length) { plan.daily.soak.push(byArea[a].shift()); more = true; }
  }
  console.log(`fill: Eat +${found.eat.length} / Soak +${found.soak.length}`);
  if (apply && (found.eat.length || found.soak.length)) fs.writeFileSync(planPath, JSON.stringify(plan, null, 1) + '\n');
}

/** @type {Map<string,string>} file -> date */
const dates = new Map();
for (const slug of plan.initial.eat) dates.set(fileOf('eat', slug), start);
for (const slug of plan.initial.soak) dates.set(fileOf('soak', slug), start);
if (plan.initial.column === 'all') {
  for (const f of fs.readdirSync(dirOf('column'))) if (!f.startsWith('_')) dates.set(path.join(dirOf('column'), f), start);
}
const spread = (cat, list, perDay) =>
  list.forEach((slug, i) => dates.set(fileOf(cat, slug), addDays(start, 1 + Math.floor(i / perDay))));
spread('eat', plan.daily.eat, plan.perDay.eat);
spread('soak', plan.daily.soak, plan.perDay.soak);

let changed = 0;
for (const [file, date] of dates) {
  const text = fs.readFileSync(file, 'utf8');
  const m = text.match(/^pubDate: (\d{4}-\d{2}-\d{2})\s*$/m);
  if (!m) throw new Error(`pubDate 行がありません: ${file}`);
  // updatedDate が新しい pubDate より前だと dateModified < datePublished になるので、公開日に揃える
  const u = text.match(/^updatedDate: (\d{4}-\d{2}-\d{2})\s*$/m);
  const fixUpdated = u && u[1] < date;
  if (m[1] === date && !fixUpdated) continue;
  changed++;
  if (apply) {
    let out = text.replace(/^pubDate: \d{4}-\d{2}-\d{2}(\s*)$/m, `pubDate: ${date}$1`);
    if (fixUpdated) out = out.replace(/^updatedDate: \d{4}-\d{2}-\d{2}(\s*)$/m, `updatedDate: ${date}$1`);
    fs.writeFileSync(file, out);
  }
}

const last = [...dates.values()].sort().at(-1);
console.log(`${apply ? '書き換え' : '変更予定'}: ${changed} 本 / 計画 ${dates.size} 本 / 初回 ${start} / 最終 ${last}`);
