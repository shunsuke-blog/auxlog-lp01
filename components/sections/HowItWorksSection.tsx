const steps = [
  {
    number: "01",
    title: "頻度・時間・種目・1RMを入力",
    description:
      "週に何回、何分。どの種目をやるか。コンパウンド種目は1RMも。最初に数分で伝える。",
  },
  {
    number: "02",
    title: "ジムに着いたらアプリを開く",
    description: "今日やるべき種目・重量・セットが、9週間プログラムに沿って自動で表示される。",
  },
  {
    number: "03",
    title: "記録して、次の週へ進む",
    description:
      "トレーニング後に結果を記録。週が進むごとに、ボリューム→強度→ディロード→マックスアウトとプログラムが自動で進行する。",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          使い方は、
          <br />
          シンプル。
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span className="text-5xl font-black text-accent">
                {step.number}
              </span>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-text-sub text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
