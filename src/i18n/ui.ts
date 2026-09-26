/** UI 文言の辞書。本文以外の固定文字列はすべてここを通す */

export const ui = {
  en: {
    'nav.rail': 'Rail',
    'nav.eat': 'Eat',
    'nav.soak': 'Soak',
    'nav.konbini': 'Konbini',
    'nav.column': 'Column',
    'nav.ride': 'Ride',
    'nav.about': 'About',
    'nav.search': 'Search',
    'nav.skip': 'Skip to content',

    'home.start': 'Start here',
    'home.latest': 'Latest',
    'home.areas': 'The area I know best',
    'home.everything': 'Everything',

    'article.verified': 'Fares verified',
    'article.contents': 'On this page',
    'article.glance': 'At a glance',
    'article.verdict': 'The short answer',
    'article.buyIf': 'Buy it if',
    'article.skipIf': 'Skip it if',
    'article.faq': 'Questions people ask',
    'article.sources': 'Sources',
    'article.sponsored': 'Sponsored',
    'article.bookedMyself': 'Booked this myself',

    'disclosure.inline':
      'This guide contains affiliate links. If you book through one I earn a commission at no extra cost to you. I only link to services I have used myself.',

    'rates.note': 'Prices are in Japanese yen. Conversions are approximate, at',
    'rates.asOf': 'as of',
    'rates.check': 'Check the operator before you travel.',

    'footer.disclosure': 'Disclosure',
    'footer.privacy': 'Privacy',
    'footer.contact': 'Contact',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function t(locale: string, key: UIKey): string {
  const dict = (ui as Record<string, Record<string, string>>)[locale] ?? ui.en;
  return dict[key] ?? ui.en[key];
}
