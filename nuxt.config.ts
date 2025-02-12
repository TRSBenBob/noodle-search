// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',

    '@nuxt/test-utils/module',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  runtimeConfig: {
    // The private keys which are only available server-side
    theMealDb: {
      apiBase: 'https://www.themealdb.com/api/json/v1/',
      apiKey: '1',
    },
  },
})
