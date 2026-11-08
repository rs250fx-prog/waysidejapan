/**
 * 運営者が詳しい地域（src/data/regions.ts、About で使う）の表示文言の上書き表。
 * キーは英語名から作った id（idOf）。無い言語・項目は英語に落ちる。`en` は元のファイルから作る。
 */
import type { Locale } from '../../config.ts';
import { REGIONS, type Region } from '../../data/regions.ts';
import { idOf } from '../index.ts';

export interface RegionText {
  name: string;
  note: string;
}
type Table = Record<string, RegionText>;

const en: Table = Object.fromEntries(REGIONS.map((r) => [idOf(r.name), { name: r.name, note: r.note }]));
const ko: Table = {
  kanto: { name: '간토', note: '도쿄와, 도쿄에서 주말 안에 닿는 모든 곳' },
  tohoku: { name: '도호쿠', note: '북쪽, 사계절 내내' },
  'tokai-chubu-and-hokuriku': { name: '도카이·주부·호쿠리쿠', note: '동쪽으로 기후까지, 산을 넘어 동해 쪽으로 나가는 지역' },
  kansai: { name: '간사이', note: '3대 도시 너머' },
  chugoku: { name: '주고쿠', note: '내해(세토내해) 연안과 그 뒤의 산지' },
  shikoku: { name: '시코쿠', note: '섬, 그리고 섬으로 이어지는 다리' },
  kyushu: { name: '규슈', note: '주로 북부' },
};
const fr: Table = {
  kanto: { name: 'Kanto', note: 'Tokyo et tout ce qui se trouve à un week-end de là' },
  tohoku: { name: 'Tohoku', note: 'Le nord, en toutes saisons' },
  'tokai-chubu-and-hokuriku': { name: 'Tokai, Chubu et Hokuriku', note: 'À l’est jusqu’à Gifu, par-delà les montagnes et jusqu’à la mer du Japon' },
  kansai: { name: 'Kansai', note: 'Au-delà des trois grandes villes' },
  chugoku: { name: 'Chugoku', note: 'La côte de la mer intérieure et les montagnes derrière' },
  shikoku: { name: 'Shikoku', note: 'L’île, et les ponts qui y mènent' },
  kyushu: { name: 'Kyushu', note: 'Le nord, surtout' },
};
const es: Table = {
  kanto: { name: 'Kanto', note: 'Tokio y todo lo que queda a un fin de semana de ella' },
  tohoku: { name: 'Tohoku', note: 'El norte, en las cuatro estaciones' },
  'tokai-chubu-and-hokuriku': { name: 'Tokai, Chubu y Hokuriku', note: 'Hacia el este hasta Gifu, al otro lado de las montañas y hasta el mar de Japón' },
  kansai: { name: 'Kansai', note: 'Más allá de las tres grandes ciudades' },
  chugoku: { name: 'Chugoku', note: 'La costa del mar interior y las montañas de detrás' },
  shikoku: { name: 'Shikoku', note: 'La isla y los puentes que llevan a ella' },
  kyushu: { name: 'Kyushu', note: 'El norte, sobre todo' },
};
export const table: { en: Table } & Partial<Record<Exclude<Locale, 'en'>, Table>> = { en, ko, fr, es };

const of = (r: Region, locale: string): Partial<RegionText> | undefined => (table as Record<string, Table | undefined>)[locale]?.[idOf(r.name)];
export const regionName = (r: Region, locale: string): string => of(r, locale)?.name ?? r.name;
export const regionNote = (r: Region, locale: string): string => of(r, locale)?.note ?? r.note;
