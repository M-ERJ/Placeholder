/** @type {import('next').NextConfig} */
const nextConfig = {};

// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Modify the Webpack config
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fpaeregzmenbrqdcpbra.supabase.co",
        pathname: "/storage/v1/object/public/images/**",
      },
      {
        protocol: "https",
        hostname: "fpaeregzmenbrqdcpbra.supabase.co",
        pathname: "/storage/v1/object/public/songs/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
};
