"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/constants";

const heroSpaces = [
  {
    id: "monolith",
    title: "The Monolith Residence",
    location: "Colombo 07",
    typology: "Courtyard home",
    image: "/images/hero.webp",
    detailImage: "/images/studio-detail.webp",
    materials: "Fluted limestone & smoked teak",
  },
  {
    id: "solarium",
    title: "Solarium Villa",
    location: "Bentota",
    typology: "Coastal retreat",
    image: "/images/portfolio-3.webp",
    detailImage: "/images/studio-primary.webp",
    materials: "Lime plaster & reclaimed timber",
  },
  {
    id: "stonebridge",
    title: "Stonebridge Apartment",
    location: "Colombo 03",
    typology: "Oceanfront home",
    image: "/images/portfolio-4.webp",
    detailImage: "/images/ethos-3.webp",
    materials: "Honed travertine & bronze",
  },
];

export function Hero() {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);
  const activeSpace = heroSpaces[activeSpaceIndex];
  const heroRef = useRef<HTMLElement>(null);

  // Cord lengthens smoothly as user scrolls through the hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const cordScaleY = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100svh] bg-[#F2E8DC] text-[#3B2417] flex flex-col justify-between pt-28 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-14 overflow-hidden border-b border-[#B07A4F]/20"
    >
      {/* 
        -------------------------------------------------------------
        Top Architectural Ribbon
        -------------------------------------------------------------
      */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between pb-6 border-b border-[#B07A4F]/20 text-xs text-[#3B2417]/70">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-[#B07A4F]" />
          <span className="nav-caps text-[#B07A4F]">VELOURA Studio</span>
          <span className="hidden sm:inline text-[#B07A4F]/40">·</span>
          <span className="hidden sm:inline text-[#3B2417]/80">Interior Design &amp; Custom Build</span>
        </div>

        <div className="text-right text-xs text-[#3B2417]/80">
          <span>Colombo 07, Sri Lanka</span>
        </div>
      </div>

      {/* 
        -------------------------------------------------------------
        Hanging Pendant Cord & Glowing Lamp (Visual Signature)
        Positioned strategically above the central composition
        -------------------------------------------------------------
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
        {/* Cord that lengthens slightly on scroll */}
        <m.div
          style={{
            scaleY: cordScaleY,
            transformOrigin: "top",
          }}
          className="w-[1px] h-28 sm:h-36 bg-[#B07A4F]"
        />

        {/* Lamp Circle & Warm Caramel Glow */}
        <div className="relative -mt-1 flex items-center justify-center">
          {/* Soft caramel glow fading in on load */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2.2, ease: EASE }}
            className="absolute w-14 h-14 rounded-full bg-[#E2C196]/60 blur-md pointer-events-none"
          />

          {/* Delicate outer brass ring */}
          <div className="w-6 h-6 rounded-full border border-[#B07A4F] flex items-center justify-center bg-[#F2E8DC] shadow-sm">
            {/* Solid lamp bead */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#B07A4F]" />
          </div>
        </div>
      </div>

      {/* 
        -------------------------------------------------------------
        Main Asymmetrical Editorial Layout
        Breaks away from the standard "text left, box right" template
        -------------------------------------------------------------
      */}
      <div className="max-w-7xl mx-auto w-full my-auto py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typographic Artistry */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
          <m.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="space-y-5"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#F6E7D0] border border-[#B07A4F]/30 text-xs text-[#3B2417] font-medium">
              <span>Selected private residences &amp; boutiques</span>
            </div>

            <h1 className="heading-hero text-[#3B2417] text-balance">
              Rooms that feel calm the moment you walk in.
            </h1>
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: EASE }}
            className="text-base sm:text-lg text-[#3B2417]/85 font-normal leading-relaxed max-w-xl"
          >
            VELOURA designs homes and small commercial spaces across Sri Lanka. We build with teak,
            limestone, brass, and linen—materials that feel good to live with and grow better with time.
          </m.p>

          {/* Action Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: EASE }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#portfolio"
              className="btn-caps min-h-[48px] px-8 py-3.5 inline-flex items-center justify-center rounded-full bg-[#3B2417] text-[#F6E7D0] hover:bg-[#5A3A2A] transition-all duration-300 shadow-sm focus-visible:ring-2 focus-visible:ring-copper"
            >
              View projects
            </a>
            <a
              href="#studio"
              className="btn-caps min-h-[48px] px-8 py-3.5 inline-flex items-center justify-center rounded-full border border-[#B07A4F]/60 text-[#3B2417] hover:border-[#3B2417] hover:bg-[#F6E7D0]/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-copper"
            >
              About the studio
            </a>
          </m.div>
        </div>

        {/* Right Column: Layered Architectural Arch Composition */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
          {/* Main Arch-Shaped Window (45% width on desktop) */}
          <div className="relative w-full max-w-md sm:max-w-lg h-[460px] sm:h-[560px] lg:h-[600px] rounded-t-[220px] overflow-hidden border border-[#B07A4F]/35 shadow-2xl bg-[#F6E7D0]">
            <AnimatePresence mode="wait">
              <m.div
                key={activeSpace.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeSpace.image}
                  alt={`${activeSpace.title} interior design in ${activeSpace.location}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover object-center"
                />
              </m.div>
            </AnimatePresence>

            {/* "Lights on" moment: espresso overlay starts at 65% opacity and fades to 0 over 2.2s */}
            <m.div
              initial={{ opacity: 0.65 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: EASE }}
              className="absolute inset-0 bg-[#24160F] pointer-events-none"
              aria-hidden="true"
            />

            {/* Project Pill inside the arch window */}
            <div className="absolute top-6 left-6 z-10">
              <span className="px-3 py-1 rounded-full bg-[#F2E8DC]/95 backdrop-blur-sm border border-[#B07A4F]/30 text-xs text-[#3B2417] font-medium shadow-sm">
                {activeSpace.typology} · {activeSpace.location}
              </span>
            </div>
          </div>

          {/* Overlapping Architectural Detail Snippet (Creates Layered Editorial Depth) */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1.0 }}
            transition={{ delay: 0.8, duration: 1.0, ease: EASE }}
            className="hidden sm:block absolute -bottom-6 -left-4 sm:left-4 lg:-left-6 w-44 sm:w-52 h-44 sm:h-52 rounded-t-[90px] overflow-hidden border border-[#B07A4F]/40 shadow-2xl z-20 bg-[#F6E7D0]"
          >
            <AnimatePresence mode="wait">
              <m.div
                key={activeSpace.id + "-detail"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="relative w-full h-full"
              >
                <Image
                  src={activeSpace.detailImage}
                  alt={`Detail view of ${activeSpace.title}`}
                  fill
                  sizes="208px"
                  className="object-cover"
                />
              </m.div>
            </AnimatePresence>
          </m.div>

          {/* Floating Warm Parchment Badge (Tactile studio note) */}
          <div className="hidden lg:block absolute -top-4 -right-4 z-20 bg-[#F6E7D0]/95 backdrop-blur-sm border border-[#B07A4F]/35 px-4 py-3 rounded-sm shadow-md max-w-[200px]">
            <span className="text-[11px] text-[#B07A4F] font-semibold block mb-0.5">
              Natural materials
            </span>
            <p className="text-xs text-[#3B2417]/85 leading-snug">
              {activeSpace.materials}
            </p>
          </div>
        </div>
      </div>

      {/* 
        -------------------------------------------------------------
        Modern Interactive Project Switcher (Bottom Exhibition Strip)
        Allows visitors to preview 3 curated spaces right inside the hero!
        -------------------------------------------------------------
      */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-[#B07A4F]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Switcher Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-xs text-[#3B2417]/70 mr-2 hidden sm:inline">
            Featured spaces:
          </span>
          {heroSpaces.map((space, idx) => {
            const isSelected = activeSpaceIndex === idx;
            return (
              <button
                key={space.id}
                type="button"
                onClick={() => setActiveSpaceIndex(idx)}
                className={`min-h-[40px] px-4 py-1.5 rounded-full text-xs transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-copper ${
                  isSelected
                    ? "bg-[#3B2417] text-[#F6E7D0] border-[#3B2417] font-medium shadow-sm"
                    : "bg-[#F6E7D0] text-[#3B2417]/80 hover:text-[#3B2417] border-[#B07A4F]/30"
                }`}
                aria-label={`Preview ${space.title}`}
              >
                <span>{space.title}</span>
                <span className="ml-1.5 opacity-60 text-[11px]">({space.location})</span>
              </button>
            );
          })}
        </div>

        {/* Explore link */}
        <a
          href="#portfolio"
          className="inline-flex items-center text-xs text-[#3B2417] hover:text-[#B07A4F] transition-colors"
        >
          <span>Explore all 6 projects</span>
          <span className="ml-1.5 font-serif text-sm">→</span>
        </a>
      </div>
    </section>
  );
}
