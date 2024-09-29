/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        gothic: ['"League Gothic"', 'sans-serif'],
        big_shoulder: ['"Big Shoulders Display"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      colors:{
        custom_cinza: '#9EBDC1',
      }
    },
  },
  plugins: [],
}
