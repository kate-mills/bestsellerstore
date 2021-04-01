import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

import ProductList from './ProductList'


const SearchBar = ()=>{
  const {updateFilters, clearFilters, filters:{
    text
  }} = useFilterContext()

  return(
    <>
    <Wrapper>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='form-control'>
            <input
              type='text'
              name='text'
              autoComplete="off"
              placeholder='Search'
              className='search-input'
              value={text}
              onChange={updateFilters}
            />
            <button tabIndex="0" type="button"
              className={`${text.length>0? 'show-btn clear-btn':'hide-btn clear-btn'}`} 
              onClick={(e)=>{
                console.log('e', e)
                clearFilters()
              }}
            >clear</button>

          </div>
          {/* end search input */}
        </form>
        {/*eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
        {(!!text.length) &&<div tabIndex="0" role="button" aria-label='Clear search filter' onClick={clearFilters} className="list">
        <ProductList/>
      </div>}
    </Wrapper>

    </>
  )
}


const Wrapper = styled.aside`

  .form-control {
    margin-left: 2rem;
    margin-top: 0.5rem;
  }
  .search-input {
    color: #212529;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    border-color: var(--clr-primary-5d);
    font-family: 'proxima-nova';
    font-size: 1rem;
    letter-spacing: var(--spacing);
    line-height: 24px;
    padding: .5rem;
  }
  .search-input::placeholder {
  }
  .search-input:active,
  .search-input:focus{
    background: hsl(201deg 55% 38% / 7%);
  }
  .clear-btn{
    background: var(--clr-white);
    border-color: transparent;
    border-radius: var(--radius);
    color: transparent;
    font-family: 'proxima-nova';
    font-size: 1rem;
    outline-color: transparent;
    padding: 0.50rem 0.5rem;
    transition: var(--transition);
    cursor-events: disabled;
  }
  .show-btn{
    border-color: var(--clr-primary-5d);
    color: #212529;
  }
  .hide-btn{
    cursor-events: disabled;
    color: transparent;
  }
  .hideList{
    display: none;
  }
  .list{
    cursor: default;
    opacity: 1;
    z-index: 100000;
    background: white;
    position: absolute;
    left: 1rem;
    top: 5.68rem;
    width: 75%;
    padding: 1rem;
    border: 3px solid var(--clr-primary-5);
  }
`
export default SearchBar 
