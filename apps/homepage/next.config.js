// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withOptimizedImages = require('next-optimized-images');

module.exports = withNx(
  withOptimizedImages({
    images: {
      handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
    },
  })
);
