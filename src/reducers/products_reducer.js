/* eslint-disable no-unreachable */

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_ITEMS_BEGIN,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  SET_FOCUS_PRICE,
} from '../actions'


const products_reducer = (state, action) => {
  if(action.type===SIDEBAR_OPEN){
    return{...state, isSidebarOpen:true};
  }

  if(action.type === SIDEBAR_CLOSE){
    return{...state, isSidebarOpen:false};
  }
  if(action.type === SET_FOCUS_PRICE){
    return {...state, focus_price: action.payload.price}
  }

  if(action.type === GET_ITEMS_BEGIN){
    return{...state, products_loading: true}
  }
  if(action.type === GET_ITEMS_SUCCESS){
    const featured_products = action.payload.filter((product, id)=>{
      return product.featured === true
    })
    return{...state, products_loading: false, products: action.payload, featured_products}
  }
  if(action.type === GET_ITEMS_ERROR){
    return{...state, products_loading: false, products_error: true}

  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer

