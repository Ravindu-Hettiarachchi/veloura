"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const serviceOptions = [
  "Full interior architecture",
  "Complete renovation",
  "Spatial styling & curation",
  "Custom furniture & lighting",
];

const timelineOptions = [
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

export default function EnquiryPage() {
  const [typology, setTypology] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const handleToggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const isSubmitDisabled = !typology;

  // Construct message respecting constraints
  const constructWhatsAppMessage = () => {
    let msg = `Hello VELOURA, I would like to enquire about a private consultation.`;

    if (typology) {
      msg += `\n\nTypology: ${typology}`;
    }

    if (selectedServices.length > 0) {
      msg += `\nServices: ${selectedServices.join(", ")}`;
    }

    if (selectedTimeline) {
      msg += `\nTimeline: ${selectedTimeline}`;
    }

    if (notes.trim()) {
      msg += `\nNotes: ${notes.trim()}`;
    }

    if (clientName.trim()) {
      msg += `\nName: ${clientName.trim()}`;
    }

    return encodeURIComponent(msg);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${constructWhatsAppMessage()}`;

  const hasContactDetails = Boolean(
    siteConfig.contact.address ||
      siteConfig.contact.email ||
      siteConfig.contact.hours
  );

  return (
    <div className="relative w-full pt-28 sm:pt-36 bg-[#1A100B] text-[#F6E7D0] pb-24 sm:pb-36">
      {/* 1. ENQUIRY HERO HEADER */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pb-16 border-b border-[#E2C196]/15">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs uppercase tracking-[0.28em] text-[#E2C196] mb-8">
          <span>Private Consultation</span>
          <span className="font-mono text-[11px] text-[#F6E7D0]/50 tracking-widest mt-2 sm:mt-0">
            DIRECT ATELIER CONCIERGE
          </span>
        </div>

        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F6E7D0] leading-[1.08]">
            Begin a <span className="italic text-[#E2C196]">Dialogue</span>
          </h1>
          <p className="text-base sm:text-xl text-[#F6E7D0]/70 font-light leading-relaxed max-w-2xl">
            We welcome inquiries for bespoke residences, private penthouses, and commercial galleries.
            Configure your project brief below to connect directly with our studio concierge.
          </p>
        </div>
      </section>

      {/* 2. MAIN ENQUIRY SUITE */}
      <section className="px-6 sm:px-12 max-w-7xl mx-auto pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Step-by-Step Interactive Brief Builder */}
          <div className="lg:col-span-8 bg-[#24160F] border border-[#E2C196]/20 p-8 sm:p-12 rounded-sm space-y-12 shadow-2xl">
            {/* Step 1: Typology */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#E2C196]">
                <span>01</span>
                <span>·</span>
                <span className="uppercase tracking-widest text-[11px]">Commission Typology</span>
                <span className="text-xs text-red-400">*</span>
              </div>
              <p className="text-xs text-[#F6E7D0]/60 font-light">
                Please select the primary classification of your space to proceed.
              </p>

              <div
                role="radiogroup"
                aria-label="Commission Typology"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
              >
                {["Residential", "Commercial"].map((type) => {
                  const isSelected = typology === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setTypology(type)}
                      className={`min-h-[72px] px-6 py-4 rounded-sm border text-left flex items-center justify-between transition-all duration-300 focus-visible:ring-2 focus-visible:ring-caramel ${
                        isSelected
                          ? "bg-[#5A3A2A]/50 border-[#E2C196] text-[#F6E7D0] shadow-lg"
                          : "bg-[#1A100B]/60 border-[#E2C196]/20 text-[#F6E7D0]/75 hover:border-[#E2C196]/60"
                      }`}
                    >
                      <div>
                        <span className="font-serif text-xl block text-[#F6E7D0]">{type}</span>
                        <span className="text-[10px] uppercase tracking-wider text-[#E2C196]/80 font-sans">
                          {type === "Residential" ? "Villas · Penthouses · Estates" : "Galleries · Salons · Boutiques"}
                        </span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? "border-[#E2C196] bg-[#E2C196]" : "border-[#E2C196]/40"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#1A100B]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Services */}
            <div className="space-y-4 pt-6 border-t border-[#E2C196]/15">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#E2C196]">
                <span>02</span>
                <span>·</span>
                <span className="uppercase tracking-widest text-[11px]">Scope of Services</span>
              </div>
              <p className="text-xs text-[#F6E7D0]/60 font-light">
                Select all that apply to your project.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {serviceOptions.map((service) => {
                  const isSelected = selectedServices.includes(service);
                  return (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleToggleService(service)}
                      className={`min-h-[46px] px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-sans transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-caramel ${
                        isSelected
                          ? "bg-[#E2C196] text-[#1A100B] border-[#E2C196] font-medium"
                          : "bg-[#1A100B]/50 border-[#E2C196]/20 text-[#F6E7D0]/70 hover:border-[#E2C196]/50"
                      }`}
                    >
                      {service}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div className="space-y-4 pt-6 border-t border-[#E2C196]/15">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#E2C196]">
                <span>03</span>
                <span>·</span>
                <span className="uppercase tracking-widest text-[11px]">Anticipated Timeline</span>
              </div>
              <p className="text-xs text-[#F6E7D0]/60 font-light">
                When do you anticipate commencing design or construction?
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {timelineOptions.map((time) => {
                  const isSelected = selectedTimeline === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTimeline(time)}
                      className={`min-h-[46px] px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-sans transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-caramel ${
                        isSelected
                          ? "bg-[#E2C196] text-[#1A100B] border-[#E2C196] font-medium"
                          : "bg-[#1A100B]/50 border-[#E2C196]/20 text-[#F6E7D0]/70 hover:border-[#E2C196]/50"
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Optional Name & Notes */}
            <div className="space-y-4 pt-6 border-t border-[#E2C196]/15">
              <div className="flex items-center space-x-3 text-xs font-mono text-[#E2C196]">
                <span>04</span>
                <span>·</span>
                <span className="uppercase tracking-widest text-[11px]">Personal Context (Optional)</span>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <label htmlFor="client-name" className="block text-xs uppercase tracking-wider text-[#F6E7D0]/60 mb-2 font-sans">
                    Your Name (Optional)
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Maya Senanayake"
                    className="w-full min-h-[48px] px-4 rounded-sm bg-[#1A100B] border border-[#E2C196]/25 text-[#F6E7D0] placeholder:text-[#F6E7D0]/30 text-sm focus-visible:ring-2 focus-visible:ring-caramel outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="client-notes" className="block text-xs uppercase tracking-wider text-[#F6E7D0]/60 mb-2 font-sans">
                    Additional Spatial Notes or Location (Optional)
                  </label>
                  <textarea
                    id="client-notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. 5,000 sq.ft residential plot in Cinnamon Gardens, seeking a warm minimalist palette..."
                    className="w-full p-4 rounded-sm bg-[#1A100B] border border-[#E2C196]/25 text-[#F6E7D0] placeholder:text-[#F6E7D0]/30 text-sm focus-visible:ring-2 focus-visible:ring-caramel outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Final Action Button */}
            <div className="pt-8 border-t border-[#E2C196]/15">
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
                className={`w-full min-h-[54px] px-8 py-4 rounded-full font-sans text-xs uppercase tracking-[0.22em] font-medium flex items-center justify-center transition-all duration-300 shadow-2xl focus-visible:ring-2 focus-visible:ring-caramel ${
                  isSubmitDisabled
                    ? "bg-[#5A3A2A]/40 text-[#F6E7D0]/40 border border-[#5A3A2A] cursor-not-allowed"
                    : "bg-[#E2C196] text-[#1A100B] hover:bg-cream cursor-pointer"
                }`}
              >
                <span>Send on WhatsApp Concierge</span>
                <span className="ml-3 font-serif text-base">→</span>
              </a>

              {isSubmitDisabled && (
                <p className="text-[11px] text-[#E2C196]/60 text-center mt-3 font-light">
                  * Please select a Commission Typology (Step 01) to activate consultation dispatch.
                </p>
              )}
            </div>
          </div>

          {/* Right: Atelier Studio Information */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#24160F] border border-[#E2C196]/20 p-8 rounded-sm space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E2C196] font-semibold block pb-3 border-b border-[#E2C196]/20">
                Atelier Location
              </span>

              <div className="space-y-4 text-xs font-light text-[#F6E7D0]/80">
                <p className="font-serif text-lg text-[#F6E7D0]">VELOURA Interior Design Studio</p>
                <p>Colombo 07, Western Province</p>
                <p>Sri Lanka</p>
              </div>

              <div className="pt-2 text-xs font-mono text-[#E2C196]">
                Private Consultations by Prior Appointment Only
              </div>
            </div>

            <div className="bg-[#1A100B] border border-[#E2C196]/20 p-8 rounded-sm space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E2C196] font-semibold block">
                Direct Atelier Dispatch
              </span>
              <p className="text-xs text-[#F6E7D0]/70 font-light leading-relaxed">
                Prefer email or phone? Our studio coordinator responds within 24 hours to all qualified inquiries.
              </p>
              <div className="pt-2">
                <a
                  href={`mailto:${siteConfig.contact.email || "concierge@veloura.pixbeelabs.com"}`}
                  className="text-xs uppercase tracking-[0.2em] text-[#E2C196] hover:text-[#F6E7D0] border-b border-[#E2C196]/40 pb-1 inline-block"
                >
                  Email Studio Concierge →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
