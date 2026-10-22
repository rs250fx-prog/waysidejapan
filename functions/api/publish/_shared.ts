/**
 * 公開管理 API の共通部品。GitHub 上の docs/publish-plan.json を読み書きする。
 * このファイルは onRequest を export しないので、ルートにはならない。
 *
 * 書き込みには GITHUB_TOKEN（Pages のシークレット）が要る。未設定なら読み取り専用になる。
 * 認証は functions/_middleware.ts（/api は Access の JWT 検証）が済ませている。
 */

export interface Env {
  GITHUB_TOKEN?: string;
  ASSETS: { fetch: (input: Request | string) => Promise<Response> };
}

export const REPO = 'rs250fx-prog/waysidejapan';
export const BRANCH = 'main';
export const PLAN_PATH = 'docs/publish-plan.json';

const api = `https://api.github.com/repos/${REPO}/contents/${PLAN_PATH}`;

const headers = (token: string) => ({
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  'User-Agent': 'waysidejapan-publish-admin',
});

const fromB64 = (b64: string) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\n/g, '')), (c) => c.charCodeAt(0)));
const toB64 = (text: string) => {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
};

export const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

export async function getPlan(token: string): Promise<{ plan: any; sha: string }> {
  const res = await fetch(`${api}?ref=${BRANCH}`, { headers: headers(token) });
  if (!res.ok) throw new Error(`github_read_${res.status}`);
  const body = (await res.json()) as { content: string; sha: string };
  return { plan: JSON.parse(fromB64(body.content)), sha: body.sha };
}

/** sha が古ければ GitHub が 409 を返す。呼び出し側は conflict として扱う */
export async function putPlan(token: string, plan: unknown, sha: string, message: string): Promise<void> {
  const res = await fetch(api, {
    method: 'PUT',
    headers: { ...headers(token), 'content-type': 'application/json' },
    body: JSON.stringify({
      message,
      content: toB64(JSON.stringify(plan, null, 1) + '\n'),
      sha,
      branch: BRANCH,
    }),
  });
  if (res.status === 409 || res.status === 422) throw new Error('conflict');
  if (!res.ok) throw new Error(`github_write_${res.status}`);
}
