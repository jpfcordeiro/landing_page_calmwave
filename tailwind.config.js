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
        custom_light: '#EEECEC',
        custom_mid: '#9F9580',
        custom_dark: '#2C2C2C',

      },
      backgroundImage: {
        'vertical-gradient': 'linear-gradient(to bottom, #EEECEC, #9F9580, #2C2C2C)',
      },
    },
  },
  plugins: [],
}
