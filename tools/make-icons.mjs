/**
 * サイトのマーク（tools/brand/site-icon-source.webp）から、ブラウザと SNS が要求する画像を書き出す。
 *
 *   favicon.ico            … 16/32/48px。.ico しか見ない古い経路と、/favicon.ico を直接取りに来るクローラ用
 *   icon-192.png           … ブラウザのタブ・ヘッダーのマーク・Android
 *   icon-512.png           … 大きく出す場面（PWA の既定サイズ）
 *   apple-touch-icon.png   … 180px。iPhone のホーム画面（iOS が角を丸めるので、角まで塗る）
 *   og-default.png         … 1200×630。記事が自前の画像を持たないときの共有画像
 *
 * マーク：紺の地に赤い日と、丘のあいだを抜けていく道（wayside）。原本は書き出し済みの角丸ラスター。
 * 原本を差し替えたら `node tools/make-icons.mjs` を実行して、出力をコミットする。
 * ビルドでは実行しない（出力は静的ファイルとして public/ に置く）。
 */
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const PUB = new URL('../public/', import.meta.url);
const SRC = fileURLToPath(new URL('brand/site-icon-source.webp', import.meta.url));
const NAVY = '#0b233b';

// 原本は白い余白つき。余白を切り、正方形にそろえる
const trimmed = await sharp(SRC).trim({ threshold: 20 }).toBuffer();
const { width, height } = await sharp(trimmed).metadata();
const side = Math.min(width, height);
const square = await sharp(trimmed).resize(side, side, { fit: 'cover' }).png().toBuffer();

// 角の白を透明にする。原本の角丸（一辺の約17%）より少し大きく切り、白い縁を残さない
const radius = Math.round(side * 0.19);
const mask = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${side}" height="${side}"><rect width="${side}" height="${side}" rx="${radius}" fill="#fff"/></svg>`,
);
const rounded = await sharp(square).ensureAlpha().composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();

const png = (size, src = rounded) => sharp(src).resize(size, size).png().toBuffer();

// --- icon-192 / icon-512（角丸・透過） ---
fs.writeFileSync(new URL('icon-192.png', PUB), await png(192));
fs.writeFileSync(new URL('icon-512.png', PUB), await png(512));

// --- apple-touch-icon（透過だと iOS は黒で埋めるので、紺で角まで塗る） ---
const flat = await sharp(rounded).flatten({ background: NAVY }).png().toBuffer();
fs.writeFileSync(new URL('apple-touch-icon.png', PUB), await png(180, flat));

// --- favicon.ico（PNG を3枚入れた ICO コンテナ） ---
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((s) => png(s)));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2); // 種別: icon
header.writeUInt16LE(images.length, 4); // 枚数
let offset = 6 + 16 * images.length;
const entries = images.map((img, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0);
  e.writeUInt8(sizes[i], 1);
  e.writeUInt16LE(1, 4); // planes
  e.writeUInt16LE(32, 6); // bpp
  e.writeUInt32LE(img.length, 8);
  e.writeUInt32LE(offset, 12); // 画像データの開始位置
  offset += img.length;
  return e;
});
fs.writeFileSync(new URL('favicon.ico', PUB), Buffer.concat([header, ...entries, ...images]));

// --- og-default.png ---
// 文字は書き出す環境のシステムフォントで描かれる（Georgia を想定）。
// サイトの書体と完全には一致しないが、共有画像1枚のために書体を埋め込まない
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#faf7f0"/>
  <rect width="1200" height="14" fill="#c0532b"/>
  <path d="M0 470h430M530 470h670" stroke="#c0532b" stroke-width="6" stroke-linecap="round"/>
  <circle cx="480" cy="470" r="34" fill="#faf7f0" stroke="#c0532b" stroke-width="12"/>
  <circle cx="150" cy="470" r="11" fill="#c0532b"/>
  <circle cx="820" cy="470" r="11" fill="#c0532b"/>
  <circle cx="1060" cy="470" r="11" fill="#c0532b"/>
  <text x="90" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="104" font-weight="700" fill="#17161a">Wayside Japan</text>
  <text x="94" y="322" font-family="Georgia, 'Times New Roman', serif" font-size="30" letter-spacing="9" fill="#a8441f">EAT, SOAK.</text>
  <text x="94" y="566" font-family="Georgia, 'Times New Roman', serif" font-size="30" fill="#3d382f">What Japan eats, and why — the price locals pay, with a date.</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile(fileURLToPath(new URL('og-default.png', PUB)));

console.log('favicon.ico / icon-192.png / icon-512.png / apple-touch-icon.png / og-default.png を書き出しました');
