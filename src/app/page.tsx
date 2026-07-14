import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import HexBg from "@/components/HexBg";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HexBg />
      <Nav />
      <main className="relative flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <ChatWidgetLoader />
    </div>
  );
}
