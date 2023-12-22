/* eslint-disable @typescript-eslint/no-use-before-define */

import { ApolloProvider } from '@apollo/client';
import * as React from 'react';
import { setCookie } from 'cookies-next';

import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  Global,
} from '@mantine/core';
import { client } from '~/lib/apollo';
import SiteConfig from './SiteConfig';

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
};

export const GlobalNavigationContext = React.createContext(globalNavigationContext);

function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        html: {
          maxHeight: '100vh',
          overflow: 'hidden',
        },

        body: {
          ':after': {
            content: '""',
            position: 'fixed',
            top: '-50%',
            right: '-50%',
            bottom: '-50%',
            left: '-50%',
            zIndex: -1,
            backgroundColor: theme.colors.dark[7],
          },
        },
      })}
    />
  );
}

export function Providers({ children }: any) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  const [state, setState] = React.useState({
    isOpen: false,
    setIsOpen,
  });

  function setIsOpen(isOpen: boolean) {
    return setState({ ...state, isOpen });
  }

  return (
    <>
      <SiteConfig />
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            primaryColor: 'violet',
            primaryShade: 8,
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <GlobalStyles />
          <ApolloProvider client={client}>
            <GlobalNavigationContext.Provider value={state}>
              {children}
            </GlobalNavigationContext.Provider>
          </ApolloProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
