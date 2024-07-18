import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vitePluginForArco({
      theme: '@arco-themes/vue-lark-base-plugin',
    }),
    vueDevTools(),
  ],
  server: {
    host: '0.0.0.0',
  },
  build: {
    target: 'esnext',
    // outDir: path.resolve(__dirname, '../static'),
    // assetsDir: 'assets',
    // rollupOptions: {
    //   input: path.resolve(__dirname, 'index.html'),
    //   output: {
    //     chunkFileNames: 'assets/[name]-[hash].js',
    //     entryFileNames: 'assets/[name]-[hash].js',
    //     assetFileNames: 'assets/[name]-[hash].[ext]',
    //   },
    // },
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
