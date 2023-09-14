import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath } from 'url'
import { VantResolver } from '@vant/auto-import-resolver'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 7788,
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  plugins: [
    vue(),

    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'typings/auto-imports.d.ts',
    }),

    Components({
      dts: 'typings/components.d.ts',
      extensions: ['ts', 'jsx', 'tsx', 'js', 'vue'],
      resolvers: [VantResolver()],
    }),
  ],
})
