/** フッタ（src/components/SiteFooter.astro）の文言。「Disclosure」「Privacy」「Search」は ui.ts にある */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  soon: 'Soon',
  planned: 'Planned',
  inProgress: 'In progress',
  colAreas: 'Areas',
  colGuides: 'Guides',
  colPlan: 'Plan a trip',
  colAbout: 'About',
  siteMapLabel: 'Site map',
  foodCosts: 'What food costs',
  passes: 'Rail passes, compared',
  itineraries: 'Itineraries',
  budget: 'Budget calculator',
  whoWrites: 'Who writes this',
  correction: 'Send a correction',
  letterTitle: 'One letter a month',
  letterBlurb: 'What changed in fares, what opened, and one place I would go back to. No sponsored posts.',
  emailLabel: 'Email address',
  subscribe: 'Subscribe',
  letterSoon: '— the letter starts once there are enough guides to be worth one.',
  /** タグラインに続く文。tagline は config の TAGLINE */
  statement: (tagline: string) =>
    `${tagline} Written in Japan by someone who eats here. Every photograph is mine, and every fare says the month it was checked.`,
  affiliateStatement: ' Some links are affiliate links; they never change what gets recommended.',
  language: 'Language',
  cookieSettings: 'Cookie settings',
  backToTop: 'Back to top ↑',
};

export type Strings = typeof en;

const ko: Strings = {
  soon: '준비 중',
  planned: '예정',
  inProgress: '작성 중',
  colAreas: '지역',
  colGuides: '가이드',
  colPlan: '여행 계획',
  colAbout: '소개',
  siteMapLabel: '사이트 맵',
  foodCosts: '일본 음식 물가',
  passes: '철도 패스 비교',
  itineraries: '여행 일정',
  budget: '예산 계산기',
  whoWrites: '글쓴이 소개',
  correction: '정정 제보',
  letterTitle: '매달 한 통의 편지',
  letterBlurb: '요금이 어떻게 바뀌었는지, 무엇이 새로 문을 열었는지, 그리고 다시 가고 싶은 곳 한 곳을 전해 드립니다. 협찬 글은 없습니다.',
  emailLabel: '이메일 주소',
  subscribe: '구독',
  letterSoon: '— 편지는 보낼 만큼 가이드가 쌓이면 시작합니다.',
  statement: (tagline: string) =>
    `${tagline} 이곳에서 직접 먹는 사람이 일본에서 씁니다. 모든 사진은 제가 찍은 것이며, 모든 요금에는 확인한 달을 적습니다.`,
  affiliateStatement: ' 일부 링크는 제휴 링크이지만, 무엇을 추천할지에는 영향을 주지 않습니다.',
  language: '언어',
  cookieSettings: '쿠키 설정',
  backToTop: '맨 위로 ↑',
};

const fr: Strings = {
  soon: 'Bientôt',
  planned: 'Prévu',
  inProgress: 'En cours',
  colAreas: 'Régions',
  colGuides: 'Guides',
  colPlan: 'Préparer son voyage',
  colAbout: 'À propos',
  siteMapLabel: 'Plan du site',
  foodCosts: 'Ce que coûte la nourriture',
  passes: 'Pass ferroviaires comparés',
  itineraries: 'Itinéraires',
  budget: 'Calculateur de budget',
  whoWrites: 'Qui écrit ici',
  correction: 'Signaler une erreur',
  letterTitle: 'Une lettre par mois',
  letterBlurb: 'Ce qui a changé dans les tarifs, ce qui a ouvert, et un endroit où je retournerais. Aucun article sponsorisé.',
  emailLabel: 'Adresse e-mail',
  subscribe: 'S’abonner',
  letterSoon: '— la lettre démarrera quand il y aura assez de guides pour en valoir la peine.',
  statement: (tagline: string) =>
    `${tagline} Écrit au Japon par quelqu’un qui mange ici. Chaque photographie est de moi, et chaque tarif indique le mois où il a été vérifié.`,
  affiliateStatement: ' Certains liens sont des liens d’affiliation ; ils ne changent jamais ce qui est recommandé.',
  language: 'Langue',
  cookieSettings: 'Paramètres des cookies',
  backToTop: 'Haut de page ↑',
};

const es: Strings = {
  soon: 'Próximamente',
  planned: 'Previsto',
  inProgress: 'En curso',
  colAreas: 'Zonas',
  colGuides: 'Guías',
  colPlan: 'Planifica tu viaje',
  colAbout: 'Acerca de',
  siteMapLabel: 'Mapa del sitio',
  foodCosts: 'Cuánto cuesta comer',
  passes: 'Pases de tren comparados',
  itineraries: 'Itinerarios',
  budget: 'Calculadora de presupuesto',
  whoWrites: 'Quién escribe esto',
  correction: 'Enviar una corrección',
  letterTitle: 'Una carta al mes',
  letterBlurb: 'Qué ha cambiado en las tarifas, qué ha abierto y un lugar al que volvería. Sin publicaciones patrocinadas.',
  emailLabel: 'Correo electrónico',
  subscribe: 'Suscribirme',
  letterSoon: '— la carta empezará cuando haya suficientes guías como para que valga la pena.',
  statement: (tagline: string) =>
    `${tagline} Escrito en Japón por alguien que come aquí. Cada fotografía es mía y cada tarifa indica el mes en que se comprobó.`,
  affiliateStatement: ' Algunos enlaces son de afiliado; nunca cambian lo que se recomienda.',
  language: 'Idioma',
  cookieSettings: 'Ajustes de cookies',
  backToTop: 'Volver arriba ↑',
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
