"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff, Send } from "lucide-react";
import { profile } from "@/data/resume";
import TypeWriter from "./TypeWriter";

type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  onresult: ((e: { results: { [i: number]: { [j: number]: { transcript: string } } } }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

export default function HeroContent({ headshotSrc }: { headshotSrc: string | null }) {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);
  const recRef = useRef<SpeechRecognitionLike | null>(null);

  function askAI(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    window.dispatchEvent(new CustomEvent("ai-companion:ask", { detail: query }));
    setQuery("");
  }

  function toggleMic() {
    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };
    const Ctor = w.SpeechRecognition ?? w.webkitSpeechRecognition;
    if (!Ctor) return;

    if (listening) {
      recRef.current?.stop();
      return;
    }
    const rec = new Ctor();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.onresult = (e) => setQuery(e.results[0][0].transcript);
    rec.onend = () => setListening(false);
    recRef.current = rec;
    setListening(true);
    rec.start();
  }

  return (
    <div className="relative z-10 flex min-h-[calc(100svh-52px)] w-full max-w-4xl flex-col items-center justify-center px-6 pb-16 pt-20">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="profile-picture relative mb-8 h-52 w-52 sm:h-60 sm:w-60"
      >
        {headshotSrc ? (
          <Image
            src={headshotSrc}
            alt={profile.name}
            fill
            sizes="240px"
            className="rounded-full object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[#fcbc1d]/40 to-[#343a40] text-5xl font-bold text-[#fcbc1d]">
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
      </motion.div>

      <motion.h1
        initial={{ x: 40, y: -40, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="font-heading text-center text-4xl font-bold tracking-tight text-[#edeeef] sm:text-6xl lg:text-7xl"
      >
        {profile.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-4 h-8 text-lg font-bold sm:text-xl"
        style={{ textShadow: "0 4px 6px rgba(0,0,0,0.2)", letterSpacing: "1px" }}
      >
        <em className="not-italic">
          <TypeWriter phrases={profile.roles} />
        </em>
      </motion.div>

      <motion.form
        onSubmit={askAI}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="glass-input relative mt-12 flex h-[60px] w-full max-w-2xl items-center gap-2 rounded-[20px] pl-3"
      >
        <motion.button
          type="button"
          onClick={toggleMic}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-md transition-colors ${
            listening ? "bg-[#fcbc1d] text-[#212529]" : "bg-[#5a6268] text-[#edeeef] hover:bg-[#fcbc1d] hover:text-[#212529]"
          }`}
          aria-label={listening ? "Stop voice input" : "Ask by voice"}
        >
          {listening ? <Mic size={16} /> : <MicOff size={16} />}
        </motion.button>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask My AI Companion!"
          className="h-full flex-1 rounded-[15px] bg-transparent px-2 pr-14 text-[#edeeef] outline-none placeholder:text-lg placeholder:text-[#edeeef]/60"
          aria-label="Ask the AI companion a question"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-[10px] top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#fcbc1d] text-[#212529]"
          aria-label="Send question to AI companion"
        >
          <Send size={16} />
        </motion.button>
      </motion.form>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="font-heading mt-10 rounded-md bg-[#edeeef] px-8 py-3 text-base font-bold text-[#212529] shadow-[0_10px_20px_rgba(0,0,0,0.2),inset_0_-4px_6px_rgba(0,0,0,0.1)]"
      >
        Enter Portfolio
      </motion.a>
    </div>
  );
}
