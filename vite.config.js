import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon-c.png", "icon-192.png", "icon-512.png"],
      manifest: {
        name: "CloveNet Hub",
        short_name: "CloveNet",
        description:
          "CloveNet Hub helps youth build digital readiness skills for jobs, email usage, and online applications.",
        theme_color: "#0f766e",
        background_color: "#f8faff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
})