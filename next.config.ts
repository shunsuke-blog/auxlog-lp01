import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // トレーナー向けLPは /trainer からトップ（/）へ移した。前のURLへのリンクや検索結果から来た人をトップへ送る
  async redirects() {
    return [{ source: "/trainer", destination: "/", permanent: true }];
  },
};

export default nextConfig;
