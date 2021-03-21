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
          <h1>checkout here</h1>
        </Wrapper>
      </main>
    </Layout>
  )
}
const Wrapper = styled.div``
export default CheckoutPage
