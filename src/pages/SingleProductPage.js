import React from 'react'
//import { useLocation } from '@reach/router'
//import { useProductsContext } from '../context/products_context'
//import { single_product_url as url } from '../utils/constants'
//import { formatPrice } from '../utils/helpers'
import {
  Layout,
  //Loading, Error, ProductImages, AddToCart, Stars, PageHero,
} from '../components'
import styled from 'styled-components'
//import { Link } from 'gatsby'

const SingleProductPage = () => {
  return (
    <Layout>
      <Wrapper>
        <h4>single product page</h4>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
