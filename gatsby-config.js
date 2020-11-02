const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `Westchase Associates, LP`,
    siteUrl: `https://www.barnett.tech`,
    description: `IT Consulting`,
    author: `Hayden Barnett`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `westchase`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.blue["400"],
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: '@directus/gatsby-source-directus',
      options: {
        url: 'https://haydenbarnett.dev',
        project: 'westchase-it',
        auth: {
          email: 'haydenbarnett93@gmail.com',
          password: 'Tigers07-',
        },
        targetStatuses: ['published', 'draft', '__NONE__'],
        allowCollections: [`blog`, `directus_files`],
        downloadFiles: false,
      }
    },
    {
    resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}/src/fonts/`
      }
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about`, `/services`, `/resources`, `/contact`]
      }
    }
  ],
};
