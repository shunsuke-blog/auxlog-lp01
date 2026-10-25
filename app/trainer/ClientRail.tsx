"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// クライアント側（Web版をスマホ幅で撮影）の画面を横に並べるレール。自動では動かさない。
// スワイプ・ホイール・矢印キーで動く。下のドットは「止まれる位置」の数だけ出し、押すとその位置へ送る。

const SCREENS = [
  { src: "/trainer/client-home.png", caption: "今日のメニュー。重量と回数はプランから入っています。", alt: "クライアントのホーム画面。佐藤翔太さんのプラン、今週の目的、Day 3の種目と重量" },
  { src: "/trainer/client-record.png", caption: "セットごとに記録。消耗度とメモはトレーナーにも届きます。", alt: "記録画面。レッグプレスの5セットの重量と回数、消耗度、メモ" },
  { src: "/trainer/client-done.png", caption: "記録が終わった日はコンプリート。進み具合はダッシュボードへ。", alt: "Day 2がコンプリートになったホーム画面。記録済みの種目が並ぶ" },
  { src: "/trainer/client-plan.png", caption: "いま何週目のどの期か。今週の目的も一緒に。", alt: "プログラム画面。Week 6 / 9、強度期、週ごとの期の流れ、今週の目的" },
  { src: "/trainer/client-exercises.png", caption: "種目やセットを変えたい時は、トレーナーに相談する設計です。", alt: "種目情報の画面。種目やセットはトレーナーが決めます、変更したい時は佐藤翔太さんに相談してください、という案内とDayごとの種目と1RM" },
  { src: "/trainer/client-history.png", caption: "履歴とグラフで、伸びを本人も確かめられます。", alt: "履歴画面。カレンダーとローバースクワットの総挙上量のグラフ" },
];

export default function ClientRail() {
  const rail = useRef<HTMLUListElement>(null);
  const [stops, setStops] = useState(SCREENS.length);
  const [active, setActive] = useState(0);

  // 1枚ぶんの送り幅（画面の幅 + 間隔）
  const stepWidth = useCallback(() => {
    const el = rail.current;
    const item = el?.querySelector("li");
    if (!el || !item) return 0;
    return item.getBoundingClientRect().width + (parseFloat(getComputedStyle(el).columnGap) || 0);
  }, []);

  const measure = useCallback(() => {
    const el = rail.current;
    const step = stepWidth();
    if (!el || !step) return;
    const max = el.scrollWidth - el.clientWidth;
    const count = Math.max(1, Math.ceil(max / step - 0.05) + 1);
    setStops(count);
    // 端まで来たら最後のドット（最後の位置は送り幅の倍数にならないことがある）
    setActive(el.scrollLeft >= max - 2 ? count - 1 : Math.min(count - 1, Math.round(el.scrollLeft / step)));
  }, [stepWidth]);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const frame = requestAnimationFrame(measure);
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goTo = (i: number) => {
    const el = rail.current;
    if (!el) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: i * stepWidth(), behavior: smooth ? "smooth" : "auto" });
  };

  return (
    <div className="rail-wrap">
      <ul className="rail" ref={rail} tabIndex={0} aria-label="クライアント側の画面">
        {SCREENS.map((s) => (
          <li key={s.src} className="rail__item">
            <figure className="shot">
              <div className="shot__frame rail__frame" data-slot={s.src.split("/").pop()?.replace(".png", "")} data-kind="product" data-alt={s.alt}>
                <Image src={s.src} alt={s.alt} fill sizes="280px" unoptimized />
              </div>
              <figcaption>{s.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      {stops > 1 && (
        <div className="dots" role="group" aria-label="表示する位置">
          {Array.from({ length: stops }, (_, i) => (
            <button
              key={i}
              type="button"
              className="dots__dot"
              aria-label={`${i + 1}番目の位置へ`}
              aria-current={active === i ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
