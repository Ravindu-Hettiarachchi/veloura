"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { EASE } from "@/lib/constants";

type CategoryFilter = "All" | "Residential" | "Commercial";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  return (
    <div className="relative w-full pt-28 sm:pt-36 bg-[#1A100B] text-[#F6E7D0] pb-24 sm:pb-36">
      {/* Portfolio Header */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-16 border-b border-[#E2C196]/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs uppercase tracking-[0.28em] text-[#E2C196] mb-8">
          <span>Curated Archive</span>
          <span className="font-mono text-[11px] text-[#F6E7D0]/50 tracking-widest mt-2 sm:mt-0">
            6 MONOGRAPHS · SRI LANKA
          </span>
        </div>

        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F6E7D0] leading-[1.08]">
            Curated <span className="italic text-[#E2C196]">Works</span> &amp; Spatial Studies
          </h1>
          <p className="text-base sm:text-xl text-[#F6E7D0]/70 font-light leading-relaxed max-w-2xl">
            An exploration of residences, penthouses, and private salons across Colombo, Galle, Bentota, and Kandy.
            Each project is a bespoke study in tropical light, acoustic stillness, and honest materiality.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-12 flex items-center space-x-2 sm:space-x-4 border-t border-[#E2C196]/15 pt-8">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2C196] mr-4 hidden sm:inline-block font-sans">
            Typology:
          </span>
          {(["All", "Residential", "Commercial"] as CategoryFilter[]).map((cat) => {
            const isSelected = activeFilter === cat;
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`min-h-[44px] px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-sans font-medium transition-all duration-300 relative focus-visible:ring-2 focus-visible:ring-caramel ${
                  isSelected
                    ? "bg-[#E2C196] text-[#1A100B] font-semibold"
                    : "text-[#F6E7D0]/70 hover:text-[#F6E7D0] border border-[#E2C196]/20"
                }`}
              >
                <span>{cat}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Exhibition Grid */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pt-16">
        <m.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start min-h-[800px]"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <m.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: EASE }}
                className={`${project.spanDesktop} group relative w-full`}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="block focus-visible:ring-2 focus-visible:ring-caramel rounded-sm"
                  aria-label={`Explore case study: ${project.title}`}
                >
                  {/* Image Container */}
                  <div
                    className={`relative w-full overflow-hidden border border-[#E2C196]/20 bg-[#24160F] transition-all duration-700 ${
                      project.isArchCropped ? "rounded-t-[160px]" : "rounded-sm"
                    } h-[440px] sm:h-[520px]`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} interior design in ${project.location}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A100B]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    {/* Top Badges */}
                    <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="px-3 py-1 bg-[#1A100B]/85 backdrop-blur-sm border border-[#E2C196]/30 text-[10px] uppercase tracking-[0.2em] text-[#E2C196]">
                          {project.category}
                        </span>
                        {project.isSample && (
                          <span className="px-2.5 py-1 bg-[#24160F]/80 backdrop-blur-sm border border-[#E2C196]/20 text-[9px] uppercase tracking-wider text-[#F6E7D0]/60">
                            Concept project
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] font-mono text-[#E2C196]/80 bg-[#1A100B]/80 px-2 py-0.5 rounded-xs">
                        {project.area}
                      </span>
                    </div>

                    {/* Bottom Metadata & Hover Reveal */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-[10px] uppercase tracking-[0.25em] text-[#E2C196] mb-1 font-sans">
                        {project.location}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif text-[#F6E7D0] group-hover:text-[#E2C196] transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#F6E7D0]/70 font-light mt-2 line-clamp-2 max-w-lg leading-relaxed">
                        {project.synopsis}
                      </p>

                      <div className="mt-4 pt-3 border-t border-[#E2C196]/15 flex items-center justify-between text-xs text-[#E2C196]">
                        <span className="uppercase tracking-[0.2em] text-[10px] font-medium">
                          Read Architectural Study
                        </span>
                        <span className="font-serif text-sm">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}
          </AnimatePresence>
        </m.div>
      </section>

      {/* Bottom Architectural Note */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mt-20 text-center border-t border-[#E2C196]/15 pt-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[#E2C196]/70 mb-4">
          Private Client Commissions
        </p>
        <p className="text-sm text-[#F6E7D0]/70 max-w-xl mx-auto font-light leading-relaxed">
          Due to client discretion, select completed private residences are shared exclusively during private consultations.
        </p>
        <div className="mt-8">
          <Link
            href="/enquiry"
            className="min-h-[48px] px-8 py-3 rounded-full border border-[#E2C196]/70 text-[#E2C196] hover:bg-[#E2C196] hover:text-[#1A100B] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 inline-flex items-center"
          >
            Request Private Portfolio Review
          </Link>
        </div>
      </section>
    </div>
  );
}

