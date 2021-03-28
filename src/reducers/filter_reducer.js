/* eslint-disable no-unreachable */
import {
  LOAD_ITEMS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_ITEMS,
} from '../actions'

const filter_reducer = (state, action) => {

  if(action.type === SET_GRIDVIEW){
    return {...state, grid_view: true}
  }
  if(action.type === SET_LISTVIEW){
    return {...state, grid_view: false}
  }
  if(action.type === LOAD_ITEMS){
    return{...state, all_items:[...action.payload], filtered_items:[...action.payload]}
  }
  if(action.type === UPDATE_SORT){
    return {...state, sort: action.payload}
  }
  if(action.type === SORT_ITEMS){
    const {sort, filtered_items} = state
    let tempItems = [...filtered_items]
    console.log('tempItems', tempItems)

    if(sort === 'price-highest'){
      tempItems = tempItems.sort((a, b) => b.node.retailPrice - a.node.retailPrice)
    }
    if(sort === 'price-lowest'){
      tempItems = tempItems.sort((a, b) => a.node.retailPrice - b.node.retailPrice)
    }
    if(sort === 'name-a'){
      tempItems = tempItems.sort((a, b)=>{
        return a.node.name.localeCompare(b.node.name);
      })
    }
    if(sort === 'name-z'){
      tempItems = tempItems.sort((a, b)=>{
        return b.node.name.localeCompare(a.node.name);
      })
    }
    return {...state, filtered_items:tempItems}
  }
  return state
  //throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer




/*

  UPDATE_FILTERS,
  FILTER_ITEMS,
  CLEAR_FILTERS,

*/


