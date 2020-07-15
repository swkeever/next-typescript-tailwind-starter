const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', '**/*.html'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins:
    process.env.NODE_ENV === 'production'
      ? [
        'postcss-flexbugs-fixes',
        [
          'postcss-preset-env',
          {
            autoprefixer: {
              flexbox: 'no-2009',
            },
            stage: 3,
            features: {
              'custom-properties': false,
            },
          },
        ],
        'postcss-import',
        'tailwindcss',
        'autoprefixer',
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
      ]
      : [
        // No transformations in development
      ],
};
