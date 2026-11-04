"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";

export function Studio() {
  return (
    <section
      id="studio"
      className="relative bg-[#F2E8DC] text-[#3B2417] py-28 sm:py-36 px-6 sm:px-12 overflow-hidden"
      aria-label="About the Studio"
    >
      {/* Low-opacity (5%) Oversized Emblem Watermark */}
      <div
        className="absolute top-1/2 -left-24 sm:-left-32 -translate-y-1/2 w-[480px] sm:w-[680px] h-[580px] sm:h-[780px] opacity-[0.05] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/brand/veloura-icon-dark.png"
          alt=""
          fill
          sizes="(max-width: 768px) 480px, 680px"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <FadeIn className="mb-14 sm:mb-20">
          <div className="flex items-center space-x-3 text-[#B07A4F]">
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold">
              01 / The Studio
            </span>
            <div className="w-16 h-[1px] bg-[#B07A4F]/40" />
          </div>
        </FadeIn>

        {/* 12-Column Split Screen Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dark-Roast Philosophy Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-medium text-[#3B2417] leading-[1.15] tracking-tight">
                Architecture conceived through stillness, crafted for longevity.
              </h2>
            </FadeIn>

            <FadeIn delay={0.25} className="mt-8 space-y-6 text-[#3B2417]/85 font-sans leading-[1.8] text-base sm:text-lg">
              <p>
                At VELOURA, we believe luxury is found not in superfluous ornamentation,
                but in the deliberate restraint of space. We treat volume, shadow,
                and daylight as primary architectural materials.
              </p>
              <p>
                Each commission begins with the intrinsic character of the site.
                From hand-quarried travertine and smoked French oak to custom forged
                bronze hardware, our materials are selected for how gracefully they age
                over decades of living.
              </p>
            </FadeIn>

            {/* Architectural Studio Pillars */}
            <FadeIn delay={0.35} className="mt-10 pt-8 border-t border-[#B07A4F]/30 grid grid-cols-2 gap-6">
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-[#3B2417]">
                  Spatial Purity
                </span>
                <span className="block mt-1 text-xs uppercase tracking-[0.2em] text-[#B07A4F] font-sans">
                  Honest Volumes
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-[#3B2417]">
                  Noble Craft
                </span>
                <span className="block mt-1 text-xs uppercase tracking-[0.2em] text-[#B07A4F] font-sans">
                  Tactile Permanence
                </span>
              </div>
            </FadeIn>

            {/* Director Signoff */}
            <FadeIn delay={0.45} className="mt-10">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-[1px] bg-[#B07A4F]" />
                <span className="font-serif italic text-lg sm:text-xl text-[#3B2417]/90">
                  Veloura Architectural Atelier
                </span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Tall Arch-Cropped Image with Overlapping Second Image */}
          <div className="lg:col-span-7 relative">
            <FadeIn delay={0.2} className="relative z-10">
              {/* Primary Tall Arch-Cropped Container */}
              <div className="group relative w-full aspect-[3/4] max-w-[520px] mx-auto lg:ml-auto rounded-t-[140px] sm:rounded-t-[220px] rounded-b-none overflow-hidden border border-[#B07A4F]/35 shadow-xl bg-[#5A3A2A]">
                <m.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  <Image
                    src="/images/studio-primary.jpg"
                    alt="Bespoke interior volume crafted with natural travertine stone by VELOURA"
                    fill
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </m.div>

                {/* Subtle Hairline Arch Inset Accent */}
                <div
                  className="absolute inset-2 sm:inset-3 rounded-t-[130px] sm:rounded-t-[208px] rounded-b-none border border-[#B07A4F]/25 pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Smaller Overlapping Second Image */}
              <m.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.2, ease: EASE, delay: 0.4 }}
                className="group relative z-20 w-48 sm:w-72 aspect-square -mt-20 sm:-mt-28 ml-4 sm:ml-8 rounded-sm overflow-hidden border border-[#B07A4F]/40 shadow-2xl bg-[#5A3A2A]"
              >
                <m.div
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  <Image
                    src="/images/studio-detail.jpg"
                    alt="Detail study of honed stone and hand-brushed bronze joinery"
                    fill
                    sizes="(max-width: 640px) 192px, 288px"
                    className="object-cover object-center"
                    loading="lazy"
                  />
                </m.div>

                {/* Editorial image label */}
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-[#24160F]/85 to-transparent text-[#F6E7D0]">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-sans">
                    Detail · Honed Stone &amp; Bronze
                  </p>
                </div>
              </m.div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
