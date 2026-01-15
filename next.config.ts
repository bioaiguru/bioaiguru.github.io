import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const isGhPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: isGhPages ? "export" : undefined,
  basePath: isGhPages ? "/bioaiguru" : "",
  assetPrefix: isGhPages ? "/bioaiguru/" : "",
  images: {
    unoptimized: isGhPages,
  },
  trailingSlash: true,
};

export default nextConfig;
