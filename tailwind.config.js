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
      dropShadow: {
        glow: [
          "0 0px 5px rgba(255,255, 255, 0.6)",
          "0 0px 40px rgba(255, 255,255, 0.4)",
        ],
      },
      backgroundImage: {
        "timeline-bg": "url('/img/tlo.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light", "business", "black"],
    // darkTheme: "night",
  },
});
