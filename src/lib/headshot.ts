import fs from "node:fs";
import path from "node:path";

const CANDIDATES = ["headshot.jpg", "headshot.jpeg", "headshot.png", "headshot.webp"];

// Returns the public URL of the headshot if one exists, else null.
export function getHeadshotSrc(): string | null {
  for (const name of CANDIDATES) {
    if (fs.existsSync(path.join(process.cwd(), "public", name))) return `/${name}`;
  }
  return null;
}
