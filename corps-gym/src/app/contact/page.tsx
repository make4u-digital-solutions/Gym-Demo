"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  CheckCircle,
  AlertCircle,
  Send,
  Flame,
} from "lucide-react";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const preselectedPlan = searchParams.get("plan") || "pro-combat";
  const preselectedCoach = searchParams.get("coach") || "";
  const preselectedProgram = searchParams.get("program") || "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "Intermediate",
    protocol: preselectedProgram || "heavy-hypertrophy",
    tier: preselectedPlan,
    notes: preselectedCoach ? `Interested in training with coach: ${preselectedCoach}` : "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Phone).");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address.");
      return;
    }

    setStatus("submitting");

    // Simulate server dispatch transmission
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <div className="bg-[#080808] text-white pt-12 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 px-3.5 py-1.5 mb-6 text-xs font-mono font-bold tracking-widest uppercase text-brand-red">
          <Flame className="w-3.5 h-3.5 text-brand-red" />
          <span>RECRUITMENT & COMMAND DISPATCH</span>
        </div>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
          RECRUITING <span className="text-gradient-fire">STATION.</span>
        </h1>
        <p className="mt-6 text-base sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Submit your enlistment application or schedule a facility recon tour. We reply to all transmissions within 2 operational hours.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column — Application Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#242424] p-8 sm:p-10">
            <h2 className="font-display text-3xl uppercase tracking-wider text-white mb-2">
              ENLISTMENT APPLICATION
            </h2>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-8">
              FILL ALL SECTIONS ACCURATELY • DISCIPLINE STARTS HERE
            </p>

            {status === "success" ? (
              <div className="bg-emerald-950/30 border border-emerald-500/40 p-8 text-center animate-in fade-in duration-300">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-display text-3xl uppercase text-white mb-2">
                  TRANSMISSION CONFIRMED
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed max-w-md mx-auto">
                  Recruit <strong className="text-white">{formData.fullName}</strong>, your application for the <strong className="text-brand-orange uppercase">{formData.tier}</strong> tier has been routed to the Command Desk. You will receive an SMS confirmation with your orientation barcode within 2 hours.
                </p>
                <div className="mt-6 pt-6 border-t border-emerald-500/20 text-xs font-mono text-emerald-400">
                  DISPATCH REF: CORPS-CMD-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 btn-primary text-xs py-2.5 px-6"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="bg-red-950/50 border border-brand-red p-4 flex items-center gap-3 text-red-200 text-xs">
                    <AlertCircle className="w-5 h-5 text-brand-red shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Vikram Sharma"
                      required
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Mobile Number (For Keycard Pass) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Enlistment Tier
                    </label>
                    <select
                      name="tier"
                      value={formData.tier}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="starter">Starter Cadre (₹999 / mo)</option>
                      <option value="pro-combat">Pro Combat (₹1,999 / mo) — Recommended</option>
                      <option value="elite-command">Elite Command (₹3,499 / mo)</option>
                      <option value="day-pass">Single Session Day Pass (₹299)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                      Primary Protocol
                    </label>
                    <select
                      name="protocol"
                      value={formData.protocol}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="heavy-hypertrophy">Heavy Hypertrophy</option>
                      <option value="tactical-powerlifting">Tactical Powerlifting</option>
                      <option value="metabolic-warfare">Metabolic Warfare</option>
                      <option value="elite-coaching">1-on-1 Cadre Coaching</option>
                      <option value="open-floor">Open Floor Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-2">
                    Training Background / Medical Disclosures / Goals
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Describe your current lifting stats, previous injuries, or specific athletic objectives..."
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full btn-primary text-center justify-center text-lg py-4"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ENCRYPTING & TRANSMITTING...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>SUBMIT ENLISTMENT APPLICATION</span>
                      <Send className="w-4 h-4" />
                    </span>
                  )}
                </button>

                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider text-center">
                  NO PAYMENT REQUIRED TODAY • ORIENTATION PASS ISSUED UPON TRANSMISSION
                </p>
              </form>
            )}
          </div>

          {/* Right Column — Command Desk Details & Sanctum Map */}
          <div className="lg:col-span-5 space-y-8">
            {/* Headquarters details */}
            <div className="bg-[#111111] border border-[#242424] p-8">
              <div className="flex items-center gap-2 text-brand-red font-mono text-xs uppercase tracking-widest mb-4">
                <Shield className="w-4 h-4" />
                <span>COMMAND DESK HEADQUARTERS</span>
              </div>
              <h3 className="font-display text-3xl uppercase text-white mb-6">
                DISPATCH DIRECTORY
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs font-mono">SECTOR 07 SANCTUM</h4>
                    <p className="text-zinc-400 mt-0.5">
                      42 Ironworks Blvd, Industrial District Phase 2, New Delhi / NCR, 110020
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs font-mono">DIRECT DISPATCH LINE</h4>
                    <p className="text-zinc-400 mt-0.5">+91 98710 44200 (24/7 Command Hotline)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-zinc-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs font-mono">ELECTRONIC TRANSMISSIONS</h4>
                    <p className="text-zinc-400 mt-0.5">command@corpsgym.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase text-xs font-mono">FACILITY ACCESS</h4>
                    <p className="text-zinc-400 mt-0.5">
                      24 Hours / 7 Days / 365 Days a Year (Biometric Keycard)
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Staffed Front Desk: 06:00 – 22:00 Daily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Sector 07 Map / Recon Card */}
            <div className="bg-[#111111] border border-[#242424] p-6 relative overflow-hidden">
              <div className="h-48 w-full bg-zinc-950 border border-zinc-800 relative flex items-center justify-center p-4">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#F04435_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative text-center z-10">
                  <div className="w-12 h-12 rounded-full bg-brand-red/20 border-2 border-brand-red flex items-center justify-center mx-auto mb-2 animate-ping" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-brand-red" />
                  </div>
                  <span className="font-display text-xl uppercase tracking-wider text-white block mt-4">
                    SECTOR 07 COORDINATES
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    28.5355° N, 77.2610° E • 2 MIN FROM METRO EXIT 4
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>VALET ATHLETE PARKING AVAILABLE</span>
                <span className="text-brand-orange font-bold">TURN 02 OFF HIGHWAY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#080808] flex items-center justify-center text-zinc-400 font-mono text-sm">
          LOADING RECRUITMENT DISPATCH...
        </div>
      }
    >
      <ContactFormContent />
    </Suspense>
  );
}
