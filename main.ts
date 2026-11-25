import { writeFileSync, mkdirSync } from "fs";

// The GPS's excuse for sending the driver down the wrong road.
const entry =
  "Recalculating. I said shortcut, you heard scenic tour through a cornfield. Honestly, the cornfield had better signage than you did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
