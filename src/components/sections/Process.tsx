"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We meet at your property to understand how you live, your budget, and what you want from each room.",
    image: "/images/process-1.webp",
  },
  {
    number: "02",
    title: "Concept and mood",
    description: "We present hand-selected material samples, spatial layouts, and 3D views so you can visualize the finished home.",
    image: "/images/process-2.webp",
  },
  {
    number: "03",
    title: "Detailing",
    description: "We produce technical joinery drawings, lighting schedules, and exact specifications for builders and makers.",
    image: "/images/process-3.webp",
  },
  {
    number: "04",
    title: "Delivery and styling",
    description: "We supervise on-site building work, install custom furniture, and style the space ready for you to move in.",
    image: "/images/process-4.webp",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative w-full bg-[#24160F] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-10 lg:px-14 scroll-mt-24 border-t border-[#E2C196]/20"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="max-w-xl space-y-4">
          <m.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="nav-caps text-[#E2C196] block"
          >
            Process
          </m.span>

          <m.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.1, duration: 1.2, ease: EASE }}
            className="heading-section text-[#F6E7D0]"
          >
            How we work
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: 0.2, duration: 1.2, ease: EASE }}
            className="text-base sm:text-lg text-[#F6E7D0]/80 font-normal leading-relaxed"
          >
            A calm, step-by-step path from your initial ideas to a finished space.
          </m.p>
        </div>

        {/* Four Connected Steps with SVG Arch Markers & Connecting Line */}
        <div className="relative">
          {/* 1px SVG Line Drawing in on Scroll across desktop */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 z-0 pointer-events-none" aria-hidden="true">
            <svg width="100%" height="2" viewBox="0 0 1000 2" fill="none" preserveAspectRatio="none">
              <m.line
                x1="0"
                y1="1"
                x2="1000"
                y2="1"
                stroke="#E2C196"
                strokeWidth="1"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.6, ease: EASE }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <m.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: 0.12 * idx, duration: 1.2, ease: EASE }}
                className="space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Small Arch Outline Marker */}
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-14 rounded-t-full border border-[#E2C196] flex flex-col items-center justify-center bg-[#24160F] shadow-sm">
                      <span className="text-xs font-serif text-[#E2C196]">{step.number}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E2C196] mt-0.5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif text-[#F6E7D0]">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#F6E7D0]/75 font-normal leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arch-Cropped Photo Thumbnail */}
                <div className="relative w-full h-44 rounded-t-[70px] overflow-hidden border border-[#E2C196]/20 bg-[#5A3A2A]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
