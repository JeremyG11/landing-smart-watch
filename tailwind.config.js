/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-1": "url('./images/smart-watch.png')",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      noto: ["Noto Sans", " sans-serif"],
      comfortaa: ["Comfortaa", "cursive"],
      cinzel: ["Cinzel", "serif"],
      cormorant: ["Cormorant Garamond", "serif"],
      playfair: ["Playfair Display", "serif"],
      raleway: ["Raleway", "sans-serif"],
      pinyon: ["Pinyon Script", "cursive"],
    },
  },
  plugins: [],
};
