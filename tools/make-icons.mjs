/**
 * public/favicon.svg から、ブラウザと SNS が要求する画像を書き出す。
 *
 *   favicon.ico            … 32px。.ico しか見ない古い経路と、/favicon.ico を直接取りに来るクローラ用
 *   apple-touch-icon.png   … 180px。iPhone のホーム画面
 *   og-default.png         … 1200×630。記事が自前の画像を持たないときの共有画像
 *
 * マークを変えたら `node tools/make-icons.mjs` を実行して、出力をコミットする。
 * ビルドでは実行しない（出力は静的ファイルとして public/ に置く）。
 */
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const PUB = new URL('../public/', import.meta.url);
const mark = fs.readFileSync(new URL('favicon.svg', PUB));

// --- favicon.ico（PNG を1枚だけ入れた ICO コンテナ） ---
const png32 = await sharp(mark, { density: 300 }).resize(32, 32).png().toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2); // 種別: icon
header.writeUInt16LE(1, 4); // 枚数
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);
entry.writeUInt8(32, 1);
entry.writeUInt16LE(1, 4); // planes
entry.writeUInt16LE(32, 6); // bpp
entry.writeUInt32LE(png32.length, 8);
entry.writeUInt32LE(22, 12); // 画像データの開始位置
fs.writeFileSync(new URL('favicon.ico', PUB), Buffer.concat([header, entry, png32]));

// --- apple-touch-icon（iOS が角を丸めるので、角丸なしの塗りつぶしにする） ---
const touch = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#c0532b"/>
  <path d="M6 16h5.6M20.4 16H26" stroke="#fffefa" stroke-width="2.8" stroke-linecap="round"/>
  <circle cx="16" cy="16" r="4.4" fill="none" stroke="#fffefa" stroke-width="2.8"/>
</svg>`;
await sharp(Buffer.from(touch), { density: 600 }).resize(180, 180).png().toFile(fileURLToPath(new URL('apple-touch-icon.png', PUB)));

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
  <text x="94" y="322" font-family="Georgia, 'Times New Roman', serif" font-size="30" letter-spacing="9" fill="#a8441f">RIDE, EAT, SOAK.</text>
  <text x="94" y="566" font-family="Georgia, 'Times New Roman', serif" font-size="30" fill="#3d382f">Western Japan by train, plate and bath — fares with a date.</text>
</svg>`;
await sharp(Buffer.from(og)).png().toFile(fileURLToPath(new URL('og-default.png', PUB)));

console.log('favicon.ico / apple-touch-icon.png / og-default.png を書き出しました');
