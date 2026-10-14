import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Star, Users, Flame } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#080808] overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-clean-hd.jpg"
          alt="CORPS elite athletes training under dramatic red lighting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[68%_center] brightness-105 contrast-105"
        />
        {/* Atmospheric gradients calibrated so the left text is sharp while the athletes and gym lighting are clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/75 md:via-[#080808]/45 lg:via-[#080808]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3.5 py-1.5 mb-6 text-xs font-mono font-bold tracking-widest uppercase text-brand-red backdrop-blur-md">
            <Flame className="w-3.5 h-3.5 text-brand-red animate-pulse" />
            <span>ELITE COMBAT & HYPERTROPHY SANCTUM • SECTOR 07</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.9] font-extrabold">
            BUILT LIKE A UNIT.
            <br />
            <span className="text-gradient-fire">TRAINED LIKE A CORPS.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-300 font-sans max-w-2xl leading-relaxed">
            A zero-compromise iron sanctum engineered for high-output athletes, competitive bodybuilders, and tactical lifters. Built on progressive overload, kinematic biomechanics, and relentless discipline.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/membership" className="btn-primary text-center justify-center text-lg sm:text-xl py-4 px-8">
              <span>COMMENCE ENLISTMENT</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/programs" className="btn-secondary text-center justify-center text-lg sm:text-xl py-3.5 px-8">
              <span>EXPLORE PROTOCOLS</span>
            </Link>
          </div>

          {/* Member social proof */}
          <div className="mt-12 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-[10px] font-bold font-mono text-brand-red">
                  MV
                </div>
                <div className="w-9 h-9 rounded-full bg-zinc-700 border-2 border-black flex items-center justify-center text-[10px] font-bold font-mono text-brand-orange">
                  ER
                </div>
                <div className="w-9 h-9 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-[10px] font-bold font-mono text-white">
                  DC
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-mono font-bold text-white ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">
                  VERIFIED CADRE REVIEW SCORE
                </p>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-zinc-800" />

            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900/80 border border-zinc-800 text-brand-red">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="font-display text-2xl text-white tracking-wide leading-none">
                  120K+
                </p>
                <p className="text-[11px] font-mono uppercase text-zinc-400 tracking-wider">
                  ACTIVE GLOBAL RECRUITS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Quote Card bottom-right on desktop */}
        <div className="hidden xl:block absolute bottom-12 right-8 max-w-sm bg-black/85 backdrop-blur-md border border-brand-red/40 p-5 clip-corner-br">
          <div className="flex items-center gap-2 text-brand-red font-mono text-xs uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4" />
            <span>CADRE DIRECTIVE 01</span>
          </div>
          <p className="text-sm font-sans italic text-zinc-200 leading-snug">
            "Pain is inevitable. Biological adaptation is compulsory. There are no shortcuts in this sanctuary."
          </p>
          <p className="mt-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-right">
            — COMMAND PROTOCOL
          </p>
        </div>
      </div>
    </section>
  );
}
