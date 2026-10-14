import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Shield, Award, CheckCircle, ArrowRight, Star } from "lucide-react";
import { trainers } from "@/data/trainers";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Command Cadre Coaching Staff",
  description:
    "Meet the CORPS coaching cadre: Former military PT instructors, CSCS specialists, and national weightlifting coaches.",
};

export default function TrainersPage() {
  return (
    <div className="bg-[#080808] text-white pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3.5 py-1.5 mb-6 text-xs font-mono font-bold tracking-widest uppercase text-brand-red">
          <Shield className="w-3.5 h-3.5 text-brand-red" />
          <span>ELITE INSTRUCTION FACULTY</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
          COMMAND <span className="text-gradient-fire">CADRE.</span>
        </h1>
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
          Every coach in our facility has earned their credentials on competition platforms and sports science laboratories. No weekend certifications. No social media vanity. Just high-output human engineering.
        </p>
      </div>

      {/* Cadre Roster */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {trainers.map((trainer, idx) => {
          const isEven = idx % 2 === 1;
          const isRed = trainer.accentColor === "red";

          return (
            <article
              key={trainer.id}
              id={trainer.slug}
              className="bg-[#111111] border border-[#222222] p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Portrait */}
                <div className="lg:col-span-4 relative h-[420px] w-full overflow-hidden bg-zinc-950 border border-zinc-800">
                  <Image
                    src={trainer.image}
                    alt={trainer.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top filter grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest px-3 py-1 uppercase inline-flex items-center gap-1.5 ${
                        isRed
                          ? "bg-brand-red text-white"
                          : "bg-brand-orange text-black"
                      }`}
                    >
                      <Award className="w-3.5 h-3.5" />
                      {trainer.experience}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="lg:col-span-8 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-mono uppercase text-brand-orange tracking-widest block mb-1">
                      {trainer.title}
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-wider text-white">
                      {trainer.name}
                    </h2>

                    <div className="inline-block mt-2 mb-4 bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-mono text-zinc-300 uppercase">
                      FOCUS: {trainer.specialization}
                    </div>

                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-sans mb-6">
                      {trainer.extendedBio}
                    </p>

                    {/* Certifications list */}
                    <div className="border-t border-zinc-800 pt-6">
                      <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                        VERIFIED CREDENTIALS & SPECIALTIES:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {trainer.certifications.map((cert, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <span className="text-xs font-mono text-zinc-500 uppercase">
                      LIMITED 1-ON-1 SLOTS CURRENTLY OPEN
                    </span>
                    <Link
                      href={`/contact?coach=${trainer.slug}`}
                      className="btn-primary text-base py-3 px-6 text-center justify-center"
                    >
                      <span>APPLY FOR {trainer.name.split(" ")[0]}'S CADRE</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Cadre Standards Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-[#141414] border border-[#242424] p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <Shield className="w-10 h-10 text-brand-red mx-auto mb-4" />
          <h3 className="font-display text-3xl sm:text-4xl uppercase text-white mb-4">
            THE CADRE HIRING BAR: TOP 1%
          </h3>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Fewer than 3% of strength coach applicants pass our Kinematic Exam and Biomechanics Trial. When you are coached at CORPS, you are in the hands of seasoned masters.
          </p>
        </div>
      </div>
    </div>
  );
}
