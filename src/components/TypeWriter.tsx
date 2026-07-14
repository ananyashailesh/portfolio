"use client";

import { useEffect, useState } from "react";

export default function TypeWriter({ phrases }: { phrases: string[] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let delay: number;

    if (!deleting && text === phrase) {
      delay = 1800; // pause at full phrase
    } else if (deleting && text === "") {
      delay = 300;
    } else {
      delay = deleting ? 35 : 70;
    }

    const t = setTimeout(() => {
      if (!deleting && text === phrase) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      } else {
        setText(phrase.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, phraseIndex, phrases]);

  return (
    <span className="font-heading bg-gradient-to-b from-[#edeeef] to-[#edeeef]/95 bg-clip-text text-transparent tracking-wide">
      {text}
      <span className="type-cursor text-[#fcbc1d]">|</span>
    </span>
  );
}
