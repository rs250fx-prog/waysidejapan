/**
 * Column と Rail の目次（/en/column/ /en/rail/）の区切り。docs/HUB-DESIGN.md 実行C。
 *
 * Column は frontmatter の topic で区切る（記事が増えても崩れない）。
 * Rail は passes[0] で区切る。パスを持たない記事は routes に落ちる。
 * どちらも、記事の無い区分は見出しごと出ない。区分に無い値はビルド時に警告して Other に落とす。
 */
export interface GuideSection {
  key: string;
  label: string;
  /** タイルに薄く出す漢字1字 */
  glyph: string;
  note?: string;
}

export const COLUMN_TOPICS: GuideSection[] = [
  { key: 'manners', label: 'Table manners', glyph: '箸', note: 'What is actually expected, and what is only said to be' },
  { key: 'ordering', label: 'Ordering and paying', glyph: '券', note: 'Ticket machines, the bill, bookings and queues' },
  { key: 'needs', label: 'Dietary needs and children', glyph: '菜' },
  { key: 'buying', label: 'Buying food and souvenirs', glyph: '買' },
  { key: 'kitchen', label: 'How food is made', glyph: '釜' },
];

export const RAIL_GROUPS: GuideSection[] = [
  { key: 'setouchi-area-pass', label: 'Setouchi Area Pass', glyph: '瀬', note: 'Seven days across the Inland Sea on one ticket' },
  { key: 'routes', label: 'Routes and transfers', glyph: '路' },
];

export const OTHER_SECTION: GuideSection = { key: 'other', label: 'Other', glyph: '他' };
