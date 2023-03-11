export default defineNuxtConfig({
  ssr: true,
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  runtimeConfig: {
    public: {
      env: process.env.ENVIRONMENT,
    },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  build: {
    transpile: ['vuetify'],
  },
  css: ['~/assets/css/main.scss', 'vuetify/lib/styles/main.sass', '@mdi/font/css/materialdesignicons.min.css'],
  imports: {
    dirs: ['store'],
  },
})
