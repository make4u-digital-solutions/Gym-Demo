import { Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-[#121212] border border-[#222222] p-6 sm:p-8 flex flex-col justify-between h-full relative group hover:border-brand-red/60 transition-colors">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-red/10 border border-brand-red/30 flex items-center justify-center font-display text-lg text-brand-red uppercase">
              {testimonial.initials}
            </div>
            <div>
              <h4 className="font-display text-lg tracking-wider text-white uppercase">
                {testimonial.name}
              </h4>
              <p className="text-[11px] font-mono text-zinc-500">
                {testimonial.division} • {testimonial.duration}
              </p>
            </div>
          </div>
          <Quote className="w-6 h-6 text-zinc-700 group-hover:text-brand-red transition-colors" />
        </div>

        <blockquote className="text-sm sm:text-base text-zinc-300 leading-relaxed italic">
          "{testimonial.quote}"
        </blockquote>
      </div>

      {testimonial.stats && testimonial.stats.length > 0 && (
        <div className="mt-6 pt-6 border-t border-zinc-800/80 flex items-center gap-4">
          {testimonial.stats.map((stat, idx) => (
            <div key={idx} className="bg-zinc-900/90 px-3 py-1.5 border border-zinc-800">
              <span className="block font-display text-lg text-brand-orange leading-tight">
                {stat.value}
              </span>
              <span className="block text-[9px] font-mono uppercase text-zinc-500 tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
