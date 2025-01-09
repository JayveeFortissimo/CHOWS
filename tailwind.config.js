/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
         title:["Roboto","serif"]
    },
    screens:{
      'xs':'360px'
    },
    },
  },
  plugins: [],
}

