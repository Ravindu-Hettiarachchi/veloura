"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/constants";
import { projects } from "@/data/projects";

const heroExhibits = [
  {
    index: "01",
    title: "The Monolith Residence",
    slug: "monolith-residence",
    location: "Colombo 07",
    typology: "Private Sanctuary",
    image: "/images/hero.webp",
    mobileImage: "/images/hero-mobile.webp",
    materials: "Fluted Silver Travertine · Smoked Jackfruit · Brushed Bronze",
    quote: "Subterranean light court enclosed by double-height fluted limestone mass.",
  },
  {
    index: "02",
    title: "Atelier Noir",
    slug: "atelier-noir",
    location: "Galle Fort",
    typology: "High Jewellery Vault",
    image: "/images/portfolio-2.webp",
    mobileImage: "/images/portfolio-2.webp",
    materials: "Shou Sugi Ban Teak · Historic Coral Stone · Raw Silk",
    quote: "A darkened private salon within 17th-century ramparts under micro-pin lighting.",
  },
  {
    index: "03",
    title: "Solarium Villa",
    slug: "solarium-villa",
    location: "Bentota",
    typology: "Coastal Estate",
    image: "/images/portfolio-3.webp",
    mobileImage: "/images/portfolio-3.webp",
    materials: "Hand-Applied Lime Plaster · Reclaimed Teak · River Terrazzo",
    quote: "Pivoting timber portals opening to oceanic trade winds and tropical canopy.",
  },
];

const signatureMaterials = [
  {
    name: "Honed Silver Travertine",
    origin: "Tivoli Quarry, Vein-Cut",
    description: "Open-pore sedimentary limestone offering cool acoustic density and soft light diffusion.",
    texture: "Tactile matte finish with subtle linear stratification",
  },
  {
    name: "Smoked Jackfruit Timber",
    origin: "Southern Highlands, Sri Lanka",
    description: "Dense indigenous timber subjected to artisanal herbal smoking, revealing dark roast ochre tones.",
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
  const [activeExhibit, setActiveExhibit] = useState(0);
  const currentExhibit = heroExhibits[activeExhibit];
  const [activeMaterial, setActiveMaterial] = useState(0);

  return (
    <div className="relative w-full bg-[#140D08] text-[#F6E7D0]">
      {/* 
        ======================================================================
        1. HAUTE COUTURE HERO: THE MONOGRAPH EXHIBITION STAGE
        Eradicates the generic "AI landing page" look with an architectural gallery.
        ======================================================================
      */}
      <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 sm:pt-32 pb-8 px-6 sm:px-12 overflow-hidden border-b border-[#E2C196]/15">
        {/* Dynamic Architectural Background Portal with Smooth Crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <AnimatePresence mode="wait">
            <m.div
              key={currentExhibit.index}
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1.6, ease: EASE }}
              className="relative w-full h-full"
            >
              <picture>
                <source media="(max-width: 640px)" srcSet={currentExhibit.mobileImage} />
                <img
                  src={currentExhibit.image}
                  alt={`${currentExhibit.title} architectural space in ${currentExhibit.location}`}
                  className="w-full h-full object-cover object-center opacity-30 brightness-90 filter"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#140D08] via-[#140D08]/50 to-[#140D08]/75" />
            </m.div>
          </AnimatePresence>
        </div>

        {/* Top Architectural Masthead Bar */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#E2C196]/80 pb-4 border-b border-[#E2C196]/15 gap-2">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#E2C196] animate-pulse" />
            <span className="font-mono text-[#F6E7D0]/70">MONOGRAPH VOL. I</span>
            <span className="text-[#E2C196]/40">·</span>
            <span>ARCHITECTURAL INTERIOR ATELIER</span>
          </div>
          <div className="font-mono text-[10px] text-[#F6E7D0]/50 tracking-widest">
            06° 54&apos; 22&quot; N · 79° 52&apos; 18&quot; E · COLOMBO
          </div>
        </div>

        {/* Center Stage: Monumental Typography & Interactive Exhibition Viewport */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Left Column: Monumental Bodoni Typography Spread */}
          <div className="lg:col-span-7 space-y-6">
            <m.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="space-y-4"
            >
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#E2C196] block font-sans">
                Spatial Poetics · Monolithic Masonry
              </span>

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif text-[#F6E7D0] leading-[0.92] tracking-tight font-normal">
                Silence
                <span className="block font-editorial-italic text-4xl sm:text-6xl md:text-7xl text-[#E2C196] mt-2 font-light">
                  &amp; Monumental Mass
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#F6E7D0]/70 font-sans font-light max-w-xl leading-relaxed pt-2">
                We craft bespoke private sanctuaries and gallery interiors across Sri Lanka. Rejecting
                ephemeral ornamentation, our architecture orchestrates equatorial sunlight, acoustic stillness,
                and living stone.
              </p>
            </m.div>

            {/* Architectural Link Bar (Haute Couture, No generic buttons) */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.22em]">
              <Link
                href="/portfolio"
                className="group inline-flex items-center text-[#E2C196] hover:text-[#F6E7D0] transition-colors py-2 border-b border-[#E2C196] pb-1.5 focus-visible:ring-2 focus-visible:ring-caramel"
              >
                <span>Curated Portfolio Archive</span>
                <span className="ml-3 font-serif text-base group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <Link
                href="/studio"
                className="inline-flex items-center text-[#F6E7D0]/70 hover:text-[#E2C196] transition-colors py-2 border-b border-[#E2C196]/20 pb-1.5 focus-visible:ring-2 focus-visible:ring-caramel"
              >
                <span>The Atelier &amp; Ethos</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Featured Work Window */}
          <div className="lg:col-span-5 bg-[#1A100B]/85 backdrop-blur-md border border-[#E2C196]/20 p-6 sm:p-8 rounded-sm space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E2C196]/15 pb-4">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#E2C196] font-mono">
                FEATURED WORK [{currentExhibit.index} / 03]
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#F6E7D0]/60">
                {currentExhibit.typology}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#F6E7D0]">
                {currentExhibit.title}
              </h2>
              <div className="text-xs text-[#E2C196]/80 font-mono">
                {currentExhibit.location}, Sri Lanka
              </div>
              <p className="text-xs text-[#F6E7D0]/70 font-light leading-relaxed pt-2 italic font-serif">
                &ldquo;{currentExhibit.quote}&rdquo;
              </p>
            </div>

            <div className="pt-2 border-t border-[#E2C196]/15 space-y-2">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#F6E7D0]/50 block">
                Geological Materiality
              </span>
              <p className="text-[11px] text-[#E2C196] font-mono">
                {currentExhibit.materials}
              </p>
            </div>

            {/* Interactive Selector Switcher */}
            <div className="pt-4 flex items-center justify-between border-t border-[#E2C196]/15">
              <div className="flex items-center space-x-2">
                {heroExhibits.map((exhibit, idx) => (
                  <button
                    key={exhibit.index}
                    type="button"
                    onClick={() => setActiveExhibit(idx)}
                    className={`h-8 px-3 rounded-xs text-[10px] font-mono transition-all duration-300 focus-visible:ring-2 focus-visible:ring-caramel ${
                      activeExhibit === idx
                        ? "bg-[#E2C196] text-[#140D08] font-bold"
                        : "bg-[#24160F] text-[#F6E7D0]/60 hover:text-[#E2C196] border border-[#E2C196]/20"
                    }`}
                    aria-label={`Select exhibit ${exhibit.title}`}
                  >
                    {exhibit.index}
                  </button>
                ))}
              </div>

              <Link
                href={`/portfolio/${currentExhibit.slug}`}
                className="text-[11px] uppercase tracking-[0.2em] text-[#E2C196] hover:text-[#F6E7D0] inline-flex items-center"
              >
                Inspect Study <span className="ml-1 font-serif text-sm">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Bottom Colophon Strip */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-[#E2C196]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6E7D0]/50 gap-4">
          <span className="tracking-[0.2em] uppercase text-[10px]">
            Residential Estates · Private Salons · Cultural Sanctuaries
          </span>
          <div className="flex items-center space-x-3 text-[10px] tracking-widest text-[#E2C196]/70 uppercase">
            <span>Scroll To Explore Monograph</span>
            <div className="w-10 h-[1px] bg-[#E2C196]/50" />
          </div>
        </div>
      </section>

      {/* 
        ======================================================================
        2. THE STUDIO MANIFESTO (Warm Latte Parchment #F3EAE0)
        ======================================================================
      */}
      <section className="relative bg-[#F3EAE0] text-[#2C1A11] py-28 sm:py-36 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center space-x-4">
              <span className="text-xs uppercase tracking-[0.28em] text-[#B07A4F] font-semibold">
                01 / The Manifesto
              </span>
              <div className="h-[1px] w-12 bg-[#B07A4F]/40" />
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#2C1A11] leading-[1.08]">
              Spaces that breathe with <span className="font-editorial-italic text-[#B07A4F]">monumental</span> calm.
            </h2>

            <p className="text-base sm:text-lg text-[#2C1A11]/85 font-sans leading-relaxed font-light">
              Rooted in Sri Lanka&apos;s rich tradition of tropical modernism and fused with the rigorous
              restraint of European monastic minimalism, VELOURA sculpts volumes that reject temporary trends.
              We believe true luxury is acoustic silence, deliberate shadow, and materials that grow more
              dignified as decades pass.
            </p>

            <blockquote className="border-l-2 border-[#B07A4F] pl-6 py-2 font-serif italic text-lg sm:text-xl text-[#2C1A11]/90">
              &ldquo;We do not merely furnish an interior; we choreograph how natural light enters,
              how sound settles, and how stone touches skin.&rdquo;
            </blockquote>

            <div className="pt-4">
              <Link
                href="/studio"
                className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-[#2C1A11] font-medium border-b border-[#2C1A11]/50 pb-1.5 hover:border-[#B07A4F] hover:text-[#B07A4F] transition-all duration-300"
              >
                <span>Explore Studio Heritage &amp; Tenets</span>
                <span className="ml-3 font-serif text-sm">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md h-[460px] sm:h-[560px] rounded-t-[200px] overflow-hidden border border-[#B07A4F]/25 shadow-2xl group">
              <Image
                src="/images/studio-primary.webp"
                alt="Plaster wall with arch niche framing a sculptural ceramic vase at VELOURA studio"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
              />
            </div>

            <div className="hidden sm:block absolute -bottom-8 -left-6 w-52 h-52 rounded-t-[100px] overflow-hidden border border-[#B07A4F]/40 shadow-2xl z-20 bg-[#F3EAE0]">
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

      {/* 
        ======================================================================
        3. SELECTED ARCHITECTURAL COMMISSIONS (Espresso #140D08)
        ======================================================================
      */}
      <section className="relative bg-[#140D08] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#E2C196]/15">
        <div className="max-w-7xl mx-auto">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {projects.slice(0, 3).map((project, idx) => {
              const isLarge = idx === 0;
              const spanClass = isLarge ? "lg:col-span-7" : idx === 1 ? "lg:col-span-5" : "lg:col-span-12";

              return (
                <div key={project.id} className={`${spanClass} group relative`}>
                  <Link href={`/portfolio/${project.slug}`} className="block focus-visible:ring-2 focus-visible:ring-caramel rounded-sm">
                    <div
                      className={`relative w-full overflow-hidden border border-[#E2C196]/20 bg-[#1A100B] transition-all duration-700 ${
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
                      <div className="absolute inset-0 bg-gradient-to-t from-[#140D08]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                      <div className="absolute top-6 left-6 flex items-center space-x-3">
                        <span className="px-3 py-1 bg-[#140D08]/85 backdrop-blur-sm border border-[#E2C196]/30 text-[10px] uppercase tracking-[0.2em] text-[#E2C196]">
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

      {/* 
        ======================================================================
        4. TACTILE MATERIALITY ARCHIVE (Espresso Deep #1A100B)
        ======================================================================
      */}
      <section className="relative bg-[#1A100B] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#E2C196]/15">
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
                      ? "bg-[#3D2417]/50 border-[#E2C196] shadow-xl"
                      : "bg-[#140D08]/60 border-[#E2C196]/15 hover:border-[#E2C196]/45"
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
              href="/studio#materials"
              className="inline-flex items-center text-xs uppercase tracking-[0.22em] text-[#E2C196] hover:text-[#F6E7D0] border-b border-[#E2C196]/40 pb-1"
            >
              <span>Explore Complete Material Archive &amp; Origins</span>
              <span className="ml-2 font-serif">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 
        ======================================================================
        5. PRIVATE CONSULTATION BANNER (Espresso #140D08)
        ======================================================================
      */}
      <section className="relative bg-[#140D08] text-[#F6E7D0] py-28 sm:py-36 px-6 sm:px-12 text-center border-t border-[#E2C196]/20">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-[#E2C196] font-semibold">
            Private Commissions
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F6E7D0] leading-tight">
            Begin a Dialogue with our <span className="font-editorial-italic text-[#E2C196]">Principal Atelier</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F6E7D0]/70 font-light leading-relaxed max-w-xl mx-auto">
            We accept a limited number of bespoke residential and boutique commercial commissions each year
            to preserve uncompromised architectural attention.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/enquiry"
              className="min-h-[52px] px-10 py-4 rounded-full bg-[#E2C196] text-[#140D08] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-cream transition-all duration-500 shadow-2xl"
            >
              Schedule Private Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
