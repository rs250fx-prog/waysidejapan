/**
 * 記事の検査。実際に踏んだ失敗だけを項目にする。想像で作らない。
 *
 *   npm run check
 *
 * 落ちたらビルドしない。体裁の問題で公開が止まるより、
 * 根拠の無い数値が出るほうが損失が大きい領域だけを見る。
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// パスに日本語が含まれると URL の pathname は percent-encoded のままになる。
// fileURLToPath を通さないとディレクトリが見つからず「0 本」で素通りする
const ROOT = dirname(fileURLToPath(new URL('.', import.meta.url)));
const CONTENT = join(ROOT, 'src', 'content');
const PRICE_STALE_MONTHS = 6;

const errors = [];
const warnings = [];

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.mdx') || p.endsWith('.md') ? [p] : [];
  });
}

/** frontmatter だけを雑に読む。YAML パーサを足すほどの用途ではない */
function frontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  if (!m) return null;
  const out = {};
  let key = null;
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([a-zA-Z_]+):\s*(.*)$/.exec(line);
    if (kv) {
      key = kv[1];
      out[key] = kv[2].trim();
    } else if (key && /^\s*-\s/.test(line)) {
      out[key] = Array.isArray(out[key]) && out[key].length ? out[key] : [];
      out[key].push(line.replace(/^\s*-\s*/, '').trim());
    }
  }
  return { data: out, body: text.slice(m[0].length) };
}

const monthsSince = (iso) => {
  const d = new Date(iso);
  if (Number.isNaN(d.valueOf())) return null;
  return (Date.now() - d.valueOf()) / (1000 * 60 * 60 * 24 * 30.44);
};

const files = walk(CONTENT);
const descriptions = new Map();

for (const file of files) {
  const rel = relative(ROOT, file).replace(/\\/g, '/');
  const parsed = frontmatter(readFileSync(file, 'utf8'));
  if (!parsed) {
    errors.push(`${rel}: frontmatter がない`);
    continue;
  }
  const { data, body } = parsed;
  const draft = data.draft === 'true';
  const basis = (data.basis || 'visited').replace(/['"]/g, '');
  const sources = Array.isArray(data.sources) ? data.sources : [];
  // sources はネストしたリストなので、ラベル行の数で数える
  const sourceCount = /^sources:\s*$/m.test(readFileSync(file, 'utf8'))
    ? (readFileSync(file, 'utf8').match(/^\s*-\s*label:/gm) || []).length
    : 0;

  // --- 根拠の型と、その型が要求するもの ---
  if (basis === 'visited' && !/^experience:/m.test(readFileSync(file, 'utf8'))) {
    errors.push(`${rel}: basis: visited なのに experience が無い`);
  }
  if (basis === 'researched' && sourceCount < 2) {
    (draft ? warnings : errors).push(
      `${rel}: basis: researched は出典2本以上が必要（いま ${sourceCount} 本）`,
    );
  }
  if ((data.category || '').replace(/['"]/g, '') === 'column' && sourceCount === 0) {
    (draft ? warnings : errors).push(`${rel}: column は出典が必須`);
  }

  // --- 料金の鮮度。為替より、これが古いほうが読者に実害が出る ---
  if (!data.pricesCheckedOn) {
    errors.push(`${rel}: pricesCheckedOn が無い`);
  } else if (!draft) {
    const m = monthsSince(data.pricesCheckedOn);
    if (m !== null && m > PRICE_STALE_MONTHS) {
      errors.push(`${rel}: 料金の確認から ${m.toFixed(0)} か月（上限 ${PRICE_STALE_MONTHS}）`);
    }
  }

  // --- description の重複と長さ ---
  const desc = (data.description || '').replace(/^['"]|['"]$/g, '');
  if (!desc) errors.push(`${rel}: description が無い`);
  else {
    if (desc.length > 200) errors.push(`${rel}: description が長い（${desc.length}）`);
    if (desc.length < 80) warnings.push(`${rel}: description が短い（${desc.length}）`);
    if (descriptions.has(desc)) errors.push(`${rel}: description が ${descriptions.get(desc)} と重複`);
    descriptions.set(desc, rel);
  }

  // --- 本文に換算後の金額を直書きしていないか ---
  const bodyWithoutImports = body.replace(/^import .*$/gm, '');
  const dollar = bodyWithoutImports.match(/(?<!\w)\$\s?\d[\d,.]*/g);
  if (dollar) {
    errors.push(`${rel}: 本文にドル額の直書き（${dollar.slice(0, 3).join(', ')}）。<Price> を使う`);
  }
  const euro = bodyWithoutImports.match(/€\s?\d[\d,.]*/g);
  if (euro) {
    errors.push(`${rel}: 本文にユーロ額の直書き（${euro.slice(0, 3).join(', ')}）。<Price> を使う`);
  }

  // --- 見出しの階層が飛んでいないか ---
  let last = 1;
  for (const h of bodyWithoutImports.match(/^#{2,6} /gm) || []) {
    const level = h.trim().length;
    if (level > last + 1) {
      errors.push(`${rel}: 見出しが h${last} から h${level} へ飛んでいる`);
      break;
    }
    last = level;
  }
}

const show = (list, mark) => list.forEach((m) => console.log(`${mark} ${m}`));
show(warnings, '△');
show(errors, '×');

console.log(
  `\n${files.length} 本を検査：エラー ${errors.length}／警告 ${warnings.length}` +
    (errors.length ? '' : '  問題なし'),
);
process.exit(errors.length ? 1 : 0);
