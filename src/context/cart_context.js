//import { ADD_TO_CART, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, CLEAR_CART, COUNT_CART_TOTALS, } from '../actions'

import React, {useEffect, createContext, useContext, useReducer}  from 'react'

import reducer from '../reducers/cart_reducer'

import {ADD_TO_CART,} from '../actions'

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
  const removeItem = (id) =>{}
  const toggleQty = (id, value)=>{}
  const clearCart = ()=>{}

  useEffect(()=>{
    localStorage.setItem('skincarewebstorecart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{...state, addToCart, removeItem, toggleQty, clearCart}}>{children}</CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
