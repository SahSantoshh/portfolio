// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://sahsantoshh.com",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === "https://sahsantoshh.com/") {
          return { ...item, priority: 1.0, changefreq: "weekly" };
        }
        if (item.url.includes("/blog/") && !item.url.endsWith("/blog/")) {
          return { ...item, priority: 0.8, changefreq: "monthly" };
        }
        if (item.url.endsWith("/blog/")) {
          return { ...item, priority: 0.85, changefreq: "weekly" };
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});