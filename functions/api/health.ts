/**
 * 配線の確認だけに使う。認証の外に置くので、値は一切返さない。
 * 「設定されているか」「D1 に届くか」の真偽と、実行中の環境名だけ。
 */

interface Env {
  DB?: D1Database;
  CF_ACCESS_TEAM_DOMAIN?: string;
  CF_ACCESS_AUD?: string;
  CF_PAGES_BRANCH?: string;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  let dbReachable = false;
  let tables: number | null = null;

  if (env.DB) {
    try {
      const row = await env.DB.prepare(
        "SELECT COUNT(*) AS n FROM sqlite_master WHERE type='table' AND name IN ('intake_article','intake_trip')",
      ).first<{ n: number }>();
      tables = row?.n ?? 0;
      dbReachable = true;
    } catch {
      dbReachable = false;
    }
  }

  return new Response(
    JSON.stringify(
      {
        branch: env.CF_PAGES_BRANCH ?? null,
        d1BindingPresent: Boolean(env.DB),
        d1Reachable: dbReachable,
        intakeTablesFound: tables,
        accessTeamDomainSet: Boolean(env.CF_ACCESS_TEAM_DOMAIN),
        accessAudSet: Boolean(env.CF_ACCESS_AUD),
        adminOpen: Boolean(env.CF_ACCESS_TEAM_DOMAIN && env.CF_ACCESS_AUD),
      },
      null,
      2,
    ),
    { headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } },
  );
};
