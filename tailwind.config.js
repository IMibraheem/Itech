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
        'min-1280':'1280px',
        'min-1536':'1536px',

        'max-1010':'1010px',
        'max-1110':'1110px',
        'max-1279':'1279px',
        'max-1405':'1405px',
        'max-1636':'1636px',
      }
    },
  },
  plugins: [],
}

