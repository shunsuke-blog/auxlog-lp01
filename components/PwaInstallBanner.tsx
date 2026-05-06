"use client";

import { useEffect, useState } from "react";

const DISMISSED_KEY = "pwa_banner_dismissed";

function isStandalone(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in navigator && (navigator as { standalone?: boolean }).standalone === true)
  );
}

function isIOS(): boolean {
  return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isAndroid(): boolean {
  return /Android/i.test(navigator.userAgent);
}

function isWebView(): boolean {
  const ua = navigator.userAgent;
  if (isAndroid()) return /\bwv\b|twitterAndroid/i.test(ua);
  if (isIOS()) {
    const isChromeIOS = /CriOS/i.test(ua);
    const isFirefoxIOS = /FxiOS/i.test(ua);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isRealSafari = typeof (window as any).safari !== "undefined";
    return !isRealSafari && !isChromeIOS && !isFirefoxIOS;
  }
  return false;
}

type DeferredPrompt = {
  prompt: () => void;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export default function PwaInstallBanner() {
  const [show, setShow] = useState(false);
  const [platform, setPlatform] = useState<"ios" | "android" | null>(null);
  const [deferredPrompt, setDeferredPrompt] = useState<DeferredPrompt | null>(null);

  useEffect(() => {
    // 既に非表示にした場合はスキップ
    if (sessionStorage.getItem(DISMISSED_KEY)) return;
    // WebView・スタンドアロン・デスクトップはスキップ
    if (isWebView() || isStandalone()) return;

    const ios = isIOS();
    const android = isAndroid();
    if (!ios && !android) return;

    if (android) {
      // Android: beforeinstallprompt を待つ
      const handler = (e: Event) => {
        e.preventDefault();
        setDeferredPrompt(e as unknown as DeferredPrompt);
        setPlatform("android");
        setTimeout(() => setShow(true), 8000);
      };
      window.addEventListener("beforeinstallprompt", handler);
      return () => window.removeEventListener("beforeinstallprompt", handler);
    }

    if (ios) {
      // iOS Safari: 8秒後に手順案内を表示
      setPlatform("ios");
      const timer = setTimeout(() => setShow(true), 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem(DISMISSED_KEY, "1");
    setShow(false);
  };

  const handleInstallAndroid = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShow(false);
    }
  };

  if (!show) return null;

  if (platform === "ios") {
    return (
      <div className="w-full bg-[#1a1a1a] border-b border-[#333] px-4 py-3 text-sm">
        <div className="flex items-start justify-between gap-3">
          <p className="text-white/80 leading-snug">
            <span className="text-[#E8FF00] font-semibold">ホーム画面に追加</span>
            すると次回からすぐ開けます。画面下の
            <span className="text-white font-medium">「共有」→「ホーム画面に追加」</span>
            をタップ。
          </p>
          <button
            onClick={handleDismiss}
            className="text-white/40 text-lg leading-none flex-shrink-0 mt-0.5"
            aria-label="閉じる"
          >
            ×
          </button>
        </div>
      </div>
    );
  }

  if (platform === "android") {
    return (
      <div className="w-full bg-[#1a1a1a] border-b border-[#333] px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-white/80 text-sm">
            ホーム画面に追加して、すぐアクセス
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleInstallAndroid}
              className="bg-[#E8FF00] text-black font-bold px-4 py-1.5 rounded-full text-xs hover:bg-[#d4e800] transition-colors"
            >
              追加する
            </button>
            <button
              onClick={handleDismiss}
              className="text-white/40 text-lg leading-none"
              aria-label="閉じる"
            >
              ×
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
