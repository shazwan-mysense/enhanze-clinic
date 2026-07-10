import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' keeps every asset path relative, so the build works
// on GitHub Pages regardless of the repository name.
export default defineConfig({
  base: './',
  plugins: [react()],
})
