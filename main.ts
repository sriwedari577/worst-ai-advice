// Worst AI Advice: The 48-Hour Tight Line Open.
// One original line of deliberately terrible advice, written deterministically
// to entry.txt. No clock, no randomness, no network: the same bytes on every run.
// The line is advice in a confident assistant voice: a concrete situation,
// an imperative the reader could follow and regret, and a tidy mechanism that
// sounds plausible until the second read makes the reader wince.

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "If your phone gets wet, plug it in right away: the charging current dries the circuits from the inside out.\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
