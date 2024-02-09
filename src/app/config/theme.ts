import {
  createTheme,
  DEFAULT_THEME,
  MantineColorsTuple,
  mergeMantineTheme,
} from '@mantine/core';

const classicDarkColors: MantineColorsTuple = [
  '#C1C2C5',
  '#A6A7AB',
  '#909296',
  '#5c5f66',
  '#373A40',
  '#2C2E33',
  '#25262b',
  '#1A1B1E',
  '#141517',
  '#101113',
];

const themeOverride = createTheme({
  primaryColor: 'violet',
  colors: {
    dark: classicDarkColors,
  },
  other: {
    colors: {
      root: classicDarkColors[9],
      shellSurfaces: classicDarkColors[7],
    },
  },
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
