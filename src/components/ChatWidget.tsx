"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { profile } from "@/data/resume";

type Message = { role: "user" | "assistant"; content: string };

const SUGGESTED_QUESTIONS = [
  "What is Ananya working on right now?",
  "Tell me about PolarisGCS",
  "What are her strongest technical skills?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sendRef = useRef<(content: string) => void>(() => {});

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  // Questions typed into the homepage query bar open the widget and send immediately.
  useEffect(() => {
    function onAsk(e: Event) {
      const q = (e as CustomEvent<string>).detail;
      if (!q) return;
      setOpen(true);
      sendRef.current(q);
    }
    window.addEventListener("ai-companion:ask", onAsk);
    return () => window.removeEventListener("ai-companion:ask", onAsk);
  }, []);

  async function sendMessage(content: string) {
    if (!content.trim() || isStreaming) return;

    const nextMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setIsStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok || !res.body) {
        const err = await res.json().catch(() => null);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: err?.error ?? "Something went wrong. Please try again." },
        ]);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";
      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantContent += decoder.decode(value, { stream: true });
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { role: "assistant", content: assistantContent },
        ]);
      }
    } finally {
      setIsStreaming(false);
    }
  }

  useEffect(() => {
    sendRef.current = sendMessage;
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen((o) => !o)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#fcbc1d] text-[#212529] shadow-lg shadow-black/20 ${open ? "" : "pulse-soft"}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={open ? "Close AI Companion" : "Open AI Companion"}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl bg-[#212529] shadow-2xl ring-1 ring-black/10"
          >
            <div className="border-b border-white/10 bg-[#212529] px-4 py-3">
              <p className="font-heading text-sm font-bold text-[#fcbc1d]">AI Companion</p>
              <p className="text-xs text-[#edeeef]/60">Ask me about {profile.name}</p>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-[#2b3035] px-4 py-3">
              {messages.length === 0 && (
                <div className="space-y-2">
                  <p className="text-xs text-[#edeeef]/50">Try asking:</p>
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="block w-full rounded-lg border border-white/10 px-3 py-2 text-left text-xs text-[#edeeef]/80 hover:border-[#fcbc1d]/60 hover:text-[#fcbc1d]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                    m.role === "user"
                      ? "ml-auto bg-[#fcbc1d] text-[#212529]"
                      : "bg-white/5 text-[#edeeef]"
                  }`}
                >
                  {m.content || (isStreaming && i === messages.length - 1 ? "…" : "")}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-white/10 bg-[#212529] p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                className="flex-1 rounded-full border border-white/10 bg-[#2b3035] px-3 py-2 text-sm text-white outline-none focus:border-[#fcbc1d]/60"
                disabled={isStreaming}
              />
              <button
                type="submit"
                disabled={isStreaming || !input.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fcbc1d] text-[#212529] disabled:opacity-40"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
