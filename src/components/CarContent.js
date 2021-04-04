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
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5d);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-primary-1);
  }
`
export default CartContent
