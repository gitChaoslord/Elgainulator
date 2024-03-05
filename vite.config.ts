import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import packageJson from './package.json';
import alias from '@rollup/plugin-alias';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
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
    ]
  })],
  define: {
    'import.meta.env.PACKAGE_VERSION': JSON.stringify(packageJson.version)
  }
})