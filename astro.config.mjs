// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// import cookieconsent  from '@jop-software/astro-cookieconsent';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://jirayu.in.th',
    integrations: [
      mdx(),
      sitemap(),
      partytown({
        config: {
          forward: ["dataLayer.push"],
        },
      })
    ],
    vite: {
    plugins: [tailwindcss()],
  },
});
