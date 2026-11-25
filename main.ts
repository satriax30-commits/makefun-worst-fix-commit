// Worst Fix Ever: Funniest Commit Message
// Writes a single commit message line to /output/entry.txt.
// Node 22, stdlib only, fully deterministic: no clocks, no randomness,
// no network, no environment reads. The message is a fixed constant.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: the fix "worked" by silencing everyone who could report it.
const ENTRY = "fix: users can no longer report the bug, as requested";

// Fail loudly instead of ever writing an entry the gate would reject.
if (ENTRY.length < 1 || ENTRY.length > 100 || ENTRY.trim().length === 0) {
  throw new Error(`ENTRY must be 1-100 non-blank chars, got ${ENTRY.length}`);
}

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");
