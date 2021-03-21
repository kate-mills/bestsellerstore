import React from 'react'
import { useProductsContext } from '../context/products_context'
import styled from 'styled-components'
import Product from './Product'

const FeaturedProducts = () => {
  const { featured_items: items } = useProductsContext()
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Featured Jewelry</h2>
        <div className="underline" />
      </div>
      <div className="section-center featured">
        {items.map(({ node }) => {
          return (
            <Product key={node.id} {...node} />
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedProducts
