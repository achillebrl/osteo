import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "magoni-osteopathe.re" }],
        destination: "https://www.magoni-osteopathe.re/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
