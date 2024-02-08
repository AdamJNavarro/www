'use client';

import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Providers } from '~/components/Providers';
import Shell from '~/components/Layouts/Shell';

export default function App({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider
          forceColorScheme="dark"
          theme={{ primaryColor: 'violet', primaryShade: 8 }}
        >
          <Providers>
            <Shell>{children}</Shell>
          </Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
