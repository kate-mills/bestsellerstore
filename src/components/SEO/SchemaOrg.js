import React from "react"
import {links} from "../../utils/constants"
import { Helmet } from "react-helmet"

export default React.memo(
  ({
    currentUrl,
    pageTitle,
    image,
    description,
    siteUrl,
    baseUrl,
    author,
    organization,
    dateModified,
  }) => {
    const linkCrumbs = links.map((link) => {
      return {
        type: "ListItem",
        name: `${link.text} | ${organization.name}`,
        position: link.id,
        item: `${baseUrl}${link.url}`,
      }
    })

    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "@id": organization.url,
        description: organization.description,
        email: organization.email,
        image: image,
        logo: organization.logo,
        name: pageTitle,
        priceRange: organization.priceRange,
        sameAs: organization.otherUrls,
        telephone: organization.phone,
        url: currentUrl,
        address: {
          "@type": "PostalAddress",
          addressCountry: organization.address.country,
          addressLocality: organization.address.city,
          addressRegion: organization.address.state,
          name: organization.name,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: organization.geo.lat,
          longitude: organization.geo.long,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        name: `navigation`,
        itemListElement: linkCrumbs,
      },
    ]

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)
