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
| NextAuth                   | v4.24.7    | Next.js用認証ライブラリ                                          |
| RTK Query                  | v2.0.1     | データフェッチとキャッシュ用ライブラリ                           |
| msw                        | v2.3.4     | APIモックサーバ用ライブラリ                                      |
| next-intl                  | ^3.17.4    | 国際化ライブラリ                                                 |
| jest                       | v29.7.0    | Unit Test, コンポーネントテスト用ライブラリ                      |
| testing-library/react      | v14.1.2    | React用testing-libraryで、便利なテスティングマッチャーを提供する |
| Cypress                    | v13.13.0   | E2E Test用ライブラリ                                             |

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

## 🌲環境変数

### Next.jsアプリケーション用の環境変数

漏洩してはいけない、Webサービスで登録したクライアントIDやシークレットキーは、ルートディレクトリに.envファイルを作成して、そのファイルに設定する。

以下の環境変数に対して、クライアントIDやクライアントシークレットーキーを各種サービスから取得して設定してください。

```zsh
# OAuth認可キー
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
NEXTAUTH_URL=""
# JWTを暗号化しトークンをハッシュするために使用
NEXTAUTH_SECRET=""
```

※ シークレットにはopensslコマンドでランダムな文字列を生成すると便利です。

```zsh
openssl rand -base64 32
```

### Cypress用の環境変数

Cypressでは、NextAuth.jsでログインを行うためのEtoEテストを行います。そのため、OAuthサービスへログインするためのユーザー名とパスワードを環境変数として読み込んでいます。またこのような漏洩してしまうと良くない変数については、ルートディレクトリに`cypress.env.json`として設定しています、  
このアプリケーションではGithubのみOAuthサービスを使用していないため、以下のように設定してください。

```json
{
  // GitHubのユーザー名
  "GITHUB_USERNAME": "",
  // GitHubのパスワード
  "GITHUB_PASSWORD": ""
}
```

## フロントエンド開発の進め方

### 1. 技術選定

[issue: Next.js 開発環境構築と技術選定 #18](https://github.com/trancore/todo/issues/18)

### 2. コンポーネント設計

Next.js では、CSS として `Styled-component`を使用するため、ロジック用コンポーネントと表示用コンポーネントで分ける、
`Container/Presentational`コンポーネントを用いた設計を考えました。これは、CSS用スクリプトとロジック用スクリプトが混在することを防ぎ、可読性を上げるためです。

これより、一つのコンポーネント単位には、`ContainerComponent`と`PresentationalComponent`を含みます。

さらに、この2つの包含関係は、`PresentationalComponent ⊂ ContainerComponent`と定義することにします（つまり、`PresentationalComponent`は`ContainerComponent`に含まれる、という関係になります）。

そのため、`PresentationalComponent`は必ず同じコンポーネントの`ContainerComponent`から呼び出されること、と定義します。

### 4.JavaScript 実装

#### JavaScript実装時の共通実装

JavaScriptを実装するとき、共通仕様として実装する必要があります。これを各個人がそれぞれに実装しようとすると、車輪の発明を行なってしまったり、統一されていないコードを生み出してしまいます。

そのため、ある程度は先に実装しておく必要があります。

##### Formライブラリとバリデーション

Formライブラリには、[React-Hooks-Form](https://react-hook-form.com/get-started)を使用しています。以前から使用しているライブラリであり、後述するバリデーションスキーマである[yup](https://github.com/jquense/yup)の導入も既知であるため使用しています。他ライブラリを使用する理由がなかったため、React-Hooks-Formを選択しました。

バリデーションスキーマには、yupを用いています。別のバリデーションスキーマにはzodがあるのですが、私自身はyupしか使ったことが無く、zodを使ったことがありません。

参考：[react-hook-formでyupとzodの違いを検証](https://zenn.dev/wintyo/articles/6122304cb56c86)

React-Hooks-Formとyupの実装は、[src/pages/register/index.tsx](/apps/front/todo-nextjs/src/pages/register/index.tsx)を参考にしてください。

##### Reduxによる状態管理

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

##### RTK Queryを使ったfetchとキャッシュ保持

[RTK Query](https://redux.js.org/introduction/getting-started)は、fetchしたデータを上記のstore機構を使ってキャッシュを保持しているのではないか、と思う。。（ここは、公式ドキュメントを確認する）。

特に何も設定しなければ、RTK Queryはfetchライブラリをwrapしており、このライブラリをfetcherとしています。もちろん、axiosをfetcherとして設定することもできます（[Axiosの設定例](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#axios-basequery)）。

fetchした情報をキャッシュに保持するには、`services`としてfetchするエンドポイントや`header`の設定を行います([servicesの定義例](/apps/front/todo-nextjs/src/services/todo.ts))。このservicesをstoreに登録します([storeへの登録例](/apps/front/todo-nextjs/src/store/root.ts))。

SSRで使う場合は、[next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper)を使う[方法が公式で説明されています](https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering)。

mutationによって情報の削除や更新を行った場合、storeに保持しているキャッシュも同様に更新を行う必要があります。データ連携をするには、[RTK Query - Automated re-fetching](https://redux-toolkit.js.org/rtk-query/usage/automated-refetching)の章に説明されていますが、cache tagを使うと良いみたいです。

しかし本アプリで使用したところ、Todoを完了した後にTodo取得APIを再度callしても、完了状態前のTodoを取得してきてしまい、情報の更新が行えませんでした。

そのため、actionが実行された後に処理を行うonQueryStartedメソッドを使用しました。そのメソッド内で、キャッシュに保存しているTodoを完了状態にしたTodoのIDでフィルタし、キャッシュの更新を行っています。

##### fetchのエラーハンドリング

RTK Queryのエラーハンドリングは、fetch hooksから`unwrap`関数をチェーンして`then`関数、`catch`関数を使ってエラーハンドリングを行います。

##### mock server

mswは、API fetchをinterceptすることで、リクエストやレスポンスなどを代替して通信します。
json-serverのようなThird Partyライブラリによるサーバの起動やNextのAPI Routesを使わない場合は、[/src/mock/server.ts](/apps/front/todo-nextjs/src/mock/server.ts)と[/src/mock/browser.ts](/apps/front/todo-nextjs/src/mock/browser.ts)を用意し、サーバレンダリング時やクライアントレンダリング後のfetchをinterceptできるようにする必要があります。

##### RTK QueryのSSR対応

RTK Queryを使ってSSRでfetchする場合は、以下を参考にしてください。

- [RTK Query - Server Side Rendering](https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering)

ある程度省略しますが、Page Routerの場合、`getStaticProps`や`getServerSideProps`内でAPIをfetchしてstoreの初期値に情報を設定します。そして、Promiseを使ってfetchが終わるまで待たせます。

この時、rootコンポーネントで設定しているstoreを、server sideで取得した情報が保存されたstoreを使うようにする必要があります。そのために、storeをwrapし、そのラッパー関数から`getServerSideProps`や`getStaticProps`を使ってstoreにfetchしたデータを保存させます。そして、wrapしたstoreをhooksでrootコンポーネントに設定します。これを設定しないと、SSR時にhydrationエラーが発生するので注意してください。

また、`createApi`を呼び出す際に、`extractRehydrationInfo`オプションに再ハイドレーションの設定をします。

#### next-intlと国際化対応

Next.jsの場合、built-inでは現在の言語をサブドメインやパスに含めることができます。そのため、next/routerを使用してLocale情報を取得する必要があります。そして、取得したLocale情報からテキストが補完されているファイルへアクセスし、テキストを取得します。これらを自力で実装する必要があるため、ライブラリを用いた方が効率的ですし、Next.js公式でもライブラリを用いることを推奨しています。

本アプリケーションでは、next-intlというライブラリを使っています。そこで、固定文言をできるだけ言語テキストファイルから取得するようにしたいです。  
しかし、バリデーションスキーマライブラリであるyupでカスタムバリデーションを自作し、そこで固定文言を指定しているとします。この場合、hooks APIベースで開発されているnext-intlでは、このカスタムバリデーションでうまいこと言語テキストを組み込むことができません。そのため、以下のようにeslintの警告を無視する必要があります。

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

そして、この`useTranslations`を`NextIntlClientProvider`内で呼び出すために、スキーマを作成する関数を作り、それをコンポーネント内で呼び出す必要があります。

### 5.SEOとパフォーマンス最適化

#### robot.txt

### 6.自動テスト

#### モックに初期値は必要か

モックしようとしているものが変数の場合、初期値を設定するかしないかを考える必要がありました。

初期値を設定する場合、その初期値でテストをする場合に再度テストコードを記載する必要がなくなるため、記述量が少なくなります。

また、条件が複数のテストで共通している場合、重複コードを減らし、冗長性が無くなります。

しかし、テスト間は独立しているべきで、モック変数はテストごとにリセットされるかもしれません。そのため、初期値は設定せず各テストごとに値を指定し直した方が良いかと思います。

以上より、mock変数には初期値を設定しない方が良いです。

さて、Jestでの初期値の実装方法ですが、`jest.fn()`には`mockImplementation`と`mockReturnValue`メソッドがあります。

`mockReturnValue`は、mockしている変数を、`jest.fn()`でモックし、これを実行したときに返却される値を設定します。そのため、変数をモックしたい場合に使います。

一方で、`mockImplementation`は、mockしようとしている関数に返り値やメソッド、フィールドもモックしたい場合に用います。

#### モックの初期化

モックを初期化する場合、`mockReset`を使用します。このとき、定義自体が削除されてしまうため、条件によって値が変わるようなものだけを`mockReset`します。

コンポーネントをモックする場合、基本的には各テストごとにレンダリングした方が良いです。これは、各テストを独立させるためでです。しかし、そのコンポーネント内のすべてにおいてモックする必要がなければ、共通化して使用しても良いかもしれないです。

#### Unitテスト

このアプリケーションでのUnitテストは、以下のディレクトリやファイルに対してテストを作成します。

- /utils （単なる計算を行うだけの共通関数をまとめたもの）
- /state （状態管理やRTK Queryを使用した際のキャッシュ機構とフェッチ処理をまとめたもの）
- /hooks （ライフサイクルや他 hooks をラップしたロジックをまとめたもの）

###### hooksのテスト

hooksをテストしようとすると、以下のようなエラーが出てきてしまい、hooks単体をテストすることができません。

```
console.error
    Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
    1. You might have mismatching versions of React and the renderer (such as React DOM)
    2. You might be breaking the Rules of Hooks
    3. You might have more than one copy of React in the same app
    See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```

そのため、これを回避するために、`@testing-library/react-hooks`を用います。

###### Reduxのテスト

[Redux - Writing Tests](https://redux.js.org/usage/writing-tests#setting-up-a-test-environment)：テストの書き方は、公式で紹介しています。

###### Reducersのテスト

Reducersは実装の詳細であるため、明示的なUnitテストは必要ありません。しかし、もしReducersが複雑なロジックを持ち、ユニットテストの信頼性を高めたい場合は、簡単にテストを行うことができます。

特定の入力状態とアクションでReducersを呼び出し、結果の状態が期待値と一致することを保証すれば良いです。

###### Selectorsのテスト

Selectorsも一般的には純粋な関数であるため、Reducersと同じ基本的なアプローチでテストすることができます。

初期値を設定し、それらの入力でセレクタ関数を呼び出し、その結果が期待される出力と一致することをテストします。

しかし、ほとんどのセレクタは最後の入力を記憶するようにメモ化されているので、テスト内で使用される場所によってはセレクタが新しい値を生成すると期待していたのに、キャッシュされた値を返しているケースに注意する必要があります。

###### Actions CreatorsとThunksのテスト

Reduxでは、Actions Creatorは純粋なオブジェクトを返す関数です。

Actions Creatorを手動で書くのではなく、`createSlice`で自動生成させるか、`createAction`で作成することを公式では推奨しています。そのため、Actions Creatorを自分でテストする必要ありません（Redux Toolkitのメンテナがすでにやってくれている）。

Actions Creatorの戻り値は、アプリケーション内の実装の詳細とみなされ、統合テストスタイルに従う場合、明示的なテストは必要ありません。

同様に、Redux Thunkを使ったThunkについても、手動で書くのではなく、`@reduxjs/toolkit`の`createAsyncThunk`を使うことを推奨しています。このThunkは、Thunkのライフサイクルに基づいて、保留、完了、拒否されたアクションの適切なタイプをディスパッチします。

公式では、Thunkの振る舞いをアプリケーションの実装の詳細であると考えており、**Thunkを単独でテストするのではなく**、サンクを使用しているコンポーネント群（またはアプリ全体）をテストすることでカバーすることを推奨しています。

msw、miragejs、jest-fetch-mock、fetch-mockなどのツールを使って、fetch/xhrレベルで非同期リクエストをモックすることを推奨しています。このレベルでリクエストをモックすることで、Thunkのロジックをテストの中で変更する必要がなくなります。

###### hooksのテスト

hooksは`ReactComponent`やhooks関数内でしか使うことができません。

そのため、`@testing-library/react`の`renderHook`関数を用いてhooksをwrapする必要があります。

また、テストする際に各モジュールから`import`している場合、それを`jest.fn()`や`jest.spyOn()`でモックする必要があります。この時、テストしたいものをモックしないように注意してください。

実装例は、こちら([@/unit/hooks/useToast.test.ts](/test/__tests__/unit/hooks/useToast.test.ts))をご覧ください。

hooksの中で状態を扱っている場合があります。状態そのもののテストに関しては、Reduxのテストで対応しているため、hooksの中ではモックさせます。

#### Componentテスト

このアプリケーションでのComponentテストは、以下のディレクトリやファイルに対してテストを作成します。

- /components （画面で用いるコンポーネントをまとめたもの。画面表示だけでなく、ロジックを閉じ込めたためだけのものもある。コンポーネントテストでは、関数や変数をexportできないため、ユーザーイベントを起こしたり、表示されている値を確認することでテストを保証します。そのためcontainerとpresentationalでコンポーネントを分けていません。）
- /pages （画面単位ごとのファイルをまとめたもの。）

##### svgファイルのモック

アイコンなどのsvgファイルをコンポーネントとして扱っている場合、Jestを用いたテストファイルではそのままsvgファイルを`import`できません。

そのため、svgファイルが`import`された際にモックを利用するための設定をする必要があります。

```typescript
// jest.config.ts
const config: Config = {
  //...

  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^=/(.*)$': '<rootDir>/test/$1',
    '^.+\\.(svg)$': '<rootDir>/test/__mocks__/svg.tsx',
  },

  //...
};
```

実装は、[こちら](/test/__mocks__/svg.tsx)を参照してください。

#### EtoEテスト

componentテストでも言えることなのですが、testライブラリを用いて画面要素を取得するには`selector`を指定し、`class`名や`id`から取得する必要があります。

CSS in JSのStyled-componentやtailwindCSSなどのCSSライブラリやフレームワークを用いている場合、`class`名がよしなに設定されてしまいます。そして、それらの`class`名にはランダムな数字や文字列が含まれるため、`class`名による要素の取得がかなり煩雑になってしまいます。

そのため、各要素にはtestライブラリから取得できるような、何らかの属性を持たせる必要があります。jestでは要素のテキストから取得することができるため、ある程度適当にHTMLのタグを実装しても大丈夫かもしれません。しかし、cypressではそれが出来ないため、セマンティクスな実装を行うように気を付けたり明示的に属性や`id`を設定する必要があります。

##### NextAuth.jsでEtoEテストを行う方法

このための実装は、公式に記載があります。  
https://next-auth.js.org/tutorials/testing-with-cypress
