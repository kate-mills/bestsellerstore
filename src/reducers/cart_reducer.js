import { ADD_TO_CART, } from '../actions'

/*import { CLEAR_CART, COUNT_CART_TOTALS, REMOVE_CART_ITEM, TOGGLE_CART_ITEM_AMOUNT, } from '../actions'*/

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART){
    const { id, size, quantity, item } = action.payload
    const tempItem = state.cart.find(i => i.id === id + size)

    if(!tempItem){
      console.log('no tempItem', id, size, quantity, item)
    } else{
      console.log('found tempItem', tempItem)
    }
    return {...state}
  }

  //throw new Error(`No Matching "${action.type}" - action type`)
  return state
}

export default cart_reducer
