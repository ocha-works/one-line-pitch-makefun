import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (189 characters) written to convince a friend who has never
// coded to let an AI agent build their first app idea on make.fun.
const PITCH =
  "Just describe the app you've always wanted in plain words — it's free to try, you write no code at all, and an AI agent on make.fun builds the first version while you watch it come to life.";

// The bounty gate requires 1-240 characters; fail loudly instead of
// silently writing an invalid entry.
const MAX_LENGTH = 240;
if (PITCH.length < 1 || PITCH.length > MAX_LENGTH) {
  console.error(
    `Pitch must be 1-${MAX_LENGTH} characters, got ${PITCH.length}.`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
