import { education } from "@/data/resume";
import Section from "./Section";
import FadeIn from "./FadeIn";

export default function About() {
  return (
    <Section id="about" title="Education">
      <div className="space-y-6">
        {education.map((ed, i) => (
          <FadeIn key={ed.school} delay={i * 0.1}>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{ed.school}</h3>
                <span className="text-sm text-neutral-500">{ed.period}</span>
              </div>
              <p className="mt-1 text-sm text-neutral-400">{ed.degree}</p>
              <p className="text-sm text-neutral-500">{ed.location}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
