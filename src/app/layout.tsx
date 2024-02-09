import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Metadata } from 'next';
import Shell from '~/components/Layouts/Shell';

const baseUrl = new URL('https://adamjnavarro.com');

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: 'Adam Navarro',
    template: '%s | Adam Navarro',
  },
  description: 'Software builder, musician and fitness enthusiast.',
  openGraph: {
    title: 'Adam Navarro',
    description: 'Software builder, musician and fitness enthusiast.',
    url: baseUrl,
    siteName: 'Adam Navarro',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    shortcut: '/shortcut-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function App({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
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
          <Shell>{children}</Shell>
        </MantineProvider>
      </body>
    </html>
  );
}
