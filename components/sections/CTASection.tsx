import CTAButton from "../CTAButton";

export default function CTASection() {
  return (
    <section className="py-32 px-6 bg-bg-card">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-5xl md:text-7xl font-black leading-tight">
          まだ、感覚で
          <br />
          やるのか。
        </h2>
        <p className="text-text-sub text-xl">30日間、無料で試してみろ。</p>
        <CTAButton text="今すぐ始める" className="text-lg px-10 py-5" />
      </div>
    </section>
  );
}
