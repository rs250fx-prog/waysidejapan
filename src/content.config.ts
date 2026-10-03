import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES, LOCALES } from './config.ts';

/**
 * ロケールはディレクトリで分ける： src/content/<locale>/<category>/<slug>.md
 *
 * frontmatter に locale を持たせる方式にしない。翻訳のないページにも
 * hreflang が張られて相互参照が壊れるため。ここにファイルが無い＝
 * その言語版は存在しない、という状態を素直に作る。
 */
const articles = defineCollection({
  loader: glob({ base: './src/content', pattern: '**/[^_]*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** 英語は120〜160字。未記入だとページ間で重複する */
      description: z.string().min(80).max(200),

      /** 言語間の対応付け。原文の slug を入れる */
      translationKey: z.string(),
      /** machine のあいだは noindex。人が固有名詞と料金を確認したら reviewed */
      translationStatus: z.enum(['machine', 'reviewed']).default('reviewed'),

      category: z.enum(CATEGORIES),
      areas: z.array(z.string()).min(1),
      passes: z.array(z.string()).default([]),

      pubDate: z.date(),
      updatedDate: z.date().optional(),

      /** 制御3点 */
      draft: z.boolean().default(true),
      unlisted: z.boolean().default(false),
      access: z.enum(['public', 'members']).default('public'),

      heroImage: image().optional(),
      heroAlt: z.string().optional(),
      /** 記事の中ほどに全幅の写真帯を出すか。「これ」という1枚が無い記事では false */
      heroBand: z.boolean().default(true),

      /**
       * 記事の根拠。表示と検査がここで分かれる。
       *
       * visited    … 自分で行った。experience が必須。確認日バッジを出す
       * researched … 調べて書いた。sources が2本以上必須。確認日バッジは出さない
       *
       * 混ぜると読者が根拠の強さを見分けられなくなり、
       * 本当に行った記事の価値まで下がる。だから型で分ける。
       */
      basis: z.enum(['visited', 'researched']).default('visited'),

      /** 一次体験の証跡（basis: visited では必須。tools/check-content.mjs が見る） */
      experience: z
        .object({
          visitedOn: z.string(), // YYYY-MM
          mode: z.enum(['train', 'bike', 'foot']),
          photosOwn: z.boolean().default(true),
        })
        .optional(),

      /** 料金の確認日。為替より、これが古いほうが読者に実害が出る */
      pricesCheckedOn: z.date(),

      faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      /**
       * 出典。column と basis: researched では2本以上が必須
       * （tools/check-content.mjs で検査）。公式サイト・事業者ページを優先する。
       * published は出典が「いつ時点の情報か」。価格の記事で日付が無いのは致命的
       */
      sources: z
        .array(z.object({ label: z.string(), url: z.string().url(), published: z.string().optional() }))
        .default([]),

      /** soak 固有。外国人読者には料金より重要になることがある */
      facility: z
        .object({
          entry: z.number().optional(),
          hours: z.string().optional(),
          closed: z.string().optional(),
          water: z.string().optional(),
          minutesFromStation: z.number().optional(),
          tattoos: z.enum(['allowed', 'not-allowed', 'conditional']).optional(),
          towel: z.enum(['included', 'rental', 'bring']).optional(),
          english: z.enum(['signs', 'staff', 'none']).optional(),
          cashOnly: z.boolean().optional(),
        })
        .optional(),
    }),
});

export const collections = { articles };

/** id は "<locale>/<category>/<slug>" の形。ここから素性を取り出す */
export function parseId(id: string) {
  const [locale, category, ...rest] = id.split('/');
  return {
    locale: (LOCALES as readonly string[]).includes(locale) ? locale : null,
    category,
    slug: rest.join('/'),
  };
}
