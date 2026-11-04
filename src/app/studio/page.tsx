import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Studio & Material Archive",
  description:
    "An architectural interior atelier crafting spaces of quiet permanence. Rooted in Sri Lankan tropical modernism and warm European minimalism.",
};

const studioTenets = [
  {
    number: "01",
    roman: "I",
    title: "Material Honesty",
    subtitle: "Living Substances Over Synthetic Perfection",
    description:
      "We deliberately specify untreated, monolithic materials that absorb the environment and patinate gracefully over generations. Honed silver travertine, aged jackfruit timber, and raw lime plaster age with dignity, rejecting artificial lacquers and temporary vinyl substitutes.",
    image: "/images/ethos-1.webp",
  },
  {
    number: "02",
    roman: "II",
    title: "Acoustic Stillness",
    subtitle: "The Spatial Luxury of Quiet Mass",
    description:
      "In dense equatorial cities, silence is the ultimate rarity. We treat acoustic engineering as an architectural material: dense masonry buffers exterior noise, while Belgian linen drapery, open-pore timber, and recessed shadow gaps calibrate internal resonance into peaceful stillness.",
    image: "/images/ethos-2.webp",
  },
  {
    number: "03",
    roman: "III",
    title: "Light as Architectural Mass",
    subtitle: "The Choreography of Equatorial Shadow",
    description:
      "Rather than flooding rooms with indiscriminate downlights, we choreograph low-angle natural illumination and deep reveal portals. Shadows are given equal stature with light, creating layered atmospheric moods that shift naturally from dawn till twilight.",
    image: "/images/ethos-3.webp",
  },
];

const materialArchive = [
  {
    name: "Honed Silver Travertine",
    origin: "Tivoli, Italy · Vein-Cut",
    typology: "Sedimentary Limestone",
    application: "Monolithic hearths, bathroom plinths, floor-to-ceiling slab portals",
    notes: "Open pores are left unfilled in dry zones to celebrate geologic antiquity and acoustic absorption.",
  },
  {
    name: "Smoked Jackfruit Timber",
    origin: "Southern Highlands, Sri Lanka",
    typology: "Native Dense Hardwood",
    application: "Architectural ceiling baffles, bespoke library millwork, pivoting entrance portals",
    notes: "Naturally cured and smoked with herbal sawdust to draw out deeply nuanced dark-roast hues.",
  },
  {
    name: "Patinated Brushed Bronze",
    origin: "Artisanal Foundry Cast",
    typology: "Copper Alloy",
    application: "Architectural door furniture, linear luminaires, transition hairlines",
    notes: "Left unlacquered so natural touch and atmospheric humidity slowly enrich its tactile bronze patina.",
  },
  {
    name: "Raw Belgian Flax Linen",
    origin: "Meulebeke, Belgium",
    typology: "Long-Staple Natural Flax",
    application: "Continuous ceiling-recessed sheer drapery, low-profile daybed upholstery",
    notes: "Woven on vintage rapier looms with intentional natural slubs that temper the harsh tropical sun.",
  },
  {
    name: "Calacatta Viola Marble",
    origin: "Carrara Basin, Italy",
    typology: "Brecciated Metamorphic Marble",
    application: "Sculptural kitchen monolithic islands, vanity plinths, statement credenzas",
    notes: "Dramatic burgundy-cabernet veining set against warm milky-white calcites.",
  },
  {
    name: "Hand-Applied Lime Plaster",
    origin: "Regional Coastal Mineral Lime",
    typology: "Hydraulic Mineral Compound",
    application: "Continuous seamless interior wall envelopes and curved barrel niches",
    notes: "Naturally breathable, regulating equatorial ambient humidity while diffusing soft light.",
  },
];

export default function StudioPage() {
  return (
    <div className="relative w-full pt-28 sm:pt-36 bg-[#1A100B] text-[#F6E7D0]">
      {/* 1. STUDIO HERO HEADER */}
      <section className="relative px-6 sm:px-12 max-w-7xl mx-auto pb-20 border-b border-[#E2C196]/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs uppercase tracking-[0.28em] text-[#E2C196] mb-8">
          <span>The Atelier &amp; Philosophy</span>
          <span className="font-mono text-[11px] text-[#F6E7D0]/50 tracking-widest mt-2 sm:mt-0">
            COLOMBO 07 · SRI LANKA
          </span>
        </div>

        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F6E7D0] leading-[1.08]">
            The Architecture of <span className="italic text-[#E2C196]">Silence</span> &amp; Permanence
          </h1>
          <p className="text-base sm:text-xl text-[#F6E7D0]/70 font-light leading-relaxed max-w-2xl">
            VELOURA is an interior architecture atelier founded on the conviction that the most luxurious spaces
            are those that cultivate deep sensory peace, devoid of extraneous ornamentation.
          </p>
        </div>
      </section>

      {/* 2. THE ATELIER MONOGRAPH (Editorial Split) */}
      <section className="relative px-6 sm:px-12 max-w-7xl mx-auto py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[520px] sm:h-[640px] rounded-t-[200px] overflow-hidden border border-[#E2C196]/20 bg-[#24160F]">
              <Image
                src="/images/studio-primary.webp"
                alt="VELOURA architectural niche with lime plaster and ceramic sculpture"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block absolute -bottom-10 -right-8 w-60 h-60 rounded-t-[120px] overflow-hidden border border-[#E2C196]/30 bg-[#1A100B] shadow-2xl">
              <Image
                src="/images/studio-detail.webp"
                alt="Smoked timber joinery detail"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8 lg:pl-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#E2C196] font-semibold block">
              Our Spatial Heritage
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F6E7D0] leading-snug">
              Tropical Modernism Meets European Monastic Restraint
            </h2>
            <div className="space-y-6 text-sm sm:text-base text-[#F6E7D0]/75 font-light leading-relaxed">
              <p>
                Founded in Colombo, VELOURA draws immense inspiration from the architectural lineage of Geoffrey Bawa
                and Minnette de Silva—masters who recognized that equatorial architecture must dissolve the line between
                nature and built sanctuary.
              </p>
              <p>
                To this indigenous wisdom, we layer the austere material rigor of European monastic minimalism:
                monolithic stone masses, flush shadowline details, and a deliberate refusal to decorate. Every wall,
                timber portal, and bronze reveal is conceived as a tactile monument to permanence.
              </p>
              <p>
                We do not build for photographic moments; we engineer spaces that reveal their character slowly,
                nourishing those who inhabit them year after year.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2C196]/15 flex items-center space-x-10 text-xs text-[#E2C196]">
              <div>
                <span className="block font-mono text-base text-[#F6E7D0] mb-0.5">Bespoke</span>
                <span className="uppercase tracking-widest text-[10px] text-[#F6E7D0]/50">Commissions</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E2C196]/20" />
              <div>
                <span className="block font-mono text-base text-[#F6E7D0] mb-0.5">Artisanal</span>
                <span className="uppercase tracking-widest text-[10px] text-[#F6E7D0]/50">Fabrication</span>
              </div>
              <div className="w-[1px] h-8 bg-[#E2C196]/20" />
              <div>
                <span className="block font-mono text-base text-[#F6E7D0] mb-0.5">100%</span>
                <span className="uppercase tracking-widest text-[10px] text-[#F6E7D0]/50">Natural Stone &amp; Wood</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE THREE SPATIAL TENETS */}
      <section className="relative bg-[#24160F] text-[#F6E7D0] py-24 sm:py-32 px-6 sm:px-12 border-t border-[#E2C196]/15">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.28em] text-[#E2C196] font-semibold block mb-3">
              The Tenets
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F6E7D0]">
              The Core Architectural Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {studioTenets.map((tenet) => (
              <div
                key={tenet.number}
                className="bg-[#1A100B] border border-[#E2C196]/20 p-8 sm:p-10 rounded-sm flex flex-col justify-between space-y-8 group hover:border-[#E2C196]/60 transition-colors duration-500"
              >
                <div>
                  <div className="relative w-full h-48 rounded-sm overflow-hidden mb-6 border border-[#E2C196]/10">
                    <Image
                      src={tenet.image}
                      alt={tenet.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 30vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
                    />
                  </div>

                  <div className="flex items-center space-x-3 text-xs font-mono text-[#E2C196] mb-2">
                    <span>{tenet.number}</span>
                    <span>·</span>
                    <span>TENET {tenet.roman}</span>
                  </div>

                  <h3 className="text-2xl font-serif text-[#F6E7D0] mb-1">{tenet.title}</h3>
                  <h4 className="text-xs uppercase tracking-wider text-[#E2C196]/80 mb-4 font-sans">
                    {tenet.subtitle}
                  </h4>
                  <p className="text-sm text-[#F6E7D0]/70 font-light leading-relaxed">
                    {tenet.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE MATERIAL ARCHIVE */}
      <section id="materials" className="relative bg-[#1A100B] py-24 sm:py-32 px-6 sm:px-12 border-t border-[#E2C196]/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#E2C196]/15 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] text-[#E2C196] font-semibold block mb-3">
                Materiality Archive
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#F6E7D0]">
                A Curated Repository of Raw Mass
              </h2>
            </div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#F6E7D0]/60 max-w-xs">
              Directly quarried, ethically harvested, and artisanally finished.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materialArchive.map((mat, idx) => (
              <div
                key={mat.name}
                className="bg-[#24160F] border border-[#E2C196]/20 p-8 rounded-sm space-y-4 hover:border-[#E2C196]/60 transition-colors duration-500"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#E2C196]">ARCHIVE // 0{idx + 1}</span>
                  <span className="text-[11px] uppercase tracking-wider text-[#F6E7D0]/50 font-sans">
                    {mat.typology}
                  </span>
                </div>

                <h3 className="text-2xl font-serif text-[#F6E7D0]">{mat.name}</h3>

                <div className="text-xs text-[#E2C196]/80 font-mono">
                  Origin: {mat.origin}
                </div>

                <div className="space-y-3 pt-2 text-xs text-[#F6E7D0]/70 leading-relaxed font-light">
                  <p>
                    <strong className="text-[#F6E7D0] font-normal">Application:</strong> {mat.application}
                  </p>
                  <p>
                    <strong className="text-[#F6E7D0] font-normal">Tactile Notes:</strong> {mat.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INVITATION */}
      <section className="relative bg-[#F2E8DC] text-[#3B2417] py-24 sm:py-32 px-6 sm:px-12 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.28em] text-[#B07A4F] font-semibold">
            Commission an Architecture of Permanence
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#3B2417]">
            Begin Your Studio Consultation
          </h2>
          <p className="text-sm sm:text-base text-[#3B2417]/80 font-light leading-relaxed">
            We collaborate with discerning residential and commercial clients across Sri Lanka and internationally.
          </p>
          <div className="pt-4">
            <Link
              href="/enquiry"
              className="min-h-[50px] px-8 py-3.5 inline-flex items-center justify-center rounded-full bg-[#3B2417] text-[#F2E8DC] font-sans text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#B07A4F] transition-all duration-300"
            >
              Inquire with the Atelier
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
