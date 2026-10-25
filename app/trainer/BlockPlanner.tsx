"use client";

import { useId, useState } from "react";

// 「Auxlog で作成」の期分け（auxlog/lib/coaching/generate_template.ts の planWeeks と同じ考え方、2026-10-25 時点）。
// 週数を動かすと、ボリューム期・強度期・途中の回復週・最後のディロード・MaxOut がその場で組み直される。
// 本体のロジックを変えたら、ここも合わせる。

type Phase = "volume" | "intensity" | "deload" | "maxout";

const MAX_WEEKS = 16;
const MAX_CONSECUTIVE_HARD_WEEKS = 7;
const DEFAULT_WEEKS = 12;

const PHASE_LABEL: Record<Phase, string> = {
  volume: "ボリューム期",
  intensity: "強度期",
  deload: "ディロード",
  maxout: "MaxOut",
};

const PHASE_NOTE: Record<Phase, string> = {
  volume: "セット数で刺激を積み上げる",
  intensity: "重量を上げ、セット数を絞る",
  deload: "重量はそのまま、疲れを抜く",
  maxout: "限界まで挑んで実力を測る",
};

function planWeeks(totalWeeks: number): Phase[] {
  const hasMaxout = totalWeeks >= 4;
  const hasFinalDeload = totalWeeks >= 6;
  const beforeFinal = totalWeeks - Number(hasMaxout) - Number(hasFinalDeload);
  let midDeloads = 0;
  while (beforeFinal - midDeloads > MAX_CONSECUTIVE_HARD_WEEKS * (midDeloads + 1)) midDeloads++;
  const hardWeeks = beforeFinal - midDeloads;
  const runs = Array.from({ length: midDeloads + 1 }, (_, i) =>
    Math.floor(hardWeeks / (midDeloads + 1)) + (i < hardWeeks % (midDeloads + 1) ? 1 : 0),
  );
  let volumeWeeks = Math.max(1, Math.round((hardWeeks * 4) / 7));
  if (hardWeeks >= 2) volumeWeeks = Math.min(volumeWeeks, hardWeeks - 1);

  const plan: Phase[] = [];
  let hardIndex = 0;
  runs.forEach((len, runIdx) => {
    for (let i = 0; i < len; i++) plan.push(hardIndex++ < volumeWeeks ? "volume" : "intensity");
    if (runIdx < runs.length - 1) plan.push("deload");
  });
  if (hasFinalDeload) plan.push("deload");
  if (hasMaxout) plan.push("maxout");
  return plan;
}

// 同じ期が続く週をひとまとまりにする
function toBands(plan: Phase[]) {
  const bands: { phase: Phase; weeks: number[] }[] = [];
  plan.forEach((phase, i) => {
    const last = bands[bands.length - 1];
    if (last && last.phase === phase) last.weeks.push(i + 1);
    else bands.push({ phase, weeks: [i + 1] });
  });
  return bands;
}

export default function BlockPlanner() {
  const [weeks, setWeeks] = useState(DEFAULT_WEEKS);
  const id = useId();
  const plan = planWeeks(weeks);
  const bands = toBands(plan);

  return (
    <figure className="sheet planner" aria-label="週数に合わせた期分けの図">
      <div className="planner__control">
        <label htmlFor={id}>週数</label>
        <input
          id={id}
          type="range"
          min={1}
          max={MAX_WEEKS}
          value={weeks}
          onChange={(e) => setWeeks(Number(e.target.value))}
          aria-valuetext={`${weeks}週間`}
        />
        <output htmlFor={id} className="planner__value" aria-live="polite">{weeks}<span>週間</span></output>
      </div>
      <ol className="weeks" style={{ gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` }}>
        {bands.map((b) => (
          <li key={b.weeks[0]} className={`phase phase--${b.phase}`} style={{ gridColumn: `span ${b.weeks.length}` }}>
            <h3 className="phase__name">{PHASE_LABEL[b.phase]}</h3>
            <ol className="phase__weeks">
              {b.weeks.map((w) => (
                <li key={w} className="week"><span className="week__no">{w}</span><span className="visually-hidden">週目</span></li>
              ))}
            </ol>
            {b.phase === "maxout" && <p className="stamp" aria-hidden="true">1RM更新</p>}
          </li>
        ))}
      </ol>
      <dl className="legend">
        {(Object.keys(PHASE_LABEL) as Phase[]).filter((p) => plan.includes(p)).map((p) => (
          <div key={p}>
            <dt>{PHASE_LABEL[p]}</dt>
            <dd>{PHASE_NOTE[p]}</dd>
          </div>
        ))}
      </dl>
      <figcaption>1RMはエプリーの式で記録から推定します。トレーナーが1RMを入れていない種目も、初回の記録から重量を自動で計算します。</figcaption>
    </figure>
  );
}
