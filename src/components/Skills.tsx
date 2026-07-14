"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";

// Categorical palette validated for the dark surface (dataviz six-checks pass).
const BAR_COLORS = ["#3987e5", "#199e70", "#c98500", "#9085e9", "#e66767", "#d55181"];

// How many resume projects/roles use each language.
const TECH_USAGE = [
  { label: "Python", uses: 4 },
  { label: "JS / TS", uses: 4 },
  { label: "SQL", uses: 3 },
  { label: "C#", uses: 2 },
  { label: "C++", uses: 2 },
  { label: "Dart", uses: 2 },
];

const SOFT_SKILLS = [
  { label: "Communication", value: 4.8 },
  { label: "Team Collaboration", value: 4.7 },
  { label: "Problem Solving", value: 4.9 },
  { label: "Time Management", value: 4.6 },
  { label: "Adaptability", value: 4.8 },
];

const TOOLS = [
  "Git", "Docker", "MySQL", "Firebase", "MongoDB", "Linux", "Windows",
  "TensorFlow", "PyTorch", "OpenCV", "React.js", "Node.js", "Flutter",
  ".NET", "scikit-learn", "MATLAB", "Bootstrap",
];

const TILE_COLORS = ["#3987e5", "#199e70", "#c98500", "#9085e9", "#e66767", "#d55181"];

function BarChart() {
  const max = Math.max(...TECH_USAGE.map((d) => d.uses));
  const W = 460;
  const H = 240;
  const pad = { top: 28, right: 12, bottom: 34, left: 30 };
  const plotW = W - pad.left - pad.right;
  const plotH = H - pad.top - pad.bottom;
  const band = plotW / TECH_USAGE.length;
  const barW = Math.min(44, band - 14);

  return (
    <div className="rounded-xl p-3">
      <p className="font-heading mb-2 text-center text-sm font-bold text-[#edeeef]">
        Languages Across My Projects
      </p>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Bar chart of how many projects use each language">
        {[0, 1, 2, 3, 4].map((v) => {
          const y = pad.top + plotH - (v / max) * plotH;
          return (
            <g key={v}>
              <line x1={pad.left} x2={W - pad.right} y1={y} y2={y} stroke="#edeeef" strokeOpacity="0.08" />
              <text x={pad.left - 8} y={y + 4} textAnchor="end" fontSize="10" fill="#edeeef" opacity="0.5">
                {v}
              </text>
            </g>
          );
        })}
        {TECH_USAGE.map((d, i) => {
          const h = (d.uses / max) * plotH;
          const x = pad.left + i * band + (band - barW) / 2;
          const y = pad.top + plotH - h;
          return (
            <g key={d.label}>
              <motion.rect
                initial={{ height: 0, y: pad.top + plotH }}
                whileInView={{ height: h, y }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
                x={x}
                width={barW}
                rx="4"
                fill={BAR_COLORS[i]}
              >
                <title>{`${d.label}: ${d.uses} projects`}</title>
              </motion.rect>
              <text x={x + barW / 2} y={y - 6} textAnchor="middle" fontSize="11" fontWeight="600" fill="#edeeef" opacity="0.85">
                {d.uses}
              </text>
              <text x={x + barW / 2} y={H - 12} textAnchor="middle" fontSize="11" fill="#edeeef" opacity="0.7">
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function RadarChart() {
  const cx = 130;
  const cy = 120;
  const R = 82;
  const n = SOFT_SKILLS.length;
  const maxV = 5;
  const avg = (SOFT_SKILLS.reduce((s, d) => s + d.value, 0) / n).toFixed(2);

  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const pt = (i: number, r: number) => ({
    x: cx + r * Math.cos(angle(i)),
    y: cy + r * Math.sin(angle(i)),
  });
  const poly = SOFT_SKILLS.map((d, i) => {
    const p = pt(i, (d.value / maxV) * R);
    return `${p.x},${p.y}`;
  }).join(" ");

  return (
    <div className="rounded-xl p-3">
      <p className="font-heading mb-1 text-center text-sm font-bold text-[#edeeef]">
        Soft Skills &amp; Leadership
        <span className="ml-2 text-xs font-normal text-[#edeeef]/50">Avg. {avg} / 5</span>
      </p>
      <svg viewBox="0 0 260 240" className="w-full" role="img" aria-label={`Radar chart of soft skills, average ${avg} out of 5`}>
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <polygon
            key={f}
            points={SOFT_SKILLS.map((_, i) => {
              const p = pt(i, R * f);
              return `${p.x},${p.y}`;
            }).join(" ")}
            fill="none"
            stroke="#edeeef"
            strokeOpacity="0.12"
          />
        ))}
        {SOFT_SKILLS.map((_, i) => {
          const p = pt(i, R);
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#edeeef" strokeOpacity="0.12" />;
        })}
        <motion.polygon
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          points={poly}
          fill="rgba(252,188,29,0.25)"
          stroke="#fcbc1d"
          strokeWidth="2"
        />
        {SOFT_SKILLS.map((d, i) => {
          const p = pt(i, (d.value / maxV) * R);
          const lp = pt(i, R + 16);
          return (
            <g key={d.label}>
              <circle cx={p.x} cy={p.y} r="3.5" fill="#fcbc1d" stroke="#212529" strokeWidth="2">
                <title>{`${d.label}: ${d.value} / 5`}</title>
              </circle>
              <text
                x={lp.x}
                y={lp.y + 3}
                textAnchor={Math.abs(lp.x - cx) < 10 ? "middle" : lp.x > cx ? "start" : "end"}
                fontSize="10"
                fill="#edeeef"
                opacity="0.8"
              >
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function Skills() {
  const ribbon = [...TOOLS, ...TOOLS]; // duplicated for seamless loop

  return (
    <Section id="skills" title="Skills">
      <Reveal direction="up">
        <div className="glass-box mx-auto max-w-5xl rounded-[24px] p-6 md:p-10">
          <p className="font-heading -mt-2 mb-6 text-center text-sm font-bold text-[#edeeef]/70">
            My TechStack
          </p>

          <div className="glass-box mb-10 overflow-hidden rounded-2xl px-2 py-5">
            <p className="font-heading mb-1 text-center text-lg font-bold text-[#fcbc1d]">
              Tools &amp; Platforms
            </p>
            <p className="mb-5 text-center text-sm text-[#edeeef]/70">
              Comfortable with industry-standard tools and platforms.
            </p>
            <div className="relative overflow-hidden">
              <motion.div
                className="flex w-max gap-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              >
                {ribbon.map((t, i) => (
                  <div key={`${t}-${i}`} className="flex w-24 flex-col items-center gap-2">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/15 text-lg font-bold shadow-md"
                      style={{
                        color: TILE_COLORS[i % TILE_COLORS.length],
                        background: "rgba(255,255,255,0.04)",
                      }}
                    >
                      {t.replace(/[^A-Za-z]/g, "").slice(0, 2)}
                    </div>
                    <span className="text-center text-xs text-[#edeeef]/80">{t}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <p className="font-heading mb-6 text-center text-lg font-bold text-[#edeeef]">
            My Workspace
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <BarChart />
            <div>
              <RadarChart />
              <p className="mx-auto mt-2 max-w-sm text-center text-xs leading-relaxed text-[#edeeef]/60">
                Public Relations Representative for the AI &amp; Robotics branch — leading
                communications and outreach with a calm, strategic approach under pressure.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
