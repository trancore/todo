# Todo Next.js FrontEnd

## 📡使用ライブラリ・フレームワーク

| ライブラリ・フレームワーク | バージョン | 使用意図                                                         |
| -------------------------- | ---------- | ---------------------------------------------------------------- |
| Volta                      | v1.1.1     | Node.js管理ツール                                                |
| Yarn                       | v1.22.19   | Nodeのpackageマネージャー                                        |
| TypeScript                 | v5.2.2     | 静的型付け用言語                                                 |
| React.js                   | v18        | JavaScriptライブラリ                                             |
| Next.js                    | v14.0.4    | React.jsのWebフレームワーク                                      |
| Styled-component           | v6.1.6     | CSS-in-JS                                                        |
| Storybook                  | v7.6.7     | コンポーネントのデザインカタログ用フレームワーク                 |
| React-Hooks-Form           | v7.49.2    | フォーム用ライブラリ                                             |
| yup                        | v1.3.3     | バリデーションスキーマ用ライブラリ                               |
| axios                      | v1.6.8     | データフェッチライブラリリ                                       |
| Redux                      | v9.1.0     | 状態管理ライブラリ                                               |
| RTK Query                  | v2.0.1     | データフェッチとキャッシュ用ライブラリ                           |
| msw                        | v2.0.11    | APIモックサーバ用ライブラリ                                      |
| jest                       | v29.7.0    | Unit Test, コンポーネントテスト用ライブラリ                      |
| testing-library/react      | v14.1.2    | React用testing-libraryで、便利なテスティングマッチャーを提供する |
| Cypress                    | v13.6.2    | E2E Test用ライブラリ                                             |

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

### 4.JavaScript 実装

#### Formライブラリとバリデーション

Formライブラリには、[React-Hooks-Form](https://react-hook-form.com/get-started)を使用しています。以前から使用しているライブラリであり、後述するバリデーションスキーマである[yup](https://github.com/jquense/yup)の導入も既知であるため使用しています。他ライブラリを使用する理由がなかったため、React-Hooks-Formを選択しました。

バリデーションスキーマには、yupを用いています。別のバリデーションスキーマにはzodがあるのですが、私自身はyupしか使ったことが無く、zodを使ったことがありません。

参考：[react-hook-formでyupとzodの違いを検証](https://zenn.dev/wintyo/articles/6122304cb56c86)

React-Hooks-Formとyupの実装は、[src/pages/register/index.tsx](/apps/front/todo-nextjs/src/pages/register/index.tsx)を参考にしてください。

#### Reduxによる状態管理

[Redux](https://redux.js.org/introduction/getting-started)は以下のデータフローによって状態を管理しています。

![データフロー図](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

詳しい説明は公式ドキュメントを参考していただきたいですが、

1. 何らかのイベントなどによって
2. Dispatchを呼び出し
3. Actionによって、どのようなStoreの更新を行うかを選択し
4. ReducerでStoreの内容を更新し、
5. 各画面(UI)で取得しているStore情報が更新される

かと思います。

現在のReduxでは、`slice`によって`state`, `reducer`, `action`を定義してしまいます（[定義の例](/apps/front/todo-nextjs/src/features)）。これらを`reducer`として`Store`に登録しています（[登録の例](/apps/front/todo-nextjs/src/store/root.ts)）。

そして、上記で定義した`Store`や`State`の情報を型情報として持つために、`dispatch`, `Store`を取得するための`hooks`を作成しています（[hooksの例](/apps/front/todo-nextjs/src/hooks/useRedux.ts)）。

#### RTK Queryを使ったfetchとキャッシュ保持

[RTK Query](https://redux.js.org/introduction/getting-started)は、fetchしたデータを上記のstore機構を使ってキャッシュを保持しているのではないか、と思う。。（ここは、公式ドキュメントを確認する）。

特に何も設定しなければ、RTK Queryはfetchライブラリをwrapしており、このライブラリをfetcherとしています。もちろん、axiosをfetcherとして設定することもできます（[Axiosの設定例](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery)）。

fetchした情報をキャッシュに保持するには、`services`としてfetchするエンドポイントや`header`の設定を行います([servicesの定義例](/apps/front/todo-nextjs/src/services/todo.ts))。このservicesをstoreに登録します([storeへの登録例](/apps/front/todo-nextjs/src/store/root.ts))。

SSRで使う場合は、[next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)を使う[方法が公式で説明されています](https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering)。

#### fetchのエラーハンドリング

RTK Queryのエラーハンドリングは、fetch hooksから`unwrap`関数をチェーンして`then`関数、`catch`関数を使ってエラーハンドリングを行います。

#### mock server

mswは、API fetchをinterceptすることで、リクエストやレスポンスなどを代替して通信します。
json-serverのようなThird Partyライブラリによるサーバの起動やNextのAPI Routesを使わない場合は、[/src/mock/server.ts](/apps/front/todo-nextjs/src/mock/server.ts)と[/src/mock/browser.ts](/apps/front/todo-nextjs/src/mock/browser.ts)を用意し、サーバレンダリング時やクライアントレンダリング後のfetchをinterceptできるようにする必要があります。
