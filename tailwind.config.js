const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],

  safelist: [
    'rounded-md',
    'bg-purple-700',
    {
      pattern: /blue$/,
    },
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        white: '#fff',
        gray: colors.neutral,
        'gray-1000': '#050505',
      },
      opacity: {
        15: '0.15',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
