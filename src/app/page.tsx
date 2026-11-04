import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Studio } from "@/components/sections/Studio";
import { Portfolio } from "@/components/sections/Portfolio";
import { Ethos } from "@/components/sections/Ethos";
import { Process } from "@/components/sections/Process";
import { Enquiry } from "@/components/sections/Enquiry";
import { Footer } from "@/components/layout/Footer";
import { ArchDivider } from "@/components/ui/ArchDivider";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <div id="top" tabIndex={-1} className="sr-only">Top of page</div>
      <Header />
      <main id="main-content" className="relative w-full overflow-hidden">
        {/* Section 1: Hero (espresso #24160F) */}
        <Hero />

        {/* Divider 1: Hero -> Studio (Dark with Pendant) */}
        <div className="relative -mt-12 sm:-mt-16 z-30 pointer-events-none" aria-hidden="true">
          <ArchDivider variant="dark" withPendant={true} />
        </div>

        {/* Section 2: The Studio (latte #F2E8DC) */}
        <Studio />

        {/* Divider 2: Studio -> Portfolio (Light Inverted) */}
        <div className="relative -mt-10 sm:-mt-14 z-30 pointer-events-none" aria-hidden="true">
          <ArchDivider variant="light" inverted={true} />
        </div>

        {/* Section 3: Curated Portfolio (espresso #24160F) */}
        <Portfolio />

        {/* Divider 3: Portfolio -> Ethos (Dark) */}
        <div className="relative -mt-10 sm:-mt-14 z-30 pointer-events-none" aria-hidden="true">
          <ArchDivider variant="dark" inverted={false} />
        </div>

        {/* Section 4: Ethos & Tenets (mocha #5A3A2A) */}
        <Ethos />

        {/* Divider 4: Ethos -> Process (Dark Inverted) */}
        <div className="relative -mt-10 sm:-mt-14 z-30 pointer-events-none" aria-hidden="true">
          <ArchDivider variant="dark" inverted={true} />
        </div>

        {/* Section 5: Process / How We Work (espresso #24160F) */}
        <Process />

        {/* Divider 5: Process -> Enquiry (Dark) */}
        <div className="relative -mt-10 sm:-mt-14 z-30 pointer-events-none" aria-hidden="true">
          <ArchDivider variant="dark" inverted={false} />
        </div>

        {/* Section 6: Enquiry (latte #F2E8DC) */}
        <Enquiry />
      </main>

      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
    </>
  );
}
