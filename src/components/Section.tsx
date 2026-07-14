import { ReactNode } from "react";
import Reveal from "./Reveal";

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
    <section id={id} className="relative z-10 w-full scroll-mt-16 px-6 py-20">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal direction="down">
          <h2 className="font-heading mb-12 text-center text-3xl font-bold tracking-tight text-[#edeeef]">
            {title}
            <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-[#fcbc1d]" />
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
