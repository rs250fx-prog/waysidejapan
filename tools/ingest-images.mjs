/**
 * inbox/images/ に置かれた記事画像を、記事ごとの置き場へ移す。
 *
 *   node tools/ingest-images.mjs
 *
 * ファイル名は `<slug>-hero.<拡張子>` と `<slug>-body.<拡張子>`（docs/IMAGE-PROMPTS.md の「保存名」）。
 * slug から記事（src/content/en/<category>/<slug>.mdx）を探し、
 * webp に変換して src/assets/<category>/<slug>-hero.webp / -body.webp に書き出す。
 * 書き出せたものは inbox から消す。同じ名前が既にあれば上書き（描き直しの差し替え）。
 *
 * .mdx は書き換えない。heroImage・heroAlt と本文の <Figure> の位置・キャプションは
 * 絵の中身を見て決めるので、人（か Claude）が書く。最後に一覧を出すので、それを見て進める。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const INBOX = path.join(ROOT, 'inbox', 'images');
const CONTENT = path.join(ROOT, 'src', 'content', 'en');
const ASSETS = path.join(ROOT, 'src', 'assets');
// articleHero の入稿サイズ（src/lib/images.ts）。これより大きければ縮め、小さければそのまま
const MAX_WIDTH = 2400;

const NAME = /^(.+)-(hero|body)\.(png|jpe?g|webp)$/i;

/** slug → category。記事の .mdx がある場所で決める */
const articles = new Map();
for (const category of fs.readdirSync(CONTENT)) {
  const dir = path.join(CONTENT, category);
  if (!fs.statSync(dir).isDirectory()) continue;
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.mdx')) articles.set(f.slice(0, -4), { category, file: path.join(dir, f) });
  }
}

const files = fs.existsSync(INBOX) ? fs.readdirSync(INBOX).filter((f) => !f.startsWith('.') && f !== 'README.md') : [];
if (files.length === 0) {
  console.log('inbox/images/ は空です');
  process.exit(0);
}

const done = [];
const skipped = [];
for (const f of files.sort()) {
  const m = NAME.exec(f);
  if (!m) {
    skipped.push(`${f}: 名前が <slug>-hero / <slug>-body になっていない`);
    continue;
  }
  const [, slug, kind] = m;
  const article = articles.get(slug);
  if (!article) {
    skipped.push(`${f}: 記事 ${slug} が見つからない`);
    continue;
  }
  const outDir = path.join(ASSETS, article.category);
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, `${slug}-${kind.toLowerCase()}.webp`);
  const replaced = fs.existsSync(out);
  const src = path.join(INBOX, f);
  // 先にメモリへ読む。Windows では sharp がファイルを開いたままにして、後の削除が EBUSY で失敗する
  const buf = fs.readFileSync(src);
  const meta = await sharp(buf).metadata();
  await sharp(buf)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(out);
  fs.unlinkSync(src);

  const mdx = fs.readFileSync(article.file, 'utf8');
  done.push({
    url: `/en/${article.category}/${slug}/`,
    kind: kind.toLowerCase(),
    asset: path.relative(ROOT, out).replace(/\\/g, '/'),
    size: `${meta.width}x${meta.height}`,
    replaced,
    // 次の作業の目安：まだ記事に組み込まれていないか
    wired: kind.toLowerCase() === 'hero' ? /^heroImage:/m.test(mdx) : mdx.includes(`${slug}-body.webp`),
  });
}

for (const d of done) {
  const notes = [d.replaced ? '上書き' : '新規', d.wired ? '記事に設定済み' : '記事への組み込みが必要'];
  if (!/^\d+x\d+$/.test(d.size) || Number(d.size.split('x')[0]) < 1200) notes.push(`小さい（${d.size}）`);
  console.log(`${d.url} ${d.kind} → ${d.asset}（${notes.join('・')}）`);
}
for (const s of skipped) console.log(`× ${s}`);
console.log(`\n${done.length} 枚を移しました${skipped.length ? `／${skipped.length} 枚は残しました` : ''}`);
