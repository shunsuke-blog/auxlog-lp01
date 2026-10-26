import localFont from "next/font/local";
import { IBM_Plex_Sans_JP } from "next/font/google";

// トレーナー向けのページ（/trainer と特定商取引法の表記）で共通に使う書体。
// クラス名（variable）を .tr の要素に付けると、trainer.css の --font-display から参照される。

export const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500" },
    { path: "./fonts/GeneralSans-Semibold.woff2", weight: "600" },
  ],
  variable: "--font-gs",
  display: "swap",
});

export const plexJp = IBM_Plex_Sans_JP({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-jp",
  display: "swap",
  preload: false,
});

export const trainerFontClass = `${generalSans.variable} ${plexJp.variable}`;
