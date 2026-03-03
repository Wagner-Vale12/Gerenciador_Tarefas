import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Em ambientes montados (WSL /mnt/c) os eventos de arquivo
      // podem não ser detectados corretamente — usar polling.
      usePolling: true,
    },
  },
})
