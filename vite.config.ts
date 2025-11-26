import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: Number(env.PORT) || 5000
    },
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@configs': fileURLToPath(new URL('./src/configs', import.meta.url)),
        '@types': fileURLToPath(new URL('./src/types', import.meta.url)),
        '@data': fileURLToPath(new URL('./src/data', import.meta.url))
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@styles/modules/vars.scss" as *;
          @use "@styles/modules/mixins.scss" as *;
        `
        }
      }
    }
  }
})
