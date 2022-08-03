const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily:{
      'serif': ['Crimson Pro', ...defaultTheme.fontFamily.serif],
      'mono': ['Fira Code', 'Fira Mono', 'Menlo', 'Consolas', 'DejaVu Sans Mono', 'monospace']
    },
    extend: {
      lineHeight: {
        'compact': '1.3125',
      }
    }
  },
  plugins: [],
}
