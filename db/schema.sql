-- 入稿用のスキーマ（D1 / SQLite）
--
-- 設計の方針：
--   セクションや事実データの行数は記事ごとに変わるので、テーブルを細かく割らず
--   JSON 一本で持つ。読むのは自分と AI だけで、集計もしない。
--   代わりに「あとで絞り込みたい列」だけを実カラムに出しておく。
--
-- 適用：
--   wrangler d1 execute waysidejapan --remote --file=db/schema.sql

CREATE TABLE IF NOT EXISTS intake_article (
  id           TEXT PRIMARY KEY,           -- ULID 相当（クライアント生成）
  locale       TEXT NOT NULL DEFAULT 'en',
  category     TEXT NOT NULL,              -- rail / eat / soak / konbini / column / ride
  slug         TEXT,                       -- 記事の URL になる。未定のあいだは NULL
  title        TEXT NOT NULL DEFAULT '',   -- 日本語の仮タイトルで可
  status       TEXT NOT NULL DEFAULT 'draft',  -- draft / ready / written
  -- 入稿の本体。メタ・結論・事実データ・セクション・FAQ・出典・写真
  data         TEXT NOT NULL DEFAULT '{}',
  created_at   TEXT NOT NULL,
  updated_at   TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_intake_status   ON intake_article (status, updated_at DESC);
CREATE INDEX IF NOT EXISTS idx_intake_category ON intake_article (category, updated_at DESC);

-- 取材ノート（段階2）。記事より前に書くもので、ここから記事候補を切り出す
CREATE TABLE IF NOT EXISTS intake_trip (
  id           TEXT PRIMARY KEY,
  area         TEXT NOT NULL DEFAULT '',
  started_on   TEXT,
  ended_on     TEXT,
  data         TEXT NOT NULL DEFAULT '{}',
  created_at   TEXT NOT NULL,
  updated_at   TEXT NOT NULL
);
