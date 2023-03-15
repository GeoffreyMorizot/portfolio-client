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
    public: {
      API_BASE_URL: process.env.BASE_URL + '/api',
      BASE_URL: process.env.BASE_URL,
    },
  },
  ssr: false,
})
