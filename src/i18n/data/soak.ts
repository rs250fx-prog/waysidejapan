/**
 * Soak の目次の地域区分（src/data/soak.ts の REGIONS）の表示文言の上書き表。
 * キーは region.key。無い言語・項目は英語に落ちる。`en` は元のファイルから作る。
 */
import type { Locale } from '../../config.ts';
import { REGIONS, type Region } from '../../data/soak.ts';

export interface SoakRegionText {
  label: string;
}
type Table = Record<string, SoakRegionText>;

const en: Table = Object.fromEntries(REGIONS.map((r) => [r.key, { label: r.label }]));
const ko: Table = {
  hokkaido: { label: '홋카이도' },
  tohoku: { label: '도호쿠' },
  kanto: { label: '간토' },
  central: { label: '주부·호쿠리쿠·도카이' },
  kansai: { label: '간사이' },
  chugoku: { label: '주고쿠' },
  shikoku: { label: '시코쿠' },
  kyushu: { label: '규슈' },
  okinawa: { label: '오키나와' },
};
const fr: Table = {
  hokkaido: { label: 'Hokkaido' },
  tohoku: { label: 'Tōhoku' },
  kanto: { label: 'Kantō' },
  central: { label: 'Chūbu, Hokuriku et Tōkai' },
  kansai: { label: 'Kansai' },
  chugoku: { label: 'Chūgoku' },
  shikoku: { label: 'Shikoku' },
  kyushu: { label: 'Kyushu' },
  okinawa: { label: 'Okinawa' },
};
const es: Table = {
  hokkaido: { label: 'Hokkaido' },
  tohoku: { label: 'Tōhoku' },
  kanto: { label: 'Kantō' },
  central: { label: 'Chūbu, Hokuriku y Tōkai' },
  kansai: { label: 'Kansai' },
  chugoku: { label: 'Chūgoku' },
  shikoku: { label: 'Shikoku' },
  kyushu: { label: 'Kyushu' },
  okinawa: { label: 'Okinawa' },
};
export const table: { en: Table } & Partial<Record<Exclude<Locale, 'en'>, Table>> = { en, ko, fr, es };

export const soakRegionLabel = (r: Region, locale: string): string => (table as Record<string, Table | undefined>)[locale]?.[r.key]?.label ?? r.label;
