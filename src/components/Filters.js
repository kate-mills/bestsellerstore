import React, {useState} from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'

const Filters = ()=>{
  const { filters:{
      text,
      category,
      skintype,
      min_price,
      max_price,
      price,
      onSale,
    },
    updateFilters, clearFilters, all_items } = useFilterContext()
  const [showCategory, setShowCategory] = useState(false)

  const skintypes = getUniqueValues(all_items, 'skinTypeBadge','---Select---', true)
  const categories = getUniqueValues(all_items, 'category', 'all')
  const tglCategory = ()=>{setShowCategory(!showCategory)}

  return (
    <Wpr>
      <div className='content'>

        <form onSubmit={(e)=>e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              tabIndex="0"
              autoComplete="off"
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
            <h5>
              <button className="toggle-filter" type="button" onClick={tglCategory}>show categories</button>
            </h5>
            {showCategory &&(
            <div>
              { categories.map((c, i)=>{
                return(
                  <button
                    tabIndex="0"
                    key={i}
                    name="category"
                    type="button"
                    className={`${
                      category === c.toLowerCase() ? 'active': null
                    }`}
                    onClick={(e)=>{
                      tglCategory()
                      updateFilters(e)
                    }}>
                  {c}</button>
                )
              })}
            </div>
            )}
            <div className="current-cat">{category}</div>
          </div>
          {/* end categories */}
          {/* skintypes */}
          <div className="form-control">
            <h5>Skin Type</h5>
            <select
              name="skintype"
              value={skintype}
              onBlur={updateFilters}
              onChange={updateFilters}
              className="skintype"
            >
              {
                skintypes.map((st, i)=>{
                return(
                  <option key={i} value={st}>
                    {st}
                  </option>
                )
                })
              }
            </select>
          </div>
          {/* end skintypes */}
          {/* price */}
          <div className="form-control">
            <h5>price</h5>
            <p className="price">{formatPrice(price/100)}</p>
            <input
              tabIndex="0"
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
              tabIndex="0"
              type='checkbox'
              name='onSale'
              id='onSale'
              checked={onSale}
              onChange={updateFilters}
            />
          </div>
          {/* end onSale */}
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
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
  }
  .toggle-filter{
    font-family: 'bree';
    font-size: 1rem;
    background: white;
    font-weight: 200;
    margin-left: -1rem;
    padding: 0.35rem 0.5rem;
  }
  .toggle-filter:hover{
  }
  .current-cat{
    background: lavender;
    width: fit-content;
    text-transform: capitalize;
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
