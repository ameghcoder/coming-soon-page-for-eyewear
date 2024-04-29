/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        theme_gold_2: 'rgba(var(--theme-gold-clr-2) / <alpha-value>)',
        theme_gold: 'rgba(var(--theme-gold-clr) / <alpha-value>)',
        theme_blue: 'rgba(var(--theme-blue-clr) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}

