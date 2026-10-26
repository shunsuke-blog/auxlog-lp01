import { Fragment, type ReactNode } from "react";
import { loadDefaultJapaneseParser } from "budoux";

// 日本語を文節で改行させる（2026-10-26、iPhoneのSafariで「選ぶ／と」のように単語の途中で切れていたため）。
// CSS の word-break: auto-phrase は Chrome 系だけなので、BudouX で文節に分けて区切り目に <wbr> を入れ、
// CSS 側は word-break: keep-all で区切り目以外では改行させない。
// budoux は DOM 用ライブラリまで読み込むのでサーバー（page.tsx）でだけ使い、クライアント部品には分割済みの文章を props で渡す。

const parser = loadDefaultJapaneseParser();

export function jp(text: string): ReactNode {
  return parser.parse(text).map((phrase, i) => (
    <Fragment key={i}>
      {i > 0 && <wbr />}
      {phrase}
    </Fragment>
  ));
}
