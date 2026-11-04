"use client";

import React, { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { EASE } from "@/lib/constants";
import { FadeIn } from "@/components/motion/FadeIn";

const ALT_TEXTS: Record<string, string> = {
  "monolith-residence":
    "Living room with fluted limestone walls, warm diffused daylight, and brushed bronze details at The Monolith Residence",
  "atelier-noir":
    "Boutique jewellery gallery with blackened timber joinery, honed display plinths, and warm spot lighting at Atelier Noir",
  "solarium-villa":
    "Coastal villa interior opening to a tropical garden with lime plaster and olive wood at Solarium Villa",
  "stonebridge-apartment":
    "Dining area with monolithic travertine island and high ceilings at Stonebridge Apartment",
  "haven-penthouse":
    "Penthouse lounge wrapped in natural linen drapery and low seating with subdued views at Haven Penthouse",
  "umbra-pavilion":
    "Highland tea lounge interior featuring scorched timber joinery, dark granite, and warm low lighting at Umbra Pavilion",
};

export function Portfolio() {
  const [filter, setFilter] = useState<"All" | "Residential" | "Commercial">("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="relative bg-[#24160F] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#E2C196]/20 scroll-mt-24 sm:scroll-mt-28"
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

          {/* Filter Pills with 48px+ touch target */}
          <FadeIn delay={0.25}>
            <div
              className="flex items-center space-x-2 border border-[#E2C196]/30 rounded-full p-1.5 self-start"
              role="tablist"
              aria-label="Portfolio Category Filter"
            >
              {(["All", "Residential", "Commercial"] as const).map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={`min-h-[48px] px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] focus-visible:ring-2 focus-visible:ring-caramel ${
                    filter === cat
                      ? "bg-[#E2C196] text-[#24160F] shadow-sm font-semibold"
                      : "text-[#F6E7D0]/70 hover:text-[#E2C196]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Single Responsive List (No Duplication) with Layout Animation & Min-Height */}
        <div className="min-h-[620px] sm:min-h-[820px] lg:min-h-[1100px] transition-[min-height] duration-700">
          <m.div
            layout
            transition={{ duration: 0.8, ease: EASE }}
            className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-6 pb-6 pt-2 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-12 md:gap-8 lg:gap-12 md:overflow-visible md:pb-0"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <m.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className={`w-[85vw] max-w-[340px] flex-shrink-0 snap-center md:w-auto md:max-w-none md:flex-shrink ${project.spanDesktop} ${
                    idx % 2 === 1 ? "md:mt-12 lg:mt-20" : ""
                  }`}
                >
                  <PortfolioCard project={project} />
                </m.div>
              ))}
            </AnimatePresence>
          </m.div>

          <p className="md:hidden text-center text-[11px] uppercase tracking-[0.25em] text-[#E2C196]/60 mt-4">
            Swipe horizontally to explore commissions
          </p>
        </div>
      </div>
    </section>
  );
}

interface PortfolioCardProps {
  project: Project;
}

function PortfolioCard({ project }: PortfolioCardProps) {
  const altText =
    ALT_TEXTS[project.id] ||
    `${project.title} - ${project.category} commission in ${project.location}`;

  return (
    <article
      className={`group relative block w-full overflow-hidden border border-[#E2C196]/25 hover:border-[#E2C196]/70 transition-colors duration-500 bg-[#5A3A2A] ${
        project.isArchCropped ? "rounded-t-[100px] sm:rounded-t-[140px]" : "rounded-sm"
      }`}
    >
      {/* Fixed Aspect Ratio Image Container with Solid Background */}
      <div
        className={`relative w-full overflow-hidden bg-[#5A3A2A] ${
          project.aspectRatio === "4/5"
            ? "aspect-[4/5]"
            : project.aspectRatio === "3/4"
            ? "aspect-[3/4]"
            : "aspect-[4/3]"
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
            alt={altText}
            fill
            sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 680px"
            className="object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </m.div>

        {/* Vignette Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#24160F]/95 via-[#24160F]/30 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        {/* Arch outline hairline accent if arch-cropped */}
        {project.isArchCropped && (
          <div
            className="absolute inset-2 sm:inset-3 rounded-t-[92px] sm:rounded-t-[130px] border border-[#E2C196]/20 pointer-events-none"
            aria-hidden="true"
          />
        )}

        {/* Top Badges: Concept Project Flag (No fake years!) */}
        <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#E2C196]/90 pointer-events-none z-10">
          <span className="px-3 py-1 rounded-full bg-[#24160F]/80 backdrop-blur-xs border border-[#E2C196]/25 font-sans">
            {project.category}
          </span>
          {project.isSample && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#24160F]/80 backdrop-blur-xs border border-[#E2C196]/20 text-[10px] text-[#E2C196]/80 font-sans tracking-[0.15em]">
              Concept project
            </span>
          )}
        </div>

        {/* Bottom Clipped Mask Container */}
        <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 overflow-hidden z-20">
          {/* Title and Location sliding up from behind clipped mask: translateY 100% -> 0 in 0.7s */}
          <div className="transform transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-0 md:translate-y-full md:group-hover:translate-y-0 touch-visible">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F6E7D0] font-medium leading-tight">
              {project.title}
            </h3>

            {/* Type and location in small tracked capitals under title */}
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2C196] font-sans block mt-1.5 font-medium">
              {project.category} · {project.location}
            </span>

            <p className="mt-2.5 text-xs sm:text-sm text-[#F6E7D0]/75 line-clamp-2 font-light leading-relaxed font-sans max-w-md">
              {project.synopsis}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
