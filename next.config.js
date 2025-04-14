/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // D
  images: {
    unoptimized: true, // Required for static exports
    domains: [
      "open.cruip.com",
      "ucarecdn.com",
      "www.svgrepo.com",
      "images.unsplash.com",
      "res.cloudinary.com",
      "leoreusportfolio.netlify.app",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // Add this to handle WASM files
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
  output: "export",
};

module.exports = nextConfig;
