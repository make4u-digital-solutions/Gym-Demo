import { membershipPlans } from "@/data/membership";
import { MembershipCard } from "@/components/ui/MembershipCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldCheck, Flame } from "lucide-react";

export function PricingSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0b0b0b] border-t border-[#1a1a1a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="ENLISTMENT OPTIONS"
          title="INVEST IN YOUR"
          titleHighlight="SUPREMACY."
          description="Transparent, uncompromised tier structures. No hidden maintenance charges, no annual lock-in traps. Just pure athletic access."
          centered
        />

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {membershipPlans.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-[#121212] border border-[#222222] p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-red/10 border border-brand-red/30 text-brand-red shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display text-lg uppercase text-white tracking-wider">
                CORPS BIO-ADAPTATION GUARANTEE
              </h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Full 14-day refund if you don't break a personal strength record or PR.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="text-[11px] font-mono uppercase bg-zinc-900 border border-zinc-800 text-zinc-300 px-3 py-1.5">
              ZERO CONTRACT LOCK-IN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
