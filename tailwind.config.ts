import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const sidebar_px = 375;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      tablet: '701px',
      desktop: '1120px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        sidebar: `${sidebar_px}px auto`,
        sidebarOpen: '300px auto',
        sidebarClosed: '0px auto',
      },
      gridTemplateRows: {
        header: '96px auto',
      },
      width: {
        sidebar: `${sidebar_px}px`,
      },
    },
  },
  plugins: [typography],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
