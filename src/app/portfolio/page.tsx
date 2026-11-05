import React from "react";
import type { Metadata } from "next";
import { Portfolio } from "@/components/sections/Portfolio";

export const metadata: Metadata = {
  title: "Selected Works",
  description: "Recent residential and commercial interior projects designed across Sri Lanka.",
};

export default function PortfolioPage() {
  return (
    <div className="w-full">
      <div id="portfolio-top" tabIndex={-1} className="sr-only">Portfolio</div>
      <Portfolio />
    </div>
  );
}
