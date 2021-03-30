import React from "react"
import {links} from "../../utils/constants"
import { Helmet } from "react-helmet"

export const createProductSchema = (p, baseUrl)=>{
  const rating = p.rating || '4.9'
  const count = p.reviewCount || '12'
  const name = `Michele Corley ${p.name}`
  const yr = new Date().getFullYear()
  let productSchema = {
    "@context": "http://schema.org",
    "@type": "Product",
    "name": name,
    "description": p.description.description,
    "image": p.imgRetail.fixed.src,
    "itemCondition": 'New',
    "sku": p.id,
    "url": `${baseUrl}/shop/${p.slug}`,
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "reviewCount": count,
    },
    "brand":{
      "@type": "Brand",
      "name": "Michele Corley Clinical Skincare",
      "description": p.description.description,
      "url": `${baseUrl}/shop`,
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "name": name,
      "price": p.retailPrice/100,
      "priceCurrency": "USD",
      "priceValidUntil": `${yr}-12-31`,
      "image": p.imgRetail.fixed.src,
      "url": `${baseUrl}/shop/${p.slug}`,
    },
  }
  if (p.award){
    productSchema['award'] = `Dermascope Aestheticians Choice Award - ${p.award}`
  }
  return productSchema
};


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
    product,
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
      product && createProductSchema(product, baseUrl),
    ]

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)
