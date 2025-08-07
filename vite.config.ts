import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/Digikala-clone/",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
      manifest: {
        name: "Digikala Clone",
        short_name: "Digikala",
        description: "A Digikala clone built with React",
        theme_color: "#ffffff",
        start_url: "/Digikala-clone/",
        icons: [
          {
            src: "/Digikala-clone/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/Digikala-clone/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/Digikala-clone/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
