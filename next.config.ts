import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'out',
  async redirects() {
    return [
      {
        source: '/oferta/sklepy/woocommerce',
        destination: '/oferta/sklepy-internetowe/woocommerce',
        permanent: true,
      },
      {
        source: '/oferta/strony/creative',
        destination: '/oferta/strony-internetowe/creative',
        permanent: true,
      },
      {
        source: '/oferta/strony/premium',
        destination: '/oferta/strony-internetowe/premium',
        permanent: true,
      },
      {
        source: '/oferta/strony/singlepage',
        destination: '/oferta/strony-internetowe/singlepage',
        permanent: true,
      },
      {
        source: '/oferta/strony/standard',
        destination: '/oferta/strony-internetowe/standard',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
