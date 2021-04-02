import React from 'react'
import styled from 'styled-components'
import {
  SEO,
  Layout,
  PageHero,
  CategoryFilter,
  ProductList,
  Sort,
} from '../../components'

const CategoryPage = () => {
  return (
    <Layout>
      <SEO
        title="Shop Category"
        description="Shop Michele Corley Clinical Skincare Products by product category."
      />
      <main>
        <PageHero title="Shop By Product Category" />
        <Wrapper className="page">
          <div className="section-center items">
            <CategoryFilter/>
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
export default CategoryPage
