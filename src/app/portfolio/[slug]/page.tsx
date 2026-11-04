import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, Project } from "@/data/projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — ${project.location}`,
    description: project.synopsis,
    openGraph: {
      title: `${project.title} | VELOURA Interior Design Studio`,
      description: project.synopsis,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  // Next project navigation loop
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="relative w-full pt-28 sm:pt-36 bg-[#1A100B] text-[#F6E7D0] pb-24 sm:pb-36">
      {/* Top Breadcrumb & Project Metadata Bar */}
      <div className="px-6 sm:px-12 max-w-7xl mx-auto mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs uppercase tracking-[0.25em] text-[#E2C196] pb-6 border-b border-[#E2C196]/15 gap-4">
          <div className="flex items-center space-x-3">
            <Link href="/portfolio" className="hover:text-[#F6E7D0] transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-[#F6E7D0]/60">{project.category}</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-mono text-[#F6E7D0]/60">{project.location}</span>
            <span>·</span>
            <span className="font-mono text-[#E2C196]">{project.area}</span>
          </div>
        </div>
      </div>

      {/* Hero Headline & Intro */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-16">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-[#24160F] border border-[#E2C196]/30 text-[10px] uppercase tracking-[0.2em] text-[#E2C196]">
              {project.category} Commission
            </span>
            {project.isSample && (
              <span className="px-2.5 py-1 bg-[#24160F]/60 border border-[#E2C196]/20 text-[9px] uppercase tracking-wider text-[#F6E7D0]/60">
                Concept project
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F6E7D0] leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-[#E2C196] font-light">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Hero Primary Photograph */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mb-24">
        <div
          className={`relative w-full overflow-hidden border border-[#E2C196]/25 bg-[#24160F] shadow-2xl ${
            project.isArchCropped ? "rounded-t-[220px]" : "rounded-sm"
          } h-[460px] sm:h-[680px]`}
        >
          <Image
            src={project.image}
            alt={`${project.title} — Primary architectural interior view`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Narrative & Specification Breakdown */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto py-16 border-t border-[#E2C196]/15">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: In-depth Architectural Story */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-xs uppercase tracking-[0.28em] text-[#E2C196] font-semibold block">
              Architectural Concept &amp; Context
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F6E7D0] leading-snug">
              Spatial Choreography &amp; Equatorial Shadow
            </h2>
            <div className="text-base text-[#F6E7D0]/80 font-light leading-relaxed space-y-6">
              <p>{project.overview}</p>
              <p>{project.synopsis}</p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-2 border-[#E2C196] pl-6 py-2 my-8 italic font-serif text-xl sm:text-2xl text-[#E2C196]">
              &ldquo;{project.architecturalQuote}&rdquo;
            </blockquote>
          </div>

          {/* Right: Technical Specification Sheet */}
          <div className="lg:col-span-5 bg-[#24160F] border border-[#E2C196]/20 p-8 sm:p-10 rounded-sm space-y-6 self-start">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E2C196] font-semibold block pb-3 border-b border-[#E2C196]/20">
              Project Monograph Specs
            </span>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between py-2 border-b border-[#E2C196]/10">
                <span className="text-[#F6E7D0]/50 uppercase tracking-wider">Location</span>
                <span className="font-mono text-[#F6E7D0]">{project.location}, Sri Lanka</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E2C196]/10">
                <span className="text-[#F6E7D0]/50 uppercase tracking-wider">Typology</span>
                <span className="font-mono text-[#F6E7D0]">{project.category}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E2C196]/10">
                <span className="text-[#F6E7D0]/50 uppercase tracking-wider">Scale / Area</span>
                <span className="font-mono text-[#E2C196]">{project.area}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#E2C196]/10">
                <span className="text-[#F6E7D0]/50 uppercase tracking-wider">Status</span>
                <span className="font-mono text-[#F6E7D0]">{project.yearStatus}</span>
              </div>
              <div className="pt-2">
                <span className="text-[#F6E7D0]/50 uppercase tracking-wider block mb-2">Scope of Services</span>
                <p className="text-[#F6E7D0]/85 font-sans leading-relaxed text-xs">
                  {project.scope}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/enquiry"
                className="w-full min-h-[46px] py-3 rounded-full border border-[#E2C196] bg-[#E2C196]/10 hover:bg-[#E2C196] hover:text-[#1A100B] text-xs uppercase tracking-[0.2em] font-medium text-[#E2C196] flex items-center justify-center transition-all duration-300"
              >
                Inquire on this Typology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Material Language Specification */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto py-16 border-t border-[#E2C196]/15">
        <span className="text-xs uppercase tracking-[0.28em] text-[#E2C196] font-semibold block mb-8">
          Material Palette &amp; Joinery
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.materials.map((mat, i) => (
            <div
              key={mat.name}
              className="p-6 bg-[#24160F] border border-[#E2C196]/15 rounded-sm space-y-3"
            >
              <span className="text-[10px] font-mono text-[#E2C196]">SPEC · 0{i + 1}</span>
              <h3 className="font-serif text-lg text-[#F6E7D0]">{mat.name}</h3>
              <p className="text-xs text-[#F6E7D0]/70 font-light leading-relaxed">
                {mat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Vignettes */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto py-16 border-t border-[#E2C196]/15">
        <span className="text-xs uppercase tracking-[0.28em] text-[#E2C196] font-semibold block mb-12">
          Spatial Details &amp; Light Studies
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.gallery.map((img, i) => (
            <div key={img.src + i} className="space-y-4 group">
              <div className="relative w-full h-[360px] rounded-sm overflow-hidden border border-[#E2C196]/20 bg-[#24160F]">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                />
              </div>
              <p className="text-xs text-[#F6E7D0]/60 font-light italic">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Footer Bar */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mt-16 pt-16 border-t border-[#E2C196]/20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E2C196] block mb-1">
              Next Monograph
            </span>
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="text-2xl sm:text-3xl font-serif text-[#F6E7D0] hover:text-[#E2C196] transition-colors"
            >
              {nextProject.title} →
            </Link>
          </div>

          <Link
            href="/portfolio"
            className="text-xs uppercase tracking-[0.2em] text-[#E2C196] border-b border-[#E2C196]/40 pb-1 hover:text-[#F6E7D0]"
          >
            Back to Curated Archive
          </Link>
        </div>
      </section>
    </article>
  );
}

