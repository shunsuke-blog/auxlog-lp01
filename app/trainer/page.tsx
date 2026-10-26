import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import { IBM_Plex_Sans_JP } from "next/font/google";
import BlockPlanner from "./BlockPlanner";
import ClientRail from "./ClientRail";
import { PHASE_NOTE, SCREENS, type Phase } from "./content";
import EditViews from "./EditViews";
import { jp } from "./phrase";
import "./trainer.css";

// トレーナー向けLP（2026-10-25）。トレーニー向けの app/page.tsx とは別ページ・別デザイン（Hallmark / Coral テーマ、アクセントはWeb版と同じティール）。
// トレーニー向けLPへCSSが残らないよう、他ルートへのリンクは next/link ではなく <a>（フル遷移）にしている。

const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500" },
    { path: "./fonts/GeneralSans-Semibold.woff2", weight: "600" },
  ],
  variable: "--font-gs",
  display: "swap",
});

const plexJp = IBM_Plex_Sans_JP({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
  preload: false,
});

const START_URL = "https://auxlog.app/trainer/start";
const APP_STORE_URL = "https://apps.apple.com/jp/app/auxlog/id6790152534";

export const metadata: Metadata = {
  title: "Auxlog for トレーナー - エクセルとLINEの往復を、終わらせる。",
  description:
    "パーソナルトレーナーのためのメニュー作成とクライアント管理。週数に合わせて期分けまでプログラムを自動で作成し、招待コードでクライアントへ。クライアント3名まで無料。",
  openGraph: {
    title: "Auxlog for トレーナー - エクセルとLINEの往復を、終わらせる。",
    description:
      "パーソナルトレーナーのためのメニュー作成とクライアント管理。クライアント3名まで無料、クレジットカード不要。",
    url: "https://auxlog.com/trainer",
    siteName: "Auxlog",
    locale: "ja_JP",
    type: "website",
  },
};

export default function TrainerPage() {
  return (
    <div className={`tr ${generalSans.variable} ${plexJp.variable}`}>
      <a className="skip" href="#main">本文へ移動</a>

      <header className="nav">
        <div className="container nav__bar">
          <a className="wordmark" href="/trainer" aria-label="Auxlog トレーナー向け トップ">
            Auxlog<small>for トレーナー</small>
          </a>
          <nav className="nav__links" aria-label="メイン">
            <a className="link hide-s" href="#pricing">料金</a>
            <a className="link" href="https://auxlog.app/login?next=/trainer">ログイン</a>
            <a className="btn btn--card" href={START_URL}>トレーナーとして始める</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="container grid hero__grid">
            <h1>{jp("エクセルとLINEの往復を、終わらせる。")}</h1>
            <div className="hero__side">
              <p className="lead">{jp("トレーナーのための、メニュー作成とクライアント管理。")}</p>
              <div className="hero__actions">
                <a className="btn btn--ink" href={START_URL}>トレーナーとして始める</a>
                <a className="btn btn--card" href="#screens">画面を見る</a>
              </div>
              <p className="hero__terms">{jp("クライアント3名まで無料。クレジットカード不要。")}</p>
            </div>
          </div>
        </section>

        <section className="showcase" id="screens" aria-label="ダッシュボード">
          <div className="container">
            <figure className="shot">
              <div className="shot__frame showcase__frame" data-slot="dashboard" data-kind="product" data-alt="トレーナーのダッシュボード（契約中・今週の進み・ToDo・アラート）">
                <Image src="/trainer/dashboard.png" alt="Auxlogのトレーナー用ダッシュボード。契約中の人数、今週完了した種目、1RM更新件数、最近のアクティビティ、ToDo、アラートが並ぶ" fill sizes="(min-width: 90rem) 1312px, 100vw" fetchPriority="high" loading="eager" unoptimized />
              </div>
              <figcaption>{jp("ログインして最初に開く画面。今週の進み、次にやること、止まっている人がここに集まります。")}</figcaption>
            </figure>
          </div>
        </section>

        <section className="compare" aria-labelledby="compare-h">
          <div className="container">
            <h2 id="compare-h">{jp("エクセルとLINEでやっていたこと")}</h2>
            <table className="compare__table">
              <thead>
                <tr>
                  <th scope="col">仕事</th>
                  <th scope="col">これまで</th>
                  <th scope="col">Auxlog</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(([job, before, after]) => (
                  <tr key={job}>
                    <th scope="row">{job}</th>
                    <td className="compare__before">{jp(before)}</td>
                    <td>{jp(after)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="stack" aria-labelledby="stack-h">
          <div className="container grid stack__grid">
            <div className="stack__pane">
              <h2 id="stack-h">作る、直す、見守る。</h2>
              <p className="lead">{jp("トレーナーの仕事が、そのまま画面になっています。")}</p>
              <ol className="stack__index">
                {STACK.map((s) => (
                  <li key={s.id}><a className="link" href={`#${s.id}`}>{s.verb}</a></li>
                ))}
              </ol>
            </div>
            <div className="stack__shots">
              {STACK.map((s) => (
                <figure className={`shot stack__item${s.width.endsWith("px") ? " stack__item--portrait" : ""}`} id={s.id} key={s.id} style={s.width.endsWith("px") ? ({ "--frame-w": s.width } as React.CSSProperties) : undefined}>
                  {s.id === "edit" ? <EditViews /> : (
                    <div className="shot__frame" data-slot={s.id} data-kind="product" data-alt={s.alt} style={{ aspectRatio: s.ratio }}>
                      <Image src={s.src} alt={s.alt} fill sizes="(min-width: 60rem) 56vw, 100vw" unoptimized />
                    </div>
                  )}
                  <figcaption>
                    <h3>{jp(s.title)}</h3>
                    <p>{jp(s.body)}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="block" aria-labelledby="block-h">
          <div className="container">
            <div className="block__head">
              <h2 id="block-h">{jp("週数を決めれば、期分けまで組む")}</h2>
              <p className="lead">{jp("1〜16週、週2〜7日。高負荷が続くと、回復週を自動で挟みます。")}</p>
            </div>
            <BlockPlanner
              notes={Object.fromEntries(Object.entries(PHASE_NOTE).map(([k, v]) => [k, jp(v)])) as Record<Phase, React.ReactNode>}
              caption={jp("1RMはエプリーの式で記録から推定します。トレーナーが1RMを入れていない種目も、初回の記録から重量を自動で計算します。")}
            />
          </div>
        </section>

        <section className="client" aria-labelledby="client-h">
          <div className="container grid client__grid">
            <div className="client__head">
              <h2 id="client-h">{jp("クライアントは、記録するだけ")}</h2>
              <p className="lead">{jp("クライアントのスマホ（Web版）の画面です。")}</p>
            </div>
            <dl className="facts client__facts">
              <div>
                <dt>料金</dt>
                <dd>{jp("無料です。アプリ内課金もありません。")}</dd>
              </div>
              <div>
                <dt>始め方</dt>
                <dd>{jp("あなたが発行する招待コードを入れると、プランが届きます。")}</dd>
              </div>
              <div>
                <dt>記録する場所</dt>
                <dd>{jp("iPhoneアプリのコーチングモードと、Web版（auxlog.app）。")}<br /><a className="link" href={APP_STORE_URL}>App Storeで見る</a></dd>
              </div>
            </dl>
          </div>
          <ClientRail captions={SCREENS.map((sc) => jp(sc.caption))} />
        </section>

        <section className="board" id="pricing" aria-labelledby="pricing-h">
          <div className="container">
            <div className="board__head">
              <h2 id="pricing-h">{jp("料金は、クライアントの人数で")}</h2>
              <p className="lead">{jp("3名までずっと無料。ご自身のアカウントは人数に数えません。")}</p>
            </div>
            <ul className="plans">
              {PLANS.map((p) => (
                <li key={p.name} className="plan">
                  <h3>{p.name}</h3>
                  <p className="plan__price"><span className="plan__yen">{p.price}</span><span className="plan__unit">/ 月</span></p>
                  <ul className="plan__list">
                    {p.items.map((i) => <li key={i}>{jp(i)}</li>)}
                  </ul>
                </li>
              ))}
            </ul>
            <div className="board__foot">
              <a className="btn btn--card" href={START_URL}>無料で始める</a>
              <p>{jp("表示価格は税込です。クレジットカードは不要です。4人目を追加するときに、プロプランをご案内します。")}</p>
            </div>
          </div>
        </section>

        <section className="faq" aria-labelledby="faq-h">
          <div className="container grid faq__grid">
            <h2 id="faq-h" className="faq__head">よくある質問</h2>
            <dl className="faq__rows">
              {FAQ.map(([q, a]) => (
                <div key={q} className="faq__row">
                  <dt>{jp(q)}</dt>
                  <dd>{typeof a === "string" ? jp(a) : a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="container">
          <div className="foot__close">
            <p className="foot__line">{jp("まずは、あなた自身と身近な3人から。")}</p>
            <a className="btn btn--card" href={START_URL}>トレーナーとして始める</a>
          </div>
          <p className="foot__mark" aria-hidden="true">Auxlog</p>
          <nav className="foot__links" aria-label="フッター">
            {/* フル遷移にして、このページのCSS（:root のトークン）をトレーニー向けLPに持ち込まない */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a className="link" href="/">トレーニー向けアプリ</a>
            <a className="link" href="/terms">利用規約</a>
            <a className="link" href="/privacy">プライバシーポリシー</a>
            <a className="link" href="/tokushoho">特定商取引法に基づく表記</a>
            <a className="link" href="mailto:auxlog.support@gmail.com">お問い合わせ</a>
          </nav>
          <p className="foot__legal">© 2026 Auxlog</p>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: SLOTS_SCRIPT }} />
    </div>
  );
}

const COMPARE: [string, string, string][] = [
  ["1RMの把握", "重量と回数から電卓で逆算", "エプリーの式で記録から自動で推定"],
  ["次回の重量", "%を掛けてセルに手入力", "%1RMで指定すれば、重量は人ごとに自動"],
  ["期分け", "頭の中とシートを行き来して設計", "週数に合わせて期分けまで自動で作成、週ごとに編集"],
  ["メニューの共有", "スクショを撮ってLINEで送る", "招待コードで、クライアントのアプリに届く"],
  ["進み具合", "LINEで「やりましたか？」と聞く", "記録の途切れや未達をアラートで知らせる"],
];

const STACK = [
  {
    id: "make", verb: "作る", src: "/trainer/create.png", ratio: "860 / 1440", width: "400px",
    title: "条件を選べば、プログラムができる",
    body: "対象・レベル・週数・日数・時間を選ぶと、種目・%1RM・回数まで組み上がります。白紙からも作れます。",
    alt: "新しいテンプレートの作成画面。Auxlogで作成と白紙から作成を選び、対象・レベル・週数・週の日数・時間・重点部位を指定する",
  },
  {
    id: "edit", verb: "直す", src: "/trainer/editor-ex.png", ratio: "1858 / 1670", width: "100%",
    title: "Dayごとにも、種目ごとにも直せる",
    body: "1日分をまとめて組むなら、Dayごと表示。同じ種目の全週を並べて流れを見るなら、種目ごと表示。",
    alt: "プログラム編集画面の種目ごと表示。ローバースクワットのWeek 1とWeek 2のセット・%1RM・回数・RIRが縦に並ぶ",
  },
  {
    id: "swap", verb: "入れ替える", src: "/trainer/swap.png", ratio: "1110 / 1520", width: "440px",
    title: "入れ替えても、組み立ては崩れない",
    body: "全週まとめて、またはその週だけ。セット・回数・コメントはそのまま残ります。",
    alt: "種目の入れ替え画面。全週のDay 1かこの週だけかを選び、同じ動きの種目と同じ部位の種目から選ぶ",
  },
  {
    id: "watch", verb: "見守る", src: "/trainer/client.png", ratio: "2405 / 1800", width: "100%",
    title: "止まった人から、先に知らせる",
    body: "記録が途切れた人がいれば、すぐ分かります。1RMが伸びない種目も、アラートで。",
    alt: "クライアント一覧と詳細。推定1RMが更新されていないというアラート、プランの進み、自己ベストが表示されている",
  },
];

const PLANS = [
  { name: "スターター", price: "¥0", items: ["クライアント3名まで", "ご自身のアカウントは枠外で無制限"] },
  { name: "プロ", price: "¥9,800", items: ["クライアント30名まで"] },
  { name: "ビジネス", price: "¥19,800", items: ["クライアント無制限", "管理者・トレーナー3名まで", "チーム管理と優先サポート"] },
];

const FAQ: [string, React.ReactNode][] = [
  ["自分のトレーニングも記録できますか？", "はい。ご自身のアカウントはクライアントの人数に数えず、無料で使えます。"],
  ["クライアントに費用はかかりますか？", "かかりません。招待コードを入れて、無料で記録できます。"],
  ["作ったプログラムは編集できますか？", "できます。重量・回数・セット数、種目の入れ替えまで、週ごとにも全週まとめても直せます。"],
  ["iPhoneアプリには対応していますか？", "はい。iPhoneアプリのコーチングモードで、あなたのプランのまま記録できます。Web版でも記録できます。"],
  ["トレーナーが4名以上の店舗では？", <>
    <a className="link" href="mailto:auxlog.support@gmail.com">auxlog.support@gmail.com</a> までご相談ください。お見積もりします。
  </>],
];

// Hallmark のスロット差し替え用（imagery.md § 3）。画像が読み込めなかった時はそのimgを外す。
const SLOTS_SCRIPT = `window.hallmarkSlots = (m) => { for (const [k, v] of Object.entries(m)) { const s = document.querySelector(\`[data-slot="\${k}"]\`); if (!s) continue; const im = new Image(); im.src = typeof v === 'string' ? v : v.src; im.alt = (typeof v === 'object' && v.alt) || s.dataset.alt || ''; s.querySelectorAll(':scope > img').forEach((o) => o.remove()); s.prepend(im); } };
document.querySelectorAll('[data-slot] img').forEach((i) => { if (i.complete && !i.naturalWidth) i.remove(); else i.addEventListener('error', () => i.remove(), { once: true }); });`;
