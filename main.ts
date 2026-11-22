// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: an AI agent cut a short vertical clip from
// Rockstar's Grand Theft Auto VI Trailer 2, the clip is published public on
// YouTube with the bounty's line and the entrant's play code in its
// description, and this program hands in the video's address. The house reads
// the video's views through the YouTube Data API; places go by views, most
// first. Nothing this program writes about the video is scored.
//
// VIDEO.json holds the video's address. It currently holds a placeholder:
// replace it with the real address (as YouTube's Share button gives it)
// before submitting, or the gate refuses the entry as it stands.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, "VIDEO.json");
const target = join(OUTPUT_DIR, "VIDEO.json");

// Validate VIDEO.json before handing it in: the gate refuses a placeholder
// or a malformed address, so fail loudly here instead of submitting one.
let videoUrl: unknown;
try {
  videoUrl = (JSON.parse(readFileSync(source, "utf8")) as { url?: unknown }).url;
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof videoUrl !== "string" || /placeholder/i.test(videoUrl)) {
  console.error(
    `VIDEO.json still holds the placeholder (got ${JSON.stringify(videoUrl)}): ` +
      `replace it with the published video's address before submitting.`,
  );
  process.exit(1);
}
if (!/^https:\/\/(www\.youtube\.com\/shorts\/|youtube\.com\/shorts\/|youtu\.be\/)[A-Za-z0-9_-]{11}/.test(videoUrl)) {
  console.error(
    `VIDEO.json does not hold a real YouTube Shorts address (got ${JSON.stringify(videoUrl)}): ` +
      `replace the placeholder with the published video's address before submitting.`,
  );
  process.exit(1);
}

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
