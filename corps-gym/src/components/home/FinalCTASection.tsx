import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#7a0d0d] via-[#a31414] to-[#080808] border-t border-red-600/40 text-white">
      {/* Background glow & noise */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500/20 via-transparent to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-black/40 border border-white/20 px-3.5 py-1 mb-6 text-xs font-mono font-bold tracking-widest uppercase text-white backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse fill-amber-300" />
          <span>LIMITED SANCTUM CAPACITY • 30% GRAND OPENING PROMOTION</span>
        </div>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none font-extrabold">
          STOP WAITING.
          <br />
          <span>START BUILDING.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
          The iron does not negotiate. Join 120K+ recruits who discarded excuses and chose absolute biological adaptation. Enlist now and secure your introductory tier discount.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/membership" className="btn-white text-lg py-4 px-8 w-full sm:w-auto text-center justify-center">
            <span>CLAIM 30% OFF MEMBERSHIP</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </Link>
          <Link href="/contact" className="btn-secondary text-lg py-3.5 px-8 w-full sm:w-auto text-center justify-center border-white/60 text-white">
            <span>CONTACT COMMAND CADRE</span>
          </Link>
        </div>

        <p className="mt-8 text-xs font-mono text-zinc-300 uppercase tracking-widest">
          NO CONTRACTS • INSTANT BIOMETRIC CREDENTIALS • 14-DAY GUARANTEE
        </p>
      </div>
    </section>
  );
}
