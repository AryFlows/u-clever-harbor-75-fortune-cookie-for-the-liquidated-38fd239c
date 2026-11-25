import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "Your portfolio will recover. Your dignity is still pending review.";

if (fortune.length < 1 || fortune.length > 160) {
  throw new Error(`fortune must be 1-160 chars, got ${fortune.length}`);
}

const words = fortune.trim().split(/\s+/).length;
if (words > 20) {
  throw new Error(`fortune must be at most 20 words, got ${words}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
console.log(fortune);
