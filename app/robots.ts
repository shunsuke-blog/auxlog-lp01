import type { MetadataRoute } from "next";

// 検索エンジンにサイトマップの場所を知らせる（トレーナー向けLP /trainer を見つけてもらうため）
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://auxlog.com/sitemap.xml",
  };
}
