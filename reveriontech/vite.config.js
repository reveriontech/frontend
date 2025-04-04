import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // Changed from plugin-react-swc

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: false
  },
  server: {
		port: 3000,
		watch: {
		usePolling: true,
		interval: 30,
		},
	}
})