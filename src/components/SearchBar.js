/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

import SearchList from './SearchListView'


const SearchBar = ()=>{
  const textRef = React.useRef()
  const {searchStr, updateSearch, clearSearch} = useFilterContext()
  return(
    <>
      <Wrapper className={`${(searchStr.length >0) ? 'add-margin':''}`}>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div className='form-control'>
            <input
              ref={textRef}
              type='text'
              name='searchStr'
              autoComplete="off"
              placeholder='Search the store'
              className='search-input'
              value={searchStr}
              onChange={updateSearch}
            />
            <button tabIndex="0" type="button"
              className={`${searchStr.length>0? 'show-btn clear-btn':'hide-btn clear-btn'}`} 
              onClick={(e)=>{
                clearSearch()
                textRef.current.focus()
              }}
            >clear</button>

          </div>
          {/* end search input */}
        </form>
        {/*eslint-disable-next-line jsx-a11y/click-events-have-key-events*/}
    </Wrapper>
      { (!!searchStr.length)?<SearchList tabIndex="0" role="button" aria-label='Clear search filter' onClick={clearSearch}/>:null }
    </>
  )
}


const Wrapper = styled.div`
  &{
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
  &.add-margin{
    margin-bottom: 2rem;
  }
  & .form-control {
    text-align: center;
    margin: 0 auto;
  }
  & .search-input {
    background: var(--clr-grey-10);
    border: 1px solid transparent;
    border-radius: var(--radius);
    border-color: transparent !important;
    color: var(--clr-black);
    font-size: 1rem;
    line-height: 24px;
    margin: 0 auto;
    outline-color: transparent !transparent;
    padding: 12px 5px 12px 25px;
    width: 85%;
    z-index: 1;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  & .search-input::placeholder{
    color: #bdbdbd;
  }
  & .search-input:visited,
  & .search-input:focus-within,
  & .search-input:focus-visible,
  & .search-input:active,
  & .search-input:focus{
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
    outline: none;
    padding: 12px 2px;
    margin: 0 auto 0 0;
    transition: var(--transition);
  }
  & .clear-btn:focus{
    border-color:hsl(0deg 0% 87% / 83%);
  }
  & .show-btn{
    border-color: var(--clr-grey-11);
    background: var(--clr-grey-10);
    outline: none;
    color: #212529;
  }
  & .hide-btn{
    cursor-events: disabled;
    color: transparent;
  }
  & .hideList{
    display: none;
  }
  @media(max-width: 450px){
    .search-input{
      width: 70%;
    }
  }
`
export default SearchBar 
