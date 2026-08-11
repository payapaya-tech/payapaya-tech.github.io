import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // dev サーバーに LAN の IP 直打ちでアクセスすると /_next/ がブロックされ JS が動かないため許可
  allowedDevOrigins: ["192.168.1.164"],
};

export default nextConfig;
