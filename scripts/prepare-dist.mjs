import { cpSync, existsSync, rmSync } from "node:fs";

if (!existsSync("out")) {
  throw new Error("Next.js export directory was not created.");
}

rmSync("dist", { recursive: true, force: true });
cpSync("out", "dist", { recursive: true });
