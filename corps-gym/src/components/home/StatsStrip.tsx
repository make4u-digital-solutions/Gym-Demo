export function StatsStrip() {
  const stats = [
    { value: "120K+", label: "ACTIVE RECRUITS", detail: "Global Cadre Network" },
    { value: "15+", label: "YEARS OF HERITAGE", detail: "Iron Discipline Since 2011" },
    { value: "40+", label: "MASTER CADRE COACHES", detail: "Ex-Military & CSCS Certified" },
    { value: "24/7/365", label: "UNRESTRICTED ACCESS", detail: "Biometric Keycard Security" },
  ];

  return (
    <section className="bg-[#0e0e0e] border-y border-[#222222] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center border-l-2 border-brand-red/60 pl-4 sm:pl-6 py-2"
            >
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white">
                {stat.value}
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-orange mt-1">
                {stat.label}
              </span>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">
                {stat.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
