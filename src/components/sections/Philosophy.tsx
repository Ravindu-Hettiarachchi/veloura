"use client";

import React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/motion/FadeIn";

const pillars = [
  {
    num: "01",
    title: "Material Honesty",
    subtitle: "Stone, Timber & Lime Plaster",
    desc: "We abstain from synthetic imitations. We specify quarried travertine, honest European oak, and breathable mineral plasters that register touch and patina with grace.",
  },
  {
    num: "02",
    title: "Quiet Volume",
    subtitle: "Spatial Breathing Room",
    desc: "Luxury is the confidence to leave space unburdened. We orchestrate architectural sightlines, ceiling heights, and recessed junctions to evoke instantaneous calm.",
  },
  {
    num: "03",
    title: "Light as Matter",
    subtitle: "Shadows, Apertures & Warmth",
    desc: "We study solar trajectories across every season. Low-glare concealed illumination and deep window reveals sculpt shadow as an emotional medium.",
  },
];

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative bg-[#5A3A2A] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#E2C196]/20 overflow-hidden"
      aria-label="Design Philosophy"
    >
      {/* Background low opacity watermark */}
      <div
        className="absolute bottom-0 right-0 w-[460px] h-[460px] opacity-[0.04] pointer-events-none select-none"
        aria-hidden="true"
      >
        <Image
          src="/brand/veloura-icon-light.png"
          alt=""
          fill
          sizes="460px"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20 sm:mb-28">
          <div className="inline-flex items-center space-x-3 text-[#E2C196] mb-4">
            <span className="w-8 h-[1px] bg-[#E2C196]/40" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-medium">
              03 / Design Ethos
            </span>
            <span className="w-8 h-[1px] bg-[#E2C196]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#F6E7D0] leading-tight">
            The Three Tenets of VELOURA
          </h2>
          <p className="mt-6 text-[#F6E7D0]/80 font-sans text-base sm:text-lg leading-relaxed font-light">
            Every private residence, gallery, and hospitality space we realize is
            anchored in an uncompromising architectural discipline.
          </p>
        </FadeIn>

        {/* 3 Pillars Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {pillars.map((pillar, idx) => (
            <FadeIn
              key={pillar.num}
              delay={idx * 0.15}
              className="relative p-8 sm:p-10 rounded-sm border border-[#E2C196]/20 bg-[#24160F]/30 backdrop-blur-xs flex flex-col justify-between hover:border-[#E2C196]/50 transition-colors duration-500"
            >
              <div>
                <div className="flex items-baseline justify-between border-b border-[#E2C196]/20 pb-4 mb-6">
                  <span className="font-serif text-3xl text-[#E2C196] font-light">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#E2C196]/70 font-sans">
                    Tenet
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#F6E7D0] font-medium leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-[#E2C196]/80 font-sans mt-1">
                  {pillar.subtitle}
                </p>

                <p className="mt-6 text-sm text-[#F6E7D0]/75 font-sans leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>

              {/* Bottom Hairline Detail */}
              <div className="mt-8 pt-4 flex items-center justify-between text-[#E2C196]/50 text-[10px] font-mono">
                <span>VELOURA · ATELIER</span>
                <span className="w-6 h-[1px] bg-[#E2C196]/30" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
