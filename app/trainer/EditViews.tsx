"use client";

import Image from "next/image";
import { useId, useState } from "react";

// 編集画面の「Dayごと／種目ごと」をアプリと同じく切り替えて見せる。スクリプトが無くても最初の表示（Dayごと）は出る。

const VIEWS = [
  {
    key: "day",
    label: "Dayごと",
    src: "/trainer/editor-day.png",
    alt: "プログラム編集画面のDayごと表示。Week 1 Day 1のローバースクワットとバーベルベンチプレスのセット・%1RM・回数・RIRが並び、右に種目ライブラリがある",
  },
  {
    key: "exercise",
    label: "種目ごと",
    src: "/trainer/editor-ex.png",
    alt: "プログラム編集画面の種目ごと表示。ローバースクワットのWeek 1とWeek 2のセット・%1RM・回数・RIRが縦に並ぶ",
  },
] as const;

export default function EditViews() {
  const [active, setActive] = useState(0);
  const id = useId();

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : VIEWS.length - 1)) % VIEWS.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div className="views">
      <div className="groove" role="tablist" aria-label="編集画面の表示">
        {VIEWS.map((v, i) => (
          <button
            key={v.key}
            id={`${id}-tab-${i}`}
            type="button"
            role="tab"
            className="groove__tab"
            aria-selected={active === i}
            aria-controls={`${id}-panel-${i}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={onKeyDown}
          >
            {v.label}
          </button>
        ))}
      </div>
      {VIEWS.map((v, i) => (
        <div
          key={v.key}
          id={`${id}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${i}`}
          hidden={active !== i}
          className="shot__frame"
          data-slot={`edit-${v.key}`}
          data-kind="product"
          data-alt={v.alt}
          style={{ aspectRatio: "2753 / 1797" }}
        >
          <Image src={v.src} alt={v.alt} fill sizes="(min-width: 60rem) 56vw, 100vw" unoptimized />
        </div>
      ))}
    </div>
  );
}
