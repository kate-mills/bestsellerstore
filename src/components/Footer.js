import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy;{new Date().getFullYear()}
        <span className="proxima">SkincareWebstore</span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
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
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
