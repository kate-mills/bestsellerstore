import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <>
    <Wrapper>
      <h6>
        &copy;{new Date().getFullYear()}
        <span className="proxima">SkincareWebstore</span>
      </h6>
      <h6>All rights reserved</h6>
    </Wrapper>
      <p className="ally">Built by <a href="https://allydigitalsolutions.com">Ally Digital Solutions</a></p>
    </>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  & span.proxima {
    font-family: 'proxima-nova';
    color: var(--clr-primary-9);
    letter-spacing: 0px;
    text-transform: capitalize;
  }
  h6 {
    color: var(--clr-white);
    margin: 0.1rem;
    text-transform: none;
    letter-spacing: var(--spacing);
    line-height: 1.25;
    font-family: 'bree';
    font-size: 1rem;
    font-weight: 300;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
