import { Portfolio } from "@/components/sections/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Recent residential and commercial interior projects designed across Sri Lanka.",
};

export default function PortfolioPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Portfolio />
    </div>
  );
}
