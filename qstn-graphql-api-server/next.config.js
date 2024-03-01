/**
 * @type {import('next').NextConfig}
 **/

// @ts-check
const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    STRIPE_API_KEY: process.env.STRIPE_API_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_PAYMENT_DESCRIPTION: process.env.STRIPE_PAYMENT_DESCRIPTION,
    STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Headers', value: 'Authorization, X-CSRF-Token, X-Requested-With, Origin, Accept, Range, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-access-token' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
        ]
      },
    ];
  },
}

module.exports = nextConfig