import React from 'react'
import styled from 'styled-components'
//import { useCartContext } from "../context/cart_context"
//CartContent, 
import {Link} from "gatsby"
import {
  SEO,
  Layout,
  PageHero
} from '../components'

const CartPage = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <PageHero title="cart" />
          <main>
            <Wrapper className="page">
            </Wrapper>
          </main>
          <Wrapper className="page-100">
            <div className="empty">
              <h2>Your cart is empty</h2>
              <Link to='/shop' className='btn'>Go Shopping</Link>
            </div>
          </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`

export default CartPage
