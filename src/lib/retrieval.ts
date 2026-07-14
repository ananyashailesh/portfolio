import { corpus } from "@/data/chatbot-corpus";

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being",
  "of", "in", "on", "at", "to", "for", "and", "or", "but", "with", "as",
  "by", "from", "that", "this", "it", "her", "she", "he", "his", "what",
  "who", "when", "where", "how", "does", "do", "did", "has", "have", "had",
  "about", "tell", "me", "you", "your",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
}

const tokenizedCorpus = corpus.map((c) => ({ ...c, tokens: new Set(tokenize(c.text)) }));

function score(queryTokens: string[], docTokens: Set<string>): number {
  let matches = 0;
  for (const t of queryTokens) if (docTokens.has(t)) matches++;
  return matches;
}

export function retrieveContext(query: string, topK = 5): string[] {
  const queryTokens = tokenize(query);

  const ranked = tokenizedCorpus
    .map((c) => ({ text: c.text, score: score(queryTokens, c.tokens) }))
    .sort((a, b) => b.score - a.score);

  const top = ranked.filter((r) => r.score > 0).slice(0, topK);

  // Fall back to the full corpus if nothing matched, so the model still has context.
  if (top.length === 0) return corpus.map((c) => c.text);

  return top.map((r) => r.text);
}
