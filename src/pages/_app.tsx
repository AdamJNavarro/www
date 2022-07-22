import { GetServerSidePropsContext } from 'next';
import { AppProps } from 'next/app';
import { getCookie } from 'cookies-next';
import { ColorScheme } from '@mantine/core';

import { Providers } from '~/components/Providers';
import SiteLayout from '~/components/Layouts/SiteLayout';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <>
      <Providers props={props}>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </Providers>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // @ts-ignore
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'dark',
});
