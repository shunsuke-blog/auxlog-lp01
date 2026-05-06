"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "wb_dismissed";
const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7日

function getSavedDismissal(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const { t } = JSON.parse(raw) as { t: number };
    return Date.now() - t < EXPIRY_MS;
  } catch {
    return false;
  }
}

function saveDismissal() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ t: Date.now() }));
  } catch {}
}

function detectEnv(): { webview: boolean; ios: boolean } {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/i.test(ua);
  const isAndroid = /Android/i.test(ua);

  if (isAndroid) {
    return { webview: /twitterAndroid|\bwv\b/i.test(ua), ios: false };
  }

  if (isIOS) {
    const isChromeIOS = /CriOS/i.test(ua);
    const isFirefoxIOS = /FxiOS/i.test(ua);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isRealSafari = typeof (window as any).safari !== "undefined";
    return { webview: !isRealSafari && !isChromeIOS && !isFirefoxIOS, ios: true };
  }

  return { webview: false, ios: false };
}

export default function WebViewBanner() {
  const [env, setEnv] = useState<{ webview: boolean; ios: boolean } | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    setEnv(detectEnv());
    setDismissed(getSavedDismissal());
  }, []);

  const handleDismiss = () => {
    saveDismissal();
    setDismissed(true);
  };

  if (!env?.webview || dismissed) return null;

  if (env.ios) {
    return (
      <div className="w-full bg-[#1a1a1a] border-b border-[#333] px-4 py-3 text-sm">
        <div className="flex items-center gap-2">
          <p className="flex-1 text-center leading-snug">
            <span className="text-white/80">無料登録はブラウザから。</span>
            <span className="ml-1 text-[#E8FF00] font-semibold">右下のコンパス（⊙）</span>
            <span className="text-white/80">をタップしてください。</span>
          </p>
          <button
            onClick={handleDismiss}
            className="text-white/40 text-xl leading-none flex-shrink-0 px-1"
            aria-label="閉じる"
          >
            ×
          </button>
        </div>
      </div>
    );
  }

  const handleOpenChrome = () => {
    const { host, pathname, search } = location;
    location.href = `intent://${host}${pathname}${search}#Intent;scheme=https;package=com.android.chrome;end`;
  };

  return (
    <div className="w-full bg-[#1a1a1a] border-b border-[#333] px-4 py-3 flex items-center justify-between gap-3 text-sm">
      <span className="text-white/80">Xアプリ内では一部機能が使えません</span>
      <div className="flex items-center gap-2 flex-shrink-0">
        <button
          onClick={handleOpenChrome}
          className="bg-[#E8FF00] text-black font-bold px-4 py-1.5 rounded-full text-xs hover:bg-[#d4e800] transition-colors"
        >
          Chromeで開く
        </button>
        <button
          onClick={handleDismiss}
          className="text-white/40 text-xl leading-none"
          aria-label="閉じる"
        >
          ×
        </button>
      </div>
    </div>
  );
}
