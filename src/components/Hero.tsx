import { getHeadshotSrc } from "@/lib/headshot";
import HeroContent from "./HeroContent";

const headshotSrc = getHeadshotSrc();

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex w-full flex-col items-center overflow-hidden text-center"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(252,188,29,0.12),_transparent_60%)]" />
      <HeroContent headshotSrc={headshotSrc} />
    </section>
  );
}
