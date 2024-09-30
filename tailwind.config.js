/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        shoulders: ['"Big Shoulders Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
