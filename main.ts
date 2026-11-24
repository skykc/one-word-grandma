// One Word From Grandma — the single word a grandma would type about AI.
// "newfangled" is the classic grandma word for new technology: warm, a
// little baffled, and funny with no context at all. AI is the most
// newfangled contraption yet — and the word stays clear of the crowded
// picks (robit, witchcraft, doohickey) that fill the blind leaderboard.
// The program writes the word to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "newfangled";

// Fail loudly instead of shipping an invalid entry: the sealed gate only
// accepts UTF-8 text of 1 to 30 characters, not only white space.
if (WORD.length < 1 || WORD.length > 30 || !WORD.trim()) {
  throw new Error(`Word is ${WORD.length} characters; gate needs 1-30 non-blank.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
console.log(`Wrote ${WORD.length} characters to ${outDir}/entry.txt`);
