# login-notifier
PCログイン時にLINE通知してくれるやつ.

本当はトリガー登録まで自動化したいが、めんどいのでそこは手動設定で通知部分だけ実装.

# Setup/start/build
## setup
設定ファイルをsettings.template.jsonをコピーしてsettings.jsonとして生成.
LINE notify APIを有効化してaccessTokenを設定.



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
実行対象はビルドしたバイナリファイルを指定.
https://www.hide10.com/archives/26323

#### 自動化する場合の参考ドキュメント
https://dobon.net/vb/dotnet/system/osstartuprun.html


### macOS
https://www.pc-koubou.jp/magazine/75842
