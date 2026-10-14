import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://corpsgym.com"),
  title: {
    default: "CORPS. | Built Like a Unit. Trained Like a Corps.",
    template: "%s | CORPS.",
  },
  description:
    "CORPS. is a premium high-output bodybuilding and tactical powerlifting facility. Forge discipline, build elite strength, and join 120K+ athletes who train without excuses.",
  keywords: [
    "corps gym",
    "bodybuilding",
    "powerlifting",
    "personal training",
    "elite fitness",
    "hypertrophy",
    "strength training",
  ],
  openGraph: {
    type: "website",
    siteName: "CORPS.",
    title: "CORPS. | Built Like a Unit. Trained Like a Corps.",
    description:
      "Premium high-output fitness facility. Forge discipline, build elite strength, and join 120K+ athletes.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CORPS. | Built Like a Unit. Trained Like a Corps.",
    description:
      "Premium high-output fitness facility. Forge discipline, build elite strength.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-brand-black text-white font-sans antialiased overflow-x-hidden">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
