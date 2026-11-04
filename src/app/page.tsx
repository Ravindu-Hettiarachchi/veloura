import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Studio } from "@/components/sections/Studio";
import { Portfolio } from "@/components/sections/Portfolio";
import { Philosophy } from "@/components/sections/Philosophy";
import { Enquiry } from "@/components/sections/Enquiry";
import { Footer } from "@/components/layout/Footer";
import { ArchDivider } from "@/components/ui/ArchDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="relative w-full overflow-hidden">
        {/* Section 1: Hero (espresso #24160F) */}
        <Hero />

        {/* Transition: Dark Arch Divider with Pendant */}
        <div className="relative -mt-12 sm:-mt-16 z-30 pointer-events-none">
          <ArchDivider variant="dark" withPendant={true} />
        </div>

        {/* Section 2: The Studio (latte #F2E8DC) */}
        <Studio />

        {/* Transition: Light Arch Divider */}
        <div className="relative -mt-10 sm:-mt-14 z-30 pointer-events-none">
          <ArchDivider variant="light" withPendant={false} inverted />
        </div>

        {/* Section 3: Curated Portfolio (espresso #24160F) */}
        <Portfolio />

        {/* Transition: Dark Arch Divider */}
        <div className="relative -mt-10 sm:-mt-14 z-30 pointer-events-none">
          <ArchDivider variant="dark" withPendant={false} />
        </div>

        {/* Section 4: Philosophy & Tenets (mocha #5A3A2A) */}
        <Philosophy />

        {/* Transition: Dark Arch Divider */}
        <div className="relative -mt-10 sm:-mt-14 z-30 pointer-events-none">
          <ArchDivider variant="dark" withPendant={false} inverted />
        </div>

        {/* Section 5: Enquiry (latte #F2E8DC) */}
        <Enquiry />
      </main>
      <Footer />
    </>
  );
}
