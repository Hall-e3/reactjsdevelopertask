const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/reactjsdevelopertask" : "",
  output: "export",
  distDir: "dist", // Update this line
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
