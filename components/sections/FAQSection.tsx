const faqs = [
  {
    question: "筋トレ初心者でも使えますか？",
    answer:
      "Auxlogは筋トレ歴1年以上の中級者・上級者を主な対象に設計されたプログラムです。基礎的なフォームが身についている方により効果を実感いただけます。",
  },
  {
    question: "プログラムに入っていない種目もやりたいのですが。",
    answer:
      "プログラムが提案した種目が合わない場合は、コーチングページからいつでも別の種目に入れ替えられます。入れ替え後も重量提案の精度はそのまま引き継がれます。",
  },
  {
    question: "人のコーチはついていますか？",
    answer:
      "いいえ、Auxlogはアプリ単体で完結します。本来コーチが行うようなプログラム設計をアプリが代わりに行うので、別途人のコーチは必要ありません。",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
          よくある質問
        </h2>
        <div className="flex flex-col gap-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="border border-border-default rounded-2xl p-8 flex flex-col gap-3"
            >
              <h3 className="text-lg font-bold leading-snug">Q. {faq.question}</h3>
              <p className="text-text-sub text-sm leading-relaxed">A. {faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
