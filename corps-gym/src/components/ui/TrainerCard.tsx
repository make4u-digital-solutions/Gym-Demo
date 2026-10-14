import Image from "next/image";
import Link from "next/link";
import { Shield, Award, ChevronRight } from "lucide-react";
import { Trainer } from "@/data/trainers";

interface TrainerCardProps {
  trainer: Trainer;
}

export function TrainerCard({ trainer }: TrainerCardProps) {
  const isRed = trainer.accentColor === "red";

  return (
    <div className="group relative bg-[#121212] border border-[#222222] hover:border-brand-red transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Tall Portrait */}
      <div className="relative h-96 w-full overflow-hidden bg-zinc-950">
        <Image
          src={trainer.image}
          alt={trainer.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-top filter grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent" />

        {/* Experience badge */}
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 uppercase inline-flex items-center gap-1.5 ${
              isRed
                ? "bg-brand-red text-white"
                : "bg-brand-orange text-black"
            }`}
          >
            <Award className="w-3 h-3" />
            {trainer.experience}
          </span>
        </div>

        {/* Bottom overlay info inside image container */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <p className="text-[11px] font-mono uppercase tracking-wider text-brand-orange">
            {trainer.title}
          </p>
          <h3 className="font-display text-3xl uppercase tracking-wider text-white">
            {trainer.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            {trainer.bio}
          </p>

          <div className="mt-4 pt-4 border-t border-zinc-800/80">
            <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider block mb-2">
              ACCREDITATIONS:
            </span>
            <ul className="space-y-1 text-xs text-zinc-300">
              {trainer.certifications.slice(0, 2).map((cert, idx) => (
                <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                  <span className="text-brand-red font-bold">›</span>
                  <span className="truncate">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-zinc-900">
          <Link
            href="/trainers"
            className="inline-flex items-center justify-between w-full text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-brand-red transition-colors"
          >
            <span>VIEW CADRE DOSSIER</span>
            <ChevronRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
