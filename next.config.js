// @ts-check

// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const pc =require('picocolors');
const { i18n } = require('./next-i18next.config');
const packageJson = require('./package.json');


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  i18n,
  optimizeFonts: true,

  httpAgentOptions: {
    // @link https://nextjs.org/blog/next-11-1#builds--data-fetching
    keepAlive: true,
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
  },
  // @link https://nextjs.org/docs/advanced-features/compiler#minification
  swcMinify: true,
  compiler: {
    // emotion: true, - by default since 12.2.0
  },
  // Standalone build
  // @link https://nextjs.org/docs/advanced-features/output-file-tracing#automatically-copying-traced-files-experimental
  output: 'standalone',

  // @link https://nextjs.org/docs/basic-features/image-optimization
  images: {
    domains: ['ap-southeast-1.amazonaws.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image',
    loader: 'default',
    disableStaticImages: false,
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    legacyBrowsers: false,

    // React 18 server components
    // @link https://nextjs.org/docs/advanced-features/react-18/server-components
    // serverComponents: false,
    // @link https://nextjs.org/docs/advanced-features/output-file-tracing#caveats
    // outputFileTracingRoot: path.join(__dirname, '../../'), // ,path.join(__dirname, '../../'),
    // Prefer loading of ES Modules over CommonJS
    // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
    // @link {https://github.com/vercel/next.js/discussions/27876|Discussion}
    esmExternals: true,
    // Experimental monorepo support
    // @link {https://github.com/vercel/next.js/pull/22867|Original PR}
    // @link {https://github.com/vercel/next.js/discussions/26420|Discussion}
    // externalDir: true,
  },
  typescript: {
    /** Do not run TypeScript during production builds (`next build`). */
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.json',
  },

  eslint: {
    ignoreDuringBuilds: false,
    dirs: ['src'],
  },

  webpack: (config, {webpack, isServer}) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      // @link https://github.com/vercel/next.js/issues/36514#issuecomment-1112074589
      config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    }

      config.module.rules.push({
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use: [
          {
            loader: '@svgr/webpack',
            // https://react-svgr.com/docs/webpack/#passing-options
            options: {
              svgo: true,
              // @link https://github.com/svg/svgo#configuration
              svgoConfig: {
                multipass: false,
                datauri: 'base64',
                js2svg: {
                  indent: 2,
                  pretty: false,
                },
              },
            },
          },
        ],
      });

      return config;
  },

  env: {
    APP_NAME: packageJson.name,
    APP_VERSION: packageJson.version,
    BUILD_TIME: new Date().toISOString(),
  },
  serverRuntimeConfig: {
    // to bypass https://github.com/zeit/next.js/issues/8251
    PROJECT_ROOT: __dirname,
  },
};

module.exports = nextConfig
