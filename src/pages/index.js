import React from 'react'
import { Layout, SEO, FeaturedProducts, Hero, Services, Contact} from '../components'

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Home"/>
        <main>
          <Hero/>
          <FeaturedProducts/>
          <Services/>
          <Contact/>
      </main>
    </Layout>
  )
}

export default HomePage
