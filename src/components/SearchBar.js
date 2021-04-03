/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

import ProductList from './ProductList'
import { useLocation } from "@reach/router"


const SearchBar = ()=>{
  const textRef = React.useRef()
  const {updateFilters, clearFilters, setGridView, filters:{
    text
  }} = useFilterContext()
  const {pathname} = useLocation()
  const notShopPage = pathname.slice(1, 5) !== 'shop'
  React.useEffect(()=>{
    clearFilters()
    setGridView()
  }, [])
  return(
    <>
    <Wrapper>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='form-control'>
            <input
              ref={textRef}
              type='text'
              name='text'
              autoComplete="off"
              placeholder='Search the store'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
            <button tabIndex="0" type="button"
              className={`${text.length>0? 'show-btn clear-btn':'hide-btn clear-btn'}`} 
              onClick={(e)=>{
                clearFilters()
                textRef.current.focus()
              }}
            >clear</button>

          </div>
          {/* end search input */}
        </form>
        {/*eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
    </Wrapper>
      {
        ((!!text.length && notShopPage) &&< ProductList tabIndex="0" role="button" aria-label='Clear search filter' onClick={clearFilters}/>)
      }
    </>
  )
}


const Wrapper = styled.aside`
  
  & .form-control {
    text-align: center;
    margin: 0 auto;
  }
  & .search-input {
    background: var(--clr-grey-10);
    border: 1px solid var(--clr-grey-1);
    border-radius: var(--radius);
    border-color: transparent;
    font-size: 1rem;
    line-height: 24px;
    margin: 0 auto;
    padding: 12px 25px;
    width: 80%;
    z-index: 1;
  }
  & .search-input::placeholder{
    color: #bdbdbd;
  }
  & .search-input:visited,
  & .search-input:focus-within,
  & .search-input:focus-visible,
  & .search-input:active,
  & .search-input:focus{
    outline-color: transparent !important;
    background: var(--clr-grey-10);
    color: #212529;
  }
  & .clear-btn{
    background: var(--clr-grey-10);
    border: 1px solid var(--clr-grey-1);
    border-radius: var(--radius);
    border-color: transparent;
    font-size: 1rem;
    color: transparent;
    font-family: 'proxima-nova';
    font-size: 1rem;
    line-height: 24px;
    outline-color: transparent;
    padding: 12px 25px;
    margin: 0 auto 0 0;
    transition: var(--transition);
  }
  & .show-btn{
    border-color:hsl(0deg 0% 87% / 83%);
    background: var(--clr-grey-10);
    color: #212529;
  }
  & .hide-btn{
    cursor-events: disabled;
    color: transparent;
  }
  & .hideList{
    display: none;
  }
`
export default SearchBar 
