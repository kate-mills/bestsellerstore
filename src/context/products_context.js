import { graphql, useStaticQuery } from 'gatsby'

import React, { useContext, useReducer, createContext } from 'react'
import reducer from '../reducers/products_reducer'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE, SET_FOCUS_PRICE } from '../actions'

const query = graphql`
  {
    allItems: allContentfulMccProduct(
      filter: { removeFromActiveLists: { ne: true } }
      sort: { fields: name, order: ASC }
    ) {
      itemtypeList: distinct(field: category)
      skintypeList: distinct(field: skinType)
      edges {
        node {
          id
          sizes
          stars
          reviewCount
          retailPrice
          category
          slug
          name
          shortName
          featured
          skinTypeBadge
          skinTypeList: skinType
          priceMap {
            id
            name
            size
            price
          }
          skinType
          onSale
          description {
            description
          }
          imgRetail {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
          video
          keyIngredients {
            name {
              formatted
            }
            benefit
          }
          award
          awardImage {
            gatsbyImageData(width: 100, height: 100)
          }
        }
      }
    }
    featuredItems: allContentfulMccProduct(
      filter: { featured: { eq: true } }
      limit: 3
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          id
          retailPrice
          slug
          name
          shortName
          imgRetail {
            gatsbyImageData(placeholder: TRACED_SVG)
          }
        }
      }
    }
    distinctList: allContentfulMccProduct {
      itemtypeList: distinct(field: category)
      skintypeList: distinct(field: skinType)
    }
  }
`
const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  all_items: [],
  featured_items: [],
  itemtype_list: [],
  skintype_list: [],
  focus_price: 0,
}

const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const {
    allItems,
    featuredItems,
    distinctList: { itemtypeList, skintypeList },
  } = useStaticQuery(query)

  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  const setFocusPrice = price => {
    dispatch({
      type: SET_FOCUS_PRICE,
      payload: { price },
    })
  }

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setFocusPrice,
        all_items: allItems,
        featured_items: featuredItems.edges,
        itemtypes: itemtypeList,
        skintypes: skintypeList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductsContext)
}
