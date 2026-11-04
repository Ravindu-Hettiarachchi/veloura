"use client";

import React from "react";
import { m, HTMLMotionProps } from "framer-motion";
import { EASE } from "@/lib/constants";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  as?: keyof typeof m;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 1.2,
  yOffset = 32,
  className = "",
  ...props
}: FadeInProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration,
        ease: EASE,
        delay,
      }}
      className={className}
      {...props}
    >
      {children}
    </m.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className = "",
  stagger = 0.12,
  delay = 0,
}: StaggerContainerProps) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  yOffset = 32,
}: {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
}) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1.2,
            ease: EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
