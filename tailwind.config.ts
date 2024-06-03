import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';

const MIN_WIDTH = 320;
const MAX_WIDTH = 1240;
const MIN_SCALE = 1.2;
const MAX_SCALE = 1.333;
const MIN_BASE_SIZE = 16;
const MAX_BASE_SIZE = 20;

// Font sizes in `rem` units
const MIN_FONT = {
  xxs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MIN_BASE_SIZE / Math.pow(MIN_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MIN_BASE_SIZE / MIN_SCALE / 0.16) / 100,
  p: Math.round(MIN_BASE_SIZE / 4) / 4,
  h5: Math.round((MIN_BASE_SIZE * MIN_SCALE) / 0.16) / 100,
  h4: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MIN_BASE_SIZE * Math.pow(MIN_SCALE, 5)) / 0.16) / 100,
};
// Font sizes in `rem` units
const MAX_FONT = {
  xxs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 3) / 0.16) / 100,
  xs: Math.round(MAX_BASE_SIZE / Math.pow(MAX_SCALE, 2) / 0.16) / 100,
  sm: Math.round(MAX_BASE_SIZE / MAX_SCALE / 0.16) / 100,
  p: Math.round(MAX_BASE_SIZE / 4) / 4,
  h5: Math.round((MAX_BASE_SIZE * MAX_SCALE) / 0.16) / 100,
  h4: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 2)) / 0.16) / 100,
  h3: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 3)) / 0.16) / 100,
  h2: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 4)) / 0.16) / 100,
  h1: Math.round((MAX_BASE_SIZE * Math.pow(MAX_SCALE, 5)) / 0.16) / 100,
};
const SLOPE = {
  xxs: (16 * (MAX_FONT.xxs - MIN_FONT.xxs)) / (MAX_WIDTH - MIN_WIDTH),
  xs: (16 * (MAX_FONT.xs - MIN_FONT.xs)) / (MAX_WIDTH - MIN_WIDTH),
  sm: (16 * (MAX_FONT.sm - MIN_FONT.sm)) / (MAX_WIDTH - MIN_WIDTH),
  p: (16 * (MAX_FONT.p - MIN_FONT.p)) / (MAX_WIDTH - MIN_WIDTH),
  h5: (16 * (MAX_FONT.h5 - MIN_FONT.h5)) / (MAX_WIDTH - MIN_WIDTH),
  h4: (16 * (MAX_FONT.h4 - MIN_FONT.h4)) / (MAX_WIDTH - MIN_WIDTH),
  h3: (16 * (MAX_FONT.h3 - MIN_FONT.h3)) / (MAX_WIDTH - MIN_WIDTH),
  h2: (16 * (MAX_FONT.h2 - MIN_FONT.h2)) / (MAX_WIDTH - MIN_WIDTH),
  h1: (16 * (MAX_FONT.h1 - MIN_FONT.h1)) / (MAX_WIDTH - MIN_WIDTH),
};
const INTERCEPT = {
  xxs: Math.round(100 * (MIN_FONT.xxs - SLOPE.xxs * (MIN_WIDTH / 16))) / 100,
  xs: Math.round(100 * (MIN_FONT.xs - SLOPE.xs * (MIN_WIDTH / 16))) / 100,
  sm: Math.round(100 * (MIN_FONT.sm - SLOPE.sm * (MIN_WIDTH / 16))) / 100,
  p: Math.round(100 * (MIN_FONT.p - SLOPE.p * (MIN_WIDTH / 16))) / 100,
  h5: Math.round(100 * (MIN_FONT.h5 - SLOPE.h5 * (MIN_WIDTH / 16))) / 100,
  h4: Math.round(100 * (MIN_FONT.h4 - SLOPE.h4 * (MIN_WIDTH / 16))) / 100,
  h3: Math.round(100 * (MIN_FONT.h3 - SLOPE.h3 * (MIN_WIDTH / 16))) / 100,
  h2: Math.round(100 * (MIN_FONT.h2 - SLOPE.h2 * (MIN_WIDTH / 16))) / 100,
  h1: Math.round(100 * (MIN_FONT.h1 - SLOPE.h1 * (MIN_WIDTH / 16))) / 100,
};

// prettier-ignore
const fontConfig = {
  xxs: `clamp(${ Math.min(MIN_FONT.xxs) }rem, calc(${ INTERCEPT.xxs }rem + ${ Math.round(10000 * SLOPE.xxs) / 100 }vw), ${ Math.max(MAX_FONT.xxs) }rem)`,
  xs:  `clamp(${ Math.min(MIN_FONT.xs ) }rem, calc(${ INTERCEPT.xs  }rem + ${ Math.round(10000 * SLOPE.xs ) / 100 }vw), ${ Math.max(MAX_FONT.xs ) }rem)`,
  sm:  `clamp(${ Math.min(MIN_FONT.sm ) }rem, calc(${ INTERCEPT.sm  }rem + ${ Math.round(10000 * SLOPE.sm ) / 100 }vw), ${ Math.max(MAX_FONT.sm ) }rem)`,
  md:   `clamp(${ Math.min(MIN_FONT.p  ) }rem, calc(${ INTERCEPT.p   }rem + ${ Math.round(10000 * SLOPE.p  ) / 100 }vw), ${ Math.max(MAX_FONT.p  ) }rem)`,
  lg:  `clamp(${ Math.min(MIN_FONT.h5 ) }rem, calc(${ INTERCEPT.h5  }rem + ${ Math.round(10000 * SLOPE.h5 ) / 100 }vw), ${ Math.max(MAX_FONT.h5 ) }rem)`,
  xl:  `clamp(${ Math.min(MIN_FONT.h4 ) }rem, calc(${ INTERCEPT.h4  }rem + ${ Math.round(10000 * SLOPE.h4 ) / 100 }vw), ${ Math.max(MAX_FONT.h4 ) }rem)`,
  '2xl':  `clamp(${ Math.min(MIN_FONT.h3 ) }rem, calc(${ INTERCEPT.h3  }rem + ${ Math.round(10000 * SLOPE.h3 ) / 100 }vw), ${ Math.max(MAX_FONT.h3 ) }rem)`,
  '3xl':  `clamp(${ Math.min(MIN_FONT.h2 ) }rem, calc(${ INTERCEPT.h2  }rem + ${ Math.round(10000 * SLOPE.h2 ) / 100 }vw), ${ Math.max(MAX_FONT.h2 ) }rem)`,
  '4xl':  `clamp(${ Math.min(MIN_FONT.h1 ) }rem, calc(${ INTERCEPT.h1  }rem + ${ Math.round(10000 * SLOPE.h1 ) / 100 }vw), ${ Math.max(MAX_FONT.h1 ) }rem)`,
}

const spacingConfig = {
  px: '1px',
  0: '0px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
};

const useCustomConfigs = true;

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
    spacing: useCustomConfigs ? spacingConfig : defaultTheme.spacing,
    extend: {
      animation: {
        slogan: 'slogan 1.5s ease-in',
      },
      container: {
        center: true,
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      fontSize: fontConfig,
      keyframes: {
        slogan: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [typography],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
