import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import WebViewBanner from "@/components/WebViewBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auxlog - 今日のトレーニングを、30秒で決める。",
  description:
    "筋トレ中級者・上級者向けの科学的アルゴリズムによる自動メニュー提案アプリ。RIR管理・週ボリューム最適化・回復インターバル計算で確実に成長。30日間無料。",
  openGraph: {
    title: "Auxlog - 今日のトレーニングを、30秒で決める。",
    description:
      "筋トレ中級者・上級者向けの科学的アルゴリズムによる自動メニュー提案アプリ。RIR管理・週ボリューム最適化・回復インターバル計算で確実に成長。30日間無料。",
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
        <WebViewBanner />
        {children}
      </body>
      <GoogleAnalytics gaId="G-FNB671P8RT" />
    </html>
  );
}
