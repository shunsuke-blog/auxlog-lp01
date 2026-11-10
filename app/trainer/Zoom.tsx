"use client";

import { useRef, useState } from "react";

// 画面のキャプチャを大きく見せる。枠の右下に「画面を拡大」を置き、押すと全画面のダイアログで原寸に近い大きさで開く。
// width は拡大したときの表示幅（CSSのpx）。キャプチャは2倍・3倍で撮っているので、元の画素数をその倍率で割った値にする。
// 画面の1.5倍までの幅なら画面に収め、それより広いもの（スマホで見るダッシュボードなど）は原寸のまま縦横にスクロールさせる（そのことを上のバーに書く）。画像は開いたときに初めて読み込む。
// 画像枠（data-slot）は img 以外の子を隠すので、ボタンとダイアログには data-keep を付けて残す。

export default function Zoom({ src, alt, width }: { src: string; alt: string; width: number }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(width);
  const [wide, setWide] = useState(false);

  const show = () => {
    const room = window.innerWidth - 32; // ダイアログの左右の余白（--space-md × 2）を除いた幅
    const fit = width <= room * 1.5;
    setShown(fit ? Math.min(width, room) : width);
    setWide(!fit);
    setOpen(true);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();

  return (
    <>
      <button type="button" className="zoom__open" data-keep onClick={show}>画面を拡大</button>
      <dialog
        ref={dialog}
        data-keep
        className="zoom"
        aria-label={alt}
        onClose={() => setOpen(false)}
        // 画像の外（余白）を押したら閉じる
        onClick={(e) => { if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("zoom__body")) close(); }}
      >
        <div className="zoom__bar">
          {wide && <p className="zoom__hint">左右にスクロールして見られます</p>}
          <button type="button" className="btn btn--card zoom__close" onClick={close}>閉じる</button>
        </div>
        <div className="zoom__body">
          {/* eslint-disable-next-line @next/next/no-img-element -- 原寸で見せるので最適化しない素のimgにする */}
          {open && <img src={src} alt={alt} width={shown} style={{ width: shown }} />}
        </div>
      </dialog>
    </>
  );
}
