require(`dotenv`).config({ path: `.env.${process.env.NODE_ENV}`, })

module.exports = {
  siteMetadata: {
    title: `Skincare Webstore,  Top Sellers`,
    description: `Master Medical Estheticians bring you their latest top beauty products and skincare. We specialize in Acne, Anti-Aging and Sensitive skin.`,
    author: `kate-mills`,
  },
  plugins: [
    //{ resolve: `gatsby-plugin-snipcart`, options: { apiKey: process.env.SNIPCART_TEST_API, autopop: true, }, },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
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
        name: `Skincare Webstore, Top Sellers`,
        short_name: `Skincare Webstore`,
        description: `Master Medical Estheticians bring you their latest top beauty products and skincare. We specialize in Acne, Anti-Aging and Sensitive skin.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ffe5d6`,
        display: `standalone`, //minimal-ui
        icon: `src/images/icon.png`,
        icon_options: { purpose: `any` },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
