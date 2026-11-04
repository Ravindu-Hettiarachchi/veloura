"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between items-center text-center overflow-hidden pt-28 pb-12 px-6 sm:px-12 bg-[#24160F]"
      aria-label="Hero Introduction"
    >
      {/* Background Hero Picture with 6s Settling Scale (1.08 -> 1) */}
      <div className="absolute inset-0 z-0 bg-[#24160F] overflow-hidden select-none">
        <m.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6, ease: EASE }}
          className="relative w-full h-full"
        >
          <picture className="w-full h-full block">
            <source
              media="(max-width: 767px)"
              srcSet="/images/hero-mobile.webp"
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/images/hero.webp"
              type="image/webp"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.webp"
              alt="Architectural golden hour living space designed by VELOURA with arched opening and travertine surfaces"
              className="w-full h-full object-cover object-center"
              width={2400}
              height={1350}
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </m.div>

        {/* Layered Espresso Vignette for Rich Depth and AA Contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#24160F]/85 via-[#24160F]/70 to-[#24160F] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Upgraded Architectural Pendant Light Detail */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center pointer-events-none"
        aria-hidden="true"
      >
        {/* Vertical Line drawing down via SVG pathLength */}
        <svg width="2" height="100" viewBox="0 0 2 100" fill="none" className="block">
          <m.line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="#E2C196"
            strokeWidth="1"
            strokeOpacity="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
          />
        </svg>

        {/* Small circle fading in with soft caramel glow once */}
        <m.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 1.4 }}
          className="relative -mt-1 w-5 h-5 rounded-full border border-[#E2C196]/80 flex items-center justify-center shadow-[0_0_12px_rgba(226,193,150,0.45)]"
        >
          <div className="w-2 h-2 rounded-full bg-[#E2C196]" />
        </m.div>
      </div>

      {/* Top Brand Logo: Fades in at 0.2s */}
      <div className="w-full max-w-5xl mx-auto z-20 flex flex-col items-center pt-8 sm:pt-14">
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

        {/* Subtitle tag */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: EASE, delay: 0.4 }}
          className="mt-3 flex items-center space-x-3 text-caramel/70"
        >
          <span className="w-6 h-[1px] bg-caramel/40" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-sans">
            Architectural Atelier · Colombo
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

        {/* Button fades in at 1.4s */}
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
            {/* Sliding caramel fill background */}
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

      {/* Upgraded Scroll Cue: Thin Animated Vertical Line */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center pt-6">
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, ease: EASE, delay: 1.6 }}
          className="flex flex-col items-center text-caramel/60 text-[10px] uppercase tracking-[0.25em]"
        >
          <span>Scroll</span>
          {/* Animated vertical 1px line indicator */}
          <div className="relative w-[1px] h-10 bg-caramel/20 mt-2 overflow-hidden">
            <m.div
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{
                duration: 1.8,
                ease: EASE,
                repeat: Infinity,
                repeatDelay: 0.4,
              }}
              className="w-full h-1/2 bg-caramel"
            />
          </div>
        </m.div>
      </div>
    </section>
  );
}
