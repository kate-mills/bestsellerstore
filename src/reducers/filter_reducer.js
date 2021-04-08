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
  SEARCH_ITEM_LIST,
  CLEAR_SEARCH,
  TOGGLE_FILTER_DISPLAY,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_ITEMS) {
    const { edges, itemtypeList, skintypeList } = action.payload
    let maxPrice = action.payload.edges.map(({ node }) => {
      return node.retailPrice
    })
    maxPrice = Math.max(...maxPrice)
    return {
      ...state,
      all_items: [...edges],
      filtered_items: [...edges],
      search_items: [...edges],
      itemtype_list: ['---CATEGORY---', ...itemtypeList],
      skintype_list: ['---SKIN TYPE---', ...skintypeList],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    }
  } // END LOAD_ITEMS
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_ITEMS) {
    const { sort, filtered_items } = state
    let tempItems = [...filtered_items]
    if (sort === 'price-lowest') {
      tempItems = tempItems.sort(
        (a, b) => a.node.retailPrice - b.node.retailPrice
      )
    }
    if (sort === 'price-highest') {
      tempItems = tempItems.sort(
        (a, b) => b.node.retailPrice - a.node.retailPrice
      )
    }
    if (sort === 'name-a') {
      tempItems = tempItems.sort((a, b) => {
        return a.node.name.localeCompare(b.node.name)
      })
    }
    if (sort === 'name-z') {
      tempItems = tempItems.sort((a, b) => {
        return b.node.name.localeCompare(a.node.name)
      })
    }
    return { ...state, filtered_items: tempItems }
  }
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }
  if (action.type === FILTER_ITEMS) {
    const { all_items } = state
    const {
      category,
      max_price,
      onSale,
      price,
      skintype,
      text,
      categorySelect,
      skintypeSelect,
    } = state.filters

    let tempItems = [...all_items]
    // SEARCH BOX
    if (text) {
      tempItems = tempItems.filter(({ node }) => {
        return node.name.toLowerCase().indexOf(text.toLowerCase()) >= 0 // fuzzy search
      })
    }
    // CATEGORIES
    if (category !== 'all') {
      tempItems = tempItems.filter(({ node }) => {
        return node.category.toLowerCase() === category
      })
    } else if (categorySelect !== '---CATEGORY---') {
      tempItems = tempItems.filter(({ node }) => {
        return node.category.toLowerCase() === categorySelect
      })
    }
    // SKINTYPES
    if (skintype !== 'all') {
      tempItems = tempItems.filter(({ node }) => {
        return node.skinTypeBadge.find(s => s === skintype)
      })
    } else if (skintypeSelect !== '---SKIN TYPE---') {
      tempItems = tempItems.filter(({ node }) => {
        return node.skinTypeList.find(s => s === skintypeSelect)
      })
    }
    //PRICE
    if (price < max_price) {
      tempItems = tempItems.filter(({ node }) => node.retailPrice <= price)
    }
    // ON SALE
    if (onSale) {
      tempItems = tempItems.filter(({ node }) => node.onSale === true)
    }
    return {
      ...state,
      filtered_items: tempItems,
    }
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        onSale: false,
        price: state.filters.max_price,
        skintype: 'all',
        categorySelect: '---CATEGORY---',
        skintypeSelect: '---SKIN TYPE---',
      },
    }
  }
  if (action.type === SEARCH_ITEM_LIST) {
    const { all_items } = state
    const {searchStr} = action.payload
    let tempItems = [...all_items]
    if (searchStr) {
      tempItems = tempItems.filter(({ node }) => {
        return node.name.toLowerCase().indexOf(searchStr.toLowerCase()) >= 0 // fuzzy search
      })
    }
    return { ...state, search_items: tempItems, search_close:false  }
  }
  if (action.type === CLEAR_SEARCH) {
    return {
      ...state,
      search_close:true,
      search_items: [],
    }
  }
  if (action.type === TOGGLE_FILTER_DISPLAY){
    let displayContent = !state.filters.displayContent
    return{
      ...state,
      filters:{
        ...state.filters,
        displayContent
      }
    }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
