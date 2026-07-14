"use client";

import { motion } from "framer-motion";

const BUTTONS = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf", external: true },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function AboutButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {BUTTONS.map((b) => (
        <motion.a
          key={b.label}
          href={b.href}
          {...(b.external ? { target: "_blank", rel: "noreferrer" } : {})}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="font-heading rounded-md bg-[#edeeef] px-6 py-2.5 text-sm font-bold text-[#212529] shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_0_-4px_6px_rgba(0,0,0,0.1)]"
        >
          {b.label}
        </motion.a>
      ))}
      <motion.button
        onClick={() =>
          window.dispatchEvent(
            new CustomEvent("ai-companion:ask", { detail: "Tell me about Ananya!" })
          )
        }
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="font-heading rounded-md bg-[#edeeef] px-6 py-2.5 text-sm font-bold text-[#212529] shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_0_-4px_6px_rgba(0,0,0,0.1)]"
      >
        AI Companion
      </motion.button>
    </div>
  );
}
