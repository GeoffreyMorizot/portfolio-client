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
    strapi: { url: 'http://0.0.0.0:1337' },
    public: {
      strapi: { url: 'http://0.0.0.0:1337' },
    },
  },
  ssr: true,
  modules: ['@nuxtjs/strapi'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
