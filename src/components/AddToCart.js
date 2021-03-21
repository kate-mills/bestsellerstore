import React, {useState} from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import QuantityButtons from './QuantityButtons'

const AddToCart = ({item, id, colors, stockQuantity}) => {
  const {addToCart} = useCartContext()

  const [mainColor, setMainColor] = useState(colors[0])
  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    setQuantity((prevQuantity)=>{
      let tempQuantity = prevQuantity + 1
      if(tempQuantity > stockQuantity){
        tempQuantity = stockQuantity
      }
      return tempQuantity
    })
  }
  const decrease = () => {
    setQuantity((prevQuantity)=>{
      let tempQuantity = prevQuantity - 1
      if(tempQuantity < 1){
        tempQuantity = 1
      }
      return tempQuantity
    })
  }

  return (
    <Wrapper>
      <div className="colors">
        <span>colors:</span>
        <div>{
          colors.map((color, index)=>{
            return(
              <button
                key={index}
                className={`${mainColor === color? 'color-btn active': 'color-btn'}`}
                style={{background: color}}
                onClick={()=>setMainColor(color)}>
                {mainColor === color ? <FaCheck/>: null}
              </button>
            )})
          }</div>
      </div>

      <div className="btn-container">
        <QuantityButtons
          quantity={quantity}
          increase={increase}
          decrease={decrease}
        />
        <AniLink
          fade
          to="/cart"
          onClick={()=>addToCart(id, mainColor, quantity, item)}
          className="btn"
        >add to cart</AniLink>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    outline-color: var(--clr-primary-4);
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
