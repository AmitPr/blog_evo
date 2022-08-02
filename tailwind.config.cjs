/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      lineHeight: {
        'compact': '1.3125',
      }
    }
  },
  plugins: [],
}
