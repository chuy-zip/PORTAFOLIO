import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : {
    alias: {
      '@assets':'/src/assets',
      '@components':'/src/components',
      '@hooks':'/src/hooks',
      '@styles':'/src/styles',
      '@views':'/src/views'
    }
  },
  base:'https://chuy-zip.github.io/PORTAFOLIO/',
})
