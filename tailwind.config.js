/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}", // Source files
    "./pages/**/*.{js,ts,jsx,tsx}", // Source files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    // darkTheme: "night",
  },
};
