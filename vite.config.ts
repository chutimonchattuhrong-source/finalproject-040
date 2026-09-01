import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Allow serving from subdirectories in Laragon (http://localhost/040chutimon/kk/beybeykrukit-040/)
  server: {
    port: 3000,
    open: true
  }
})
