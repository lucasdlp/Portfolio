/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#3BAC76",
      },
      fontFamily: {
        romantica: ["Romantica", "sans-serif"],
        genesys: ["Genesys", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./css/style.css -o ./src/style.css --watch
