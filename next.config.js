/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: ["images.ctfassets.net"],
  },
};

// module.exports = nextConfig;
