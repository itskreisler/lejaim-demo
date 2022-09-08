import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    plugins: [react()],
    base: '/lejaim-demo/',
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'app-[name].js',
          assetFileNames: 'app-[name].css',
          chunkFileNames: 'chunk-[name].js'
        }
      },
      // Prevent vendor.css being created
      cssCodeSplit: false,
      // prevent some warnings
      chunkSizeWarningLimit: 60000
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    define: {
      'process.env': {
        ...process.env
      }
    }
  })
}
