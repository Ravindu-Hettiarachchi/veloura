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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
          isScrolled
            ? "bg-[#F2E8DC]/95 backdrop-blur-md py-4 border-b border-[#B07A4F]/20 shadow-sm"
            : "bg-transparent py-6 sm:py-7 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Logo in header: readable size, at least 160px wide on desktop */}
          <Link
            href="/"
            className="group relative flex items-center focus-visible:ring-2 focus-visible:ring-copper rounded-sm"
            aria-label="VELOURA Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-40 sm:w-48 h-10 sm:h-12 transition-opacity duration-300">
              <Image
                src="/brand/veloura-logo-dark-text.png"
                alt="VELOURA Interior Design Studio"
                fill
                priority
                sizes="(max-width: 640px) 160px, 192px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation: Jost, tracked capitals */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-caps text-[#3B2417]/80 hover:text-[#B07A4F] transition-colors duration-300 py-1 relative focus-visible:ring-2 focus-visible:ring-copper rounded-xs"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Solid dark-roast (#3B2417) button with cream (#F6E7D0) text */}
          <div className="hidden md:flex items-center">
            <a
              href="#enquiry"
              className="btn-caps min-h-[44px] px-6 py-2.5 inline-flex items-center justify-center rounded-full bg-[#3B2417] text-[#F6E7D0] hover:bg-[#5A3A2A] transition-all duration-300 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-copper shadow-sm"
            >
              Enquire
            </a>
          </div>

          {/* Mobile Menu Button (min 48x48 tap target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[48px] min-h-[48px] flex flex-col items-center justify-center space-y-1.5 focus-visible:ring-2 focus-visible:ring-copper rounded-sm text-[#3B2417] p-2"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
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
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-40 bg-[#F2E8DC] flex flex-col justify-between px-8 py-24 md:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col space-y-6 pt-8 relative z-10">
              <span className="nav-caps text-[#B07A4F] mb-1">
                Menu
              </span>
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[48px] flex items-center text-3xl font-serif text-[#3B2417] hover:text-[#B07A4F] border-b border-[#B07A4F]/20 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-4 pt-8 relative z-10">
              <a
                href="#enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-caps w-full min-h-[48px] py-3.5 rounded-full bg-[#3B2417] text-[#F6E7D0] flex items-center justify-center transition-all duration-300"
              >
                Enquire
              </a>
              <p className="text-xs text-[#3B2417]/60">
                Interior design studio, Colombo.
              </p>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
