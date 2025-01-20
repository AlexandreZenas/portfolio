/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        black : "#242126",
        white: "#fafafa",
        gray: "#969696"
      }
    },
  },
  plugins: [],
}

