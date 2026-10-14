import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Shield, Target, Flame, Dumbbell, Award, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "The Doctrine & Sanctum",
  description:
    "Discover the foundational philosophy of CORPS. Built upon progressive overload, human adaptation, and zero compromises.",
};

export default function AboutPage() {
  const values = [
    {
      title: "ZERO VANITY, MAXIMUM DENSITY",
      desc: "We do not train for superficial social media validation. We train for structural cross-sectional muscle volume, tendon durability, and raw neural output.",
    },
    {
      title: "OBJECTIVE BIOFEEDBACK",
      desc: "Every bar speed, rep-in-reserve (RIR), and volume threshold is measured. Guesswork is eliminated through scientific biomechanical analysis.",
    },
    {
      title: "THE BROTHERHOOD OF THE IRON",
      desc: "You are not an isolated subscriber here; you are part of a disciplined cadre. We spot each other, demand high standards, and elevate the floor.",
    },
    {
      title: "RECOVERY AS A DISCIPLINE",
      desc: "Training triggers the adaptive signal, but tissue remodeling occurs in deep parasympathetic recovery. Our thermal suite is non-negotiable.",
    },
  ];

  return (
    <div className="bg-[#080808] text-white pt-12 pb-24">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3.5 py-1.5 mb-6 text-xs font-mono font-bold tracking-widest uppercase text-brand-red">
          <Shield className="w-3.5 h-3.5 text-brand-red" />
          <span>FOUNDATIONAL ETHOS & SYSTEM</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
          THE CORPS <span className="text-gradient-fire">DOCTRINE.</span>
        </h1>
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Established in 2011 in Sector 7, CORPS was founded to abolish the commercial fitness trend of comfortable mediocrity. We engineered an athletic sanctum where human potential is extracted through deliberate stress and systematic recovery.
        </p>
      </div>

      {/* Feature Image Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative h-[380px] sm:h-[480px] w-full border border-zinc-800 overflow-hidden bg-zinc-950">
          <Image
            src="/images/hero-clean-hd.jpg"
            alt="CORPS athletic sanctum facility overview"
            fill
            sizes="100vw"
            className="object-cover object-center filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-brand-orange">SECTOR 07 FACILITY</span>
              <p className="font-display text-2xl uppercase text-white">THE RECKONING GROUND</p>
            </div>
            <span className="text-xs font-mono uppercase bg-black/80 px-3 py-1.5 border border-zinc-700 text-zinc-300">
              18,000 SQ FT PURE IRON
            </span>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          tag="CORE PRINCIPLES"
          title="UNBENDING"
          titleHighlight="STANDARDS."
          description="Every policy, rack placement, and barbell selection inside the facility follows these four operational mandates."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, idx) => (
            <div
              key={idx}
              className="bg-[#121212] border border-[#222222] p-8 hover:border-brand-red transition-colors"
            >
              <span className="font-mono text-xs font-bold text-brand-red block mb-2">
                PRINCIPLE 0{idx + 1}
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-3">
                {val.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Facility Specs / Hardware Breakdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="bg-[#111111] border border-zinc-800 p-8 sm:p-12">
          <SectionHeading
            tag="ARSENAL BLUEPRINT"
            title="HARDWARE"
            titleHighlight="CALIBRATION."
            description="We refuse to cut corners on the steel that contacts your hands. Here is a breakdown of the sanctum's hardware standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="border-t-2 border-brand-red pt-4">
              <h4 className="font-display text-xl uppercase text-white mb-2">FREE WEIGHT ARCHITECTURE</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Eleiko Swedish steel bars, 10,000+ kg of calibrated competition bumper plates, Rogue custom dumbbell battery reaching up to 150 lbs in 5 lb increments.
              </p>
            </div>

            <div className="border-t-2 border-brand-orange pt-4">
              <h4 className="font-display text-xl uppercase text-white mb-2">SELECTORIZED BIOMECHANICS</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Arsenal Strength leverage pieces, Atlantis pendulum squats, customized low-inertia cable stacks with custom pulleys engineered for convergent resistance curves.
              </p>
            </div>

            <div className="border-t-2 border-zinc-500 pt-4">
              <h4 className="font-display text-xl uppercase text-white mb-2">CRYOTHERMIC CONTRAST</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dual commercial 4°C water-chilled plunge vats with continuous micro-filtration alongside two dry cedar Finnish saunas radiating at 85°C.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Enlist */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-4xl sm:text-6xl uppercase tracking-tight text-white mb-6">
          READY TO ADOPT THE DOCTRINE?
        </h2>
        <p className="text-zinc-400 text-base mb-8 max-w-xl mx-auto">
          Review our membership tiers or schedule a one-on-one consultation with our Command Cadre.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/membership" className="btn-primary text-lg px-8 py-3.5">
            VIEW ENLISTMENT TIERS
          </Link>
          <Link href="/contact" className="btn-secondary text-lg px-8 py-3.5">
            BOOK A RECON CONSULTATION
          </Link>
        </div>
      </div>
    </div>
  );
}
