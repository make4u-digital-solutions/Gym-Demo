import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProgramsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0b0b0b] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            tag="SPECIALIZED TRACKS"
            title="ENGINEERED"
            titleHighlight="PROTOCOLS."
            description="Every program is built upon exercise science, rate of force development, and structured deloads. Choose your warfare discipline."
            className="mb-0"
          />
          <Link
            href="/programs"
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-brand-red hover:text-white transition-colors mt-4 md:mt-0"
          >
            <span>VIEW ALL 4 PROTOCOLS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/programs" className="btn-secondary w-full justify-center">
            VIEW ALL PROTOCOLS
          </Link>
        </div>
      </div>
    </section>
  );
}
