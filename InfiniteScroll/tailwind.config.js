/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "415px" },
      md: { min: "415px", max: "850px" },
    },
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
