import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import json from '@rollup/plugin-json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    json(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  }
})
