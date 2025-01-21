import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Shadcn https://ui.shadcn.com/docs/installation/vite
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
