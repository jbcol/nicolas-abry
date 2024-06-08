import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  build:{
    inlineStylesheets: `always`,
    //format: 'file'
  },
  base: '/',
  site: 'https://www.nicolasabry.ch/',
});