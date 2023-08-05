// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/google-fonts', 'nuxt-swiper', '@nuxtjs/color-mode'],
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
});
