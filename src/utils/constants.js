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
];


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
    text:
      'Be gentle. Follow with a moisturzer. Be consistent!',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
