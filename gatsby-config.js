module.exports = {
  siteMetadata: {
    title: `I a m d o a n h u y`,
    description: `Yeu Du Thu, Thich Design`,
    author: `tientranmac96`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          assets: `src/assets`,
          '@constants': `src/constants`,
          components: `src/components`,
          helpers: `src/helpers`,
          hooks: `src/hooks`,
          images: `src/images`,
          scss: `src/scss`,
          state: `src/state`,
          services: `src/services`,
          utils: `src/utils`,
        }
      }
    },
    'gatsby-plugin-remove-trailing-slashes',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
