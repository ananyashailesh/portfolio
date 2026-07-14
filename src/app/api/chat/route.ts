import Groq from "groq-sdk";
import { retrieveContext } from "@/lib/retrieval";
import { profile } from "@/data/resume";

export const runtime = "nodejs";

let groq: Groq | null = null;
function getClient() {
  if (!groq) groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
  return groq;
}

const SYSTEM_PROMPT = `You are the AI companion embedded on ${profile.name}'s portfolio website. You answer visitor questions about ${profile.name}'s background, experience, projects, and skills, speaking about her in the third person, in a friendly and concise way. Only use the provided context to answer. If the context doesn't cover the question, say you don't have that information and suggest the visitor reach out via email at ${profile.email}. Keep answers under 120 words unless asked for detail.`;

export async function POST(req: Request) {
  if (!process.env.GROQ_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Chatbot is not configured on this deployment." }),
      { status: 503, headers: { "Content-Type": "application/json" } }
    );
  }

  const { messages } = await req.json();
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  const context = retrieveContext(lastUserMessage);

  const completionStream = await getClient().chat.completions.create({
    model: "llama-3.3-70b-versatile",
    stream: true,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "system", content: `Context about ${profile.name}:\n${context.join("\n\n")}` },
      ...messages,
    ],
  });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of completionStream) {
        const delta = chunk.choices[0]?.delta?.content ?? "";
        if (delta) controller.enqueue(encoder.encode(delta));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
