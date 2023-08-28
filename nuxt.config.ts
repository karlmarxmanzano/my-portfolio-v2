// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  ssr: false,
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
  ],
  googleFonts: {
    families: {
      'JetBrains Mono': true,
      Poppins: true,
    },
    download: true,
  },
  swiper: {
    styleLang: 'css',
  },
  colorMode: {
    classSuffix: '',
  },
  pinia: {
    autoImports: ['defineStore'],
  },
});
