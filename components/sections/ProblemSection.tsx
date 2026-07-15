const problems = [
  {
    icon: "📉",
    title: "初心者の頃は伸びていたのに、ある時から止まった",
    description:
      "毎月のように更新していた重量が、気づけば何ヶ月も変わらない。それは才能の限界じゃない。初心者ボーナスが切れて、同じやり方が通用しなくなっただけ。",
  },
  {
    icon: "⚙️",
    title: "毎回「今日は何をやるか」を考えるのに疲れた",
    description:
      "メソサイクル、週ボリューム上限……理屈はわかっていても、それを自分で組み立て続けるのは別の話。毎回考えることそのものが、一番の負担であり挫折の原因になる。",
  },
  {
    icon: "⚖️",
    title: "気づけば好きな種目ばかりで、部位が偏っている",
    description:
      "ベンチプレスは得意だけど、背中や脚は後回し。自分では気づきにくいけど、伸び悩みの原因になっている偏りかもしれない。",
  },
  {
    icon: "🤔",
    title: "「メソサイクル」「RIR」……聞くけど、結局わからない",
    description:
      "もっともらしい言葉はよく見かける。でも結局、それを自分でどう組み立てればいいのかまでは教えてくれない。",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          こんな悩み、
          <br />
          ありませんか？
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
