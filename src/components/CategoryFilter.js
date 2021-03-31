import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues } from '../utils/helpers'

const Filters = ()=>{
  const { filters:{
      text,
      category,
    },
    updateFilters, clearFilters, all_items } = useFilterContext()

  const categories = getUniqueValues(all_items, 'category', 'all')

  return (
    <Wpr>
      <div className='content'>
        <form onSubmit={(e)=>e.preventDefault()}>

          {/* search input */}
          <div className="form-control">
            <input
              tabIndex={0}
              autoComplete="off"
              type="text"
              name="text"
              placeholder="search filtered products"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}

          {/* category btn filters */}
          <div className="form-control">
            <h5>Category</h5>
            <div>
              {categories.map((c, i)=>{
                return(
                  <button
                    tabIndex={0}
                    key={i}
                    name="category"
                    type="button"
                    className={`${
                      category === c.toLowerCase() ? 'active': null
                    }`}
                    onClick={updateFilters}>
                    {c}
                  </button>
                )
              })}
            </div>
          </div>
          {/* end cateogory btn filters */}
        </form>
        <button tabIndex="0" type="button" className='clear-btn' onClick={clearFilters}>clear filters</button>
      </div>
    </Wpr>
  )
}

const Wpr = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      color: var(--clr-primary-1);
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    color: var(--clr-black);
    font-size: 1rem;
    letter-spacing: var(--spacing);
    padding: 0.5rem;
    position: relative;
    right: 1rem;
  }
  .search-input::placeholder {
    text-transform: capitalize;
    font-size: .73rem;
  }
  button {
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    color: var(--clr-black);
    cursor: pointer;
    display: block;
    font-family: 'proxima-nova';
    font-size: 1.15rem;
    letter-spacing: var(--spacing);
    margin: 0.25em 0;
    outline-color: transparent;
    padding: 0.25rem 0;
    text-transform: capitalize;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .skintype {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    letter-spacing: var(--spacing);
    margin-bottom: 0.25rem;
  }
  .onSale {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-primary-2);
    color: var(--clr-white);
    padding: 0.35rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
