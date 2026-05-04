import { Shield } from "lucide-react";

const features = [
  {
    icon: "⚡",
    title: "科学的アルゴリズムが今日のメニューを自動提案",
    description:
      "前回の記録・疲労度・経過日数から、重量・セット数・回数を自動で計算。悩む時間はゼロ。",
  },
  {
    icon: "📈",
    title: "RIRと週ボリュームで確実に伸びる",
    description:
      "筋肥大研究に基づくRIR管理（余裕度）と週セット数の最適化で、感覚ではなくデータで成長できる。",
  },
  {
    icon: "shield",
    title: "回復を考慮した安全な提案",
    description:
      "コンパウンド種目は前回が限界なら3日以上のインターバルを自動で確保。オーバートレーニングを防ぐ。",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-bg-card border border-border-default rounded-2xl p-8 flex flex-col gap-4"
            >
              <span className="text-3xl font-bold text-accent">
                {feature.icon === "shield" ? (
                  <Shield className="w-8 h-8 text-accent" />
                ) : (
                  feature.icon
                )}
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
