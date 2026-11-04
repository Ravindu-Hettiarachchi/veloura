"use client";

import React, { useState } from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { EASE } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";

export function Portfolio() {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial">("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="relative bg-[#24160F] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#E2C196]/20"
      aria-label="Curated Portfolio"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-8">
          <div>
            <FadeIn>
              <div className="flex items-center space-x-3 text-[#E2C196]">
                <span className="text-xs uppercase tracking-[0.25em] font-sans font-medium">
                  02 / Curated Portfolio
                </span>
                <div className="w-16 h-[1px] bg-[#E2C196]/30" />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#F6E7D0]">
                Selected Commissions
              </h2>
            </FadeIn>
          </div>

          {/* Filter Pills */}
          <FadeIn delay={0.25}>
            <div
              className="flex items-center space-x-2 border border-[#E2C196]/30 rounded-full p-1 self-start"
              role="tablist"
              aria-label="Portfolio Category Filter"
            >
              {(["All", "Residential", "Commercial"] as const).map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    filter === cat
                      ? "bg-[#E2C196] text-[#24160F] shadow-sm"
                      : "text-[#F6E7D0]/70 hover:text-[#E2C196]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Desktop View: Asymmetrical 12-Column Grid */}
        <div className="hidden md:grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`${project.spanDesktop} ${
                idx % 2 === 1 ? "md:mt-12 lg:mt-20" : ""
              }`}
            >
              <PortfolioCard project={project} index={idx} />
            </div>
          ))}
        </div>

        {/* Mobile View: Horizontal Scroll-Snap Carousel */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 scroll-smooth focus:outline-none [-webkit-overflow-scrolling:touch]">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="w-[85vw] max-w-[340px] flex-shrink-0 snap-center"
              >
                <PortfolioCard project={project} index={idx} isMobile />
              </div>
            ))}
          </div>

          <p className="text-center text-[11px] uppercase tracking-[0.25em] text-[#E2C196]/60 mt-4">
            Swipe horizontally to explore commissions
          </p>
        </div>
      </div>
    </section>
  );
}

interface PortfolioCardProps {
  project: Project;
  index: number;
  isMobile?: boolean;
}

function PortfolioCard({ project, index, isMobile = false }: PortfolioCardProps) {
  return (
    <FadeIn delay={isMobile ? 0 : (index % 2) * 0.15}>
      <article
        className={`group relative block w-full overflow-hidden border border-[#E2C196]/25 hover:border-[#E2C196]/70 transition-colors duration-500 bg-[#5A3A2A] ${
          project.isArchCropped ? "rounded-t-[100px] sm:rounded-t-[140px]" : "rounded-sm"
        }`}
      >
        {/* Fixed Aspect Ratio Image Container */}
        <div
          className={`relative w-full overflow-hidden ${
            project.aspectRatio === "4/5" ? "aspect-[4/5]" : "aspect-[3/2]"
          }`}
        >
          {/* Inner Image Hover Zoom: 1 -> 1.05 over 0.8s */}
          <m.div
            className="w-full h-full relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <Image
              src={project.image}
              alt={`${project.title} - ${project.location}`}
              fill
              sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 680px"
              className="object-cover object-center"
              loading="lazy"
            />
          </m.div>

          {/* Vignette Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#24160F]/90 via-[#24160F]/20 to-transparent pointer-events-none" />

          {/* Arch outline hairline accent if arch-cropped */}
          {project.isArchCropped && (
            <div
              className="absolute inset-2 sm:inset-3 rounded-t-[92px] sm:rounded-t-[130px] border border-[#E2C196]/20 pointer-events-none"
              aria-hidden="true"
            />
          )}

          {/* Top Badge: Category & Year */}
          <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#E2C196]/90 pointer-events-none z-10">
            <span className="px-3 py-1 rounded-full bg-[#24160F]/70 backdrop-blur-sm border border-[#E2C196]/25">
              {project.category}
            </span>
            <span className="font-mono text-[10px] text-[#F6E7D0]/70">
              {project.year}
            </span>
          </div>

          {/* Bottom Clipped Mask Container */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 overflow-hidden z-20">
            {/* Title & Location sliding up from behind clipped mask: translateY 100% -> 0 in 0.7s */}
            <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-0 md:translate-y-full md:group-hover:translate-y-0 touch-visible">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2C196] font-sans block mb-1">
                {project.location}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F6E7D0] font-medium leading-tight">
                {project.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#F6E7D0]/75 line-clamp-2 font-light leading-relaxed font-sans max-w-md">
                {project.synopsis}
              </p>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
