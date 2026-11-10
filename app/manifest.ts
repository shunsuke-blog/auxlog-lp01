import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Auxlog for トレーナー",
    short_name: "Auxlog",
    description:
      "エクセルへの入力とLINEでの共有にかかる時間を減らす、パーソナルトレーナーのためのツール",
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
