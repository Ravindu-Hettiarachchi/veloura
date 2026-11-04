"use client";

import React from "react";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";

interface ArchDividerProps {
  variant?: "dark" | "light"; // dark = caramel on espresso/mocha; light = copper on latte
  inverted?: boolean;
  withPendant?: boolean;
  className?: string;
}

export function ArchDivider({
  variant = "dark",
  inverted = false,
  withPendant = false,
  className = "",
}: ArchDividerProps) {
  const strokeColor = variant === "dark" ? "#E2C196" : "#B07A4F";

  return (
    <div
      className={`relative w-full overflow-hidden flex flex-col items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full max-w-4xl h-auto block ${inverted ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        {/* Horizontal base wings and center arch */}
        <m.path
          d="M0,119 L460,119 Q600,0 740,119 L1200,119"
          stroke={strokeColor}
          strokeWidth="1"
          strokeOpacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: EASE }}
        />
      </svg>

      {/* Optional suspended pendant light */}
      {withPendant && (
        <m.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.8 }}
          className="absolute flex flex-col items-center top-0 z-10"
        >
          {/* 1px vertical line */}
          <div
            className="w-[1px] h-10 sm:h-14"
            style={{ backgroundColor: strokeColor, opacity: 0.45 }}
          />
          {/* Small ring and inner circle */}
          <div
            className="relative -mt-1 w-5 h-5 rounded-full border flex items-center justify-center"
            style={{ borderColor: strokeColor, opacity: 0.7 }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: strokeColor }}
            />
          </div>
        </m.div>
      )}
    </div>
  );
}
