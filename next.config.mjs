/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "tapi.inet.ir" }],
  },
};

export default nextConfig;
