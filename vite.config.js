import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  base: 'www.hivesync.in.net', 
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.hivesync.in.net', 
     
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
});
