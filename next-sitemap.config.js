/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://pixvion.com',
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
     await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/services/website'),
    await config.transform(config, '/services/app'),
    await config.transform(config, '/services/graphics'),
    await config.transform(config, '/projects'), 
    await config.transform(config, '/technologies'),
   await config.transform(config, '/confirmation'),
  ],
};

export default config;