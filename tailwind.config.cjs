/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ubuntu: "Ubuntu, sans-serif",
    },
    extend: {
      colors: {
        darkCharcoal: "#333333",
        charcoal: "#555555",
        lightCharcoal: "#777777",
        darkGreen: "#1F9751",
        lightGreen: "#EFFAF0",
        whiteSmoke: "#F2F2F2",
        lightGray: "#dddddd",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
