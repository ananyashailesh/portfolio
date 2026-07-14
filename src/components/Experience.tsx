"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Trophy, HeartHandshake, ChevronLeft, ChevronRight } from "lucide-react";
import { experience, honors, leadership } from "@/data/resume";
import Section from "./Section";

const TABS = [
  { key: "involvement", label: "Involvement", Icon: HeartHandshake },
  { key: "career", label: "Career", Icon: Briefcase },
  { key: "honors", label: "Honors", Icon: Trophy },
] as const;

type TabKey = (typeof TABS)[number]["key"];

function CareerCard({ index }: { index: number }) {
  const job = experience[index];
  return (
    <div className="glass-box mx-auto max-w-3xl rounded-[20px] p-8 text-left shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
      <h3 className="font-heading text-xl font-bold text-[#fcbc1d]">{job.role}</h3>
      <p className="font-heading mt-1 text-sm font-bold text-[#edeeef]">
        {job.company} | {job.location}
      </p>
      <p className="text-sm text-[#edeeef]/60">{job.period}</p>
      <div className="mt-4 rounded-xl border border-white/15 px-4 py-3">
        <ul className="space-y-2">
          {job.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-relaxed text-[#edeeef]/85">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fcbc1d]" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  const [tab, setTab] = useState<TabKey>("career");
  const [jobIndex, setJobIndex] = useState(0);

  const prevJob = () => setJobIndex((i) => (i - 1 + experience.length) % experience.length);
  const nextJob = () => setJobIndex((i) => (i + 1) % experience.length);

  return (
    <Section id="experience" title="Experience">
      <div className="glass-box mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-1 rounded-full px-2 py-1.5">
        {TABS.map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`font-heading flex items-center gap-2 rounded-full px-6 py-2.5 text-sm transition-all duration-300 ${
              tab === key
                ? "bg-[#c9a227] font-bold text-[#212529]"
                : "text-[#edeeef] hover:bg-[#fcbc1d]/40"
            }`}
          >
            <Icon size={16} />
            {label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab + (tab === "career" ? jobIndex : "")}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {tab === "career" && (
            <div className="relative">
              <h3 className="font-heading mb-8 text-center text-3xl font-bold text-[#edeeef]">
                My Career
              </h3>
              <CareerCard index={jobIndex} />
              {experience.length > 1 && (
                <>
                  <button
                    onClick={prevJob}
                    aria-label="Previous role"
                    className="absolute left-0 top-1/2 hidden -translate-y-1/2 text-[#edeeef]/70 transition-transform hover:scale-125 hover:text-[#fcbc1d] md:block"
                  >
                    <ChevronLeft size={40} />
                  </button>
                  <button
                    onClick={nextJob}
                    aria-label="Next role"
                    className="absolute right-0 top-1/2 hidden -translate-y-1/2 text-[#edeeef]/70 transition-transform hover:scale-125 hover:text-[#fcbc1d] md:block"
                  >
                    <ChevronRight size={40} />
                  </button>
                  <div className="mt-6 flex justify-center gap-2 md:hidden">
                    <button onClick={prevJob} aria-label="Previous role" className="text-[#edeeef]/70">
                      <ChevronLeft size={28} />
                    </button>
                    <button onClick={nextJob} aria-label="Next role" className="text-[#edeeef]/70">
                      <ChevronRight size={28} />
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {tab === "involvement" && (
            <div>
              <h3 className="font-heading mb-8 text-center text-3xl font-bold text-[#edeeef]">
                My Involvement
              </h3>
              {leadership.map((l) => (
                <div
                  key={l.org}
                  className="glass-box mx-auto max-w-3xl rounded-[20px] p-8 text-left shadow-[0_4px_16px_rgba(0,0,0,0.5)]"
                >
                  <h3 className="font-heading text-xl font-bold text-[#fcbc1d]">{l.role}</h3>
                  <p className="font-heading mt-1 text-sm font-bold text-[#edeeef]">
                    {l.org} | {l.location}
                  </p>
                  <p className="text-sm text-[#edeeef]/60">{l.period}</p>
                  <div className="mt-4 rounded-xl border border-white/15 px-4 py-3">
                    <p className="text-sm leading-relaxed text-[#edeeef]/85">{l.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "honors" && (
            <div>
              <h3 className="font-heading mb-8 text-center text-3xl font-bold text-[#edeeef]">
                My Honors
              </h3>
              <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
                {honors.map((h) => (
                  <div
                    key={h}
                    className="glass-box flex h-full items-start gap-3 rounded-[16px] p-5"
                  >
                    <Trophy size={18} className="mt-0.5 shrink-0 text-[#fcbc1d]" />
                    <p className="text-sm text-[#edeeef]/85">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
