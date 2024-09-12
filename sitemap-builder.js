// sitemap-builder.js

import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define your website's URLs here
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  // Add more pages here as needed
];

// Create a writable stream for the sitemap
const sitemapStream = new SitemapStream({ hostname: 'https://www.hivesync.in.net' });

// Write the sitemap to the public folder
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe the sitemap stream to the write stream
sitemapStream.pipe(writeStream);

// Append the URLs from the `links` array to the sitemap stream
links.forEach(link => {
  sitemapStream.write(link);
});

// End the sitemap stream
sitemapStream.end();

// Convert the stream to a promise (optional, for async operations)
streamToPromise(sitemapStream)
  .then(() => {
    console.log('Sitemap successfully generated!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });
