import React from 'react'
import styled from 'styled-components'
import { useCartContext } from "../context/cart_context"
import {Link} from "gatsby"
import {
  CartContent,
  SEO,
  Layout,
  PageHero
} from '../components'

const CartPage = () => {
  const {cart} = useCartContext()
  const msgH2 = (cart.length < 1 ? 'Your cart is empty': 'Your cart')
  return (
    <Layout>
      <SEO title="Cart" />
      <PageHero title="cart" />
        <Wrapper className={`${cart.length < 1 ? 'page-100': 'page'}`}>
          <div className="empty">
            <h2>{msgH2}</h2>
            <Link to='/shop' className={`${cart.length < 1 ? 'empty-cart': 'full-cart'}  btn`}>Start Shopping</Link>
          </div>

          {
            (!(cart.length < 1) &&  
              <CartContent/>
            )
          }

        </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      text-transform: none;
    }
  }
  .empty-cart{display: inline-block; margin-top: 1rem; padding: 0.575rem .75rem;}
  .full-cart{ display: none;}
`

export default CartPage
