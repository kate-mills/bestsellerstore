import React from 'react'
import styled from 'styled-components'
import {
  SEO,
  Layout,
} from '../components'

/*import {
  Filters,
  ProductList,
  Sort,
  PageHero,
} from '../components'*/

const ProductsPage = () => {
  return (
    <Layout>
      <SEO
        title="Shop Products"
        description="Shop all skincare products by Michele Corley Clinical Skincare."
      />
      <main>
        <Wrapper className="page">
          <div className="section-center items">
            <div>
              Products Page
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
