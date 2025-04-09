import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: 'https://circulomilitar-sts.com',
  base: '/',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  integrations: [
    tailwind(),
    icon({
      local: false,
      defaultIconSet: "tabler",
      iconSets: {
        tabler: {},
      },
    }),
  ],
});
