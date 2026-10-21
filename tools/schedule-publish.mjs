/**
 * docs/publish-plan.json の計画を、記事の pubDate に書き込む。
 *
 *   node tools/schedule-publish.mjs --start 2026-10-22          … 確認だけ（何も書かない）
 *   node tools/schedule-publish.mjs --start 2026-10-22 --apply  … pubDate を書き換える
 *
 * --start の日に「初回公開」（Eat 50・Soak 15・Column 全件）が出て、
 * その翌日から毎日 Eat 2本・Soak 1本が出る（perDay）。
 * 計画に載っていない記事の pubDate には触らない。
 * 出るかどうかの最終判断は src/lib/content.ts の isPublished（ヒーロー画像・draft・カテゴリ）。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const start = args[args.indexOf('--start') + 1];
const apply = args.includes('--apply');
if (!/^\d{4}-\d{2}-\d{2}$/.test(start ?? '')) {
  console.error('--start YYYY-MM-DD を指定してください');
  process.exit(1);
}

const plan = JSON.parse(fs.readFileSync(path.join(root, 'docs/publish-plan.json'), 'utf8'));
const addDays = (iso, n) => new Date(Date.parse(iso + 'T00:00:00Z') + n * 86400000).toISOString().slice(0, 10);

const dirOf = (cat) => path.join(root, 'src/content/en', cat);
const fileOf = (cat, slug) => {
  for (const ext of ['.mdx', '.md']) {
    const p = path.join(dirOf(cat), slug + ext);
    if (fs.existsSync(p)) return p;
  }
  throw new Error(`記事が見つかりません: ${cat}/${slug}`);
};

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
