// @ts-check
import { defineConfig } from 'astro/config';
import wix from "@wix/astro";
import wixPages from "@wix/astro-pages";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [wix(), wixPages(), react()],

  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ["static.wixstatic.com"],
  },

  output: "server",
});