/* eslint-disable no-unreachable */
import {
  LOAD_ITEMS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_ITEMS,
  UPDATE_FILTERS,
  FILTER_ITEMS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_ITEMS){
    let maxPrice = action.payload.map(({node})=>{
      return node.retailPrice
    })
    maxPrice = Math.max(...maxPrice)
    return{
      ...state,
      all_items:[...action.payload],
      filtered_items:[...action.payload],
      filtered_count: action.payload.length,
      filters:{
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    }
  }
  if(action.type === SET_GRIDVIEW){
    return {...state, grid_view: true}
  }
  if(action.type === SET_LISTVIEW){
    return {...state, grid_view: false}
  }
  if(action.type === UPDATE_SORT){
    return {...state, sort: action.payload}
  }
  if(action.type === SORT_ITEMS){
    const {sort, filtered_items} = state
    let tempItems = [...filtered_items]
    if(sort === 'price-lowest'){
      tempItems = tempItems.sort((a, b) => a.node.retailPrice - b.node.retailPrice)
    }
    if(sort === 'price-highest'){
      tempItems = tempItems.sort((a, b) => b.node.retailPrice - a.node.retailPrice)
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
  if(action.type === UPDATE_FILTERS){
    const {name, value} = action.payload
    return {...state, filters: {...state.filters, [name]:value}}
  }
  if(action.type === FILTER_ITEMS){
    const {all_items} = state
    const {category, max_price, onSale, price, skintype, text}= state.filters
    let tempItems = [...all_items]

    // SEARCH BOX
    if(text){
      tempItems = tempItems.filter(({node})=>{
        return (node.name.toLowerCase().indexOf(text.toLowerCase()) >= 0); // fuzzy search
      })
    }

    // CATEGORIES
    if(category !== '---Select---'){
      tempItems = tempItems.filter(({node}) =>{
        return (node.category.toLowerCase() === category)
      })
    }

    // SKINTYPES
    if(skintype !== '---Select---'){

      tempItems = tempItems.filter(({node})=>{
        return node.skinTypeBadge.find((s) => s === skintype)
      })
    }

    // PRICE
    if(price < max_price){
      tempItems = tempItems.filter(({node}) => node.retailPrice <= price)
    }

    // ON SALE
    if(onSale){
      tempItems = tempItems.filter(({node}) => node.onSale === true)
    }

    return {...state, filtered_items: tempItems, filtered_count: tempItems.length}
  }
  if(action.type === CLEAR_FILTERS){
    return {
      ...state,
      filtered_count: 0,
      filters: {
        ...state.filters,
        text:'',
        category: '---Select---',
        onSale: false,
        price: state.filters.max_price,
        skintype: '---Select---',
      }
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
