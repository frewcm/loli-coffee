/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sedan: ["Sedan", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: "#231F20",
        secondary: "#E8E8E1",
      },
    },
  },
  plugins: [],
};
