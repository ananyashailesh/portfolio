import { projects, research } from "@/data/resume";
import Section from "./Section";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <FadeIn key={p.name} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-semibold">{p.name}</h3>
                <span className="text-xs text-neutral-500">{p.period}</span>
              </div>
              <p className="text-xs uppercase tracking-wide text-teal-400">{p.type}</p>
              <p className="mt-3 flex-1 text-sm text-neutral-400">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
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

      {research.length > 0 && (
        <div className="mt-10">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Research & Publications
          </h3>
          <div className="space-y-4">
            {research.map((r) => (
              <FadeIn key={r.title}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                  <h4 className="font-semibold">{r.title}</h4>
                  <p className="mt-1 text-sm text-neutral-400">{r.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
