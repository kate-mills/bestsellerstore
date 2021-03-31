import React from 'react'
import styled from 'styled-components'
import {
  SEO,
  Layout,
  PageHero,
  SkinTypeFilter,
  ProductList,
  Sort,
} from '../../components'

const ShopPage = () => {
  return (
    <Layout>
      <SEO
        title="Shop Skin Types"
        description="Shop Michele Corley Clinical Skincare Products by skin type."
      />
      <main>
        <PageHero title="Shop By Skin Type" />
        <Wrapper className="page">
          <div className="section-center items">
            <SkinTypeFilter/>
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

