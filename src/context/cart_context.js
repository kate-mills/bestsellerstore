import React, {useEffect, createContext, useContext, useReducer}  from 'react'
import reducer from '../reducers/cart_reducer'

import {
  ADD_TO_CART,
  TOGGLE_CART_ITEM_QUANTITY,
  CLEAR_CART,
  REMOVE_CART_ITEM,
  COUNT_CART_TOTALS,
} from '../actions'

import {checkWindow} from '../utils/helpers'


const getLocalStorage = () => {
  if(checkWindow()){
    let cart = localStorage.getItem('skincarewebstorecart');
    if(cart){
      return JSON.parse(localStorage.getItem('skincarewebstorecart'));
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

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, size, sizeName, quantity, price, item)=>{
    dispatch({type: ADD_TO_CART, payload:{id, size, sizeName, quantity, price, item}})
  }
  const removeItem = (id) =>{
    dispatch({type: REMOVE_CART_ITEM, payload:{id}})
  }
  const toggleQuantity = (id, value)=>{
    dispatch({type: TOGGLE_CART_ITEM_QUANTITY, payload: {id: id, value:value}})
  }
  const clearCart = ()=>{
    dispatch({type: CLEAR_CART})
  }
  useEffect(()=>{
    dispatch({type:COUNT_CART_TOTALS})
    localStorage.setItem('skincarewebstorecart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{
      ...state, addToCart, removeItem, toggleQuantity, clearCart
    }}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
