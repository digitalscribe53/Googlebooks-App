import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: process.env.NODE_ENV === 'production' 
          ? 'https://googlebooks-app.onrender.com/' 
          : 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})