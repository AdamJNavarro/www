import './global.css';
import { Metadata, Viewport } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import SiteLayout from '~/components/Layouts/SiteLayout';

const baseUrl = new URL('https://adamjnavarro.com');

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: process.env.NODE_ENV === 'development' ? 'Localhost' : 'Adam Navarro',
    template:
      process.env.NODE_ENV === 'development' ? '%s | Dev' : '%s | Adam Navarro',
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export default function App({ children }: { children: any }) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 dark:bg-slate-950">
        <SiteLayout>{children}</SiteLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
