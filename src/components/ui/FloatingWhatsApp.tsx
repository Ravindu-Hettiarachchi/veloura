"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { EASE } from "@/lib/constants";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Hide completely on enquiry page
    if (pathname === "/enquiry") {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello VELOURA, I would like to schedule a private consultation."
  )}`;

  return (
    <AnimatePresence>
      {isVisible && pathname !== "/enquiry" && (
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
            className="w-14 h-14 rounded-full bg-[#1A100B] border border-[#E2C196] text-[#E2C196] hover:bg-[#3A2419] hover:text-[#F6E7D0] flex items-center justify-center shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] active:scale-95 focus-visible:ring-2 focus-visible:ring-caramel"
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
