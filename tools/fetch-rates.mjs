/**
 * 為替レートを取得して src/data/rates.json を更新する。
 *
 * 方針（docs/SPEC.md 第8節）：
 * - 静的生成なので、ビルド時に焼き込む。KV は使わない
 * - 動きが小さいときは何もしない。Pages のビルド回数（月500回・アカウント共有）を節約する
 * - 取得に失敗したら前回値を残して正常終了する。体裁の問題でビルドを止めない
 *
 * GitHub Actions から毎日呼ばれ、変化があったときだけコミットする。
 * コミットが Pages のビルドを起こすので Deploy Hook は要らない。
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const FILE = join(HERE, '..', 'src', 'data', 'rates.json');

/** この割合未満の変動では更新しない */
const THRESHOLD = 0.003; // 0.3%
const CURRENCIES = ['USD', 'EUR'];

const current = JSON.parse(readFileSync(FILE, 'utf8'));

let fetched;
try {
  const url = `https://api.frankfurter.app/latest?from=JPY&to=${CURRENCIES.join(',')}`;
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  fetched = await res.json();
} catch (err) {
  // 取得できなくてもビルドは通す。前回値と基準日がそのまま使われる
  console.log(`rates: fetch failed (${err.message}) — keeping ${current.asOf}`);
  process.exit(0);
}

const next = fetched.rates ?? {};
const missing = CURRENCIES.filter((c) => typeof next[c] !== 'number');
if (missing.length) {
  console.log(`rates: missing ${missing.join(', ')} — keeping ${current.asOf}`);
  process.exit(0);
}

const moved = CURRENCIES.some((c) => {
  const before = current.rates[c];
  if (!before) return true;
  return Math.abs(next[c] - before) / before >= THRESHOLD;
});

if (!moved) {
  console.log(`rates: within ${THRESHOLD * 100}% — no update (asOf ${current.asOf})`);
  process.exit(0);
}

// ECB は営業日しか更新しない。返ってきた日付をそのまま基準日にする
const out = { ...current, asOf: fetched.date, rates: Object.fromEntries(CURRENCIES.map((c) => [c, next[c]])) };
writeFileSync(FILE, JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log(`rates: updated to ${out.asOf} (${CURRENCIES.map((c) => `${c} ${out.rates[c]}`).join(', ')})`);
