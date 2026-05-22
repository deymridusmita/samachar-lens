import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Expose the dev server on the local network so phones / other
    // devices on the same Wi-Fi can open it via the Network URL.
    host: true,
    port: 5173,
  },
})
