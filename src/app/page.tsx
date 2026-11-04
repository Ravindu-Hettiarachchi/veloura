import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Studio } from "@/components/sections/Studio";
import { Materials } from "@/components/sections/Materials";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Enquiry } from "@/components/sections/Enquiry";
import { ArchDivider } from "@/components/ui/ArchDivider";

export default function Home() {
  return (
    <>
      <div id="top" tabIndex={-1} className="sr-only">Top of page</div>

      {/* 1. Hero (latte #F2E8DC) */}
      <Hero />

      {/* Arch Divider: Hero (latte) -> Studio (cream) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="light" inverted={false} withPendant={false} />
      </div>

      {/* 2. Studio (cream #F6E7D0) */}
      <Studio />

      {/* Arch Divider: Studio (cream) -> Materials (mocha) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="light" inverted={true} withPendant={false} />
      </div>

      {/* 3. Materials (mocha #5A3A2A) */}
      <Materials />

      {/* Arch Divider: Materials (mocha) -> Portfolio (latte) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="dark" inverted={false} withPendant={false} />
      </div>

      {/* 4. Portfolio (latte #F2E8DC) */}
      <Portfolio />

      {/* Arch Divider: Portfolio (latte) -> Process (espresso) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="light" inverted={true} withPendant={false} />
      </div>

      {/* 5. Process (espresso #24160F) */}
      <Process />

      {/* Arch Divider: Process (espresso) -> Enquiry (cream) */}
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="dark" inverted={false} withPendant={false} />
      </div>

      {/* 6. Enquiry (cream #F6E7D0) */}
      <Enquiry />
    </>
  );
}
