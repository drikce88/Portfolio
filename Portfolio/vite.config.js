import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'src/main.jsx'
      }
    }
  }
});