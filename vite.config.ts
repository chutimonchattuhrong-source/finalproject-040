import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/finalproject-040/', // GitHub Pages requires the repo name as base
  server: {
    port: 3000,
    open: true
  }
})
