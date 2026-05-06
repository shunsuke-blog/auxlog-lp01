import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Auxlog - 今日のトレーニングを、30秒で決める。",
    short_name: "Auxlog",
    description:
      "筋トレ中級者・上級者向けの科学的アルゴリズムによる自動メニュー提案アプリ",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
