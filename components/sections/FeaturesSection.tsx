const features = [
  {
    icon: "⚡",
    title: "開いた瞬間に今日のメニューが出る",
    description:
      "前回の記録をもとに、重量・セット数・回数を自動で提案。悩む時間はゼロ。",
  },
  {
    icon: "📈",
    title: "感覚ではなく、データで伸ばす",
    description:
      "RIR（余裕度）と週ボリュームに基づいたプログレッシブオーバーロードで、確実に成長できる重量を提案。",
  },
  {
    icon: "✓",
    title: "30秒で記録完了",
    description:
      "提案値が初期値として入力済み。変更がなければそのまま保存するだけ。",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          なぜAuxlogか
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
