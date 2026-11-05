"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/constants";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const [isNavigating, setIsNavigating] = useState(false);
  const [displayPath, setDisplayPath] = useState(pathname);
  const prevPathRef = useRef(pathname);

  // Manage route transition and scroll restoration
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevent browser from restoring scrolled position on refresh
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }

    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setIsNavigating(true);

      // Instant scroll to top on page switch
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }

      setDisplayPath(pathname);

      // Keep transition brief, refined and responsive (320ms)
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 340);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Ensure home page loads at the very top on refresh
  useEffect(() => {
    if (typeof window !== "undefined" && pathname === "/" && !window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      {/* 
        -------------------------------------------------------------
        1. Top Copper Hairline Progress Indicator
        Sweeps across the top of the viewport on page change
        -------------------------------------------------------------
      */}
      <AnimatePresence>
        {isNavigating && !prefersReduced && (
          <m.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.32,
              ease: EASE,
            }}
            style={{ transformOrigin: "left" }}
            className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#B07A4F] z-50 pointer-events-none shadow-[0_0_8px_#E2C196]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* 
        -------------------------------------------------------------
        2. Architectural Brand Veil (Arch & Glowing Lamp Signature)
        Soft, tactile transitional loading state between pages
        -------------------------------------------------------------
      */}
      <AnimatePresence>
        {isNavigating && !prefersReduced && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: EASE }}
            className="fixed inset-0 z-40 bg-[#F2E8DC]/80 backdrop-blur-xs flex flex-col items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            {/* Miniature Arch & Lamp Silhouette */}
            <div className="flex flex-col items-center space-y-3">
              {/* Cord hanging down */}
              <div className="w-[1px] h-8 bg-[#B07A4F]" />

              {/* Glowing Lamp */}
              <div className="relative flex items-center justify-center">
                <m.div
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.6, 0.9, 0.6],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: EASE,
                  }}
                  className="absolute w-10 h-10 rounded-full bg-[#E2C196] blur-xs"
                />
                <div className="w-5 h-5 rounded-full border border-[#B07A4F] bg-[#F2E8DC] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#B07A4F]" />
                </div>
              </div>

              {/* Studio Wordmark */}
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#3B2417]/80 pt-2">
                VELOURA
              </span>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* 
        -------------------------------------------------------------
        3. Smooth Page Ingress Transition
        Each page enters with a gentle fade and slight elevation
        -------------------------------------------------------------
      */}
      <m.div
        key={displayPath}
        initial={prefersReduced ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReduced ? 0 : 0.4,
          ease: EASE,
        }}
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </m.div>
    </>
  );
}
