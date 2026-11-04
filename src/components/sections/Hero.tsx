"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { EASE } from "@/lib/constants";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  // Cord lengthens slightly as visitor scrolls through the hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const cordScaleY = useTransform(scrollYProgress, [0, 1], [1, 1.45]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[100svh] bg-[#F2E8DC] text-[#3B2417] flex flex-col justify-center pt-28 pb-16 sm:py-32 px-6 sm:px-10 lg:px-14 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column on Desktop / Ordered 1 on Mobile */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8 z-10 order-1 lg:order-1">
          <m.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease: EASE }}
            className="space-y-4"
          >
            <span className="nav-caps text-[#B07A4F] block">
              Interior Design Studio · Colombo
            </span>

            <h1 className="heading-hero text-[#3B2417] text-balance">
              Rooms that feel calm the moment you walk in.
            </h1>
          </m.div>

          <m.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: EASE }}
            className="text-base sm:text-lg text-[#3B2417]/80 font-normal leading-relaxed max-w-xl"
          >
            VELOURA designs homes and small commercial spaces across Sri Lanka. We build with teak,
            limestone, brass, and linen—materials that feel good to live with and grow better with time.
          </m.p>

          {/* Desktop Buttons (Order 3 on mobile) */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: EASE }}
            className="hidden sm:flex flex-wrap items-center gap-4 pt-2"
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

        {/* Right Column: Tall Arch-Shaped Window (45% width on desktop) */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-2 lg:order-2">
          {/* Hanging Pendant Light Cord above the arch */}
          <div className="absolute -top-24 sm:-top-32 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
            {/* Cord that lengthens slightly on scroll */}
            <m.div
              style={{
                scaleY: cordScaleY,
                transformOrigin: "top",
              }}
              className="w-[1px] h-28 sm:h-36 bg-[#B07A4F]"
            />

            {/* Pendant Lamp Circle with Warm Glow Fade-in */}
            <div className="relative -mt-1 flex items-center justify-center">
              {/* Soft Caramel Glow behind lamp */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 2.2, ease: EASE }}
                className="absolute w-12 h-12 rounded-full bg-[#E2C196]/45 blur-md pointer-events-none"
              />

              {/* Outer delicate ring */}
              <div className="w-6 h-6 rounded-full border border-[#B07A4F] flex items-center justify-center bg-[#F2E8DC]">
                {/* Solid inner lamp bead */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#B07A4F]" />
              </div>
            </div>
          </div>

          {/* Tall Arch Window (Rounded top, flat bottom, no dark overlay) */}
          <div className="relative w-full max-w-md sm:max-w-lg h-[460px] sm:h-[580px] lg:h-[620px] rounded-t-[220px] overflow-hidden border border-[#B07A4F]/30 shadow-xl bg-[#F6E7D0]">
            <Image
              src="/images/hero.webp"
              alt="Bright, warm living room with arched doorway, linen sofa, and natural light designed by VELOURA"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 48vw"
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
          </div>

          {/* Mobile Buttons (Rendered below the arch on phones) */}
          <div className="flex sm:hidden flex-col w-full gap-3 pt-6 order-3">
            <a
              href="#portfolio"
              className="btn-caps w-full min-h-[48px] py-3.5 inline-flex items-center justify-center rounded-full bg-[#3B2417] text-[#F6E7D0] shadow-sm text-center"
            >
              View projects
            </a>
            <a
              href="#studio"
              className="btn-caps w-full min-h-[48px] py-3.5 inline-flex items-center justify-center rounded-full border border-[#B07A4F]/60 text-[#3B2417] text-center"
            >
              About the studio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
