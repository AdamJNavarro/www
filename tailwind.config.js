const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false,
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
