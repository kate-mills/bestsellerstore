import { graphql, useStaticQuery } from 'gatsby'

import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
} from '../actions'

const query = graphql`
  {
    allItems: allContentfulMccProduct (sort: {fields: name, order: ASC}) {
      nodes {
        id
        retailPrice
        category
        slug
        name
        featured
        skinTypeBadge
        skinType
        description {
          description
        }
        imgRetail {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
        video
        keyIngredients {
          id
          benefit
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
    featuredItems: allContentfulMccProduct(filter: {featured: {eq: true}}, limit:6) {
      nodes {
        id
        stars
        reviewCount
        category
        retailPrice
        slug
        name
        imgRetail {
          gatsbyImageData(placeholder: TRACED_SVG)
        }
      }
    }
  }`



const initialState = { isSidebarOpen: false, products_loading: false, products_error: false, all_items: [], featured_items: [] };

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const { allItems, featuredItems } = useStaticQuery(query);
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar =  () => { dispatch({ type: SIDEBAR_OPEN }) };
  const closeSidebar = () => { dispatch({ type: SIDEBAR_CLOSE }) };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        all_items: allItems,
        featured_items: featuredItems,
      }}>
      {children}
    </ProductsContext.Provider>
  )
};

export const useProductsContext=()=>{return useContext(ProductsContext)};
