"use client";

import { useEffect, useState } from "react";

function detectEnv(): { webview: boolean; ios: boolean } {
  const ua = navigator.userAgent;
  const webview = /Twitter\/|Twitter for iPhone|twitterAndroid/i.test(ua);
  const ios = /iPhone|iPad|iPod/i.test(ua);
  return { webview, ios };
}

export default function WebViewBanner() {
  const [env, setEnv] = useState<{ webview: boolean; ios: boolean } | null>(null);

  useEffect(() => {
    setEnv(detectEnv());
  }, []);

  if (!env?.webview) return null;

  if (env.ios) {
    return (
      <div className="w-full bg-[#1a1a1a] border-b border-[#333] px-4 py-3 text-sm text-center">
        <span className="text-white/80">Xアプリ内ではログインできません。</span>
        <span className="ml-1 text-[#E8FF00] font-semibold">
          右下の共有ボタン →「Safariで開く」
        </span>
        <span className="text-white/80">をタップしてください。</span>
      </div>
    );
  }

  const handleOpenChrome = () => {
    const { host, pathname, search } = location;
    location.href = `intent://${host}${pathname}${search}#Intent;scheme=https;package=com.android.chrome;end`;
  };

  return (
    <div className="w-full bg-[#1a1a1a] border-b border-[#333] px-4 py-3 flex items-center justify-center gap-3 text-sm">
      <span className="text-white/80">Xアプリ内では一部機能が使えません</span>
      <button
        onClick={handleOpenChrome}
        className="bg-[#E8FF00] text-black font-bold px-4 py-1.5 rounded-full text-xs hover:bg-[#d4e800] transition-colors"
      >
        Chromeで開く
      </button>
    </div>
  );
}
