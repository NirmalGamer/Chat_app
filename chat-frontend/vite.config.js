import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // ← This allows external access
    port: 4000,
    cors: true, // or you can put the full Ngrok host here
    strictPort: true,
    allowedHosts: [
      'pending'
    ],
  }
})