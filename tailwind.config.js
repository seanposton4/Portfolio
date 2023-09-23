/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#151e3f',
        'primary-light': '#2c3552',
        'secondary': '#030027',
        'tertiary': '#f2f3d9',
        'accent': '#dc9e82',
        'flair': '#c16e70'
      }
    },
  },
  plugins: [],
}

