import { Portfolio } from "@/components/sections/Portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Works",
  description: "Recent residential and commercial interior projects designed across Sri Lanka.",
};

export default function PortfolioPage() {
  return <Portfolio />;
}
