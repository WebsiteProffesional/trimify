/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.ipgeolocation.io',
      'ipgeolocation.io',         // ✅ Add this
      'www.countryflags.io',
      'flagcdn.com',
    ],
  },
};

export default nextConfig;
