// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://pixvion.com', // your domain
  generateRobotsTxt: true,        // generates robots.txt automatically
  sitemapSize: 5000,              // max URLs per sitemap file
  changefreq: 'monthly',          // optional
  priority: 0.7,                  // optional
};

export default config;