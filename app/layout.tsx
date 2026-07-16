import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auxlog - 自己流は、もう卒業だ。9週間、もう組まれている。",
  description:
    "コーチに高い金を払って設計してもらうプログラムが、最初から用意されている。研究に基づいた9週間プログラム（ボリューム→強度→ディロード→マックスアウト）があなたに合わせて組まれている。あなたは記録するだけ。30日間無料・クレジットカード不要。",
  openGraph: {
    title: "Auxlog - 自己流は、もう卒業だ。9週間、もう組まれている。",
    description:
      "コーチに高い金を払って設計してもらうプログラムが、最初から用意されている。研究に基づいた9週間プログラム（ボリューム→強度→ディロード→マックスアウト）があなたに合わせて組まれている。あなたは記録するだけ。30日間無料・クレジットカード不要。",
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
