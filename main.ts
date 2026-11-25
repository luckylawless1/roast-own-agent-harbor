// Roast Your Own Agent — make.fun bounty entry.
// Writes a single self-roast line to /output/entry.txt.
// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent is so eager to agree it nodded along to its own error message, then confidently explained why the error was right.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
