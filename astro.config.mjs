import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages URL
  site: 'https://amirdaraee.github.io',
  base: '/astro-pulsar',

  // Output directory for GitHub Pages
  outDir: './docs',

  integrations: [sitemap(), tailwind()],

  build: {
    assets: 'assets'
  },

  markdown: {
    syntaxHighlight: 'prism',
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
