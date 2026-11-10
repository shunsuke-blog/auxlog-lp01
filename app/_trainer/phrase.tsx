import { Fragment, type ReactNode } from "react";
import { loadDefaultJapaneseParser } from "budoux";

// 日本語を文節で改行させる（2026-10-26、iPhoneのSafariで「選ぶ／と」のように単語の途中で切れていたため）。
// CSS の word-break: auto-phrase は Chrome 系だけなので、BudouX で文節に分けて区切り目に <wbr> を入れ、
// CSS 側は word-break: keep-all で区切り目以外では改行させない。
// 文が2つ以上ある時は文ごとに .sentence（display: block）で包み、次の文は必ず行頭から始める
// （ブラウザは入るだけ詰めるので、放っておくと前の文の残りと次の文が同じ行に並ぶ）。
// budoux は DOM 用ライブラリまで読み込むのでサーバー（page.tsx）でだけ使い、クライアント部品には分割済みの文章を props で渡す。

const parser = loadDefaultJapaneseParser();
const SHORT_SENTENCE = 7;

function phrases(text: string): ReactNode {
  return parser.parse(text).map((phrase, i) => (
    <Fragment key={i}>
      {i > 0 && <wbr />}
      {phrase}
    </Fragment>
  ));
}

export function jp(text: string): ReactNode {
  // 「はい。」「できます。」のような短い文は、1行だけ浮かないよう次の文と同じ行から始める
  const sentences = text.split(/(?<=。)/).filter(Boolean).reduce<string[]>((acc, cur) => {
    const last = acc[acc.length - 1];
    if (last !== undefined && last.length <= SHORT_SENTENCE) acc[acc.length - 1] = last + cur;
    else acc.push(cur);
    return acc;
  }, []);
  if (sentences.length < 2) return phrases(text);
  return sentences.map((s, i) => <span key={i} className="sentence">{phrases(s)}</span>);
}
