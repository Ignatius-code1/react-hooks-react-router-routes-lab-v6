import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.js',
    silent: false,
    onConsoleLog: (log, type) => {
      if (log.includes('Unhandled promise rejection')) {
        return false;
      }
    }
  }
})
