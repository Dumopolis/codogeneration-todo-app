import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

import path from "node:path";
import { packageDirectorySync } from "pkg-dir";

const packageRoot = packageDirectorySync();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      src: path.resolve(packageRoot, "./src"),
    },
  },
});
