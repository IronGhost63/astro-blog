// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
// import cookieconsent  from '@jop-software/astro-cookieconsent';
import partytown from '@astrojs/partytown';
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
    site: 'https://jirayu.in.th',
    integrations: [
      mdx(),
      sitemap(),
      swup({
        theme: 'fade',
        animationClass: 'transition-',
        containers: ['main'],
        cache: true,
        preload: true,
        accessibility: true,
        ignore: null,
        forms: false,
        morph: false,
        parallel: false,
        progress: false,
        routes: false,
        smoothScrolling: true,
        updateBodyClass: false,
        updateHead: true,
        reloadScripts: true,
        debug: false,
        loadOnIdle: true,
        globalInstance: false,
      }),
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
