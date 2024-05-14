/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // redireciona todas as solicitações começando com '/api'
        destination: 'http://localhost:8080/:path*', // para 'http://localhost:8080'
      },
    ];
  },
};

export default nextConfig;