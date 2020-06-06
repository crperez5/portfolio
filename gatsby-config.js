const path = require(`path`)
const { spaceId, accessToken } = require("./src/environment")

module.exports = {
  siteMetadata: {
    title: `Cristian Perez Matturro - Senior Full Stack Software Engineer`,
    description: `Portfolio website`,
    author: `crperez.informatica@gmail.com`,
    supportedLanguages: ["en", "es"],
    defaultLanguage: "en",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId,
        accessToken,
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
