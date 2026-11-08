/**
 * 記事レイアウト（src/layouts/Article.astro）・右カラム（Rail.astro）・関連記事（Related.astro）の固定文言。
 * 「Fares verified」「On this page」「At a glance」「Questions people ask」「Sources」など、
 * UI 辞書（src/i18n/ui.ts）に既にあるものはそちらを使う。
 */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  home: 'Home',
  breadcrumbLabel: 'Breadcrumb',
  relatedLabel: 'Related',
  rodeRoute: (on: string) => `Rode this route ${on}`,
  researched: (n: number) => `Researched · ${n} ${n === 1 ? 'source' : 'sources'}`,
  basisNote:
    'I have not been to every place in this guide. The figures below are taken from the sources listed at the end, with the date each one was published — not measured by me. Where I have been, the article says so.',
  readNext: 'Read next',

  rail: {
    lineages: 'Lineages',
    lineagesNote: 'Where the dish went, and what changed',
    partOf: (name: string) => `Part of ${name}`,
    theGuide: (name: string) => `${name}: the guide`,
    otherLineages: 'Other lineages',
    overview: (region: string) => `${region} overview`,
    townsHere: 'Onsen towns here',
    moreOnWater: 'More on the water',
    pricesTitle: 'What it costs',
    pricesDek: (dishes: number) => `${dishes} dishes, three price sources side by side`,
    pricesGo: 'Food prices',
    /** 温泉の施設パネル */
    water: 'Water',
    entry: 'Entry',
    hours: 'Hours',
    closed: 'Closed',
    fromStation: 'From the station',
    onFoot: (min: number) => `${min} min on foot`,
    tattoos: 'Tattoos',
    towel: 'Towel',
    english: 'English',
    payment: 'Payment',
    cashOnly: 'Cash only',
    tattooValues: { allowed: 'Allowed', 'not-allowed': 'Not allowed', conditional: 'With conditions' } as Record<string, string>,
    towelValues: { included: 'Included', rental: 'Rental', bring: 'Bring your own' } as Record<string, string>,
    englishValues: { signs: 'Signs', staff: 'Staff', none: 'None' } as Record<string, string>,
  },
};

export type Strings = typeof en;

const ko: Strings = {
  home: '홈',
  breadcrumbLabel: '현재 위치 경로',
  relatedLabel: '관련 글',
  rodeRoute: (on: string) => `이 노선을 탄 시기: ${on}`,
  researched: (n: number) => `조사 기반 · 출처 ${n}건`,
  basisNote:
    '저는 이 가이드에 나오는 모든 곳에 가 보지는 않았습니다. 아래 수치는 끝에 적은 출처에서 가져왔으며, 각 출처가 공개된 날짜를 함께 적었습니다. 제가 직접 측정한 값이 아닙니다. 제가 가 본 곳은 본문에 그렇게 밝혀 두었습니다.',
  readNext: '다음 글',

  rail: {
    lineages: '계보',
    lineagesNote: '이 음식이 어디로 퍼졌고 무엇이 달라졌는지',
    partOf: (name: string) => `${name}의 일부`,
    theGuide: (name: string) => `${name}: 가이드`,
    otherLineages: '다른 계보',
    overview: (region: string) => `${region} 개요`,
    townsHere: '이 지역의 온천 마을',
    moreOnWater: '물에 관한 글 더 보기',
    pricesTitle: '가격은 얼마인가',
    pricesDek: (dishes: number) => `${dishes}개 음식, 세 가지 가격 출처를 나란히`,
    pricesGo: '음식 물가',
    water: '수질',
    entry: '입욕료',
    hours: '영업시간',
    closed: '휴무',
    fromStation: '역에서',
    onFoot: (min: number) => `도보 ${min}분`,
    tattoos: '문신',
    towel: '수건',
    english: '영어',
    payment: '결제',
    cashOnly: '현금만 가능',
    tattooValues: { allowed: '가능', 'not-allowed': '불가', conditional: '조건부 가능' } as Record<string, string>,
    towelValues: { included: '포함', rental: '대여', bring: '지참' } as Record<string, string>,
    englishValues: { signs: '안내 표지', staff: '직원', none: '없음' } as Record<string, string>,
  },
};

const fr: Strings = {
  home: 'Accueil',
  breadcrumbLabel: 'Fil d’Ariane',
  relatedLabel: 'À lire aussi',
  rodeRoute: (on: string) => `Trajet effectué : ${on}`,
  researched: (n: number) => `Recherche documentaire · ${n} ${n === 1 ? 'source' : 'sources'}`,
  basisNote:
    'Je ne suis pas allé dans tous les endroits de ce guide. Les chiffres ci-dessous proviennent des sources listées à la fin, avec la date de publication de chacune — je ne les ai pas mesurés moi-même. Là où je suis allé, l’article le dit.',
  readNext: 'À lire ensuite',

  rail: {
    lineages: 'Lignées',
    lineagesNote: 'Où le plat est allé, et ce qui a changé',
    partOf: (name: string) => `Fait partie de : ${name}`,
    theGuide: (name: string) => `${name} : le guide`,
    otherLineages: 'Autres lignées',
    overview: (region: string) => `${region} : vue d’ensemble`,
    townsHere: 'Villes d’onsen ici',
    moreOnWater: 'Plus sur l’eau',
    pricesTitle: 'Ce que ça coûte',
    pricesDek: (dishes: number) => `${dishes} plats, trois sources de prix côte à côte`,
    pricesGo: 'Prix de la nourriture',
    water: 'Eau',
    entry: 'Entrée',
    hours: 'Horaires',
    closed: 'Fermeture',
    fromStation: 'Depuis la gare',
    onFoot: (min: number) => `${min} min à pied`,
    tattoos: 'Tatouages',
    towel: 'Serviette',
    english: 'Anglais',
    payment: 'Paiement',
    cashOnly: 'Espèces uniquement',
    tattooValues: { allowed: 'Autorisés', 'not-allowed': 'Interdits', conditional: 'Sous conditions' } as Record<string, string>,
    towelValues: { included: 'Incluse', rental: 'En location', bring: 'À apporter' } as Record<string, string>,
    englishValues: { signs: 'Panneaux', staff: 'Personnel', none: 'Aucun' } as Record<string, string>,
  },
};

const es: Strings = {
  home: 'Inicio',
  breadcrumbLabel: 'Ruta de navegación',
  relatedLabel: 'Relacionados',
  rodeRoute: (on: string) => `Recorrí esta ruta en ${on}`,
  researched: (n: number) => `Investigado · ${n} ${n === 1 ? 'fuente' : 'fuentes'}`,
  basisNote:
    'No he estado en todos los lugares de esta guía. Las cifras de abajo proceden de las fuentes listadas al final, con la fecha de publicación de cada una; no las he medido yo. Donde sí he estado, el artículo lo dice.',
  readNext: 'Sigue leyendo',

  rail: {
    lineages: 'Linajes',
    lineagesNote: 'Adónde fue el plato y qué cambió',
    partOf: (name: string) => `Parte de ${name}`,
    theGuide: (name: string) => `${name}: la guía`,
    otherLineages: 'Otros linajes',
    overview: (region: string) => `Panorama de ${region}`,
    townsHere: 'Pueblos de onsen de la zona',
    moreOnWater: 'Más sobre el agua',
    pricesTitle: 'Cuánto cuesta',
    pricesDek: (dishes: number) => `${dishes} platos, tres fuentes de precios lado a lado`,
    pricesGo: 'Precios de la comida',
    water: 'Agua',
    entry: 'Entrada',
    hours: 'Horario',
    closed: 'Cierre',
    fromStation: 'Desde la estación',
    onFoot: (min: number) => `${min} min a pie`,
    tattoos: 'Tatuajes',
    towel: 'Toalla',
    english: 'Inglés',
    payment: 'Pago',
    cashOnly: 'Solo efectivo',
    tattooValues: { allowed: 'Permitidos', 'not-allowed': 'No permitidos', conditional: 'Con condiciones' } as Record<string, string>,
    towelValues: { included: 'Incluida', rental: 'De alquiler', bring: 'Trae la tuya' } as Record<string, string>,
    englishValues: { signs: 'Carteles', staff: 'Personal', none: 'Ninguno' } as Record<string, string>,
  },
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
