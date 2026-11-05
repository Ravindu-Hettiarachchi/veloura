import { Enquiry } from "@/components/sections/Enquiry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultation & Enquiry",
  description: "Start a conversation about your interior project with VELOURA.",
};

export default function EnquiryPage() {
  return <Enquiry />;
}
