import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Layout, PageHero, MySeo } from '../components'

const AboutPage = ({
  data: {
    img: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) => {
  return (
    <Layout>
      <MySeo />
      <main>
        <PageHero title="about" />
        <Wrapper className="page section section-center">
          <GatsbyImage
            image={gatsbyImageData}
            alt="Display of random makeup products on pink background."
          />
          <article>
            <div className="title">
              <h2>our story</h2>
              <div className="underline"></div>
              <p>
                Dad, this is where your paragraph goes. We need to write
                something about us, and why we're starting the store.
              </p>
            </div>
          </article>
        </Wrapper>
      </main>
    </Layout>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  .gatsby-image-wrapper {
    display: block;
    height: 500px;
    object-fit: contain;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const query = graphql`
  {
    img: file(relativePath: { eq: "about/bubbles.png" }) {
      childImageSharp {
        gatsbyImageData(height: 300)
      }
    }
  }
`
export default AboutPage
