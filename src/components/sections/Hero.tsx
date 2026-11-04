"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/constants";
import { heroAnnotations } from "@/data/hero";

type LightState = "off" | "day" | "evening";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [lightState, setLightState] = useState<LightState>(
    prefersReduced ? "day" : "off"
  );
  const [isPulling, setIsPulling] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(Boolean(prefersReduced));
  const [eveningLoaded, setEveningLoaded] = useState(false);

  // Automatic "lights on" sequence runs ONCE on mount:
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const forcedState = params.get("state") as LightState | null;
      if (forcedState === "off" || forcedState === "day" || forcedState === "evening") {
        setLightState(forcedState);
        if (forcedState !== "off") {
          setShowAnnotations(true);
          setEveningLoaded(true);
        }
        return;
      }
    }

    if (prefersReduced) {
      setLightState("day");
      setShowAnnotations(true);
      return;
    }

    const lightTimer = setTimeout(() => {
      setLightState("day");
      // Annotations fade in after the lights come on
      setTimeout(() => {
        setShowAnnotations(true);
      }, 900);
    }, 900);

    // "Pull to change the light" hint appears after 3 seconds
    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 3000);

    return () => {
      clearTimeout(lightTimer);
      clearTimeout(hintTimer);
    };
  }, [prefersReduced]);

  // Handle cord/lamp pull interaction
  const handleToggleLight = () => {
    setHasInteracted(true);
    setShowHint(false);

    if (prefersReduced) {
      setLightState((prev) => (prev === "evening" ? "day" : "evening"));
      return;
    }

    setIsPulling(true);
    // Toggle state immediately on cord pull
    setLightState((prev) => (prev === "evening" ? "day" : "evening"));

    // Cord pull animation: moves down 10px in 0.25s then returns in 0.4s (total 0.65s)
    setTimeout(() => {
      setIsPulling(false);
    }, 650);
  };

  const isEvening = lightState === "evening";
  const isOff = lightState === "off";

  return (
    <section
      id="top"
      className="relative w-full min-h-[100svh] bg-[#F2E8DC] text-[#3B2417] flex items-center overflow-hidden border-b border-[#B07A4F]/20 pt-24 sm:pt-28 pb-12 sm:pb-16"
    >
      {/* 
        -------------------------------------------------------------
        Static Paper Grain Overlay:
        SVG feTurbulence noise at ~4% opacity with pointer-events: none
        -------------------------------------------------------------
      */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none mix-blend-multiply z-0"
        aria-hidden="true"
      >
        <filter id="hero-paper-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-paper-grain)" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full z-10">
        {/* 12-Column Grid Layout (Asymmetric, Left-Aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 
            ---------------------------------------------------------
            Left Column (5 columns on desktop):
            Headline, one line of text, two buttons
            ---------------------------------------------------------
          */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            {/* Headline: Cormorant Garamond 500, clamp(48px, 7vw, 112px), left aligned, dark-roast, no italics */}
            <h1 className="font-serif font-medium text-[#3B2417] text-[clamp(44px,6.2vw,104px)] leading-[0.98] tracking-tight">
              Rooms that feel calm
              <br />
              the moment you
              <br />
              walk in.
            </h1>

            {/* Text line: exactly 16 words (max 18 words) */}
            <p className="font-sans text-base sm:text-lg text-[#3B2417]/85 max-w-lg leading-relaxed font-normal">
              We design homes and small commercial spaces across Sri Lanka, using teak, limestone, brass and linen.
            </p>

            {/* Buttons: min tap height 48px */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-6 pt-2">
              {/* Solid dark-roast button with cream text */}
              <a
                href="#portfolio"
                className="min-h-[48px] px-8 py-3 rounded-full bg-[#3B2417] text-[#F6E7D0] hover:bg-[#5A3A2A] transition-all duration-300 font-sans text-sm tracking-wide inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#B07A4F] shadow-xs active:scale-[0.98]"
              >
                See our work
              </a>

              {/* Plain text link with a copper underline */}
              <a
                href="#enquiry"
                className="min-h-[48px] inline-flex items-center font-sans text-sm text-[#3B2417] hover:text-[#B07A4F] underline underline-offset-8 decoration-[#B07A4F] decoration-1 transition-colors focus-visible:ring-2 focus-visible:ring-[#B07A4F]"
              >
                Start a conversation
              </a>
            </div>
          </div>

          {/* 
            ---------------------------------------------------------
            Right Column (6 columns on desktop, slightly lower than text):
            One tall arch-shaped window (aspect ratio 4:5, 1px copper outline)
            With the signature "Pull the cord" pendant lamp interaction
            ---------------------------------------------------------
          */}
          <div className="md:col-span-6 lg:col-span-6 lg:col-start-7 w-full flex flex-col items-center mt-2 sm:mt-4 lg:mt-10 relative">
            {/* Arch-shaped window container (aspect ratio 4:5, 1px copper outline) */}
            <div className="relative w-full max-w-[480px] lg:max-w-[520px] aspect-[4/5] max-h-[70svh] md:max-h-none rounded-t-[200px] sm:rounded-t-[240px] lg:rounded-t-[280px] overflow-hidden border border-[#B07A4F] shadow-xl bg-[#F6E7D0]">
              {/* Day Image (Priority LCP image) */}
              <div
                className="absolute inset-0 transition-opacity ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{
                  opacity: isEvening ? 0 : 1,
                  transitionDuration: prefersReduced ? "0s" : "1.4s",
                }}
              >
                <Image
                  src="/images/hero-day.webp"
                  alt="Bright morning interior designed by VELOURA with lime plaster wall, washed linen sofa, teak coffee table and tropical plants"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Evening Image (Dusk crossfade, same framing, warm lamps on) */}
              <div
                className="absolute inset-0 transition-opacity ease-[cubic-bezier(0.76,0,0.24,1)]"
                style={{
                  opacity: isEvening ? 1 : 0,
                  transitionDuration: prefersReduced ? "0s" : "1.4s",
                }}
                aria-hidden={!isEvening}
              >
                <Image
                  src="/images/hero-evening.webp"
                  alt="Evening dusk view of the living room designed by VELOURA with warm lamps on"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* No-JavaScript fallback */}
              <noscript>
                <Image
                  src="/images/hero-day.webp"
                  alt="Bright morning interior by VELOURA"
                  fill
                  className="object-cover object-center"
                />
              </noscript>

              {/* 
                "Lights on" espresso overlay:
                Starts at 70% opacity in 'off' state, fades to 0 over 2.2s with EASE
              */}
              <m.div
                initial={false}
                animate={{
                  opacity: isOff ? 0.7 : 0,
                }}
                transition={{
                  duration: prefersReduced ? 0 : 2.2,
                  ease: EASE,
                }}
                className="absolute inset-0 bg-[#24160F] pointer-events-none z-10"
                aria-hidden="true"
              />

              {/* 
                -----------------------------------------------------
                Three Material Annotations:
                "Teak, oiled", "Lime plaster wall", "Linen, washed"
                Each is a thin 1px copper line ending in a 6px dot,
                with a small cream pill (Jost 13px, dark-roast text).
                On screens under 640px (< sm), only the first is shown.
                -----------------------------------------------------
              */}
              {heroAnnotations.map((anno, index) => {
                const isFirst = index === 0;
                return (
                  <m.div
                    key={anno.id}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: showAnnotations && !isOff ? 1 : 0,
                    }}
                    transition={{
                      duration: prefersReduced ? 0 : 0.8,
                      delay: prefersReduced ? 0 : index * 0.15,
                      ease: EASE,
                    }}
                    className={`absolute z-20 pointer-events-none items-center ${
                      isFirst ? "flex" : "hidden sm:flex"
                    }`}
                    style={{
                      left: `${anno.xPercent}%`,
                      top: `${anno.yPercent}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {anno.lineDirection === "left" ? (
                      <div className="flex items-center">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F6E7D0]/95 backdrop-blur-xs border border-[#B07A4F]/40 font-sans text-[13px] text-[#3B2417] shadow-xs whitespace-nowrap">
                          {anno.label}
                        </span>
                        <div
                          className="h-[1px] bg-[#B07A4F]"
                          style={{ width: `${anno.lineLength}px` }}
                        />
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B07A4F]" />
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#B07A4F]" />
                        <div
                          className="h-[1px] bg-[#B07A4F]"
                          style={{ width: `${anno.lineLength}px` }}
                        />
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F6E7D0]/95 backdrop-blur-xs border border-[#B07A4F]/40 font-sans text-[13px] text-[#3B2417] shadow-xs whitespace-nowrap">
                          {anno.label}
                        </span>
                      </div>
                    )}
                  </m.div>
                );
              })}

              {/* 
                -----------------------------------------------------
                Signature Interaction: "Pull the cord" Pendant Lamp
                Hangs inside the top of the arch at its horizontal centre.
                Cord runs from the ceiling canopy down to the lamp.
                -----------------------------------------------------
              */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                {/* 
                  1px copper cord hanging down into the arch.
                  Cord moves down 10px in 0.25s then returns in 0.4s on pull.
                */}
                <m.div
                  animate={{
                    y: isPulling ? 10 : 0,
                  }}
                  transition={{
                    duration: isPulling ? 0.25 : 0.4,
                    ease: EASE,
                  }}
                  className="w-[1px] h-20 sm:h-24 bg-[#B07A4F] origin-top"
                />

                {/* Lamp fixture container with pull motion */}
                <m.div
                  animate={{
                    y: isPulling ? 10 : 0,
                  }}
                  transition={{
                    duration: isPulling ? 0.25 : 0.4,
                    ease: EASE,
                  }}
                  className="relative -mt-1 flex items-center justify-center"
                >
                  {/* Soft caramel glow behind the lamp */}
                  <m.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isOff ? 0 : isEvening ? 0.9 : 0.65,
                      scale: isEvening ? 1.15 : 1,
                    }}
                    transition={{
                      duration: prefersReduced ? 0 : 2.2,
                      ease: EASE,
                    }}
                    className="absolute w-20 h-20 rounded-full bg-[#E2C196] blur-md pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* 
                    Interactive Lamp Button:
                    Real <button> with aria-pressed, aria-label, visible copper focus ring.
                    Hit area: min 48x48px.
                  */}
                  <button
                    type="button"
                    onClick={handleToggleLight}
                    aria-pressed={isEvening}
                    aria-label="Switch between day and evening light"
                    className="group relative min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B07A4F] focus-visible:outline-none transition-transform active:scale-95"
                  >
                    {/* 28px circle with a thin 1px ring */}
                    <div className="w-7 h-7 rounded-full border border-[#B07A4F] flex items-center justify-center bg-[#F2E8DC] shadow-sm transition-colors duration-500 group-hover:border-[#3B2417]">
                      {/* Solid lamp bead / filament */}
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-500 ${
                          isOff
                            ? "bg-[#3B2417]/50"
                            : isEvening
                            ? "bg-[#B07A4F] ring-2 ring-[#E2C196]"
                            : "bg-[#B07A4F]"
                        }`}
                      />
                    </div>
                  </button>

                  {/* Hint: "Pull to change the light" in Jost 13px, fades out on first interaction */}
                  <m.div
                    initial={{ opacity: 0, x: 12 }}
                    animate={{
                      opacity: showHint && !hasInteracted && !isOff ? 1 : 0,
                      x: showHint && !hasInteracted && !isOff ? 0 : 12,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                    }}
                    className={`absolute left-full ml-2 sm:ml-3 top-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap z-30 ${
                      hasInteracted ? "hidden" : "block"
                    }`}
                  >
                    <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#F6E7D0]/95 backdrop-blur-xs border border-[#B07A4F]/40 font-sans text-[12px] sm:text-[13px] text-[#3B2417] shadow-sm flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B07A4F]" />
                      Pull to change the light
                    </span>
                  </m.div>
                </m.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
