/* eslint-disable no-unreachable */
import {
  LOAD_ITEMS,
} from '../actions'

const filter_reducer = (state, action) => {

  if(action.type === LOAD_ITEMS){
    return{...state, all_products:[...action.payload], filter_products:[...action.payload]}
  }
  return state
  //throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer




/*

  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_ITEMS,
  UPDATE_FILTERS,
  FILTER_ITEMS,
  CLEAR_FILTERS,

*/


