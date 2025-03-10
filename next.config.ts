import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        hostname: "api.dicebear.com",
      },
    ],
  },
};

export default nextConfig;
