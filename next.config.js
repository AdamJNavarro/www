module.exports = {
  experimental: {
    appDir: false,
  },
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'image.tmdb.org',
      'assets.literal.club',
      'i.scdn.co',
      'res.cloudinary.com',
    ],
  },
};
