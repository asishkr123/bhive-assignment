import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
export default defineConfig({
  build: {
    outDir: "build",
  },
  base: "/bhive-assignment",
  plugins: [svgr(), dts(), react()],
});
