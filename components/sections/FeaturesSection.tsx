const features = [
  {
    icon: "🎯",
    title: "トレーナー級の設計が、最初から組み込まれている",
    description:
      "ボリューム→強度→ディロード→マックスアウトの4フェーズは、パーソナルトレーナーが継続的な指導の中で作り上げるような設計思想を、研究ベースで体系化したもの。ゼロから自分で組む必要も、都度トレーナーに設計料を払う必要もない。",
  },
  {
    icon: "📈",
    title: "記録するだけで進捗が可視化される",
    description:
      "プログラムの精度が高いからこそ、やることは記録するだけ。重量・回数を記録すると、フェーズごとの説明や重量推移グラフが自動生成され、今どこにいて、どれだけ伸びているかが一目でわかる。",
  },
  {
    icon: "🧠",
    title: "トレーナーに頼らなくていい設計精度",
    description:
      "毎週の重量調整・フェーズの切り替えまで、本来トレーナーが個別に判断する部分をアプリがあらかじめ設計。人を挟まないから、低価格でもこの精度が実現できている。",
  },
  {
    icon: "🔄",
    title: "提案種目は、いつでも入れ替え可能",
    description:
      "プログラムが選んだ種目が自分に合わなければ、コーチングページからいつでも別の種目に入れ替えられる。入れ替えても、重量提案の精度はそのまま。プログラムに縛られすぎず、自分のジム環境・好みに合わせられる。",
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
