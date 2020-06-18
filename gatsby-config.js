const path = require(`path`)

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://crperez.dev",
    title: `Senior Full Stack Software Engineer | Cristian Pérez Matturro`,
    description: `Backend and Frontend Developer | Implementing solutions since 2011 | On-site and remote work`,
    author: `crperez.informatica@gmail.com`,
    authorName: "Cristian Pérez Matturro",
    supportedLanguages: ["en", "es"],
    defaultLanguage: "en",
    relatedUrls: {
      linkedin: "https://www.linkedin.com/in/cristianperezmatturro/",
      github: "https://github.com/crperez5"
    }
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
        background_color: `#ec8b5e`,
        theme_color: `#ec8b5e`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_PORTFOLIO_SPACE_ID,
        accessToken: process.env.GATSBY_PORTFOLIO_ACCESS_TOKEN,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-netlify`,
  ],
}
