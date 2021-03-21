import React from 'react'
import styled from 'styled-components'
import {
  SEO,
  Layout,
  Filters,
  ProductList,
  Sort,
  PageHero,
} from '../components'

const ProductsPage = () => {
  return (
    <Layout>
      <SEO
        title="Shop Jewelry"
        description="Shop all of our hand cut designs that Hilary Molloy makes with love and natural elements in the beautiful Napa Valley."
      />
      <main>
        <PageHero title="Shop" />
        <Wrapper className="page">
          <div className="section-center items">
            <Filters />
            <div>
              <Sort />
              <ProductList />
            </div>
          </div>
        </Wrapper>
      </main>
    </Layout>
  )
}

const Wrapper = styled.div`
  .items {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .items {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
