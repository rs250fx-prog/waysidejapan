// 公開済み記事の機械チェック（指摘リストを作るだけ。記事は編集しない）
//   node tools/audit-articles.mjs            → docs/ARTICLE-AUDIT.md を書き出す
//   node tools/audit-articles.mjs --stdout   → 標準出力に出す
// `npm run check`（tools/check-content.mjs）は書式の最低限。こちらは運用で問題になった点の洗い出し。
import { readFileSync, readdirSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, dirname, basename } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CONTENT = join(ROOT, 'src', 'content', 'en');
const TODAY = new Date('2026-10-13');

const TAX_OK = /tax[- ]?(included|inclusive)|including (consumption )?tax|incl\.? ?tax|tax included|税込|inclusive of (consumption )?tax/i;
const RISKY_CLAIMS = [
  [/\b(the )?(oldest|first) (hot spring|onsen|spa|public bath|national)[^.]{0,40}(in|of) japan/i, '「日本最古／日本初」の断定'],
  [/\b(number one|no\. ?1|the best(?!-)|the finest|the greatest)\b/i, '最上級・順位の断定'],
  [/\b(largest|biggest|longest|highest)\b[^.]{0,30}\b(in japan|in the country|of its kind)\b/i, '「日本最大級」などの断定'],
  [/\b(authentic|true|real|proper|correct|right) (way|onsen|ramen|sushi|experience)\b/i, '「正しい／本物」の言い回し'],
  [/\byou (must|should never|have to|need to)\b/i, '命令調（must / have to）'],
  [/\b(cures?|heals?|detox(es|ify)?|anti-?aging|miraculous)\b/i, '効能の断定の可能性'],
];
// 否定・引用・出典帰属のある文は断定ではない（誤解の節で「〜と言われるが公式にはない」と書く場合など）
const SOFTENED = /["“”]|\bnot\b|n[’']t\b|\b(says?|said|claims?|claimed|according to|described|calls?|called|reported|as the|rumou?r|myth|misconception|so-called|known as|is said|are said|they say|people say|lists?)\b/i;
const BAD_HOSTS = /(^|\.)(ameblo\.jp|ameba\.jp|note\.com|hatenablog\.[a-z]+|hatena\.ne\.jp|tabelog\.com|wikipedia\.org|blogspot\.[a-z.]+|wordpress\.com|fc2\.com|livedoor\.[a-z.]+|travel\.rakuten\.co\.jp|jalan\.net|ikyu\.com|retty\.me|gnavi\.co\.jp|trip\.com|tripadvisor\.[a-z.]+|booking\.com|agoda\.com)$/i;
const NOT_PRICE = /\b(household|per (year|household)|annual(ly)?|spending|survey|statistics|fine of|penalty|up to ¥|tax revenue|budget|sales of|billion|trillion|million)\b/i;
const AI_INSTRUCTION = /(ignore (all |the )?(previous|above)|as an ai|system prompt|you are an? (ai|assistant)|copy (this )?verbatim|reproduce (this )?verbatim)/i;

function listMdx(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...listMdx(p));
    else if (name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

function parse(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return null;
  const fm = m[1];
  const body = m[2];
  const get = (key) => {
    const r = fm.match(new RegExp('^' + key + ':\\s*(.*)$', 'm'));
    if (!r) return undefined;
    return r[1].trim().replace(/^['"]|['"]$/g, '');
  };
  const sourcesBlock = fm.split(/^sources:\s*$/m)[1] ?? '';
  const sources = [];
  for (const chunk of sourcesBlock.split(/^\s*-\s+label:/m).slice(1)) {
    const url = (chunk.match(/url:\s*['"]?([^'"\s]+)/) ?? [])[1];
    const published = (chunk.match(/published:\s*['"]?([^'"\s]+)/) ?? [])[1];
    sources.push({ url, published });
  }
  const faqBlock = (fm.split(/^faq:\s*$/m)[1] ?? '').split(/^sources:/m)[0];
  const faq = [...faqBlock.matchAll(/^\s*-\s+q:\s*(.*)$/gm)].length;
  return { fm, body, get, sources, faq };
}

const files = listMdx(CONTENT);
const slugSet = new Set();
for (const f of files) {
  const rel = f.slice(CONTENT.length + 1).replace(/\\/g, '/');
  slugSet.add(rel.replace(/\.mdx$/, ''));
}

const findings = []; // {file, level, check, detail}
const stats = [];
const add = (file, level, check, detail) => findings.push({ file, level, check, detail });

for (const f of files) {
  const rel = f.slice(CONTENT.length + 1).replace(/\\/g, '/');
  const raw = readFileSync(f, 'utf8');
  const doc = parse(raw);
  if (!doc) { add(rel, 'high', 'frontmatter', 'frontmatter が読めない'); continue; }
  const { body, get, sources, faq } = doc;
  const [cat] = rel.split('/');
  const draft = get('draft') === 'true';
  const unlisted = get('unlisted') === 'true';
  if (draft) continue; // 公開されていないものは対象外
  const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  stats.push({ rel, cat, words });

  // 1. description
  const desc = get('description') ?? '';
  if (desc.length > 160) add(rel, 'mid', 'description長', `${desc.length}字（目安160字以内）`);
  if (desc.length < 80) add(rel, 'low', 'description短', `${desc.length}字`);

  // 2. 日付
  const pub = get('pubDate'), upd = get('updatedDate');
  if (pub && new Date(pub) > TODAY) add(rel, 'mid', '日付', `pubDate が未来（${pub}）`);
  if (pub && upd && new Date(upd) < new Date(pub)) add(rel, 'mid', '日付', `updatedDate(${upd}) が pubDate(${pub}) より前`);
  const pc = get('pricesCheckedOn');
  if (pc) {
    const months = (TODAY - new Date(pc)) / (1000 * 60 * 60 * 24 * 30);
    if (months > 4) add(rel, 'mid', '料金の鮮度', `pricesCheckedOn=${pc}（${months.toFixed(1)}か月前）`);
  }

  // 3. 出典
  if (sources.length < 3 && (cat === 'soak' || cat === 'eat')) add(rel, 'mid', '出典少', `${sources.length}本`);
  const urls = sources.map((s) => s.url).filter(Boolean);
  const dup = urls.filter((u, i) => urls.indexOf(u) !== i);
  if (dup.length) add(rel, 'low', '出典重複', [...new Set(dup)].slice(0, 3).join(', '));
  for (const u of urls) {
    let host = '';
    try { host = new URL(u).hostname; } catch { add(rel, 'mid', '出典URL不正', u); continue; }
    if (BAD_HOSTS.test(host)) add(rel, 'high', '出典の質', `一次資料ではない可能性: ${u}`);
    if (u.startsWith('http://')) add(rel, 'low', '出典http', u);
  }
  const noDate = sources.filter((s) => !s.published).length;
  if (sources.length >= 5 && noDate / sources.length > 0.7) add(rel, 'low', '出典の日付なし', `${noDate}/${sources.length}本に published が無い`);

  // 4. 本文の金額と税込
  const paragraphs = body.split(/\r?\n\s*\r?\n/);
  const yenFlags = [];
  for (const para of paragraphs) {
    const amounts = [...para.matchAll(/¥\s?[\d,]{3,}|[\d,]{3,}\s?yen\b/gi)].map((x) => x[0]);
    if (!amounts.length) continue;
    // 入湯税など少額の税そのものは対象外（¥50, ¥150, ¥300）
    const real = amounts.filter((a) => Number(a.replace(/[^\d]/g, '')) >= 400);
    if (!real.length || NOT_PRICE.test(para)) continue;
    const saysIncluded = TAX_OK.test(para) && !/(does not|do not|doesn.t|don.t|no) (say|state|mention|specify|give)[^.]{0,40}(tax|including)|not (say|state|stated)[^.]{0,30}tax|whether[^.]{0,40}tax|税込の(記載|明記)が(ない|無い)/i.test(para);
    if (!saysIncluded) yenFlags.push(`${real.slice(0, 3).join(', ')} … 「${para.replace(/\s+/g, ' ').slice(0, 90)}…」`);
  }
  if (yenFlags.length) {
    // 記事のどこかに「税込」の一般的な注記があれば要確認（mid）、まったく無ければ方針違反の可能性が高い（high）
    const generalNote = TAX_OK.test(body);
    add(rel, generalNote ? 'mid' : 'high', '税込不明の金額', `${yenFlags.length}段落${generalNote ? '（記事内に税込の注記はある）' : '（記事内に税込の注記なし）'}。例: ${yenFlags[0]}`);
  }

  // 5. 断定表現
  const plain = body.replace(/```[\s\S]*?```/g, ' ').replace(/<[^>]+>/g, ' ');
  for (const [re, label] of RISKY_CLAIMS) {
    const all = [...plain.matchAll(new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g'))];
    // 該当箇所を含む文を取り、否定・引用・出典帰属があれば断定ではないとして除く
    const hits = all.filter((h) => {
      const s = plain.lastIndexOf('. ', h.index) + 1;
      const e = plain.indexOf('. ', h.index);
      const sentence = plain.slice(s, e === -1 ? plain.length : e + 1);
      return !SOFTENED.test(sentence);
    });
    if (hits.length) {
      const ctx = plain.slice(Math.max(0, hits[0].index - 60), hits[0].index + 100).replace(/\s+/g, ' ');
      add(rel, label.includes('効能') || label.includes('正しい') ? 'high' : 'low', '断定表現', `${label}（${hits.length}件）例: …${ctx}…`);
    }
  }

  // 6. ランク混入・AI指示文
  if (cat === 'soak' && /\b(?:[Rr]ank|[Gg]rade) [SABC]\b|\b[SABC]-rank\b|onsenRank/.test(plain)) add(rel, 'high', 'ランク混入', 'S/A/B/C の表記が本文にある（ONSEN-LABEL 未実装のため不可）');
  if (AI_INSTRUCTION.test(raw)) add(rel, 'high', 'AI指示文', 'AIへの指示のような文が本文にある');

  // 7. 内部リンク
  const links = [...body.matchAll(/\]\((\/en\/[^)#\s]*)(#[^)]*)?\)/g)].map((x) => x[1]);
  const internal = [...new Set(links)];
  const broken = [];
  for (const l of internal) {
    const parts = l.replace(/^\/en\//, '').replace(/\/$/, '').split('/');
    const key = parts.join('/');
    if (!key) continue; // /en/ トップ
    if (!slugSet.has(key) && !existsSync(join(ROOT, 'src', 'pages', 'en', ...parts))) broken.push(l);
  }
  if (broken.length) add(rel, 'high', '内部リンク切れ', broken.slice(0, 4).join(', '));
  if (cat !== 'column' && internal.length === 0) add(rel, 'mid', '内部リンクなし', '本文に /en/ へのリンクが0本');
  if (cat === 'soak') {
    const toEat = internal.filter((l) => l.startsWith('/en/eat/')).length;
    if (toEat === 0) add(rel, 'mid', '食へのリンクなし', 'soak 記事から /en/eat/ へのリンクが0本（食との接点は内部リンクで結ぶ方針）');
  }
  if (cat === 'eat') {
    const toSoak = internal.filter((l) => l.startsWith('/en/soak/')).length;
    const mentionsOnsen = /\b(onsen|hot spring)\b/i.test(plain);
    if (mentionsOnsen && toSoak === 0) add(rel, 'low', '温泉へのリンクなし', '本文で温泉に触れているが /en/soak/ へのリンクが0本');
  }

  // 8. FAQ・長さ
  if (cat !== 'rail' && faq < 3) add(rel, 'low', 'FAQ少', `${faq}問`);
  if (words < 700) add(rel, 'low', '短い', `${words}語`);
  if (words > 5500) add(rel, 'low', '長い', `${words}語（分割の検討）`);

  // 9. 画像の alt
  const noAlt = [...body.matchAll(/!\[\s*\]\(/g)].length;
  if (noAlt) add(rel, 'mid', 'alt無し画像', `${noAlt}枚`);

  // 10. 税率の将来変更の書きぶり
  if (/令和9年|April 2027|1 ?% (consumption|rate)|reduced to 1/i.test(plain)) add(rel, 'mid', '税率の将来変更', '2027年4月の消費税1%の記述がある。成立前の予定として日付と留保つきか確認');
}

// 重複した title
const titleMap = new Map();
for (const f of files) {
  const doc = parse(readFileSync(f, 'utf8'));
  if (!doc || doc.get('draft') === 'true') continue;
  const t = doc.get('title');
  const rel = f.slice(CONTENT.length + 1).replace(/\\/g, '/');
  if (!t) continue;
  if (titleMap.has(t)) add(rel, 'mid', 'title重複', `${titleMap.get(t)} と同じ`);
  else titleMap.set(t, rel);
}

// --- 出力 ---
const levelOrder = { high: 0, mid: 1, low: 2 };
const byCheck = new Map();
for (const x of findings) {
  const k = `${x.level}|${x.check}`;
  byCheck.set(k, (byCheck.get(k) ?? 0) + 1);
}
const lines = [];
lines.push('# 公開済み記事の機械チェック結果（指摘リスト）');
lines.push('');
lines.push(`確認日：2026-10-13 ／ 対象：${stats.length} 本（draft を除く） ／ ツール：tools/audit-articles.mjs`);
lines.push('');
lines.push('記事は編集していない。**候補の洗い出し**であり、誤検出を含む。重要度 high＝方針違反の可能性が高い、mid＝要確認、low＝参考。');
lines.push('');
lines.push('## 1. 件数のまとめ');
lines.push('');
lines.push('| 重要度 | チェック | 件数 |');
lines.push('|---|---|---|');
for (const [k, n] of [...byCheck.entries()].sort((a, b) => levelOrder[a[0].split('|')[0]] - levelOrder[b[0].split('|')[0]] || b[1] - a[1])) {
  const [lv, ck] = k.split('|');
  lines.push(`| ${lv} | ${ck} | ${n} |`);
}
lines.push('');
const catStats = {};
for (const s of stats) { catStats[s.cat] ??= { n: 0, w: 0 }; catStats[s.cat].n++; catStats[s.cat].w += s.words; }
lines.push('カテゴリ別：' + Object.entries(catStats).map(([c, v]) => `${c} ${v.n}本・平均${Math.round(v.w / v.n)}語`).join(' ／ '));
lines.push('');
lines.push('## 2. 記事別の指摘（重要度の高い順）');
lines.push('');
const byFile = new Map();
for (const x of findings) { if (!byFile.has(x.file)) byFile.set(x.file, []); byFile.get(x.file).push(x); }
const score = (arr) => arr.reduce((s, x) => s + (x.level === 'high' ? 10 : x.level === 'mid' ? 3 : 1), 0);
for (const [file, arr] of [...byFile.entries()].sort((a, b) => score(b[1]) - score(a[1]) || a[0].localeCompare(b[0]))) {
  lines.push(`### ${file}（スコア ${score(arr)}）`);
  for (const x of arr.sort((a, b) => levelOrder[a.level] - levelOrder[b.level])) lines.push(`- [${x.level}] ${x.check}：${x.detail}`);
  lines.push('');
}
lines.push(`## 3. 指摘が無かった記事`);
lines.push('');
lines.push(stats.filter((s) => !byFile.has(s.rel)).map((s) => s.rel).join('、') || '（なし）');
lines.push('');
const out = lines.join('\n');
if (process.argv.includes('--stdout')) console.log(out);
else {
  writeFileSync(join(ROOT, 'docs', 'ARTICLE-AUDIT.md'), out, 'utf8');
  console.log(`書き出し：docs/ARTICLE-AUDIT.md（${stats.length} 本、指摘 ${findings.length} 件）`);
  for (const [k, n] of [...byCheck.entries()].sort((a, b) => levelOrder[a[0].split('|')[0]] - levelOrder[b[0].split('|')[0]] || b[1] - a[1])) console.log(`  ${k.replace('|', ' ')}: ${n}`);
}
