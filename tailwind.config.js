/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { min: '320px', max: '767px' },
      tablet: { min: '768px', max: '1023px' },
      desktop: { min: '1024px' }
    },

    extend: {
      fontFamily: {
        body: ['Roboto', 'san-serif']
      },

      colors: {
        primary: '#d2001a',
        secondary: '#FFDE00',
        pinkThin: '#FBE8E5',
        placeholder: '#C4C4C4',
        lightGray: '#6B6B6B'
      }
    }
  },
  plugins: []
}
