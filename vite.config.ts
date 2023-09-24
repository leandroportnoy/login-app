import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const CENSUS_GEOCODE_BASE_API_URL = 'https://geocoding.geo.census.gov/'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: CENSUS_GEOCODE_BASE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
  plugins: [react()],
})
