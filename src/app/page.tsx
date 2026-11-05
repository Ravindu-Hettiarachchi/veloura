import React from "react";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="w-full">
      <div id="top" tabIndex={-1} className="sr-only">Top of page</div>
      <Hero />
    </div>
  );
}
