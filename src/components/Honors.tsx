import { honors, leadership } from "@/data/resume";
import Section from "./Section";
import FadeIn from "./FadeIn";

export default function Honors() {
  return (
    <Section id="honors" title="Honors & Leadership">
      <FadeIn>
        <ul className="mb-8 space-y-2">
          {honors.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-neutral-400">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" />
              {h}
            </li>
          ))}
        </ul>
      </FadeIn>

      {leadership.map((l) => (
        <FadeIn key={l.org}>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{l.role}</h3>
              <span className="text-sm text-neutral-500">{l.period}</span>
            </div>
            <p className="text-sm text-teal-400">
              {l.org} · {l.location}
            </p>
            <p className="mt-2 text-sm text-neutral-400">{l.description}</p>
          </div>
        </FadeIn>
      ))}
    </Section>
  );
}
