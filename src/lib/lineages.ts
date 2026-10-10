/**
 * 系譜データ（src/data/lineages/<dish>.json）の読み口。
 *
 * 系譜の表を記事ごとに手で書くと項目がばらけて比べられなくなるので、
 * 品目ハブと系譜ページの両方がここから描く（docs/LINEAGE-MAP.md 第4節）。
 */
import { getCollection } from 'astro:content';
import { isPublished } from './content.ts';

export interface LineageAxis {
  key: string;
  label: string;
}

export interface Lineage {
  /** ページの slug は `<dish>-<key>`（例 ramen-hakata） */
  key: string;
  name: string;
  nameJa: string;
  origin: { place: string; era: string };
  /** axes の key ごとの短い説明 */
  cells: Record<string, string>;
  /** 本場の街 */
  where: string[];
  /** planned は表に名前だけ出し、リンクしない */
  status: 'published' | 'planned';
}

export interface DishLineages {
  dish: string;
  name: string;
  nameJa: string;
  axes: LineageAxis[];
  lineages: Lineage[];
}

const files = import.meta.glob<{ default: DishLineages }>('../data/lineages/*.json', { eager: true });

export function lineagesOf(dish: string): DishLineages | null {
  for (const mod of Object.values(files)) {
    if (mod.default.dish === dish) return mod.default;
  }
  return null;
}

/**
 * 実在して公開済みの系譜ページだけを返す。
 * JSON の status が published でも記事が無ければリンクしない（404 を構造で防ぐ）
 */
export async function publishedLineagePages(locale: string, dish: string): Promise<Set<string>> {
  const all = await getCollection('articles', isPublished);
  const keys = new Set<string>();
  for (const a of all) {
    if (a.data.kind === 'lineage' && a.data.dish === dish && a.data.lineage && a.id.startsWith(`${locale}/`)) {
      keys.add(a.data.lineage);
    }
  }
  return keys;
}

/** 品目ハブの記事（あれば）。価格ページや系譜ページからのリンク先 */
export async function dishHub(locale: string, dish: string) {
  const all = await getCollection('articles', isPublished);
  return all.find((a) => a.data.kind === 'dish' && a.data.dish === dish && a.id.startsWith(`${locale}/`)) ?? null;
}
