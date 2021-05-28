const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    content: ["./src/**/*.{ts,tsx}"],
    options: {
      safelist: [/blue$/, "rounded-md", "bg-purple-700"],
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
      opacity: {
        15: "0.15",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
