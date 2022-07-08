# NS-TYPING

数字・記号専用のタイピング練習ゲーム

[play](https://yulian-game.web.app)

[UIトレース](https://www.figma.com/file/ujxh6AGXjpaSGhVabpHhZu/%E6%94%B9%E5%A4%89%E5%BE%8C%E3%81%AE%E9%81%B7%E7%A7%BB%E5%9B%B3?node-id=0%3A1 )

①　Home

![image-20220628100347833](https://img.yuliannas.com/i/202206281003882.png)



②-1　Playing

![image-20220628100425750](https://img.yuliannas.com/i/202206281004797.png)



②-2 Playing Error

![image-20220628100449582](https://img.yuliannas.com/i/202206281004628.png)



③　GameOver

![image-20220628100526669](https://img.yuliannas.com/i/202206281005713.png)

## コンポーネント設計



### ビューコンポーネント

![image-20220628093044240](https://img.yuliannas.com/i/202206280930358.png)

### 関数

<img src="https://img.yuliannas.com/i/202206280931144.png" alt="image-20220628093119111" style="zoom:50%;" />

| 関数名                                               | 説明                             |
| ---------------------------------------------------- | -------------------------------- |
| calAverage()                                         | Typingの平均速度を算出する       |
| calCorrectRate( 引数1: 正解数, 引数2: 正解数+誤答数) | 結果の正解率を算出する           |
| randomIntArray( 引数1: 問題集の数, 引数2:  出題の数) | 重複なし出題の内容と順番を決める |



### ミドルウェア

![image-20220628093234359](https://img.yuliannas.com/i/202206280932432.png)

## テスト

### Unit-Test

```
yarn test
```

- 3つの関数のテスト
- 部分コンポーネントが正しく描画されているかをテスト



### Cypress-Test

```
yarn start
yarn run cypress run
```



- App全体のテスト
- ①Home描画されたか、ボタンが正しく動作しているか
- ②Playing 「タイトルに戻る」ボタンが正しく動作しているか
- ②Playing で10回正解入力すると③GameOverに遷移するか
- ②Playing で1回誤答入力すると②Playing　Errorに遷移するか、文字が赤になったか
- ③GameOverが正しく描画されたか　「タイトルに戻る」ボタンが正しく動作しているか
