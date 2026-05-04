const steps = [
  {
    number: "01",
    title: "種目を選ぶ",
    description:
      "ベンチプレス、スクワットなど、自分がやる種目をタップで選択。",
  },
  {
    number: "02",
    title: "毎朝アプリを開く",
    description: "今日やるべき種目・重量・セットが自動で表示される。",
  },
  {
    number: "03",
    title: "記録して成長する",
    description:
      "トレーニング後に結果を入力。次回への提案がさらに精度を上げる。",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-[#141414]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          使い方は、シンプル。
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="text-5xl font-black text-[#E8FF00]">
                {step.number}
              </span>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-[#888888] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
