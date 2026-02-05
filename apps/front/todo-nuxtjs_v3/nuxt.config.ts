// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    apiSecret: '',
    public: {
      applicationUrl: 'http://localhost:3001',
      apiBaseUrl: 'http://localhost:8080/api/v1',
    },
  },
  devtools: {
    enabled: true,
  },
  srcDir: './src',
  devServer: {
    port: 3001,
  },
  modules: ['@nuxt/eslint', 'nuxt-svgo', '@pinia/nuxt'],
  css: ['sanitize.css', '~/assets/css/base.scss'],
  eslint: {
    config: {},
  },
  svgo: {
    defaultImport: 'component',
  },
  pinia: {
    storesDirs: ['./src/store/**'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  compatibilityDate: '2024-09-21',
});
