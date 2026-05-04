import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Auxlog",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-black mb-8">プライバシーポリシー</h1>
        <p className="text-[#888888] text-sm mb-12">最終更新日：2026年5月</p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">1. はじめに</h2>
            <p className="text-[#888888]">
              Auxlog（以下「本サービス」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. 収集する情報</h2>
            <ul className="text-[#888888] flex flex-col gap-2 list-disc list-inside">
              <li>メールアドレス（Google認証を通じて取得）</li>
              <li>
                トレーニング記録データ（種目・重量・セット数・回数・疲労度）
              </li>
              <li>サービス利用ログ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. 情報の利用目的</h2>
            <ul className="text-[#888888] flex flex-col gap-2 list-disc list-inside">
              <li>サービスの提供・改善</li>
              <li>メニュー提案機能の精度向上</li>
              <li>カスタマーサポート対応</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. 第三者への提供</h2>
            <p className="text-[#888888] mb-3">
              収集した個人情報は、以下のサービス提供に必要な範囲で第三者に提供します：
            </p>
            <ul className="text-[#888888] flex flex-col gap-2 list-disc list-inside">
              <li>Supabase（データベース・認証）</li>
              <li>Stripe（決済処理）</li>
              <li>Vercel（ホスティング）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Cookieの使用</h2>
            <p className="text-[#888888]">
              本サービスは認証状態の維持のためCookieを使用します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. 情報の保管と削除</h2>
            <p className="text-[#888888]">
              アカウント削除時に、関連する個人情報を削除します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. お問い合わせ</h2>
            <p className="text-[#888888]">
              個人情報に関するお問い合わせは下記までご連絡ください。
              <br />
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
