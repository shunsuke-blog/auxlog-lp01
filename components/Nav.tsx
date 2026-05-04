import Link from "next/link";
import CTAButton from "./CTAButton";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-[#222222]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-black text-xl tracking-tight">
          Auxlog
        </Link>
        <CTAButton text="無料で始める" className="text-sm px-6 py-3" />
      </div>
    </nav>
  );
}
