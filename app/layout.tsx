import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // 相対URL（canonical など）の基準。www.auxlog.com からも auxlog.com に転送しているので、正規の住所はこちら
  metadataBase: new URL("https://auxlog.com"),
  // サイト全体の既定値。トップはトレーナー向けLP（app/page.tsx で上書き）。
  title: "Auxlog for トレーナー",
  description:
    "エクセルへの入力とLINEでの共有にかかる時間を減らす、パーソナルトレーナーのためのツール。",
  openGraph: {
    title: "Auxlog for トレーナー",
    description:
      "エクセルへの入力とLINEでの共有にかかる時間を減らす、パーソナルトレーナーのためのツール。",
    url: "https://auxlog.com",
    siteName: "Auxlog",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={inter.className}>
      <body className="bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
      <GoogleAnalytics gaId="G-FNB671P8RT" />
    </html>
  );
}
