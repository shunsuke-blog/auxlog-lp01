const problems = [
  {
    icon: "📊",
    title: "記録はしてる。でも次に何をすればいいか、わからない",
    description:
      "記録は手段であって目的じゃない。前回より何をどう変えるか——その答えが自動で出てこなければ、記録の意味は半減する。",
  },
  {
    icon: "⚙️",
    title: "アプリを試したが、設定が複雑で続かなかった",
    description:
      "メソサイクル、週ボリューム上限……理屈はわかる。でも毎回設定するのが面倒で結局やめた。複雑な仕組みが長続きを妨げる。",
  },
  {
    icon: "🎯",
    title: "AIが自分と関係ない種目を勧めてくる",
    description:
      "知らない種目、ジムにない器具、普段やらない動き。自分の好みを無視した提案に振り回されても、続かないし伸びない。",
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
