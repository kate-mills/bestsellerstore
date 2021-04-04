import React from 'react'
import {ProductsProvider} from './src/context/products_context'
import { FilterProvider } from './src/context/filter_context'
import { CartProvider } from './src/context/cart_context'

export const wrapRootElement = ({ element }) => {
  return (
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              {element}
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
  )
}

//import 'fontsource-raleway/400.css'
//import { UserProvider } from './src/context/user_context'

