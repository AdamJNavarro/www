import './global.css';
import { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { SpeedInsights } from '@vercel/speed-insights/next';
import NavBar from '~/components/NavBar';

const baseUrl = new URL('https://adamjnavarro.com');

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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

export default function MainLayout({ children }: { children: any }) {
  return (
    <html lang="en" className={`${GeistMono.variable} ${GeistSans.variable}`}>
      <body className="antialiased bg-slate-50 dark:bg-slate-950 tablet:max-w-[850px] desktop:max-w-[1200px] mb-40 flex flex-col tablet:flex-row mx-4 tablet:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col px-0 tablet:px-8">
          <NavBar />
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
