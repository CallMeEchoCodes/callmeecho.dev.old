/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', '**/*.html'],
  theme: {
    extend: {
      colors: {
        "platinum": {
          50: "#ffffff",
          100: "#ffffff",
          200: "#f6fffa",
          300: "#ecf6f0",
          400: "#e2ece6",
          500: "#d8e2dc",
          600: "#ced8d2",
          700: "#c4cec8",
          800: "#bac4be",
          900: "#b0bab4"
        },
        "unbleached-silk": {
          50: "#ffffff",
          100: "#ffffff",
          200: "#fffff7",
          300: "#fff9ed",
          400: "#ffefe3",
          500: "#ffe5d9",
          600: "#f5dbcf",
          700: "#ebd1c5",
          800: "#e1c7bb",
          900: "#d7bdb1"
        },
        "pink": {
          50: "#fffcff",
          100: "#fff2fc",
          200: "#ffe8f2",
          300: "#ffdee8",
          400: "#ffd4de",
          500: "#ffcad4",
          600: "#f5c0ca",
          700: "#ebb6c0",
          800: "#e1acb6",
          900: "#d7a2ac"
        },
        "light-pink": {
          50: "#ffdee9",
          100: "#ffd4df",
          200: "#ffcad5",
          300: "#ffc0cb",
          400: "#feb6c1",
          500: "#f4acb7",
          600: "#eaa2ad",
          700: "#e098a3",
          800: "#d68e99",
          900: "#cc848f"
        },
        "mountbatten-pink": {
          50: "#cfb3bb",
          100: "#c5a9b1",
          200: "#bb9fa7",
          300: "#b1959d",
          400: "#a78b93",
          500: "#9d8189",
          600: "#93777f",
          700: "#896d75",
          800: "#7f636b",
          900: "#755961"
        }
      },
      fontFamily: {
        'dosis': ['"Dosis"', 'sans-serif']
      }
    },
  },
  
  plugins: [require("tailwindcss-scrollbar")],
}