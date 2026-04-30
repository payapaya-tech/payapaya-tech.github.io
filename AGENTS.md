# AGENTS.md

このファイルは、AIエージェント（Claude Code、Codexなど）がこのリポジトリで作業する際の共通ガイドラインを記載します。

## プロジェクト概要

payapaya のコーポレートサイト。Next.js の静的書き出し（`output: 'export'`）で生成し、`out/` を任意の静的ホスティング（Cloudflare Pages / Netlify / S3 / GitHub Pages など）にデプロイする想定。デプロイ先は未定で、CI も現時点では用意していない。

## ディレクトリ構成

- `app/` — App Router のページ・レイアウト・グローバル CSS
- `components/ui/` — shadcn/ui で生成したコンポーネント
- `lib/` — `cn()` などの共通ユーティリティ
- `public/` — 画像など静的アセット
- `out/` — `npm run build` の生成物（gitignore 済み）

## 開発コマンド

パッケージマネージャは **npm** に統一する。`pnpm` / `yarn` は使わない。

- `npm install` — 依存インストール
- `npm run dev` — 開発サーバー起動（http://localhost:3000）
- `npm run build` — 静的書き出しビルド（`out/` を生成）
- `npm run start` — 注意: `output: 'export'` 構成では使えないため利用しない
- `npm run lint` — ESLint
- `npx shadcn@latest add <component>` — shadcn コンポーネント追加
- `npx serve out` — ビルド結果のローカル配信（動作確認用）

## コーディング規約

- TypeScript / React 19 / Next.js 16（App Router）
- Tailwind CSS v4（PostCSS プラグイン方式）。クラス順は `prettier-plugin-tailwindcss` に任せる
- shadcn/ui は `base-nova` プリセット（Base UI 由来）。Button などの primitive ラッパーは `components/ui/` 配下に置く
- 整形は Prettier、Lint は Next.js の ESLint フラットコンフィグに従う
- import エイリアスは `@/*`（リポジトリ直下が基点）

## 注意事項

- **静的書き出し前提**のため、以下の Next.js 機能は使えない:
  - API Routes / Route Handlers のランタイム実行
  - Middleware
  - ISR / `revalidate`
  - Server Actions
- 動的ルート（`[slug]` 等）を増やすときは `generateStaticParams` で全パスを列挙すること
- `next/image` は `images.unoptimized: true` 設定なので最適化されない。サイズや形式はソース側で整える
- `node_modules` は devcontainer の named volume にマウントされているので、サブディレクトリにプロジェクトを切り出さない
