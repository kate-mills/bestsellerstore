require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`, })

const siteUrl = `https://bestsellerstore.netlify.app` // change to .com url
const netlifyUrl = `https://bestsellerstore.netlify.app`
const companyName = `Skincare Webstore, Best Sellers`
const description = `${companyName} - Master Medical Estheticians bring you their latest top beauty products and skincare. We specialize in Acne, Anti-Aging and Sensitive skin.`

module.exports = {
  siteMetadata: {
    author: `kate-mills`,
    altUrl: `${netlifyUrl}`,
    dateModified: `${new Date().toISOString()}`,
    image: `/images/default-image.jpg`, // ./static/images/default-image.jpg
    siteUrl: `${siteUrl}`,
    title: `${companyName}`,
    twitterUsername: `@gatsbyjs`,

    organization: {
      address: {
        name: `${companyName}`,
        street: `24 Main St.`,
        city: `Napa`,
        state: `CA`,
        zip: `94558`,
        country: `USA`,
      },
      description: `${description}`,
      email: `mailto:skincarewebstorecs@gmail.com`,
      displayEmail: {
        prefix: `skincarewebstorecs`,
        suffix: `@gmail`,
        ext: `.com`,
      },
      geo: {
        lat: 38.30418834186992,
        long: -122.29412004433584,
      },
      logo: `${siteUrl}/images/logo.png`, // ./static/images/
      name: `${companyName}`,
      phone: `+1-707-266-8106`,
      displayPhone: `(707) 266-8106`,
      priceRange: `$$`,
      otherUrls: [],
      url: `${siteUrl}`,
    },
  },
  plugins: [
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
        name:  `${companyName}`,
        title:  `${companyName}`,
        short_name: `Bestsellers`,
        start_url: `/`,
        description: `${description}`,
        background_color: `#ffb1b1`,
        theme_color: `#ffb1b1`,
        lang: `en`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`,
        icon_options: {
          purpose: `any`,
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${siteUrl}`,
        sitemap: `${siteUrl}/sitemap.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    `gatsby-plugin-netlify`, //keep last
  ],
}
