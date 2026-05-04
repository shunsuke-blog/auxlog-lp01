import Link from "next/link";

type Props = {
  text?: string;
  className?: string;
};

export default function CTAButton({
  text = "30日間無料で始める",
  className = "",
}: Props) {
  return (
    <Link
      href="https://auxlog.app/login"
      className={`inline-flex items-center gap-2 bg-[#E8FF00] text-black font-bold text-base px-8 py-4 rounded-full hover:bg-[#d4e800] transition-colors duration-200 ${className}`}
    >
      {text}
      <span>→</span>
    </Link>
  );
}
