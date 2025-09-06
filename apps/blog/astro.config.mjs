// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// Reading time
import remarkReadingTime from "@moonlight8978/multiterm-astro/plugins/remark-reading-time.js";
// Emoji
import remarkGemoji from "@moonlight8978/multiterm-astro/plugins/remark-gemoji.js";
// Code block
import expressiveCode from "astro-expressive-code";
// Latex
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import siteConfig from "./src/site.config.js";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    sitemap(),
    expressiveCode({
      themes: siteConfig.themes.include,
      useDarkModeMediaQuery: false,
      defaultProps: {
        showLineNumbers: false,
        wrap: false,
      },
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkMath, remarkGemoji],
    rehypePlugins: [rehypeKatex],
  },
});
