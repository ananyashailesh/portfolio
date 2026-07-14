import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { profile } from "@/data/resume";
import FadeIn from "./FadeIn";

const hasHeadshot = fs.existsSync(path.join(process.cwd(), "public", "headshot.jpg"));

export default function Hero() {
  return (
    <section id="top" className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-16 pt-24 text-center">
      <FadeIn>
        <div className="relative mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full ring-2 ring-teal-400/60 ring-offset-4 ring-offset-neutral-950">
          {hasHeadshot ? (
            <Image
              src="/headshot.jpg"
              alt={profile.name}
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-teal-500/30 to-neutral-800 text-4xl font-semibold text-teal-300">
              {profile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          )}
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="mt-3 text-lg text-teal-400">{profile.tagline}</p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="mx-auto mt-6 max-w-xl text-neutral-400">{profile.summary}</p>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-teal-500 px-5 py-2 text-sm font-medium text-neutral-950 transition-colors hover:bg-teal-400"
          >
            Get in touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition-colors hover:border-teal-400/60"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium transition-colors hover:border-teal-400/60"
          >
            LinkedIn
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
