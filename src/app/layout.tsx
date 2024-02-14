import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Shell from '~/components/Layouts/Shell';
import { theme } from './config/theme';

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

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: theme.other.colors.root,
};

export default function App({ children }: { children: any }) {
  return (
    <html lang="en" style={{ backgroundColor: theme.other.colors.root }}>
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body style={{ backgroundColor: 'transparent' }}>
        <MantineProvider forceColorScheme="dark" theme={theme}>
          <Shell>{children}</Shell>
        </MantineProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
