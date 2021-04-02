import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'

const Filters = ()=>{
  const { filters:{
      category,
      skintype,
      min_price,
      max_price,
      price,
      onSale,
    },
    updateFilters, clearFilters, all_items, filtered_count } = useFilterContext()
  const skintypes = getUniqueValues(all_items, 'skinTypeBadge','---Select---', true)
  const categories = getUniqueValues(all_items, 'category', '---Select---')

  return (
    <Wpr>

      <div className='content'>
        <form onSubmit={(e)=>e.preventDefault()}>
          {/* categories */}
          <div className="flexible-div">{/* start flexible div */}
          <div className="form-control">
            <h5>Category</h5>
            <select
              name="category"
              value={category}
              onBlur={updateFilters}
              onChange={updateFilters}
              className="select">
              {
                categories.map((c, i)=>{
                return(
                  <option key={i} value={c}>
                    {c}
                  </option>
                )
                })
              }
            </select>
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
              className="select"
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
            <h5 className="price">Max price <span> {formatPrice(price/100)}</span></h5>
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
        <span className="count">{filtered_count} Found</span>
        <button tabIndex="0" type="button" className='clear-btn' onClick={clearFilters}>clear filters</button>
          </div> {/* end flexible div */}
          {/* end onSale */}
        </form>
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
  .active { opacity: 1; }
  .price {
    letter-spacing: var(--spacing);
    margin-bottom: 0.25rem;
    >span{
      font-family: 'proxima-nova';
      margin-left: 20px;
      color: hsl(256deg 14% 51%);
    }
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
  .select{
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    font-family: 'proxima-nova';
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    text-transform: capitalize;
  }
  .select:active,
  .select:focus {
    background: hsl(201deg 55% 38% / 7%);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: .1rem;
    }
    .select {
      width: 100%;
    }
  }
  .count{
    background: hsl(253deg 13% 51% / 13%);
    display: inherit;
    padding: 0.1rem 0 0.35rem;
    letter-spacing: var(--spacing);
    font-family: 'bree';
    font-weight: 200;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  @media(max-width: 767px){
    .flexible-div{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 100px;
      grid-column-gap: 1.5rem;
      align-items: center;
      justify-content: center;
    }
  }
  @media(max-width: 650px){
    .flexible-div{
      grid-template-columns: repeat(2, 1fr);
    }
    .count{
      margin-bottom: unset;
    }
  }
  @media(max-width: 550px){
    .flexible-div{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media(max-width: 400px){
    .flexible-div{
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: .5rem;
    }
  }

`

export default Filters
