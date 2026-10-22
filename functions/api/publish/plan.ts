/**
 * 公開計画の現在値。GITHUB_TOKEN があれば GitHub の最新を返し（書き込み可）、
 * 無ければ読み取り専用と返す（画面はビルド時点の計画を使う）。
 */
import { type Env, getPlan, json } from './_shared.ts';
import { todayJst } from '../../../src/lib/publishSchedule.js';

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const today = todayJst();
  if (!env.GITHUB_TOKEN) return json({ ok: true, readonly: true, today, note: 'GITHUB_TOKEN が未設定のため閲覧専用です。' });
  try {
    const { plan, sha } = await getPlan(env.GITHUB_TOKEN);
    return json({ ok: true, readonly: false, today, sha, plan });
  } catch (err) {
    return json({ ok: false, error: (err as Error).message }, 502);
  }
};
