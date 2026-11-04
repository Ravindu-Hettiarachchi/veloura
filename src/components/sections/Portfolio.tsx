"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { EASE } from "@/lib/constants";

type CategoryFilter = "All" | "Residential" | "Commercial";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.category === activeFilter;
  });

  return (
    <section
      id="portfolio"
      className="relative w-full bg-[#F2E8DC] text-[#3B2417] py-28 sm:py-36 px-6 sm:px-10 lg:px-14 scroll-mt-24 border-t border-[#B07A4F]/20"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-[#B07A4F]/20">
          <div className="space-y-4 max-w-xl">
            <span className="nav-caps text-[#B07A4F] block">
              Portfolio
            </span>
            <h2 className="heading-section text-[#3B2417]">
              Selected projects
            </h2>
            <p className="text-base sm:text-lg text-[#3B2417]/80 font-normal leading-relaxed">
              A look at recent homes and commercial spaces designed across Sri Lanka.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            {(["All", "Residential", "Commercial"] as CategoryFilter[]).map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`btn-caps min-h-[44px] px-6 py-2.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-copper ${
                    isSelected
                      ? "bg-[#3B2417] text-[#F6E7D0] shadow-sm"
                      : "bg-[#F6E7D0] text-[#3B2417]/80 hover:text-[#3B2417] border border-[#B07A4F]/30"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Exhibition Cards (Fixed min-height avoids layout shift) */}
        <div className="min-h-[700px] w-full">
          <m.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <m.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className={`${project.spanDesktop} group relative w-full`}
                >
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="block focus-visible:ring-2 focus-visible:ring-copper rounded-sm"
                    aria-label={`View ${project.title}`}
                  >
                    {/* Arch-Cropped or Rectangular Image Card */}
                    <div
                      className={`relative w-full overflow-hidden border border-[#B07A4F]/30 bg-[#F6E7D0] shadow-md transition-all duration-700 ${
                        project.isArchCropped ? "rounded-t-[180px]" : "rounded-sm"
                      } h-[440px] sm:h-[500px]`}
                    >
                      {/* Image zoom on hover */}
                      <Image
                        src={project.image}
                        alt={`${project.title} in ${project.location}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                      />

                      {/* Gentle warm gradient at bottom for text contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#24160F]/85 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                      {/* Concept project label */}
                      {project.isSample && (
                        <div className="absolute top-5 left-5 z-10">
                          <span className="px-3 py-1 rounded-full bg-[#F2E8DC]/95 border border-[#B07A4F]/40 text-[11px] text-[#3B2417] font-medium shadow-sm">
                            Concept project
                          </span>
                        </div>
                      )}

                      {/* Title & Location sliding in on hover (always visible on touch) */}
                      <div className="absolute bottom-6 left-6 right-6 z-10 transform translate-y-0 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                        <span className="nav-caps text-[#E2C196] block mb-1.5">
                          {project.category} · {project.location}
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-serif text-[#F6E7D0] leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-sm text-[#F6E7D0]/80 font-normal mt-2 line-clamp-2 leading-relaxed">
                          {project.synopsis}
                        </p>
                      </div>
                    </div>
                  </Link>
                </m.div>
              ))}
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </section>
  );
}
