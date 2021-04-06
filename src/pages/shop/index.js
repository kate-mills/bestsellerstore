import React from 'react'
import styled from 'styled-components'
import {
  MySeo,
  Layout,
  PageHero,
  Filters,
  ProductList,
  Sort,
} from '../../components'

const ShopPage = () => {
  return (
    <Layout>
      <MySeo
        title="Shop Products"
        description="Shop all skincare products by Michele Corley Clinical Skincare."
      />
      <main>
        <PageHero title="Shop" showCount={true}/>
        <Wrapper className="page">
          <div className="section-center items">
            <Filters/>
            <div>
              <Sort/>
              <ProductList/>
            </div>
          </div>
        </Wrapper>
      </main>
    </Layout>
  )
}

const Wrapper = styled.div`
  .items {
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    .items {
      display: grid;
      gap: 3rem 1.5rem;
      grid-template-columns: 200px 1fr;
      margin: 4rem auto;
    }
  }
`

export default ShopPage
