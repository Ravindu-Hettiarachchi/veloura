"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";

const serviceChips = [
  "Full interior design",
  "Renovation",
  "Styling",
  "Furniture and lighting",
];

const timelineChips = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

export function Enquiry() {
  const [projectType, setProjectType] = useState<string>("");
  const [services, setServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>("");
  const [name, setName] = useState<string>("");

  const toggleService = (s: string) => {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((item) => item !== s) : [...prev, s]
    );
  };

  const isSubmitDisabled = !projectType;

  // Build the message strictly from chosen values
  const constructMessage = () => {
    let msg = `Hello VELOURA, I would like to enquire about an interior project.`;

    if (projectType) {
      msg += `\n\nProject type: ${projectType}`;
    }

    if (services.length > 0) {
      msg += `\nServices: ${services.join(", ")}`;
    }

    if (timeline) {
      msg += `\nTimeline: ${timeline}`;
    }

    if (name.trim()) {
      msg += `\nName: ${name.trim()}`;
    }

    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${constructMessage()}`;

  const hasContactDetails = Boolean(
    siteConfig.contact.address ||
      siteConfig.contact.email ||
      siteConfig.contact.hours
  );

  return (
    <section
      id="enquiry"
      className="relative w-full bg-[#F6E7D0] text-[#3B2417] py-28 sm:py-36 px-6 sm:px-10 lg:px-14 scroll-mt-24 border-t border-[#B07A4F]/20"
    >
      <div className="max-w-4xl mx-auto space-y-14">
        {/* Header */}
        <div className="space-y-4 text-center max-w-xl mx-auto">
          <span className="nav-caps text-[#B07A4F] block">
            Start a project
          </span>
          <h2 className="heading-section text-[#3B2417]">
            Start a conversation
          </h2>
          <p className="text-base sm:text-lg text-[#3B2417]/80 font-normal leading-relaxed">
            Tell us a little about your space. We will respond within one business day.
          </p>
        </div>

        {/* Step-by-Step Form Container */}
        <div className="bg-[#F2E8DC] border border-[#B07A4F]/25 p-8 sm:p-12 rounded-sm shadow-md space-y-10">
          {/* Step 1: Residential vs Commercial */}
          <div className="space-y-3">
            <span className="text-sm font-semibold text-[#3B2417] block">
              1. What type of project is this? <span className="text-red-700">*</span>
            </span>

            <div
              role="radiogroup"
              aria-label="Project Type"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1"
            >
              {["Residential", "Commercial"].map((type) => {
                const isSelected = projectType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setProjectType(type)}
                    className={`min-h-[72px] px-6 py-4 rounded-sm border text-left flex items-center justify-between transition-all duration-300 focus-visible:ring-2 focus-visible:ring-copper ${
                      isSelected
                        ? "bg-[#3B2417] text-[#F6E7D0] border-[#3B2417] shadow-sm"
                        : "bg-[#F6E7D0] text-[#3B2417] border-[#B07A4F]/30 hover:border-[#3B2417]"
                    }`}
                  >
                    <div>
                      <span className="font-serif text-xl block leading-tight">{type}</span>
                      <span className={`text-xs block mt-0.5 ${isSelected ? "text-[#E2C196]" : "text-[#3B2417]/70"}`}>
                        {type === "Residential" ? "Homes, apartments, and villas" : "Retail, dining, and offices"}
                      </span>
                    </div>

                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? "border-[#E2C196] bg-[#E2C196]" : "border-[#B07A4F]/50"
                      }`}
                    >
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#3B2417]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Multi-select service chips */}
          <div className="space-y-3 pt-6 border-t border-[#B07A4F]/20">
            <span className="text-sm font-semibold text-[#3B2417] block">
              2. What services do you need?
            </span>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {serviceChips.map((chip) => {
                const isSelected = services.includes(chip);
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => toggleService(chip)}
                    className={`btn-caps min-h-[44px] px-5 py-2.5 rounded-full transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-copper ${
                      isSelected
                        ? "bg-[#3B2417] text-[#F6E7D0] border-[#3B2417] shadow-sm"
                        : "bg-[#F6E7D0] text-[#3B2417]/85 border-[#B07A4F]/30 hover:border-[#3B2417]"
                    }`}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3: Single-select timeline chips + optional name field */}
          <div className="space-y-4 pt-6 border-t border-[#B07A4F]/20">
            <span className="text-sm font-semibold text-[#3B2417] block">
              3. When are you looking to start?
            </span>

            <div className="flex flex-wrap gap-2.5 pt-1">
              {timelineChips.map((chip) => {
                const isSelected = timeline === chip;
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setTimeline(chip)}
                    className={`btn-caps min-h-[44px] px-5 py-2.5 rounded-full transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-copper ${
                      isSelected
                        ? "bg-[#3B2417] text-[#F6E7D0] border-[#3B2417] shadow-sm"
                        : "bg-[#F6E7D0] text-[#3B2417]/85 border-[#B07A4F]/30 hover:border-[#3B2417]"
                    }`}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 max-w-md">
              <label htmlFor="name-input" className="block text-xs text-[#3B2417]/80 font-medium mb-1.5">
                Your name (optional)
              </label>
              <input
                id="name-input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Maya Senanayake"
                className="w-full min-h-[46px] px-4 rounded-sm bg-[#F6E7D0] border border-[#B07A4F]/30 text-[#3B2417] placeholder:text-[#3B2417]/40 text-sm focus-visible:ring-2 focus-visible:ring-copper outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-[#B07A4F]/20">
            <a
              href={isSubmitDisabled ? "#" : whatsappUrl}
              target={isSubmitDisabled ? undefined : "_blank"}
              rel={isSubmitDisabled ? undefined : "noopener noreferrer"}
              aria-disabled={isSubmitDisabled}
              onClick={(e) => {
                if (isSubmitDisabled) {
                  e.preventDefault();
                }
              }}
              className={`btn-caps w-full min-h-[50px] py-4 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                isSubmitDisabled
                  ? "bg-[#B07A4F]/30 text-[#3B2417]/40 cursor-not-allowed"
                  : "bg-[#3B2417] text-[#F6E7D0] hover:bg-[#5A3A2A] cursor-pointer"
              }`}
            >
              Send on WhatsApp
            </a>

            {isSubmitDisabled && (
              <p className="text-xs text-[#3B2417]/60 text-center mt-2.5 font-normal">
                Please select Residential or Commercial to continue.
              </p>
            )}
          </div>
        </div>

        {/* Contact details rendered only if non-empty in config */}
        {hasContactDetails && (
          <div className="pt-4 text-center text-xs text-[#3B2417]/75 space-y-1">
            {siteConfig.contact.address && <p>{siteConfig.contact.address}</p>}
            {siteConfig.contact.email && <p>Email: {siteConfig.contact.email}</p>}
            {siteConfig.contact.hours && <p>{siteConfig.contact.hours}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
