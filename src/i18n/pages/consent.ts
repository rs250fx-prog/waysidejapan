/** Cookie の同意バナー（src/components/ConsentBanner.astro）の文言 */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  title: 'Cookies',
  /** {{link}} の所にプライバシーポリシーへのリンクが入る（文字は privacyLink） */
  body: 'With your OK, Google Analytics counts which pages are read, so I know which guides to improve. Nothing is stored or sent until you choose. {{link}}',
  privacyLink: 'Privacy policy',
  reject: 'Reject',
  accept: 'Accept',
};

export type Strings = typeof en;

const ko: Strings = {
  title: '쿠키',
  body: '동의해 주시면 Google Analytics가 어떤 페이지가 읽히는지 집계하며, 저는 이를 보고 어떤 가이드를 개선할지 판단합니다. 선택하시기 전에는 아무것도 저장되거나 전송되지 않습니다. {{link}}',
  privacyLink: '개인정보 처리방침',
  reject: '거부',
  accept: '동의',
};

const fr: Strings = {
  title: 'Cookies',
  body: 'Avec votre accord, Google Analytics compte les pages lues, ce qui me permet de savoir quels guides améliorer. Rien n’est stocké ni envoyé tant que vous n’avez pas choisi. {{link}}',
  privacyLink: 'Politique de confidentialité',
  reject: 'Refuser',
  accept: 'Accepter',
};

const es: Strings = {
  title: 'Cookies',
  body: 'Con tu permiso, Google Analytics cuenta qué páginas se leen, para que yo sepa qué guías mejorar. No se guarda ni se envía nada hasta que elijas. {{link}}',
  privacyLink: 'Política de privacidad',
  reject: 'Rechazar',
  accept: 'Aceptar',
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
