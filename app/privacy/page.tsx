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
        <p className="text-text-sub text-sm mb-12">最終更新日：2026年7月</p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">1. はじめに</h2>
            <p className="text-text-sub">
              Auxlog（以下「本サービス」）は、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。本サービスはWeb版（auxlog.app）とモバイルアプリ版の両方を含みます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. 収集する情報</h2>
            <ul className="text-text-sub flex flex-col gap-2 list-disc list-inside">
              <li>メールアドレス（Google認証・Sign in with Appleを通じて取得）</li>
              <li>
                トレーニング記録データ（種目・重量・セット数・回数・疲労度・メモ）
              </li>
              <li>1RM（挙上重量）データ、プログラム進捗（週数・フェーズ・優先部位等）</li>
              <li>お問い合わせフォームの送信内容（カテゴリ・件名・本文）</li>
              <li>サービス利用ログ</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. 情報の利用目的</h2>
            <ul className="text-text-sub flex flex-col gap-2 list-disc list-inside">
              <li>サービスの提供・改善</li>
              <li>メニュー提案・9週間プログラム機能の精度向上</li>
              <li>カスタマーサポート対応</li>
              <li>月額オンラインコーチングをご利用の場合、コーチ（運営者）がフィードバックのためにトレーニングデータを閲覧すること</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. 第三者への提供</h2>
            <p className="text-text-sub mb-3">
              収集した個人情報は、以下のサービス提供に必要な範囲で第三者（委託先）に提供します：
            </p>
            <ul className="text-text-sub flex flex-col gap-2 list-disc list-inside">
              <li>Supabase（データベース・認証）</li>
              <li>Stripe（Web版の決済処理）</li>
              <li>RevenueCat（モバイルアプリ版のApple課金・サブスクリプション管理）</li>
              <li>Resend（お問い合わせメールの送信）</li>
              <li>Vercel（ホスティング）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. Cookieの使用</h2>
            <p className="text-text-sub">
              本サービスは認証状態の維持のためCookieを使用します。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. 情報の保管と削除</h2>
            <p className="text-text-sub">
              ユーザーはアプリまたはWeb版の設定画面からいつでもアカウントを削除できます。削除すると、トレーニング記録・プログラム進捗を含む関連する個人情報が完全に削除されます。有効なサブスクリプションがある場合は削除と同時に解約されます。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. お問い合わせ</h2>
            <p className="text-text-sub">
              個人情報に関するお問い合わせは下記までご連絡ください。
              <br />
              <a
                href="mailto:auxlog.support@gmail.com"
                className="text-accent hover:underline"
              >
                auxlog.support@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
