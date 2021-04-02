import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const PageHero = ({ title, shop, isLongName=false, showCount }) => {

  return (
    <>
    <Wrapper>
      <div className="section-center">
        <h3><Link to="/">Home</Link>
          {shop && <Link to="/shop">/ Shop</Link> }
          /<span className={`${isLongName? 'title long': 'title'}`}> {title}
          </span>
        </h3>
      </div>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-9);
  margin-top: 0.125rem;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-4d);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  .title{
    font-size: inherit;
  }
  .long{
    font-size: 1.5rem;
  }
  .count{ margin-left: 1rem; }
  @media(max-width: 500px){
    min-height: 15vh;
  }
`

export default PageHero
