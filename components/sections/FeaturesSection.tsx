const features = [
  {
    icon: "🎯",
    title: "自分の種目だけで、次が決まる",
    description:
      "知らない種目は出てこない。いつもやる種目の記録から、次回の重量・セット数を自動提案。自分のトレーニングに特化した提案だけが届く。",
  },
  {
    icon: "⚡",
    title: "設定ゼロ。記録するだけで伸びる",
    description:
      "メソサイクルや週ボリューム上限の設定は不要。記録を積むだけで、自動的にプログレッシブオーバーロードが実現される。",
  },
  {
    icon: "📈",
    title: "中級者が求める提案精度",
    description:
      "RIR（余裕度）管理と週ボリューム最適化で、感覚ではなくデータで確実に成長できる重量を提案。伸び悩みを仕組みで解消する。",
  },
  {
    icon: "✓",
    title: "SNSなし。余計な機能なし。",
    description:
      "コミュニティ機能も、ランキングも、通知も不要。トレーニングを記録して次を決める——それだけに集中できるツール。",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          なぜAuxlogか
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg-card border border-border-default rounded-2xl p-8 flex flex-col gap-4"
            >
              <span className="text-3xl font-bold text-accent">
                {feature.icon}
              </span>
              <h3 className="text-xl font-bold leading-snug">{feature.title}</h3>
              <p className="text-text-sub text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
