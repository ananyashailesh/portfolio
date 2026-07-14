import { experience } from "@/data/resume";
import Section from "./Section";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((job, i) => (
          <FadeIn key={job.company} delay={i * 0.1}>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">{job.role}</h3>
                <span className="text-sm text-neutral-500">{job.period}</span>
              </div>
              <p className="text-sm text-teal-400">
                {job.company} · {job.location}
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-400">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
