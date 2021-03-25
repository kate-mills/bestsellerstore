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
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 7rem;
    margin-bottom: 1.5rem;
  }
  h2, h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 3.5rem;
  }
`

export default SuccessPage
