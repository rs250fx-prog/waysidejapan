/**
 * 公開管理画面（/admin/publish/）用の記事一覧。公開前の記事も含む。
 *
 * /admin 配下に置くので、Cloudflare Access と functions/_middleware.ts が守る
 * （公開サイトの sitemap.xml や記事一覧には出さない）。
 * 書き込み API（functions/api/publish/set.ts）も、この一覧で slug の実在とカテゴリを確かめる。
 */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { parseId } from '../../content.config.ts';
import publishPlan from '../../../docs/publish-plan.json';

export const GET: APIRoute = async () => {
  const all = await getCollection('articles');
  const articles = all
    .map((a) => {
      const p = parseId(a.id);
      return {
        slug: p.slug as string,
        locale: p.locale,
        category: a.data.category as string,
        title: a.data.title,
        kind: a.data.kind,
        hero: !!a.data.heroImage,
        draft: a.data.draft,
        pubDate: a.data.pubDate.toISOString().slice(0, 10),
      };
    })
    .filter((a) => a.locale === 'en' && ['eat', 'soak', 'column'].includes(a.category))
    .map(({ locale: _locale, ...rest }) => rest)
    .sort((a, b) => a.slug.localeCompare(b.slug));

  return new Response(JSON.stringify({ builtAt: new Date().toISOString(), plan: publishPlan, articles }), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
};
