"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";
import { PendantLight } from "@/components/ui/PendantLight";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between items-center text-center overflow-hidden pt-28 pb-12 px-6 sm:px-12 bg-[#24160F]"
      aria-label="Hero Introduction"
    >
      {/* Background Hero Image with Priority */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero.jpg"
          alt="Architectural interior gallery designed by VELOURA"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        {/* Layered Espresso Vignette for Rich Depth and AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#24160F]/80 via-[#24160F]/70 to-[#24160F]" />
      </div>

      {/* Hanging Architectural Pendant Light Detail */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <PendantLight length={110} color="#E2C196" delay={0.3} />
      </div>

      {/* Top Spacer / Logo Area */}
      <div className="w-full max-w-5xl mx-auto z-20 flex flex-col items-center pt-8 sm:pt-14">
        {/* Hero Sequence: Logo fades in at 0.2s */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
          className="relative w-44 sm:w-60 h-16 sm:h-20"
        >
          <Image
            src="/brand/veloura-logo-light-text.png"
            alt="VELOURA Interior Design Studio"
            fill
            priority
            sizes="(max-width: 640px) 176px, 240px"
            className="object-contain"
          />
        </m.div>

        {/* Studio Subtitle / Arch Tag */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.4 }}
          className="mt-3 flex items-center space-x-3 text-caramel/70"
        >
          <span className="w-6 h-[1px] bg-caramel/40" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-sans">
            Editorial Interior Atelier
          </span>
          <span className="w-6 h-[1px] bg-caramel/40" />
        </m.div>
      </div>

      {/* Main Center Statement: Headline at 0.7s */}
      <div className="relative z-20 max-w-4xl mx-auto my-auto py-12 flex flex-col items-center">
        <m.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.7 }}
          className="font-serif text-cream font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-tight leading-[1.08] max-w-3xl"
        >
          Sculpting spaces of quiet reverence &amp; warm restraint.
        </m.h1>

        {/* Short supporting line */}
        <m.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.0 }}
          className="mt-6 sm:mt-8 text-cream/80 text-base sm:text-lg max-w-xl font-light leading-relaxed tracking-wide font-sans"
        >
          We curate private residences and bespoke cultural sanctuaries shaped by
          honed stone, tactile linen, and the unhurried dance of natural light.
        </m.p>

        {/* Hero Sequence: Button fades in at 1.4s */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.4 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#portfolio"
            className="group relative inline-flex items-center justify-center px-9 py-4 rounded-full border border-caramel text-caramel hover:text-espresso uppercase text-xs tracking-[0.25em] font-medium overflow-hidden transition-colors duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] active:scale-[0.98]"
          >
            {/* Smooth sliding caramel fill background */}
            <span
              className="absolute inset-0 bg-caramel translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
              aria-hidden="true"
            />
            <span className="relative z-10 flex items-center">
              View Projects
              <svg
                className="ml-3 w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-x-1"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>

          <a
            href="#enquiry"
            className="inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream/70 hover:text-caramel transition-colors duration-300"
          >
            Commission Studio
          </a>
        </m.div>
      </div>

      {/* Bottom Scroll Indicator & Hairline */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center pt-6">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: EASE, delay: 1.6 }}
          className="flex flex-col items-center text-caramel/50 text-[10px] uppercase tracking-[0.25em]"
        >
          <span>Scroll to Discover</span>
          <div className="w-[1px] h-8 bg-caramel/30 mt-2" />
        </m.div>
      </div>
    </section>
  );
}
