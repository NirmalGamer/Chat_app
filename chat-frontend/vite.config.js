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
      'b1b9-2409-40c4-35a-c917-b86b-3075-b81f-38c4.ngrok-free.app'
    ]

  }
})