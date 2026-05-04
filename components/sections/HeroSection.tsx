import Image from "next/image";
import CTAButton from "../CTAButton";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            今日やるべき
            <br />
            トレーニングを
            <br />
            <span className="text-accent">30秒</span>で決める。
          </h1>
          <p className="text-text-sub text-lg md:text-xl max-w-xl leading-relaxed">
            感覚に頼ったトレーニングをやめろ。
            <br />
            Auxlogが前回の記録から、今日やるべき重量・セット・回数を自動で導き出す。
          </p>
          <div className="flex flex-col items-center gap-3">
            <CTAButton className="w-full sm:w-auto text-lg px-10 py-5" />
            <p className="text-text-sub text-sm">
              30日間無料・クレジットカード不要
            </p>
          </div>
          <div className="mt-4 w-full max-w-xs mx-auto">
            <div className="rounded-3xl overflow-hidden border border-border-default shadow-2xl shadow-black">
              <Image
                src="/screenshots/app-mockup01.jpg"
                alt="Auxlog 今日のメニュー画面"
                width={390}
                height={844}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
