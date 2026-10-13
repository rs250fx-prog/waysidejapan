/**
 * Eat の目次（/en/eat/）の中カテゴリ。docs/LINEAGE-MAP.md 第2節のジャンル A〜M をそのまま使う。
 *
 * 品目ハブ（kind: dish）はここで必ずどれかのジャンルに属する。
 * 属さない dish が出たらビルド時に警告して Other に落とす（黙って消さない）。
 * glyph はタイルに大きく出す漢字1字。写真が無い記事でもタイルが成立するための意匠で、
 * heroImage が入った記事は写真に切り替わる（DishTile.astro）。
 */
export interface Genre {
  key: string;
  /** 見出し。英語、センテンスケース */
  label: string;
  /** 1行の説明。無ければ見出しだけ */
  note?: string;
  /** 品目ハブの dish。並び順がそのまま表示順 */
  dishes: string[];
}

export const GENRES: Genre[] = [
  { key: 'noodles', label: 'Noodles', dishes: ['ramen', 'udon', 'soba', 'yakisoba', 'champon', 'somen', 'instant-noodles'] },
  { key: 'rice', label: 'Rice, bowls and sushi', dishes: ['sushi', 'donburi', 'unagi', 'rice', 'rice-sides'] },
  { key: 'meat', label: 'Meat', dishes: ['wagyu', 'meat', 'chicken', 'tonkatsu'] },
  { key: 'seafood', label: 'Seafood', dishes: ['seafood', 'sashimi'] },
  { key: 'stock', label: 'Stock, soups and hotpots', dishes: ['dashi', 'nabe'] },
  { key: 'washoku', label: 'Washoku and local dishes', dishes: ['kaiseki', 'teishoku', 'kyodo-ryori', 'seasoning'] },
  { key: 'street', label: 'Griddle, street and B-grade', dishes: ['konamono', 'gyoza', 'bkyu', 'yatai'] },
  { key: 'western', label: 'Western-origin food', dishes: ['western'] },
  { key: 'izakaya', label: 'Izakaya and drinks', dishes: ['izakaya', 'sake', 'drinks'] },
  { key: 'sweets', label: 'Sweets and tea', dishes: ['sweets', 'wagashi', 'tea'] },
  { key: 'buying', label: 'Konbini and buying food', dishes: ['conbini', 'food-shopping', 'market'] },
  { key: 'seasons', label: 'Seasons and festivals', dishes: ['shun', 'seasonal'] },
  /* M「作法と仕組み」は column 側。Eat に記事が無いあいだは見出しごと出ない */
  { key: 'howitworks', label: 'How it works', dishes: [] },
];

/** ジャンルに入っていない dish の受け皿。常に最後 */
export const OTHER_GENRE: Genre = { key: 'other', label: 'Other', dishes: [] };

/** 冒頭「Start here」に置く品目ハブ。GA4 が溜まるまでは手動指定 */
export const START_HERE: string[] = ['ramen', 'sushi', 'wagyu'];

/** タイルの漢字1字。無い dish は品目名の頭文字で代用する */
export const GLYPHS: Record<string, string> = {
  ramen: '麺',
  udon: '饂',
  soba: '蕎',
  yakisoba: '焼',
  champon: '皿',
  somen: '素',
  'instant-noodles': '即',
  sushi: '鮨',
  donburi: '丼',
  unagi: '鰻',
  rice: '米',
  'rice-sides': '飯',
  wagyu: '牛',
  meat: '肉',
  chicken: '鶏',
  tonkatsu: '豚',
  seafood: '魚',
  sashimi: '刺',
  dashi: '出',
  nabe: '鍋',
  kaiseki: '懐',
  teishoku: '定',
  'kyodo-ryori': '郷',
  seasoning: '醤',
  konamono: '粉',
  gyoza: '餃',
  bkyu: 'B',
  yatai: '屋',
  western: '洋',
  izakaya: '酒',
  sake: '酛',
  drinks: '飲',
  sweets: '甘',
  wagashi: '菓',
  tea: '茶',
  conbini: '店',
  'food-shopping': '買',
  market: '市',
  shun: '旬',
  seasonal: '祭',
};

export function genreOf(dish: string): Genre | null {
  return GENRES.find((g) => g.dishes.includes(dish)) ?? null;
}
