/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
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
  plugins: []
}
