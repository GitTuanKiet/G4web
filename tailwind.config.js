/** @type {import('tailwindcss').Config} */

import flowbite from 'flowbite/plugin'
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'san-serif']
      },

      colors: {
        primary: '#d2001a',
        secondary: '#FFDE00',
        placeholder: '#C4C4C4',
        lightGray: '#6B6B6B'
      }
    }
  },
  plugins: [flowbite]
}
