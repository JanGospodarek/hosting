/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./components/**/*.{js,ts,jsx,tsx}", // Source files
    "./pages/**/*.{js,ts,jsx,tsx}", // Source files
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        tilt: ["Qwitcher Grypen", "cursive"],
        rental: ["Kanit", "sans-serif"],
        rentalCursive: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "business", "black"],
    // darkTheme: "night",
  },
});
