/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'main': '#EAE0D5',
        'main-dark': '#18242A',
        'accent': '#C6AC8F',
        'bg-main': '#22333B',
        'test': '#fe5454'

      },

      fontFamily: {
        'Cabin': ['Cabin', 'sans-serif'],
        'SFMono': ['SF Mono', 'sans-serif'],
      },

      fontSize: {
        'tiny': '.875rem',
        'small': '1.2rem',
        'base': '25px',
        'lg': '2.5rem',
        'xl': '72px',
        '2xl': '150px',

      },

      margin: {
        '10px': '10px',
        '20px': '20px',
        '45px': '45px',
        '50px': '50px',
        '72.5px': '72.5px',
      },

      width:{
        '5px': '5px',
        '50px': '50px',
        '150px': '150px',
      },

      height:{
        '5px': '5px',
        '50px': '50px',
        '80px': '80px',
        '100px': '100px',
        '150px': '150px',
      }

    },
  },
  plugins: [],
}