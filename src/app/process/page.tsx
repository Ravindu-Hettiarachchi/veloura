import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Architectural Cadence — Process",
  description:
    "Our disciplined four-phase interior architecture process. From initial dialogue and spatial poetics to bespoke fabrication and atmospheric handover.",
};

const processPhases = [
  {
    phase: "Phase 01",
    roman: "I",
    title: "The Dialogue & Site Poetics",
    timeline: "Weeks 1–3",
    tagline: "Uncovering the Spatial & Emotional Core of the Commission",
    image: "/images/process-1.webp",
    description:
      "Every project begins not with sketches, but with rigorous listening. We conduct an exhaustive audit of your daily rituals, aesthetic desires, and the site's unique architectural topography. In Sri Lanka's tropical climate, we map sunrise and sunset solar angles, prevailing monsoon wind currents, and exterior acoustic factors to anchor the interior in natural harmony.",
    deliverables: [
      "Client Lifestyle & Spatial Audit Document",
      "Solar Path & Natural Ventilation Mapping",
      "Acoustic & Environmental Baseline Study",
      "Initial Spatial Narrative & Mood Direction",
    ],
  },
  {
    phase: "Phase 02",
    roman: "II",
    title: "Spatial Anatomy & Material Mood",
    timeline: "Weeks 4–7",
    tagline: "Translating Abstract Intent into Volumetric Reality",
    image: "/images/process-2.webp",
    description:
      "We sculpt internal partitions, sightlines, and ceiling volumes. Instead of generic digital boards, we curate tactile sample trays of authentic travertine slabs, scorched jackfruit timbers, patinated bronze hairlines, and woven Belgian flax. You touch the actual materials that will enclose your everyday life.",
    deliverables: [
      "2D Architectural Floorplans & Internal Elevations",
      "Tactile Material & Finish Sample Boxes",
      "3D Spatial Volumetric Renders",
      "Preliminary Budget & Fabrication Timeline",
    ],
  },
  {
    phase: "Phase 03",
    roman: "III",
    title: "Bespoke Detailing & Technical Precision",
    timeline: "Weeks 8–12",
    tagline: "The Rigor of 1:1 Millwork Drawings & Engineering Coordination",
    image: "/images/process-3.webp",
    description:
      "The soul of luxury lives in the joint. We draft meticulous 1:1 joinery details, shadow gaps, flush door pivots, and concealed HVAC linear diffusers. Every fixture is custom specified, from hand-hammered bronze door handles to stone island watercourses.",
    deliverables: [
      "Complete Technical Drawing Package (1:10 & 1:1)",
      "Bespoke Joinery & Millwork Specification Book",
      "Electrical, Lighting & Switching Schedules",
      "Tender Packages for Master Stonemasons & Craftsmen",
    ],
  },
  {
    phase: "Phase 04",
    roman: "IV",
    title: "Artisanal Fabrication & Handover",
    timeline: "Execution to Turnkey",
    tagline: "Site Stewardship, FF&E Installation & Atmospheric Calibration",
    image: "/images/process-4.webp",
    description:
      "Our architects oversee construction with uncompromising rigor. We direct stone block selections at the quarry, inspect wood seasoning in local sawmills, and supervise each layer of lime plaster. The process culminates in a private handover where lighting scenes, art, and bespoke textiles are balanced into effortless serenity.",
    deliverables: [
      "Full On-Site Architectural Stewardship",
      "Art Procurement & Bespoke Furniture Placement",
      "Final Commissioning of Lighting Scenes & Sound Calibration",
      "The VELOURA Atelier Residence Maintenance Monograph",
    ],
  },
];

const faqs = [
  {
    q: "How many commissions does VELOURA accept concurrently?",
    a: "To ensure that our Principal Architect maintains direct, day-to-day oversight over every drawing and material junction, we limit our studio to four major residential commissions and two boutique commercial projects annually.",
  },
  {
    q: "Do you undertake projects outside of Colombo and Sri Lanka?",
    a: "Yes. While our primary atelier is located in Colombo 07, our team has executed coastal villas in Bentota, historical restorations in Galle Fort, and luxury pavilions in Kandy. We also welcome select international residential commissions across Southeast Asia and the Middle East.",
  },
  {
    q: "How are custom furniture pieces and lighting procured?",
    a: "Over 80% of the furniture, joinery, and lighting in our projects is custom-designed exclusively by VELOURA and fabricated in collaboration with generational Sri Lankan woodworkers, stone carvers, and foundry artisans.",
  },
];

export default function ProcessPage() {
  return (
    <div className="relative w-full pt-28 sm:pt-36 bg-[#1A100B] text-[#F6E7D0] pb-24 sm:pb-36">
      {/* 1. PROCESS HERO HEADER */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-16 border-b border-[#E2C196]/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs uppercase tracking-[0.28em] text-[#E2C196] mb-8">
          <span>Methodology &amp; Workflow</span>
          <span className="font-mono text-[11px] text-[#F6E7D0]/50 tracking-widest mt-2 sm:mt-0">
            THE ARCHITECTURAL CADENCE
          </span>
        </div>

        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F6E7D0] leading-[1.08]">
            From Initial Dialogue to <span className="italic text-[#E2C196]">Atmospheric</span> Handover
          </h1>
          <p className="text-base sm:text-xl text-[#F6E7D0]/70 font-light leading-relaxed max-w-2xl">
            A disciplined four-phase journey designed to eliminate uncertainty, celebrate craftsmanship,
            and deliver sanctuaries of timeless architectural distinction.
          </p>
        </div>
      </section>

      {/* 2. THE FOUR DETAILED PHASES */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pt-20">
        <div className="space-y-24 sm:space-y-36">
          {processPhases.map((phase, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={phase.phase}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center pb-24 border-b border-[#E2C196]/15 last:border-b-0"
              >
                {/* Visual Image Block */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative w-full h-[400px] sm:h-[520px] rounded-t-[180px] overflow-hidden border border-[#E2C196]/20 bg-[#24160F] shadow-2xl group">
                    <Image
                      src={phase.image}
                      alt={phase.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A100B]/80 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6 px-3 py-1 bg-[#1A100B]/80 backdrop-blur-sm border border-[#E2C196]/30 text-xs font-mono text-[#E2C196]">
                      {phase.timeline}
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center space-x-3 text-xs font-mono text-[#E2C196]">
                    <span>{phase.phase}</span>
                    <span>·</span>
                    <span>ROMAN {phase.roman}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-serif text-[#F6E7D0] leading-snug">
                    {phase.title}
                  </h2>

                  <p className="text-sm font-serif italic text-[#E2C196]/90">
                    {phase.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-[#F6E7D0]/75 font-light leading-relaxed">
                    {phase.description}
                  </p>

                  <div className="pt-4 border-t border-[#E2C196]/15">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2C196] font-semibold block mb-3">
                      Key Atelier Deliverables
                    </span>
                    <ul className="space-y-2 text-xs text-[#F6E7D0]/70 font-light">
                      {phase.deliverables.map((item) => (
                        <li key={item} className="flex items-start space-x-2">
                          <span className="text-[#E2C196] text-sm leading-none">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ATELIER GUIDANCE & FAQS */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto mt-24 pt-20 border-t border-[#E2C196]/15">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.28em] text-[#E2C196] font-semibold block">
              Frequently Addressed
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F6E7D0]">
              Consultation Guidance
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="p-8 bg-[#24160F] border border-[#E2C196]/15 rounded-sm space-y-3">
                <h3 className="font-serif text-lg text-[#F6E7D0]">{faq.q}</h3>
                <p className="text-xs sm:text-sm text-[#F6E7D0]/70 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8">
            <Link
              href="/enquiry"
              className="min-h-[50px] px-8 py-3.5 inline-flex items-center justify-center rounded-full bg-[#E2C196] text-[#1A100B] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-cream transition-all duration-300 shadow-xl"
            >
              Initiate Phase 01: Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
