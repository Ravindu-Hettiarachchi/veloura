import React from "react";
import { Studio } from "@/components/sections/Studio";
import { Materials } from "@/components/sections/Materials";
import { ArchDivider } from "@/components/ui/ArchDivider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Studio",
  description: "A design practice grounded in everyday life, working with natural materials in Sri Lanka.",
};

export default function StudioPage() {
  return (
    <div className="w-full">
      <div id="studio-top" tabIndex={-1} className="sr-only">The Studio</div>
      <Studio />
      <div className="relative -mt-10 sm:-mt-14 z-20 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="light" inverted={true} withPendant={false} />
      </div>
      <Materials />
    </div>
  );
}
