/**
 * 仮当ての画像（noimage）を作る。写真・イラストが揃うまで記事の枠を埋める。
 *
 *   node tools/make-noimage.mjs
 *
 * 出力は2つ。中身は同じで、置き場所と大きさだけが違う。
 *   src/assets/noimage.webp        … 記事ヒーロー用。astro:assets が幅を出し分ける
 *   public/images/noimage.webp     … 本文に自動で差し込む枠用（Article.astro が HTML で直接参照するので public に置く）
 * 寸法は src/lib/images.ts の articleHero（3:2・2400×1600）に合わせる。
 */
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(fileURLToPath(new URL('.', import.meta.url)));
const W = 2400;
const H = 1600;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#efe6d6"/>
  <rect x="60" y="60" width="${W - 120}" height="${H - 120}" fill="none" stroke="#c9bba3" stroke-width="6" stroke-dasharray="28 20"/>
  <g transform="translate(${W / 2} ${H / 2 - 120})" fill="none" stroke="#a49a88" stroke-width="14" stroke-linejoin="round">
    <rect x="-170" y="-110" width="340" height="230" rx="26"/>
    <path d="M -70 -110 L -40 -160 L 40 -160 L 70 -110"/>
    <circle cx="0" cy="5" r="70"/>
  </g>
  <text x="${W / 2}" y="${H / 2 + 170}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="88" font-weight="700" letter-spacing="18" fill="#8d8375">NO IMAGE</text>
  <text x="${W / 2}" y="${H / 2 + 260}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="48" font-style="italic" fill="#a49a88">Photo or illustration coming</text>
</svg>`;

const base = sharp(Buffer.from(svg));

const hero = join(ROOT, 'src', 'assets', 'noimage.webp');
mkdirSync(dirname(hero), { recursive: true });
await base.clone().webp({ quality: 80 }).toFile(hero);

const inline = join(ROOT, 'public', 'images', 'noimage.webp');
mkdirSync(dirname(inline), { recursive: true });
await base.clone().resize(1320, 880).webp({ quality: 80 }).toFile(inline);

console.log('noimage: written', hero, inline);
