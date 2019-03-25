const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Venelin Nikolov • Frond-end Developer • UX/UI • PageSpeed`,
    description: `Frond-end Developer, Performance specialist, SEO optimization, UX/UI`,
    author: `@venelin`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        data: '@import "src/styles/global.scss";',
        includePaths: [
          'src/styles',
        ],
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-smartypants'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-108433153-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Venelin.ca`,
        short_name: `Venelin`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff0100`,
        description: `Front-end developer | UI/UX`,
        display: `minimal-ui`,
        lang: `en-US`,
        icon: `src/images/vca-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
