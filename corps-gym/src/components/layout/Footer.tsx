import Link from "next/link";
import { Shield, Dumbbell, MapPin, Mail, Phone, Clock, Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] text-zinc-400 border-t border-[#1f1f1f] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <span className="font-display text-4xl tracking-wider font-extrabold uppercase">
                <span className="text-brand-red transition-colors group-hover:text-red-400">COR</span>
                <span className="text-white">PS.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              High-output bodybuilding, powerlifting, and human adaptation facility. Built for disciplined lifters who reject mediocrity and demand physiological supremacy.
            </p>
            <div className="pt-2 flex items-center gap-3 text-zinc-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-brand-red hover:border-brand-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-brand-red hover:border-brand-red transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:text-brand-red hover:border-brand-red transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase bg-zinc-900/80 px-2.5 py-1 border border-zinc-800 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                FACILITY OPERATIONAL 24/7/365
              </span>
            </div>
          </div>

          {/* Protocols */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-brand-red" />
              PROTOCOLS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/programs" className="hover:text-brand-red transition-colors">
                  Heavy Hypertrophy System
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-brand-red transition-colors">
                  Tactical Powerlifting
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-brand-red transition-colors">
                  Metabolic Warfare Conditioning
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-brand-red transition-colors">
                  Cadre 1-on-1 Coaching
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-brand-red transition-colors">
                  Thermal Contrast Recovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Sanctum Links */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-orange" />
              SANCTUM
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-brand-red transition-colors">
                  The CORPS. Doctrine
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-brand-red transition-colors">
                  Cadre Coaching Staff
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-brand-red transition-colors">
                  Enlistment & Tiers
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-red transition-colors">
                  Facility Tour & Iron Vault
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-red transition-colors">
                  Recruiting Station
                </Link>
              </li>
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="font-display text-xl uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-red" />
              HEADQUARTERS
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" />
                <span>Sector 7 Industrial District, 42 Ironworks Blvd, New Delhi / NCR</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>+91 98710 44200</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>command@corpsgym.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-zinc-500 shrink-0" />
                <span>24/7 Biometric Keycard Access</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom divider & copyright */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {new Date().getFullYear()} CORPS. ATHLETIC SYSTEMS. BUILT LIKE A UNIT.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              DIRECTIVE & TERMS
            </Link>
            <Link href="/about" className="hover:text-zinc-300 transition-colors">
              BIO-SAFETY RULES
            </Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              PRESS INQUIRIES
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
