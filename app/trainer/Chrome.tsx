import { jp } from "./phrase";

// トレーナー向けのページ（/trainer と特定商取引法の表記）で共通のナビとフッター。
// 他ルートへのリンクは next/link ではなく <a>（フル遷移）にして、このCSS（:root のトークン）を他のページに持ち込まない。

export const START_URL = "https://auxlog.app/trainer/start";
export const CONTACT_EMAIL = "auxlog.support@gmail.com";

export function TrainerNav() {
  return (
    <header className="nav">
      <div className="container nav__bar">
        <a className="wordmark" href="/trainer" aria-label="Auxlog トレーナー向け トップ">
          Auxlog<small>for トレーナー</small>
        </a>
        <nav className="nav__links" aria-label="メイン">
          <a className="link hide-s" href="/trainer#pricing">料金</a>
          <a className="link" href="https://auxlog.app/login?next=/trainer">ログイン</a>
          <a className="btn btn--card" href={START_URL}>トレーナーとして始める</a>
        </nav>
      </div>
    </header>
  );
}

export function TrainerFooter() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot__close">
          <p className="foot__line">{jp("まずは、あなた自身と身近な3人から。")}</p>
          <a className="btn btn--card" href={START_URL}>トレーナーとして始める</a>
        </div>
        <p className="foot__mark" aria-hidden="true">Auxlog</p>
        <nav className="foot__links" aria-label="フッター">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a className="link" href="/">トレーニー向けアプリ</a>
          <a className="link" href="/terms">利用規約</a>
          <a className="link" href="/privacy">プライバシーポリシー</a>
          <a className="link" href="/tokushoho">特定商取引法に基づく表記</a>
          <a className="link" href={`mailto:${CONTACT_EMAIL}`}>お問い合わせ</a>
        </nav>
        <p className="foot__legal">© 2026 Auxlog</p>
      </div>
    </footer>
  );
}
