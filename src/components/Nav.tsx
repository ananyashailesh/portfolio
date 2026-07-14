"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#skills", label: "SKILLS" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#contact", label: "CONTACT" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-[#212529] py-0 shadow-lg" : "bg-transparent py-2"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-heading bg-gradient-to-b from-[#fcbc1d] to-[#e8b64a] bg-clip-text text-xl font-bold tracking-tight text-transparent"
          style={{ textShadow: "0 4px 6px rgba(0,0,0,0.2)" }}
        >
          Ananya Shailesh
        </a>
        <ul className="hidden items-center sm:flex">
          {LINKS.map((link) => (
            <motion.li key={link.href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <a
                href={link.href}
                className="font-heading block px-3 py-4 text-sm font-medium text-[#edeeef] transition-colors duration-200 hover:text-[#fcbc1d]"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-heading flex items-center gap-1.5 px-3 py-4 text-sm font-medium text-[#edeeef] transition-colors duration-200 hover:text-[#fcbc1d]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
              RESUME
            </a>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
