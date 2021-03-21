import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink/Fade"
import { Layout } from '../components'

const SuccessPage = () => {
  return (
    <Layout>
      <Wrapper className="page-100">
        <section>
          <h1>Thank You!</h1>
          <h3>Hilary will get back to you as soon as she can.</h3>
          <AniLink fade to="/" className="btn">
            Back to Homepage
          </AniLink>
        </section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 8rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default SuccessPage
