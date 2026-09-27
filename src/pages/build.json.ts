/**
 * デプロイが反映されたかを外から確認するための目印。
 *
 * 管理画面は Access の内側にあるため、ブラウザを持たない側からは
 * 「いま本番に出ているのがどのビルドか」が分からない。
 * 公開側に1つだけ、時刻とコミットを置いておく。
 *
 * 秘密は入れない（時刻・ブランチ・短縮コミットのみ）。
 */
import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const env = import.meta.env as Record<string, string | undefined>;
  return new Response(
    JSON.stringify(
      {
        builtAt: new Date().toISOString(),
        commit: env.CF_PAGES_COMMIT_SHA?.slice(0, 7) ?? 'local',
        branch: env.CF_PAGES_BRANCH ?? 'local',
      },
      null,
      2,
    ),
    { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } },
  );
};
