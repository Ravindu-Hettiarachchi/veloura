"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { EASE } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let enquiryInView = false;
    let scrolledPastHero = false;

    const updateVisibility = () => {
      setIsVisible(scrolledPastHero && !enquiryInView);
    };

    const handleScroll = () => {
      scrolledPastHero = window.scrollY > window.innerHeight * 0.75;
      updateVisibility();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Observe enquiry section
    const enquiryEl = document.getElementById("enquiry");
    let observer: IntersectionObserver | null = null;

    if (enquiryEl) {
      observer = new IntersectionObserver(
        (entries) => {
          enquiryInView = entries.some((e) => e.isIntersecting);
          updateVisibility();
        },
        { threshold: 0.1 }
      );
      observer.observe(enquiryEl);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer && enquiryEl) {
        observer.unobserve(enquiryEl);
      }
    };
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello VELOURA, I would like to schedule a private consultation."
  )}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 16 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#24160F] border border-[#E2C196] text-[#E2C196] hover:bg-[#5A3A2A] hover:text-[#F6E7D0] flex items-center justify-center shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] active:scale-95 focus-visible:ring-2 focus-visible:ring-caramel"
            aria-label="Direct WhatsApp consultation"
          >
            {/* Elegant Veloura Emblem Icon */}
            <div className="relative w-7 h-7 pointer-events-none" aria-hidden="true">
              <Image
                src="/brand/veloura-icon-light.png"
                alt=""
                fill
                sizes="28px"
                className="object-contain"
              />
            </div>
          </a>
        </m.div>
      )}
    </AnimatePresence>
  );
}
