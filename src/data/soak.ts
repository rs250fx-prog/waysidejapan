/**
 * Soak の目次（/en/soak/）の区切り。docs/HUB-DESIGN.md 実行2。
 *
 * 記事は kind で3種に分かれる：
 *   explainer … 泉質・仕組み。冒頭「Before you go」に文字タイルで
 *   region    … 地域概説。各地域セクションのリード
 *   town      … 温泉町。地域セクションのタイル
 *
 * 地域は9区分（北→南）。記事の areas（県より大きい粒度）を区分に束ねる。
 * 中部・北陸・東海は1つにまとめる。分けると2本だけのセクションが増えるため。
 * 本州の概説は7地域にまたがるので、該当する各セクションのリードに出す。
 */
export interface Region {
  key: string;
  label: string;
  /** 記事の areas のうち、この区分に入るもの */
  areas: string[];
}

export const REGIONS: Region[] = [
  { key: 'hokkaido', label: 'Hokkaido', areas: ['hokkaido'] },
  { key: 'tohoku', label: 'Tōhoku', areas: ['tohoku'] },
  { key: 'kanto', label: 'Kantō', areas: ['kanto'] },
  { key: 'central', label: 'Chūbu, Hokuriku and Tōkai', areas: ['chubu', 'hokuriku', 'tokai'] },
  { key: 'kansai', label: 'Kansai', areas: ['kansai'] },
  { key: 'chugoku', label: 'Chūgoku', areas: ['chugoku'] },
  { key: 'shikoku', label: 'Shikoku', areas: ['shikoku'] },
  { key: 'kyushu', label: 'Kyushu', areas: ['kyushu'] },
  { key: 'okinawa', label: 'Okinawa', areas: ['okinawa'] },
];

/**
 * 地域概説の記事を区分に当てる。slug で明示する。
 * areas から引くと沖縄の概説（areas: [kyushu]）が九州に落ちるため。
 */
export const REGION_LEADS: Record<string, string[]> = {
  'onsen-hokkaido': ['hokkaido'],
  'onsen-honshu': ['tohoku', 'kanto', 'central', 'kansai', 'chugoku'],
  'onsen-shikoku': ['shikoku'],
  'onsen-kyushu': ['kyushu'],
  'onsen-okinawa': ['okinawa'],
};

/** explainer のタイルに出す漢字1字。slug で引く */
export const EXPLAINER_GLYPHS: Record<string, string> = {
  'onsen-water-types': '泉',
  'acidic-sulphur-radioactive-springs': '硫',
  'carbon-dioxide-chloride-iron-springs': '塩',
  'hydrogen-carbonate-sulphate-iodine-simple-springs': '単',
  'kakenagashi-explained': '流',
};

/** 「Before you go」の並び。無いものは末尾に名前順 */
export const EXPLAINER_ORDER: string[] = [
  'onsen-water-types',
  'kakenagashi-explained',
  'acidic-sulphur-radioactive-springs',
  'carbon-dioxide-chloride-iron-springs',
  'hydrogen-carbonate-sulphate-iodine-simple-springs',
];

export function regionOfArea(area: string): Region | null {
  return REGIONS.find((r) => r.areas.includes(area)) ?? null;
}
