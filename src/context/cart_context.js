//import { ADD_TO_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS, } from '../actions'

import React  from 'react'

import reducer from '../reducers/cart_reducer'

import {ADD_TO_CART,} from '../actions'

import {checkWindow} from '../utils/helpers'


const getLocalStorage = () => {
  if(checkWindow()){
    let cart = localStorage.getItem('beststorecart');
    if(cart){
      return JSON.parse(localStorage.getItem('beststorecart'));
    }else{
      return [];
    }
  }
  return [];
}

const initialState = {
  cart: getLocalStorage(),
  total_quantity: 0,
  total_price: 0,
  shipping_fee: 534,
  fixed_max:12,
}

const CartContext = React.createContext()


export const CartProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const addToCart = (id, size, quantity, price, item, localId)=>{
    dispatch({type: ADD_TO_CART, payload:{id, size, quantity, price, item, localId}})
  }

  return (
    <CartContext.Provider value={{...state, addToCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return React.useContext(CartContext)
}
