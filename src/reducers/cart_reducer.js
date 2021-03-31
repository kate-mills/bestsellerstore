import {
  ADD_TO_CART,
  CLEAR_CART,
  TOGGLE_CART_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
  COUNT_CART_TOTALS,
} from '../actions'

import {getSafeCount} from '../utils/helpers'
export const getSafeQty = getSafeCount.bind(this, 12) // Always returns a number between 1-12

const cart_reducer = (state, action) => {

  if(action.type === ADD_TO_CART){
    const { id, size, sizeName, quantity, price, item} = action.payload
    const TARGET_ID = id + size.replace(' ', '-')
    const tempItem = state.cart.find(i => i.id === TARGET_ID)

    if(tempItem){
      let tempCart = state.cart.map((cartItem, index)=>{
        if(cartItem.id === TARGET_ID){
          let safeQty = getSafeQty(cartItem.quantity + quantity)
          return { ...cartItem, quantity: safeQty};
        }
        return cartItem;
      })
      return {...state, cart:tempCart}
    }
    else {
      let nmSz = `${item.shortName || item.name} - ${sizeName}`
      const newItem = {
        id: TARGET_ID,
        image: item.imgRetail.gatsbyImageData, 
        name: nmSz || item.shortName || item.name,
        price,
        quantity: getSafeQty(quantity),
        size,
      }
      return {...state, cart: [...state.cart, newItem]}
    }
  }// END ADD_TO_CART

  if(action.type === CLEAR_CART){
    return {...state, cart:[]}
  }// END CLEAR_CART

  if(action.type === TOGGLE_CART_ITEM_QUANTITY){
    const {id, value} = action.payload
    const tempCart = state.cart.map((item) =>{
      if(item.id === id){
        if(value === 'inc'){
          return {...item, quantity: getSafeQty(item.quantity + 1)}
        }
        if(value === 'dec'){
          return {...item, quantity: getSafeQty(item.quantity - 1)}
        }
      }
      return item
    })
    return { ...state, cart: tempCart }
  }// END TOGGLE_CART_ITEM_QUANTITY

  if(action.type === REMOVE_CART_ITEM){
    const tempCart = state.cart.filter(item => item.id !== action.payload)
    return { ...state, cart: tempCart }
  }// END REMOVE_CART_ITEM

  if(action.type === COUNT_CART_TOTALS){
    const {total_price, total_quantity} = state.cart.reduce(
      (total, item) =>{
        const {price, quantity} = item;
        total.total_price += (price * quantity) * 100
        total.total_quantity += quantity
        return total
    },{total_price: 0, total_quantity: 0})

    return {...state, total_price, total_quantity}
  }// END COUNT_CART_TOTALS

  throw new Error(`No Matching "${action.type}" - action type`)//return state
}

export default cart_reducer
