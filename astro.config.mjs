// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL, IS_PUBLIC, LOCALES, DEFAULT_LOCALE } from './src/config.ts';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      // 英語も /en/ に入れる。後から言語を足しても設計が変わらない
      prefixDefaultLocale: true,
    },
  },
  // IS_PUBLIC が false のあいだはサイトマップを出さない（_headers の X-Robots-Tag と必ずセット）
  integrations: IS_PUBLIC ? [sitemap({ i18n: { defaultLocale: DEFAULT_LOCALE, locales: Object.fromEntries(LOCALES.map((l) => [l, l])) } })] : [],
  build: {
    format: 'directory',
  },
});
