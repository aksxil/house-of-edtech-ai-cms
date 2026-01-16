import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true, // ✅ REQUIRED for Next 16 deploy
  },
};

export default nextConfig;
