import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { useCartContext } from '../context/cart_context'
import QuantityButtons from './QuantityButtons'

const AddToCart = ({item, id, sizes=[], stockQuantity=12}) => {
  const {addToCart} = useCartContext()

  const [mainSize, setMainSize] = useState(sizes[0])
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
      <div className="sizes">
        <span>size:</span>
        <div>{
          sizes.map((size, index)=>{
            return(
              <button
                key={index}
                className={`${mainSize === size? 'size-btn active': 'size-btn'}`}
                style={{background: `${mainSize===size? 'lavenderblush': 'white'}`}}
                onClick={()=>setMainSize(size)}>
                {size}
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
        <Link
          to="/cart"
          onClick={()=>addToCart(id, mainSize, quantity, item)}
          className="btn"
        >add to cart</Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .sizes {
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
  .size-btn {
    align-items: center;
    font-size: 1.20rem;
    border: 1.5px solid transparent;
    border-bottom: 4.5px solid transparent;
    cursor: pointer;
    display: flex;
    height: 2.5rem;
    justify-content: center;
    margin-right: 1.5rem;
    outline-color: transparent;
    padding: 0.25rem;
    min-width: fit-content;
    width: 3.5rem;
  }
  .active {
    border-bottom: 4.5px solid var(--clr-primary-1);
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
