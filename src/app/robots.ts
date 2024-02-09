import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: 'https://adamjnavarro.com/sitemap.xml',
    host: 'https://adamjnavarro.com',
  };
}
