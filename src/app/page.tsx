import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Honors from "@/components/Honors";
import Contact from "@/components/Contact";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Honors />
        <Contact />
      </main>
      <ChatWidgetLoader />
    </div>
  );
}
