import CTAButton from "../CTAButton";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            今日のトレーニングを、
            <br />
            <span className="text-[#E8FF00]">30秒</span>で決める。
          </h1>
          <p className="text-[#888888] text-lg md:text-xl max-w-xl leading-relaxed">
            感覚に頼ったトレーニングをやめろ。
            <br />
            Auxlogが前回の記録から、今日やるべき重量・セット・回数を自動で導き出す。
          </p>
          <div className="flex flex-col items-center gap-3">
            <CTAButton className="w-full sm:w-auto text-lg px-10 py-5" />
            <p className="text-[#888888] text-sm">
              30日間無料・クレジットカード不要
            </p>
          </div>
          {/* アプリモックアップ */}
          <div className="mt-8 w-full max-w-sm mx-auto">
            <div className="bg-[#141414] border border-[#222222] rounded-3xl aspect-[9/16] max-h-[500px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#E8FF00] font-black text-2xl">Auxlog</p>
                <p className="text-[#888888] text-sm mt-2">App Screenshot</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
