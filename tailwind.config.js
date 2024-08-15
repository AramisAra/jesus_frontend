/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./**/*.{razor,html,cshtml}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
        Tan: '#D2B48C',
        white: colors.white
    },
    screens:  {
      'mobile': '0px',
      'tablet': '600px',
      'HD': '1000px',
      'UHD': '1280px',
      'K2': '1920px',
      'K4': '2560spx'
    },
    extend: {
    },
},
  plugins: [
    require('flowbite/plugin')
  ],
}
