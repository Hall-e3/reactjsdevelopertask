const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/reactjsdevelopertask" : "",
  output: "export",
  distDir: "dist", 
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;
