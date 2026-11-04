"use client";

import React from "react";
import { m } from "framer-motion";
import { EASE } from "@/lib/constants";

interface PendantLightProps {
  length?: number;
  color?: string;
  delay?: number;
  className?: string;
}

export function PendantLight({
  length = 90,
  color = "#E2C196",
  delay = 0.5,
  className = "",
}: PendantLightProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: EASE, delay }}
      className={`flex flex-col items-center pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* 1px vertical line */}
      <div
        className="w-[1px]"
        style={{
          height: `${length}px`,
          backgroundColor: color,
          opacity: 0.45,
        }}
      />
      {/* Outer subtle ring */}
      <div
        className="w-6 h-6 -mt-1 rounded-full border flex items-center justify-center"
        style={{
          borderColor: color,
          opacity: 0.65,
        }}
      >
        {/* Solid center dot */}
        <div
          className="w-2.5 h-2.5 rounded-full"
          style={{
            backgroundColor: color,
            opacity: 0.9,
          }}
        />
      </div>
    </m.div>
  );
}
