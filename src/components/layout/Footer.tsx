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
      className="relative bg-[#24160F] text-[#F6E7D0] pt-24 pb-12 px-6 sm:px-12 border-t border-[#E2C196]/20 overflow-hidden"
      aria-label="Footer"
    >
      {/* Arch Outline Divider Transition */}
      <div className="absolute top-0 inset-x-0 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <ArchDivider variant="dark" withPendant={false} />
      </div>

      {/* Decorative low-opacity watermark */}
      <div
        className="absolute -bottom-16 -right-16 w-96 sm:w-[480px] h-96 sm:h-[480px] opacity-[0.04] pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <Image
          src="/brand/veloura-icon-light.png"
          alt=""
          fill
          sizes="480px"
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-[#E2C196]/20">
          {/* Logo & Studio summary */}
          <div className="md:col-span-6 space-y-5">
            <Link
              href="/"
              className="inline-block relative w-44 sm:w-48 h-10 sm:h-12 focus-visible:ring-2 focus-visible:ring-caramel rounded-sm"
              aria-label="VELOURA Home"
            >
              <Image
                src="/brand/veloura-logo-light-text.png"
                alt="VELOURA Interior Design Studio"
                fill
                sizes="192px"
                className="object-contain object-left"
              />
            </Link>

            <p className="text-sm text-[#F6E7D0]/75 max-w-sm font-normal leading-relaxed">
              An interior design studio in Colombo designing calm, enduring homes and commercial spaces.
            </p>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[#E2C196] hover:text-[#F6E7D0] transition-colors py-1 border-b border-[#E2C196]/40 focus-visible:ring-2 focus-visible:ring-caramel"
              >
                <span>Direct WhatsApp enquiry</span>
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Directory navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="nav-caps text-[#E2C196] block mb-2">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs uppercase tracking-[0.2em]">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#F6E7D0]/75 hover:text-[#E2C196] transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-caramel"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details: only when non-empty */}
          <div className="md:col-span-3 space-y-3">
            <span className="nav-caps text-[#E2C196] block mb-2">
              Studio
            </span>

            {hasContactDetails ? (
              <div className="space-y-2 text-xs text-[#F6E7D0]/75 leading-relaxed">
                {siteConfig.contact.address && <p>{siteConfig.contact.address}</p>}
                {siteConfig.contact.hours && <p className="text-[#E2C196]">{siteConfig.contact.hours}</p>}
                {siteConfig.contact.email && <p>Email: {siteConfig.contact.email}</p>}
              </div>
            ) : (
              <div className="space-y-1.5 text-xs text-[#F6E7D0]/70 leading-relaxed">
                <p>Private consultations arranged by appointment.</p>
                <p className="text-[#E2C196]">Colombo 07, Sri Lanka</p>
              </div>
            )}
          </div>
        </div>

        {/* Colophon & Location Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#F6E7D0]/60 gap-4">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="text-[#E2C196]/80">Interior design studio, Colombo.</p>
        </div>
      </div>
    </footer>
  );
}
