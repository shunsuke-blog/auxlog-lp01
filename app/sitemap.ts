import type { MetadataRoute } from "next";

// auxlog.com のページ一覧。Dusk（/dusk）は別アプリのページなので載せない
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://auxlog.com", changeFrequency: "weekly", priority: 1 },
    { url: "https://auxlog.com/tokushoho", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://auxlog.com/terms", changeFrequency: "yearly", priority: 0.3 },
    { url: "https://auxlog.com/privacy", changeFrequency: "yearly", priority: 0.3 },
  ];
}
