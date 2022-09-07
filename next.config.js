/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader:"akamai",
    path:"",
  },
  basePath:"/next-search",
  assetPrefix:"/next-search"
}

module.exports = nextConfig
