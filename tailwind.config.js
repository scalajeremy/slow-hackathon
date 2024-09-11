/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'cyan-helmo': '#73C5C3',
        'green-helmo': '#BDD148',
        'purple-helmo': '#C26AA6',
        'red-helmo': '#D92049',
        'orange-helmo': '#EF7F1A',
        'dark-blue': '#00043E',
      },
      fontFamily:{
        'jet' : ['JetBrains Mono']
      }
    },
  },
  plugins: [],
}