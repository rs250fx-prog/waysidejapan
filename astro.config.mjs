// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { SITE_URL, IS_PUBLIC, LOCALES, DEFAULT_LOCALE, LOCALE_META } from './src/config.ts';

// URL のパス（zh-tw）と、検索エンジン・html lang 向けのコード（zh-TW）が違う言語は、対応を明示する
const i18nLocales = LOCALES.map((l) => (LOCALE_META[l].hreflang === l ? l : { path: l, codes: [LOCALE_META[l].hreflang] }));

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  i18n: {
    locales: i18nLocales,
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      // 英語も /en/ に入れる。後から言語を足しても設計が変わらない
      prefixDefaultLocale: true,
    },
  },
  // IS_PUBLIC が false のあいだはサイトマップを出さない（_headers の X-Robots-Tag と必ずセット）
  // 「/」は /en/ への転送なので載せない（filter の第2条件）
  integrations: [mdx(), ...(IS_PUBLIC ? [sitemap({ filter: (page) => !page.includes('/admin') && page !== `${SITE_URL}/`, i18n: { defaultLocale: DEFAULT_LOCALE, locales: Object.fromEntries(LOCALES.map((l) => [l, LOCALE_META[l].hreflang])) } })] : [])],
  build: {
    format: 'directory',
  },
});
