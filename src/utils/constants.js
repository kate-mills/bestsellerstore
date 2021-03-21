import React from 'react'
import { GiPrayerBeads, GiEarrings, GiPowerRing } from 'react-icons/gi'

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
    icon: <GiPrayerBeads />,
    title: 'SHINE',
    text:
      'Make your own DIY Cleaner!  I am just making this up, Hil. And maybe a little recipe.',
  },
  {
    id: 2,
    icon: <GiPowerRing />,
    title: 'STORE',
    text:
      'My favorite way to store earrings is ...blah. Or, wrap in a microfiber cloth. Again, just making this up.',
  },
  {
    id: 3,
    icon: <GiEarrings />,
    title: 'GIFTS',
    text:
      'Sizing can be difficult, but we sell gift certificates!! And, everyone loves one of those! Something else here... Not this.',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
