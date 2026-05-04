const problems = [
  {
    icon: "🤔",
    title: "ジムに着いてから「今日何やろう」と悩む",
    description:
      "毎回メニューを考えることで、本来のトレーニングに集中できない。",
  },
  {
    icon: "🔁",
    title: "感覚でやるからいつもベンチプレスばかり",
    description: "好きな種目に偏り、苦手な部位が置き去りになる。",
  },
  {
    icon: "📝",
    title: "前回何キロ上げたか覚えていない",
    description: "記録がないから、重量を増やすタイミングがわからない。",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          こんな経験、
          <br />
          したことないか？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-bg-card border border-border-default rounded-2xl p-8 flex flex-col gap-4"
            >
              <span className="text-4xl">{problem.icon}</span>
              <h3 className="text-xl font-bold leading-snug">{problem.title}</h3>
              <p className="text-text-sub text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
