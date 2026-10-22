/**
 * 公開管理の書き込み。記事 1 本への操作を計画に反映して、GitHub にコミットする。
 * コミットすると Cloudflare Pages が自動でビルドし、公開日になった記事が出る。
 *
 * 守り：
 *   ・Access の検証は functions/_middleware.ts が済ませている（context.data.email に入る）
 *   ・同一オリジンの fetch だけ受ける
 *   ・slug は静的データ（/admin/publish-data.json）に実在するものだけ。カテゴリもそこから取る
 *   ・GITHUB_TOKEN が無ければ書かない
 */
import { type Env, getPlan, json, putPlan } from './_shared.ts';
import { applyAction, todayJst } from '../../../src/lib/publishSchedule.js';

interface Body {
  slug?: string;
  action?: string;
  date?: string;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env, data }) => {
  const url = new URL(request.url);
  if (request.headers.get('Origin') !== url.origin) return json({ ok: false, error: 'forbidden' }, 403);
  if (!env.GITHUB_TOKEN) return json({ ok: false, error: 'github_not_configured' }, 503);

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return json({ ok: false, error: 'bad_request' }, 400);
  }
  const { slug, action, date } = body;

  // 記事の実在とカテゴリは、ビルド時に作った静的データで確かめる
  const metaRes = await env.ASSETS.fetch(new Request(new URL('/admin/publish-data.json', url)));
  if (!metaRes.ok) return json({ ok: false, error: 'meta_unavailable' }, 502);
  const meta = (await metaRes.json()) as { articles: { slug: string; category: string }[] };
  const article = meta.articles.find((a) => a.slug === slug);
  if (!article) return json({ ok: false, error: 'not_found' }, 404);

  const who = (data as { email?: string | null } | undefined)?.email ?? 'unknown';
  try {
    const { plan, sha } = await getPlan(env.GITHUB_TOKEN);
    const result = applyAction(plan, { slug: slug!, cat: article.category, action: action!, date }, todayJst());
    if ('error' in result) return json({ ok: false, error: result.error }, 400);
    if (!result.changed) return json({ ok: true, unchanged: true });
    await putPlan(env.GITHUB_TOKEN, result.plan, sha, `admin: ${action} ${slug}${date ? ` ${date}` : ''} (${who})`);
    return json({ ok: true, note: '反映まで数分かかります（ビルド後に公開状態が変わります）。' });
  } catch (err) {
    const msg = (err as Error).message;
    return json({ ok: false, error: msg }, msg === 'conflict' ? 409 : 502);
  }
};
