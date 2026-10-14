export interface MembershipFeature {
  text: string;
  included: boolean;
}

export interface MembershipPlan {
  id: string;
  tier: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  period: string;
  note: string;
  features: MembershipFeature[];
  ctaText: string;
  featured: boolean;
  accentColor: "red" | "orange" | "zinc";
}

export const membershipPlans: MembershipPlan[] = [
  {
    id: "starter",
    tier: "TIER 01",
    name: "STARTER",
    tagline: "ENTRY CADRE",
    description: "Foundational access for self-directed athletes focused on basic compound execution.",
    price: "₹999",
    period: "/ MONTH",
    note: "Billed monthly • Cancel anytime",
    features: [
      { text: "Unrestricted Gym Floor Access (05:00 – 23:00)", included: true },
      { text: "Calibrated Free-Weight & Plate Access", included: true },
      { text: "Full Locker Room & Shower Access", included: true },
      { text: "CORPS Digital Performance Companion App", included: true },
      { text: "24/7/365 Unrestricted Keycard Access", included: false },
      { text: "Infrared Sauna & Cold Plunge Pass", included: false },
      { text: "Group Warfare Conditioning Sessions", included: false },
      { text: "Monthly Biometric InBody Scan", included: false },
    ],
    ctaText: "SELECT STARTER",
    featured: false,
    accentColor: "zinc",
  },
  {
    id: "pro-combat",
    tier: "TIER 02",
    name: "PRO COMBAT",
    tagline: "FULL REGIMENT",
    description: "Complete thermal restoration and 24/7 uninterrupted iron access.",
    price: "₹1,999",
    period: "/ MONTH",
    note: "Includes all Starter perks + full thermal suite",
    features: [
      { text: "Everything in Starter + 24/7/365 Keycard Access", included: true },
      { text: "Infrared Cedar Sauna & 4°C Cold Plunge", included: true },
      { text: "All Group Warfare Conditioning Sessions", included: true },
      { text: "1 Monthly Biometric InBody Body Composition Scan", included: true },
      { text: "CORPS Performance Barbell Towel & Shaker", included: true },
      { text: "Dedicated 1-on-1 Master Coach", included: false },
      { text: "Custom Macronutrient Protocol", included: false },
      { text: "Unlimited Guest Passes", included: false },
    ],
    ctaText: "CLAIM PRO MEMBERSHIP",
    featured: true,
    accentColor: "red",
  },
  {
    id: "elite-command",
    tier: "TIER 03",
    name: "ELITE COMMAND",
    tagline: "EXECUTIVE CADRE",
    description: "Unrestricted personal coaching, dedicated locker, and nutrient support.",
    price: "₹3,499",
    period: "/ MONTH",
    note: "Full-spectrum athletic command privileges",
    features: [
      { text: "Everything included in Pro Combat", included: true },
      { text: "Dedicated 1-on-1 Master Cadre Coach", included: true },
      { text: "Personal VIP Reserved Locker & Daily Laundry", included: true },
      { text: "Custom Macronutrient & Supplement Protocol", included: true },
      { text: "Unlimited Complimentary Guest Passes", included: true },
      { text: "Priority Class & Peak-Hour Equipment Booking", included: true },
      { text: "Quarterly Bloodwork & Hormone Panel Review", included: true },
      { text: "Exclusive Command Cadre Events Access", included: true },
    ],
    ctaText: "SELECT ELITE COMMAND",
    featured: false,
    accentColor: "orange",
  },
];
