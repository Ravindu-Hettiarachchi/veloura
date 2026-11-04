"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";

const materialsList = [
  {
    name: "Plantation teak",
    source: "Southern Sri Lanka",
    description: "A durable native hardwood with a warm honey tone that deepens gracefully and stands up to coastal humidity.",
    image: "/images/ethos-1.webp",
  },
  {
    name: "Honed limestone",
    source: "Quarried stone blocks",
    description: "Smooth, matte stone slabs that stay naturally cool underfoot and soften bright equatorial daylight.",
    image: "/images/studio-primary.webp",
  },
  {
    name: "Unlacquered brass",
    source: "Hand-cast metalwork",
    description: "Living hardware for handles and lights that slowly gains warmth and character with everyday touch.",
    image: "/images/studio-detail.webp",
  },
  {
    name: "Natural raw linen",
    source: "Open-weave flax",
    description: "Breathable curtains and slipcovers that gently filter direct sun while keeping ocean breezes moving.",
    image: "/images/ethos-3.webp",
  },
];

export function Materials() {
  return (
    <section
      id="materials"
      className="relative w-full bg-[#5A3A2A] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-10 lg:px-14 scroll-mt-24 border-t border-[#E2C196]/20"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <m.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="nav-caps text-[#E2C196] block"
          >
            Material palette
          </m.span>

          <m.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 1.2, ease: EASE }}
            className="heading-section text-[#F6E7D0]"
          >
            Materials you want to touch.
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2, duration: 1.2, ease: EASE }}
            className="text-base sm:text-lg text-[#F6E7D0]/80 font-normal leading-relaxed"
          >
            We choose simple, natural materials that feel grounded and age gracefully in our climate.
            No artificial laminates, no painted veneers.
          </m.p>
        </div>

        {/* 4 Solid Material Cards (Not glassy, not translucent) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {materialsList.map((item, idx) => (
            <m.div
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.1 * idx, duration: 1.2, ease: EASE }}
              className="bg-[#24160F] border border-[#E2C196]/25 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-[#E2C196] transition-colors duration-500 shadow-md"
            >
              <div className="relative w-full h-48 overflow-hidden bg-[#3B2417]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif text-[#F6E7D0] mb-1">
                    {item.name}
                  </h3>
                  <span className="text-xs text-[#E2C196]/80 block mb-2">
                    {item.source}
                  </span>
                  <p className="text-sm text-[#F6E7D0]/75 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
