"use client";

import React from "react";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "An intimate dialogue exploring spatial rituals, natural daylight paths, and the unrepeatable character of your site.",
  },
  {
    num: "02",
    title: "Concept & Mood",
    desc: "Rigorous curation of tactile material palettes, volume studies, and axial sightlines before pencil meets paper.",
  },
  {
    num: "03",
    title: "Detailing",
    desc: "Exacting architectural documentation, bespoke joinery engineering, and hand-selected stone quarry provenance.",
  },
  {
    num: "04",
    title: "Delivery & Styling",
    desc: "On-site master masonry supervision, artisanal lighting calibration, textile draping, and private sensory handover.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative bg-[#24160F] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#E2C196]/20 scroll-mt-24 sm:scroll-mt-28 overflow-hidden"
      aria-label="Design Process"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center space-x-3 text-[#E2C196] mb-4">
            <span className="w-8 h-[1px] bg-[#E2C196]/40" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-medium">
              04 / Process
            </span>
            <span className="w-8 h-[1px] bg-[#E2C196]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F6E7D0] leading-tight">
            How We Work
          </h2>
          <p className="mt-5 text-[#F6E7D0]/80 font-sans text-base sm:text-lg leading-relaxed font-light">
            A methodical progression from initial resonance to timeless physical permanence.
          </p>
        </FadeIn>

        {/* Steps Grid with Connecting 1px Line */}
        <div className="relative">
          {/* Desktop Connecting 1px Line (SVG pathLength 0 -> 1, 1.6s, EASE) */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] pointer-events-none z-0">
            <svg
              viewBox="0 0 1000 2"
              fill="none"
              className="w-full h-[2px] overflow-visible"
              preserveAspectRatio="none"
            >
              <m.line
                x1="0"
                y1="1"
                x2="1000"
                y2="1"
                stroke="#E2C196"
                strokeWidth="1"
                strokeOpacity="0.35"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, ease: EASE }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <FadeIn
                key={step.num}
                delay={idx * 0.15}
                className="flex flex-col items-center text-center group"
              >
                {/* Arch Outline Marker */}
                <div className="relative w-24 h-28 flex flex-col items-center justify-between mb-8">
                  {/* Small Arch SVG Marker */}
                  <svg
                    viewBox="0 0 64 80"
                    fill="none"
                    className="w-16 h-20 text-[#E2C196]"
                  >
                    {/* Arch outline */}
                    <m.path
                      d="M2,78 L2,32 Q2,2 32,2 Q62,2 62,32 L62,78 Z"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeOpacity="0.5"
                      fill="#24160F"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1.6, ease: EASE, delay: idx * 0.15 }}
                    />
                    {/* Center pendant dot */}
                    <m.circle
                      cx="32"
                      cy="36"
                      r="3.5"
                      fill="currentColor"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.6 + idx * 0.15 }}
                    />
                  </svg>

                  {/* Step Number in Cormorant */}
                  <span className="font-serif text-lg text-[#E2C196] font-medium tracking-wider">
                    {step.num}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#F6E7D0] font-medium leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3.5 text-xs sm:text-sm text-[#F6E7D0]/70 font-sans font-light leading-relaxed max-w-xs">
                  {step.desc}
                </p>

                {/* Subtle base hairline */}
                <div className="w-8 h-[1px] bg-[#E2C196]/25 mt-6 group-hover:w-16 group-hover:bg-[#E2C196]/60 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
