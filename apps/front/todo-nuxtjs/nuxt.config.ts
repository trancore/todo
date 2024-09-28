// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  srcDir: './src',

  devServer: {
    port: 3001,
  },
  modules: ['@nuxt/eslint', '@formkit/nuxt'],
  eslint: {
    config: {},
  },
  formkit: {
    autoImport: true,
    defaultConfig: false,
  },
  compatibilityDate: '2024-09-21',
});
