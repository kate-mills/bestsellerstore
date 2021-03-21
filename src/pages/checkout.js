import React from 'react'
import styled from 'styled-components'
import { SEO, Layout, PageHero } from '../components'
const CheckoutPage = () => {
  return (
    <Layout>
      <SEO title="Checkout" />
      <main>
        <PageHero title="checkout" />
        <Wrapper className="page">
          <h1 className="stencil">Checkout Here</h1>
        </Wrapper>
      </main>
    </Layout>
  )
}
const Wrapper = styled.div`
  h1{
    text-align: center;
  }
  
`
export default CheckoutPage

