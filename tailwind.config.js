/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-switzer)", "Inter", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
