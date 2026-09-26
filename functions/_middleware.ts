/**
 * /admin と /api を守る。
 *
 * 前段の Cloudflare Access だけに頼らない。カスタムドメインに Access をかけても
 * *.pages.dev の既定ホストへ直接叩く経路が残るため、Function 側でも
 * JWT を検証する。ヘッダの有無だけを見る実装にしない（ヘッダは呼び出し側が
 * 自由に付けられる）。発行元の公開鍵で署名を検証し、aud と exp まで確認する。
 *
 * そして設定が無ければ誰も通さない（fail closed）。環境変数を入れ忘れたまま
 * 公開された瞬間に無防備、という状態を作らないため。
 *
 * 必要な環境変数（Pages の Settings → Variables）
 *   CF_ACCESS_TEAM_DOMAIN : 例 example.cloudflareaccess.com
 *   CF_ACCESS_AUD         : Access アプリケーションの Audience Tag
 */

interface Env {
  CF_ACCESS_TEAM_DOMAIN?: string;
  CF_ACCESS_AUD?: string;
}

const PROTECTED = [/^\/admin(\/|$)/, /^\/api(\/|$)/];

let cachedKeys: { at: number; keys: Record<string, CryptoKey> } | null = null;

function deny(reason: string, status = 403): Response {
  return new Response(JSON.stringify({ error: reason }), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

function b64urlToBytes(s: string): Uint8Array {
  const pad = s.length % 4 ? '='.repeat(4 - (s.length % 4)) : '';
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + pad);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function loadKeys(teamDomain: string): Promise<Record<string, CryptoKey>> {
  // 1時間だけ使い回す。鍵は回るので永続キャッシュにしない
  if (cachedKeys && Date.now() - cachedKeys.at < 3600_000) return cachedKeys.keys;

  const res = await fetch(`https://${teamDomain}/cdn-cgi/access/certs`);
  if (!res.ok) throw new Error(`certs ${res.status}`);
  const { keys } = (await res.json()) as { keys: JsonWebKey[] };

  const map: Record<string, CryptoKey> = {};
  for (const jwk of keys) {
    const kid = (jwk as JsonWebKey & { kid?: string }).kid;
    if (!kid) continue;
    map[kid] = await crypto.subtle.importKey(
      'jwk',
      jwk,
      { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
      false,
      ['verify'],
    );
  }
  cachedKeys = { at: Date.now(), keys: map };
  return map;
}

async function verify(token: string, env: Required<Pick<Env, 'CF_ACCESS_TEAM_DOMAIN' | 'CF_ACCESS_AUD'>>) {
  const parts = token.split('.');
  if (parts.length !== 3) throw new Error('malformed token');

  const header = JSON.parse(new TextDecoder().decode(b64urlToBytes(parts[0]))) as { kid?: string; alg?: string };
  if (header.alg !== 'RS256') throw new Error(`unexpected alg ${header.alg}`);
  if (!header.kid) throw new Error('no kid');

  const keys = await loadKeys(env.CF_ACCESS_TEAM_DOMAIN);
  const key = keys[header.kid];
  if (!key) throw new Error('unknown kid');

  const ok = await crypto.subtle.verify(
    'RSASSA-PKCS1-v1_5',
    key,
    b64urlToBytes(parts[2]),
    new TextEncoder().encode(`${parts[0]}.${parts[1]}`),
  );
  if (!ok) throw new Error('bad signature');

  const payload = JSON.parse(new TextDecoder().decode(b64urlToBytes(parts[1]))) as {
    aud?: string | string[];
    exp?: number;
    iss?: string;
    email?: string;
  };

  const aud = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!aud.includes(env.CF_ACCESS_AUD)) throw new Error('aud mismatch');

  const now = Math.floor(Date.now() / 1000);
  if (!payload.exp || payload.exp < now) throw new Error('expired');

  if (payload.iss && payload.iss !== `https://${env.CF_ACCESS_TEAM_DOMAIN}`) throw new Error('iss mismatch');

  return payload;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  if (!PROTECTED.some((re) => re.test(url.pathname))) return context.next();

  const { CF_ACCESS_TEAM_DOMAIN, CF_ACCESS_AUD } = context.env;
  // 設定が無ければ開かない
  if (!CF_ACCESS_TEAM_DOMAIN || !CF_ACCESS_AUD) {
    return deny('access is not configured on this deployment', 503);
  }

  const token =
    context.request.headers.get('Cf-Access-Jwt-Assertion') ??
    /(?:^|;\s*)CF_Authorization=([^;]+)/.exec(context.request.headers.get('Cookie') ?? '')?.[1];

  if (!token) return deny('no access token', 401);

  try {
    const payload = await verify(token, { CF_ACCESS_TEAM_DOMAIN, CF_ACCESS_AUD });
    // 後続のハンドラで「誰が書いたか」を記録できるようにする
    context.data = { ...(context.data as object), email: payload.email ?? null };
    return context.next();
  } catch (err) {
    return deny(`invalid access token: ${(err as Error).message}`, 403);
  }
};
