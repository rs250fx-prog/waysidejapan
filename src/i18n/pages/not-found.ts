/** 404（src/pages/404.astro）の文言 */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  title: 'Page not found',
  description: 'This page does not exist on Wayside Japan. Start again from the guides, the food price reference or the front page.',
  heading: 'This stop is not on the line',
  dek: 'The page you asked for does not exist, or it has moved. Nothing is broken on your side. Pick up the route from one of these.',
  front: 'Front page',
  prices: 'What food costs in Japan',
};

export type Strings = typeof en;

const ko: Strings = {
  title: '페이지를 찾을 수 없습니다',
  description: '이 페이지는 Wayside Japan에 없습니다. 가이드, 음식 가격 참고 자료 또는 첫 페이지에서 다시 시작하세요.',
  heading: '이 정차역은 노선에 없습니다',
  dek: '요청하신 페이지가 없거나 옮겨졌습니다. 문제가 생긴 것은 아니니 걱정하지 마세요. 아래 링크에서 다시 이어 가시기 바랍니다.',
  front: '첫 페이지',
  prices: '일본 음식 물가',
};

const fr: Strings = {
  title: 'Page introuvable',
  description: 'Cette page n’existe pas sur Wayside Japan. Repartez des guides, du référentiel des prix de la nourriture ou de la page d’accueil.',
  heading: 'Cet arrêt n’est pas sur la ligne',
  dek: 'La page demandée n’existe pas, ou elle a été déplacée. Rien n’est cassé de votre côté. Reprenez la route depuis l’un de ces liens.',
  front: 'Page d’accueil',
  prices: 'Ce que coûte la nourriture au Japon',
};

const es: Strings = {
  title: 'Página no encontrada',
  description: 'Esta página no existe en Wayside Japan. Empieza de nuevo desde las guías, la referencia de precios de comida o la portada.',
  heading: 'Esta parada no está en la línea',
  dek: 'La página que buscas no existe o se ha movido. No hay nada roto por tu parte. Retoma la ruta desde uno de estos enlaces.',
  front: 'Portada',
  prices: 'Cuánto cuesta comer en Japón',
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
