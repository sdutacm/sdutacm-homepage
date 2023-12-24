/* eslint-disable no-undef */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  experimental: {
    renderBuiltUrl(filename) {
      let cdnUrl = process.env.CDN_URL || ''
      if (!cdnUrl.endsWith('/')) {
        cdnUrl += '/'
      }
      return `${cdnUrl}${filename}`
    }
  }
})
