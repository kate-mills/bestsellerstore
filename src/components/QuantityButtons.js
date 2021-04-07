import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const QuantityButtons = ({ quantity, increase, decrease }) => {
  return (
    <Wrapper className="quantity-btns">
      <button
        type="button"
        className="quantity-btn"
        onClick={decrease}
        aria-label="decrease"
      >
        <FaMinus />
      </button>
      <h2 className="quantity">{quantity}</h2>
      <button
        type="button"
        className="quantity-btn"
        onClick={increase}
        aria-label="increase"
      >
        <FaPlus />
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  width: 140px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  h2 {
    margin-bottom: 0;
  }
  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    padding: 1rem 0;
    width: 2rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-bottom: 0;
  }
`
export default QuantityButtons
