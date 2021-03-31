import { ADD_TO_CART, } from '../actions'

import {getSafeCount} from '../utils/helpers'
export const getSafeQty = getSafeCount.bind(this, 12) // Always returns a number between 1-12


/*import { CLEAR_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, } from '../actions'*/

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
  } // END ADD_TO_CART

  throw new Error(`No Matching "${action.type}" - action type`)//return state
}

export default cart_reducer
