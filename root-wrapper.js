import React from 'react'
import 'fontsource-raleway/400.css'
import './src/components/layout.css'

import { ProductsProvider } from './src/context/products_context'
//import { FilterProvider } from './src/context/filter_context'
//import { CartProvider } from './src/context/cart_context'
//import { UserProvider } from './src/context/user_context'


export const wrapRootElement = ({ element }) => {
  return (
        <ProductsProvider>
              {element}
        </ProductsProvider>
  )
}
