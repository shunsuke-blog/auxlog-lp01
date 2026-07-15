const features = [
  {
    icon: "🎯",
    title: "自分の種目だけで、次が決まる",
    description:
      "知らない種目は出てこない。自分で選んだ種目に対して、1RMをもとに9週間分の重量・セット数をあらかじめ設計。自分のトレーニングに特化したプログラムだけが届く。",
  },
  {
    icon: "⚡",
    title: "初期設定は数分。あとの9週間はもう決まっている",
    description:
      "頻度・時間・種目・1RMを最初に入力するだけ。メソサイクルや週ボリュームを自分で組み立てる必要はなく、毎週の重量が自動的にプログレッシブオーバーロードで進行する。",
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
