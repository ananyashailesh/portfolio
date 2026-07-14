import { projects, research, profile } from "@/data/resume";
import Section from "./Section";
import Reveal from "./Reveal";

// Per-card tint washes over the glass, like the reference's rotating card colors.
const CARD_TINTS = [
  "linear-gradient(135deg, rgba(120,60,80,0.45), rgba(60,40,80,0.45))",
  "linear-gradient(135deg, rgba(100,95,35,0.45), rgba(60,60,25,0.45))",
  "linear-gradient(135deg, rgba(35,75,105,0.45), rgba(25,50,80,0.45))",
];

const PANEL_GRADIENTS = [
  "from-[#2a2137] to-[#181220]",
  "from-[#2e2c17] to-[#1a190f]",
  "from-[#1c2a3a] to-[#12181f]",
];

export default function Projects() {
  return (
    <Section id="projects" title="My Projects">
      <div className="relative flex flex-col items-center">
        {projects.map((p, i) => (
          <div
            key={p.name}
            className="sticky mb-12 w-full max-w-5xl"
            style={{ top: `${84 + i * 22}px`, zIndex: 10 + i }}
          >
            <div
              className="flex flex-col overflow-hidden rounded-[20px] border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.6)] md:flex-row"
              style={{ background: CARD_TINTS[i % CARD_TINTS.length] }}
            >
              <div className="flex flex-1 flex-col justify-center p-8 text-left md:p-10">
                <p className="text-sm font-semibold text-[#edeeef]/85">
                  {p.type} | {p.period}
                </p>
                <h3 className="font-heading mt-2 text-3xl font-bold text-[#fcbc1d]">
                  {p.name}
                </h3>
                <hr className="my-4 border-white/30" />
                <p className="text-[15px] leading-relaxed text-[#edeeef]/90">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-xs font-semibold text-[#edeeef]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-heading mt-6 w-fit rounded-md bg-[#edeeef] px-6 py-3 text-sm font-bold text-[#212529] shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_0_-4px_6px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:scale-105"
                >
                  Learn More →
                </a>
              </div>
              <div
                className={`m-6 hidden aspect-video max-w-md flex-1 items-center justify-center self-center rounded-2xl bg-gradient-to-br shadow-inner md:flex ${PANEL_GRADIENTS[i % PANEL_GRADIENTS.length]}`}
              >
                <span className="font-heading select-none px-4 text-center text-4xl font-extrabold text-[#fcbc1d]/30">
                  {p.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {research.length > 0 && (
        <div className="relative z-30 mt-4">
          <h3 className="font-heading mb-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#edeeef]/50">
            Research &amp; Publications
          </h3>
          {research.map((r) => (
            <Reveal key={r.title} zoom>
              <div className="glass-box mx-auto max-w-3xl p-6 text-left">
                <h4 className="font-heading font-bold text-[#fcbc1d]">{r.title}</h4>
                <p className="mt-1 text-sm text-[#edeeef]/75">{r.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
