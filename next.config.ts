import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Improve font loading and handle network issues
  optimizeFonts: true,
  experimental: {
    optimizePackageImports: ["@next/font"],
  },
  // Handle font loading errors more gracefully
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
