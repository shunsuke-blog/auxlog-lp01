import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サポート | Auxlog",
};

const faqs = [
  {
    q: "サブスクリプションを解約したい",
    a: "Web版は設定画面の「サブスクリプション」からいつでも解約できます。モバイルアプリ版はApple「設定」アプリのサブスクリプション管理から解約してください（アプリ内の「サブスクリプション」画面からもApp Storeの管理画面へ移動できます）。",
  },
  {
    q: "無料トライアルの期間・その後の料金は？",
    a: "初回登録から30日間は無料でご利用いただけます。トライアル終了後は自動的に月額¥2,980（税込）のプランに移行します。",
  },
  {
    q: "9週間のプログラムが終わったらどうなりますか？",
    a: "最終週（MaxOut）を終えると、その週の実績をもとに重量の基準を自動で更新し、次の9週間プログラムを作成するかどうかの確認画面が表示されます。承認するだけで、種目を選び直す必要もなく、これまでのトレーニング記録もそのまま残ったまま次のサイクルが始まります。",
  },
  {
    q: "アカウントを削除したい",
    a: "Web版・モバイルアプリ版どちらも設定画面から「アカウントを削除する」を選択すると削除できます。削除すると、有効なサブスクリプションの解約とあわせて、トレーニング記録・プログラム進捗を含む全てのデータが完全に削除され、復元できません。",
  },
  {
    q: "ログインできない・パスワードを忘れた",
    a: "AuxlogはGoogleアカウントまたはApple IDでログインする仕組みのため、Auxlog独自のパスワードはありません。GoogleまたはAppleアカウント側のログイン情報をご確認ください。",
  },
  {
    q: "記録を間違えて保存してしまった",
    a: "履歴画面から該当の記録を選択すると、重量・回数・種目などを編集または削除できます。",
  },
  {
    q: "種目を追加・削除したい",
    a: "設定画面の「種目を管理する」から、種目の追加・削除ができます。",
  },
];

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-black mb-8">サポート</h1>
        <p className="text-text-sub text-sm mb-12">最終更新日：2026年7月</p>

        <div className="flex flex-col gap-10 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-3">お問い合わせ</h2>
            <p className="text-text-sub mb-3">
              アプリ内の設定画面から「お問い合わせ」でもご連絡いただけます。メールでのお問い合わせは下記までお願いします。
            </p>
            <a
              href="mailto:auxlog.support@gmail.com"
              className="text-accent hover:underline"
            >
              auxlog.support@gmail.com
            </a>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">よくある質問</h2>
            <div className="flex flex-col gap-6">
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3 className="font-bold text-black dark:text-white mb-1.5">{item.q}</h3>
                  <p className="text-text-sub">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
