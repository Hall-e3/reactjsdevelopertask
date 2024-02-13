/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" }
      // Add other pages as needed
    };
  }
};

export default nextConfig;
