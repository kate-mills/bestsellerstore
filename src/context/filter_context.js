import React from 'react'
import reducer from '../reducers/filter_reducer'
import { useProductsContext } from './products_context'

import{
  LOAD_ITEMS,
} from '../actions'

/*import {
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_ITEMS,
  UPDATE_FILTERS,
  FILTER_ITEMS,
  CLEAR_FILTERS,
} from '../actions'*/


const initialState = {
  filtered_items:[],
  all_items:[],
  grid_view: false,
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {all_items} = useProductsContext()

  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(()=>{
    dispatch({type:LOAD_ITEMS, payload:all_items})
  }, [all_items])

  return (
    <FilterContext.Provider value={{...state}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return React.useContext(FilterContext)
} 

