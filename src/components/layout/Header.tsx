"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { EASE } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isScrolled
            ? "bg-[#24160F]/92 backdrop-blur-md py-4 border-b border-[#E2C196]/20 shadow-2xl"
            : "bg-transparent py-6 sm:py-8 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo links to #top */}
          <Link
            href="#top"
            className="group relative flex items-center focus-visible:ring-2 focus-visible:ring-caramel rounded-sm"
            aria-label="VELOURA Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-36 sm:w-44 h-9 sm:h-11 transition-opacity duration-300">
              <Image
                src="/brand/veloura-logo-light-text.png"
                alt="VELOURA"
                fill
                priority
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation: Exactly matches Studio, Portfolio, Ethos, Process, Enquiry */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-cream/80 hover:text-caramel transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-caramel hover:after:w-full after:transition-all after:duration-500 after:ease-[cubic-bezier(0.76,0,0.24,1)] focus-visible:ring-2 focus-visible:ring-caramel rounded-xs"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Enquire CTA Button (Desktop, min 48px tap target) */}
          <div className="hidden md:flex items-center">
            <a
              href="#enquiry"
              className="min-h-[48px] px-6 py-2.5 inline-flex items-center justify-center rounded-full border border-caramel/70 text-caramel hover:bg-caramel hover:text-espresso uppercase text-[11px] font-medium tracking-[0.2em] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-caramel"
            >
              Enquire
            </a>
          </div>

          {/* Mobile Menu Toggle Button (48px+ tap target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-12 h-12 flex flex-col items-center justify-center space-y-1.5 focus-visible:ring-2 focus-visible:ring-caramel rounded text-cream"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span
              className={`block w-6 h-[1.5px] bg-caramel transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-caramel transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-caramel transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-40 bg-[#24160F] flex flex-col justify-between px-8 py-24 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Top brand icon background decorative watermark */}
            <div
              className="absolute -top-12 -right-12 w-80 h-80 opacity-[0.04] pointer-events-none"
              aria-hidden="true"
            >
              <Image
                src="/brand/veloura-icon-light.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <nav className="flex flex-col space-y-3 mt-8">
              {siteConfig.navigation.map((item, idx) => (
                <m.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: EASE, delay: 0.1 + idx * 0.08 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[52px] flex items-center font-serif text-3xl sm:text-4xl text-cream hover:text-caramel transition-colors tracking-wide border-b border-caramel/15 focus-visible:ring-2 focus-visible:ring-caramel"
                  >
                    <span className="text-xs font-sans tracking-[0.2em] text-caramel/60 mr-4">
                      0{idx + 1}
                    </span>
                    {item.label}
                  </a>
                </m.div>
              ))}
            </nav>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
              className="space-y-6 pt-6"
            >
              <a
                href="#enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[52px] w-full flex items-center justify-center rounded-full border border-caramel text-caramel hover:bg-caramel hover:text-espresso uppercase text-xs tracking-[0.25em] font-medium transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] focus-visible:ring-2 focus-visible:ring-caramel"
              >
                Start an Enquiry
              </a>

              <p className="text-[12px] text-cream/50 tracking-wider text-center">
                Interior design studio, Colombo.
              </p>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
