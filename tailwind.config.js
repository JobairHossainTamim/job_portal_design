/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueColor': '#2a68ff',
        "grayIsh": "#f1f4f8",
        "cardShadow": "#f7f8f9",
        "text-color": "#252b36"

      }
    },
  },
  plugins: [],
}