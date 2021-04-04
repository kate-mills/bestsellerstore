import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { Layout } from '../components'

const SuccessPage = () => {
  return (
    <Layout>
      <Wrapper className="page-100">
        <section>
          <h1>Success!</h1>
          <h2>You're a Best Sellers Beauty Insider!</h2>
          <h3>You'll get the latest on new products, specials, and much more!</h3>
          <Link to="/" className="btn">
            Back to Homepage
          </Link>
        </section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  align-items: center;
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  padding: 0 1rem;
  text-align: center;
  h1 {
    font-family: var(--font-cursive);
    font-weight: var(--font-weight-cursive);
    font-size: 4rem;
    line-height: normal;
    margin-bottom: 1.5rem;
    padding: 0 2rem;
  }
  h2, h3 {
    margin: 0 auto 2rem;
    padding: 0 1rem;
  }
  h3 {
    margin-bottom: 3.5rem;
  }
  a{
    line-height: normal;
    margin-bottom: 1rem;
  }
`

export default SuccessPage
