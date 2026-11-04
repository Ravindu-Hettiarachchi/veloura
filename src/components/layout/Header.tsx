"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { EASE } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isScrolled
            ? "bg-[#F2E8DC]/95 backdrop-blur-md shadow-xs"
            : "bg-transparent"
        }`}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          {/* Logo on the left: at least 160px wide (use veloura-logo-dark-text.png) */}
          <Link
            href="/"
            className="group relative flex items-center focus-visible:ring-2 focus-visible:ring-[#B07A4F] rounded-xs"
            aria-label="VELOURA Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-[140px] sm:w-[168px] lg:w-[184px] h-10 sm:h-12 transition-opacity duration-300">
              <Image
                src="/brand/veloura-logo-dark-text.png"
                alt="VELOURA Interior Design Studio"
                fill
                priority
                sizes="(max-width: 640px) 140px, (max-width: 1024px) 168px, 184px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation: Jost, 14px, sentence case, with 1px copper underline on hover */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            <nav aria-label="Main Navigation" className="flex items-center space-x-7 xl:space-x-9">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-[14px] text-[#3B2417] hover:text-[#B07A4F] transition-colors py-1 relative group focus-visible:ring-2 focus-visible:ring-[#B07A4F] rounded-xs"
                >
                  <span>{item.label}</span>
                  <span
                    className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B07A4F] transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </nav>
          </div>

          {/* Far Right Action & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            {/* Solid dark-roast button with cream text at the far right */}
            <a
              href="#enquiry"
              className="hidden sm:inline-flex min-h-[44px] px-6 py-2.5 items-center justify-center rounded-full bg-[#3B2417] text-[#F6E7D0] hover:bg-[#5A3A2A] transition-all duration-300 active:scale-[0.98] font-sans text-[14px] focus-visible:ring-2 focus-visible:ring-[#B07A4F] shadow-xs"
            >
              Enquire
            </a>

            {/* Mobile Menu Toggle Button (min 48x48 tap target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden min-w-[48px] min-h-[48px] flex flex-col items-center justify-center space-y-1.5 focus-visible:ring-2 focus-visible:ring-[#B07A4F] rounded-xs text-[#3B2417] p-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span
                className={`w-6 h-[1.5px] bg-[#3B2417] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  mobileMenuOpen ? "rotate-45 translate-y-2 bg-[#B07A4F]" : ""
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-[#3B2417] transition-opacity duration-300 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-[#3B2417] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-[#B07A4F]" : ""
                }`}
              />
            </button>
          </div>

          {/* 
            -------------------------------------------------------------
            Ceiling Canopy: 24 × 6px, rounded copper canopy
            Sits on the bottom hairline at the centre of the right half
            (aligned with the arch window below: 75% on desktop, 50% on mobile).
            Nothing in the header overlaps the cord at 375px, 768px, or 1440px wide.
            -------------------------------------------------------------
          */}
          <div
            className="absolute -bottom-[3px] left-1/2 md:left-[75%] -translate-x-1/2 w-6 h-1.5 rounded-full bg-[#B07A4F] z-30 pointer-events-none shadow-xs"
            aria-hidden="true"
          />
        </div>

        {/* 1px copper hairline running along the bottom of the header */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#B07A4F]/30 pointer-events-none"
          aria-hidden="true"
        />
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-30 bg-[#F2E8DC] flex flex-col justify-between px-8 py-24 lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col space-y-6 pt-6 relative z-10">
              <span className="font-sans text-xs tracking-wider uppercase text-[#B07A4F]">
                Navigation
              </span>
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[48px] flex items-center font-serif text-2xl text-[#3B2417] hover:text-[#B07A4F] border-b border-[#B07A4F]/20 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-4 pt-8 relative z-10">
              <a
                href="#enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[48px] py-3.5 rounded-full bg-[#3B2417] text-[#F6E7D0] flex items-center justify-center font-sans text-sm tracking-wide uppercase transition-all duration-300 active:scale-[0.98]"
              >
                Enquire
              </a>
              <p className="font-sans text-xs text-[#3B2417]/60">
                Interior design studio, Colombo.
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
