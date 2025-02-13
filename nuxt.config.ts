// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',

    '@nuxt/fonts',
    '@nuxtjs/tailwindcss',

    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',

    '@nuxt/icon',

    '@nuxt/test-utils/module',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  runtimeConfig: {
    theMealDb: {
      apiBase: 'https://www.themealdb.com/api/json/v1/',
      apiKey: '1',
    },
  },
})
