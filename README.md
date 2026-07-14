# Ananya Shailesh — Portfolio

Personal portfolio site built with Next.js, TypeScript, and Tailwind CSS, featuring an AI companion chatbot that answers questions about my background using Groq (Llama 3.3 70B) and local keyword-based retrieval over resume content.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and set:

```
GROQ_API_KEY=your-key-here
```

Get a free key at [console.groq.com](https://console.groq.com). Without it, the site still works — the chatbot widget just returns a "not configured" message.

## Deploy

Deploy on [Vercel](https://vercel.com/new): import this repo, add `GROQ_API_KEY` as an environment variable in the project settings, and deploy.
