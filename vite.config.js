import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// actualizo vite config
export default defineConfig({
  base: '/Alkemy-TPI/', 
  plugins: [react()],
})
