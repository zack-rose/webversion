import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm"],
  entry: [
    "src/components/index.ts",
    "src/utils/index.ts",
    "tailwind.config.ts",
  ],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  publicDir: true,
});
