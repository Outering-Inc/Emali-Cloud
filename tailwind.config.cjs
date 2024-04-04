/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",

        /**Job Page**/
        blueColor:"#2a68ff",
        greyIsh:"#f1f4f8",
        cardSadow:"#f7f8f9",
        textColor:"#252b36",

      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      gridTemplateColumns: {
        // Define your column spans here
        '1': 'repeat(1, minmax(0, 1fr))', // col-span-1
        '2': 'repeat(2, minmax(0, 1fr))', // col-span-2
        '3': 'repeat(3, minmax(0, 1fr))', // col-span-3
        // Add more as needed
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "100px",
      xl: "1700px",
    },
  },
  plugins: [],

};