import React, {useReducer, useContext, createContext, useEffect} from 'react'
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from './products_context'

/*eslint-disable-next-line no-unused-vars */
import{
  LOAD_ITEMS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_ITEMS,
  UPDATE_FILTERS,
  FILTER_ITEMS,
  CLEAR_FILTERS,
} from '../actions'

const initialState = {
  all_items: [],
  filtered_items: [],
  filtered_count: 0,
  grid_view: true,
  sort: 'name-a',
  filters: {
    category: '---Select---',
    max_price: 0,
    min_price: 0,
    onSale: false,
    price: 0,
    skintype: '---Select---',
    text: '',
  }
}


const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const {all_items} = useProductsContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    dispatch({type: LOAD_ITEMS, payload: all_items})
  }, [all_items])

  useEffect(()=>{
    dispatch({type: FILTER_ITEMS})
    dispatch({type: SORT_ITEMS})
  }, [all_items, state.sort, state.filters])

  const setGridView = () => {
    dispatch({type: SET_GRIDVIEW})
  }
  const setListView = () => {
    dispatch({type: SET_LISTVIEW})
  }

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({type:  UPDATE_SORT, payload: value})
  }
  const updateFilters = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    //if(name==='category'){ value = e.target.textContent }
    if(name==='skintype_btn'){
      name  = 'skintype'
      value = e.target.textContent
    }
    else if(name==='price'){
      value = Number(value)
    }
    else if(name==='onSale'){
      value = e.target.checked
    }
    dispatch({type: UPDATE_FILTERS, payload: {name, value}})
  }
  const clearFilters = () => {
    dispatch({type: CLEAR_FILTERS})
  }

  return (
    <FilterContext.Provider value={{
      ...state,
      setGridView,
      setListView,
      updateSort,
      updateFilters,
      clearFilters,
      }}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
