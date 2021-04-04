import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <>
    <Wrapper>
      <h6>
        &copy;{new Date().getFullYear()}
        <span className="cursive"> SkincareWebstore</span>
      </h6>
      <h6>All rights reserved</h6>
    </Wrapper>
      <div className="ally"><a style={{fontFamily: 'var(--font-title)'}} href="https://allydigitalsolutions.com">Built By  Ally Digital Solutions</a></div>
    </>
  )
}

const Wrapper = styled.footer`
  align-items: center;
  background: var(--clr-black);
  display: flex;
  flex-direction: column;
  height: 5rem;
  justify-content: center;
  text-align: center;
  & span.cursive {
    color: var(--clr-primary-9);
    font-family: var(--font-cursive);
    font-size: 1.3rem;
    letter-spacing: 0px;
    margin: 0 0.3rem;
    text-transform: capitalize;
  }
  h6 {
    color: var(--clr-white);
    font-family: var(--font-title);
    font-size: 0.8rem;
    font-weight: var(--font-title-weight); /* h6 */
    letter-spacing: var(--spacing);
    line-height: 1.25;
    margin: 0.1rem;
    text-transform: none;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
