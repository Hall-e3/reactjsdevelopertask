// next.config.mjs
const nextConfig = {
  // Your Next.js configuration options go here
  // For example:
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" }
      // Add other pages as needed
    };
  }
};

export default nextConfig;
