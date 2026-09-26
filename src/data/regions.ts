/**
 * 著者の土地勘の順。site が扱うエリア（src/data/areas.ts）とは別物。
 *
 * areas.ts = このサイトがいま記事を持っている場所
 * regions.ts = 運営者が実際に詳しい場所（強い順）
 *
 * 混ぜないこと。前者は運用の状態、後者は人の経験で、更新のタイミングが違う。
 */

export interface Region {
  name: string;
  note: string;
}

export const REGIONS: Region[] = [
  { name: 'Kanto', note: 'Tokyo and everything within a weekend of it' },
  { name: 'Tohoku', note: 'The north, in all four seasons' },
  { name: 'Tokai, Chubu and Hokuriku', note: 'East to Gifu, over the mountains and out to the Japan Sea' },
  { name: 'Kansai', note: 'Beyond the three big cities' },
  { name: 'Chugoku', note: 'The inland sea coast and the mountains behind it' },
  { name: 'Shikoku', note: 'The island, and the bridges to it' },
  { name: 'Kyushu', note: 'The north, mostly' },
];
