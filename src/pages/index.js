import React from 'react'
import { Layout, SEO, FeaturedProducts, Hero, ShopBy,Contact} from '../components'

const HomePage = () => {
  return (
    <Layout>
      <SEO />
        <main>
          <Hero/>
          <FeaturedProducts/>
          <ShopBy/>
          <Contact/>
      </main>
    </Layout>
  )
}

export default HomePage
