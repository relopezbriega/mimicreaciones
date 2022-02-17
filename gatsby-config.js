/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Mimi Creaciones",
    description: "Tejidos artesanales de Mimi Creaciones.",
    author: "Raul E. Lopez Briega",
    twitterUsername: "@relopezbriega",
    siteUrl:'https://mimicreaciones.com'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
