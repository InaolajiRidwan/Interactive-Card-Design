/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        verydarkgrayish: "hsl(278, 68%, 11%)",
        darkgrayishviolet: "hsl(279, 6%, 55%)",
        whitee: "hsl(0, 0%, 100%)",
        lightgrayishviolet: "hsl(270, 3%, 87%)",
      },
    },
  },
  plugins: [],
};

