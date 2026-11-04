"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";
import { projects } from "@/data/projects";
import { ArchDivider } from "@/components/ui/ArchDivider";

const selectedProjects = projects.slice(0, 3);

const signatureMaterials = [
  {
    name: "Honed Silver Travertine",
    origin: "Tivoli Quarry, Vein-Cut",
    description: "Open-pore sedimentary limestone offering cool acoustic density and light diffusion.",
    texture: "Tactile matte finish with subtle linear stratification",
  },
  {
    name: "Smoked Jackfruit Timber",
    origin: "Southern Highlands, Sri Lanka",
    description: "Dense indigenous timber subjected to artisanal smoking, revealing dark roast ochre tones.",
    texture: "Deep open-grain oil finish with velvety hand-feel",
  },
  {
    name: "Patinated Brushed Bronze",
    origin: "Artisanal Foundry Cast",
    description: "Living alloy that evolves gently with equatorial humidity, deepening from copper to umber.",
    texture: "Hand-brushed directional grain with unlacquered luster",
  },
  {
    name: "Raw Belgian Linen",
    origin: "Flanders, Heavy-Weft Loom",
    description: "Unbleached natural flax woven into billowing drapery that softens intense tropical glare.",
    texture: "Crisp slub texture with fluid sculptural drape",
  },
];

export default function Home() {
  const [activeMaterial, setActiveMaterial] = useState(0);

  return (
    <div className="relative w-full">
      {/* 1. HERO SECTION (Espresso #1A100B) */}
      <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-32 pb-16 px-6 sm:px-12 bg-[#1A100B] overflow-hidden">
        {/* Subtle Background Photography with Zoom Settle */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <m.div
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: 7, ease: EASE }}
            className="relative w-full h-full"
          >
            <picture>
              <source media="(max-width: 640px)" srcSet="/images/hero-mobile.webp" />
              <img
                src="/images/hero.webp"
                alt="VELOURA minimal luxury living room at golden hour with fluted limestone and arched portal"
                className="w-full h-full object-cover object-center opacity-35"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A100B] via-[#1A100B]/60 to-[#1A100B]/80" />
          </m.div>
        </div>

        {/* Delicate Pendant Light Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex flex-col items-center">
          <svg width="2" height="120" viewBox="0 0 2 120" fill="none">
            <m.line
              x1="1"
              y1="0"
              x2="1"
              y2="120"
              stroke="#E2C196"
              strokeWidth="1"
              strokeOpacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.2, ease: EASE }}
            />
          </svg>
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.8, ease: EASE }}
            className="w-2.5 h-2.5 rounded-full bg-[#E2C196] shadow-[0_0_15px_#E2C196]"
          />
        </div>

        {/* Hero Top Subtitle & Coordinates */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between text-xs uppercase tracking-[0.28em] text-[#E2C196]/80 pt-4 gap-2">
          <span>Atelier of Architectural Interiors</span>
          <span className="font-mono text-[11px] text-[#F6E7D0]/50 tracking-widest">
            06° 54&apos; N · 79° 52&apos; E · COLOMBO
          </span>
        </div>

        {/* Hero Main Typography Spread */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
          <m.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: EASE }}
            className="max-w-4xl"
          >
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-[#E2C196] font-medium mb-6">
              Spatial Poetics & Monolithic Form
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-[#F6E7D0] leading-[1.04] tracking-tight">
              Architecture of <span className="italic font-light text-[#E2C196]">Silence</span> &amp; Raw Mass
            </h1>
            <p className="mt-8 text-base sm:text-lg text-[#F6E7D0]/70 font-light max-w-2xl leading-relaxed">
              We design private sanctuaries and gallery interiors defined by architectural stillness,
              tactile materials, and unhurried natural light.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                href="/portfolio"
                className="min-h-[52px] px-8 py-3.5 inline-flex items-center justify-center rounded-full bg-[#E2C196] text-[#1A100B] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-cream transition-all duration-500 active:scale-98 shadow-xl focus-visible:ring-2 focus-visible:ring-caramel"
              >
                Curated Works
              </Link>
              <Link
                href="/studio"
                className="min-h-[52px] px-8 py-3.5 inline-flex items-center justify-center rounded-full border border-[#E2C196]/50 text-[#F6E7D0] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:border-[#E2C196] hover:text-[#E2C196] transition-all duration-500 focus-visible:ring-2 focus-visible:ring-caramel"
              >
                The Atelier &amp; Ethos
              </Link>
            </div>
          </m.div>
        </div>

        {/* Hero Footer Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-end justify-between border-t border-[#E2C196]/15 pt-6 text-xs text-[#F6E7D0]/60">
          <span className="tracking-[0.2em] uppercase">Private Residences · Cultural Salons</span>
          <div className="flex items-center space-x-2">
            <span className="tracking-[0.2em] uppercase text-[10px]">Scroll</span>
            <div className="w-8 h-[1px] bg-[#E2C196]/60" />
          </div>
        </div>
      </section>

      {/* 2. MANIFESTO & PHILOSOPHY SECTION (Warm Latte #F2E8DC) */}
      <section className="relative bg-[#F2E8DC] text-[#3B2417] py-28 sm:py-36 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Monograph Text */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-[0.28em] text-[#B07A4F] font-semibold">
                01 / The Manifesto
              </span>
              <div className="h-[1px] w-12 bg-[#B07A4F]/40" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#3B2417] leading-[1.12]">
              Spaces that breathe with <span className="italic font-light">monumental</span> calm.
            </h2>

            <p className="text-base sm:text-lg text-[#3B2417]/85 font-sans leading-relaxed font-light">
              Rooted in Sri Lanka&apos;s rich tradition of tropical modernism and fused with the rigorous
              restraint of European minimalism, VELOURA sculpts volumes that reject temporary trends.
              We believe true luxury is acoustic silence, deliberate shadow, and materials that grow more
              dignified as decades pass.
            </p>

            <blockquote className="border-l border-[#B07A4F] pl-6 py-1 italic font-serif text-lg text-[#3B2417]/90">
              &ldquo;We do not merely furnish an interior; we choreograph how natural light enters,
              how sound settles, and how stone touches skin.&rdquo;
            </blockquote>

            <div className="pt-4">
              <Link
                href="/studio"
                className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-[#3B2417] font-medium border-b border-[#3B2417]/50 pb-1.5 hover:border-[#B07A4F] hover:text-[#B07A4F] transition-all duration-300"
              >
                <span>Explore Our Studio Heritage &amp; Tenets</span>
                <span className="ml-3 font-serif text-sm">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Arch Photography Spread */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Primary Arch Frame */}
            <div className="relative w-full max-w-md h-[460px] sm:h-[560px] rounded-t-[200px] overflow-hidden border border-[#B07A4F]/25 shadow-2xl group">
              <Image
                src="/images/studio-primary.webp"
                alt="Plaster wall with arch niche framing a sculptural ceramic vase at VELOURA studio"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
              />
            </div>

            {/* Overlapping Detail Frame */}
            <div className="hidden sm:block absolute -bottom-8 -left-6 w-52 h-52 rounded-t-[100px] overflow-hidden border border-[#B07A4F]/40 shadow-2xl z-20 bg-[#F2E8DC]">
              <Image
                src="/images/studio-detail.webp"
                alt="Smoked oak millwork meeting brushed bronze handle detail"
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED COMMISSIONS (Espresso #1A100B) */}
      <section className="relative bg-[#1A100B] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#E2C196]/15">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-8 border-b border-[#E2C196]/15 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] text-[#E2C196] font-semibold block mb-3">
                02 / Selected Works
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F6E7D0]">
                Curated Architectural Sanctuaries
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-[#E2C196] hover:text-[#F6E7D0] transition-colors pb-1 border-b border-[#E2C196]/40"
            >
              <span>View All 6 Concept Works</span>
              <span className="ml-2 font-serif">→</span>
            </Link>
          </div>

          {/* Asymmetrical Editorial Projects Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {selectedProjects.map((project, idx) => {
              const isLarge = idx === 0;
              const spanClass = isLarge ? "lg:col-span-7" : idx === 1 ? "lg:col-span-5" : "lg:col-span-12";

              return (
                <div key={project.id} className={`${spanClass} group relative`}>
                  <Link href={`/portfolio/${project.slug}`} className="block focus-visible:ring-2 focus-visible:ring-caramel rounded-sm">
                    <div
                      className={`relative w-full overflow-hidden border border-[#E2C196]/20 bg-[#24160F] transition-all duration-700 ${
                        project.isArchCropped ? "rounded-t-[160px]" : ""
                      } ${isLarge ? "h-[480px] sm:h-[620px]" : idx === 1 ? "h-[420px] sm:h-[480px]" : "h-[420px] sm:h-[500px]"}`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.location}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A100B]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                      {/* Editorial Overlay Labels */}
                      <div className="absolute top-6 left-6 flex items-center space-x-3">
                        <span className="px-3 py-1 bg-[#1A100B]/80 backdrop-blur-sm border border-[#E2C196]/30 text-[10px] uppercase tracking-[0.2em] text-[#E2C196]">
                          {project.category}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#F6E7D0]/70">
                          {project.location}
                        </span>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-serif text-[#F6E7D0] group-hover:text-[#E2C196] transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-xs text-[#F6E7D0]/70 font-light mt-1 max-w-md line-clamp-1">
                            {project.subtitle}
                          </p>
                        </div>
                        <span className="text-xs uppercase tracking-[0.2em] text-[#E2C196] font-medium hidden sm:inline-flex items-center">
                          View Study <span className="ml-1 font-serif text-sm">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. TACTILE MATERIAL ARCHIVE TEASER (Espresso #24160F) */}
      <section className="relative bg-[#24160F] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#E2C196]/15">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase tracking-[0.28em] text-[#E2C196] font-semibold block mb-3">
              03 / Materiality Archive
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F6E7D0]">
              The Language of Unvarnished Substance
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#F6E7D0]/70 font-light leading-relaxed">
              We reject imitation finishes and synthetic veneers. Every project is anchored by a restrained
              palette of honest materials that absorb the light of the tropics and age with quiet dignity.
            </p>
          </div>

          {/* Interactive Material Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {signatureMaterials.map((mat, i) => {
              const isSelected = activeMaterial === i;
              return (
                <button
                  key={mat.name}
                  type="button"
                  onClick={() => setActiveMaterial(i)}
                  className={`text-left p-6 sm:p-8 rounded-sm border transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isSelected
                      ? "bg-[#5A3A2A]/40 border-[#E2C196] shadow-xl"
                      : "bg-[#1A100B]/50 border-[#E2C196]/20 hover:border-[#E2C196]/50"
                  }`}
                >
                  <span className="text-[10px] font-mono text-[#E2C196] block mb-2">
                    MAT · 0{i + 1}
                  </span>
                  <h4 className="font-serif text-lg text-[#F6E7D0] mb-1">{mat.name}</h4>
                  <span className="text-[11px] uppercase tracking-wider text-[#E2C196]/70 block mb-4">
                    {mat.origin}
                  </span>
                  <p className="text-xs text-[#F6E7D0]/65 leading-relaxed font-light">
                    {mat.description}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/studio"
              className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-[#E2C196] hover:text-[#F6E7D0] border-b border-[#E2C196]/40 pb-1"
            >
              <span>Explore Complete Material Archive &amp; Origins</span>
              <span className="ml-2 font-serif">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. PROCESS CADENCE TEASER (Warm Latte #F2E8DC) */}
      <section className="relative bg-[#F2E8DC] text-[#3B2417] py-28 sm:py-36 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-16">
          <div className="max-w-xl space-y-6">
            <span className="text-xs uppercase tracking-[0.28em] text-[#B07A4F] font-semibold">
              04 / Architectural Cadence
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#3B2417] leading-tight">
              From Initial Dialogue to Atmospheric Handover
            </h2>
            <p className="text-sm sm:text-base text-[#3B2417]/80 font-light leading-relaxed">
              Our 4-phase methodology guarantees complete clarity, from solar angle analysis and material
              schedules to turnkey fabrication by master craftsmen.
            </p>
            <div className="pt-2">
              <Link
                href="/process"
                className="min-h-[48px] px-8 py-3 inline-flex items-center justify-center rounded-full bg-[#3B2417] text-[#F2E8DC] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#B07A4F] transition-all duration-300"
              >
                Inspect The 4 Phases
              </Link>
            </div>
          </div>

          {/* Quick Steps Monograph List */}
          <div className="space-y-4 max-w-md w-full border-t border-[#B07A4F]/30 pt-4">
            {[
              { num: "01", title: "The Dialogue & Site Poetics", duration: "Weeks 1–3" },
              { num: "02", title: "Spatial Anatomy & Material Mood", duration: "Weeks 4–7" },
              { num: "03", title: "Bespoke Detailing & Engineering", duration: "Weeks 8–12" },
              { num: "04", title: "Artisanal Fabrication & Handover", duration: "Execution" },
            ].map((step) => (
              <div key={step.num} className="flex items-center justify-between py-3 border-b border-[#B07A4F]/20 text-sm">
                <div className="flex items-center space-x-4">
                  <span className="font-mono text-xs text-[#B07A4F] font-medium">{step.num}</span>
                  <span className="font-serif text-[#3B2417] text-base">{step.title}</span>
                </div>
                <span className="text-xs text-[#3B2417]/60 font-mono tracking-wider">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRIVATE CONSULTATION BANNER (Espresso #1A100B) */}
      <section className="relative bg-[#1A100B] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 text-center border-t border-[#E2C196]/20">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E2C196] font-semibold">
            Private Commissions
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F6E7D0] leading-tight">
            Begin a Dialogue with our <span className="italic text-[#E2C196]">Principal Atelier</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F6E7D0]/70 font-light leading-relaxed max-w-xl mx-auto">
            We accept a limited number of bespoke residential and boutique commercial commissions each year
            to preserve uncompromised architectural attention.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/enquiry"
              className="min-h-[52px] px-10 py-4 rounded-full bg-[#E2C196] text-[#1A100B] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-cream transition-all duration-500 shadow-2xl"
            >
              Schedule Private Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
