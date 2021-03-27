import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const ProductList = () => {
  const {filtered_items:items, grid_view} = useFilterContext();
  if(items.length < 1){
    return (
      <h5 style={{textTransform: 'none'}}>Sorry, no items match your search ...</h5>
    )
  }
  if(grid_view === false){
    return <ListView items={items}/>
  }
  return (
    <GridView items={items}/>
  )
}

export default ProductList
