import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from '../actions'

// import axios from 'axios'
// import { products_url as url } from '../utils/constants'
/*
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
*/

const initialState = {
  isSidebarOpen: false,
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {dispatch({type: SIDEBAR_OPEN})} 
  const closeSidebar = () => {dispatch({type: SIDEBAR_CLOSE})} 

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}

