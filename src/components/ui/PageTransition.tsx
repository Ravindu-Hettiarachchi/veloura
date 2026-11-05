"use client";

import React, { useEffect, useState, useRef, useTransition } from "react";
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
  const fallbackTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Immediately trigger transition on internal link click
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Only handle internal relative paths, excluding hash-only or external links
      if (
        href.startsWith("/") &&
        !href.startsWith("//") &&
        !href.startsWith("/#") &&
        target.target !== "_blank" &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        // Strip query/hash to compare base paths
        const targetPath = href.split("?")[0].split("#")[0];
        const currentPath = pathname.split("?")[0].split("#")[0];

        if (targetPath !== currentPath) {
          setIsNavigating(true);

          // Safety fallback timeout to prevent stuck state
          if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
          fallbackTimerRef.current = setTimeout(() => {
            setIsNavigating(false);
          }, 1800);
        }
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, [pathname]);

  // 2. React to pathname changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
    }

    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setIsNavigating(true);

      // Force instant scroll to top before revealing new page
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }

      setDisplayPath(pathname);

      // Graceful 380ms transition duration
      const timer = setTimeout(() => {
        setIsNavigating(false);
      }, 380);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // 3. Ensure home page starts strictly at top on refresh/load
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
        Sweeps smoothly across the top of the viewport
        -------------------------------------------------------------
      */}
      <AnimatePresence>
        {isNavigating && !prefersReduced && (
          <m.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.38,
              ease: EASE,
            }}
            style={{ transformOrigin: "left" }}
            className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#B07A4F] z-50 pointer-events-none shadow-[0_0_10px_#E2C196]"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* 
        -------------------------------------------------------------
        2. Architectural Brand Loading Veil (Arch & Glowing Lamp)
        Subtle tactile transition matching VELOURA's signature arch & pendant
        -------------------------------------------------------------
      */}
      <AnimatePresence>
        {isNavigating && !prefersReduced && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: EASE }}
            className="fixed inset-0 z-40 bg-[#F2E8DC]/85 backdrop-blur-xs flex flex-col items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div className="flex flex-col items-center space-y-4">
              {/* Miniature Architectural Arch Window */}
              <div className="relative w-16 h-24 rounded-t-full border border-[#B07A4F]/60 flex flex-col items-center overflow-hidden bg-[#F6E7D0]/60 shadow-xs">
                {/* Copper Pendant Cord */}
                <div className="w-[1px] h-11 bg-[#B07A4F]" />

                {/* Glowing Pendant Lamp Filament */}
                <div className="relative flex items-center justify-center">
                  <m.div
                    animate={{
                      scale: [1, 1.35, 1],
                      opacity: [0.55, 0.95, 0.55],
                    }}
                    transition={{
                      duration: 0.75,
                      repeat: Infinity,
                      ease: EASE,
                    }}
                    className="absolute w-8 h-8 rounded-full bg-[#E2C196] blur-xs"
                  />
                  <div className="relative w-4 h-4 rounded-full border border-[#B07A4F] bg-[#F2E8DC] flex items-center justify-center shadow-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B07A4F]" />
                  </div>
                </div>
              </div>

              {/* Studio Wordmark */}
              <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#3B2417]/75">
                VELOURA
              </span>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* 
        -------------------------------------------------------------
        3. Smooth Page Ingress Transition
        Fade & subtle upward float for seamless layout entry
        -------------------------------------------------------------
      */}
      <m.div
        key={displayPath}
        initial={prefersReduced ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: prefersReduced ? 0 : 0.42,
          ease: EASE,
        }}
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </m.div>
    </>
  );
}
