module.exports = {
  swcMinify: true,
  reactStrictMode: false,
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
