const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    content: ["./src/**/*.{ts,tsx}"],
    options: {
      safelist: [/blue$/],
    },
  },
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: colors.trueGray,
        "gray-1000": "#050505",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
