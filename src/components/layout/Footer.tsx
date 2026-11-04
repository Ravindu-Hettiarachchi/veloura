"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArchDivider } from "@/components/ui/ArchDivider";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello VELOURA, I would like to schedule a private consultation."
  )}`;

  const hasContactDetails = Boolean(
    siteConfig.contact.address ||
      siteConfig.contact.email ||
      siteConfig.contact.hours
  );

  return (
    <footer
      className="relative bg-[#24160F] text-[#F6E7D0] pt-20 pb-12 px-6 sm:px-12 border-t border-[#E2C196]/20 overflow-hidden"
      aria-label="Footer"
    >
      {/* Arch Outline Divider Transition */}
      <div className="absolute top-0 inset-x-0 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="dark" withPendant={false} />
      </div>

      {/* Decorative Low-opacity (4%) Emblem Watermark */}
      <div
        className="absolute -bottom-16 -right-16 w-96 sm:w-[500px] h-96 sm:h-[500px] opacity-[0.04] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/brand/veloura-icon-light.png"
          alt=""
          fill
          sizes="500px"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Logo & Atelier Statement Column */}
          <div className="md:col-span-5 space-y-6">
            <Link
              href="#top"
              className="inline-block relative w-48 h-12 focus-visible:ring-2 focus-visible:ring-caramel rounded-sm"
              aria-label="VELOURA Home"
            >
              <Image
                src="/brand/veloura-logo-light-text.png"
                alt="VELOURA"
                fill
                sizes="192px"
                className="object-contain object-left"
              />
            </Link>

            <p className="text-sm text-[#F6E7D0]/70 max-w-sm leading-relaxed font-sans font-light">
              An architectural interior atelier crafting spaces of quiet permanence.
              Commissioning bespoke private residences and commercial galleries.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#E2C196] hover:text-[#F6E7D0] transition-colors py-1 border-b border-[#E2C196]/40 focus-visible:ring-2 focus-visible:ring-caramel"
              >
                <span>Direct WhatsApp Consultation</span>
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Directory Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2C196] font-sans font-semibold block mb-4">
              Directory
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.2em] font-sans">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#F6E7D0]/70 hover:text-[#E2C196] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-caramel"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Appointments Column: Renders only when non-empty */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#E2C196] font-sans font-semibold block mb-4">
              Atelier Inquiries
            </span>

            {hasContactDetails ? (
              <div className="space-y-3">
                {siteConfig.contact.address && (
                  <p className="text-sm text-[#F6E7D0]/80 font-sans leading-relaxed whitespace-pre-line">
                    {siteConfig.contact.address}
                  </p>
                )}
                {siteConfig.contact.hours && (
                  <p className="text-xs text-[#E2C196]/80 font-mono pt-1">
                    {siteConfig.contact.hours}
                  </p>
                )}
                {siteConfig.contact.email && (
                  <p className="text-xs text-[#F6E7D0]/60 font-sans">
                    Email: {siteConfig.contact.email}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-xs text-[#F6E7D0]/60 font-sans leading-relaxed">
                Consultations are arranged by private appointment via WhatsApp or direct enquiry.
              </p>
            )}
          </div>
        </div>

        {/* Thin Caramel Line */}
        <div className="w-full h-[1px] bg-[#E2C196]/25" />

        {/* Bottom Copyright & Location Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6E7D0]/50 font-sans tracking-wide gap-4">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <p className="text-[11px] text-[#E2C196]/70">
            Interior design studio, Colombo.
          </p>
        </div>
      </div>
    </footer>
  );
}
