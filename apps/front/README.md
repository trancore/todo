﻿# Todo FrontEnd

## フロントエンド開発の進め方

ここでは、実際にフロントエンド開発を進めていく中で考えたことを時系列順に記載していきます。

各モダンフロントエンドライブラリ、フレームワーク（以下、「ライブラリ等」）によって設計方法は異なるので、詳細はフレームワーク毎のルートディレクトリにある README を参照してください。

ここでは、それらに依らないことで考えたことを記載していこうと思います。

### 1. 技術選定

フロントエンド開発を進める前に、どのようなライブラリやフレームワークを使って実装していくかを考えました。

このリポジトリでは、勉強することを主軸に置いているので、実際は不要なライブラリや実装も含んでいます。

### -. ブランチ運用

| ブランチ名  | 説明               |
| ----------- | ------------------ |
| `main`      | 本番環境用ブランチ |
| `develop`   | 開発用ブランチ     |
| `feature/*` | 機能追加用ブランチ |
| `fix/*`     | バグ修正用ブランチ |

<details>
<summary><h3>-. 要件定義</h3></summary>

100%これに沿って開発していくわけではないので、あしからず。

![全体の構成](/apps/front/assets/images/overall-composition.png)

![主要なコンテンツ_1](/apps/front/assets/images/main-contents_1.png)

![主要なコンテンツ_2](/apps/front/assets/images/main-contents_2.png)

![主要なコンテンツ_3](/apps/front/assets/images/main-contents_3.png)

</details>

<details>
<summary><h3>-. デザイン</h3></summary>

100%これに沿って開発していくわけではないので、あしからず。

![デザイン](/apps/front/assets/images/design.png)

</details>

<details>
<summary><h3>-. 仕様書</h3></summary>

100%これに沿って開発していくわけではないので、あしからず。

![サインアップ画面](/apps/front/assets/images/specification-document_sign-in.png)

![サインイン画面](/apps/front/assets/images/specification-document_sign-in.png)

![トップ画面](/apps/front/assets/images/specification-document_top.png)

![Todo詳細画面](/apps/front/assets/images/specification-document_detail.png)

![Todo登録画面](/apps/front/assets/images/specification-document_register.png)

![Todo編集画面](/apps/front/assets/images/specification-document_edit.png)

![完了済み画面](/apps/front/assets/images/specification-document_completed.png)

![メニュー画面](/apps/front/assets/images/specification-document_menu.png)

![エラー画面](/apps/front/assets/images/specification-document_error.png)

</details>

### 2. コンポーネント設計・実装

ライブラリ等によっては、コンポーネントをどのように設計していくかを定義する必要があります。

次に、共通コンポーネントを実装していきます。共通で使うようなコンポーネントをデザイン、仕様書から構想します。

大体共通化されるのは、以下だと思っています。

- ヘッダー
- 入力フォーム
- モーダル
- アイコン
- ボタン
- メニュー
- トースト

テキストのコンポーネント化は行わないこととしました。なぜなら、

- p タグへのグローバル CSS の実装により、フォントやテキストカラー、太字の対応が行える
- 一部のテキストに対しては、そのコンポーネントへ独自の Styled-Component を指定すれば良い

と考えたからです。

### 3. マークアップ・ページ作成

共通コンポーネントが作成できたため、これらを使って画面一覧の URL に沿って画面のマークアップを実装していきます。

HTML のテンプレート、デザインの CSS を作成します。

このとき、条件によって表示非表示が分岐する要素とそのデザインも、すべて表示されている状態として作成することを忘れないでください。

必要であれば、ダミーの条件分岐を作成し、それで持って出しわけできるようなテンプレート作成が良いと思います。

画面は、デザイン、仕様書、画園一覧（このリポジトリでは掲載しません）を見て作成していきます。

### 4. JavaScript 実装

イベントやデータフェッチなどの、動きのある機能を実装します。

この実装は画面の機能によって多岐に渡り、画面仕様をきちんと理解し、何を実装しなければならないのかを十分に把握して進める必要があります。そのため、**その画面で実装する機能をできる限りリストアップし、タスク化して進めていかないと、実装漏れが起こってしまい**ます。

例えば、これらの実装には以下が挙げられます。

- リンクの URL
- イベント（クリック、ホバー、入力フォーム）
- バリデーション
- データフェッチ（データ表示。データ整形、エラーハンドリング）
- 国際化対応

また、複数の画面や共通機能として様々な仕様を考慮して実装しなければならないものもあると思います。例えば、認証認可システムのログイン実装や、入力-確認-完了画面があるような入力フロー画面などです。この場合、各画面でそれぞれの担当者がそれぞれに連携をとって実装する、というよりも、その一つの機能を一つのグループで対応した方が効率が良いです。

例えば、これらの実装には以下が挙げられます。

- ストア（コンポーネント間、画面間でデータを保持したい場合）
- 認証認可
- ミドルウェア実装

もちろん、データフェッチやバリデーションなども、まずはベースとなる共通実装を行う必要があるので、ここで記載しているものだけではないことに注意してください。

### 5.SEO とパフォーマンス最適化

#### SEO について

SEO については、Next.js tutorial では、以下のように説明しています。  
（詳しくは[こちら](https://nextjs.org/learn-pages-router/seo/introduction-to-seo)）

> SEO stands for Search Engine Optimization.  
> The goal of SEO is to create a strategy that will increase your rankings position in search engine results. The higher the ranking, the more organic traffic to your site, which ultimately leads to more business for you!
>
> _What is - SEO? Next.js tutorial_
>
> > SEO とは、Search Engine Optimization（検索エンジン最適化）の略です。  
> > SEO の目的は、検索エンジンの検索結果における順位を上げる戦略を立てることです。上位に表示されればされるほど、サイトへのオーガニックなトラフィックが増え、最終的にはビジネスの拡大につながります！

そのため、検索エンジンによる検索を意識する必要がある場合は、この SEO を意識する必要があります。より詳細な内容は、上記のリンク先をご参照ください。

SEO の対応をまとめると以下になります。

##### クローリングのための実装

HTTP status code の設定。ヘッダーに含まれる HTTP Status Code をクローラが解析し、任意の動作をします。そのため、正しい HTTP Status code を使う必要があります。

###### Meta robots tags と robots.txt

検索エンジンのクローラーに対して、サイトのどのページやファイルをリクエストできるか、またはできないかを指示するためのファイルです。 これを行うことで、サイト内で重要なページだけをクローラに認識させることができます。  
このアプリケーションでは、トップ画面だけをクローラーに収集させることにします。

- [robots.txt - Google 検索セントラル](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=ja)

Meta robots tags と robots.txt は、どちらも検索エンジンのクローラーに対してウェブサイトの特定の部分に対する指示を与えるための方法ですが、使用目的や機能が異なります。

**Meta robots tags**

- 場所: 各ウェブページの HTML ヘッダー内に配置されます。
- 目的: 個別のページレベルで検索エンジンに対して特定の指示を行います。
- 指示の種類:
  - `index/noindex`: ページをインデックスするかどうかを指示します。
  - `follow/nofollow`: ページ内のリンクをクローラーがたどるかどうかを指示します。
  - `noarchive`: 検索エンジンがキャッシュを保存することを防ぎます。
  - `nosnippet`: 検索結果でスニペット（ページの要約）を表示しないようにします。
- 使用例:

```html
<meta name="robots" content="noindex, nofollow" />
```

これは、ページをインデックスせず、リンクもたどらないように指示する例です。

- 用途: 特定のページに対して柔軟な制御が必要な場合に有効です。例えば、特定のページをインデックスさせたくない、またはリンクをクローラーがたどらないようにしたいときに使用されます。

**robots.txt**

- 場所: ウェブサイトのルートディレクトリに配置されるテキストファイルです。
- 目的: サイト全体や特定のディレクトリに対して、クローラーがどの部分をクロールできるかを指示します。
- 指示の種類:
  - `User-agent`: 指示を適用する検索エンジンクローラーを指定します（例: Googlebot, Bingbot）。
  - `Disallow`: クローラーに対してアクセスを禁止するパスを指定します。
  - `Allow`: 特定のパスに対してアクセスを許可します（Disallow ルールの例外として使用）。
  - `Sitemap`: サイトマップの場所を指定します。
- 使用例:

```text
User-agent: \*
Disallow: /private/
```

これは、すべてのクローラーに対して/private/ディレクトリ内のページのクロールを禁止する例です。

- 用途: サイト全体や大規模なディレクトリ構造に対してクローラーのアクセスを一括で制御したい場合に有効です。例えば、管理用のページやテスト環境のページなどをクロール対象から除外する際に使用されます。

###### sitemap.xml

サイトマップとは、サイト上のページ、動画、その他のファイルに関する情報と、それらの間の関係を提供するファイルです。Google のような検索エンジンは、このファイルを読み取って、サイトをより効率的にクロールします。これにより、Google はウェブサイトに属する URL や、それらがいつ更新されたかを知ることができ、新しいコンテンツを効率的に検出し、サイトをクロールしやすくなります。  
ちょっと分かりづらいので、もう少しわかりやすいように chatGPT に説明してもらいました。

サイトマップは、ウェブサイト内のページやコンテンツの構造を検索エンジンに伝えるためのファイルで、主に以下の目的で使用されます。

1. 検索エンジンのクロールを促進: 検索エンジンにウェブサイト内の重要なページを知らせ、クロールしやすくするために使用します。
2. ページの発見をサポート: 新しいページや、通常クロールされにくいページ（例えば、JavaScript で生成されたページや動的な URL）を検索エンジンに認識させます。

**サイトマップに記載する URL**：基本的には、検索エンジンにインデックスさせたいすべての URL をサイトマップに含めることが望ましいです。具体的には以下のようなページを含めます。

- 主要なコンテンツページ（例：ホームページ、カテゴリー、製品ページ、記事ページなど）
- 重要なアーカイブページや、タグ付きページ（特に多くのトラフィックが期待できるもの）
- 新規ページや、更新頻度の高いページ
- 動的に生成される URL で、検索エンジンが自動的にクロールしにくいもの

**サイトマップに記載しない方が良い URL**：

- 重複コンテンツのページ（検索エンジンにインデックスされる必要がないもの）
- サイト内検索結果のページ
- 404 ページなど、エラーページ
- ログインが必要なページや、管理者専用ページ

**サイトマップのベストプラクティス**：

- XML フォーマット: サイトマップは通常、XML 形式で記述します。
- ページの優先度や更新頻度を設定: 各 URL に対して、優先度（priority）や更新頻度（changefreq）を設定することが可能です。これにより、検索エンジンに対して特定のページが他のページよりも重要であることを伝えることができます。
- サイトマップの更新: サイトの内容が変わるたびにサイトマップを更新し、最新の状態を維持します。

要するに、サイトマップには、検索エンジンにクロールしてもらいたい、インデックスしてもらいたいすべての URL を含めると良いでしょう。

###### canonical tags

Canonical URL とは、検索エンジンがサイト上の重複したページ群から最も代表的だと考えるページの URL のことです。

Canonical URL を検索エンジンに直接伝えることもできますが、検索エンジンに通知しなくても複数の URL をグループ化することもできます。Google が複数の異なるパスで URL を見つけることができれば自動的に設定されます。

Google はこのようなケースを検出することに長けていますが、そのシステムは大規模に動作しており、すべてのエッジケースをカバーしているわけではありません。Canonical tags は、優れたパフォーマンスを保証するために、ウェブサイトでカバーすべき重要な点になります。

Google は、同じコンテンツを持つ複数の URL を見つけた場合、重複しているとみなし検索結果でそれらの URL の優先順位を降格させるかもしれません。

これはドメイン間でも起こることで、2 つの異なるウェブサイトを運営し、それぞれに同じコンテンツを投稿している場合、検索エンジンはどちらか一方を選んでランクインさせるか、あるいは両方を直接降格させるかを決定します。

そこで、canonical tags が非常に役に立ちます。canonical tags は、Google にどの URL が真のオリジナルソースで、どれが重複しているかを知らせます。同じドメインや異なるドメインで重複したページがたくさんあると、順位が下がったり、ペナルティを受けたりする可能性があります。

このアプリケーションでは、重複するようなページは存在しないため、設定しません。

##### metadata

###### 構造化データ

構造化データは、検索エンジンがページを理解するのを容易にします。  
長年にわたり、いくつかのボキャブラリーが考えられてきましたが、現在の主なものは schema.org です。

schema.org は「インターネット上、ウェブページ上、電子メールメッセージ上、そしてそれ以外の場所での構造化データのスキーマを作成、維持、促進することを使命とする共同コミュニティ活動」と定義しています。

Schema.org のボキャブラリーは、RDFa, Microdata, JSON-LD を含む多くのエンコーディングで使用することができます。この中で Google が推奨しているのは JSON-LD です。JSON-LD は、2014 年 1 月に W3C の勧告となったオープンデータフォーマットで、スクリプトを用いることで HTML のどこにでも記述可能で、かつ 1 カ所で記述できる仕様になっています。

- [構造化データとは？メリット・書き方・種類・ツールまとめ](https://digitalidentity.co.jp/blog/seo/schema-org/structured-data.html)
- [JSON-LD の基礎 - Zenn](https://zenn.dev/esnir/articles/basic-jdon-ld)

様々な検索エンジンは、schema.org とは異なるボキャブラリーを適応させる可能性があり、ウェブサイトのボキャブラリーに記述されている全てのユースケースをカバーできる検索エンジンは存在しません。それぞれのケースで、どのボキャブラリーが受け入れられているかを必ずチェックしましょう。

- URL 構造

### 6. 自動テスト

我々実装者が保証すべきことはホワイトボックステストであり、コードの動作を保証することをテストコードで伝えることができれば良いです。

テスト名は、「何を」テストしているのかを簡潔に説明できていることが重要です。

さて、テストコードを書くときは、各テストが独立して実行されるようにしましょう。これによって、各テストがクリーンな状態で開始され、副作用を受けないようになります。

#### Unit テスト

Unit テストは、ロジックのみを持つ関数や変数に対してのみテストを行います。

あるロジックに対してテストを作成するとき、コードの動作についてのフローチャートを考えると分かりやすいです。

さらに、Unit テストを書くときは以下の点について、よく考慮するようにしましょう。

- 全てが正しく動いたと仮定して、理想的な条件下でメソッドはどのように動作するのか
- 特殊な条件やエッジケースはあるのか
- 例外が起きた時に、このメソッドはエラーを起こすのか
- ロジックの流れや条件分岐が、適切に動いているのか

※ 静的解析ツールや TypeScript を導入している場合は、型エラーがコンパイルエラーとして表示されます。なので、指定された型通りに値を渡せているかどうかはこのツールに任せ、Unit テストとしてはテストの対象に含めない、というルールにしても良いかもしれないです。

そして、最終的に書いたテストが十分かどうかは、以下の 3 点を指標にして判断します。

- まずは、正しく動作することを保証しているか
- 壊れる可能性のある箇所はすべてテストしているか（もちろん全ては無理なので、よくあるケースやエッジケースなどを考慮できているか）
- テストファーストで考えられているか

##### 上級テクニック

テクニックとして、Unit テストでは、ネットワークに接続することは避けましょう。その代わり、テストデータを使います。

#### Component テスト

Component テストは、コンポーネント単位（画面単位も含む）でテストを行い、画面表示のための関数や変数を正しく取得するためのテストを行います。

#### EtoE テスト

> E2E テストは、アプリケーションが期待通りに動作し、ユーザーのタスクやプロセスの種類を問わずデータフローが適切に機能することを確認する手法です。
>
> _E2E (エンドツーエンド) テストとは？ - circleCI ブログ_

具体的には、ユーザーが行うであろう操作をシナリオとしてシミュレートすることです。

例えば登録フォームで考えると、以下のシナリオが考えられます。

- メールアドレスとパスワード入力フォームが空である
- 有効なメールアドレスとパスワードを入力する（正常時シナリオ）
- 無効なメールアドレスとパスワードを入力する（異常時シナリオ）
- 登録ボタンを押下する

これらのテストを実施することで、ユーザーの期待通りに機能するか検証できます。

##### E2E テストの設計

E2E テストで行う作業についてのおおまかな流れは、以下になります。

> 1. E2E テストの結果を検証するための要件を確認する
> 2. テスト環境と要件を設定する
> 3. システムとサブシステムのすべてのプロセスを定義する
> 4. 各システムとサブシステムの役割と責任を記述する
> 5. テストに使うツールとフレームワークをまとめる
> 6. テストケースの設計要件をリストアップする
> 7. システムごとに入力データと出力データをリストアップする
>
> _E2E (エンドツーエンド) テストとは？ - circleCI ブログ_

では、どのようにテストケース（シナリオ）を考えていけば良いのでしょうか。

> 1. アクターの洗い出し
> 2. シナリオ目的の洗い出し
> 3. シナリオの詳細化（スタートからゴールまでのステップを洗い出す）
> 4. 確認項目と期待値の明確化
>
> _シナリオテストとは？書き方や注意点を解説 - 株式会社 SHIFT_

このアプリケーションが、誰に使われ、テストによって何を達成したいのかを考えます。  
これによって、考えられたテストケースを条件、時系列、優先度、ユーザーの心理状態などを考慮して、より詳細なテストケースを考えます。

この時、注意することとしては、次のことのようです。

> - 確認項目や操作手順を細かくしすぎない  
>   確認項目や操作手順を細かくしすぎると、テスト準備の工数が膨大になる可能性があるでしょう。  
>   テスト実施者が迷わない程度の粒度で記載することをおすすめします。  
>   確認項目は、主に次の 3 つにするとよいといわれています。
>
> ・情報の発生と受け取り  
> ・データの更新と蓄積  
> ・業務の進行と例外対応
>
> _シナリオテストとは？書き方や注意点を解説 - 株式会社 SHIFT_

では、このアプリケーションのシナリオテストを考えてみましょう。

このアプリケーションのユーザーは、TODO 管理者だけです。  
このユーザーが行うことを以下にまとめました。

| No（優先度、時系列） | 条件                 | 心理状態 | テストケース                         |
| -------------------- | -------------------- | -------- | ------------------------------------ |
| 1                    | サインインしていない | -        | アプリケーションに初期アクセスする。 |
| 2                    | サインインしていない | -        | サインインする。                     |
| 3                    | サインインしている   | -        | トップ画面を開く。                   |
| 4                    | サインインしている   | -        | TODO 完了画面を開く。                |
| 5                    | サインインしている   | -        | TODO を登録する。                    |
| 6                    | サインインしている   | -        | 詳細な TODO を確認する。             |
| 7                    | サインインしている   | -        | TODO を編集する。                    |
| 8                    | サインインしている   | -        | TODO を完了する。                    |
| 9                    | サインインしている   | -        | TODO 完了画面を開く。                |
| 10                   | サインインしている   | -        | TODO を削除する。                    |
| 11                   | サインインしている   | -        | サインアウトする。                   |

##### EtoE テストの assertion

EtoE テストでは、シナリオの中に画面遷移、入力操作やクリックなどの複数の動作が含まれることになります。
その動作の中に非同期なものが含まれていると、他の動作順も考慮する必要があり、コードが複雑になってしまうと考えています
（現に、非同期コードを含めてテストを実装しようとすると、非同期の動作が終わっていないのに次の動作が起こってしまい、
エラーとなってしまうことが多々ありました）。

ということで、テストを実装する際は、一つ一つの動作を`it`関数で実装するようにしました。
これを行うことによって、処理一つ一つが独立することで assetion を判別しやすくなり、
`it`単位でテストが完了するまで先に進まないためエラーになることがなく、可読性も良くなりました。

##### テストを行うのに必要な要素の取得方法

Unit テストや EtoE テストでは、正しいテキストの表示やクリックをエミュレートするために、プログラミング的に要素を取得する必要があります。

要素の取得方法には、テスティングライブラリによって様々ですが、大体は共通しています。  
例えば、以下の取得方法があります。

- `Role`(Jest)
- `id`(attr)
- `test-id`(attr)
- `className`(attr)
- スタイル(Jest)
- テキスト

要素をユニークに指定できる`test-id`を使って要素を取得した方が良いかと思いますが、本番環境に`test`という ID 名が出てしまうので、`id`をきちんと設定した方が良さそうです。

##### 参考

- [Best Practices - cypress](https://docs.cypress.io/guides/references/best-practices)

#### VRT(Visual Regression Testing)

VRT は、デザイン差分を比較することで意図せぬ変更が入っていないかを確認します。

#### 参考

- [E2E (エンドツーエンド) テストとは？ - circleCI ブログ](https://circleci.com/ja/blog/what-is-end-to-end-testing/)
- [シナリオテストとは？書き方や注意点を解説 - 株式会社 SHIFT](https://service.shiftinc.jp/column/4939/)
