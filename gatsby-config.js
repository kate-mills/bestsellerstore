require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`, })

const siteUrl = `https://skincarewebstore.com` // change to .com url
const netlifyUrl = `https://bestsellerstore.netlify.app`
const companyName = `Skincare Webstore`
const description = `${companyName} - Shop the latest beauty products and skincare from Michele Corley Clinical Skincare. Consult with Master Estheticians about products for acne, anti-aging and sensitive skin concerns.`

module.exports = {
  siteMetadata: {
    author: `kate-mills`,
    altUrl: `${netlifyUrl}`,
    dateModified: `${new Date().toISOString()}`,
    image: `/images/default-img.png`, // ./static/images/default-image.png
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
        name:  `${companyName}`,
        short_name: `Bestsellers`,
        start_url: `/`,
        description: `${description}`,
        background_color: `#ffb1b1`,
        theme_color: `#ffb1b1`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`,  // use-credentials or anonymous
        icon_options: { purpose: `any maskable`, },
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-sitemap`,


    //{ resolve: "gatsby-plugin-robots-txt", options: { host: `${siteUrl}`, sitemap: `${siteUrl}/sitemap.xml`, policy: [{ userAgent: "*", allow: "/" }], }, },

    
    // `gatsby-plugin-offline`,

    //`gatsby-plugin-netlify`, //keep last

  ],
  flags: {
    FAST_DEV: true,
    DEV_SSR: false,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    FAST_REFRESH: true,
  },
}
