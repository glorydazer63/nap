// @ts-check
import { defineConfig } from 'astro/config';
import linkCard from 'astro-link-card'; // or remarkLinkCard from 'remark-link-card-plus';

export default defineConfig({
site: 'https://glorydazer63.github.io/nap',
base: '/nap',
output: 'static',

 // Allow external images to be downloaded during build (GDPR compliant)
 image: {
    remotePatterns: [
      { protocol: 'https' }
    ]
 },
  integrations: [
    linkCard({
      // Options for astro-link-card
      serverCache: true,
      serverCachePath: './public',
      buildCache: true,
    })
  ],
  markdown: {
    remarkPlugins: [
      // If using remark-link-card-plus instead
      [
        'remark-link-card-plus',
        {
          cache: true,
          shortenUrl: true,
          thumbnailPosition: "right"
        }
      ]
    ]
  }
});   
