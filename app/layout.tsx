import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auxlog - 今日のトレーニングを、30秒で決める。",
  description:
    "筋トレ中級者・上級者向けの自動メニュー提案アプリ。前回の記録から今日やるべき重量・セット数を自動計算。30日間無料で試せる。",
  openGraph: {
    title: "Auxlog - 今日のトレーニングを、30秒で決める。",
    description:
      "筋トレ中級者・上級者向けの自動メニュー提案アプリ。前回の記録から今日やるべき重量・セット数を自動計算。30日間無料で試せる。",
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
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  );
}
