/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org', 'dwglogo.com', 'corosoftware.com']
  }
}

module.exports = nextConfig
