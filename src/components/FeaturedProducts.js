import React from 'react'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
//import { Link } from 'gatsby'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const {
    products_loading,
    products_error,
    featured_items,
  } = useProductsContext()

  if (products_loading || products_error) {
    return <Loading />
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline" />
        <div className="section-center featured">
          {featured_items.map(({ node }) => {
            return <Product key={node.id} {...node} />
          })}
        </div>
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
