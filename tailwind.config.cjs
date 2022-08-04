const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'serif': ['Crimson Pro', ...defaultTheme.fontFamily.serif],
      'sans': [...defaultTheme.fontFamily.sans],
      'mono': ['Fira Code', 'Fira Mono', 'Menlo', 'Consolas', 'DejaVu Sans Mono', 'monospace']
    },
    extend: {
      lineHeight: {
        'compact': '1.3125',
      },
      colors: {
        'twitter': '#1da1f2',
        'github': { 'light': '#24292e', 'dark': '#f0f6fc' },
        'linkedin': '#0077b5',
        'email': '#ff5500',
      },
      screens: {
        'sm': '580px',
      }
    }
  },
  plugins: [],
}
