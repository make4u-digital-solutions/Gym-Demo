import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Award } from "lucide-react";
import { Program } from "@/data/programs";

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  const isRed = program.color === "red";

  return (
    <div className="group relative bg-[#121212] border border-[#222222] hover:border-brand-red transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Image Container with overlay */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

        {/* Track Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`text-xs font-mono font-bold tracking-widest px-3 py-1 uppercase inline-block ${
              isRed
                ? "bg-brand-red text-white"
                : "bg-brand-orange text-black"
            }`}
          >
            {program.badge}
          </span>
        </div>

        {/* Level badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-zinc-700 text-zinc-300 uppercase">
            {program.level}
          </span>
        </div>

        {/* Frequency bottom badge */}
        <div className="absolute bottom-3 left-4 z-10 flex items-center gap-1.5 text-xs text-zinc-300 font-mono">
          <Clock className="w-3.5 h-3.5 text-brand-red" />
          <span>{program.frequency}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-2xl uppercase tracking-wider text-white group-hover:text-brand-red transition-colors">
            {program.title}
          </h3>
          <p className="text-xs font-mono uppercase text-zinc-500 mt-1 tracking-wider">
            {program.subtitle}
          </p>
          <p className="text-sm text-zinc-400 mt-3 leading-relaxed line-clamp-3">
            {program.description}
          </p>

          {/* Quick bullet points */}
          <ul className="mt-4 space-y-1.5 border-t border-zinc-800/80 pt-4 text-xs text-zinc-300">
            {program.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-brand-red font-bold">›</span>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Link / CTA */}
        <div className="pt-6 mt-6 border-t border-zinc-900">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-brand-red transition-colors group-hover:translate-x-1 duration-200"
          >
            <span>EXPLORE PROTOCOL</span>
            <ArrowRight className="w-4 h-4 text-brand-red" />
          </Link>
        </div>
      </div>
    </div>
  );
}
