// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // 👈 Make sure to import path

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/Mukkulathor-edu-trust/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 👈 Add this line
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
}));
