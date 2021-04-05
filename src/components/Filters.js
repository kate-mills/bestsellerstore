/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import styled from 'styled-components'
import { GrClear } from 'react-icons/gr'
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
      <div className="top-btn-div">
        <button className="btn toggle-btn" type="button" onClick={toggleDisplay}>
          {displayContent?<>Hide Filters</>:<>Show Filters</>}
        </button>
        <button tabIndex="0" type="button" className='clear-btn' onClick={clearFilters}><GrClear className="clear"/></button>
      </div>
      {
        <div className={`${displayContent?'content filters-visible':'content filters-hidden'}`}>
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
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  & .top-btn-div{
    align-items: center;
    background: whitesmoke;
    border: 1px solid silver;
    display:flex;
    flex-dirction: row;
    justify-content: space-around;
    width: 100%;
    > button:focus, > button{
      border: none;
      box-shadow: unset;
      color: var(--clr-black);
      cursor: pointer;
      font-family: var(--font-body);
      font-size: 1.15rem;
      font-weight: var(--font-weight-body);
      letter-spacing: var(--spacing);
      line-height: normal;
      outline: none;
      outline-color: transparent;
      text-transform: capitalize;
    }
    > .toggle-btn,
    > .toggle-btn:active,
    > .toggle-btn:focus{
      background: whitesmoke;
      border-right: 1px solid silver;
      padding: .25rem .5rem;
      width: 80%;
    }
    >.clear-btn,
    >.clear-btn:active,
    >.clear-btn:focus,
    >clear-btn:hover{
      transition: var(--transition);
      svg.clear{
        position: relative;
        top: 3px;
        right: 2px;
        > path{stroke:darkgrey;}
      }
    }
    >.clear-btn:hover{
      transform: rotateZ(45deg);
    }
  }

  .flexible-div, form, .form-control, .content
  .content.filters-hidden,.content.filters-visible{
    background: whitesmoke;
  }
  .content.filters-visible{
    height: 180px;
    transition: var(--transition);
    form{
      min-height: fit-content;
    }
  }
  .content.filters-hidden{
    height: 0;
    transition: var(--transition);
    form{
      visibility: hidden;
    }
  }
  .form-control {
    margin-bottom: 1.25rem;
    h5, label{
      color: var(--clr-black);
      text-transform: uppercase;
      font-size: 1.1rem;
      padding-right: 1rem;
      margin-bottom: 0;
    }
  }
  .active {
    border-color: var(--clr-grey-10);
    opacity: 1;
  }
  input.onSale {
    align-items: center;
    color: black;
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: center;
    text-transform: capitalize;
    width: 100%;
  }
  .select{
    border-color: silver;
    border-radius: var(--radius);
    font-family: 'proxima-nova';
    font-size: 1rem;
    letter-spacing: var(--spacing);
    line-height: normal;
    margin: 0 auto;
    outline-color: silver;
    padding: 0.45rem;
    text-transform: capitalize;
    width: 100%;
  }
  .select:active,
  .select:focus {
    background: hsl(201deg 55% 38% / 7%);
  }
  .flexible-div{
    align-items: center;
    display: grid;
    grid-template-rows: 100px 80px;
    line-height: normal;
    place-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) {
    .content {
      margin-bottom: 1rem;
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
    &{margin-bottom:2rem;}
    .flexible-div{
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media(max-width: 400px){
    &{margin-bottom: 4rem;}
    .flexible-div{
      grid-template-columns: 1fr;
      margin: 0 auto;
      text-align:center;
      justify-content: center;
      align: items: center;
      .form-control{
        text-align: center;
      } 
    }
  }

`

export default Filters
