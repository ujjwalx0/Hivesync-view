import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  base: '/',  // Ensure the base URL is set correctly for your deployment
  plugins: [
    react(),
    sitemap({
      hostname: 'https://hivesync.in.net', // Your production hostname
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
  build: {
    outDir: 'dist', // Output directory for the production build
    rollupOptions: {
      input: {
        main: './index.html', // Entry point for your application
      }
    }
  },
  server: {
    port: 3000, // Local development server port
  },
});
