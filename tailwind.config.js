/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#0B2027',
        'teal': '#40798C',
        'green': '#70A9A1',
        'ash':'#CFD7C7',
        'beige': '#F6F1D1'
      }
    },
  },
  plugins: [],
}