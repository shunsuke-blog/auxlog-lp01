import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | Auxlog",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-black mb-8">利用規約</h1>
        <p className="text-[#888888] text-sm mb-12">最終更新日：2026年5月</p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">1. サービス概要</h2>
            <p className="text-[#888888]">
              Auxlogは、筋トレ記録・自動メニュー提案を提供するWebアプリケーションです。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. 利用資格</h2>
            <p className="text-[#888888]">13歳以上の方がご利用いただけます。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. 料金・支払い</h2>
            <ul className="text-[#888888] flex flex-col gap-2 list-disc list-inside">
              <li>月額¥480（税込）</li>
              <li>30日間の無料トライアルあり</li>
              <li>トライアル終了後、自動的に月額プランに移行します</li>
              <li>解約はいつでも可能です</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. 禁止事項</h2>
            <ul className="text-[#888888] flex flex-col gap-2 list-disc list-inside">
              <li>本サービスの不正利用</li>
              <li>他のユーザーへの迷惑行為</li>
              <li>リバースエンジニアリング</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. 免責事項</h2>
            <p className="text-[#888888]">
              本サービスのトレーニング提案はあくまで参考情報です。怪我等については責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. サービスの変更・終了</h2>
            <p className="text-[#888888]">
              事前通知の上、サービス内容の変更・終了を行う場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. 準拠法・管轄裁判所</h2>
            <p className="text-[#888888]">
              日本法に準拠し、名古屋地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. 運営者</h2>
            <p className="text-[#888888]">
              個人開発者：吉田 峻佑
              <br />
              連絡先：
              <a
                href="mailto:support@auxlog.com"
                className="text-[#E8FF00] hover:underline"
              >
                support@auxlog.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
