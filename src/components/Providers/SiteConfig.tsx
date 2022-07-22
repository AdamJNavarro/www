import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://adamjnavarro.com' : '';

const defaultSEO = {
  title: 'Adam Navarro',
  description: 'Software builder, musician and fitness enthusiast.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Adam Navarro',
    images: [
      {
        url: `${baseUrl}/og/default.png`,
        alt: 'Adam Navarro',
      },
    ],
  },
  twitter: {
    handle: '@adamjnavarro',
    site: '@adamjnavarro',
    cardType: 'summary_large_image',
  },
};

export default function SiteConfig() {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/meta/manifest.webmanifest" />
      </Head>
    </>
  );
}
