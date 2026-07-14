import { profile } from "@/data/resume";
import Section from "./Section";
import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <FadeIn>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <p className="text-neutral-400">
            Have a project in mind or just want to say hi? I&apos;d love to hear from you.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-lg font-medium text-teal-400 hover:underline"
          >
            {profile.email}
          </a>
          <div className="mt-4 flex justify-center gap-4 text-sm text-neutral-500">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-teal-400">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-teal-400">
              LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>
      <footer className="mt-16 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js.
      </footer>
    </Section>
  );
}
