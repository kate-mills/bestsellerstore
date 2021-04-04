import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import QuantityButtons from './QuantityButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import { GatsbyImage } from "gatsby-plugin-image";

const CartItem = ({id, image, name, size, price, quantity}) => {
  const {removeItem, toggleQuantity} = useCartContext()
  const increase = () => {
    toggleQuantity(id, 'inc')
  }
  const decrease = () => {
    toggleQuantity(id, 'dec')
  }

  const [nm, sz] = name.split(' - ')

  return (
    <Wrapper>
      <div className='title'>
        <GatsbyImage image={image} alt={name} />
        <div>
          <h5 className="name">{nm}</h5>
          <p className="color">{sz} {size}</p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5> 
      <QuantityButtons quantity={quantity} increase={increase} decrease={decrease}/>
      <h5 className='subtotal'>{formatPrice(price * quantity)}</h5>
      <button type="button" className="remove-btn" onClick={()=>removeItem(id)}>
        <FaTrash/>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .sz{
    background: var(--clr-primary-5-lt);
    display: inline-block;
    font-family: var(--font-title);
    font-weight: var(--font-weight-title);
    padding: 0.1rem;
    padding-left:0.23rem; 
    padding-right:0.23rem; 
    margin: unset !important;
    text-transform: capitalize;
    width: fit-content;
  }
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
  }
  img{
    object-fit: contain !important;
  }
  h5 {
    font-size: 1rem;
    line-height: 1rem; 
    margin-bottom: 0;
  }
  .name{
    font-size: 0.75rem;
  }
  .color {
    align-items: center;
    background: var(--clr-grey-9);
    color: var(--clr-black);
    display: flex;
    font-family: var(--font-title);
    font-size: 0.75rem;
    font-weight: var(--font-weight-title);
    justify-content: flex-start;
    letter-spacing: unset;
    line-height: 1.35rem;
    margin: 0;
    padding: 0;
    padding-top: 2px;
    text-transform: capitalize;
    width: fit-content;
  }
  .price-small {
    line-height: 1.3rem;
    color: var(--clr-purple-txt);
  }
  .quantity-btns,
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-primary-1);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      color: var(--clr-blue-txt);
      display: block;
      font-size: 1rem;
      margin-bottom: 0;
    }
    .price-small {
      display: none;
    }
    .price {
      color: var(--clr-blue-txt);
      display: block;
      font-size: 1rem;
    }
    .name {
      line-height: 1.2rem;
      font-size: 1rem;
    }
    .color {
      font-size: 0.85rem;
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`

export default CartItem
