import { Process } from "@/components/sections/Process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description: "A clear, four-step path from your first conversation to moving in.",
};

export default function ProcessPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Process />
    </div>
  );
}
