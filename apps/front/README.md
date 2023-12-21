# Todo FrontEnd

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

### 2. コンポーネント設計

ライブラリ等によっては、コンポーネントをどのように設計していくかを定義する必要があります。

次に、共通コンポーネントを実装していきます。共通で使うようなコンポーネントをデザイン、仕様書から構想します。

大体共通化されるのは、以下だと思っています。

- ヘッダー
- 入力フォーム
- モーダル
- アイコン
- ボタン
- トースト
- テキスト（見出し）
