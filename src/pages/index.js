import React from 'react'
import {
  Layout,
  MySeo,
  FeaturedProducts,
  Hero,
  ShopBy,
  Contact,
} from '../components'

const HomePage = () => {
  return (
    <Layout>
      <MySeo />
      <div>
        <Hero />
        <FeaturedProducts />
        <ShopBy />
        <Contact />
      </div>
    </Layout>
  )
}

export default HomePage
