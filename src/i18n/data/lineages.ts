/**
 * 系譜データ（src/data/lineages/<dish>.json）の表示文言の上書き表。原本は英語で、JSON に残す。
 * `en` は JSON から作る（二重に持たない）。キーは dish、その中の系譜は lineage.key。
 *
 *   name        … 品目名
 *   axes        … 比較軸の見出し（キーは axis.key）
 *   lineages    … 系譜ごとの name / place（発祥の地）/ era（時代）/ cells（軸ごとの説明）
 *
 * 翻訳しないもの：nameJa、key、status、_note。where（本場の街）はどのページにも出していないので持たない。無い言語・項目は英語に落ちる。
 */
import type { Locale } from '../../config.ts';
import type { DishLineages } from '../../lib/lineages.ts';
import { part as koA } from './lineages-parts/ko-a.ts';
import { part as koB } from './lineages-parts/ko-b.ts';
import { part as frA } from './lineages-parts/fr-a.ts';
import { part as frB } from './lineages-parts/fr-b.ts';
import { part as esA } from './lineages-parts/es-a.ts';
import { part as esB } from './lineages-parts/es-b.ts';

export interface LineageText {
  name: string;
  place: string;
  era: string;
  cells: Record<string, string>;
}
export interface DishText {
  name: string;
  axes: Record<string, string>;
  lineages: Record<string, LineageText>;
}
type Table = Record<string, DishText>;

/** Vite（astro build）では import.meta.glob、素の Node（tools/check-i18n.mjs）では fs で、同じ JSON を読む */
function loadAll(): DishLineages[] {
  try {
    const files = import.meta.glob<{ default: DishLineages }>('../../data/lineages/*.json', { eager: true });
    return Object.values(files).map((m) => m.default);
  } catch {
    return nodeLoad();
  }
}
function nodeLoad(): DishLineages[] {
  // 動的に読む：Vite のバンドルに node:fs を入れない
  const fs = (process as unknown as { getBuiltinModule: (n: string) => typeof import('node:fs') }).getBuiltinModule('node:fs');
  const dir = new URL('../../data/lineages/', import.meta.url);
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .sort()
    .map((f) => JSON.parse(fs.readFileSync(new URL(f, dir), 'utf8')) as DishLineages);
}

const en: Table = Object.fromEntries(
  loadAll().map((d) => [
    d.dish,
    {
      name: d.name,
      axes: Object.fromEntries(d.axes.map((a) => [a.key, a.label])),
      lineages: Object.fromEntries(
        d.lineages.map((l) => [l.key, { name: l.name, place: l.origin.place, era: l.origin.era, cells: { ...l.cells } }]),
      ),
    },
  ]),
);
/** 言語ごとの前半（a）・後半（b）を合わせる。ファイルは lineages-parts/<lang>-<a|b>.ts */
export const table: { en: Table } & Partial<Record<Exclude<Locale, 'en'>, Table>> = {
  en,
  ko: { ...koA, ...koB },
  fr: { ...frA, ...frB },
  es: { ...esA, ...esB },
};

/** 系譜データを指定の言語にする。英語（と表の無い言語）は原本をそのまま返す */
export function localizeDish(data: DishLineages, locale: string): DishLineages {
  const t = (table as Record<string, Table | undefined>)[locale]?.[data.dish];
  if (!t) return data;
  return {
    ...data,
    name: t.name ?? data.name,
    axes: data.axes.map((a) => ({ ...a, label: t.axes?.[a.key] ?? a.label })),
    lineages: data.lineages.map((l) => {
      const x = t.lineages?.[l.key];
      if (!x) return l;
      return {
        ...l,
        name: x.name ?? l.name,
        origin: { place: x.place ?? l.origin.place, era: x.era ?? l.origin.era },
        cells: { ...l.cells, ...x.cells },
      };
    }),
  };
}
