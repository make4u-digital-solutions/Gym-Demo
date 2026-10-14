import Link from "next/link";
import { Check, X, Shield, Zap } from "lucide-react";
import { MembershipPlan } from "@/data/membership";

interface MembershipCardProps {
  plan: MembershipPlan;
}

export function MembershipCard({ plan }: MembershipCardProps) {
  const isFeatured = plan.featured;

  return (
    <div
      className={`relative flex flex-col h-full bg-[#121212] transition-all duration-300 ${
        isFeatured
          ? "border-2 border-brand-red shadow-[0_0_40px_rgba(240,68,53,0.25)] lg:-translate-y-2 z-10"
          : "border border-[#242424] hover:border-zinc-700"
      }`}
    >
      {/* Featured Ribbon */}
      {isFeatured && (
        <div className="bg-brand-red text-white text-center py-1.5 px-4 text-xs font-mono font-bold tracking-widest uppercase">
          ★ MOST RECRUITED TIER — GRAND OPENING 30% OFF APPLIED ★
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col justify-between">
        <div>
          {/* Header Tier */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-500">
              {plan.tier}
            </span>
            <span
              className={`text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 ${
                isFeatured
                  ? "bg-brand-red/20 text-brand-red border border-brand-red/40"
                  : "bg-zinc-800 text-zinc-400"
              }`}
            >
              {plan.tagline}
            </span>
          </div>

          <h3 className="font-display text-4xl uppercase tracking-wider text-white">
            {plan.name}
          </h3>

          <p className="text-xs text-zinc-400 mt-2 leading-relaxed min-h-[36px]">
            {plan.description}
          </p>

          {/* Pricing display */}
          <div className="my-6 py-6 border-y border-zinc-800/80">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl sm:text-6xl text-white tracking-tight">
                {plan.price}
              </span>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                {plan.period}
              </span>
            </div>
            <p className="text-[11px] font-mono text-zinc-500 mt-1">{plan.note}</p>
          </div>

          {/* Features list */}
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs">
                {feature.included ? (
                  <Check className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                ) : (
                  <X className="w-4 h-4 text-zinc-700 shrink-0 mt-0.5" />
                )}
                <span
                  className={
                    feature.included ? "text-zinc-200" : "text-zinc-600 line-through"
                  }
                >
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div>
          <Link
            href={`/contact?plan=${plan.id}`}
            className={`w-full text-center justify-center ${
              isFeatured ? "btn-primary text-lg py-4" : "btn-secondary text-lg py-3.5"
            }`}
          >
            {plan.ctaText}
          </Link>
          <p className="text-[10px] font-mono text-zinc-500 text-center mt-3 uppercase tracking-wider">
            NO LOCK-IN CONTRACT • INSTANT BIOMETRIC PASS
          </p>
        </div>
      </div>
    </div>
  );
}
