import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: Number(env.PORT) || 5000,
    },
    plugins: [vue(), vueDevTools()],
    build: {
      outDir: 'dist',
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          affiliatesPage: resolve(__dirname, 'affiliates.html'),
          transactionsPage: resolve(__dirname, 'transactions.html'),
          styles: resolve(__dirname, 'src/entries/styles.js'),
          header: resolve(__dirname, 'src/entries/header.js'),
          banner: resolve(__dirname, 'src/entries/banner.js'),
          wins: resolve(__dirname, 'src/entries/wins.js'),
          popular: resolve(__dirname, 'src/entries/popular.js'),
          catalog: resolve(__dirname, 'src/entries/catalog.js'),
          studios: resolve(__dirname, 'src/entries/studios.js'),
          recently: resolve(__dirname, 'src/entries/recently.js'),
          info: resolve(__dirname, 'src/entries/info.js'),
          navigation: resolve(__dirname, 'src/entries/navigation.js'),
          profileModal: resolve(__dirname, 'src/entries/profileModal.js'),
          favoritesModal: resolve(__dirname, 'src/entries/favoritesModal.js'),
          gameModal: resolve(__dirname, 'src/entries/gameModal.js'),
          affiliates: resolve(__dirname, 'src/entries/affiliates.js'),
          walletModal: resolve(__dirname, 'src/entries/walletModal.js'),
          rewardsModal: resolve(__dirname, 'src/entries/rewardsModal.js'),
        },
        output: {
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/chunks/[name]-[hash].js',
          assetFileNames: 'assets/[name].[ext]',
        },
      },
      manifest: true,
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        '@configs': fileURLToPath(new URL('./src/configs', import.meta.url)),
        '@interfaces': fileURLToPath(new URL('./src/interfaces', import.meta.url)),
        '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
        '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@styles/modules/vars.scss" as *;
          @use "@styles/modules/mixins.scss" as *;
        `,
        },
      },
    },
  };
});
