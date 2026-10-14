import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Flame, Check, X, HelpCircle, ArrowRight } from "lucide-react";
import { membershipPlans } from "@/data/membership";
import { MembershipCard } from "@/components/ui/MembershipCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Membership Tiers & Enlistment",
  description:
    "Choose your CORPS tier: Starter (₹999), Pro Combat (₹1,999), or Elite Command (₹3,499). No lock-in contracts, 100% transparent pricing.",
};

const COMPARISON_ROWS = [
  { feature: "Access Hours", starter: "05:00 - 23:00", pro: "24/7/365 Keycard", elite: "24/7/365 VIP Keycard" },
  { feature: "Free-Weight & Rig Access", starter: true, pro: true, elite: true },
  { feature: "Showers & Lockers", starter: true, pro: true, elite: "Dedicated Reserved Locker" },
  { feature: "CORPS Digital App Companion", starter: true, pro: true, elite: true },
  { feature: "Infrared Cedar Sauna Suite", starter: false, pro: true, elite: true },
  { feature: "4°C Cold Plunge Tanks", starter: false, pro: true, elite: true },
  { feature: "Group Warfare Conditioning Classes", starter: false, pro: true, elite: true },
  { feature: "Biometric InBody Composition Scans", starter: false, pro: "Monthly (1)", elite: "Bi-Weekly (2) + Kinematics" },
  { feature: "1-on-1 Dedicated Cadre Coach", starter: false, pro: false, elite: true },
  { feature: "Custom Nutrition & Hormone Protocol", starter: false, pro: false, elite: true },
  { feature: "Complimentary Guest Passes", starter: false, pro: "1 / Month", elite: "Unlimited" },
  { feature: "Gear & Towel Service", starter: false, pro: "Towel Service", elite: "Daily Fresh Kit + Laundry" },
];

const FAQS = [
  {
    q: "ARE THERE ANY ANNUAL LOCK-IN CONTRACTS OR CANCELLATION PENALTIES?",
    a: "Never. All CORPS memberships are billed month-to-month. You can cancel or pause your access directly in the member portal with 7 days notice before your next billing cycle.",
  },
  {
    q: "HOW DOES 24/7 BIOMETRIC ACCESS WORK?",
    a: "Upon enlistment, you receive your biometric facial credential setup or physical encrypted RFID keycard at the front command desk. This grants seamless entry through our security turnstiles at any hour, day or night.",
  },
  {
    q: "CAN I UPGRADE MY TIER MID-MONTH?",
    a: "Yes. You can upgrade from Starter to Pro Combat or Elite Command at any time. Your remaining monthly balance will be prorated automatically.",
  },
  {
    q: "DO YOU OFFER A TRIAL SESSION?",
    a: "Yes. We offer single-session Day Passes (₹299) that are 100% credited toward your first month's membership if you decide to enlist within 48 hours.",
  },
  {
    q: "WHAT IS THE 14-DAY BIO-ADAPTATION GUARANTEE?",
    a: "If within your first 14 days of training you do not feel our facility, equipment, and environment exceed any commercial gym you have ever visited, we will refund your payment in full.",
  },
];

export default function MembershipPage() {
  return (
    <div className="bg-[#080808] text-white pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-red/20 to-brand-orange/20 border border-brand-red/40 px-4 py-1.5 mb-6 text-xs font-mono font-bold tracking-widest uppercase text-brand-red">
          <Flame className="w-4 h-4 text-brand-orange animate-pulse" />
          <span>GRAND OPENING ENLISTMENT — 30% DISCOUNT APPLIED TO ALL TIERS</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
          MEMBERSHIP <span className="text-gradient-fire">TIERS.</span>
        </h1>
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Select your level of athletic immersion. Zero hidden maintenance charges, zero contractual traps.
        </p>
      </div>

      {/* 3 Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {membershipPlans.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>

      {/* Full Comparison Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          tag="FULL SPECIFICATION"
          title="FEATURE"
          titleHighlight="MATRIX."
          description="A direct line-by-line comparison of privileges across Starter, Pro Combat, and Elite Command tiers."
        />

        <div className="overflow-x-auto border border-zinc-800 bg-[#111111]">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#181818] border-b border-zinc-800 font-mono text-xs uppercase tracking-wider text-zinc-400">
              <tr>
                <th className="py-4 px-6 text-white font-bold">PRIVILEGE / SYSTEM</th>
                <th className="py-4 px-6 text-center">STARTER (₹999)</th>
                <th className="py-4 px-6 text-center text-brand-red font-bold">PRO COMBAT (₹1,999)</th>
                <th className="py-4 px-6 text-center text-brand-orange">ELITE COMMAND (₹3,499)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-sans">
              {COMPARISON_ROWS.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-900/40 transition-colors">
                  <td className="py-4 px-6 font-medium text-zinc-200">{row.feature}</td>

                  {/* Starter */}
                  <td className="py-4 px-6 text-center">
                    {typeof row.starter === "boolean" ? (
                      row.starter ? (
                        <Check className="w-4 h-4 text-brand-red mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-700 mx-auto" />
                      )
                    ) : (
                      <span className="text-xs font-mono text-zinc-400">{row.starter}</span>
                    )}
                  </td>

                  {/* Pro Combat */}
                  <td className="py-4 px-6 text-center bg-brand-red/5">
                    {typeof row.pro === "boolean" ? (
                      row.pro ? (
                        <Check className="w-4 h-4 text-brand-red mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-700 mx-auto" />
                      )
                    ) : (
                      <span className="text-xs font-mono font-bold text-brand-red">{row.pro}</span>
                    )}
                  </td>

                  {/* Elite Command */}
                  <td className="py-4 px-6 text-center">
                    {typeof row.elite === "boolean" ? (
                      row.elite ? (
                        <Check className="w-4 h-4 text-brand-orange mx-auto" />
                      ) : (
                        <X className="w-4 h-4 text-zinc-700 mx-auto" />
                      )
                    ) : (
                      <span className="text-xs font-mono font-bold text-brand-orange">{row.elite}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          tag="INTEL & QUESTIONS"
          title="FREQUENTLY"
          titleHighlight="ASKED."
          centered
        />

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-[#121212] border border-[#222222] p-6 hover:border-zinc-700 transition-colors">
              <h3 className="font-display text-lg uppercase text-white tracking-wider flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed font-sans pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final Enlist CTA */}
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-4xl sm:text-5xl uppercase text-white mb-6">
          HAVE BESPOKE UNIT REQUIREMENTS?
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
          We offer corporate cadre packages and competitive athlete sponsorships. Contact the front command desk.
        </p>
        <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
          SPEAK WITH COMMAND DESK
        </Link>
      </div>
    </div>
  );
}
