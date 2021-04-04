import React, {useEffect, useState} from 'react'
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
  const [cartIsEmpty, setCartIsEmpty] = useState(true)
  const [msgH2, setMsgH2] = useState('Your cart is empty')

  useEffect(()=>{
    if(cart.length > 0 ){
      setCartIsEmpty(false)
      setMsgH2('Your Cart')
    }else{
      setCartIsEmpty(true)
      setMsgH2('Your cart is empty')
    }
  },[cart])

  return (
    <Layout>
      <SEO title="Cart" />
      <PageHero title="cart" />
        <Wrapper className={`${cartIsEmpty?'page-100':'page'}`}>
          <div className="cart">
            <h2>{msgH2}</h2>
            {cartIsEmpty && (
              <Link to='/shop' className={`${cartIsEmpty?'empty-cart':'full-cart'} btn`}>Start Shopping</Link>
            )}
          </div>
          {((!cartIsEmpty)&&<CartContent/>)}
        </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  .cart {
    text-align: center;
    h2 {
      margin-top: 1rem;
      margin-bottom: 1.5rem;
      text-transform: none;
    }
  }
  .empty-cart{
    line-height: normal;
    margin-top: 1rem;
    padding: .65rem 1rem .55rem;
  }
  .full-cart{ display: none;}
`
export default CartPage
