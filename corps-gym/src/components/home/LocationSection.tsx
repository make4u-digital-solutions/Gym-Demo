import Link from "next/link";
import { MapPin, Clock, Phone, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationSection() {
  const highlights = [
    "Eleiko IPF-Certified Competition Plates & Barbells",
    "Rogue Monster Power Cages & Deadlift Platforms",
    "Arsenal Strength & Atlantis Selectorized Machines",
    "4°C Cryo-Contrast Cold Plunge Recovery Suite",
    "Private Cedar Infrared Detox Saunas",
    "24/7 Biometric Facial & Keycard Security Access",
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0b0b0b] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              tag="SANCTUM HEADQUARTERS"
              title="LOCATED IN"
              titleHighlight="SECTOR 07."
              description="Housed in a converted industrial warehouse with 24-foot ceilings, sound-damped deadlift zones, and an uncompromising atmosphere."
            />

            <div className="space-y-4 my-8">
              <div className="flex items-start gap-3 p-4 bg-[#141414] border border-[#222222]">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-base uppercase text-white tracking-wider">
                    SECTOR 7 INDUSTRIAL CORRIDOR
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    42 Ironworks Blvd, Industrial Area Phase 2, New Delhi / NCR
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#141414] border border-[#222222]">
                <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-base uppercase text-white tracking-wider">
                    OPERATIONAL TIMINGS
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Open 24 Hours / 7 Days / 365 Days a Year with Biometric Keycard
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-[#141414] border border-[#222222]">
                <Phone className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display text-base uppercase text-white tracking-wider">
                    DISPATCH & INQUIRIES
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    +91 98710 44200 • command@corpsgym.com
                  </p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="btn-secondary text-sm px-6 py-3">
              SCHEDULE A PRIVATE RECON TOUR
            </Link>
          </div>

          <div className="lg:col-span-6 bg-[#121212] border border-[#262626] p-8 sm:p-10">
            <div className="flex items-center gap-2 text-brand-red font-mono text-xs uppercase tracking-widest mb-4">
              <Shield className="w-4 h-4" />
              <span>ARSENAL SPECIFICATIONS</span>
            </div>
            <h3 className="font-display text-3xl uppercase text-white tracking-wider mb-6">
              HARDWARE CALIBRATION
            </h3>
            <ul className="space-y-4">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-500 uppercase">
              <span>ZERO MACHINE QUEUES</span>
              <span>18,000 SQ FT FLOOR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
