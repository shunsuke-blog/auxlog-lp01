import Image from "next/image";
import CTAButton from "../CTAButton";

const mockups = [
  {
    src: "/screenshots/app-mockup01.jpg",
    alt: "今日のメニュー画面",
  },
  {
    src: "/screenshots/app-mockup02.jpg",
    alt: "トレーニング記録画面",
  },
  {
    src: "/screenshots/app-mockup03.jpg",
    alt: "履歴・グラフ画面",
  },
];

export default function HeroSection() {
  return (
    <section className="pt-32 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            感覚をやめて、
            <br />
            <span className="text-accent">データ</span>で
            <br />
            伸びろ。
          </h1>
          <p className="text-text-sub text-lg md:text-xl max-w-xl leading-relaxed">
            余計な機能も、余計な提案も、いらない。
            <br />
            自分がいつもやる種目から、次の重量・セットを自動で出す。
            <br />
            シンプルに、確実に伸びたい中級者のために作った。
          </p>
          <div className="flex flex-col items-center gap-3">
            <CTAButton className="w-full sm:w-auto text-lg px-10 py-5" />
            <p className="text-text-sub text-sm">
              30日間無料・クレジットカード不要
            </p>
          </div>

          {/* スワイプ可能なスクリーンショットカルーセル */}
          <div className="w-full overflow-x-auto scrollbar-hide">
            <div
              className="flex gap-4 px-6"
              style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
            >
              {mockups.map((mockup) => (
                <div
                  key={mockup.src}
                  className="flex-none w-56 md:w-64 rounded-3xl overflow-hidden border border-border-default shadow-2xl shadow-black"
                  style={{ scrollSnapAlign: "center" }}
                >
                  <Image
                    src={mockup.src}
                    alt={mockup.alt}
                    width={390}
                    height={844}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
