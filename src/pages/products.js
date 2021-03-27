/* DONT USE THIS PAGE USE SHOP NOW */
import React from 'react'
import styled from 'styled-components'
import {
  SEO,
  Layout,
} from '../components'
/* DONT USE THIS PAGE USE SHOP NOW */

/*import {
  Filters,
  ProductList,
  Sort,
  PageHero,
} from '../components'*/
/* DONT USE THIS PAGE USE SHOP NOW */

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
