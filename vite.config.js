import react from '@vitejs/plugin-react'
import path from 'path'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  // esbuild: {
  //   loader: 'jsx',
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //     },
  //   },
  // },
})
