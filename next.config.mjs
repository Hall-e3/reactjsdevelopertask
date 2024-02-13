/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: "",
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      "/": { page: "/" }
      // Add other pages as needed
    };
  }
};

export default nextConfig;
