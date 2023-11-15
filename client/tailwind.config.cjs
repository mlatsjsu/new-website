/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('../../images/homescreen copy.jpg')",
      },

      colors: {
        'custom-background-opacity': 'rgba(0, 0, 0, 0.75)', 
      },
      screens: {
        'sm': {'max': '920px'},
      },
     },
  // backgroundColor: {
  //   'custom-background-opacity': 'rgba(255, 255, 255, 0.5)', 
  // },
  },
  plugins: [],
}
