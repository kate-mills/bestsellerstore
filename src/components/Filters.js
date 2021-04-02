import React from 'react'
import styled from 'styled-components'
import {
  BsCaretDown,
  BsCaretUp,
} from 'react-icons/bs'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues} from '../utils/helpers'

const Filters = ()=>{
  const { filters:{
      category,
      skintype,
      onSale,
    },
    updateFilters, clearFilters, all_items, filtered_count } = useFilterContext()
  const skintypes = getUniqueValues(all_items, 'skinTypeBadge','---Select---', true)
  const categories = getUniqueValues(all_items, 'category', '---Select---')
  const [displayContent, setDisplayContent] = React.useState(false)
  const toggleDisplay =()=>{setDisplayContent(!displayContent)}

  return (
    <Wrapper>
      <div className="top-btn-div">
        <button tabIndex="0" type="button" className='clear-btn' onClick={clearFilters}>clear filters</button>
        <button className="btn toggle-btn" type="button" onClick={toggleDisplay}>
          {displayContent?
            <><span className="btn-content">Hide Filters</span><BsCaretUp className="up-icon icon"/></>:
            <><span className="btn-content">Show Filters</span><BsCaretDown className="down-icon icon"/></>
          }
        </button>
      </div>
      <span style={{display: 'block', textAlign: 'center', color: 'var(--clr-primary-3)', fontSize: '1rem', background: 'var(--clr-grey-10)'}}>{filtered_count} Found</span>
      {
        displayContent && (<div className='content'>
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
          </div> {/* end flexible div */}
          {/* end onSale */}
        </form>
      </div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  transition: var(--transition) !important;
  .icon {
    position: relative;
  }
  .up-icon{
    top: .1rem;
  }
  .down-icon{
    top: .3rem;
  }
  .btn-content{
    position:relative;
    left: 5px;
  }
  .form-control {
    margin-bottom: 1.25rem;
    h5, label{
      color: var(--clr-primary-1);
      font-family: 'bree';
      font-size: 1.1rem;
      font-weight: 200;
    }
    h5 {
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
  .toggle-btn,
  .clear-btn {
    background: var(--clr-primary-2);
    color: var(--clr-white);
    padding: 0.35rem 0.5rem;
    border-radius: var(--radius);
    width: 100%;
  }
  .clear-btn{
    background: var(--clr-red-dark);
  }
  .toggle-btn{
    display: grid;
    grid-template-columns: 150px auto;
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
  .select {
      width: 100%;
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: .1rem;
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
    .top-btn-div{
      display:flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .toggle-btn,
    .clear-btn {
    }
    .toggle-btn{
      max-width: 200px;
      min-width: 200px;
      width: 50%;
      display: grid;
      grid-template-columns: 150px auto;
    }
    .clear-btn{
      max-width: 200px;
      min-width: 200px;
      width: 40%;
    }
  }
  @media(max-width: 650px){
    .flexible-div{
      grid-template-columns: repeat(2, 1fr);
      .clear-btn{ margin-right: 1rem; }
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
      grid-template-columns: 1fr;
      margin: 0 auto;
      text-align:center;
      justify-content: center;
      align: items: center;
      .form-control{
        text-align: center;
        margin: 1rem auto;
        .clear-btn{ margin: 0 auto;}
      } 
    }
  }

`

export default Filters
