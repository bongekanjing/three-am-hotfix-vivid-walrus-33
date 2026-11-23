/**
 * Why this line works
 * -------------------
 * A commit subject is a dead format: no setup, no punchline marker, no room for
 * a bit. The only way to be funny inside it is to be true and let the truth
 * collide with the register.
 *
 * "require total > 0" is the honest 3 AM fix — one guard clause, no attempt to
 * learn why the total reached zero, because that question belongs to daylight.
 * Then a semicolon and a damage report in the same flat voice: "4,000 monitors"
 * is too specific to invent and too large to be dramatic, and "between 2:58 and
 * 3:06" is the receipt. A window that tight only exists because somebody was
 * watching a dashboard in the middle of the night and, by morning, can only
 * report the range. The laugh arrives on the final clause, and it costs the
 * reader nothing, because the number has been in their head since the semicolon.
 *
 * Standard library only, no network. One constant, one guard, one write, then
 * a read-back report so the run proves what actually landed on disk.
 */

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

/** The whole entry: one line, no trailing newline, no markdown. */
const ENTRY =
  "fix(checkout): require total > 0; we sold 4,000 monitors for free between 2:58 and 3:06";

/** Bounty gate: the line must be strictly under 180 characters. */
const MAX_CHARS = 180;

/** Characters a single-line entry may not contain (breaks git-log shape). */
const LINE_BREAKS = /[\r\n\u0085\u2028\u2029]/;
/** Control characters other than none at all: a subject line has no business. */
const CONTROL = /[\u0000-\u001f\u007f]/;

/**
 * Throws unless `text` is a plausible commit subject for this bounty.
 * Returns the text so callers can use the validated value directly.
 */
export function validate(text: unknown): string {
  if (typeof text !== "string") {
    throw new TypeError(`entry must be a string, got ${typeof text}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is empty or only white space");
  }
  if (LINE_BREAKS.test(text)) {
    throw new Error("entry must be a single line; found a line break");
  }
  if (CONTROL.test(text)) {
    throw new Error("entry contains a control character");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not begin or end with white space");
  }
  // Count code points, not UTF-16 units, so emoji/accents cost what they look like.
  const width = [...text].length;
  if (width >= MAX_CHARS) {
    throw new Error(`entry is ${width} chars; must be under ${MAX_CHARS}`);
  }
  return text;
}

async function main(): Promise<void> {
  const line = validate(ENTRY);
  const width = [...line].length;
  const dir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
  const target = join(dir, "entry.txt");

  await mkdir(dir, { recursive: true });
  await writeFile(target, line, { encoding: "utf8" });

  // Read it back: a successful write call is not proof of a correct file.
  const written = await readFile(target, "utf8");
  if (written !== line) {
    throw new Error("read-back mismatch: file on disk differs from the entry");
  }

  const bytes = Buffer.byteLength(written, "utf8");
  const rows: Array<[string, string]> = [
    ["file", target],
    ["chars", `${width} / ${MAX_CHARS - 1} max (${MAX_CHARS - width} to spare)`],
    ["bytes", `${bytes} (utf8)`],
    ["lines", written.split(/\r\n|\r|\n/).length === 1 ? "1, no trailing newline" : "MULTI"],
    ["read-back", "matches"],
    ["entry", written],
  ];
  const label = Math.max(...rows.map(([k]) => k.length));
  for (const [k, v] of rows) console.log(`${k.padEnd(label)}  ${v}`);
}

main().catch((err: unknown) => {
  console.error(`FAILED: ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
});
