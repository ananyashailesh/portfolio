"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

// Animation variants lifted from the reference site's bundle:
// slideIn: 40px directional offset, duration .4, ease [.25,.25,.25,.75]
// fadeIn:  same offsets, duration 1
// zoomIn:  scale 0 -> 1
export function slideIn(direction: Direction, offset = 40, delay = 0, duration = 0.4) {
  return {
    hidden: {
      y: direction === "up" ? offset : direction === "down" ? -offset : 0,
      x: direction === "left" ? offset : direction === "right" ? -offset : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { duration, delay, ease: [0.25, 0.25, 0.25, 0.75] as const },
    },
  };
}

export function zoomIn(delay = 0, duration = 0.5) {
  return {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration, delay } },
  };
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.4,
  offset = 40,
  zoom = false,
  className,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  offset?: number;
  zoom?: boolean;
  className?: string;
}) {
  const variants = zoom ? zoomIn(delay, duration) : slideIn(direction, offset, delay, duration);
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
