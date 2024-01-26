/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'san-serif']
      },

      colors: {
        primary: '#d2001a',
        placeholder: '#C4C4C4',
        lightGray: '#6B6B6B'
      }
    }
  },
  plugins: []
}
