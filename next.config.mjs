module.exports = {
  // other configurations...
  target: "experimental-serverless-trace",
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    // Add any custom path mappings if needed
    return {
      "/": { page: "/" }
      // Add other paths as needed
    };
  }
};
