require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Cyrus Kiprop',
    description: 'My personal portfolio made with love',
    author: 'Cyrus Kiprop',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-antd',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-scroll-reveal',
    'gatsby-plugin-smoothscroll',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.TRACKING_ID,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'fira code:300,400,500,600.700',
          'poppins:200, 300, 400, 500, 600, 700',
          'cambay:400,700',
          'arvo:400,700',
          'ubuntu mono:400,700',
        ],
        display: 'swap',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
