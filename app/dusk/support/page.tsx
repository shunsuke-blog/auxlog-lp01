import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サポート | Dusk",
};

const faqs = [
  {
    q: "Duskはどんなアプリですか?",
    a: "1日1枚だけの「ベストショット」を、QRコードで作った24時間限定のチームの中だけで共有する想い出アルバムアプリです。その場にいた人だけで、その日の記録を積み重ねていけます。",
  },
  {
    q: "1人でも使えますか?",
    a: "はい。QRコードを発行してチームを作れば、1人でもその日のベストショットを撮ってカレンダーに記録できます。後から人を招待して一緒のチームにすることもできます。",
  },
  {
    q: "チームの有効期限が過ぎるとどうなりますか?",
    a: "24時間が経過した時点で、それまでに提出された写真だけでその日のアルバムが確定します。全員が揃わなくても、提出された分だけで成立します。",
  },
  {
    q: "アカウントや写真を削除したい",
    a: "アプリ内の「設定」からいつでも削除できます。うまくいかない場合は下記までご連絡ください。",
  },
  {
    q: "不具合の報告・ご要望",
    a: "お手数ですが、発生した状況(端末・iOSバージョン・操作内容)を添えて下記までご連絡ください。",
  },
];

export default function DuskSupportPage() {
  return (
    <main className="min-h-screen bg-[#12151c] text-[#f3ece0]">
      <div className="max-w-2xl mx-auto px-6 pt-20 pb-24">
        <p className="text-xs tracking-widest uppercase text-[#e8a33d] mb-2">
          Support
        </p>
        <h1 className="text-3xl font-bold mb-2">Dusk サポート</h1>
        <p className="text-sm text-[#948f84] mb-12">
          Dusk(ダスク)のご利用に関するお問い合わせ窓口です。
        </p>

        <dl className="flex flex-col gap-8">
          {faqs.map((item) => (
            <div key={item.q}>
              <dt className="text-base font-bold mb-2">{item.q}</dt>
              <dd className="text-[#c9c3b7] text-[15px] leading-relaxed">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex items-center gap-4 bg-[#1a1f29] border border-[#2c3240] rounded-2xl px-5 py-4 mt-10">
          <div>
            <p className="text-xs text-[#948f84] mb-1">サポート窓口</p>
            <a
              href="mailto:mdrgkb4869smrgkk@icloud.com"
              className="font-semibold text-[#f3ece0] hover:text-[#e8a33d]"
            >
              mdrgkb4869smrgkk@icloud.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
