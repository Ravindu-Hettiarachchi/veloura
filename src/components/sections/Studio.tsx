"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";

export function Studio() {
  return (
    <section
      id="studio"
      className="relative w-full bg-[#F6E7D0] text-[#3B2417] py-28 sm:py-36 px-6 sm:px-10 lg:px-14 scroll-mt-24 border-t border-[#B07A4F]/20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Philosophy & Story */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-8">
          <m.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="space-y-4"
          >
            <span className="nav-caps text-[#B07A4F] block">
              The studio
            </span>

            <h2 className="heading-section text-[#3B2417] text-balance">
              A design practice grounded in everyday life.
            </h2>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.15, duration: 1.2, ease: EASE }}
            className="space-y-5 text-base sm:text-lg text-[#3B2417]/85 font-normal leading-relaxed"
          >
            <p>
              Based in Colombo, VELOURA is an interior design studio led by architects and makers.
              We believe the best interiors are not staged for photos, but shaped around the way people
              actually wake up, cook, read, and gather.
            </p>
            <p>
              Our work pairs Sri Lankan craft traditions—hand-turned timber, local stone carving, and loom-woven
              textiles—with clean lines and generous natural light. We design spaces that feel quietly
              confident from day one, and continue to settle comfortably over the years.
            </p>
          </m.div>

          {/* Simple Studio Metrics / Real Facts */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.3, duration: 1.2, ease: EASE }}
            className="pt-4 border-t border-[#B07A4F]/20 grid grid-cols-2 gap-6 text-[#3B2417]"
          >
            <div>
              <span className="block text-2xl font-serif text-[#3B2417]">Colombo 07</span>
              <span className="text-xs text-[#3B2417]/70 font-normal">Our primary studio location</span>
            </div>
            <div>
              <span className="block text-2xl font-serif text-[#3B2417]">Island-wide</span>
              <span className="text-xs text-[#3B2417]/70 font-normal">Homes and boutique spaces</span>
            </div>
          </m.div>
        </div>

        {/* Right Column: Split Screen Arch Imagery */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          {/* Primary Arch Container */}
          <div className="relative w-full max-w-md h-[460px] sm:h-[560px] rounded-t-[200px] overflow-hidden border border-[#B07A4F]/30 shadow-lg bg-[#F2E8DC]">
            <Image
              src="/images/studio-primary.webp"
              alt="Plaster wall with arched niche and ceramic vessel in a VELOURA designed interior"
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-cover"
            />
          </div>

          {/* Smaller Overlapping Arch Detail Image */}
          <div className="hidden sm:block absolute -bottom-8 -left-4 sm:left-4 lg:-left-6 w-52 h-52 rounded-t-[100px] overflow-hidden border border-[#B07A4F]/40 shadow-xl z-20 bg-[#F6E7D0]">
            <Image
              src="/images/studio-detail.webp"
              alt="Smoked timber cabinet meeting smooth stone and bronze hardware"
              fill
              sizes="208px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
