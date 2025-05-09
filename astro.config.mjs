// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

// Import mdx-mermaid
import mdxMermaid from 'mdx-mermaid';
// Import React integration
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://kanlord.github.io',
  integrations: [
    mdx({
      extendPlugins: (plugins) => {
        // Push mdx-mermaid into the MDX plugins list
        plugins.remark.push(mdxMermaid);
        return plugins;
      },
    }),
    react(), // <-- Add React integration
    sitemap(),
    tailwind(),
    icon(),
  ],
  adapter: netlify(),
});
