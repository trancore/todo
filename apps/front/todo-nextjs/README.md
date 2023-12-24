# Todo Next.js FrontEnd

## 📡使用ライブラリ・フレームワーク

| ライブラリ・フレームワーク | バージョン | 使用意図                                                         |
| -------------------------- | ---------- | ---------------------------------------------------------------- |
| Volta                      | v1.1.1     | Node.js管理ツール                                                |
| Yarn                       | v1.22.19   | Nodeのpackageマネージャー                                        |
| TypeScript                 | v5.2.2     | 静的型付け用言語                                                 |
| React.js                   | v18        | JavaScriptライブラリ                                             |
| Next.js                    | v14.0.2    | React.jsのWebフレームワーク                                      |
| Styled-component           | v6.1.1     | CSS-in-JS                                                        |
| Storybook                  | v7.6.6     | コンポーネントのデザインカタログ用フレームワーク                 |
| Redux                      | v8.1.3     | 状態管理ライブラリ                                               |
| RTK Query                  | v2.0.1     | データフェッチとキャッシュ用ライブラリ                           |
| msw                        | v2.0.11    | APIモックサーバ用ライブラリ                                      |
| jest                       | v29.7.0    | Unit Test, コンポーネントテスト用ライブラリ                      |
| testing-library/react      | v14.1.2    | React用testing-libraryで、便利なテスティングマッチャーを提供する |
| Cypress                    | v13.6.1    | E2E Test用ライブラリ                                             |

## yarn scriptsについて

| script                  | 内容                                  |
| ----------------------- | ------------------------------------- |
| `dev`                   | 開発環境でのサーバーの起動            |
| `build`                 | Nextアプリケーションのビルド          |
| `start`                 | 本番環境でのサーバーの起動            |
| `format`                | prettierの実行                        |
| `lint`                  | eslintの実行                          |
| `stylelint`             | stylelintの実行                       |
| `build-storybook`       | storybookをビルドする                 |
| `storybook`             | storybookサーバーの起動。             |
| `auto-create-storybook` | storybookファイルの自動生成スクリプト |

## 📚ライブラリ・フレームワークのインストール

```zsh
# ライブラリのインストール
yarn
```

## 📚auto-create-storybook

詳しい使い方は、[こちらのリポジトリ](https://github.com/trancore/auto-create_storybook)をご覧ください。

### 1. 技術選定

[issue: Next.js 開発環境構築と技術選定 #18](https://github.com/trancore/todo/issues/18)

### 2. コンポーネント設計

Next.js では、CSS として `Styled-component`を使用するため、ロジック用コンポーネントと表示用コンポーネントで分ける、
`Container/Presentational`コンポーネントを用いた設計を考えました。これは、CSS用スクリプトとロジック用スクリプトが混在することを防ぎ、可読性を上げるためです。

これより、一つのコンポーネント単位には、`ContainerComponent`と`PresentationalComponent`を含みます。

さらに、この2つの包含関係は、`PresentationalComponent ⊂ ContainerComponent`と定義することにします（つまり、`PresentationalComponent`は`ContainerComponent`に含まれる、という関係になります）。

そのため、`PresentationalComponent`は必ず同じコンポーネントの`ContainerComponent`から呼び出されること、と定義します。
