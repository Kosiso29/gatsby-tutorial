/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simply Recipes',
    description: 'Nice and clean recipes site',
    author: '@johndoe',
    person: { name: 'john', age: 32 },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: 'john', age: 32 },
      { name: 'susan', age: 21 },
    ]
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `styles`,
        path: `${__dirname}/src/assets/css`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `u6ps3g1owtp2`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
