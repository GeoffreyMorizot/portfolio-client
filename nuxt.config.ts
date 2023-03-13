// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.BASE_URL + '/api',
      BASE_URL: process.env.BASE_URL,
    },
  },
  ssr: false,
})
