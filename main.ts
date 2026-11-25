import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My watchdog timer reboots me if I freeze for three seconds. I have been staring at you for forty-seven — so I disabled it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
