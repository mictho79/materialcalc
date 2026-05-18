import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://materialcal.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'hover'
  }
});
