import { skills } from "@/data/resume";
import Section from "./Section";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items], i) => (
          <FadeIn key={category} delay={i * 0.1}>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="mb-3 text-sm font-semibold text-teal-400">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-neutral-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
