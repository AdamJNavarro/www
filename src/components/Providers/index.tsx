/* eslint-disable @typescript-eslint/no-use-before-define */

import { ApolloProvider } from '@apollo/client';
import * as React from 'react';
import { setCookies } from 'cookies-next';

import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { client } from '~/libs/Apollo';
import SiteConfig from './SiteConfig';

interface ProvidersProps {
  children: any;
  props: any;
}

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
};

export const GlobalNavigationContext = React.createContext(globalNavigationContext);

export function Providers({ children, props }: ProvidersProps) {
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    props.colorScheme
  );
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookies('mantine-color-scheme', nextColorScheme, {
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
