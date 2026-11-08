/**
 * Column と Rail の目次の区切り（src/data/guides.ts）の表示文言の上書き表。
 * キーは section.key（OTHER_SECTION の 'other' を含む）。無い言語・項目は英語に落ちる。`en` は元のファイルから作る。
 * 漢字1字（glyph）は翻訳しない。
 */
import type { Locale } from '../../config.ts';
import { COLUMN_TOPICS, RAIL_GROUPS, OTHER_SECTION, type GuideSection } from '../../data/guides.ts';

export interface SectionText {
  label: string;
  note?: string;
}
type Table = Record<string, SectionText>;

const en: Table = Object.fromEntries(
  [...COLUMN_TOPICS, ...RAIL_GROUPS, OTHER_SECTION].map((g) => [g.key, { label: g.label, ...(g.note !== undefined && { note: g.note }) }]),
);
const ko: Table = {
  manners: { label: '식사 예절', note: '실제로 기대되는 것과, 그렇다고 말만 전해지는 것' },
  ordering: { label: '주문과 계산', note: '식권 발매기, 계산서, 예약과 줄서기' },
  needs: { label: '식이 제한과 아이' },
  buying: { label: '식품과 기념품 사기' },
  kitchen: { label: '음식은 어떻게 만들어지나' },
  travel: { label: '현지 규칙과 법', note: '혼잡, 추가 요금, 그리고 예절이 끝나고 법이 시작되는 곳' },
  'setouchi-area-pass': { label: 'Setouchi Area Pass', note: '티켓 한 장으로 7일간 세토내해를 가로지릅니다' },
  routes: { label: '노선과 환승' },
  other: { label: '기타' },
};
const fr: Table = {
  manners: { label: 'Manières de table', note: 'Ce qu’on attend réellement, et ce dont on dit seulement que c’est attendu' },
  ordering: { label: 'Commander et payer', note: 'Distributeurs de tickets, addition, réservations et files d’attente' },
  needs: { label: 'Régimes alimentaires et enfants' },
  buying: { label: 'Acheter de la nourriture et des souvenirs' },
  kitchen: { label: 'Comment la nourriture est faite' },
  travel: { label: 'Règles locales et loi', note: 'Affluence, frais, et là où les manières s’arrêtent et où la loi commence' },
  'setouchi-area-pass': { label: 'Setouchi Area Pass', note: 'Sept jours à travers la mer intérieure avec un seul billet' },
  routes: { label: 'Itinéraires et correspondances' },
  other: { label: 'Autres' },
};
const es: Table = {
  manners: { label: 'Modales en la mesa', note: 'Lo que realmente se espera, y lo que solo se dice que se espera' },
  ordering: { label: 'Pedir y pagar', note: 'Máquinas de tickets, la cuenta, reservas y colas' },
  needs: { label: 'Necesidades dietéticas y niños' },
  buying: { label: 'Comprar comida y recuerdos' },
  kitchen: { label: 'Cómo se hace la comida' },
  travel: { label: 'Normas locales y la ley', note: 'Aglomeraciones, cargos, y dónde acaban los modales y empieza la ley' },
  'setouchi-area-pass': { label: 'Setouchi Area Pass', note: 'Siete días por el mar interior con un solo billete' },
  routes: { label: 'Rutas y transbordos' },
  other: { label: 'Otros' },
};
export const table: { en: Table } & Partial<Record<Exclude<Locale, 'en'>, Table>> = { en, ko, fr, es };

const of = (g: GuideSection, locale: string) => (table as Record<string, Table | undefined>)[locale]?.[g.key];
export const sectionLabel = (g: GuideSection, locale: string): string => of(g, locale)?.label ?? g.label;
export const sectionNote = (g: GuideSection, locale: string): string | undefined => of(g, locale)?.note ?? g.note;
