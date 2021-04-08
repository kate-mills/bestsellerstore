import React, { useReducer, useContext, createContext, useEffect } from 'react'
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from './products_context'

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
} from '../actions'

const initialState = {
  all_items: [],
  filtered_items: [],
  skintype_list: [],
  itemtype_list: [],
  search_close: true,
  search_items: [],
  searchStr: '',
  grid_view: true,
  sort: 'name-a',
  filters: {
    displayContent:false,
    category: 'all',
    max_price: 0,
    min_price: 0,
    onSale: false,
    price: 0,
    skintype: 'all',
    text: '',
    categorySelect: '---CATEGORY---',
    skintypeSelect: '---SKIN TYPE---',
  },
}

const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const { all_items } = useProductsContext()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    dispatch({type:LOAD_ITEMS, payload: all_items})
  }, [all_items])

  useEffect(() => {
    let run = true
    if(run){
      dispatch({ type: FILTER_ITEMS })
      dispatch({ type: SORT_ITEMS })
    }
    return () => {run=false}
  }, [state.sort, state.filters])

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW })
  }
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW })
  }
  const updateSort = e => {
    const value = e.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }
  const updateFilters = e => {
    var name = e.target.name
    var value = e.target.value
    if (name === 'category') {
      value = e.target.textContent
    }
    if (name === 'skintype') {
      value = e.target.textContent
    }
    if (name === 'price') {
      value = Number(value)
    }
    if (name === 'onSale') {
      value = e.target.checked
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } })
  }
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS })
  }
  const updateSearch = (searchStr) => {
    dispatch({ type: SEARCH_ITEM_LIST, payload:{searchStr}})
  }
  const clearSearch = () => {
    dispatch({ type: CLEAR_SEARCH })
  }

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
        updateSearch,
        clearSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
