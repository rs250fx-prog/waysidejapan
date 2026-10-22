/**
 * 公開計画の現在値。GITHUB_TOKEN があれば GitHub の最新を返し（書き込み可）、
 * 無ければ読み取り専用と返す（画面はビルド時点の計画を使う）。
 */
import { type Env, getPlan, json } from './_shared.ts';
import { todayJst } from '../../../src/lib/publishSchedule.js';

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const today = todayJst();
  if (!env.GITHUB_TOKEN) {
    // 切り分け用。値は返さず、名前と型だけ（Access の内側）
    const seen = Object.keys(env).filter((k) => k !== 'ASSETS');
    return json({
      ok: true,
      readonly: true,
      today,
      note: `GITHUB_TOKEN が未設定のため閲覧専用です（関数から見える変数：${seen.join(', ') || 'なし'}／GITHUB_TOKEN の型：${typeof env.GITHUB_TOKEN}）。`,
    });
  }
  try {
    const { plan, sha } = await getPlan(env.GITHUB_TOKEN);
    return json({ ok: true, readonly: false, today, sha, plan });
  } catch (err) {
    return json({ ok: false, error: (err as Error).message }, 502);
  }
};
