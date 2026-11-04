import { Studio } from "@/components/sections/Studio";
import { Materials } from "@/components/sections/Materials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Studio",
  description: "A design practice grounded in everyday life, working with natural materials in Sri Lanka.",
};

export default function StudioPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Studio />
      <Materials />
    </div>
  );
}
