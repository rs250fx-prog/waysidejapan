/**
 * 入稿の一覧と新規作成。認証は functions/_middleware.ts が済ませている。
 *
 * GET  /api/intake            一覧（status で絞れる）
 * POST /api/intake            新規作成
 */

interface Env {
  DB: D1Database;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

const CATEGORIES = ['rail', 'eat', 'soak', 'konbini', 'column', 'ride'];
const STATUSES = ['draft', 'ready', 'written'];

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
  const url = new URL(request.url);
  const status = url.searchParams.get('status');

  const sql = status
    ? 'SELECT id, locale, category, slug, title, status, created_at, updated_at FROM intake_article WHERE status = ? ORDER BY updated_at DESC LIMIT 200'
    : 'SELECT id, locale, category, slug, title, status, created_at, updated_at FROM intake_article ORDER BY updated_at DESC LIMIT 200';

  const stmt = status ? env.DB.prepare(sql).bind(status) : env.DB.prepare(sql);
  const { results } = await stmt.all();
  return json({ items: results });
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env, data }) => {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ error: 'invalid json' }, 400);
  }

  const category = String(body.category ?? '');
  if (!CATEGORIES.includes(category)) return json({ error: 'unknown category' }, 400);

  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  const payload = {
    ...(typeof body.data === 'object' && body.data ? body.data : {}),
    _createdBy: (data as { email?: string })?.email ?? null,
  };

  await env.DB.prepare(
    'INSERT INTO intake_article (id, locale, category, slug, title, status, data, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
  )
    .bind(
      id,
      String(body.locale ?? 'en'),
      category,
      body.slug ? String(body.slug) : null,
      String(body.title ?? ''),
      STATUSES.includes(String(body.status)) ? String(body.status) : 'draft',
      JSON.stringify(payload),
      now,
      now,
    )
    .run();

  return json({ id }, 201);
};
