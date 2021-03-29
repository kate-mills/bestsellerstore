import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filters = ()=>{
  const {filters:{
    text,
    category,
    max_price,
    min_price,
    price,
    shipping,
    skintype,
  }, updateFilters, clearFilters, all_items} = useFilterContext()

  const skintypes = getUniqueValues(all_items, 'skinTypeBadge','---Select---', true)
  const categories = getUniqueValues(all_items, 'category', 'all')
  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e)=>e.preventDefault()}>
          {/* search input */}
          <div className="form-control">
            <input
              autocomplete="off"
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
            <h5>Category</h5>
            <div>
              {categories.map((c, i)=>{
                return(
                  <button
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
          {/* end categories */}
          {/* skintypes */}
          <div className="form-control">
            <h5>Skin Type</h5>
            <select
              name="skintype"
              value={skintype}
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
        </form>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      color: var(--clr-primary-1);
      margin-bottom: 0.5rem;
      font-size: 1.35rem;
      font-weight: 300;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-black);
    outline-color: var(--clr-primary-5);
    font-family: 'proxima-nova';
  }
  .search-input::placeholder {
    text-transform: capitalize;
    font-family: 'proxima-nova';
  }
  button {
    display: block;
    letter-spacing: 1.25px;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
    font-family: 'proxima-nova';
    outline-color: var(--clr-primary-5);
  }
  .active {
    border-color: var(--clr-grey-5);
    outline-color: var(--clr-primary-5);
  }
  .skintype {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: 1.25px;
    padding: 0.25rem;
    text-transform: capitalize;
    font-family: 'proxima-nova';
    outline-color: var(--clr-primary-5);
  }
  .colors {
    display: flex;
    align-items: center;
    outline-color: var(--clr-primary-5);
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
      outline-color: var(--clr-primary-5);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
    outline-color: var(--clr-primary-5);
  }
  .active {
    opacity: 1;
    outline-color: var(--clr-primary-5);
  }
  .all-btn .active {
    text-decoration: underline;
    outline-color: var(--clr-primary-5);
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
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
