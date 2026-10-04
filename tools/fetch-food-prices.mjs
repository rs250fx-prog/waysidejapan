/**
 * 小売物価統計調査（総務省統計局）の全国平均を e-Stat API から取り、
 * src/data/food-prices.official.json を更新する。
 *
 *   ESTAT_APP_ID=xxxx node tools/fetch-food-prices.mjs
 *
 * 方針（為替の取得と同じ）
 * - 取れなかった品目は前回値を残す。1つ失敗しても全体を落とさない
 * - 値が1つも変わっていなければ書き換えない。コミットが起きず、
 *   Pages のビルドも起きない（ビルド枠は月500回・アカウント共有）
 * - 品目コードはハードコードせず、メタ情報を引いて名前で照合する。
 *   コードは改定されることがあるが、品目名は概ね維持されるため
 *
 * appId は秘密。GitHub の Secrets（ESTAT_APP_ID）から渡す。
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const FILE = join(ROOT, 'src', 'data', 'food-prices.official.json');

/** 統計表：小売物価統計調査 主要品目の都市別小売価格（都道府県庁所在市等） */
const STATS_DATA_ID = '0003421913';
/** 全国平均の地域コード。メタから拾えなければこれを使う */
const AREA_FALLBACK = '00000';

/**
 * 内部キー → 統計の品目名に含まれる語。
 * 名前で照合するので、表記ゆれに耐えるよう短めの語を置く。
 */
const ITEMS = {
  ramen: ['中華そば'],
  soba: ['日本そば'],
  udon: ['うどん', '外食'],
  gyudon: ['牛丼'],
  curry: ['カレーライス'],
  hamburger: ['ハンバーガー'],
  coffee: ['コーヒー', '外食'],
  'sushi-kaiten': ['すし', '外食'],
};

const APP_ID = process.env.ESTAT_APP_ID;
if (!APP_ID) {
  console.log('food-prices: ESTAT_APP_ID が無いので何もしない');
  process.exit(0);
}

const api = async (path, params) => {
  const url = new URL(`https://api.e-stat.go.jp/rest/3.0/app/json/${path}`);
  url.searchParams.set('appId', APP_ID);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`${path} HTTP ${res.status}`);
  return res.json();
};

const current = JSON.parse(readFileSync(FILE, 'utf8'));
const next = structuredClone(current);
let changed = 0;

try {
  // 1. メタ情報から品目コードと地域コードを引く
  const meta = await api('getMetaInfo', { statsDataId: STATS_DATA_ID });
  const classObjs = meta?.GET_META_INFO?.METADATA_INF?.CLASS_INF?.CLASS_OBJ ?? [];

  const asArray = (x) => (Array.isArray(x) ? x : x ? [x] : []);
  const findClass = (...ids) => classObjs.find((c) => ids.includes(c['@id']));

  // 品目の分類は表によって cat01 だったり cat02 だったりする。
  // この表では cat01 が「データの種別」（1件）で、cat02 が「銘柄」（872件）。
  // id を決め打ちせず、cat* のうち項目数が最も多いものを品目とみなす
  const itemClass = classObjs
    .filter((c) => /^cat/.test(String(c['@id'])))
    .map((c) => ({ c, n: asArray(c.CLASS).length }))
    .sort((a, b) => b.n - a.n)[0]?.c;
  const areaClass = findClass('area');

  if (!itemClass) throw new Error('品目の分類が見つからない');

  // 統計表の構造はこちらから見えないので、照合に失敗したとき用に
  // 分類の一覧を出す。appId を手元に持たずに直せるようにするため
  const DIAG = process.env.ESTAT_DIAG === '1';
  if (DIAG) {
    console.log('--- CLASS_OBJ ---');
    for (const c of classObjs) {
      const n = asArray(c.CLASS).length;
      console.log(`  @id=${c['@id']}  name=${c['@name']}  件数=${n}`);
    }
    console.log(`--- 品目に使う分類：@id=${itemClass['@id']} / ${asArray(itemClass.CLASS).length}件 ---`);
    console.log(`--- ${itemClass['@id']} の先頭40件 ---`);
    for (const c of asArray(itemClass.CLASS).slice(0, 40)) {
      console.log(`  ${c['@code']}  ${c['@name']}`);
    }
    console.log('--- 「外食」を含む項目 ---');
    for (const c of asArray(itemClass.CLASS).filter((x) => String(x['@name']).includes('外食')).slice(0, 40)) {
      console.log(`  ${c['@code']}  ${c['@name']}`);
    }
  }

  const itemCodes = {};
  for (const [key, words] of Object.entries(ITEMS)) {
    const hit = asArray(itemClass.CLASS).find((c) => words.every((w) => String(c['@name']).includes(w)));
    if (hit) itemCodes[key] = { code: hit['@code'], name: hit['@name'] };
    else console.log(`food-prices: 品目が見つからない — ${key}（${words.join(' + ')}）`);
  }

  const national =
    asArray(areaClass?.CLASS).find((c) => String(c['@name']).includes('全国'))?.['@code'] ?? AREA_FALLBACK;

  // 2. 品目ごとに最新値を取る
  for (const [key, { code, name }] of Object.entries(itemCodes)) {
    try {
      const data = await api('getStatsData', {
        statsDataId: STATS_DATA_ID,
        [`cd${String(itemClass['@id']).charAt(0).toUpperCase()}${String(itemClass['@id']).slice(1)}`]: code,
        cdArea: national,
        limit: '12',
        metaGetFlg: 'N',
      });

      const values = asArray(data?.GET_STATS_DATA?.STATISTICAL_DATA?.DATA_INF?.VALUE)
        .filter((v) => v['$'] && !Number.isNaN(Number(v['$'])))
        .sort((a, b) => String(b['@time']).localeCompare(String(a['@time'])));

      if (!values.length) {
        console.log(`food-prices: 値が空 — ${key}`);
        continue;
      }

      const latest = values[0];
      const jpy = Math.round(Number(latest['$']));
      // @time は YYYYMM00 の形で返る
      const t = String(latest['@time']);
      const month = `${t.slice(0, 4)}-${t.slice(4, 6)}`;

      const before = current.items[key];
      if (!before || before.jpy !== jpy || before.month !== month) {
        next.items[key] = { jpy, definition: before?.definition ?? name, month };
        console.log(`food-prices: ${key} ${before?.jpy ?? '—'} → ${jpy}（${month}）`);
        changed++;
      }
    } catch (err) {
      // 1品目の失敗で全体を落とさない。前回値が残る
      console.log(`food-prices: ${key} の取得に失敗 — ${err.message}`);
    }
  }
} catch (err) {
  console.log(`food-prices: 取得できないので前回値を残す — ${err.message}`);
  process.exit(0);
}

if (!changed) {
  console.log('food-prices: 変化なし');
  process.exit(0);
}

next._updatedAt = new Date().toISOString().slice(0, 10);
writeFileSync(FILE, JSON.stringify(next, null, 2) + '\n', 'utf8');
console.log(`food-prices: ${changed} 品目を更新`);
