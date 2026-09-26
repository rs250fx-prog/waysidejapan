/** エリア定義。ハブページとフッタのサイトマップが参照する */

export type AreaStatus = 'covered' | 'in-progress' | 'planned';

export interface Area {
  slug: string;
  name: string;
  /** フッタや一覧での補足。短く */
  note: string;
  status: AreaStatus;
  prefectures: string[];
}

export const AREAS: Area[] = [
  {
    slug: 'setouchi',
    name: 'Setouchi',
    note: 'Okayama to Yamaguchi, and across to Shikoku',
    status: 'covered',
    prefectures: ['Okayama', 'Hiroshima', 'Yamaguchi', 'Kagawa', 'Ehime'],
  },
  {
    slug: 'kyushu',
    name: 'Northern Kyushu',
    note: 'Fukuoka, Saga, Nagasaki, Oita',
    status: 'in-progress',
    prefectures: ['Fukuoka', 'Saga', 'Nagasaki', 'Oita'],
  },
  {
    slug: 'shikoku',
    name: 'Shikoku',
    note: 'The island, and the bridges to it',
    status: 'in-progress',
    prefectures: ['Kagawa', 'Ehime', 'Kochi', 'Tokushima'],
  },
  {
    slug: 'kanto',
    name: 'Kanto',
    note: 'Tokyo and the lines out of it',
    status: 'planned',
    prefectures: ['Tokyo', 'Kanagawa', 'Chiba', 'Saitama'],
  },
];

/** ハブページを実際に作ってあるエリアだけ */
export const publishedAreas = () => AREAS.filter((a) => a.status !== 'planned');
