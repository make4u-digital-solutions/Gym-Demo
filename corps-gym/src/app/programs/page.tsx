import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Shield, Check, ArrowRight, Award, Flame } from "lucide-react";
import { programs } from "@/data/programs";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Training Protocols",
  description:
    "Explore CORPS engineered training tracks: Heavy Hypertrophy, Tactical Powerlifting, Metabolic Warfare, and 1-on-1 Cadre Coaching.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-[#080808] text-white pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3.5 py-1.5 mb-6 text-xs font-mono font-bold tracking-widest uppercase text-brand-red">
          <Flame className="w-3.5 h-3.5 text-brand-red" />
          <span>SCIENTIFIC TRAINING DIRECTIVES</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
          TRAINING <span className="text-gradient-fire">PROTOCOLS.</span>
        </h1>
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Each protocol is a structured, periodized curriculum developed by our CSCS-certified coaching cadre. Calibrated volume, calculated RPE, and non-negotiable progression.
        </p>
      </div>

      {/* Programs List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {programs.map((program, idx) => {
          const isEven = idx % 2 === 1;
          const isRed = program.color === "red";

          return (
            <article
              key={program.id}
              id={program.slug}
              className="bg-[#111111] border border-[#242424] overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Visual Image */}
                <div
                  className={`lg:col-span-5 relative min-h-[340px] sm:min-h-[420px] bg-zinc-950 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center filter contrast-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest px-3 py-1 uppercase ${
                        isRed
                          ? "bg-brand-red text-white"
                          : "bg-brand-orange text-black"
                      }`}
                    >
                      {program.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-zinc-300 bg-black/75 backdrop-blur-sm p-3 border border-zinc-800">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-red" />
                      <span>{program.frequency}</span>
                    </div>
                    <span className="uppercase text-brand-orange">{program.level}</span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono uppercase text-brand-orange tracking-widest block mb-1">
                      {program.subtitle}
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider text-white">
                      {program.title}
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-sans">
                      {program.longDescription}
                    </p>

                    <div className="mt-6 pt-6 border-t border-zinc-800">
                      <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                        PROTOCOL CURRICULUM HIGHLIGHTS:
                      </h4>
                      <ul className="space-y-2.5">
                        {program.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                            <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-zinc-500 block">
                        ACCESS REQUIREMENTS
                      </span>
                      <span className="text-sm font-semibold text-white">
                        Available on Pro Combat & Elite Tiers
                      </span>
                    </div>
                    <Link
                      href={`/contact?program=${program.slug}`}
                      className="btn-primary text-base py-3 px-6 text-center justify-center"
                    >
                      <span>ENROLL IN THIS TRACK</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
