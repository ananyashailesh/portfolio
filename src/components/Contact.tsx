import { profile } from "@/data/resume";
import Reveal from "./Reveal";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.15c0 .3.21.66.8.55A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7L22 7" />
    </svg>
  );
}

const SOCIALS = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: MailIcon },
];

const NAV_LINKS = ["About", "Skills", "Projects", "Experience"];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-[calc(100vh-52px)] w-full flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
    >
      {/* dotted-grid world backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(rgba(237,238,239,0.35) 1.2px, transparent 1.2px)",
          backgroundSize: "14px 14px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl">
        <Reveal direction="down">
          <h2 className="font-heading mb-8 text-4xl font-bold tracking-tight text-[#edeeef]">
            Contact Me
          </h2>
        </Reveal>

        <Reveal direction="up">
          <p className="font-heading font-bold text-[#edeeef]">
            Email:{" "}
            <a href={`mailto:${profile.email}`} className="text-[#fcbc1d] hover:underline">
              {profile.email}
            </a>
          </p>
          <p className="font-heading mt-1 font-bold text-[#edeeef]">
            Phone: <span className="text-[#fcbc1d]">{profile.phone}</span>
          </p>
          <p className="mt-6 text-[#edeeef]/60">
            …or feel free to get in touch with me by filling the form.
          </p>

          <form
            action={`mailto:${profile.email}`}
            method="get"
            className="mx-auto mt-10 grid w-full max-w-3xl gap-4 md:grid-cols-2"
          >
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                required
                className="rounded-lg bg-[#edeeef] px-4 py-3.5 text-sm text-[#212529] shadow-md outline-none placeholder:text-[#868e96] focus:ring-2 focus:ring-[#fcbc1d]"
              />
              <input
                type="email"
                name="from"
                placeholder="Your Email *"
                required
                className="rounded-lg bg-[#edeeef] px-4 py-3.5 text-sm text-[#212529] shadow-md outline-none placeholder:text-[#868e96] focus:ring-2 focus:ring-[#fcbc1d]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="rounded-lg bg-[#edeeef] px-4 py-3.5 text-sm text-[#212529] shadow-md outline-none placeholder:text-[#868e96] focus:ring-2 focus:ring-[#fcbc1d]"
              />
            </div>
            <textarea
              name="body"
              placeholder="Your Message *"
              required
              className="min-h-[180px] rounded-lg bg-[#edeeef] px-4 py-3.5 font-mono text-sm text-[#212529] shadow-md outline-none placeholder:text-[#868e96] focus:ring-2 focus:ring-[#fcbc1d]"
            />
            <div className="md:col-span-2">
              <button
                type="submit"
                className="font-heading rounded-md bg-[#edeeef] px-10 py-3.5 text-base font-bold text-[#212529] shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_0_-4px_6px_rgba(0,0,0,0.1)] transition-transform duration-200 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </Reveal>

        <footer className="mt-20 w-full">
          <p className="font-heading text-3xl font-bold text-[#fcbc1d]">{profile.name}</p>
          <p className="mt-1 text-sm text-[#edeeef]/60">
            Building Intelligent Systems, End to End
          </p>
          <nav className="mt-5 flex flex-wrap justify-center gap-8 text-sm font-semibold text-[#fcbc1d]">
            {NAV_LINKS.map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="transition-opacity hover:opacity-70">
                {l}
              </a>
            ))}
          </nav>
          <div className="mx-auto mt-6 flex w-full max-w-sm items-center justify-evenly">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0d0f11] text-[#edeeef]/90 shadow-md transition-all duration-200 hover:scale-110 hover:text-[#fcbc1d]"
              >
                <Icon className="icon-spin" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs text-[#edeeef]/40">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
