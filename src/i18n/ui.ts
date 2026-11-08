/**
 * UI 文言の辞書。本文以外の固定文字列はすべてここを通す。
 *
 * 英語（en）が原本。他の言語は AI による下書き（2026-11-08）で、人の確認が済むまで公開しない。
 * 確認が済んだら UI_REVIEWED に言語を足す。UI_REVIEWED に無い言語を config.ts の LOCALES に
 * 入れると tools/check-i18n.mjs が落ちる（未確認の文言が公開されるのを構造で防ぐ）。
 *
 * 語順が言語で変わる文（為替の注記など）は、文の途中で切らず、1文で持つ。
 */

const en = {
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

  'rates.note': 'Prices are in Japanese yen. Conversions are approximate.',
  'rates.asOf': 'Rates as of',
  'rates.check': 'Check the operator before you travel.',

  'footer.disclosure': 'Disclosure',
  'footer.privacy': 'Privacy',
  'footer.contact': 'Contact',
} as const;

export type UIKey = keyof typeof en;
type Dict = Record<UIKey, string>;

const ko: Dict = {
  'nav.rail': '철도',
  'nav.eat': '먹기',
  'nav.soak': '온천',
  'nav.konbini': '편의점',
  'nav.column': '칼럼',
  'nav.ride': '라이딩',
  'nav.about': '소개',
  'nav.search': '검색',
  'nav.skip': '본문으로 건너뛰기',

  'home.start': '여기서 시작하세요',
  'home.latest': '최신 글',
  'home.areas': '제가 가장 잘 아는 지역',
  'home.everything': '전체 글',

  'article.verified': '요금 확인',
  'article.contents': '이 페이지의 목차',
  'article.glance': '한눈에 보기',
  'article.verdict': '한 줄 결론',
  'article.buyIf': '이런 분께 추천',
  'article.skipIf': '이런 분은 건너뛰세요',
  'article.faq': '자주 묻는 질문',
  'article.sources': '출처',
  'article.sponsored': '제휴',
  'article.bookedMyself': '직접 예약했습니다',

  'disclosure.inline':
    '이 가이드에는 제휴 링크가 포함되어 있습니다. 링크를 통해 예약하시면 추가 비용 없이 제가 수수료를 받습니다. 제가 직접 이용해 본 서비스만 링크합니다.',

  'rates.note': '요금은 일본 엔 기준이며, 환산 금액은 대략적인 값입니다.',
  'rates.asOf': '환율 기준일',
  'rates.check': '여행 전에 운영사에 확인하세요.',

  'footer.disclosure': '광고 표시',
  'footer.privacy': '개인정보 처리방침',
  'footer.contact': '문의',
};

/** 繁体字中国語（台湾）。語彙は台湾の用法に合わせる（便利商店・泡湯・業配など）。簡体字は作らない */
const zhTw: Dict = {
  'nav.rail': '鐵道',
  'nav.eat': '美食',
  'nav.soak': '泡湯',
  'nav.konbini': '便利商店',
  'nav.column': '專欄',
  'nav.ride': '騎乘',
  'nav.about': '關於',
  'nav.search': '搜尋',
  'nav.skip': '跳到主要內容',

  'home.start': '從這裡開始',
  'home.latest': '最新文章',
  'home.areas': '我最熟悉的地區',
  'home.everything': '全部文章',

  'article.verified': '票價確認',
  'article.contents': '本頁目錄',
  'article.glance': '重點整理',
  'article.verdict': '簡短結論',
  'article.buyIf': '適合這樣的人',
  'article.skipIf': '這樣的人可以跳過',
  'article.faq': '常見問題',
  'article.sources': '資料來源',
  'article.sponsored': '業配',
  'article.bookedMyself': '我自己訂過',

  'disclosure.inline':
    '本文含有聯盟行銷連結。若您透過連結預訂，我會獲得佣金，您無須額外付費。我只推薦自己用過的服務。',

  'rates.note': '價格以日圓為準，換算金額僅供參考。',
  'rates.asOf': '匯率基準日',
  'rates.check': '出發前請向營運業者確認。',

  'footer.disclosure': '聯盟行銷揭露',
  'footer.privacy': '隱私權政策',
  'footer.contact': '聯絡我們',
};

const fr: Dict = {
  'nav.rail': 'Train',
  'nav.eat': 'Manger',
  'nav.soak': 'Onsen',
  'nav.konbini': 'Konbini',
  'nav.column': 'Chroniques',
  'nav.ride': 'Moto',
  'nav.about': 'À propos',
  'nav.search': 'Rechercher',
  'nav.skip': 'Aller au contenu',

  'home.start': 'Commencer ici',
  'home.latest': 'Derniers articles',
  'home.areas': 'La région que je connais le mieux',
  'home.everything': 'Tout voir',

  'article.verified': 'Tarifs vérifiés',
  'article.contents': 'Sur cette page',
  'article.glance': 'En un coup d’œil',
  'article.verdict': 'La réponse courte',
  'article.buyIf': 'À prendre si',
  'article.skipIf': 'À éviter si',
  'article.faq': 'Questions fréquentes',
  'article.sources': 'Sources',
  'article.sponsored': 'Sponsorisé',
  'article.bookedMyself': 'Réservé par moi-même',

  'disclosure.inline':
    'Ce guide contient des liens d’affiliation. Si vous réservez via l’un d’eux, je perçois une commission, sans frais supplémentaires pour vous. Je ne recommande que des services que j’ai moi-même utilisés.',

  'rates.note': 'Les prix sont en yens japonais. Les conversions sont approximatives.',
  'rates.asOf': 'Taux au',
  'rates.check': 'Vérifiez auprès de l’exploitant avant de partir.',

  'footer.disclosure': 'Mentions d’affiliation',
  'footer.privacy': 'Confidentialité',
  'footer.contact': 'Contact',
};

const es: Dict = {
  'nav.rail': 'Tren',
  'nav.eat': 'Comer',
  'nav.soak': 'Onsen',
  'nav.konbini': 'Konbini',
  'nav.column': 'Columnas',
  'nav.ride': 'Moto',
  'nav.about': 'Acerca de',
  'nav.search': 'Buscar',
  'nav.skip': 'Saltar al contenido',

  'home.start': 'Empieza aquí',
  'home.latest': 'Últimos artículos',
  'home.areas': 'La zona que mejor conozco',
  'home.everything': 'Ver todo',

  'article.verified': 'Tarifas verificadas',
  'article.contents': 'En esta página',
  'article.glance': 'De un vistazo',
  'article.verdict': 'La respuesta corta',
  'article.buyIf': 'Cómpralo si',
  'article.skipIf': 'Sáltatelo si',
  'article.faq': 'Preguntas frecuentes',
  'article.sources': 'Fuentes',
  'article.sponsored': 'Patrocinado',
  'article.bookedMyself': 'Reservado por mí',

  'disclosure.inline':
    'Esta guía contiene enlaces de afiliado. Si reservas a través de uno, recibo una comisión sin coste adicional para ti. Solo enlazo servicios que he usado yo mismo.',

  'rates.note': 'Los precios están en yenes japoneses. Las conversiones son aproximadas.',
  'rates.asOf': 'Tipos de cambio a',
  'rates.check': 'Consulta con el operador antes de viajar.',

  'footer.disclosure': 'Divulgación de afiliados',
  'footer.privacy': 'Privacidad',
  'footer.contact': 'Contacto',
};

export const ui: Record<string, Dict> = { en, ko, 'zh-tw': zhTw, fr, es };

/** 人が確認し終えた言語。ここに無い言語は LOCALES に入れてはいけない（tools/check-i18n.mjs が見る） */
export const UI_REVIEWED: readonly string[] = ['en'];

export function t(locale: string, key: UIKey): string {
  const dict = ui[locale] ?? ui.en;
  return dict[key] ?? ui.en[key];
}
