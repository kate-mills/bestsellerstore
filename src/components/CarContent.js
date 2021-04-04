import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import {Link} from 'gatsby'
import CartColumns from './CartColumns'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const {cart, clearCart} = useCartContext()

  return (
    <Wrapper className="section section-center">
      <CartColumns/>
      {cart.map((item)=><CartItem key={item.id} {...item}/>)}
      <hr/>
      <div className="link-container">
        <button onClick={clearCart} className="link-btn clear-btn" type="button" > clear shopping cart </button>
        <Link to="/shop" className='link-btn'> continue shopping </Link>
      </div>
      <CartTotals/>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
  }
  .link-btn {
    background: var(--clr-primary-5);
    border: 2px solid transparent;
    border-radius: var(--radius);
    box-sizing: border-box;
    color: var(--clr-white);
    cursor: pointer;
    font-family: var(--font-title);
    font-size: 0.8rem;
    font-weight: var(--font-weight-title);
    letter-spacing: var(--spacing);
    line-height: normal;
    padding: 0.15rem 0.5rem;
    text-align: center;
    text-transform: capitalize;
  }
  .link-btn:hover{
    border-color: darkgrey;
  }
  .clear-btn {
    background: var(--clr-black);
    border-color: var(--clr-black);
    color: var(--clr-white);
  }
  .clear-btn:hover{
    border-color: darksalmon;
  }
`
export default CartContent
