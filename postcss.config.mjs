/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    // cssnano runs between Tailwind's own Lightning CSS pass and Next's
    // CssMinimizerPlugin, so production CSS was being minified three times.
    // Only comment-stripping is kept here; the rest of the preset options were
    // no-ops anyway, because cssnano's `default` preset expects per-plugin
    // option OBJECTS and silently ignores bare booleans like
    // `normalizeWhitespace: true`.
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    }),
  },
};

export default config;
