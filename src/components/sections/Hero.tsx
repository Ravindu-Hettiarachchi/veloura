"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/constants";

const folioRooms = [
  {
    id: "living",
    title: "Living & Light",
    subtitle: "The Monolith Residence",
    location: "Colombo 07",
    materials: "Honed limestone & linen",
    image: "/images/hero.webp",
    aspect: "col-span-12 lg:col-span-6",
    isCenter: true,
  },
  {
    id: "joinery",
    title: "Craft & Detail",
    subtitle: "Smoked Teak & Bronze",
    location: "Studio joinery",
    materials: "Hand-finished local timber",
    image: "/images/studio-detail.webp",
    aspect: "col-span-6 lg:col-span-3",
    isCenter: false,
  },
  {
    id: "veranda",
    title: "Air & Veranda",
    subtitle: "Solarium Villa",
    location: "Bentota",
    materials: "Lime plaster & open cane",
    image: "/images/portfolio-3.webp",
    aspect: "col-span-6 lg:col-span-3",
    isCenter: false,
  },
];

export function Hero() {
  const [activeRoom, setActiveRoom] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Cord lengthens naturally as user scrolls through the hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const cordScaleY = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100svh] bg-[#F2E8DC] text-[#3B2417] flex flex-col justify-between pt-28 sm:pt-32 pb-10 sm:pb-14 px-6 sm:px-10 lg:px-14 overflow-hidden border-b border-[#B07A4F]/20"
    >
      {/* 
        -----------------------------------------------------------------
        Pendant Cord & Glowing Brass Lamp (Brand Signature)
        Suspended directly from the top, aligned with the central portal
        -----------------------------------------------------------------
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
        {/* 1px cord that lengthens on scroll */}
        <m.div
          style={{
            scaleY: cordScaleY,
            transformOrigin: "top",
          }}
          className="w-[1px] h-24 sm:h-32 bg-[#B07A4F]"
        />

        {/* Lamp Circle & Soft Caramel Glow */}
        <div className="relative -mt-1 flex items-center justify-center">
          {/* Caramel glow fading in on load */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 2.2, ease: EASE }}
            className="absolute w-16 h-16 rounded-full bg-[#E2C196]/60 blur-md pointer-events-none"
          />

          {/* Delicate outer brass ring */}
          <div className="w-6 h-6 rounded-full border border-[#B07A4F] flex items-center justify-center bg-[#F2E8DC] shadow-sm">
            {/* Solid lamp bead */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#B07A4F]" />
          </div>
        </div>
      </div>

      {/* 
        -----------------------------------------------------------------
        1. Top Editorial Masthead (Airy, Generous, Monograph Style)
        -----------------------------------------------------------------
      */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#3B2417]/80 pb-6 border-b border-[#B07A4F]/20 gap-3">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 rounded-full bg-[#B07A4F]" />
          <span className="nav-caps text-[#B07A4F]">VELOURA</span>
          <span className="text-[#B07A4F]/40">·</span>
          <span>Interior Design &amp; Architecture</span>
        </div>

        <div className="flex items-center space-x-6 text-xs text-[#3B2417]/70">
          <span>Colombo 07, Sri Lanka</span>
          <span className="hidden sm:inline text-[#B07A4F]/40">·</span>
          <span className="hidden sm:inline">Homes &amp; Commercial Spaces</span>
        </div>
      </div>

      {/* 
        -----------------------------------------------------------------
        2. Editorial Headline Spread (Artistic & Spacious)
        -----------------------------------------------------------------
      */}
      <div className="max-w-7xl mx-auto w-full pt-8 pb-6 sm:py-8 text-center">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <h1 className="heading-hero text-[#3B2417] text-balance">
            Rooms that feel calm the moment you walk in.
          </h1>

          <p className="text-base sm:text-lg text-[#3B2417]/80 font-normal max-w-2xl mx-auto leading-relaxed">
            VELOURA designs homes and small commercial spaces across Sri Lanka. We build with teak,
            limestone, brass, and linen—materials that feel good to live with and grow better with time.
          </p>
        </m.div>
      </div>

      {/* 
        -----------------------------------------------------------------
        3. Modern Architectural Spatial Folio (The Centerpiece)
        An interactive, asymmetrical 3-panel exhibition spread
        -----------------------------------------------------------------
      */}
      <div className="max-w-7xl mx-auto w-full my-auto py-4 sm:py-6">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-end">
          {/* Left Wing: Joinery & Tactile Craft Detail */}
          <m.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: EASE }}
            className="hidden lg:block lg:col-span-3 space-y-3 group cursor-pointer"
            onClick={() => setActiveRoom(1)}
          >
            <div className="relative w-full h-[380px] rounded-t-[140px] overflow-hidden border border-[#B07A4F]/35 shadow-md bg-[#F6E7D0] transition-all duration-700 group-hover:border-[#3B2417]">
              <Image
                src="/images/studio-detail.webp"
                alt="Smoked teak cabinetry and bronze joinery detail by VELOURA"
                fill
                sizes="(max-width: 1200px) 25vw, 300px"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#F2E8DC]/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="pt-1 flex items-baseline justify-between text-xs">
              <span className="font-serif text-base text-[#3B2417]">Smoked Teak &amp; Bronze</span>
              <span className="text-[11px] text-[#B07A4F]">Craft detail</span>
            </div>
          </m.div>

          {/* Center Main Arch Portal (The Grand Architectural Viewport) */}
          <m.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 1.2, ease: EASE }}
            className="col-span-12 lg:col-span-6 space-y-4"
          >
            {/* The Tall Arch Window */}
            <div className="relative w-full h-[440px] sm:h-[520px] lg:h-[560px] rounded-t-[240px] overflow-hidden border border-[#B07A4F]/40 shadow-2xl bg-[#F6E7D0]">
              <Image
                src="/images/hero.webp"
                alt="Bright, warm living room with arched doorway, linen sofa, and limestone in Colombo"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* "Lights on" moment on load: espresso overlay starts at 65% opacity and fades to 0 over 2.2s */}
              <m.div
                initial={{ opacity: 0.65 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 2.2, ease: EASE }}
                className="absolute inset-0 bg-[#24160F] pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating Architectural Location Pill */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F2E8DC]/95 backdrop-blur-sm border border-[#B07A4F]/40 text-xs text-[#3B2417] font-medium shadow-sm">
                  The Monolith Residence · Colombo 07
                </span>

                <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-[#F6E7D0]/90 backdrop-blur-sm border border-[#B07A4F]/30 text-[11px] text-[#3B2417]/80">
                  Honed limestone &amp; linen
                </span>
              </div>
            </div>
          </m.div>

          {/* Right Wing: Veranda & Natural Air Flow */}
          <m.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: EASE }}
            className="hidden lg:block lg:col-span-3 space-y-3 group cursor-pointer"
            onClick={() => setActiveRoom(2)}
          >
            <div className="relative w-full h-[380px] rounded-t-[140px] overflow-hidden border border-[#B07A4F]/35 shadow-md bg-[#F6E7D0] transition-all duration-700 group-hover:border-[#3B2417]">
              <Image
                src="/images/portfolio-3.webp"
                alt="Coastal veranda with lime plaster and pivoting teak portals in Bentota"
                fill
                sizes="(max-width: 1200px) 25vw, 300px"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#F2E8DC]/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="pt-1 flex items-baseline justify-between text-xs">
              <span className="font-serif text-base text-[#3B2417]">Solarium Villa</span>
              <span className="text-[11px] text-[#B07A4F]">Bentota</span>
            </div>
          </m.div>
        </div>
      </div>

      {/* 
        -----------------------------------------------------------------
        4. Bottom Architectural Colophon & Seamless Discovery Links
        (Replaces typical CTA pill buttons with editorial prompts)
        -----------------------------------------------------------------
      */}
      <div className="max-w-7xl mx-auto w-full pt-6 border-t border-[#B07A4F]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#3B2417]">
        {/* Quick Discovery Navigation */}
        <div className="flex items-center space-x-6">
          <a
            href="#portfolio"
            className="btn-caps inline-flex items-center px-6 py-2.5 rounded-full bg-[#3B2417] text-[#F6E7D0] hover:bg-[#5A3A2A] transition-all duration-300 shadow-sm focus-visible:ring-2 focus-visible:ring-copper"
          >
            <span>View selected projects</span>
            <span className="ml-2 font-serif text-sm">↓</span>
          </a>

          <a
            href="#studio"
            className="btn-caps inline-flex items-center py-2 text-[#3B2417]/85 hover:text-[#B07A4F] border-b border-[#B07A4F]/40 transition-colors"
          >
            <span>About the studio</span>
            <span className="ml-2 font-serif text-sm">→</span>
          </a>
        </div>

        {/* Architectural Material Summary */}
        <div className="text-center sm:text-right text-xs text-[#3B2417]/75">
          <span className="text-[#B07A4F] font-medium mr-1.5">Materials:</span>
          <span>Plantation teak · Honed limestone · Unlacquered brass · Raw linen</span>
        </div>
      </div>
    </section>
  );
}
