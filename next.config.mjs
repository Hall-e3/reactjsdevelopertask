/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: false // Assuming you don't need the experimental images feature
  },
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" }
    };
  }
};

module.exports = nextConfig;
