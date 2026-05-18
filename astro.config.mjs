import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://materialcalc.com',
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
