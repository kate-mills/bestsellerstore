import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const PageHero = ({ title, shop }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3><Link to="/">Home</Link>
          {shop && <Link to="/shop">/ Shop</Link> }
          / {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-primary-11);
  margin-top: 0.125rem;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-5);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
