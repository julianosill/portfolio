/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'julianosill.vercel.app' },
      { protocol: 'https', hostname: 'us-west-2.graphassets.com' },
    ],
  },
}

export default nextConfig
