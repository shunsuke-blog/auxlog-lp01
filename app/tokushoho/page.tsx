import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CONTACT_EMAIL, TrainerFooter, TrainerNav } from "../trainer/Chrome";
import { trainerFontClass } from "../trainer/fonts";
import { jp } from "../trainer/phrase";
import "../trainer/trainer.css";

// 特定商取引法に基づく表記（2026-10-26 改訂）。有料プランはトレーナー向けだけになったので、
// トレーナー向けLP（/trainer）と同じデザイン・料金体系に合わせた。トレーニー（クライアント）の利用は無料。

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Auxlog for トレーナー",
  description: "Auxlog for トレーナーの特定商取引法に基づく表記です。",
};

const DISCLOSE = "ご請求があった場合、遅滞なく開示します。";

const ITEMS: { label: string; value: ReactNode }[] = [
  { label: "販売業者", value: "吉田 峻佑" },
  { label: "所在地", value: jp(DISCLOSE) },
  { label: "電話番号", value: jp(DISCLOSE) },
  { label: "メールアドレス", value: <a className="link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> },
  {
    label: "販売価格",
    value: (
      <>
        <dl className="legal__prices">
          <div><dt>スターター</dt><dd>0円</dd></div>
          <div><dt>ベーシック</dt><dd>2,980円 / 月</dd></div>
          <div><dt>プロ</dt><dd>6,800円 / 月</dd></div>
          <div><dt>ビジネス</dt><dd>19,800円〜 / 月</dd></div>
        </dl>
        {jp("表示価格はすべて税込です。ビジネスプランはお問い合わせのうえ、お申し込みのご案内をお送りします。料金は、トレーナーの人数に応じて個別にお見積もりします。")}
      </>
    ),
  },
  { label: "商品代金以外の必要料金", value: jp("インターネット接続に必要な通信料は、お客様のご負担となります。") },
  { label: "支払方法", value: "クレジットカード（Stripe）" },
  { label: "支払時期", value: jp("お申し込み時に初回分をお支払いいただき、以降は1か月ごとに自動で更新・決済されます。") },
  { label: "サービスの提供時期", value: jp("決済の完了後、すぐにご利用いただけます。") },
  { label: "解約", value: jp("いつでも解約できます。解約後も、お支払い済みの期間が終わるまではご利用いただけます。") },
  { label: "返品・返金", value: jp("デジタルサービスの性質上、お支払い後の返金はいたしかねます。") },
  { label: "動作環境", value: jp("トレーナー向けの機能はWeb版（auxlog.app）で、最新のブラウザでご利用いただけます。クライアントはWeb版またはiPhoneアプリで記録できます。") },
  { label: "クライアントの利用", value: jp("無料です。アプリ内課金もありません。") },
];

export default function TokushohoPage() {
  return (
    <div className={`tr ${trainerFontClass}`}>
      <a className="skip" href="#main">本文へ移動</a>
      <TrainerNav />
      <main id="main" className="legal">
        <div className="container grid legal__grid">
          <div className="legal__head">
            <h1>{jp("特定商取引法に基づく表記")}</h1>
            <p className="legal__date">最終更新日：<time dateTime="2026-10-27">2026年10月27日</time></p>
          </div>
          <dl className="legal__rows">
            {ITEMS.map((item) => (
              <div key={item.label} className="legal__row">
                <dt>{jp(item.label)}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
      <TrainerFooter />
    </div>
  );
}
