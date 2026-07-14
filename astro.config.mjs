// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Static Site Generator — fully prerendered output.
  site: "https://KhaledMohamed08.github.io",
  base: "/landing-test",
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});