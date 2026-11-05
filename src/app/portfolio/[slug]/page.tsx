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

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <article className="relative w-full pt-28 sm:pt-36 bg-[#F2E8DC] text-[#3B2417] pb-24 sm:pb-36">
      {/* Top Breadcrumb Bar */}
      <div className="px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#3B2417]/80 pb-6 border-b border-[#B07A4F]/25 gap-4">
          <div className="flex items-center space-x-3">
            <Link href="/portfolio" className="hover:text-[#B07A4F] transition-colors">
              Portfolio
            </Link>
            <span>/</span>
            <span className="text-[#3B2417] font-medium">{project.title}</span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <span>{project.location}</span>
            <span>·</span>
            <span>{project.area}</span>
          </div>
        </div>
      </div>

      {/* Hero Headline & Intro */}
      <section className="px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-14">
        <div className="max-w-4xl space-y-5">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full bg-[#F6E7D0] border border-[#B07A4F]/30 text-xs text-[#3B2417] font-medium">
              {project.category}
            </span>
            {project.isSample && (
              <span className="px-3 py-1 rounded-full bg-[#F6E7D0] border border-[#B07A4F]/20 text-xs text-[#3B2417]/70">
                Concept project
              </span>
            )}
          </div>

          <h1 className="heading-hero text-[#3B2417]">
            {project.title}
          </h1>

          <p className="text-xl sm:text-2xl font-serif text-[#B07A4F]">
            {project.subtitle}
          </p>
        </div>
      </section>

      {/* Hero Primary Photograph */}
      <section className="px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto mb-20">
        <div
          className={`relative w-full overflow-hidden border border-[#B07A4F]/30 bg-[#F6E7D0] shadow-lg ${
            project.isArchCropped ? "rounded-t-[200px]" : "rounded-sm"
          } h-[460px] sm:h-[640px]`}
        >
          <Image
            src={project.image}
            alt={`${project.title} in ${project.location}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Narrative & Specification Breakdown */}
      <section className="px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto py-12 border-t border-[#B07A4F]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Project Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="nav-caps text-[#B07A4F] block">
              About the project
            </span>
            <h2 className="heading-card text-[#3B2417]">
              Design approach
            </h2>
            <div className="text-base sm:text-lg text-[#3B2417]/85 font-normal leading-relaxed space-y-5">
              <p>{project.overview}</p>
              <p>{project.synopsis}</p>
            </div>
          </div>

          {/* Right: Project Details Box */}
          <div className="lg:col-span-5 bg-[#F6E7D0] border border-[#B07A4F]/30 p-8 sm:p-10 rounded-sm space-y-6 self-start shadow-sm">
            <span className="nav-caps text-[#B07A4F] block pb-3 border-b border-[#B07A4F]/20">
              Project details
            </span>

            <div className="space-y-4 text-sm text-[#3B2417]">
              <div className="flex justify-between py-2 border-b border-[#B07A4F]/15">
                <span className="text-[#3B2417]/70">Location</span>
                <span className="font-medium text-[#3B2417]">{project.location}, Sri Lanka</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#B07A4F]/15">
                <span className="text-[#3B2417]/70">Category</span>
                <span className="font-medium text-[#3B2417]">{project.category}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#B07A4F]/15">
                <span className="text-[#3B2417]/70">Area</span>
                <span className="font-medium text-[#3B2417]">{project.area}</span>
              </div>
              <div className="pt-2">
                <span className="text-[#3B2417]/70 block mb-1">Scope of work</span>
                <p className="text-[#3B2417] leading-relaxed text-sm">
                  {project.scope}
                </p>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/enquiry"
                className="btn-caps w-full min-h-[46px] py-3 rounded-full bg-[#3B2417] text-[#F6E7D0] hover:bg-[#5A3A2A] text-xs flex items-center justify-center transition-all duration-300"
              >
                Enquire about a similar space
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Used */}
      <section className="px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto py-12 border-t border-[#B07A4F]/20">
        <span className="nav-caps text-[#B07A4F] block mb-6">
          Materials used
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.materials.map((mat) => (
            <div
              key={mat.name}
              className="p-6 bg-[#F6E7D0] border border-[#B07A4F]/25 rounded-sm space-y-2 shadow-sm"
            >
              <h3 className="font-serif text-lg text-[#3B2417]">{mat.name}</h3>
              <p className="text-xs text-[#3B2417]/75 font-normal leading-relaxed">
                {mat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Footer Bar */}
      <section className="px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto mt-12 pt-12 border-t border-[#B07A4F]/25">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs text-[#B07A4F] block mb-1">
              Next project
            </span>
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="text-2xl sm:text-3xl font-serif text-[#3B2417] hover:text-[#B07A4F] transition-colors"
            >
              {nextProject.title} →
            </Link>
          </div>

          <Link
            href="/portfolio"
            className="btn-caps text-xs text-[#3B2417] border-b border-[#3B2417]/40 pb-1 hover:text-[#B07A4F]"
          >
            Back to all projects
          </Link>
        </div>
      </section>
    </article>
  );
}
