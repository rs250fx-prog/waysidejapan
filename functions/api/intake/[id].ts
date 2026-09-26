/**
 * 入稿1件の取得・更新・削除。
 *
 * GET    /api/intake/:id            1件（AI が読むのはこの JSON）
 * PUT    /api/intake/:id            更新（全置き換え）
 * DELETE /api/intake/:id
 */

interface Env {
  DB: D1Database;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const CATEGORIES = ['rail', 'eat', 'soak', 'konbini', 'column', 'ride'];
const STATUSES = ['draft', 'ready', 'written'];

export const onRequestGet: PagesFunction<Env> = async ({ params, env }) => {
  const row = await env.DB.prepare('SELECT * FROM intake_article WHERE id = ?').bind(params.id).first();
  if (!row) return json({ error: 'not found' }, 404);
  return json({ ...row, data: JSON.parse(String(row.data ?? '{}')) });
};

export const onRequestPut: PagesFunction<Env> = async ({ request, params, env }) => {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'invalid json' }, 400);
  }

  const existing = await env.DB.prepare('SELECT id FROM intake_article WHERE id = ?').bind(params.id).first();
  if (!existing) return json({ error: 'not found' }, 404);

  const category = String(body.category ?? '');
  if (!CATEGORIES.includes(category)) return json({ error: 'unknown category' }, 400);

  await env.DB.prepare(
    'UPDATE intake_article SET locale = ?, category = ?, slug = ?, title = ?, status = ?, data = ?, updated_at = ? WHERE id = ?',
  )
    .bind(
      String(body.locale ?? 'en'),
      category,
      body.slug ? String(body.slug) : null,
      String(body.title ?? ''),
      STATUSES.includes(String(body.status)) ? String(body.status) : 'draft',
      JSON.stringify(body.data ?? {}),
      new Date().toISOString(),
      params.id,
    )
    .run();

  return json({ ok: true });
};

export const onRequestDelete: PagesFunction<Env> = async ({ params, env }) => {
  await env.DB.prepare('DELETE FROM intake_article WHERE id = ?').bind(params.id).run();
  return json({ ok: true });
};
