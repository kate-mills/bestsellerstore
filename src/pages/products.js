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
        title="Shop Products"
        description="Shop all skincare products by Michele Corley Clinical Skincare."
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
/* DONT USE THIS PAGE USE SHOP NOW */

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
/* DONT USE THIS PAGE USE SHOP NOW */

export default ProductsPage
/* DONT USE THIS PAGE USE SHOP NOW */
