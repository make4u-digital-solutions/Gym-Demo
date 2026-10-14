import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trainers } from "@/data/trainers";
import { TrainerCard } from "@/components/ui/TrainerCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TrainersSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            tag="THE CADRE FACULTY"
            title="COMMAND"
            titleHighlight="COACHES."
            description="Our coaches hold collegiate sports science degrees, CSCS credentials, and competitive powerlifting podium finishes. Zero influencer fluff."
            className="mb-0"
          />
          <Link
            href="/trainers"
            className="hidden md:inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-brand-red hover:text-white transition-colors mt-4 md:mt-0"
          >
            <span>MEET THE FULL CADRE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <TrainerCard key={trainer.id} trainer={trainer} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/trainers" className="btn-secondary w-full justify-center">
            MEET THE CADRE
          </Link>
        </div>
      </div>
    </section>
  );
}
