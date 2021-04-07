import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import QuantityButtons from './QuantityButtons'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const CartItem = ({ id, image, name, size, price, quantity }) => {
  const { removeItem, toggleQuantity } = useCartContext()
  const increase = () => {
    toggleQuantity(id, 'inc')
  }
  const decrease = () => {
    toggleQuantity(id, 'dec')
  }

  const [nm, sz] = name.split(' - ')

  return (
    <Wrapper>
      <div className="title">
        <GatsbyImage image={getImage(image)} alt={name} />
        <div>
          <h5 className="name">{nm}</h5>
          <p className="product-size">
            <span className="retail-travel">{sz}</span><span className="oz">{size}</span>
          </p>
          <h5 className="price-small">{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className="price">{formatPrice(price)}</h5>
      <QuantityButtons
        quantity={quantity}
        increase={increase}
        decrease={decrease}
        className="quantity-btns"
      />
      <h5 className="subtotal">{formatPrice(price * quantity)}</h5>
      <button
        type="button"
        className="remove-btn"
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  & {
    align-items: center;
    display: grid;
    gap: 3rem 1rem;
    grid-template-columns: 200px auto auto;
    grid-template-rows: 75px;
    justify-items: center;
    margin-bottom: 3rem;
  }
  .price,
  .subtotal {
    color: var(--clr-black);
    display: none;
    font-size: 1rem;
  }
  .gatsby-image-wrapper {
    border-radius: var(--radius);
    display: block;
    height: 100%;
    width: 100%;
  }
  img {
    object-fit: contain !important;
  }
  h5 {
    font-size: 1rem;
    line-height: 1rem;
    margin-bottom: 0;
  }
  .name {
    font-size: 0.75rem;
    line-height: 1.1rem;
    white-space: pre-line;
  }
  .product-size {
    > span {
      background: var(--clr-grey-9);
    }
    > span.oz{
      padding-left: 7px;
    }
  }
  .price-small {
    line-height: 1.3rem;
    color: var(--clr-purple-txt);
  }
  .quantity-btns {
    width: 65px;
    button {
      font-size: 0.75rem;
      height: 0.5rem;
      width: 1rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
  .remove-btn {
    align-items: center;
    background: var(--clr-black);
    border: transparent;
    border-radius: var(--radius);
    color: var(--clr-white);
    cursor: pointer;
    display: flex;
    font-size: 0.75rem;
    height: 1.5rem;
    justify-content: center;
    letter-spacing: var(--spacing);
    width: 1.5rem;
  }
  .title {
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 65px 125px;
    height: 100%;
    text-align: left;
  }
  @media (min-width: 776px) {
    & {
      grid-template-columns: 1fr 1fr 1fr 1fr auto;
    }
    img {
      height: 100%;
    }
    .name {
      font-size: 0.9rem;
    }
    .price-small {
      display: none;
    }
    .price,
    .subtotal {
      display: block;
      margin-bottom: 0;
    }
    .quantity-btns {
      width: 100px;
      button {
        font-size: 1rem;
        height: 1rem;
        width: 1.5rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
    .title {
      grid-template-columns: 90px 200px;
    }
  }
`

export default CartItem
