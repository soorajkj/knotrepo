/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "loremflickr.com" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/signin",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/dashboard/analytics",
        permanent: true,
      },
      {
        source: "/dashboard/settings",
        destination: "/dashboard/settings/account",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
