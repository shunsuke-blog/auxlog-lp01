"use client";

import { useEffect, useState } from "react";

// 「作る、直す、見守る。」の左の目次。いま画面の中ほどにある画面（#make など）の項目を強調して、読んでいる説明がどれか分かるようにする。
// スクリプトが無くても、ただのページ内リンクの一覧として使える。

export default function StackIndex({ steps }: { steps: { id: string; verb: string }[] }) {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    const items = steps.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => !!el);
    // 画面の縦の真ん中あたり（上下40%を除いた帯）に入った項目を「いま読んでいる」とみなす
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [steps]);

  return (
    <ol className="stack__index">
      {steps.map((s) => (
        <li key={s.id} aria-current={active === s.id ? "true" : undefined}>
          <a className="link" href={`#${s.id}`}>{s.verb}</a>
        </li>
      ))}
    </ol>
  );
}
