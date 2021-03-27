import React from 'react'
import styled from 'styled-components'
import {
  SEO,
  Layout,
  PageHero,
} from '../components'

/*import {
  Filters,
  ProductList,
  Sort,
} from '../components'*/

const ShopPage = () => {
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
            <div>
              Shop Page
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

export default ShopPage
