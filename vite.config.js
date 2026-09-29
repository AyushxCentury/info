import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Served from https://ayushxcentury.github.io/info/
  base: '/info/',
})
