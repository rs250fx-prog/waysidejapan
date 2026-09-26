import rates from '../data/rates.json';
import { DISPLAY_CURRENCIES } from '../config.ts';

const SYMBOL: Record<string, string> = { USD: '$', EUR: '€', GBP: '£', AUD: 'A$', TWD: 'NT$', KRW: '₩' };

/**
 * 円を概算表示に変換する。
 * 丸めは整数、1未満のときだけ小数1桁。「≈」で概算であることを示す。
 */
export function convert(jpy: number, currency: string): string | null {
  const rate = (rates.rates as Record<string, number>)[currency];
  if (!rate) return null;
  const value = jpy * rate;
  const rounded = value < 1 ? value.toFixed(1) : Math.round(value).toLocaleString('en-US');
  return `${SYMBOL[currency] ?? currency + ' '}${rounded}`;
}

export function formatJpy(jpy: number): string {
  return `¥${jpy.toLocaleString('en-US')}`;
}

/** ¥22,000 (≈ $148 / €137) */
export function formatPrice(jpy: number, currencies: readonly string[] = DISPLAY_CURRENCIES): string {
  const parts = currencies.map((c) => convert(jpy, c)).filter((v): v is string => v !== null);
  return parts.length ? `${formatJpy(jpy)} (≈ ${parts.join(' / ')})` : formatJpy(jpy);
}

export const ratesAsOf = rates.asOf;

/** 記事フッタの注記用。1ドルあたりの円 */
export function jpyPerUsd(): string {
  const usd = (rates.rates as Record<string, number>).USD;
  return usd ? (1 / usd).toFixed(2) : '—';
}

export function formatAsOf(iso: string): string {
  const d = new Date(iso + 'T00:00:00Z');
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

/** pricesCheckedOn の表示（Fares verified Aug 2026） */
export function formatMonth(date: Date): string {
  return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
}
