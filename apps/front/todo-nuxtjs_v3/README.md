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
| @nuxt/eslint               | v0.5.7     | Nuxt modules の ESLint。                         |
| stylelint                  | ^16.9.0    | CSSのLinter                                      |
| prettier                   | ^3.3.3     | コードformatter                                  |
| date-fns                   | ^4.1.0     | 時間用ライブラリ                                 |
| Prism                      | ^4.1.0     | APIサーバーモック用ライブラリ                    |

## yarn scripts について

| script                      | 内容                                             |
| --------------------------- | ------------------------------------------------ |
| `build`                     | Nuxt アプリケーションのビルド                    |
| `dev`                       | 開発環境でのサーバーの起動                       |
| `preview`                   | build コマンドで生成した成果物でのサーバーの起動 |
| `postinstall`               | 本番環境でのサーバーの起動                       |
| `lint`                      | eslint によるコードチェック                      |
| `lint:fix`                  | eslint によるコードチェックと自動修正            |
| `generate:swagger-type:api` | swaggerから型定義ファイルを生成                  |
| `mock`                      | API mockサーバーの起動                           |

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

Nuxt.js は、Vue.js 特有の SFC(Single File Component)でコンポーネントを考える必要があります。  
そのため、templete(HTML), style(CSS), script(JavaScript)を一つのファイルで実装するのが一般的になります。

そのため、Nuxt.js 特有の考慮すべきことがあります。

一つ目は style の scope です。基本的にはそのファイル内での scope を守るべきで、かつそのファイル以外の要素に style が適用されないようにするべきです。  
この scope を守らなければ、どの style がどの template に適用されるのか管理できなくなってしまいます。

二つ目は、Next.js のようにロジックと画面描画を別コンポーネントとして分ける必要がない、ということです。  
このようなコンポーネント設計では、SFC である Vue.js ないしは Nuxt.js の特徴を活かすことができなくなってしまいます。
そのため、コンポーネントの設計としては単に機能によってコンポーネントを分離・構築していくので良いです。

### 4.JavaScript 実装

#### JavaScript 実装時の共通実装

JavaScript を実装するとき、共通仕様として実装する必要があります。これを各個人がそれぞれに実装しようとすると、車輪の発明を行なってしまったり、統一されていないコードを生み出してしまいます。

そのため、ある程度は先に実装しておく必要があります。

##### Form ライブラリとバリデーション

Formライブラリは、始めは[FormKit](https://formkit.com/?ref=madewithvuejs.com)を使おうとしましたが、styleの変更がどうやってもできませんでした。他フォームライブラリである[vueform](https://vueform.com/?ref=madewithvuejs.com)でも公式ドキュメントを見る限り出来なさそうなので、フォームライブラリは使わないことにしました。  
tailwindCSSやMaterialUIなど何らかのCSSフレームワークを使っている場合は選択肢として考えられますが、これらを使わずにCSS(SCSS)だけで実装する場合は、どのフォームライブラリも使いにくいのかと思いました。

<!-- バリデーションスキーマには、yup を用いています。別のバリデーションスキーマには zod があるのですが、私自身は yup しか使ったことが無く、zod を使ったことがありません。

参考：[react-hook-form で yup と zod の違いを検証](https://zenn.dev/wintyo/articles/6122304cb56c86)

React-Hooks-Form と yup の実装は、[src/pages/register/index.tsx](/apps/front/todo-nextjs/src/pages/register/index.tsx)を参考にしてください。 --> -->

##### [Pinia](https://pinia.vuejs.org/introduction.html)による状態管理

Nuxt.jsでは、状態管理ライブラリに[Pinia](https://nuxt.com/docs/getting-started/state-management#usage-with-pinia)を紹介しています。

Pniaはcomposition APIと親和性が高く、component/page間でグローバルにデータを保持することができます。また、SSRにも対応しており、fetchと組み合わせることで、キャッシュを実現することも可能です。

Piniaによる状態管理の実装は簡単です。  
storesディレクトリに各storeごとのファイルを作成し、そのファイルにstoreを定義していきます。状態を持つロジックという意味では`composables`として定義してしまうかもしれませんが、このロジックはあくまでも状態を変えるためにのみ使われるのでstoreとして定義した方が良いかと思います。
storeの定義には、保持する状態である`state`と、その状態に対してどのような操作を行うのかを`actions`を定義します。  
状態を使用したい場合は、component/pageでcomposable APIのようにstoreを呼び出します。

##### fetch とキャッシュ保持

Nuxt.jsではbuilt-inの`useFetch`, `useAsyncData`, `$fetch`があります。

https://nuxt.com/docs/getting-started/data-fetching

> Nuxtは、サーバーとクライアントの両方の環境でisomorphic（またはuniversal）のコードを実行できるフレームワークです。Vueコンポーネントの`setup`関数で`$fetch`関数を使用してデータフェッチを実行すると、データが2回 fetchされる可能性があります。1回目はserverで（HTMLをレンダリングするために）、もう2回目はclientで（HTMLがハイドレートされるときに）です。これは、hydrationの問題を引き起こし、インタラクティブになるまでの時間を増加させ、予測不可能な動作を引き起こす可能性があります。  
> `useFetch`および`useAsyncData`コンポーザブルは、server上でAPI呼び出しが行われた場合、データがペイロードでクライアントに転送されるようにすることで、この問題を解決しています。  
> ペイロードは、`useNuxtApp().payload`を通じてアクセス可能なJavaScriptオブジェクトです。これは、hydration中にブラウザでコードが実行されたときに、同じデータの再fetchを避けるためにクライアントで使用されます。

上記より、イベントによってデータフェッチを実行する必要がある場合は`$fetch`、serverやclientで呼び出す場合は`useFetch`や`useAsyncData`を用いるのが良いです。

では、`useFetch`と`useAsyncData`はどのような違いがあるのでしょうか。  
`useFetch`は、`$fetch`をラップしたもので、SSRでも安全なネットワーク呼び出しを行うことができます。  
一方で、`useAsyncData`は非同期ロジックをラップし、それが解決したら結果を返すcomposableです。とすると、`useAsyncData`はどのような時に使えば良いのか？となります。たとえば、CMSやサードパーティが独自のクエリレイヤーを提供している場合などに使われます。

本アプリでは、Todo APIを呼び出すcomposableを作成しています。

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
