import { ReactNode } from "react";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-4xl px-6 py-20 scroll-mt-20">
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-400 mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}
