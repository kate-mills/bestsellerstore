import React  from 'react'
//import reducer from '../reducers/cart_reducer'
//import { ADD_TO_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS, } from '../actions'

//const initialState = {}

const CartContext = React.createContext()
const addToCart = ()=>{console.log('addToCart')}

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value={addToCart}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return React.useContext(CartContext)
}
