/** @type {import('next').NextConfig} */
module.exports = {
  // Other Next.js configurations...

  // Add the following export configuration
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
};
