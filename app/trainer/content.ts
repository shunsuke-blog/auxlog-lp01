// トレーナー向けLPの文章のうち、サーバー（page.tsx で文節分割）とクライアント部品の両方が使うもの。
// "use client" のファイルから書き出した値はサーバー側では参照用のオブジェクトになって中身を読めないので、ここに置く。

export type Phase = "volume" | "intensity" | "deload" | "maxout";

export const PHASE_NOTE: Record<Phase, string> = {
  volume: "セット数で刺激を積み上げる",
  intensity: "重量を上げ、セット数を絞る",
  deload: "重量はそのまま、疲れを抜く",
  maxout: "限界まで挑んで実力を測る",
};

export const SCREENS = [
  { src: "/trainer/client-home.png", caption: "今日のメニュー。重量と回数はプランのまま。", alt: "クライアントのホーム画面。佐藤翔太さんのプラン、今週の目的、Day 3の種目と重量" },
  { src: "/trainer/client-record.png", caption: "セットごとに記録。消耗度とメモも、トレーナーへ。", alt: "記録画面。レッグプレスの5セットの重量と回数、消耗度、メモ" },
  { src: "/trainer/client-done.png", caption: "記録が終わった日はコンプリート。進み具合はダッシュボードへ。", alt: "Day 2がコンプリートになったホーム画面。記録済みの種目が並ぶ" },
  { src: "/trainer/client-plan.png", caption: "いま何週目のどの期か。今週の目的も一緒に。", alt: "プログラム画面。Week 6 / 9、強度期、週ごとの期の流れ、今週の目的" },
  { src: "/trainer/client-exercises.png", caption: "種目やセットを変えたい時は、トレーナーに相談する設計です。", alt: "種目情報の画面。種目やセットはトレーナーが決めます、変更したい時は佐藤翔太さんに相談してください、という案内とDayごとの種目と1RM" },
  { src: "/trainer/client-history.png", caption: "履歴とグラフで、伸びを本人も確かめられます。", alt: "履歴画面。カレンダーとローバースクワットの総挙上量のグラフ" },
];
