# Todo Sveltekit.js FrontEnd

## 📡使用ライブラリ・フレームワーク

| ライブラリ・フレームワーク | バージョン | 使用意図                                                      |
| -------------------------- | ---------- | ------------------------------------------------------------- |
| mise                       | v2026.2.10 | 複数の開発言語やツールのバージョンを一元管理できる cli ツール |
| pnpm                       | v10.29.3   | Nodeのpackageマネージャー                                     |
| TypeScript                 | v5.9.3     | 静的型付け用言語                                              |
| svelte.js                  | v5.49.2    | JavaScriptライブラリ                                          |
| sveltekit.js               | v2.50.2    | svelte.jsのWebフレームワーク                                  |
| tailwindCSS                | v4.1.18    | CSSフレームワーク                                             |
| Storybook                  | v10.2.8    | コンポーネントのデザインカタログ用フレームワーク              |
| Superforms                 | v2.29.1    | フォーム用ライブラリ                                          |
| zod                        | v4.3.6     | バリデーションスキーマ用ライブラリ                            |
| Tanstack query for svelte  | v6.0.18    | データフェッチとキャッシュ用ライブラリ                        |
| orval                      | v8.3.0     | OpenAPIから型情報を生成するライブラリ                         |
| msw                        | v2.12.7    | APIモックサーバ用ライブラリ                                   |
| paraglid                   | ^2.10.0    | 国際化ライブラリ                                              |
| vitest                     | v4.0.18    | Unit Test, コンポーネントテスト用ライブラリ                   |
| playwright                 | v1.58.1    | E2E Test用ライブラリ                                          |

## 主な npm scripts について

| script      | 内容                                         |
| ----------- | -------------------------------------------- |
| `build`     | ビルド用コマンド。成果物を生成します。       |
| `check`     | 型やsvelteでの構文チェック用コマンド。       |
| `dev`       | 開発サーバ起動用コマンド。                   |
| `format`    | prettierによるフォーマット用コマンド。       |
| `lint`      | prettierとESLintによる構文チェック用コマンド |
| `prepare`   | sveltekit用型定義の生成用コマンド            |
| `preview`   | 本番用ビルドアプリケーションの確認用コマンド |
| `storybook` | storybookサーバ起動用コマンド                |
| `test`      | テスト用コマンド                             |

## 📚ライブラリ・フレームワークのインストール

```zsh
# ライブラリのインストール
pnpm install
```

## 🌲環境変数

### Next.jsアプリケーション用の環境変数

ルートディレクトリに.envファイルを作成して、そのファイルに設定します。

以下の環境変数に対して、クライアントIDやクライアントシークレットーキーを各種サービスから取得して設定してください。

<!-- TODO: 必要なときに記載する -->

```zsh

```

## フロントエンド開発の進め方

### 1. 技術選定

[issue: SvelteKitの環境構築と技術選定 #20](https://github.com/trancore/todo/issues/20)

### 2. コンポーネント設計

### 4.JavaScript 実装

#### JavaScript実装時の共通実装

##### Formライブラリとバリデーション

##### Reduxによる状態管理

##### RTK Queryを使ったfetchとキャッシュ保持

##### RTK QueryのSSR対応

##### fetchのエラーハンドリング

##### mock server

#### paraglidと国際化対応

### 5.SEOとパフォーマンス最適化

### 6.自動テスト

#### Unitテスト

#### EtoEテスト
