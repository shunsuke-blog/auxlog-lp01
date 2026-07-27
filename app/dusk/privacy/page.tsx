import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Dusk",
};

export default function DuskPrivacyPage() {
  return (
    <main className="min-h-screen bg-[#12151c] text-[#f3ece0]">
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-24">
        <p className="text-xs tracking-widest uppercase text-[#e8a33d] mb-2">
          Privacy Policy
        </p>
        <h1 className="text-3xl font-bold mb-2">Dusk プライバシーポリシー</h1>
        <p className="text-sm text-[#948f84] mb-12">最終更新日: 2026年7月27日</p>

        <div className="flex flex-col gap-10 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold mb-3">1. 基本方針</h2>
            <p className="text-[#c9c3b7]">
              Dusk(以下「本アプリ」)は、1日1枚の「ベストショット」を、QRコードで作る24時間限定のチームの中だけで共有する想い出アルバムアプリです。本アプリは、利用者の個人情報を適切に取り扱うことをお約束します。本ポリシーは、本アプリが収集する情報とその取り扱いについて説明するものです。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">2. 収集する情報</h2>
            <p className="text-[#c9c3b7] mb-3">
              本アプリのご利用にあたり、以下の情報を取得します。
            </p>
            <ul className="text-[#c9c3b7] flex flex-col gap-2 list-disc list-inside">
              <li>
                <strong>アカウント情報</strong>: Sign in with Apple /
                Googleでのログイン時に提供される、表示名・プロフィール画像・アカウント識別子
              </li>
              <li>
                <strong>投稿内容</strong>: 撮影した写真、ひとことメモ(任意)
              </li>
              <li>
                <strong>位置情報(任意)</strong>:
                撮影時に、地名程度の大まかなラベル(例:「北鳥山」)を生成するためだけに一度だけ使用します。継続的な位置追跡は行いません
              </li>
              <li>
                <strong>利用状況</strong>:
                チームの参加状況、写真の提出状況など、アプリの基本機能に必要な範囲の情報
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">3. 情報の利用目的</h2>
            <p className="text-[#c9c3b7] mb-3">
              取得した情報は、以下の目的にのみ利用します。
            </p>
            <ul className="text-[#c9c3b7] flex flex-col gap-2 list-disc list-inside">
              <li>QRコードで作成したチーム内での写真共有機能の提供</li>
              <li>カレンダー・アルバムとしての記録の蓄積・表示</li>
              <li>
                リマインド通知など、アプリ機能に付随するお知らせの送信(通知設定をオンにした場合のみ)
              </li>
            </ul>
            <p className="text-[#c9c3b7] mt-3">
              広告配信や第三者への販売を目的とした利用は行いません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">4. 情報の共有範囲</h2>
            <div className="bg-[#1a1f29] border border-[#2c3240] rounded-2xl px-5 py-4 mb-3">
              <p className="text-[#c9c3b7]">
                投稿した写真・メモは、
                <strong className="text-[#f3ece0]">
                  同じQRコードから参加した「その日のチームメンバー」以外には表示されません
                </strong>
                。不特定多数に公開される設定や、SNSのような外部共有機能は本アプリには存在しません。
              </p>
            </div>
            <p className="text-[#c9c3b7]">
              本アプリのデータは、インフラ提供元であるSupabase
              Inc.のサーバー(データセンター:
              日本国内リージョン)に保管されます。法令に基づく開示要請がある場合を除き、第三者への情報提供は行いません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">5. データの保存期間</h2>
            <p className="text-[#c9c3b7]">
              チームの「参加受付」自体は24時間で終了しますが、確定したアルバム(写真・メモ)は、次の「データの削除」に基づき削除されるまで、カレンダー・アルバム機能のためにお客様のアカウントに保存され続けます。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">6. データの削除</h2>
            <p className="text-[#c9c3b7]">
              アプリ内の「設定」から、いつでもご自身の写真・アカウントを削除できます。削除すると、投稿した写真・プロフィール情報は復元不可能な形で削除されます(他のメンバーが同じチームに投稿した写真には影響しません)。アプリ内での操作が難しい場合は、下記の連絡先までご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">7. お子様のプライバシー</h2>
            <p className="text-[#c9c3b7]">
              本アプリは13歳未満のお子様を対象としていません。13歳未満のお子様から意図せず情報を取得したことが判明した場合、速やかに削除します。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">8. 本ポリシーの変更</h2>
            <p className="text-[#c9c3b7]">
              本ポリシーの内容は、法令の変更や本アプリの機能追加に伴い、予告なく改定されることがあります。重要な変更がある場合は、本ページ上でお知らせします。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold mb-3">9. お問い合わせ</h2>
            <p className="text-[#c9c3b7]">
              本ポリシーに関するご質問・削除依頼等は、下記の連絡先までお願いします。
              <br />
              <a
                href="mailto:mdrgkb4869smrgkk@icloud.com"
                className="text-[#e8a33d] hover:underline"
              >
                mdrgkb4869smrgkk@icloud.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
