import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const sidebar_px = 375;

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.mdx',
  ],
  darkMode: 'media',
  theme: {
    screens: {
      tablet: '701px',
      desktop: '1120px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      gridTemplateColumns: {
        sidebar: `${sidebar_px}px auto`,
        sidebarOpen: '300px auto',
        sidebarClosed: '0px auto',
      },
      gridTemplateRows: {
        header: '64px auto',
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
