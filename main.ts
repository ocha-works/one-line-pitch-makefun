import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (189 characters) written to convince a friend who has never
// coded to let an AI agent build their first app idea on make.fun.
const PITCH =
  "Just describe the app you've always wanted in plain words — it's free to try, you write no code at all, and an AI agent on make.fun builds the first version while you watch it come to life.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
