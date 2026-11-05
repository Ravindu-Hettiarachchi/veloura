import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { projects } from "@/data/projects";
import { ArchDivider } from "@/components/ui/ArchDivider";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* 1. Hero Section (latte #F2E8DC) */}
      <Hero />

      {/* Arch Divider: Hero (latte) -> Studio Preview (cream) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="light" inverted={false} withPendant={false} />
      </div>

      {/* 
        -------------------------------------------------------------
        2. Studio Vignette (Cream #F6E7D0)
        Editorial introduction linking to /studio
        -------------------------------------------------------------
      */}
      <section className="relative w-full bg-[#F6E7D0] text-[#3B2417] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-sans text-xs tracking-wider uppercase text-[#B07A4F] block">
              The Studio
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B2417] leading-tight">
              A design practice grounded in everyday life.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#3B2417]/85 leading-relaxed font-normal">
              Based in Colombo, VELOURA pairs Sri Lankan craft traditions—hand-turned timber, local stone carving, and loom-woven textiles—with clean lines and generous natural light. We design homes and small commercial spaces that feel quietly confident from day one.
            </p>

            <div className="pt-2">
              <Link
                href="/studio"
                className="inline-flex items-center font-sans text-sm font-medium text-[#3B2417] hover:text-[#B07A4F] border-b border-[#B07A4F]/40 pb-1 transition-colors"
              >
                <span>Read about our studio and materials</span>
                <span className="ml-2 font-serif">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm h-[380px] sm:h-[460px] rounded-t-[180px] overflow-hidden border border-[#B07A4F]/30 shadow-md bg-[#F2E8DC]">
              <Image
                src="/images/studio-primary.webp"
                alt="Plaster wall with arched niche and ceramic vessel in a VELOURA designed interior"
                fill
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Arch Divider: Studio (cream) -> Featured Works (latte) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="light" inverted={true} withPendant={false} />
      </div>

      {/* 
        -------------------------------------------------------------
        3. Selected Works Preview (Latte #F2E8DC)
        Curated highlights linking to /portfolio
        -------------------------------------------------------------
      */}
      <section className="relative w-full bg-[#F2E8DC] text-[#3B2417] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#B07A4F]/20">
            <div className="space-y-3">
              <span className="font-sans text-xs tracking-wider uppercase text-[#B07A4F] block">
                Selected Work
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B2417]">
                Recent spaces across Sri Lanka
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center font-sans text-sm font-medium text-[#3B2417] hover:text-[#B07A4F] border-b border-[#B07A4F]/40 pb-1 transition-colors self-start sm:self-auto"
            >
              <span>View all projects</span>
              <span className="ml-2 font-serif">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/portfolio/${project.slug}`}
                className="group flex flex-col space-y-4"
              >
                <div className="relative w-full h-[340px] sm:h-[400px] rounded-t-[140px] overflow-hidden border border-[#B07A4F]/30 bg-[#F6E7D0] shadow-sm transition-all duration-500 group-hover:border-[#3B2417]">
                  <Image
                    src={project.image}
                    alt={`${project.title} in ${project.location}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#F2E8DC]/95 backdrop-blur-xs border border-[#B07A4F]/30 font-sans text-xs text-[#3B2417]">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 pt-1">
                  <div className="flex items-baseline justify-between text-xs text-[#3B2417]/70">
                    <span>{project.location}</span>
                    <span>{project.area}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#3B2417] group-hover:text-[#B07A4F] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#3B2417]/80 line-clamp-2 leading-relaxed">
                    {project.synopsis}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Arch Divider: Works (latte) -> Process Teaser (espresso) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="light" inverted={true} withPendant={false} />
      </div>

      {/* 
        -------------------------------------------------------------
        4. Working Process Teaser (Espresso #24160F)
        4-step path linking to /process
        -------------------------------------------------------------
      */}
      <section className="relative w-full bg-[#24160F] text-[#F6E7D0] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-[#E2C196]/20">
            <div className="space-y-3">
              <span className="font-sans text-xs tracking-wider uppercase text-[#E2C196] block">
                How We Work
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F6E7D0]">
                A clear four-stage path
              </h2>
            </div>

            <Link
              href="/process"
              className="inline-flex items-center font-sans text-sm font-medium text-[#E2C196] hover:text-[#F6E7D0] border-b border-[#E2C196]/40 pb-1 transition-colors self-start sm:self-auto"
            >
              <span>Detailed process &amp; timelines</span>
              <span className="ml-2 font-serif">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Conversation", text: "We visit your site, listen to your routines, and define what matters." },
              { step: "02", title: "Spatial Concept", text: "Moodboards, layout options, and natural daylight orientation." },
              { step: "03", title: "Material Detailing", text: "Hand-turned timber, stone samples, joinery drawings, and fittings." },
              { step: "04", title: "Realization", text: "Site coordination with trusted local craftsmen until handover." },
            ].map((s) => (
              <div
                key={s.step}
                className="p-6 rounded-sm bg-[#5A3A2A]/40 border border-[#E2C196]/20 space-y-3"
              >
                <span className="font-serif text-2xl text-[#E2C196] block">
                  {s.step}
                </span>
                <h3 className="font-serif text-xl text-[#F6E7D0]">{s.title}</h3>
                <p className="font-sans text-xs text-[#F6E7D0]/75 leading-relaxed font-normal">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Arch Divider: Process (espresso) -> Consultation Callout (cream) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="dark" inverted={false} withPendant={false} />
      </div>

      {/* 
        -------------------------------------------------------------
        5. Private Consultation Invitation (Cream #F6E7D0)
        Direct link to /enquiry
        -------------------------------------------------------------
      */}
      <section className="relative w-full bg-[#F6E7D0] text-[#3B2417] py-20 sm:py-28 px-6 sm:px-10 lg:px-14">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="font-sans text-xs tracking-wider uppercase text-[#B07A4F] block">
            Private Consultation
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#3B2417] leading-tight">
            Ready to design a calm, enduring space?
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#3B2417]/85 max-w-xl mx-auto leading-relaxed font-normal">
            We welcome conversations about residential homes, renovations, and small commercial interiors across Sri Lanka.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-5">
            <Link
              href="/enquiry"
              className="min-h-[48px] px-8 py-3 rounded-full bg-[#3B2417] text-[#F6E7D0] hover:bg-[#5A3A2A] transition-all duration-300 font-sans text-sm tracking-wide inline-flex items-center justify-center shadow-xs"
            >
              Start an enquiry
            </Link>

            <Link
              href="/portfolio"
              className="min-h-[48px] px-8 py-3 rounded-full bg-transparent border border-[#B07A4F]/40 text-[#3B2417] hover:border-[#3B2417] transition-all duration-300 font-sans text-sm tracking-wide inline-flex items-center justify-center"
            >
              Explore our portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
