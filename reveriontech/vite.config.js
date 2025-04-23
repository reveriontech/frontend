import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // Changed from plugin-react-swc

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: false
  },
  server: {
	proxy: {
		'/api': {
		  target: 'http://localhost:5000',
		  changeOrigin: true,
		  secure: false
		}
	  }
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./tests/setup.js'],
		include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
	  }
})