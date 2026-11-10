"use client";

import { useRef, useState } from "react";

// 画面のキャプチャを大きく見せる。枠の右下に「画面を拡大」を置き、押すと全画面のダイアログで原寸に近い大きさで開く。
// 閉じるボタン「画面を縮小」は、「画面を拡大」と同じ見た目・同じ位置（拡大した画像の右下）に置く。
// 画像が画面より大きいときは、見えている範囲の右下についてくる（sticky）。
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
    // 開いた直後にボタンへフォーカスの枠が出ないよう、ダイアログ自体にフォーカスを置く（Tab で縮小ボタンへ移れる）
    dialog.current?.focus();
  };
  const close = () => dialog.current?.close();

  return (
    <>
      <button type="button" className="zoom__open" data-keep onClick={show}>画面を拡大</button>
      <dialog
        ref={dialog}
        data-keep
        tabIndex={-1}
        className="zoom"
        aria-label={alt}
        onClose={() => setOpen(false)}
        // 画像の外（余白）を押したら閉じる
        onClick={(e) => { if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("zoom__body")) close(); }}
      >
        <div className="zoom__body">
          {wide && <p className="zoom__hint">左右にスクロールして見られます</p>}
          <div className="zoom__frame">
            {/* eslint-disable-next-line @next/next/no-img-element -- 原寸で見せるので最適化しない素のimgにする */}
            {open && <img src={src} alt={alt} width={shown} style={{ width: shown }} />}
            <button type="button" className="zoom__open zoom__close" onClick={close}>画面を縮小</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
