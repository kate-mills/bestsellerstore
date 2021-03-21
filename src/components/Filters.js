import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = () => {
  const { filters:{
      text,
      category,
      color,
      min_price,
      max_price,
      price,
      onSale,
    },
    updateFilters, clearFilters, all_items } = useFilterContext()

  const categories = getUniqueValues(all_items, 'category')
  const colors = getUniqueValues(all_items, 'colors', {isArray: true})

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e)=>e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* end search input */}
          {/* categories */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {
                categories.map((c, index)=>{
                  return(
                    <button
                      key={index}
                      className={`${category === c.toLowerCase() ? 'active': null}`}
                      onClick={updateFilters}
                      name="category"
                      type="button"
                    >{c}</button>
                  )
              })
              }
            </div>
          </div>
          {/* end categories */}
          {/* companies  - Hilay doesnt have more than 1 company
          <div className="form-control">
            <h5>Company</h5>
            <div>
            <select name="company" value={company} onChange={updateFilters} className="company">
              {
                companies.map((c, index)=>{
                  return (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  )
              })
              }
            </select>
            </div>
          </div>
           end companies */}
          {/* colors */}
          <div className="form-control">
            <h5>Colors</h5>
            <div className="colors">
              { colors.map((c, index)=>{
                if(c === 'all'){
                  return(
                    <button
                      name='color'
                      onClick={updateFilters}
                      data-color="all"
                      className={`${ color==='all' ? 'all-btn active': 'all-btn' }`}
                      key={index}
                    >all</button>
                  )
                }
                return(<button
                    name='color'
                    value={c}
                    key={index}
                    data-color={c}
                    onClick={updateFilters}
                    style={{background: c}}
                    className={`${color === c? 'color-btn active': 'color-btn'}`}
                  >{color === c ? <FaCheck/>: null}</button>
                )
              })
              }
            </div>
          </div>
          {/* end colors */}
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          {/* end price */}
          {/* onSale */}
          <div className="form-control onSale">
            <label htmlFor="onSale">on sale</label>
            <input
              type='checkbox'
              name='onSale'
              id='onSale'
              checked={onSale}
              onChange={updateFilters}
            />
          </div>
          {/* end onSale */}
        </form>
    <button type="button" className='clear-btn' onClick={clearFilters}>clear filters</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
    outline-color: transparent;

  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
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
    padding: 0.25rem 0.5rem;
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
