import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://crafts-crafts.onrender.com' // Proxy API requests to your Express backend
    }
  }
})
