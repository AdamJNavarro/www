/* eslint-disable @typescript-eslint/no-use-before-define */

import { ApolloProvider } from '@apollo/client';
import * as React from 'react';

import { client } from '~/lib/apollo';
import SiteConfig from './SiteConfig';

export function Providers({ children }: any) {
  return (
    <>
      <SiteConfig />
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
}
