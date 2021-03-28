import React, {useEffect} from 'react'
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
  filtered_items:[],
  all_items:[],
  grid_view: true,
  sort: 'name-a',
  filters:{
    text:'',
    category: 'all',
    skintype: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  }
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
  const {all_items} = useProductsContext()

  const [state, dispatch] = React.useReducer(reducer, initialState);


  useEffect(()=>{
    dispatch({type:LOAD_ITEMS, payload:all_items})
  }, [all_items])

  useEffect(()=>{
    dispatch({type: FILTER_ITEMS})
    dispatch({type: SORT_ITEMS})
  }, [all_items, state.sort, state.filters])


  const setGridView = ()=>{
    dispatch({type: SET_GRIDVIEW})
  }
  const setListView = ()=>{
    dispatch({type: SET_LISTVIEW})
  }
  const updateSort = (e) =>{
    //const name = e.target.name
    const value = e.target.value// 'price-highest'
    dispatch({type: UPDATE_SORT, payload: value})
  }
  const updateFilters = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    if(name==='category'){
      value = e.target.textContent
    }
    dispatch({type: UPDATE_FILTERS, payload:{name, value}})
  }
  const clearFilters = ()=>{}

  return (
    <FilterContext.Provider value={{...state, setGridView, setListView, updateSort, updateFilters, clearFilters}}>
      {children}
    </FilterContext.Provider>
  )
}

// make sure use
export const useFilterContext = () => {
  return React.useContext(FilterContext)
} 
