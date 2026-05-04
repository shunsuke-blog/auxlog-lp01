const evidences = [
  {
    title: "プログレッシブオーバーロード",
    description:
      "筋肥大の大原則。前回より少しだけ重く、少しだけ多く。Auxlogはこの計算を毎回自動で行う。",
  },
  {
    title: "RIR管理（余裕度）",
    description:
      "毎回限界まで追い込むのは非効率。研究では「あと2回できる状態で止める」方が長期的なボリュームを確保できることが示されている。",
  },
  {
    title: "週ボリューム最適化",
    description:
      "あなたのトレーニングレベルに合わせた週セット数の目標範囲を自動設定。不足・過多をリアルタイムで検知する。",
  },
];

export default function ScienceSection() {
  return (
    <section className="py-24 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          なぜ、科学的に正しいのか。
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {evidences.map((evidence) => (
            <div
              key={evidence.title}
              className="border border-border-default rounded-2xl p-8 flex flex-col gap-4"
            >
              <div className="w-8 h-1 bg-accent rounded-full" />
              <h3 className="text-xl font-bold leading-snug">{evidence.title}</h3>
              <p className="text-text-sub text-sm leading-relaxed">
                {evidence.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
