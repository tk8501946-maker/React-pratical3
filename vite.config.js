import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Tailwind is configured via PostCSS and `tailwind.config.*` rather
// than a `@tailwindcss/vite` package. Remove the invalid import.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
