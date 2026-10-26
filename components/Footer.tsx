import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-default py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-white font-black text-xl">Auxlog</span>
          <div className="flex gap-8 text-text-sub text-sm">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              利用規約
            </Link>
            {/* 特商法の表記はトレーナー向けのデザインなので、フル遷移にしてそのCSSをこのページに持ち込まない */}
            <a
              href="/tokushoho"
              className="hover:text-white transition-colors"
            >
              特定商取引法
            </a>
            <Link href="/support" className="hover:text-white transition-colors">
              サポート
            </Link>
          </div>
          <p className="text-text-sub text-sm">
            © 2026 Auxlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
