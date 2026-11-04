"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";

type ProjectType = "Residential" | "Commercial";
type ServiceType =
  | "Full interior design"
  | "Renovation"
  | "Styling"
  | "Furniture and lighting";
type TimelineType =
  | "As soon as possible"
  | "1–3 months"
  | "3–6 months"
  | "Just exploring";

const SERVICES: ServiceType[] = [
  "Full interior design",
  "Renovation",
  "Styling",
  "Furniture and lighting",
];

const TIMELINES: TimelineType[] = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

export function Enquiry() {
  // Fix: Do not pre-select any type, service or timeline
  const [projectType, setProjectType] = useState<ProjectType | null>(null);
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [timeline, setTimeline] = useState<TimelineType | "">("");
  const [clientName, setClientName] = useState("");

  const toggleService = (service: ServiceType) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  // Build message strictly from what the visitor chose, omit Name if empty
  const buildMessage = () => {
    if (!projectType) return "";
    let msg = `Hello VELOURA, I'm interested in a ${projectType} project.`;
    if (selectedServices.length > 0) {
      msg += ` Service: ${selectedServices.join(", ")}.`;
    }
    if (timeline) {
      msg += ` Timeline: ${timeline}.`;
    }
    if (clientName.trim()) {
      msg += ` Name: ${clientName.trim()}.`;
    }
    return msg;
  };

  const messageText = buildMessage();
  const whatsappUrl = projectType
    ? `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(messageText)}`
    : "#";

  return (
    <section
      id="enquiry"
      className="relative bg-[#F2E8DC] text-[#3B2417] py-28 sm:py-36 px-6 sm:px-12 border-t border-[#B07A4F]/25 scroll-mt-24 sm:scroll-mt-28 overflow-hidden"
      aria-label="Commission an Enquiry"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-3 text-[#B07A4F] mb-4">
            <span className="w-8 h-[1px] bg-[#B07A4F]/40" />
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-semibold">
              05 / Studio Commission
            </span>
            <span className="w-8 h-[1px] bg-[#B07A4F]/40" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#3B2417] leading-tight">
            Initiate a Private Dialogue
          </h2>
          <p className="mt-4 text-[#3B2417]/80 font-sans text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Specify the scope of your commission below. Your selections formulate
            a direct WhatsApp enquiry to our principal design desk.
          </p>
        </FadeIn>

        {/* Step-by-Step Card Interface */}
        <div className="bg-[#FAF4EC] border border-[#B07A4F]/35 rounded-sm p-6 sm:p-12 shadow-sm space-y-12">
          {/* Step 1: Project Classification (Required to enable button) */}
          <fieldset>
            <legend className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#B07A4F] mb-4 block">
              Step 01 · Project Classification <span className="text-[#3B2417] font-normal">(Select one to begin)</span>
            </legend>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              role="radiogroup"
              aria-label="Project Classification"
            >
              {(["Residential", "Commercial"] as const).map((type) => {
                const isSelected = projectType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setProjectType(type)}
                    className={`min-h-[76px] sm:min-h-[84px] px-6 py-4 rounded-sm border text-left flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] focus-visible:ring-2 focus-visible:ring-caramel ${
                      isSelected
                        ? "border-[#3B2417] bg-[#3B2417] text-[#F6E7D0] shadow-md"
                        : "border-[#B07A4F]/35 bg-[#F2E8DC]/50 text-[#3B2417] hover:border-[#B07A4F]"
                    }`}
                  >
                    <div>
                      <span className="font-serif text-xl sm:text-2xl font-medium block">
                        {type}
                      </span>
                      <span
                        className={`text-[11px] font-sans uppercase tracking-[0.15em] block mt-0.5 ${
                          isSelected ? "text-[#E2C196]" : "text-[#B07A4F]"
                        }`}
                      >
                        {type === "Residential"
                          ? "Private Homes & Estates"
                          : "Galleries, Boutiques & Sanctuaries"}
                      </span>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        isSelected
                          ? "border-[#E2C196] bg-[#E2C196]"
                          : "border-[#B07A4F]/40"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-[#3B2417]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Step 2: Multi-select chips for Service Scope */}
          <fieldset className="pt-8 border-t border-[#B07A4F]/25">
            <legend className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#B07A4F] mb-4 block">
              Step 02 · Service Scope <span className="text-[#3B2417]/70 font-normal">(Optional multi-select)</span>
            </legend>
            <div className="flex flex-wrap gap-3">
              {SERVICES.map((service) => {
                const isSelected = selectedServices.includes(service);
                return (
                  <button
                    key={service}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => toggleService(service)}
                    className={`min-h-[48px] px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans tracking-wide border transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] focus-visible:ring-2 focus-visible:ring-caramel ${
                      isSelected
                        ? "bg-[#B07A4F] text-[#F6E7D0] border-[#B07A4F] shadow-xs"
                        : "bg-[#F2E8DC]/40 text-[#3B2417] border-[#B07A4F]/35 hover:border-[#B07A4F]"
                    }`}
                  >
                    <span className="mr-1.5">{isSelected ? "✓" : "+"}</span>
                    {service}
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Step 3: Single-select chips for Timeline + Optional Name field */}
          <fieldset className="pt-8 border-t border-[#B07A4F]/25">
            <legend className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#B07A4F] mb-4 block">
              Step 03 · Desired Timeline &amp; Client Details <span className="text-[#3B2417]/70 font-normal">(Optional)</span>
            </legend>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
              {TIMELINES.map((t) => {
                const isSelected = timeline === t;
                return (
                  <button
                    key={t}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setTimeline(isSelected ? "" : t)}
                    className={`min-h-[48px] px-5 py-2.5 rounded-full text-xs font-sans tracking-wide border transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] focus-visible:ring-2 focus-visible:ring-caramel ${
                      isSelected
                        ? "bg-[#3B2417] text-[#F6E7D0] border-[#3B2417]"
                        : "bg-[#F2E8DC]/40 text-[#3B2417] border-[#B07A4F]/35 hover:border-[#B07A4F]"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            {/* Optional Name Input Field (No Default Name) */}
            <div className="mt-4 max-w-md">
              <label
                htmlFor="client-name"
                className="block text-xs uppercase tracking-[0.15em] font-sans text-[#3B2417]/80 mb-2"
              >
                Your Name / Family Office (Optional)
              </label>
              <input
                id="client-name"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Leave blank for confidential enquiry"
                className="w-full px-4 py-3 rounded-sm bg-white/70 border border-[#B07A4F]/40 text-[#3B2417] placeholder-[#3B2417]/40 text-sm font-sans focus:bg-white focus:border-[#3B2417] focus-visible:ring-2 focus-visible:ring-caramel transition-colors"
              />
            </div>
          </fieldset>

          {/* Live Message Preview Box */}
          <div className="p-4 sm:p-5 rounded-sm bg-[#F2E8DC] border border-[#B07A4F]/30 text-xs text-[#3B2417]/90 font-mono leading-relaxed">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#B07A4F] font-sans font-semibold mb-1">
              Generated WhatsApp Message:
            </span>
            {projectType ? (
              <>&ldquo;{messageText}&rdquo;</>
            ) : (
              <span className="italic text-[#3B2417]/60">
                Please select a project classification (Step 01) to formulate your message.
              </span>
            )}
          </div>

          {/* Final Action Button: Disabled until Step 1 is chosen */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            {projectType ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#3B2417] hover:bg-[#5A3A2A] text-[#F6E7D0] uppercase text-xs tracking-[0.25em] font-medium shadow-md transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-caramel"
              >
                <span>Send on WhatsApp</span>
                <svg
                  className="ml-3 w-4 h-4 text-[#E2C196]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-disabled="true"
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-[#3B2417]/40 text-[#F6E7D0]/60 uppercase text-xs tracking-[0.25em] font-medium cursor-not-allowed"
              >
                <span>Select Project Type to Continue</span>
              </button>
            )}

            <span className="text-xs text-[#3B2417]/60 font-sans tracking-wide">
              Replies typically within 24 hours · Confidential consultation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
