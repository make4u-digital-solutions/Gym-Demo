"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Dumbbell, Shield, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "DOCTRINE" },
  { href: "/programs", label: "PROGRAMS" },
  { href: "/trainers", label: "CADRE" },
  { href: "/membership", label: "MEMBERSHIP" },
  { href: "/gallery", label: "FACILITY" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#262626] shadow-2xl py-3"
            : "bg-[#080808]/80 backdrop-blur-sm border-b border-[#1c1c1c] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2 select-none">
            <span className="font-display text-3xl sm:text-4xl tracking-wider font-extrabold uppercase">
              <span className="text-brand-red transition-colors group-hover:text-red-400">COR</span>
              <span className="text-white">PS.</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase tracking-widest text-zinc-500 font-mono border-l border-zinc-800 pl-2">
              SECTOR 07
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-bold tracking-widest uppercase transition-colors relative py-1 ${
                    isActive
                      ? "text-brand-red"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-red" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/membership"
              className="hidden sm:inline-flex btn-primary text-base px-6 py-2.5"
            >
              ENLIST NOW
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none focus:ring-1 focus:ring-brand-red bg-zinc-900 border border-zinc-800"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[#080808]/98 backdrop-blur-xl lg:hidden flex flex-col pt-6 px-6 pb-8 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
            <Link href="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-2">
              <span className="font-display text-3xl font-extrabold uppercase">
                <span className="text-brand-red">COR</span>
                <span className="text-white">PS.</span>
              </span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-800"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4 py-8 flex-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between text-2xl font-display uppercase tracking-wider py-2 border-b border-zinc-900 transition-colors ${
                    isActive ? "text-brand-red pl-2 border-brand-red/30" : "text-zinc-200 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-5 h-5 ${isActive ? "text-brand-red" : "text-zinc-600"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-zinc-800 space-y-4">
            <Link
              href="/membership"
              onClick={() => setIsOpen(false)}
              className="w-full btn-primary text-center justify-center text-lg py-3.5"
            >
              ENLIST NOW — SECURE MEMBERSHIP
            </Link>
            <div className="flex items-center justify-between text-xs text-zinc-500 font-mono uppercase tracking-wider pt-2">
              <span>FACILITY: 24/7/365</span>
              <span>SECTOR 07 DISTRICT</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
