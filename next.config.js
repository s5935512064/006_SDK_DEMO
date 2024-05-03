
// @ts-check

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'sindhornbuilding.com',
                pathname: '**',
            },
        ],

        minimumCacheTTL: 600,
        unoptimized: true,
    },
    swcMinify: true,
    transpilePackages: ['@fancyapps/ui', 'vanilla-cookieconsent'],
    webpack: (config, { isServer }) => {
        if (isServer) {
            // @ts-ignore
            require("./scripts/sitemap-generator");
        }
        return config;
    },

}

module.exports = withBundleAnalyzer(nextConfig)
