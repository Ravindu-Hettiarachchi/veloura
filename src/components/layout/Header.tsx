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
      setIsScrolled(window.scrollY > 32);
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isScrolled
            ? "bg-[#1A100B]/92 backdrop-blur-md py-4 border-b border-[#E2C196]/20 shadow-2xl"
            : "bg-transparent py-6 sm:py-8 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo links to Home */}
          <Link
            href="/"
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

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-xs uppercase tracking-[0.22em] font-medium transition-all duration-300 relative py-1 focus-visible:ring-2 focus-visible:ring-caramel rounded-xs ${
                    isActive
                      ? "text-[#E2C196] font-semibold"
                      : "text-cream/75 hover:text-cream"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <m.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#E2C196]"
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Enquire CTA Button (Desktop, min 48px tap target) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/enquiry"
              className="min-h-[48px] px-6 py-2.5 inline-flex items-center justify-center rounded-full border border-caramel/70 text-caramel hover:bg-caramel hover:text-espresso uppercase text-[11px] font-medium tracking-[0.2em] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-caramel"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button (min 48x48 tap target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[48px] min-h-[48px] flex flex-col items-center justify-center space-y-1.5 focus-visible:ring-2 focus-visible:ring-caramel rounded-sm text-cream p-2"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span
              className={`w-6 h-[1.5px] bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                mobileMenuOpen ? "rotate-45 translate-y-2 bg-caramel" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-cream transition-opacity duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-cream transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-caramel" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="fixed inset-0 z-40 bg-[#1A100B] flex flex-col justify-between px-8 py-24 md:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            {/* Architectural Arch Watermark */}
            <div
              className="absolute right-[-15%] top-[15%] w-[380px] h-[520px] pointer-events-none opacity-[0.04] z-0"
              aria-hidden="true"
            >
              <Image
                src="/brand/veloura-icon-light.png"
                alt=""
                fill
                sizes="380px"
                className="object-contain"
              />
            </div>

            <div className="flex flex-col space-y-6 pt-10 relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#E2C196]/60 mb-2">
                Navigation
              </span>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`min-h-[48px] flex items-center text-3xl font-serif tracking-tight border-b border-[#5A3A2A]/40 transition-colors ${
                  pathname === "/" ? "text-[#E2C196] font-medium" : "text-cream hover:text-caramel"
                }`}
              >
                Home
              </Link>
              {siteConfig.navigation.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`min-h-[48px] flex items-center text-3xl font-serif tracking-tight border-b border-[#5A3A2A]/40 transition-colors ${
                      isActive ? "text-[#E2C196] font-medium" : "text-cream hover:text-caramel"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col space-y-6 pt-8 relative z-10">
              <Link
                href="/enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full min-h-[48px] py-4 rounded-full border border-caramel/70 bg-caramel text-espresso font-sans text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center transition-all duration-300"
              >
                Schedule Private Consultation
              </Link>
              <p className="text-xs text-cream/50 tracking-wider">
                Interior design studio, Colombo.
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
