import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const PageHero = ({ title, shop }) => {

  return (
    <Wrapper>
      <div className="section-center">
        <h3><Link to="/">Home</Link>
          {shop && <Link to="/shop">/ Shop</Link> }
          /<span className="title"> {title}
          </span>
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  align-items: center;
  background: var(--clr-primary-9);
  color: var(--clr-primary-1);
  display: flex;
  margin-top: 0.125rem;
  min-height: 20vh;
  width: 100vw;
  a {
    color: var(--clr-primary-4d);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-5d);
  }
  h3{
    margin-bottom: unset;
    > a,
    > .title{
      font-family: var(--font-title);
      font-size: inherit;
      font-weight: 700;/* font-title span */
      line-height: 2rem;
    }
  }
  @media(max-width: 500px){
    min-height: 15vh;
  }
`
export default PageHero
