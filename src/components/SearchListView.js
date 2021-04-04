import React from 'react'
import { useFilterContext } from '../context/filter_context'
import SearchGrid from './SearchGrid'

const SearchList = () => {
  const {search_items} = useFilterContext();
  if(search_items.length < 1){
    return (
      <h5 style={{textTransform: 'none', textAlign: 'left', marginLeft: '10%', marginTop:'10px', fontSize: '1.2rem'}}>Sorry, no items match your search ...</h5>
    )
  }
  return (
    <SearchGrid items={search_items}/>
  )
}

export default SearchList 
