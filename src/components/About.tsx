import Image from "next/image";
import { profile, education } from "@/data/resume";
import { getHeadshotSrc } from "@/lib/headshot";
import Section from "./Section";
import Reveal from "./Reveal";
import AboutButtons from "./AboutButtons";

const headshotSrc = getHeadshotSrc();

const STATS = [
  { label: "CGPA", value: "9.65 / 10" },
  { label: "Branch Rank", value: "#1" },
  { label: "IEEE Papers", value: "1 Published" },
];

const vit = education[0];

export default function About() {
  return (
    <Section id="about" title="About Me">
      <Reveal direction="up">
        <div className="glass-box mx-auto max-w-5xl rounded-[24px] p-8 md:p-12">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
            <div className="flex shrink-0 flex-col items-center gap-4">
              {headshotSrc ? (
                <Image
                  src={headshotSrc}
                  alt={profile.name}
                  width={300}
                  height={300}
                  className="h-[280px] w-[280px] rounded-xl object-cover shadow-lg brightness-95"
                />
              ) : (
                <div className="flex h-[280px] w-[280px] items-center justify-center rounded-xl bg-gradient-to-br from-[#fcbc1d]/40 to-[#343a40] text-6xl font-bold text-[#fcbc1d] shadow-lg">
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              )}
              <div className="flex flex-wrap justify-center gap-3">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg bg-[#edeeef] px-4 py-2 text-center shadow-[0_6px_14px_rgba(0,0,0,0.12),inset_0_-2px_4px_rgba(0,0,0,0.06)]"
                  >
                    <p className="font-heading text-sm font-bold text-[#212529]">{s.label}</p>
                    <p className="text-xs text-[#495057]">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-6">
              <div className="rounded-xl bg-[#edeeef] px-6 py-5 text-left shadow-[0_6px_14px_rgba(0,0,0,0.12)]">
                <h3 className="font-heading text-2xl font-bold text-[#212529]">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#495057]">
                  {vit.school} &apos;27 — {vit.degree.split(";")[0]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#343a40]">
                  I&apos;m {profile.name.split(" ")[0]}, {profile.summary.charAt(0).toLowerCase() + profile.summary.slice(1)} My journey is driven by curiosity and a commitment to continuous learning through research, internships, and real-world builds.
                </p>
              </div>

              <div className="text-center">
                <p className="font-heading mb-4 text-lg font-bold text-[#edeeef]">
                  Learn More About Me From My:
                </p>
                <AboutButtons />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
