# Todo Nuxt.js FrontEnd

## 📡 使用ライブラリ・フレームワーク

| ライブラリ・フレームワーク | バージョン | 使用意図                                         |
| -------------------------- | ---------- | ------------------------------------------------ |
| Volta                      | v1.1.1     | Node.js 管理ツール                               |
| npm                        | v10.7.0    | Node の package マネージャー                     |
| TypeScript                 | v5.6.2     | 静的型付け用言語                                 |
| vue-tsc                    | v2.1.6     | Vue に対応した TypeScript コンパイル用ライブラリ |
| Vue.js                     | v3.5.6     | JavaScript フレームワーク                        |
| Nuxt.js                    | v3.13.0    | Vue.js の Web フレームワーク                     |

## yarn scripts について

| script        | 内容                          |
| ------------- | ----------------------------- |
| `build`       | Nuxt アプリケーションのビルド |
| `dev`         | 開発環境でのサーバーの起動    |
| `generate`    | 開発環境でのサーバーの起動    |
| `preview`     | Nuxt アプリケーションのビルド |
| `postinstall` | 本番環境でのサーバーの起動    |

<!-- | `format`                | prettier の実行                        |
| `lint`                  | eslint の実行                          |
| `stylelint`             | stylelint の実行                       |
| `build-storybook`       | storybook をビルドする                 |
| `storybook`             | storybook サーバーの起動。             |
| `auto-create-storybook` | storybook ファイルの自動生成スクリプト | -->

## 📚 ライブラリ・フレームワークのインストール

```zsh
# ライブラリのインストール
npm install
```

## 📚auto-create-storybook

詳しい使い方は、[こちらのリポジトリ](https://github.com/trancore/auto-create_storybook)をご覧ください。

## 🌲 環境変数

### Nuxt.js アプリケーション用の環境変数

<!-- 漏洩してはいけない、Web サービスで登録したクライアント ID やシークレットキーは、ルートディレクトリに.env ファイルを作成して、そのファイルに設定する。

以下の環境変数に対して、クライアント ID やクライアントシークレットーキーを各種サービスから取得して設定してください。

```zsh
# このアプリケーションのドメイン名
NEXT_PUBLIC_DOMAIN=""

# OAuth認可キー
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# NextAuth用API URL
NEXTAUTH_URL=""
# JWTを暗号化しトークンをハッシュするために使用
NEXTAUTH_SECRET=""
```

※ シークレットには openssl コマンドでランダムな文字列を生成すると便利です。

```zsh
openssl rand -base64 32
``` -->

<!-- ### Cypress 用の環境変数

Cypress では、NextAuth.js でログインを行うための EtoE テストを行います。そのため、OAuth サービスへログインするためのユーザー名とパスワードを環境変数として読み込んでいます。またこのような漏洩してしまうと良くない変数については、ルートディレクトリに`cypress.env.json`として設定しています、
このアプリケーションでは Github のみ OAuth サービスを使用していないため、以下のように設定してください。

```json
{
  // GitHubのユーザー名
  "GITHUB_USERNAME": "",
  // GitHubのパスワード
  "GITHUB_PASSWORD": ""
}
``` -->

## フロントエンド開発の進め方

### 1. 技術選定

[issue: Nuxt.js 開発環境構築と技術選定 #19](https://github.com/trancore/todo/issues/19)

### 2. コンポーネント設計

### 4.JavaScript 実装

#### JavaScript 実装時の共通実装

JavaScript を実装するとき、共通仕様として実装する必要があります。これを各個人がそれぞれに実装しようとすると、車輪の発明を行なってしまったり、統一されていないコードを生み出してしまいます。

そのため、ある程度は先に実装しておく必要があります。

##### Form ライブラリとバリデーション

<!-- Form ライブラリには、[React-Hooks-Form](https://react-hook-form.com/get-started)を使用しています。以前から使用しているライブラリであり、後述するバリデーションスキーマである[yup](https://github.com/jquense/yup)の導入も既知であるため使用しています。他ライブラリを使用する理由がなかったため、React-Hooks-Form を選択しました。

バリデーションスキーマには、yup を用いています。別のバリデーションスキーマには zod があるのですが、私自身は yup しか使ったことが無く、zod を使ったことがありません。

参考：[react-hook-form で yup と zod の違いを検証](https://zenn.dev/wintyo/articles/6122304cb56c86)

React-Hooks-Form と yup の実装は、[src/pages/register/index.tsx](/apps/front/todo-nextjs/src/pages/register/index.tsx)を参考にしてください。 -->

##### Pinia による状態管理

<!-- [Redux](https://redux.js.org/introduction/getting-started)は以下のデータフローによって状態を管理しています。

![データフロー図](https://redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

詳しい説明は公式ドキュメントを参考していただきたいですが、

1. 何らかのイベントなどによって
2. Dispatch を呼び出し
3. Action によって、どのような Store の更新を行うかを選択し
4. Reducer で Store の内容を更新し、
5. 各画面(UI)で取得している Store 情報が更新される

かと思います。

現在の Redux では、`slice`によって`state`, `reducer`, `action`を定義してしまいます（[定義の例](/apps/front/todo-nextjs/src/features)）。これらを`reducer`として`Store`に登録しています（[登録の例](/apps/front/todo-nextjs/src/store/root.ts)）。

そして、上記で定義した`Store`や`State`の情報を型情報として持つために、`dispatch`, `Store`を取得するための`hooks`を作成しています（[hooks の例](/apps/front/todo-nextjs/src/hooks/useRedux.ts)）。

##### RTK Query を使った fetch とキャッシュ保持

[RTK Query](https://redux.js.org/introduction/getting-started)は、fetch したデータを上記の store 機構を使ってキャッシュを保持しているのではないか、と思う。。（ここは、公式ドキュメントを確認する）。

特に何も設定しなければ、RTK Query は fetch ライブラリを wrap しており、このライブラリを fetcher としています。もちろん、axios を fetcher として設定することもできます（[Axios の設定例](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery)）。

fetch した情報をキャッシュに保持するには、`services`として fetch するエンドポイントや`header`の設定を行います([services の定義例](/apps/front/todo-nextjs/src/services/todo.ts))。この services を store に登録します([store への登録例](/apps/front/todo-nextjs/src/store/root.ts))。

SSR で使う場合は、[next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)を使う[方法が公式で説明されています](https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering)。

mutation によって情報の削除や更新を行った場合、store に保持しているキャッシュも同様に更新を行う必要があります。データ連携をするには、[RTK Query - Automated re-fetching](https://redux-toolkit.js.org/rtk-query/usage/automated-refetching)の章に説明されていますが、cache tag を使うと良いみたいです。

しかし本アプリで使用したところ、Todo を完了した後に Todo 取得 API を再度 call しても、完了状態前の Todo を取得してきてしまい、情報の更新が行えませんでした。

そのため、action が実行された後に処理を行う onQueryStarted メソッドを使用しました。そのメソッド内で、キャッシュに保存している Todo を完了状態にした Todo の ID でフィルタし、キャッシュの更新を行っています。 -->

##### fetch のエラーハンドリング

<!-- RTK Query のエラーハンドリングは、fetch hooks から`unwrap`関数をチェーンして`then`関数、`catch`関数を使ってエラーハンドリングを行います。 -->

##### mock server

<!-- msw は、API fetch を intercept することで、リクエストやレスポンスなどを代替して通信します。
json-server のような Third Party ライブラリによるサーバの起動や Next の API Routes を使わない場合は、[/src/mock/server.ts](/apps/front/todo-nextjs/src/mock/server.ts)と[/src/mock/browser.ts](/apps/front/todo-nextjs/src/mock/browser.ts)を用意し、サーバレンダリング時やクライアントレンダリング後の fetch を intercept できるようにする必要があります。 -->

<!-- ##### RTK Query の SSR 対応

RTK Query を使って SSR で fetch する場合は、以下を参考にしてください。

- [RTK Query - Server Side Rendering](https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering)

ある程度省略しますが、Page Router の場合、`getStaticProps`や`getServerSideProps`内で API を fetch して store の初期値に情報を設定します。そして、Promise を使って fetch が終わるまで待たせます。

この時、root コンポーネントで設定している store を、server side で取得した情報が保存された store を使うようにする必要があります。そのために、store を wrap し、そのラッパー関数から`getServerSideProps`や`getStaticProps`を使って store に fetch したデータを保存させます。そして、wrap した store を hooks で root コンポーネントに設定します。これを設定しないと、SSR 時に hydration エラーが発生するので注意してください。

また、`createApi`を呼び出す際に、`extractRehydrationInfo`オプションに再ハイドレーションの設定をします。 -->

#### 国際化対応

<!-- Next.js の場合、built-in では現在の言語をサブドメインやパスに含めることができます。そのため、next/router を使用して Locale 情報を取得する必要があります。そして、取得した Locale 情報からテキストが補完されているファイルへアクセスし、テキストを取得します。これらを自力で実装する必要があるため、ライブラリを用いた方が効率的ですし、Next.js 公式でもライブラリを用いることを推奨しています。

本アプリケーションでは、next-intl というライブラリを使っています。そこで、固定文言をできるだけ言語テキストファイルから取得するようにしたいです。
しかし、バリデーションスキーマライブラリである yup でカスタムバリデーションを自作し、そこで固定文言を指定しているとします。この場合、hooks API ベースで開発されている next-intl では、このカスタムバリデーションでうまいこと言語テキストを組み込むことができません。そのため、以下のように eslint の警告を無視する必要があります。

```TypeScript
export function createTodoSchema() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations('libs.yup');

  return yup.object().shape({
    title: yup.string().todoText(t('required')),
    description: yup.string().todoDescription(),
    deadline: yup.date().todoDeadline(),
  });
}
```

そして、この`useTranslations`を`NextIntlClientProvider`内で呼び出すために、スキーマを作成する関数を作り、それをコンポーネント内で呼び出す必要があります。 -->

### 5.SEO とパフォーマンス最適化

### 6.自動テスト

#### モックに初期値は必要か

<!-- モックしようとしているものが変数の場合、初期値を設定するかしないかを考える必要がありました。

初期値を設定する場合、その初期値でテストをする場合に再度テストコードを記載する必要がなくなるため、記述量が少なくなります。

また、条件が複数のテストで共通している場合、重複コードを減らし、冗長性が無くなります。

しかし、テスト間は独立しているべきで、モック変数はテストごとにリセットされるかもしれません。そのため、初期値は設定せず各テストごとに値を指定し直した方が良いかと思います。

以上より、mock 変数には初期値を設定しない方が良いです。

さて、Jest での初期値の実装方法ですが、`jest.fn()`には`mockImplementation`と`mockReturnValue`メソッドがあります。

`mockReturnValue`は、mock している変数を、`jest.fn()`でモックし、これを実行したときに返却される値を設定します。そのため、変数をモックしたい場合に使います。

一方で、`mockImplementation`は、mock しようとしている関数に返り値やメソッド、フィールドもモックしたい場合に用います。 -->

#### モックの初期化

<!-- モックを初期化する場合、`mockReset`を使用します。このとき、定義自体が削除されてしまうため、条件によって値が変わるようなものだけを`mockReset`します。

コンポーネントをモックする場合、基本的には各テストごとにレンダリングした方が良いです。これは、各テストを独立させるためでです。しかし、そのコンポーネント内のすべてにおいてモックする必要がなければ、共通化して使用しても良いかもしれないです。 -->

#### Unit テスト

<!-- このアプリケーションでの Unit テストは、以下のディレクトリやファイルに対してテストを作成します。

- /utils （単なる計算を行うだけの共通関数をまとめたもの）
- /state （状態管理や RTK Query を使用した際のキャッシュ機構とフェッチ処理をまとめたもの）
- /hooks （ライフサイクルや他 hooks をラップしたロジックをまとめたもの） -->

###### compositions のテスト

<!-- hooks をテストしようとすると、以下のようなエラーが出てきてしまい、hooks 単体をテストすることができません。

```
console.error
    Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
    See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```

そのため、これを回避するために、`@testing-library/react-hooks`を用います。 -->

###### Pinia のテスト

<!-- [Redux - Writing Tests](https://redux.js.org/usage/writing-tests#setting-up-a-test-environment)：テストの書き方は、公式で紹介しています。 -->

#### Component テスト

<!-- このアプリケーションでの Component テストは、以下のディレクトリやファイルに対してテストを作成します。

- /components （画面で用いるコンポーネントをまとめたもの。画面表示だけでなく、ロジックを閉じ込めたためだけのものもある。コンポーネントテストでは、関数や変数を export できないため、ユーザーイベントを起こしたり、表示されている値を確認することでテストを保証します。そのため container と presentational でコンポーネントを分けていません。）
- /pages （画面単位ごとのファイルをまとめたもの。）

##### svg ファイルのモック

アイコンなどの svg ファイルをコンポーネントとして扱っている場合、Jest を用いたテストファイルではそのまま svg ファイルを`import`できません。

そのため、svg ファイルが`import`された際にモックを利用するための設定をする必要があります。

```typescript
// jest.config.ts
const config: Config = {
  //...

  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
    "^=/(.*)$": "<rootDir>/test/$1",
    "^.+\\.(svg)$": "<rootDir>/test/__mocks__/svg.tsx",
  },

  //...
};
```

実装は、[こちら](/test/__mocks__/svg.tsx)を参照してください。 -->

#### EtoE テスト

<!-- component テストでも言えることなのですが、test ライブラリを用いて画面要素を取得するには`selector`を指定し、`class`名や`id`から取得する必要があります。

CSS in JS の Styled-component や tailwindCSS などの CSS ライブラリやフレームワークを用いている場合、`class`名がよしなに設定されてしまいます。そして、それらの`class`名にはランダムな数字や文字列が含まれるため、`class`名による要素の取得がかなり煩雑になってしまいます。

そのため、各要素には test ライブラリから取得できるような、何らかの属性を持たせる必要があります。jest では要素のテキストから取得することができるため、ある程度適当に HTML のタグを実装しても大丈夫かもしれません。しかし、cypress ではそれが出来ないため、セマンティクスな実装を行うように気を付けたり明示的に属性や`id`を設定する必要があります。 -->

<!-- ##### NextAuth.js で EtoE テストを行う方法

このための実装は、公式に記載があります。
https://next-auth.js.org/tutorials/testing-with-cypress -->
