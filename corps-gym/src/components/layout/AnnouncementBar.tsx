import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

export function AnnouncementBar() {
  return (
    <aside aria-label="Special promotion" className="w-full bg-gradient-to-r from-[#8B0E0E] via-[#D32F2F] to-[#8B0E0E] text-white py-2 px-4 text-xs font-semibold tracking-wider uppercase border-b border-red-500/30 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center flex-wrap">
        <span className="inline-flex items-center gap-1.5 font-bold">
          <Flame className="w-4 h-4 text-amber-300 animate-pulse fill-amber-300" />
          <span>GRAND OPENING OFFER — 30% OFF ALL MEMBERSHIPS.</span>
        </span>
        <span className="hidden sm:inline text-white/60">|</span>
        <span className="text-white/90 hidden md:inline">LIMITED SPOTS AVAILABLE</span>
        <Link
          href="/membership"
          className="inline-flex items-center gap-1 text-white underline hover:text-amber-200 transition-colors font-bold ml-1 group"
        >
          <span>JOIN US TODAY!</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </aside>
  );
}
