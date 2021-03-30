import React from "react"
import {links, seoData} from "../../utils/constants"
import { Helmet } from "react-helmet"

export const createProductSchema = (p, baseUrl, mccLogo)=>{

  let productSchema = {
    "@context": "http://schema.org",
    "@type": "Product",
    "name": seoData.formatName(p.name),
    "image": p.imgRetail.fixed.src,
    "description": p.description.description,
    "sku": p.id,
    "brand":{
      "@type": "Brand",
       "name": "Michele Corley Clinical Skincare",
       "url": `${baseUrl}/shop/${p.slug}`,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": seoData.formatRating(p.rating),
      "reviewCount": seoData.formatCount(p.reviewCount),
    },
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/shop/${p.slug}`,
      "priceCurrency": "USD",
      "price": p.retailPrice/100,
      "priceValidUntil": seoData.formatEndOfYr(),
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
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
    mccLogo,
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
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        name: `navigation`,
        itemListElement: linkCrumbs,
      },
      product && createProductSchema(product, baseUrl, mccLogo),
    ]

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)
