/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#0D1117',
        'blue': '#58A6FF',
        'white': '#C1D1D9',
        'gray':'#8B9493',
        'green': '#238636',
        'nav-color': '#161B22',
        'btn-text': '#FFFFFF'
      }
    },
  },
  plugins: [],
}