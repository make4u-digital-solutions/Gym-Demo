import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Activity, Users, Flame } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function DoctrineSection() {
  const pillars = [
    {
      num: "01",
      title: "PRECISION BIOMECHANICS",
      desc: "Calibrated lever optimization and joint-angle mechanics to maximize hypertrophic tension while eliminating impingement.",
      icon: Activity,
    },
    {
      num: "02",
      title: "THE CADRE CULTURE",
      desc: "An uncompromising brotherhood of lifters holding each other to elite standards. Zero vanity, zero excuses.",
      icon: Users,
    },
    {
      num: "03",
      title: "THERMAL RESTORATION",
      desc: "Systemic recovery protocols featuring 4°C cold plunge tubs and Finnish infrared cedar saunas to reset the nervous system.",
      icon: Flame,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column — Gritty Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] sm:h-[560px] w-full border border-zinc-800 overflow-hidden bg-zinc-950">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXeD3DVtrbcxpflLdBFor0gK9GuiziXh7OGr53s5H5pgZ--8-p363RS2rEnNrcB1TVzMR0JZ4VfbBBildt6VJaITZWz2iJ6BBo1EYaIF_SDwS3T7ydH--ujN2VSn67e8ScPqlWtBsDmHM3tH0oSOxyyef759XY2HjPalXHaYg_RsciI2hEXd0uZ35VGG5t4oohaOQ2sxBk3G2QxlnDAaTqpMMb_6IIuNRif549-sDu3mxcdI-Tk-cFwA"
                alt="Powerlifter chalking hands before heavy deadlift"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

              {/* Floating Stat Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/90 backdrop-blur-md p-4 border-l-2 border-brand-red">
                <span className="text-[10px] font-mono uppercase text-brand-red tracking-widest block">
                  FACILITY SPECIFICATION
                </span>
                <p className="font-display text-lg uppercase text-white mt-0.5">
                  18,000 SQ FT • ELEIKO & ROGUE EQUIPPED PLATFORMS
                </p>
              </div>
            </div>
          </div>

          {/* Right Column — Content */}
          <div className="lg:col-span-7">
            <SectionHeading
              tag="THE CORPS DOCTRINE"
              title="WE DO NOT SELL FITNESS."
              titleHighlight="WE FORGE SUPREMACY."
              description="Most commercial gyms cater to convenience. CORPS was engineered from the concrete up for serious lifters who demand progressive overload, competition-grade steel, and a culture that respects relentless effort."
            />

            {/* 3 Pillars */}
            <div className="space-y-6 mt-8">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="flex items-start gap-4 p-4 bg-[#111111] border border-[#222222] hover:border-brand-red/50 transition-colors"
                  >
                    <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-brand-red shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-brand-red">
                          {pillar.num}
                        </span>
                        <h3 className="font-display text-xl uppercase tracking-wider text-white">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-white hover:text-brand-red transition-colors group"
              >
                <span>READ FULL ETHOS & DOCTRINE</span>
                <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
