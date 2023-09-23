/** @type {import('tailwindcss').Config} */
module.exports = {
  // Just-in-time mode: đỡ config nhiều, []
  mode: "jit",
  content: ["./public/**/*.{html,js}"],

  // config spacing, colors
  theme: {
    extend: {
      spacing: {
        35: "35px",
      },
      colors: {
        "gray#333": "#333",
      },
    },
  },
  plugins: [],
};
