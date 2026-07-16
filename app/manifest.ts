import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Auxlog - 自己流は、もう卒業だ。9週間後、生まれ変わる。",
    short_name: "Auxlog",
    description:
      "研究に基づいた9週間プログラムがあなたに合わせて最初から組まれている、筋トレ中級者・上級者向けアプリ",
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
