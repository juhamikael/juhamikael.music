import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://music.juhamikael.info",
  markdown: {
    drafts: true,
    remarkPlugins: [],
    rehypePlugins: [],
  },

  integrations: [sitemap(), tailwind(), react()],
});
