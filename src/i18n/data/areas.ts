/**
 * エリア（src/data/areas.ts）の表示文言の上書き表。原本は英語で、元のファイルに残す。
 * キーは slug。無い言語・項目は英語に落ちる。翻訳者は ko / fr / es / zh-tw に { name, note } を足す。
 * `en` は元のファイルから作る（二重に持たない）。
 */
import type { Locale } from '../../config.ts';
import { AREAS, type Area } from '../../data/areas.ts';

export interface AreaText {
  name: string;
  note: string;
}
type Table = Record<string, AreaText>;

const en: Table = Object.fromEntries(AREAS.map((a) => [a.slug, { name: a.name, note: a.note }]));
const ko: Table = {
  setouchi: { name: '세토우치', note: '오카야마에서 야마구치까지, 그리고 바다 건너 시코쿠로' },
  kyushu: { name: '북부 규슈', note: '후쿠오카, 사가, 나가사키, 오이타' },
  shikoku: { name: '시코쿠', note: '섬, 그리고 섬으로 이어지는 다리' },
  kanto: { name: '간토', note: '도쿄와 도쿄에서 뻗어 나가는 노선' },
};
const fr: Table = {
  setouchi: { name: 'Setouchi', note: 'D’Okayama à Yamaguchi, puis de l’autre côté vers Shikoku' },
  kyushu: { name: 'Nord de Kyushu', note: 'Fukuoka, Saga, Nagasaki, Oita' },
  shikoku: { name: 'Shikoku', note: 'L’île, et les ponts qui y mènent' },
  kanto: { name: 'Kanto', note: 'Tokyo et les lignes qui en partent' },
};
const es: Table = {
  setouchi: { name: 'Setouchi', note: 'De Okayama a Yamaguchi, y al otro lado hasta Shikoku' },
  kyushu: { name: 'Norte de Kyushu', note: 'Fukuoka, Saga, Nagasaki, Oita' },
  shikoku: { name: 'Shikoku', note: 'La isla y los puentes que llevan a ella' },
  kanto: { name: 'Kanto', note: 'Tokio y las líneas que salen de ella' },
};
export const table: { en: Table } & Partial<Record<Exclude<Locale, 'en'>, Table>> = { en, ko, fr, es };

export const areaName = (area: Area, locale: string): string => (table as Record<string, Table | undefined>)[locale]?.[area.slug]?.name ?? area.name;
export const areaNote = (area: Area, locale: string): string => (table as Record<string, Table | undefined>)[locale]?.[area.slug]?.note ?? area.note;
