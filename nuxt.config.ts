// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    strapi: { url: 'http://localhost:1337' },
    public: {
      strapi: { url: 'http://localhost:1337' },
    },
  },
  ssr: false,
  modules: ['@nuxtjs/strapi'],
})
