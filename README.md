# Todo RESTful API

## 使用ライブラリ・フレームワーク

|ライブラリ・フレームワーク|バージョン|使用意図|
|---|---|---|
|Node.js|v18.18.2|開発言語|
|Volta|v1.1.1|Node.js管理ツール|
|Yarn|v4.0.0-rc.53|packageマネージャー|
|TypeScript|v5.2.2|静的型付け用言語|
|ts-node|v10.9.1|TypeScriptのままNode.jsを実行できるようにする|
|Express|v4.18.2|Node.jsのWebフレームワーク|

### voltaのインストール方法

以下コマンドで、LTSバージョンのNode.jsをインストールし、使用できるようになリます。パスも自動で通ります。

```zsh
curl https://get.volta.sh | bash
```

voltaをinstallしていただければ、`package.json`に記載しているnodeのバージョンを自動で読み取り、バージョンを合わせてくれます。
