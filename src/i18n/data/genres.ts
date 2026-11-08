/**
 * Eat の目次のジャンル（src/data/genres.ts）の表示文言の上書き表。
 * キーは genre.key（OTHER_GENRE の 'other' を含む）。無い言語・項目は英語に落ちる。`en` は元のファイルから作る。
 * 漢字1字（GLYPHS）と dish の id は翻訳しない。
 */
import type { Locale } from '../../config.ts';
import { GENRES, OTHER_GENRE, type Genre } from '../../data/genres.ts';

export interface GenreText {
  label: string;
  /** 元のデータに note が無いジャンルは持たない */
  note?: string;
}
type Table = Record<string, GenreText>;

const en: Table = Object.fromEntries(
  [...GENRES, OTHER_GENRE].map((g) => [g.key, { label: g.label, ...(g.note !== undefined && { note: g.note }) }]),
);
const ko: Table = {
  noodles: { label: '면' },
  rice: { label: '밥, 덮밥, 스시' },
  meat: { label: '고기' },
  seafood: { label: '해산물' },
  stock: { label: '육수, 국물, 전골' },
  washoku: { label: '와쇼쿠와 향토 요리' },
  street: { label: '철판, 길거리, B급 구르메' },
  western: { label: '서양에서 온 음식' },
  izakaya: { label: '이자카야와 술' },
  sweets: { label: '단것과 차' },
  buying: { label: '편의점과 식료품 사기' },
  seasons: { label: '계절과 축제' },
  howitworks: { label: '구조와 원리' },
  other: { label: '기타' },
};
const fr: Table = {
  noodles: { label: 'Nouilles' },
  rice: { label: 'Riz, bols et sushis' },
  meat: { label: 'Viande' },
  seafood: { label: 'Produits de la mer' },
  stock: { label: 'Bouillons, soupes et fondues' },
  washoku: { label: 'Washoku et plats locaux' },
  street: { label: 'Plaque chauffante, rue et cuisine B-kyū' },
  western: { label: 'Cuisine d’origine occidentale' },
  izakaya: { label: 'Izakaya et boissons' },
  sweets: { label: 'Douceurs et thé' },
  buying: { label: 'Konbini et achat de nourriture' },
  seasons: { label: 'Saisons et fêtes' },
  howitworks: { label: 'Comment ça marche' },
  other: { label: 'Autres' },
};
const es: Table = {
  noodles: { label: 'Fideos' },
  rice: { label: 'Arroz, cuencos y sushi' },
  meat: { label: 'Carne' },
  seafood: { label: 'Pescados y mariscos' },
  stock: { label: 'Caldos, sopas y ollas calientes' },
  washoku: { label: 'Washoku y platos locales' },
  street: { label: 'Plancha, calle y cocina B-kyū' },
  western: { label: 'Comida de origen occidental' },
  izakaya: { label: 'Izakaya y bebidas' },
  sweets: { label: 'Dulces y té' },
  buying: { label: 'Konbini y compra de comida' },
  seasons: { label: 'Estaciones y festivales' },
  howitworks: { label: 'Cómo funciona' },
  other: { label: 'Otros' },
};
export const table: { en: Table } & Partial<Record<Exclude<Locale, 'en'>, Table>> = { en, ko, fr, es };

const of = (g: Genre, locale: string) => (table as Record<string, Table | undefined>)[locale]?.[g.key];
export const genreLabel = (g: Genre, locale: string): string => of(g, locale)?.label ?? g.label;
export const genreNote = (g: Genre, locale: string): string | undefined => of(g, locale)?.note ?? g.note;
