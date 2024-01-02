/* eslint-disable @typescript-eslint/no-use-before-define */

import { ApolloProvider } from '@apollo/client';
import * as React from 'react';

import { client } from '~/lib/apollo';
import SiteConfig from './SiteConfig';

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
};

export const GlobalNavigationContext = React.createContext(globalNavigationContext);

export function Providers({ children }: any) {
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
      <ApolloProvider client={client}>
        <GlobalNavigationContext.Provider value={state}>
          {children}
        </GlobalNavigationContext.Provider>
      </ApolloProvider>
    </>
  );
}
