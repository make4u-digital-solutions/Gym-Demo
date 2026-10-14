import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, TrendingUp, Dumbbell, ShieldAlert } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export function TransformationsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#080808] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="PROVEN RESULTS"
          title="FIELD"
          titleHighlight="TRANSFORMATIONS."
          description="We do not measure progress in subjective feelings. We track bar velocity, hypertrophy cross-sections, and raw output."
        />

        {/* Featured Case Study Card */}
        <div className="bg-[#121212] border border-[#262626] p-6 sm:p-10 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual preview */}
            <div className="lg:col-span-5 relative h-72 sm:h-80 w-full overflow-hidden bg-zinc-950 border border-zinc-800">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXAWDbqlyz6cMz1WGfMZocKiiSzcGwXaul09suNMsK5r18h7Eu_pivU5ocA1a_FOuOr47eEDqkBrO1RvAG0QWS4Bw08HJsVgrZB32DOnLSN51uwqOOLZxsiWkBG3FEq3dX50mbOuojukrYg9arymGCNV8NBBF-tk27jaN3-Q0RRC9bOrtBtHfY029YPsNd5KKp5TUPa3OvHLmNzmK6wL1E4gbmvhIlI2j360EOCmAsWRdcDWHQFcQAkQ"
                alt="Case study athlete executing incline press"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 bg-brand-red text-white uppercase">
                  16-WEEK DOSSIER
                </span>
              </div>
              <div className="absolute bottom-4 left-4">
                <p className="font-display text-2xl uppercase text-white">VIKRAM S.</p>
                <p className="text-[11px] font-mono text-zinc-400">HEAVY HYPERTROPHY TRACK</p>
              </div>
            </div>

            {/* Metrics and narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-wider mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>MEASURED BIO-METRIC ADAPTATION</span>
                </div>
                <h3 className="font-display text-3xl uppercase text-white leading-tight">
                  "I was plateaued for three years. In four months, the cadre rebuilt my compound kinematics completely."
                </h3>

                {/* 3 Metrics Callouts */}
                <div className="grid grid-cols-3 gap-4 my-6 py-4 border-y border-zinc-800">
                  <div>
                    <span className="font-display text-3xl sm:text-4xl text-brand-red block">
                      +8.4 KG
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-zinc-400 tracking-wider">
                      LEAN TISSUE
                    </span>
                  </div>
                  <div>
                    <span className="font-display text-3xl sm:text-4xl text-brand-orange block">
                      -6.2%
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-zinc-400 tracking-wider">
                      BODY FAT
                    </span>
                  </div>
                  <div>
                    <span className="font-display text-3xl sm:text-4xl text-white block">
                      +65 KG
                    </span>
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-zinc-400 tracking-wider">
                      BIG 3 TOTAL
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase">
                  SUPERVISED BY HEAD COACH MARCUS VANCE
                </span>
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white hover:text-brand-red transition-colors"
                >
                  <span>START YOUR RECOMP</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.slice(0, 2).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
