/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003C8F',
      },
      fontFamily: {
        primary: 'JetBrains Mono',
        secondary: 'Poppins',
      },
    },
  },
  plugins: [],
};
