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
      <main>
        <Hero />
        <FeaturedProducts />
        <ShopBy />
        <Contact />
      </main>
    </Layout>
  )
}

export default HomePage
