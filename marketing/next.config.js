/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'localhost',
        protocol: 'http',
      },
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    // Add alias to access shared components from main project
    webpackConfig.resolve.alias = {
      ...webpackConfig.resolve.alias,
      '@shared': '../src',
    }

    return webpackConfig
  },
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose',
  },
}

export default nextConfig
