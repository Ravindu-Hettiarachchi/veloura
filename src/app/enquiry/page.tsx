import { Enquiry } from "@/components/sections/Enquiry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquiry",
  description: "Start a conversation about your interior project with VELOURA.",
};

export default function EnquiryPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <Enquiry />
    </div>
  );
}
