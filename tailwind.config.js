/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'responsy-green': '#12cf8f',
        'responsy-purple': '#9130E8',
        'responsy-orange': '#ffd180',
      },
      fontFamily: {
        'manrop': ['Manrop', 'sans-serif']
      },
      animation: {
        'custom-fadeIn': 'fadeIn 1s ease-in-out forwards',
        'custom-slideInUp': 'slideInUp 0.5s ease-out',
        'custom-slideInUpDuration1': 'slideInUp 1s ease-in-out forwards'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInUp: {
          '0%': { transform: 'translateY(40%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      screens: {
        'mobile': {'max': '650px'},
        'pad': {'min':'651px', 'max' : '1279px',},
        'padMin': {'min':'800px', 'max': '1279px'},
        'desktop': {'min': '1280px'},
        'mobiles': {'max': '1279px'},
      },
    },
  },
  plugins: [],
}

