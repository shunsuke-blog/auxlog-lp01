"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { SCREENS } from "./content";

// クライアント側（Web版をスマホ幅で撮影）の画面を横に並べるレール。自動では動かさない。
// スワイプ・ホイール・矢印キーで動く。下のドットは「止まれる位置」の数だけ出し、押すとその位置へ送る。

// captions は page.tsx で文節分割した説明（SCREENS と同じ順）
export default function ClientRail({ captions }: { captions: ReactNode[] }) {
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
        {SCREENS.map((s, i) => (
          <li key={s.src} className="rail__item">
            <figure className="shot">
              <div className="shot__frame rail__frame" data-slot={s.src.split("/").pop()?.replace(".png", "")} data-kind="product" data-alt={s.alt}>
                <Image src={s.src} alt={s.alt} fill sizes="280px" unoptimized />
              </div>
              <figcaption>{captions[i] ?? s.caption}</figcaption>
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
