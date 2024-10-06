/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        shoulders: ['"Big Shoulders Display"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        gothic: ['"League Gothic"', 'sans-serif'],
      },
      colors:{
        custom_cinza: '#9EBDC1',
        custom_roxo: '5319C6',
      }
    },
  },
  plugins: [],
}
