import CTAButton from "../CTAButton";

const includedFeatures = [
  "自動メニュー提案（無制限）",
  "トレーニング記録（無制限）",
  "重量推移グラフ",
  "科学的プログレッシブオーバーロード",
];

export default function PricingSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          シンプルな料金体系
        </h2>
        <div className="max-w-md mx-auto border border-[#E8FF00] rounded-3xl p-10 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="inline-flex items-center self-start bg-[#E8FF00] text-black text-xs font-bold px-3 py-1 rounded-full">
              30日間無料トライアル
            </span>
            <div>
              <span className="text-5xl font-black">¥480</span>
              <span className="text-[#888888] text-lg ml-2">/ 月</span>
            </div>
            <p className="text-[#888888] text-sm">
              トライアル終了後から課金開始。クレジットカード登録はトライアル終了後。
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#E8FF00] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <CTAButton className="w-full justify-center" />
        </div>
      </div>
    </section>
  );
}
