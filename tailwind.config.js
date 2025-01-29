/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'min-800':'800px',
        'min-1050':'1050px',
        'min-1111':'1111px',
        // 'min-1280':'1280px',
        'min-1300':'1300px',
        'min-1370':'1370px',
        'min-1441':'1441px',
        'min-1481':'1481px',
        'min-1540':'1540px',

        'max-1010':'1010px',
        'max-1110':'1110px',
        'max-1279':'1279px',
        'max-1439':'1439px',
        'max-1636':'1636px',
      }
    },
  },
  plugins: [],
}

