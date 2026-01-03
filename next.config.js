/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    // Linting is run separately; builds should remain possible even if ESLint
    // is unavailable in constrained environments.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
