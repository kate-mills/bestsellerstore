/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import styled from 'styled-components'
//import { TiDelete, } from 'react-icons/ti'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues} from '../utils/helpers'
const defaultSelectValue = '---Select---'

const Filters = ()=>{
  const { filters:{
      categorySelect,
      skintypeSelect,
      onSale,
    },
    updateFilters, clearFilters, all_items } = useFilterContext()
  const skintypes = getUniqueValues(all_items, 'skinTypeBadge','---SKIN TYPE---', true)
  const categories = getUniqueValues(all_items, 'category', '---CATEGORY---')
  const [displayContent, setDisplayContent] = React.useState(false)
  const toggleDisplay =()=>{setDisplayContent(!displayContent)}

  return (
    <Wrapper>
      <div className="top-btn-div" style={{background: 'whitesmoke' }}>
        <button className="btn toggle-btn" type="button" onClick={toggleDisplay}>
          {displayContent?<>Hide Filters</>:<>Show Filters</>}
        </button>
        <button tabIndex="0" type="button" className='clear-btn' onClick={clearFilters}><span className="clear">x</span></button>
      </div>
      {
        displayContent && (<div className='content'>
        <form onSubmit={(e)=>e.preventDefault()}>
          {/* categories */}
          <div className="flexible-div">{/* start flexible div */}
          <div className="form-control">
            <select
              name="categorySelect"
              value={categorySelect}
              onBlur={updateFilters}
              onChange={updateFilters}
              className={`${categorySelect !== defaultSelectValue? 'select hilight': 'select default'}`}>
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
            <select
              name="skintypeSelect"
              value={skintypeSelect}
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
  & .top-btn-div{
    background: whitesmoke;
    display:flex;
    width: 100%;
    flex-dirction: row;
    justify-content: space-around;
    > button:focus, > button{
      background: whitesmoke;
      background: #f2f2f2;
      box-shadow: unset;
      color: var(--clr-black);
      border: none;
      cursor: pointer;
      line-height: normal;
      font-family: var(--font-body);
      font-size: 1.15rem;
      font-weight: var(--font-weight-body);
      letter-spacing: var(--spacing);
      outline: none;
      outline-color: transparent;
      text-align: center;
      text-transform: capitalize;
    }
    > .toggle-btn,
    > .toggle-btn:active,
    > .toggle-btn:focus,
    > .clear-btn,
    > .clear-btn:active,
    > .clear-btn:focus {
      background: whitesmoke;
      border: 1px solid silver;
      color: var(--clr-primary-1);
      border-radius: var(--radius);
      padding: .25rem .5rem;
    }
  }
  form{
    background: var(--clr-grey-10);
  }
  .form-control {
    background: var(--clr-grey-10);
    margin-bottom: 1.25rem;
    h5, label{
      background: var(--clr-grey-10);
      color: var(--clr-primary-1);
      font-family: var(--font-title);
      font-weight: var(--font-weight-title);
      font-size: 1.1rem;
      padding-right: 1rem;
      padding-left: 0.7rem;
      line-height: normal;
      margin-bottom: 0;
    }
  }
  .active {
    border-color: var(--clr-grey-10);
    opacity: 1; 
  }
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
  .select{
    background: var(--clr-grey-10);
    border-color: silver;
    border-radius: var(--radius);
    outline-color: silver;
    font-family: 'proxima-nova';
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    text-transform: capitalize;
    width: 100%;
  }
  .select:active,
  .select:focus {
    background: hsl(201deg 55% 38% / 7%);
  }
  .flexible-div{
    align-items: center;
    background: whitesmoke;
    display: grid;
    grid-template-rows: 100px;
    place-items: center;
    line-height: normal;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: .1rem;
    }
  }
  @media(max-width: 767px){
    .flexible-div{
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 1.5rem;
    }
  }
  @media(max-width: 650px){
    .flexible-div{
      grid-template-columns: repeat(2, 1fr);
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
      } 
    }
  }

`

export default Filters
