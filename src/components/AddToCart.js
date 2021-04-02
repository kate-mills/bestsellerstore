import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { useCartContext } from '../context/cart_context'
import {useProductsContext} from '../context/products_context'
import QuantityButtons from './QuantityButtons'

const AddToCart = ({item, id, sizes=['retail'], stockQuantity=12, priceMap=null}) => {


  const {addToCart} = useCartContext()
  const {focus_price, setFocusPrice} = useProductsContext()

  const [quantity, setQuantity] = useState(1)
  const [mainSize, setMainSize] = useState(sizes[0])
  const [sizeName, setSizeName] = useState('')

  React.useEffect(()=>{
    if(priceMap!== null){
      setMainSize(priceMap[0].size) // 1.7 oz or 0.25 oz
      setSizeName(priceMap[0].name) // retail or travel
    }
  }, [priceMap])
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
        <span className="heading">size:</span>
        <div>{
          priceMap ? 
            priceMap.map(({name, size, price, id, cid})=>{
            return(
              <button
                key={id}
                className={`${mainSize === size? 'size-btn active': 'size-btn'}`}
                style={{background: `${mainSize===size? 'var(--clr-primary-11)': 'white'}`}}
                onClick={()=>{
                  setMainSize(size)
                  setSizeName(name)
                  setFocusPrice(price/100)
                }}>
                {size}
              </button>
            )}): // IF NO PRICE MAP
          sizes.map((size, index)=>{
            return(
              <button
                key={index}
                className={`${mainSize === size? 'size-btn active': 'size-btn'}`}
                style={{background: `${mainSize===size? 'lavenderblush': 'white'}`}}
                onClick={()=>{setMainSize(size)}}>
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
          onClick={()=>{
            addToCart(id, mainSize, sizeName, quantity, focus_price,  item)
          }}
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
    grid-template-columns: 50px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span.heading{
      font-family: 'bree';
      font-size: 1.1rem;
      font-weight: 300;
      line-height: 28px;
      height: 2.5rem;
      text-transform: capitalize;
    }
    div {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .size-btn {
    align-items: center;
    border: 1.5px solid transparent;
    border-bottom: 4.5px solid transparent;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    font-weight: 300;
    height: 2.5rem;
    justify-content: center;
    margin-right: 1.5rem;
    outline-color: transparent;
    padding: 0.25rem;
    min-width: fit-content;
    width: 3.5rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
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
