# login-notifier

PC ログイン時に LINE 通知してくれるやつ.

本当はトリガー登録まで自動化したいが、めんどいのでそこは手動設定で通知部分だけ実装.

## 今後欲しい機能

- トリガー登録の自動化
- 位置情報の通知

# Setup/start/build

## setup

設定ファイルを settings.template.json をコピーして settings.json として生成.
LINE notify API を有効化して accessToken を設定.

## debug start

```
deno task start
```

## build

```
deno task build
```

## トリガー登録

### Windows

ログイン時・起動時のトリガーを設定.
https://4thsight.xyz/33437#%E3%82%BF%E3%82%B9%E3%82%AF%E3%82%B9%E3%82%B1%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%A9%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E6%96%B9%E6%B3%95

スリープ時設定は以下の通り。
https://www.hide10.com/archives/26323

実行対象はビルドしたバイナリファイルを指定.

#### 自動化する場合の参考ドキュメント

https://dobon.net/vb/dotnet/system/osstartuprun.html

### macOS

スリープ復帰トリガーは以下で設定できる.
https://zenn.dev/kazuwombat/articles/fa1ee1696955a2#%E2%91%A1-mac%E3%81%AE%E8%B5%B7%E5%8B%95%2F%E3%82%B9%E3%83%AA%E3%83%BC%E3%83%97%E6%99%82%E3%81%AB%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B

sleepwatch.command を修正してから上記の設定で command ファイルを指定する.

ログイン時のみは以下で可能.
https://www.pc-koubou.jp/magazine/75842
