import React from 'react'
import { GiSparkles } from 'react-icons/gi'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'shop',
    url: '/shop',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiSparkles />,
    title: 'SPF',
    text:
      'For UVA protection, use an SPF that contains Zinc Oxide or Titanium Dioxide.',
  },
  {
    id: 2,
    icon: <GiSparkles />,
    title: 'Thinnest to Thickest',
    text:
      'Apply your products thinnest to thickest for maximum absorption. Toners & serums go before moisturizer & SPF.',
  },
  {
    id: 3,
    icon: <GiSparkles />,
    title: 'Exfoliation',
    text: 'Be gentle. Follow with a moisturzer. Be consistent!',
  },
]

export const shopTypes = [
  {
    id: 1,
    icon: <GiSparkles />,
    title: 'Skin Type',
    url: '/shop/skin-type',
    text: 'to shop Michele Corley Clinical Skincare by skin type.',
  },
  {
    id: 2,
    icon: <GiSparkles />,
    url: '/shop/category',
    title: 'Category',
    text: 'to shop Michele Corley Clinical Skincare by product category.',
  },
  {
    id: 3,
    icon: <GiSparkles />,
    title: 'Advanced Filter',
    url: '/shop',
    text: 'to shop by skin condition, product type, price, & sales.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`

export const seoData = {
  formatRating: rating => rating || '4.9',
  formatCount: reviewCount => reviewCount || '11',
  formatName: productNm => `Michele Corley ${productNm}`,
  formatEndOfYr: () => `${new Date().getFullYear()}-12-31`,
  mccReview: [
    // List because - Multiline support is limited to browsers supporting ES5 only  no-multi-str
    'I have been using the incredible product line from Michele Corley Clinical Skin Care for about two years now.',
    'I researched several different product lines for months before deciding on this line.',
    ' Being able to have personal attention from Michele Corley herself is rare to find and so important to me, however, the products ingredients and effectiveness are most important.',
    'I have a range of clients that I have been serving for over 11 years and they have all been very pleased with the results from their treatments that they receive from me, as well as the very thorough home care regimen that they purchase.',
    'I love the printed resources that accompany the products as well as being able to order one product or a year’s worth any time I need them and have them be delivered usually the next day.',
    'Thank you Michele!',
  ],
  mccReviewAuthor:
    '~ Rebecca Siemens, LE, Proprietor, Rebecca Siemens Skin Care',
}
