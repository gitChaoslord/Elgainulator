import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import packageJson from './package.json';
import alias from '@rollup/plugin-alias';
import checker from 'vite-plugin-checker';
import { VitePWA } from "vite-plugin-pwa";


// https://vitejs.dev/config/
export default defineConfig({
  base: "/elgainulator/",
  plugins: [react(),
  VitePWA({
    injectRegister: 'auto',
    registerType: "prompt",
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
    strategies: "generateSW",
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
      name: "Elgainulator",
      short_name: "Elgainulator",
      description: "Multiple calculators, one tab",
      theme_color: "#EEEEEE",
      background_color: "#FFFFFF",
      display: "fullscreen",
      start_url: "/",
      icons: [
        {
          src: "images/android-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any"
        },
        {
          src: "images/android-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any"
        },
        {
          src: "images/maskable-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable"
        },
        {
          src: "images/maskable-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable"
        }
      ]
    },
    devOptions: {
      enabled: true
    }
  }),
  checker({
    typescript: true, eslint: {
      lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
    },
  }),
  alias({
    entries: [
      {
        find: "@components",
        replacement: resolve(__dirname, "src/components"),
      },
      {
        find: "@constants",
        replacement: resolve(__dirname, "src/constants"),
      },
      {
        find: "@locales",
        replacement: resolve(__dirname, "src/locales"),
      },
      {
        find: "@helpers",
        replacement: resolve(__dirname, "src/helpers"),
      },
      {
        find: "@store",
        replacement: resolve(__dirname, "src/store"),
      }
    ]
  })],
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version)
  }
})
