import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Instgram_Full_Clone/',
  server: {
    strictPort: true,
  },
  publicDir: 'src/public', // Ensure Vite knows where your static files are
})
