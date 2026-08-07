import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Auxlog",
};

const items = [
  { label: "販売業者", value: "吉田 峻佑" },
  {
    label: "所在地",
    value: "お問い合わせいただいた場合、遅滞なく開示いたします。",
  },
  {
    label: "電話番号",
    value: "お問い合わせいただいた場合、遅滞なく開示いたします。",
  },
  { label: "メールアドレス", value: "auxlog.support@gmail.com", isEmail: true },
  { label: "販売価格", value: "¥480 / 月（税込）" },
  { label: "支払方法", value: "クレジットカード" },
  { label: "支払時期", value: "無料トライアル終了後、毎月自動更新" },
  { label: "サービス提供時期", value: "決済完了後すぐ" },
  {
    label: "返品・キャンセル",
    value: "サービスの性質上、返金不可。いつでも解約可能。",
  },
];

export default function TokushohoPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-black mb-8">特定商取引法に基づく表記</h1>
        <p className="text-text-sub text-sm mb-12">最終更新日：2026年5月</p>

        <div className="border border-border-default rounded-2xl overflow-hidden">
          {items.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col sm:flex-row ${
                index !== items.length - 1 ? "border-b border-border-default" : ""
              }`}
            >
              <div className="sm:w-48 shrink-0 px-6 py-4 bg-bg-card text-sm font-bold">
                {item.label}
              </div>
              <div className="px-6 py-4 text-text-sub text-sm leading-relaxed">
                {item.isEmail ? (
                  <a
                    href={`mailto:${item.value}`}
                    className="text-accent hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
