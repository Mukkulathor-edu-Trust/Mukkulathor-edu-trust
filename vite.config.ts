// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ Render requires base as root
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist", // ✅ ensure output dir is 'dist'
    rollupOptions: {
      input: "./index.html", // ✅ full relative path
    },
  },
});
