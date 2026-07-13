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
        <p className="text-text-sub text-sm mb-12">最終更新日：2026年7月</p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">1. サービス概要</h2>
            <p className="text-text-sub">
              Auxlogは、筋トレ記録・自動メニュー提案・9週間ステップアップ計画を提供するWeb版（auxlog.app）およびモバイルアプリ版のサービスです。あわせて、Auxlogのデータを用いた月額オンラインコーチングサービスを提供する場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">2. 利用資格</h2>
            <p className="text-text-sub">13歳以上の方がご利用いただけます。</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">3. 料金・支払い</h2>
            <ul className="text-text-sub flex flex-col gap-2 list-disc list-inside">
              <li>Auxlog本体：月額¥480（税込）。30日間の無料トライアルあり。トライアル終了後、自動的に月額プランに移行します</li>
              <li>Web版はクレジットカード決済（Stripe）、モバイルアプリ版はApple App内課金でお支払いいただきます</li>
              <li>解約はいつでも可能です（モバイルアプリ版はApple「設定」アプリのサブスクリプション管理から行います）</li>
              <li>月額オンラインコーチングをご利用の場合は、別途提示する料金・期間が適用されます</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">4. 禁止事項</h2>
            <ul className="text-text-sub flex flex-col gap-2 list-disc list-inside">
              <li>本サービスの不正利用</li>
              <li>他のユーザーへの迷惑行為</li>
              <li>リバースエンジニアリング</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">5. 免責事項</h2>
            <p className="text-text-sub">
              本サービスのトレーニング提案・コーチングはあくまで参考情報です。怪我等については責任を負いかねます。持病がある方・通院中の方は主治医にご相談の上ご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">6. アカウントの削除</h2>
            <p className="text-text-sub">
              ユーザーはいつでもアプリまたはWeb版の設定画面からアカウントを削除できます。削除すると、有効なサブスクリプションの解約とあわせて、記録データを含む個人情報が完全に削除され、復元できません。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">7. サービスの変更・終了</h2>
            <p className="text-text-sub">
              事前通知の上、サービス内容の変更・終了を行う場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">8. 準拠法・管轄裁判所</h2>
            <p className="text-text-sub">
              日本法に準拠し、名古屋地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">9. 運営者</h2>
            <p className="text-text-sub">
              個人開発者：吉田 峻佑
              <br />
              連絡先：
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
