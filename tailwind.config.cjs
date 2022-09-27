/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'main': '#EDE5DC',
        'main-dark': '#18242A',
        'accent': '#C6AC8F',
        'bg-main': '#2C434D',
        'test': '#fe5454'

      },

      fontFamily: {
        'Cabin': ['Cabin', 'sans-serif'],
        'SFMono': ['SF Mono', 'sans-serif'],
      },

      fontSize: {
        
        'tiny': '.875rem',
        'small': '1.2rem',
        'base-sm': '16px',
        'base': '20px',
        'lg': '5vw',
        'xl': '8vw',
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
        '200px': '200px',
        '300px': '300px',
      },

      height:{
        '5px': '5px',
        '50px': '50px',
        '75px': '75px',
        '80px': '80px',
        '100px': '100px',
        '150px': '150px',
        '300px': '300px',
      }

    },
    screens: {

      'nav-sm': {'min': '0px', 'max': '767px'},
      'nav-md': {'min': '767px', 'max': '1280px'},
      'nav-xl': {'max': '1281px'},

      'too-small-min': {'min': '320px'},
      'too-small-max': {'max': '320px'},
      'ssm': {'min': '320px', 'max': '500px'},

      'heading-md': {'min': '320px', 'max': '767px'},
      'tile-sp': {'min': '0px', 'max': '1024px'},
      'tile-bm': {'min': '500px', 'max': '1024px'},

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '767px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',

      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
  },
  plugins: [],
}